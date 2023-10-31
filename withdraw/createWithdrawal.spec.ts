import { initExchange } from "../utils";
import { executeMethod } from "./createWithdrawal";

describe("createWithdrawal", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should create withdrawal", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
