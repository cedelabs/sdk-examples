import { OrderType } from "@cedelabs/demo-sdk";
import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (orderId?: string, customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { updateOrder, createOrder } = cedeSDK.api;

  const order = await createOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderType: OrderType.MARKET,
    orderSide: "buy",
    amount: "0.1",
    price: "0.1",
  });

  const updatedOrder = await updateOrder({
    exchangeInstanceId,
    pairSymbol: order.pairSymbol,
    orderId: orderId ?? order.id,
    amount: "0.2",
  });

  return updatedOrder;
};
