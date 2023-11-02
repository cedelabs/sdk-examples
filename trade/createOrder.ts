import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? await initExchange();
  const { api } = cedeSDK;
  const { createOrder } = api;

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
