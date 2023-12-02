import CedeSDK from "@cedelabs/demo-sdk";
import { exchanges } from "./exchanges";

const { CEDE_MODE, SELECTED_EXCHANGE } = process.env;

export const cedeSDK = new CedeSDK(CEDE_MODE ?? "MOCK");

export const initExchange = async (specificExchange = "coinbase") => {
  const selectedExchange = SELECTED_EXCHANGE ?? specificExchange;

  function assertIsExchangeKey(key: string): key is keyof typeof exchanges {
    return key in exchanges;
  }

  if (!assertIsExchangeKey(selectedExchange)) {
    throw new Error(`Exchange ${selectedExchange} not found`);
  }

  const exchange = exchanges[selectedExchange];
  const registeredExchange = await cedeSDK.api.registerExchangeInstance({
    exchangeId: SELECTED_EXCHANGE ?? specificExchange,
    ...exchange,
  });

  return registeredExchange.exchangeInstanceId;
};
