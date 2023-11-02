import { initExchange } from "../utils";
import { executeMethod } from "./cancelOrder";
import { executeMethod as createOrder } from "./createOrder";

let exchangeInstanceId: string;

describe("cancelOrder", () => {
  beforeAll(async () => {
    exchangeInstanceId = await initExchange();
  });

  it("it should cancel order", async () => {
    const createOrderResult = await createOrder(exchangeInstanceId);

    const result = await executeMethod(
      createOrderResult.id,
      exchangeInstanceId
    );

    expect(result).toMatchInlineSnapshot(`"canceled"`);
  });
});
