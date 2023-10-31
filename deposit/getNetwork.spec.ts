import { initExchange } from "../utils";
import { executeMethod } from "./getNetwork";

describe("getNetwork", () => {
  beforeAll(async () => {
    await initExchange();
  });

  it("it should return network", async () => {
    const result = await executeMethod();

    expect(result).toMatchInlineSnapshot();
  });
});
