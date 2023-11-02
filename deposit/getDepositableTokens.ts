import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { getDepositableTokens } = cedeSDK.api;

  const tokens = await getDepositableTokens({ exchangeInstanceId });

  return tokens;
};
