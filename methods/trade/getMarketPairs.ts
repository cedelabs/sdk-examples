import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getMarketPairs } = cedeSDK.api;

  const data = await getMarketPairs({
    exchangeInstanceId,
  });

  return data;
};
