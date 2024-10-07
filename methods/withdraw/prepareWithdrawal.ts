import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { prepareWithdrawal } = cedeSDK.api;

  const data = await prepareWithdrawal({
    fromExchangeInstanceId: exchangeInstanceId,
    tokenSymbol: "AVAX",
    amount: 1,
    network: "avacchain",
  });

  return data;
};
