import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { getPrices } = api;

  const prices = await getPrices();

  return prices;
};
