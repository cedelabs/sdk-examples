import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { prepareOrder } = cedeSDK.api;

  const data = await prepareOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderType: "market",
    orderSide: "buy",
    price: "0.1",
    amount: "0.1",
  });

  return data;
};
