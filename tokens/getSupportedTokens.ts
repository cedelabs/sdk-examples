import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getSupportedTokens } = cedeSDK.api;

  const supportedTokens = await getSupportedTokens({
    exchangeInstanceId,
  });

  return supportedTokens;
};
