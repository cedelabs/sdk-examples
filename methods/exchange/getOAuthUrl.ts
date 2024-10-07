import { ApiPermissions } from "@cedelabs/demo-sdk";
import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeId }) => {
  const { getOAuthUrl } = cedeSDK.api;

  await cedeSDK.api.setupOAuthClientCredentials({
    exchangeId,
    clientId: "your-client-id",
  });

  const url = await getOAuthUrl({
    exchangeId,
    redirectUri: "",
    permissions: [ApiPermissions.READ],
  });
  return url;
};
