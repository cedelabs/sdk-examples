import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { getSupportedExchanges } = cedeSDK.api;
  getSupportedExchanges;
  const url = await getSupportedExchanges();

  return url;
};
