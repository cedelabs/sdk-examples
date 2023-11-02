import { cedeSDK } from "../utils";

const { SELECTED_EXCHANGE } = process.env;

export const executeMethod = async () => {
  const { getOAuthTokens } = cedeSDK.api;

  const url = await getOAuthTokens({ exchangeId: SELECTED_EXCHANGE ?? "", redirectUriWithCode: "" });

  return url;
};
