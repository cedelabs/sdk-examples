import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getMinAmounts } = cedeSDK.api;

  const data = await getMinAmounts({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    orderSide: "buy",
    price: "1800",
  });

  return data;
};
