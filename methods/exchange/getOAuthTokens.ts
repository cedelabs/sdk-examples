import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeId }) => {
  const { getOAuthTokens } = cedeSDK.api;
  return await getOAuthTokens({
    exchangeId,
    redirectUriWithCode: "https://your-redirect-uri.com?code=123",
  });
};
