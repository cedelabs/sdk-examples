import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getDepositAddress } = cedeSDK.api;

  const balances = await getDepositAddress({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    network: "ETH",
  });

  return balances;
};
