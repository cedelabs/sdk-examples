import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getWithdrawableBalances } = cedeSDK.api;

  const tokens = await getWithdrawableBalances({ exchangeInstanceId });

  return tokens;
};
