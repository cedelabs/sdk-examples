import { getPrompt, rl } from ".";
import CedeSDK from "./sdk";

export type SdkConfig = {
  selectedMode: string;
  exchanges: string[];
  cedeSDK: CedeSDK | null;
  selectedExchange: string;
};

export const initializeSDK = async (mode = "demo", config: SdkConfig, clientId?: string) => {
  config.selectedMode = mode;
  rl.setPrompt(getPrompt());
  const exchanges: string[] = [];
  if (clientId === "sdk-***" && mode !== "demo") {
    throw new Error("Client ID is required in REAL mode. Please, contact Cede Labs team to get one.");
  }

  const cedeSDK = new CedeSDK(mode === "demo" ? "MOCK" : "REAL", {
    clientId: clientId ?? "sdk-***",
  });

  const supportedExchanges = (await cedeSDK.api.getSupportedExchanges()).map((exchange) => exchange.id);

  if (mode !== "demo") {
    try {
      const exchangesCredentials = await import("./exchanges");
      const exchangesCreds = exchangesCredentials?.exchanges;

      if (!exchangesCreds) {
        throw new Error("No exchanges found in exchanges.ts");
      }

      const unsupportedExchanges = Object.keys(exchangesCreds).filter(
        (exchange) => !supportedExchanges.includes(exchange),
      );
      if (unsupportedExchanges.length) {
        throw new Error(`Unsupported exchanges found: ${unsupportedExchanges.join(", ")}`);
      }

      const result = await Promise.allSettled(
        Object.entries(exchangesCreds).map(async ([exchangeId, exchangeCredentials]) => {
          await cedeSDK.api.registerExchangeInstance({
            existingExchangeInstanceId: exchangeId,
            exchangeId,
            ...exchangeCredentials,
          });
          exchanges.push(exchangeId);
        }),
      );

      // print errors if any
      result.forEach((res, index) => {
        if (res.status === "rejected") {
          const exchangeId = Object.keys(exchangesCreds)[index];
          console.log(`  🚧 [${exchangeId}] not available.\n     error: ${res.reason?.message}`);
        }
      });
    } catch (e) {
      console.log(e);
      if (mode === "real") {
        throw new Error(
          "exchanges.ts not found. Copy exchanges.example.ts to exchanges.ts and update with your API keys",
        );
      }
    }
  } else {
    await Promise.all(
      supportedExchanges.map(async (exchangeId) => {
        await cedeSDK.api.registerExchangeInstance({
          existingExchangeInstanceId: exchangeId,
          exchangeId,
        });
        exchanges.push(exchangeId);
      }),
    );
  }

  config.exchanges = exchanges;
  config.cedeSDK = cedeSDK;
};
