import Koa from 'koa';
import log4js from 'log4js';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const LOG = log4js.getLogger('file')
// 注意koa-router返回的是函数:
const router = Router();

//response_formatter
const response_formatter = require('./middleware/response_formatter');

//log_utils
const logUtil = require('./utils/log_utils');

// 导入controller middleware:
const controller = require('./middleware/controller');

// logger
app.use(async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();

    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponse(ctx, ms);

  } catch (error) {

    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});

//仅对/api开头的url进行格式化处理
app.use(response_formatter('^/api'));

app.use(bodyParser());

// 使用middleware:
app.use(controller());

// add router middleware:
app.use(router.routes());

app.listen(3000);
LOG.info("Server started, listening on port: 3000");

export default app
