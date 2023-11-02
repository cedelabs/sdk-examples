import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getMarketRate } = api;

  const data = await getMarketRate({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
  });

  return data;
};
