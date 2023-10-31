import { initExchange } from "../utils";
import { executeMethod } from "./removeExchangeInstance";

describe("removeExchangeInstance", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should remove exchange instance", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
