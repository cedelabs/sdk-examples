import { cedeSDK } from "../utils";

const { SELECTED_EXCHANGE } = process.env;

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { getOAuthUrl } = api;

  const url = await getOAuthUrl({
    exchangeId: SELECTED_EXCHANGE ?? "",
    redirectUri: "",
    permissions: ["read"],
  });

  return url;
};
