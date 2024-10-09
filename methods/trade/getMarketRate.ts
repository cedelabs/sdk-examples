import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getMarketRate } = cedeSDK.api;

  const data = await getMarketRate({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
  });

  return data;
};
