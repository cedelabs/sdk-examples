import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { createOrder } = api;

  // @TODO: update doc
  const data = await createOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderType: "market",
    orderSide: "buy",
    amount: "0.1",
    price: "0.1",
  });

  return data;
};
