import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK }) => {
  const { getSupportedExchanges } = cedeSDK.api;
  const url = await getSupportedExchanges();

  return url;
};
