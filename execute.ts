import * as prettyjson from "prettyjson";

console.log(process.argv[3]);

(async () => {
  if (!process.argv[3]) throw "You should provide a method to execute";

  const { executeMethod } = await import(process.argv[3]);
  const result = await executeMethod();

  console.log(prettyjson.render(result));
})();
