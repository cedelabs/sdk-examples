import CedeSDK from "@cedelabs/demo-sdk";
import { CONFIG } from "./config";

const { SELECTED_EXCHANGE, SDK_MODE, CLIENT_ID } = CONFIG;

export const cedeSDK = new CedeSDK(SDK_MODE ?? "MOCK", {
  clientId: CLIENT_ID,
});

export const initExchange = async (specificExchange = "coinbase") => {
  const selectedExchange = SELECTED_EXCHANGE ?? specificExchange;
  let exchanges: Record<string, object> = {};
  try {
    const exchangesCredentials = await import("./exchanges");
    exchanges = exchangesCredentials?.exchanges;
  } catch (e) {
    if (SDK_MODE === "REAL") {
      throw new Error(
        "exchanges.ts not found. Copy exchanges.example.ts to exchanges.ts and update with your API keys",
      );
    }
  }

  function assertIsExchangeKey(key: string): key is keyof typeof exchanges {
    return key in exchanges;
  }

  if (SDK_MODE === "REAL" && !assertIsExchangeKey(selectedExchange)) {
    throw new Error(`Exchange ${selectedExchange} not found`);
  }

  const exchange = exchanges?.[selectedExchange] ?? {};

  const registeredExchange = await cedeSDK.api.registerExchangeInstance({
    exchangeId: SELECTED_EXCHANGE ?? specificExchange,
    ...exchange,
  });

  return registeredExchange.exchangeInstanceId;
};
