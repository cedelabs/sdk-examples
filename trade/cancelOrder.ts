import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (orderId: string, customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? await initExchange();
  const { api } = cedeSDK;
  const { cancelOrder } = api;

  const data = await cancelOrder({
    exchangeInstanceId,
    orderId: orderId ?? "1234132",
    pairSymbol: "ETH/USDT",
  });

  return data;
};
