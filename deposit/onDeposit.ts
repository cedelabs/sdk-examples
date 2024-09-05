import { cedeSDK, initExchange } from "../utils";

export const executeMethod = async () => {
  const exchangeInstanceId = await initExchange();
  const { onDeposit } = cedeSDK.api;

  try {
    await new Promise((resolve) => {
      onDeposit({
        exchangeInstanceId,
        tokenSymbol: "USDT",
        txHash: "0xf9e10c965a3b8d1edaa2c6ec5b83db7346aa50881cc4417e4e549c9535f87622",
        callback: (data) => {
          console.log("Deposit event", data);
          resolve(data);
        },
      });
    });
    console.log("Deposit event processed.");
  } catch (error) {
    console.error(error);
  }
};
