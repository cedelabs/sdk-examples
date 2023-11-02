import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (orderId?: string, customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { updateOrder } = cedeSDK.api;

  const data = await updateOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderId: orderId ?? "13960869081",
    amount: "0.2",
  });

  return data;
};
