import { PureCefiInfoTx } from "@cedelabs/demo-sdk";
import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getWithdrawalById, createWithdrawal } = cedeSDK.api;

  const withdrawal = await createWithdrawal({
    fromExchangeInstanceId: exchangeInstanceId,
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
