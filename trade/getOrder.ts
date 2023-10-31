import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getOrder } = api;

  // @TODO: update doc and order not found error
  const data = await getOrder({ exchangeInstanceId, pairSymbol: "ETH/USDT", orderId: "13960869081" });

  return data;
};
