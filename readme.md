## koa-toobusy

[Toobusy](https://github.com/STRML/node-toobusy) middleware for koa.

### Install

    npm i koa-toobusy --save

### Usage

```
app.use(toobusy(options))
```

options:

- `maxLag`: {Number} set maximum lag to an aggressive value.
- `interval`: {Number} set check interval to a faster value.
- `status`: {Number} http responde code, default `503`.
- `message`: {String} http responde message, default `Server is too busy. Please, try again later.`.

### License

MIT