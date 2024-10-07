import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId: fromExchangeInstanceId }) => {
  const { createWithdrawal } = cedeSDK.api;

  const data = await createWithdrawal({
    fromExchangeInstanceId,
    tokenSymbol: "ETH",
    amount: 0.0003,
    address: "0x9bb58298f032ce3bf60b2bc5f23a9908362af0e1",
    network: "optimism",
  });

  return data;
};
