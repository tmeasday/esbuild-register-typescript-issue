if (process.env.REGISTER) {
  let { register } = require("./node_modules/esbuild-register/dist/node");

  register({
    target: `node${process.version.slice(1)}`,
    format: "cjs",
    hookIgnoreNodeModules: !1,
    loader: "js",
    tsconfigRaw: `{
      "compilerOptions": {
        "strict": false,
        "skipLibCheck": true,
      },
    }`,
  });
}

console.time("start");
require("typescript");
console.timeLog("start");
