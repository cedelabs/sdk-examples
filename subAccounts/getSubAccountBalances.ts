import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getSubAccountBalances, getSubAccounts } = cedeSDK.api;

  const subAccounts = await getSubAccounts({
    exchangeInstanceId,
  });

  const data = await getSubAccountBalances({
    exchangeInstanceId,
    uid: subAccounts?.[0]?.uid,
  });

  return data;
};
