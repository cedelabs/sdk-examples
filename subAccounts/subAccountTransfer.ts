import { WalletType } from "@cedelabs/demo-sdk";
import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async (customExchangeInstanceId?: string) => {
  const masterExchangeInstanceId = customExchangeInstanceId ?? (await initExchange());
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
