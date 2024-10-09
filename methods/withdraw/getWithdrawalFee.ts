import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getWithdrawalFee } = cedeSDK.api;

  const fee = await getWithdrawalFee({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    amount: 0.5,
    network: "ethereum",
  });

  return fee;
};
