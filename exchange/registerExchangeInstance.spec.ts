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
        "exchangeInstanceId": "659352-584531-220959-264632-416184",
      }
    `);
  });
});
