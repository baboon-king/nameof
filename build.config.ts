import { dts } from "bun-dts";

await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./dist",
  format: "esm",
  plugins: [dts()],
});
