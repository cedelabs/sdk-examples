import { OrderType } from "@cedelabs/demo-sdk";
import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { prepareOrder } = cedeSDK.api;

  const data = await prepareOrder({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderType: OrderType.MARKET,
    orderSide: "buy",
    price: "3103.7",
    amount: "0.1",
  });

  return data;
};
