import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getBalances } = cedeSDK.api;

  const balances = await getBalances({ exchangeInstanceId });

  return balances;
};
