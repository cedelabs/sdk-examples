import { initExchange } from "../utils";
import { executeMethod } from "./getNetworks";

describe("getNetworks", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return networks", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
