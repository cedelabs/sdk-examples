import { exchanges } from "../exchanges";
import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { registerExchangeInstance } = cedeSDK.api;

  const exchange = exchanges[process.env.SELECTED_EXCHANGE ?? "binance"];
  const registeredExchange = await registerExchangeInstance({
    exchangeId: process.env.SELECTED_EXCHANGE ?? "binance",
    ...exchange,
  });

  return registeredExchange;
};
