import { cedeSDK } from "../utils";

export const executeMethod = async () => {
  const { api } = cedeSDK;
  const { getFiatCurrencies } = api;

  const prices = await getFiatCurrencies();

  return prices;
};
