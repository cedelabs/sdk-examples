import { exchanges } from "../exchanges";
import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { registerExchangeInstance, isRegistered } = cedeSDK.api;

  const exchange = exchanges[process.env.SELECTED_EXCHANGE ?? "binance"];
  const { exchangeInstanceId } = await registerExchangeInstance({
    exchangeId: process.env.SELECTED_EXCHANGE ?? "binance",
    ...exchange,
  });

  return await isRegistered(exchangeInstanceId);
};
