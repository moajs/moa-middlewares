# moa-middlewares


## Install

    npm install --save moa-middlewares

## Usages

```
var $middlewares = require('moa-middlewares')(app);

middlewares.mount([
  'cors',
  'raw_data'
])

$middlewares['cors']
$middlewares.cors

app.use($middlewares['cors']);


router.get('/new', $middlewares['cors'], $.new);  
router.get('/:id/edit', $middlewares['cors'], $.edit);
```