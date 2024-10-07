import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { removeExchangeInstance } = cedeSDK.api;
  await removeExchangeInstance({ exchangeInstanceId });
};
