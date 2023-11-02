import { initExchange } from "../utils";
import { executeMethod } from "./getWithdrawalById";
import { executeMethod as createWithdrawal } from "./createWithdrawal";

let exchangeInstanceId: string;

describe("getWithdrawalById", () => {
  beforeAll(async () => {
    exchangeInstanceId = await initExchange();
  });

  it("it should get withdrawal by id", async () => {
    const createWithdrawResult = await createWithdrawal(exchangeInstanceId);

    const result = await executeMethod(
      exchangeInstanceId,
      createWithdrawResult.from.transaction.transactionId,
      createWithdrawResult.from.transaction.tokenSymbol,
      createWithdrawResult.from.transaction.timestamp,
    );

    expect(result).toMatchInlineSnapshot(`undefined`);
  });
});
