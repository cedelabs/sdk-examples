import { initExchange } from "../utils";
import { executeMethod } from "./getDepositableTokens";

describe("getDepositableTokens", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return depositable tokens", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "networks": [
            {
              "chainId": 1,
              "depositEnabled": true,
              "name": "Ethereum",
              "network": "Ethereum",
              "withdrawalEnabled": true,
            },
          ],
          "tokenSymbol": "ETH",
        },
        {
          "networks": [
            {
              "chainId": 137,
              "depositEnabled": true,
              "name": "Polygon",
              "network": "Polygon",
              "withdrawalEnabled": true,
            },
          ],
          "tokenSymbol": "MATIC",
        },
      ]
    `);
  });
});
