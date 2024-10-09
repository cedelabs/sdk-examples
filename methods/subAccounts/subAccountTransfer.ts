import { WalletType } from "@cedelabs/demo-sdk";
import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId: masterExchangeInstanceId }) => {
  const { subAccountTransfer } = cedeSDK.api;

  const data = await subAccountTransfer({
    exchangeInstanceId: masterExchangeInstanceId,
    tokenSymbol: "USDC",
    amount: "20",
    fromWalletType: WalletType.SPOT,
    toWalletType: WalletType.SPOT,
    fromUid: "master",
    toUid: "1728064552",
  });

  return data;
};
