import CedeSDK from "@cedelabs/demo-sdk";
import { exchanges } from "./exchanges";

const SDK_MODE = "MOCK";
const SELECTED_EXCHANGE = "bybit";

const clientId = "sdk-***"; // update with your clientId if using with "REAL" SDK_MODE

export const cedeSDK = new CedeSDK(SDK_MODE ?? "MOCK");

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
