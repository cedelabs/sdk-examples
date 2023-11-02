import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? await initExchange();
  const { api } = cedeSDK;
  const { getOpenOrders } = api;

  const data = await getOpenOrders({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
  });

  return data;
};
