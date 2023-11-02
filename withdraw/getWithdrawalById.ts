import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string, tokenSymbol = "USDT", withdrawalId = "98234897243", timestamp = 897234) => {
  const exchangeInstanceId = customExchangeInstanceId ?? await initExchange();
  const { api } = cedeSDK;
  const { getWithdrawalById } = api;

  const data = await getWithdrawalById({
    exchangeInstanceId,
    tokenSymbol,
    withdrawalId,
    timestamp,
  });

  return data;
};
