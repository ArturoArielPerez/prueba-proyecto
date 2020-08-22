var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const productAddRouter = require('./routes/productAdd');
const productCartRouter = require('./routes/productCart');
const productDetailRouter = require('./routes/productDetail');
const registerRouter = require('./routes/register');
const sucursalRouter = require('./routes/sucursal');
const eventosRouter = require('./routes/eventos');
const formRouter = require('./routes/form');
const catalogoRouter = require('./routes/catalogo');
const loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/productAdd', productAddRouter);
app.use('/productCart', productCartRouter);
app.use('/productDetail', productDetailRouter);
app.use('/register', registerRouter);
app.use('/sucursal',sucursalRouter);
app.use('/eventos', eventosRouter);
app.use('/catalogo',catalogoRouter);
app.use('/form', formRouter);
app.use('/login', loginRouter);

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
