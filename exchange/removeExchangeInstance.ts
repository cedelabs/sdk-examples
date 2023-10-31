import { exchanges } from "../exchange";
import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { registerExchangeInstance, removeExchangeInstance } = api;

  const exchange = exchanges[process.env.SELECTED_EXCHANGE ?? ""];
  const { exchangeInstanceId } = await registerExchangeInstance({
    exchangeId: process.env.SELECTED_EXCHANGE ?? "",
    ...exchange,
  });

  await removeExchangeInstance(exchangeInstanceId);
};
