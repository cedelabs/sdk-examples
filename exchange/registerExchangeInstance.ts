import { exchanges } from "../exchange";
import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { registerExchangeInstance } = api;

  const exchange = exchanges[process.env.SELECTED_EXCHANGE ?? ""];
  const registeredExchange = await registerExchangeInstance({
    exchangeId: process.env.SELECTED_EXCHANGE ?? "",
    ...exchange,
  });

  return registeredExchange;
};
