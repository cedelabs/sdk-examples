import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { getFiatCurrencies } = cedeSDK.api;

  const prices = await getFiatCurrencies();

  return prices;
};
