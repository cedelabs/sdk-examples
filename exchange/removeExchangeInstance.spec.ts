import { initExchange } from "../utils";
import { executeMethod } from "./isRegistered";

describe("removeExchangeInstance", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should remove exchange instance", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot(`undefined`);
  });
});
