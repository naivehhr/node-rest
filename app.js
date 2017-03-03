const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');
const rest = require('./rest');
const views = require('koa-views');
const router = require('koa-router')();
const path = require('path');
// const initdata = require('./initdata');
const templatePath = path.join(__dirname, './templates')
const app = new Koa();

const controller = require('./controller');
var staticServer = require('koa-static');
//配置静态资源地址

// parse request body:
/**
 * 注意到app.use(bodyParser());这个语句，
 * 它给koa安装了一个解析HTTP请求body的处理函数。
 * 如果HTTP请求是JSON数据，我们就可以通过ctx.request.body直接访问解析后的JavaScript对象。
 */
app.use(bodyParser());
app.use(rest.restify());
app.use(views('./src/pages'))

// add controller:
app.use(controller());
router.get('/', async (ctx, next) => {
    // ctx.redirect('lib/app.js');
    await ctx.render('app',{layout:false});
});
app.use(router.routes());
app.use(staticServer(path.join(__dirname,'lib')));
app.listen(3000);
console.log('app started at port 3000...');