import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getBalances } = api;

  const balances = await getBalances({ exchangeInstanceId });

  return balances;
};
