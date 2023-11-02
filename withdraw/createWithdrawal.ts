import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const fromExchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { createWithdrawal } = api;

  const data = await createWithdrawal({
    fromExchangeInstanceId,
    tokenSymbol: "USDT",
    amount: 12,
    address: "0x123456789",
    internalNetwork: "avacchain",
  });

  return data;
};
