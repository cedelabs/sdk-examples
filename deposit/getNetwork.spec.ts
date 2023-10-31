import { initExchange } from "../utils";
import { executeMethod } from "./getNetwork";

describe("getNetwork", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return network", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "depositEnabled": true,
        "name": "Ethereum (ERC20)",
        "network": "ETH",
        "withdrawFee": "0.0012",
        "withdrawMin": "0.0098",
        "withdrawalEnabled": true,
      }
    `);
  });
});
