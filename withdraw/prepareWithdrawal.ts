import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { prepareWithdrawal } = cedeSDK.api;

  const data = await prepareWithdrawal({
    fromExchangeInstanceId: exchangeInstanceId,
    tokenSymbol: "AVAX",
    amount: 1,
    address: "0x123456789",
    network: "avacchain",
  });

  return data;
};
