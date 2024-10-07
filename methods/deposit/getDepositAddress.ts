import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getDepositAddress } = cedeSDK.api;

  const balances = await getDepositAddress({
    exchangeInstanceId,
    tokenSymbol: "USDT",
    network: "ethereum",
  });

  return balances;
};
