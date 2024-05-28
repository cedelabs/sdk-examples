import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getWhitelistedAddresses } = cedeSDK.api;
  
  const whitelistedAddresses = await getWhitelistedAddresses({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    network: "ethereum",
  });

  return whitelistedAddresses;
};
