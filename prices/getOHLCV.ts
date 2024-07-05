import { Timeframe } from "@cedelabs/demo-sdk";
import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getOHLCV } = cedeSDK.api;

  const ohlcv = await getOHLCV({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
    timeframe: Timeframe["1h"],
    from: Date.now() - 3600 * 1000 * 100,
    to: Date.now(),
    limit: 100,
  });

  return ohlcv;
};
