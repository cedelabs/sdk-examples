import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getDepositableTokens } = cedeSDK.api;

  const tokens = await getDepositableTokens({ exchangeInstanceId });

  return tokens;
};
