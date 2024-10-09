import { ExecuteMethod } from "../../executeMethod";

export const executeMethod: ExecuteMethod = async ({ cedeSDK, exchangeInstanceId }) => {
  const { retrieveDeposit } = cedeSDK.api;

  try {
    const balances = await retrieveDeposit({
      exchangeInstanceId,
      tokenSymbol: "ARBUSDCE",
      txHash: "0x63b0a79715bf27e92c7e3e80c908dd477f7189fc94f5917b9c7801bc328ee401",
    });
    return balances;
  } catch (error) {
    console.error(error);
  }
};
