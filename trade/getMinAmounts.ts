import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getMinAmounts } = api;

  const data = await getMinAmounts({
    exchangeInstanceId,
    pairSymbol: "ETH/USDT",
		orderSide: "buy",
		price: '1800'
  });

  return data;
};
