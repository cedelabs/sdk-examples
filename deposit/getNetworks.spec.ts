import { initExchange } from "../utils";
import { executeMethod } from "./getNetworks";

describe("getNetworks", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return networks", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "depositEnabled": true,
          "name": "BNB Smart Chain",
          "network": "BSC",
          "withdrawFee": "0.000056",
          "withdrawMin": "0.00011",
          "withdrawalEnabled": true,
        },
        {
          "depositEnabled": true,
          "name": "Ethereum (ERC20)",
          "network": "ETH",
          "withdrawFee": "0.0012",
          "withdrawMin": "0.0098",
          "withdrawalEnabled": true,
        },
        {
          "depositEnabled": true,
          "name": "Arbitrum One",
          "network": "ARBITRUM",
          "withdrawFee": "0.00035",
          "withdrawMin": "0.0008",
          "withdrawalEnabled": true,
        },
        {
          "depositEnabled": true,
          "name": "BNB Beacon Chain",
          "network": "BNB",
          "withdrawFee": "0.000088",
          "withdrawMin": "0.00018",
          "withdrawalEnabled": true,
        },
        {
          "depositEnabled": true,
          "name": "Optimism",
          "network": "OPTIMISM",
          "withdrawFee": "0.00035",
          "withdrawMin": "0.001",
          "withdrawalEnabled": true,
        },
      ]
    `);
  });
});
