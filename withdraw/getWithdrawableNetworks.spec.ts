import { initExchange } from "../utils";
import { executeMethod } from "./getWithdrawableNetworks";

describe("getWithdrawableNetworks", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return withdrawable networks", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
