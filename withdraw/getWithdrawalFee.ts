import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getWithdrawalFee } = cedeSDK.api;

  const fee = await getWithdrawalFee({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    amount: 0.5,
    network: "ethereum",
  });

  return fee;
};
