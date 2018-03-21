var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//------------将自己的文件导入
var index = require('./routes/index');
var users = require('./routes/users');
var login=require("./routes/login");
var hehe=require("./routes/hehe");
var register=require("./routes/register");
var search=require("./routes/search");
var mine=require("./routes/mine");
var admin=require("./routes/admin");
var companyUser=require("./routes/companyUser");
var deal=require("./routes/deal/deal");
var details=require("./routes/deal/details");


var app = express();
app.locals.isLogin=false;

// view engine setup
// 设置模板路径 默认为 ./view
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use("/hehe",hehe);
app.use("/register",register);
app.use("/search",search);
app.use("/mine",mine);
app.use("/admin",admin);
app.use("/deal",deal);
app.use("/job",details);
app.use("/companyUser",companyUser);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
