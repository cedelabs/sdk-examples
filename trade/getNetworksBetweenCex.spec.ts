import { initExchange } from "../utils";
import { executeMethod } from "./getNetworksBetweenCex";

describe("getNetworksBetweenCex", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return networks between cex", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "depositEnabled": true,
          "name": "BNB Smart Chain",
          "network": "BSC",
          "withdrawFee": "0.16",
          "withdrawMin": "0.32",
          "withdrawalEnabled": true,
        },
        {
          "depositEnabled": true,
          "name": "Ethereum (ERC20)",
          "network": "ETH",
          "withdrawFee": "9.27",
          "withdrawMin": "18",
          "withdrawalEnabled": true,
        },
      ]
    `);
  });
});
