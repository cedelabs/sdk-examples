import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { getSupportedExchanges } = api;
  getSupportedExchanges;
  const url = await getSupportedExchanges();

  return url;
};
