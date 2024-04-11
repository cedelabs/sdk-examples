import { ApiPermissions } from "@cedelabs/demo-sdk";
import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { getOAuthUrl } = cedeSDK.api;

  const exchangeId = process.env.SELECTED_EXCHANGE ?? "binance";
  return await getOAuthUrl({
    exchangeId,
    redirectUri: "http://localhost:3000/exchange/oauth",
    permissions: [ApiPermissions.READ],
  });
};
