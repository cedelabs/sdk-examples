import { initExchange } from "../utils";
import { executeMethod } from "./prepareOrder";

describe("prepareOrder", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should prepare order", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "createOrderRequest": {
          "amount": "0.1",
          "orderSide": "buy",
          "orderType": "market",
          "pairSymbol": "ETH/USDT",
          "price": "0.1",
        },
        "estimatedAmount": "0.1",
        "estimatedFee": {
          "amount": 0,
          "tokenSymbol": "ETH",
        },
      }
    `);
  });
});
