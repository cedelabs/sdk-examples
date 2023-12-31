import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (orderId?: string, customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getOrder } = cedeSDK.api;

  const data = await getOrder({ exchangeInstanceId, pairSymbol: "ETH/USDT", orderId: orderId ?? "13960869081" });

  return data;
};
