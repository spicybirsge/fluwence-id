## Fluwence ID Generator

+ Generate URL Friendly IDs
```js
const {generateID} = require('fluwence-id');

const length = 10; // Length of your ID. Default: 6. Optional: Yes.
const url_friendly = true; // false, if you don't want it to be URL Friendly. Default: true. Optional: Yes.

const ID = generateID(length, url_friendly); // Generates the ID.
console.log(ID); // Log your ID
// wrueyry12_ - Logs Random ID
```

+ Generate Number IDs
```js
const {generateNumID} = require('fluwence-id');

const length = 10; // Length of your ID. Default: 6. Optional: Yes.

const ID = generateNumID(length); // Generates the ID.
console.log(ID); // Log your ID
// 3204826497 - Logs Random ID
```

+ Generate Non URL Friendly IDs
```js
const {generateID} = require('fluwence-id');

const length = 10; // Length of your ID. Default: 6. Optional: Yes.
const url_friendly = false; // true, if you want it to be URL Friendly. Default: true. Optional: Yes.

const ID = generateID(length, url_friendly); // Generates the ID.
console.log(ID); // Log your ID
// eren$_0yEa - Logs Random ID
```

```diff
+ Current Version: 2022.10.25
```

```diff
+ Last Published: 25.10.2022
```

### Made with ❤️ by [snehasish](https://github.com/snehasishcodes)

