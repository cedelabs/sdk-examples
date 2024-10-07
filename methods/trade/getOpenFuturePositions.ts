import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getOpenFuturePositions } = cedeSDK.api;

  const data = await getOpenFuturePositions({
    exchangeInstanceId,
  });

  return data;
};
