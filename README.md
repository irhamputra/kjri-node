# KJRI Node.js app

1. Clone this repo
2. Install all dependencies

```shell
yarn
```

or with NPM

```shell
npm i
```

3. Create Firebase Service Account

   - Go to Project Settings (⚙️ Icon)
   - Go to Service Account tab
   - Choose Node.js
   - Generate New Private key
   - add serviceAccount.js file in utils folder

   ```js
   export const serviceAccount = {
     // copy-paste Service Account Key here
   };
   ```

4. Start the app

```shell
yarn dev
```

or with NPM

```shell
npm run dev
```

Application will run on port 8080

## Deployment with Vercel

1. Make sure have a Vercel account
2. Deploy

```shell
yarn build && yarn deploy
```

or with NPM

```shell
npm run build && npm run deploy
```
