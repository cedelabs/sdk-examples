import { initExchange } from "../utils";
import { executeMethod } from "./getDepositAddress";

describe("getDepositAddress", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return deposit address", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
