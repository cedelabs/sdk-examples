import { initExchange } from "../utils";
import { executeMethod } from "./prepareWithdrawal";

describe("prepareWithdrawal", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should prepare withdrawal", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
