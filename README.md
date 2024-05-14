# REST-API-Nodejs-Express-Typescript-Clean-Arquitecture

# REST API with Node.js Express and Typescript using clean arquitecture

Start project using:

```
npm init
```

Install typescript with:

```
npm install typescript --save-dev
```

```
npm install @types/node --save-dev
```

Install express with:

```
npm install express
```

```
npm install @types/express --save-dev
```

Create typescript config file with:

```
npx tsc --init
```

change `target` to `es2022`

To store the version of nodejs used in the project run:

node -v > .nvmrc

Install ESLint:

```
npm init @eslint/config@latest
```

```
Need to install the following packages:
@eslint/create-config@1.1.0
Ok to proceed? (y) y
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

globals, @eslint/js, typescript-eslint, eslint
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
```

to load env variables:

```
npm install dotenv
```

to configure env varioables:

```
npm install env-var
```

to use dependency injection:

```
npm install node-dependency-injection
```

```
npm install helmet
```

```
npm install morgan
```

```
npm install --save-dev @types/morgan
```

```
npm install compression
```

```
npm install --save-dev @types/compression
```

```
npm install cookie-parser
```

```
npm install --save-dev @types/cookie-parser
```

```
npm install pino
```

## Install Typeorm

```
npm install typeorm --save
```

```
npm install reflect-metadata --save
```

and import it somewhere in the global place of your app (for example in app.ts):

import "reflect-metadata"

install database driver for PostgreSQL

```
npm install pg --save
```

In tsconfig.json file set:

"emitDecoratorMetadata": true,
"experimentalDecorators": true,

To support env variables in scripts for windows:

```
npm install cross-env
```

to use aliases in paths:

npm install -D ts-node

npm install -D tsconfig-paths
