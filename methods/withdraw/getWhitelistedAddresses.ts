import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getWhitelistedAddresses } = cedeSDK.api;

  const whitelistedAddresses = await getWhitelistedAddresses({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    network: "ethereum",
  });

  return whitelistedAddresses;
};
