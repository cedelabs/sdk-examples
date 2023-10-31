import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { api } = cedeSDK;
  const { getDepositableTokens } = api;

  const tokens = await getDepositableTokens({ exchangeInstanceId });

  return tokens;
};
