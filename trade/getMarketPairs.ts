import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getMarketPairs } = cedeSDK.api;

  const data = await getMarketPairs({
    exchangeInstanceId,
  });

  return data;
};
