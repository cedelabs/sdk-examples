import { cedeSDK } from "../utils";

const { SELECTED_EXCHANGE } = process.env;

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { getOAuthTokens } = api;

  const url = await getOAuthTokens({ exchangeId: SELECTED_EXCHANGE ?? "", redirectUriWithCode: "" });

  return url;
};
