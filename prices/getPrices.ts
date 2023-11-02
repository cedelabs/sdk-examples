import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { getPrices } = cedeSDK.api;

  const prices = await getPrices();

  return prices;
};
