import { OrderType } from "@cedelabs/demo-sdk";
import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
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
