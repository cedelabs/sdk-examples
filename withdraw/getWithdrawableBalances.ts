import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getWithdrawableBalances } = cedeSDK.api;

  const tokens = await getWithdrawableBalances({ exchangeInstanceId });

  return tokens;
};
