import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
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
