import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getDepositAddress } = api;

  const balances = await getDepositAddress({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    internalNetwork: "ETH",
  });

  return balances;
};
