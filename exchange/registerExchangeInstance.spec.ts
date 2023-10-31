import { initExchange } from "../utils";
import { executeMethod } from "./registerExchangeInstance";

describe("registerExchangeInstance", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return exchange instance id", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`
      {
        "exchangeInstanceId": "133271-623848-295882-498157-147268",
      }
    `);
  });
});
