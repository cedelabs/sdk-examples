import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getMarketPairs } = api;

  const data = await getMarketPairs({
    exchangeInstanceId,
  });

  return data;
};
