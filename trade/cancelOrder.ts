import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { cancelOrder } = api;

  const data = await cancelOrder({
    exchangeInstanceId,
    orderId: "13960869081",
    pairSymbol: "ETH/USDT",
  });

  return data;
};
