# moa-middlewares


## Install

    npm install --save moa-middlewares

## Usages

```

var app = express();

app.root_path = __dirname;

var $middlewares = require('moa-middlewares')(app);

// $middlewares.dir();

// console.dir($middlewares)

$middlewares.mount([
  'cors',// 支持跨域
  // 'check_session_is_expired',
  'variables', // 定义变量
  'raw_post',
  'multer',  
  'session',
])

$middlewares['cors']
$middlewares.cors

app.use($middlewares['cors']);


router.get('/new', $middlewares['cors'], $.new);  
router.get('/:id/edit', $middlewares['cors'], $.edit);
```