import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getNetworks } = api;

  const networks = await getNetworks({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    opts: {
      toWithdraw: true,
    },
  });

  return networks;
};
