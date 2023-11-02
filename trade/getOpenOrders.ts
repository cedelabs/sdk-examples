import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getOpenOrders } = cedeSDK.api;

  const data = await getOpenOrders({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
  });

  return data;
};
