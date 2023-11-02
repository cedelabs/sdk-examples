import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const fromExchangeInstanceId = await initExchange();
  const toExchangeInstanceId = await initExchange("coinbase");
  const { getNetworksBetweenCex } = cedeSDK.api;

  const data = await getNetworksBetweenCex({
    fromExchangeInstanceId,
    toExchangeInstanceId,
    tokenSymbol: "1INCH",
  });

  return data;
};
