import { initExchange } from "../utils";
import { executeMethod } from "./getDepositableTokens";

describe("getDepositableTokens", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return depositable tokens", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
