require("dotenv").config();

export const assetPrefix = process.env.GITHUB_PAGES ? "/repository-name" : "";
