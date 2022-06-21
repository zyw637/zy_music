const path = require("path");
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "@assets": resolve("src/assets"),
      "@store": resolve("src/store"),
      "@utils": resolve("src/utils"),
      "@servers": resolve("src/servers"),
      "@router": resolve("src/router"),
      "@pages": resolve("src/pages"),
      "@common": resolve("src/common"),
      "@components": resolve("src/components"),

    }
  }
}