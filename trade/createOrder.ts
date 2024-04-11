import { OrderType } from "@cedelabs/demo-sdk";
import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { createOrder } = cedeSDK.api;

  const order = await createOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderType: OrderType.MARKET,
    orderSide: "buy",
    amount: "0.1",
    price: "0.1",
  });

  return order;
};
