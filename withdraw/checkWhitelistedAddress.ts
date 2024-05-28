import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { checkAddressIsWhitelisted } = cedeSDK.api;
  
  const whitelistedAddresses = await checkAddressIsWhitelisted({
    exchangeInstanceId,
    tokenSymbol: "ETH",
    key: "Key",
    address: "0x0",
  });

  return whitelistedAddresses;
};
