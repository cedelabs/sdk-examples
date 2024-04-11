import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const fromExchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { createWithdrawal } = cedeSDK.api;

  const data = await createWithdrawal({
    fromExchangeInstanceId,
    tokenSymbol: "USDT",
    amount: 12,
    address: "0x123456789",
    network: "avacchain",
  });

  return data;
};
