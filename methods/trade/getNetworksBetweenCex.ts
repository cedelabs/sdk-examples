import { initExchange } from "../../utils";

import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId: fromExchangeInstanceId }) => {
  const toExchangeInstanceId = await initExchange("coinbase");
  const { getNetworksBetweenCex } = cedeSDK.api;

  const data = await getNetworksBetweenCex({
    fromExchangeInstanceId,
    toExchangeInstanceId,
    tokenSymbol: "1INCH",
  });

  return data;
};
