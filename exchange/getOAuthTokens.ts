import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { getOAuthTokens } = cedeSDK.api;
  return await cedeSDK.api.getOAuthTokens({
    exchangeId: "coinbase",
    redirectUriWithCode: "https://your-redirect-uri.com?code=123",
  });
};
