import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { getBalances } = cedeSDK.api;

  const start = new Date();
  const balances = await getBalances({ exchangeInstanceId });
  const end = new Date();
  console.log(`Execution time: ${end.getTime() - start.getTime()}ms`);

  return balances;
};
