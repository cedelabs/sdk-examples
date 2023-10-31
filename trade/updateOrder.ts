import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { updateOrder } = api;

  // @TODO: update doc and order not found error
  const data = await updateOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderId: "13960869081",
    amount: "0.2",
  });

  return data;
};
