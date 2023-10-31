import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getNetwork } = api;

  const network = await getNetwork({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    network: "ETH",
    opts: {
      toDeposit: true,
    },
  });

  return network;
};
