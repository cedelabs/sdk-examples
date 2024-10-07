import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getSubAccounts } = cedeSDK.api;

  const data = await getSubAccounts({
    exchangeInstanceId,
  });

  return data;
};
