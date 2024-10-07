import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { cancelOrder } = cedeSDK.api;

  const data = await cancelOrder({
    exchangeInstanceId,
    orderId: "1234132",
    pairSymbol: "ETH/USDT",
  });

  return data;
};
