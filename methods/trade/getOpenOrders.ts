import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getOpenOrders } = cedeSDK.api;

  const data = await getOpenOrders({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
  });

  return data;
};
