import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getSubAccounts } = cedeSDK.api;

  const data = await getSubAccounts({
    exchangeInstanceId,
  });

  return data;
};
