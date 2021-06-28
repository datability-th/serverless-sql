# About

This project is derived from [https://www.serverless.com/examples/aws-node-typescript-nest]() to include SQL database connections

# Setup

```bash
git clone <this repo>

# Uses docker
docker run --rm -it -w "/workdir" -v "$(pwd):/workdir" node:14 bash

# Inside the docker
yarn install

# After installed
npx serverless config credentials --provider aws --key YOUR_API_KEY_HERE --secret YOUR_SECRET_KEY_HERE
npx serverless deploy

# Subsequence deployment
yarn run deploy-index
```