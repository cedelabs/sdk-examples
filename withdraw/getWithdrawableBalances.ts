import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getWithdrawableBalances } = api;

  const tokens = await getWithdrawableBalances({ exchangeInstanceId });

  return tokens;
};
