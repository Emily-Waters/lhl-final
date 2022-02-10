# bcrypt

## Install

Make sure to use the js version, regular bcrypt doesn't play nice with web apps

```
npm install bcryptjs
```

## Use

```javascript
// Encrypt
const bcrypt = require("bcryptjs");
const password = "purple-monkey-dinosaur";
bcrypt.hashSync(password, 10);

// Decrypt
bcrypt.compareSync("purple-monkey-dinosaur", hashedPassword);
// returns true
bcrypt.compareSync("pink-donkey-minotaur", hashedPassword);
// returns false
```

---

# React

[React Docs](https://create-react-app.dev/)