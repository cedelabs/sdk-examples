import { PureCefiInfoTx } from "@cedelabs/demo-sdk";
import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const exchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
  const { getWithdrawalById, createWithdrawal } = cedeSDK.api;
  const fromExchangeInstanceId = customExchangeInstanceId ?? (await initExchange());

  const withdrawal = await createWithdrawal({
    fromExchangeInstanceId,
    tokenSymbol: "USDT",
    amount: 12,
    address: "0x123456789",
    network: "avacchain",
  });

  const data = await getWithdrawalById({
    exchangeInstanceId,
    tokenSymbol: (withdrawal.from as PureCefiInfoTx).transaction.tokenSymbol,
    withdrawalId: (withdrawal.from as PureCefiInfoTx).transaction.transactionId,
    timestamp: withdrawal.from.transaction.timestamp,
  });

  return data;
};
