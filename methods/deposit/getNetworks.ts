import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getNetworks } = cedeSDK.api;

  const networks = await getNetworks({
    exchangeInstanceId,
    tokenSymbol: "SOL",
    opts: {
      toDeposit: true,
    },
  });

  return networks;
};
