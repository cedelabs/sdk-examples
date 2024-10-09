import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK }) => {
  const { getPrices } = cedeSDK.api;

  const prices = await getPrices();

  return prices;
};
