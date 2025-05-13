const express = require('express');
const unblocker = require('unblocker');

const app = express();

app.use(unblocker({
  prefix: '/proxy/',
  responseMiddleware: [
    unblocker.defaultContentPolicy
  ]
}));

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
