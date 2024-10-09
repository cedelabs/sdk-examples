import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { isRegistered } = cedeSDK.api;
  return await isRegistered(exchangeInstanceId);
};
