import { plugin } from "bun";

plugin({
  name: "css-modules",
  async setup(build) {
    build.onLoad({ filter: /\.module\.css$/ }, () => {
      const stub: Record<string, string> = {
        foo: "123",
        bar: "234",
      };

      return {
        exports: stub,
        loader: "object",
      };
    });
  },
});
