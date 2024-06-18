import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getOpenFuturePositions } = cedeSDK.api;

  const data = await getOpenFuturePositions({
    exchangeInstanceId,
  });

  return data;
};
