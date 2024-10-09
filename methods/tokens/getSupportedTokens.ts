import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getSupportedTokens } = cedeSDK.api;

  const supportedTokens = await getSupportedTokens({
    exchangeInstanceId,
  });

  return supportedTokens;
};
