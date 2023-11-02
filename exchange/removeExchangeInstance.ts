import { exchanges } from "../exchange";
import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { registerExchangeInstance, removeExchangeInstance } = cedeSDK.api;

  const exchange = exchanges[process.env.SELECTED_EXCHANGE ?? ""];
  const { exchangeInstanceId } = await registerExchangeInstance({
    exchangeId: process.env.SELECTED_EXCHANGE ?? "",
    ...exchange,
  });

  await removeExchangeInstance(exchangeInstanceId);
};
