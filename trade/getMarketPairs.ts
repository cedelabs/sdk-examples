import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getMarketPairs } = api;

  // @TODO: update doc
  const data = await getMarketPairs({
    exchangeInstanceId,
  });

  return data;
};
