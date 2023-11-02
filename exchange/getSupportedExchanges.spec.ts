import { initExchange } from "../utils";
import { executeMethod } from "./getSupportedExchanges";

describe("getSupportedExchanges", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return supported exchanges", async () => {
    const result = await executeMethod();

    expect(result).toBeTruthy();
  });
});
