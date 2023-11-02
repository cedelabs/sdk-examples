import { cedeSDK } from "../utils";

const { SELECTED_EXCHANGE } = process.env;

export const executeMethod = async () => {
  const { getOAuthUrl } = cedeSDK.api;

  const url = await getOAuthUrl({
    exchangeId: SELECTED_EXCHANGE ?? "",
    redirectUri: "",
    permissions: ["read"],
  });

  return url;
};
