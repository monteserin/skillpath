/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application/common/utils/access.js":
/*!************************************************!*\
  !*** ./src/application/common/utils/access.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeToken": () => (/* binding */ decodeToken),
/* harmony export */   "createToken": () => (/* binding */ createToken),
/* harmony export */   "verifyToken": () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

var secret = 'secret';
var decodeToken = (jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().decode);
var createToken = function createToken(data) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(data, secret);
};
var verifyToken = function verifyToken(token, callback) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, secret, callback);
};

/***/ }),

/***/ "./src/application/config/sockets.js":
/*!*******************************************!*\
  !*** ./src/application/config/sockets.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  },
  allowEIO3: true
};

/***/ }),

/***/ "./src/application/config/swagger.js":
/*!*******************************************!*\
  !*** ./src/application/config/swagger.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swaggerConfig": () => (/* binding */ swaggerConfig)
/* harmony export */ });
var swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
      version: '1.0.0'
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          name: 'x-access-token',
          "in": 'header'
        }
      }
    },
    security: [{
      ApiKeyAuth: []
    }],
    securityDefinitions: {
      basicAuth: {
        type: 'basic'
      }
    }
  },
  // Path to the API docs
  apis: ['./src/entities/**/*.js', './src/entities/**/*.yml']
};

/***/ }),

/***/ "./src/application/database/index.js":
/*!*******************************************!*\
  !*** ./src/application/database/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "DataTypes": () => (/* reexport safe */ sequelize__WEBPACK_IMPORTED_MODULE_2__.DataTypes),
/* harmony export */   "setAssociations": () => (/* binding */ setAssociations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_2__);



var database = "borrame-2";
var user = "root";
var password = "";
var host = "localhost";
var forceCleanDatabase = "true" === 'true';
var db = new sequelize__WEBPACK_IMPORTED_MODULE_2__.Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql'
});

var setAssociations = function setAssociations(db) {
  Object.keys(db.models).forEach(function (modelName) {
    if ('associate' in db.models[modelName]) {
      db.models[modelName].associate(db.models);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(onConnect) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return setAssociations(db);

          case 3:
            _context.next = 5;
            return db.authenticate();

          case 5:
            db.sync({
              force: forceCleanDatabase
            });
            onConnect();
            console.log('Database connection OK!');
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log('Unable to connect to the database:');

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/application/documentation/index.js":
/*!************************************************!*\
  !*** ./src/application/documentation/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/swagger */ "./src/application/config/swagger.js");




var Documentation = function Documentation(app) {
  // JSON of specs
  var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(_config_swagger__WEBPACK_IMPORTED_MODULE_2__.swaggerConfig); // Api entrypoint

  app.use("/docs", (swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default().serve), swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default().setup(swaggerSpec));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Documentation);

/***/ }),

/***/ "./src/application/middlewares/error-handler.js":
/*!******************************************************!*\
  !*** ./src/application/middlewares/error-handler.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncHandler": () => (/* binding */ asyncHandler),
/* harmony export */   "socketHandler": () => (/* binding */ socketHandler)
/* harmony export */ });
/*Tenemos una función que recibe como parámetro la función de cada controlador,
la ejecuta (resolve)
y si  hay algún error, lo mostrará por consola y lanzará un 500
*/
var asyncHandler = function asyncHandler(controller) {
  return function (req, res, next) {
    return Promise.resolve(controller(req, res, next))["catch"](function (err) {
      console.error('Request error:' + err.toString());
      if (err) return res.sendStatus(500).send();
    });
  };
};
var socketHandler = function socketHandler(controller) {
  return function (msg) {
    return Promise.resolve(controller(msg))["catch"](function (err) {
      console.error('Socket error:' + err);
    });
  };
};

/***/ }),

/***/ "./src/application/middlewares/index.js":
/*!**********************************************!*\
  !*** ./src/application/middlewares/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_sockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-sockets */ "./src/application/middlewares/with-sockets.js");
/* harmony import */ var _with_headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./with-headers */ "./src/application/middlewares/with-headers.js");





var Middlewares = function Middlewares(app, io) {
  app.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({
    extended: true
  }));
  app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());
  app.use((0,_with_sockets__WEBPACK_IMPORTED_MODULE_2__["default"])(io));
  app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()()); // Use this after the variable declaration

  app.use((0,_with_headers__WEBPACK_IMPORTED_MODULE_3__["default"])());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Middlewares);

/***/ }),

/***/ "./src/application/middlewares/restricted-access.js":
/*!**********************************************************!*\
  !*** ./src/application/middlewares/restricted-access.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeader": () => (/* binding */ getHeader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_common_utils_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/common/utils/access */ "./src/application/common/utils/access.js");

var getHeader = function getHeader(req, header) {
  return req.headers[header];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {
  var token = getHeader(req, 'x-access-token');

  if (!token) {
    return res.status(400).send('No token provided.');
  }

  return (0,_Application_common_utils_access__WEBPACK_IMPORTED_MODULE_0__.verifyToken)(token, function (err) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        id = _ref.id;

    if (err) {
      return res.status(401).send('Failed to authenticate token.');
    }

    if (!id) {
      return res.status(403).send('Wrong credentials');
    }

    req.userId = id;
    return next();
  });
});

/***/ }),

/***/ "./src/application/middlewares/with-headers.js":
/*!*****************************************************!*\
  !*** ./src/application/middlewares/with-headers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var withHeaders = function withHeaders() {
  return function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');

    if (req.method === 'OPTIONS') {
      res.end();
    } else {
      next();
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withHeaders);

/***/ }),

/***/ "./src/application/middlewares/with-sockets.js":
/*!*****************************************************!*\
  !*** ./src/application/middlewares/with-sockets.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var withSockets = function withSockets(io) {
  return function (req, res, next) {
    req.io = io;
    return next();
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSockets);

/***/ }),

/***/ "./src/application/repository/generic-model.js":
/*!*****************************************************!*\
  !*** ./src/application/repository/generic-model.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GenericModel = function GenericModel(Model) {
  return {
    create: function create(data) {
      return Model.create(data);
    },
    get: function get(conditions) {
      return Model.findAll(conditions ? {
        where: conditions
      } : {});
    },
    getById: function getById(id) {
      return Model.findOne({
        where: {
          id: id
        }
      });
    },
    updateById: function updateById(id, data) {
      return Model.update(data, {
        where: {
          id: id
        }
      });
    },
    deleteById: function deleteById(id) {
      return Model.destroy({
        where: {
          id: id
        }
      });
    },
    findOrCreate: function findOrCreate(condition, newObj) {
      return Model.findOrCreate({
        where: condition,
        defaults: newObj
      });
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenericModel);

/***/ }),

/***/ "./src/entities/auth/adapters/http/index.js":
/*!**************************************************!*\
  !*** ./src/entities/auth/adapters/http/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/auth/controller/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");




 // Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess


var router = express__WEBPACK_IMPORTED_MODULE_2___default().Router(); // GET ALL

router.post('/login', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_4__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].login(req.body.token);

          case 2:
            data = _context.sent;
            console.log(data);
            res.send(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  return app.use('/auth', router);
});

/***/ }),

/***/ "./src/entities/auth/auth0/api.js":
/*!****************************************!*\
  !*** ./src/entities/auth/auth0/api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getManagementApi": () => (/* binding */ getManagementApi),
/* harmony export */   "getAuthenticationApi": () => (/* binding */ getAuthenticationApi)
/* harmony export */ });
/* harmony import */ var auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0 */ "auth0");
/* harmony import */ var auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0__WEBPACK_IMPORTED_MODULE_0__);

var config = {
  domain: "skillpath.eu.auth0.com",
  clientId: "E4eLtVxpmUPtHOYruitBs7J2JmPp9v6n",
  clientSecret: "rC2CpQGApwltkoarAMTPFNgtfwChJViWpJJ5ynY5xgax55w8jTGWcV7RhYn02iUG",
  audience: "https://skillpath.eu.auth0.com/api/v2/"
};
var getManagementApi = function getManagementApi() {
  return new (auth0__WEBPACK_IMPORTED_MODULE_0___default().ManagementClient)(config);
};
var getAuthenticationApi = function getAuthenticationApi() {
  return new (auth0__WEBPACK_IMPORTED_MODULE_0___default().AuthenticationClient)(config);
};

/***/ }),

/***/ "./src/entities/auth/auth0/index.js":
/*!******************************************!*\
  !*** ./src/entities/auth/auth0/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "verifyAuthToken": () => (/* binding */ verifyAuthToken),
/* harmony export */   "ManagementClient": () => (/* binding */ ManagementClient),
/* harmony export */   "AuthenticationClient": () => (/* binding */ AuthenticationClient)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _secret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secret */ "./src/entities/auth/auth0/secret.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/entities/auth/auth0/api.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var verifyAuthToken = function verifyAuthToken(token) {
  return new Promise(function (resolve, reject) {
    jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, _secret__WEBPACK_IMPORTED_MODULE_2__.getKey, function (err, decoded) {
      return err || !decoded ? reject(err) : resolve(_objectSpread(_objectSpread({}, decoded), {}, {
        id: decoded.sub || decoded.id
      }));
    });
  });
};
var ManagementClient = (0,_api__WEBPACK_IMPORTED_MODULE_3__.getManagementApi)();
var AuthenticationClient = (0,_api__WEBPACK_IMPORTED_MODULE_3__.getAuthenticationApi)();

/***/ }),

/***/ "./src/entities/auth/auth0/secret.js":
/*!*******************************************!*\
  !*** ./src/entities/auth/auth0/secret.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getKey": () => (/* binding */ getKey)
/* harmony export */ });
/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwks-rsa */ "jwks-rsa");
/* harmony import */ var jwks_rsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwks_rsa__WEBPACK_IMPORTED_MODULE_0__);

var JWKS_URI = "https://skillpath.eu.auth0.com/.well-known/jwks.json";
var client = jwks_rsa__WEBPACK_IMPORTED_MODULE_0___default()({
  jwksUri: String(JWKS_URI)
});
var getKey = function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    if (err) return callback(err);
    var signingKey = key.getPublicKey();
    callback(err, signingKey);
  });
};

/***/ }),

/***/ "./src/entities/auth/controller/index.js":
/*!***********************************************!*\
  !*** ./src/entities/auth/controller/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user/model */ "./src/entities/user/model/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service */ "./src/entities/auth/service/index.js");


var Controller = {
  get: function get(conditions) {
    return _user_model__WEBPACK_IMPORTED_MODULE_0__["default"].get(conditions);
  },
  getById: function getById(id) {
    return _user_model__WEBPACK_IMPORTED_MODULE_0__["default"].getById(id);
  },
  create: function create(data) {
    return _user_model__WEBPACK_IMPORTED_MODULE_0__["default"].create(data);
  },
  updateById: function updateById(id, data) {
    return _user_model__WEBPACK_IMPORTED_MODULE_0__["default"].updateById(id, data);
  },
  deleteById: function deleteById(id) {
    return _user_model__WEBPACK_IMPORTED_MODULE_0__["default"].deleteById(id);
  },
  getStudentsFromTeacherAndCod: function getStudentsFromTeacherAndCod(teacherId, cod) {
    return _user_model__WEBPACK_IMPORTED_MODULE_0__["default"].getStudentsByTeacherIdAndCod(teacherId, cod);
  },
  login: function login(token) {
    return (0,_service__WEBPACK_IMPORTED_MODULE_1__["default"])().signIn(token);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/entities/auth/service/index.js":
/*!********************************************!*\
  !*** ./src/entities/auth/service/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth0 */ "./src/entities/auth/auth0/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/model */ "./src/entities/user/model/index.js");






var AuthService = function AuthService() {
  return {
    signIn: function signIn(providerToken) {
      return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _yield$verifyAuthToke, id, email, email_verified, _yield$UserModel$find, _yield$UserModel$find2, user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_auth0__WEBPACK_IMPORTED_MODULE_3__.verifyAuthToken)(providerToken);

              case 2:
                _yield$verifyAuthToke = _context.sent;
                id = _yield$verifyAuthToke.id;
                email = _yield$verifyAuthToke.email;
                email_verified = _yield$verifyAuthToke.email_verified;
                console.log(id);
                _context.next = 9;
                return _user_model__WEBPACK_IMPORTED_MODULE_4__["default"].findOrCreate({
                  auth0Id: id
                }, {
                  email: email
                });

              case 9:
                _yield$UserModel$find = _context.sent;
                _yield$UserModel$find2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$UserModel$find, 1);
                user = _yield$UserModel$find2[0];
                console.log(9);
                return _context.abrupt("return", {
                  user: user,
                  verified: email_verified
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteUser: function deleteUser(userProviderId) {
      return _auth0__WEBPACK_IMPORTED_MODULE_3__.ManagementClient.deleteUser({
        id: userProviderId
      });
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthService);

/***/ }),

/***/ "./src/entities/index.js":
/*!*******************************!*\
  !*** ./src/entities/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "Sockets": () => (/* binding */ Sockets)
/* harmony export */ });
/* harmony import */ var _user_adapters_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/adapters/http */ "./src/entities/user/adapters/http/index.js");
/* harmony import */ var _user_adapters_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/adapters/socket */ "./src/entities/user/adapters/socket/index.js");
/* harmony import */ var _auth_adapters_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/adapters/http */ "./src/entities/auth/adapters/http/index.js");



var Routes = function Routes(app) {
  (0,_user_adapters_http__WEBPACK_IMPORTED_MODULE_0__["default"])(app);
  (0,_auth_adapters_http__WEBPACK_IMPORTED_MODULE_2__["default"])(app);
};
var Sockets = function Sockets(io, socket) {
  (0,_user_adapters_socket__WEBPACK_IMPORTED_MODULE_1__["default"])(io, socket);
};

/***/ }),

/***/ "./src/entities/user/adapters/http/index.js":
/*!**************************************************!*\
  !*** ./src/entities/user/adapters/http/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controller */ "./src/entities/user/controller/index.js");
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _Middlwares_restricted_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Middlwares/restricted-access */ "./src/application/middlewares/restricted-access.js");





 // Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess


var router = express__WEBPACK_IMPORTED_MODULE_3___default().Router(); // GET ALL

router.get('/', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _controller__WEBPACK_IMPORTED_MODULE_4__["default"].get();

          case 2:
            data = _context.sent;
            res.send(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}())); // GET BY ID

router.get('/:id', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {
    var id, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.query.id;
            _context2.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_4__["default"].getById(id);

          case 3:
            data = _context2.sent;
            res.send(data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}())); // GET BY EMAIL

router.post('/getUserByEmail/', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {
    var email, _yield$Controller$get, _yield$Controller$get2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            email = req.body.email;
            _context3.next = 3;
            return _controller__WEBPACK_IMPORTED_MODULE_4__["default"].get()(email);

          case 3:
            _yield$Controller$get = _context3.sent;
            _yield$Controller$get2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$Controller$get, 1);
            data = _yield$Controller$get2[0];
            res.send(data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}())); // CREATE

router.post("/", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(req, res) {
    var email, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            email = req.body.email;
            _context4.next = 3;
            return Model.create(email);

          case 3:
            user = _context4.sent;
            res.send(user);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}())); // DELETE

router["delete"]("/:id", (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_5__.asyncHandler)( /*#__PURE__*/function () {
  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(req, res) {
    var id;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return Model.remove(id);

          case 3:
            res.send("User id: ".concat(id, " deleted"));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}())); // TOTAL UPDATE

router.put("/:id", /*#__PURE__*/function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(req, res) {
    var id, body;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id, body = req.body;
            _context6.next = 3;
            return Model.update(id, body);

          case 3:
            res.send("User id: ".concat(id, " updated"));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  return app.use('/user', router);
});

/***/ }),

/***/ "./src/entities/user/adapters/socket/index.js":
/*!****************************************************!*\
  !*** ./src/entities/user/adapters/socket/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Middlwares/error-handler */ "./src/application/middlewares/error-handler.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controller */ "./src/entities/user/controller/index.js");





var StartSocketServer = function StartSocketServer(io, socket) {
  socket.on('alguienTermino', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__.socketHandler)( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(msg) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              io.emit('alguienTermino', msg);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()));
  socket.on('addAlumnos', (0,_Middlwares_error_handler__WEBPACK_IMPORTED_MODULE_2__.socketHandler)( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(msg) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _controller__WEBPACK_IMPORTED_MODULE_3__["default"].getAll();

            case 2:
              data = _context2.sent;
              console.log('aaaaaaaaaaaaaaaa', data);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartSocketServer);

/***/ }),

/***/ "./src/entities/user/controller/index.js":
/*!***********************************************!*\
  !*** ./src/entities/user/controller/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/entities/user/model/index.js");

var Controller = {
  get: function get(conditions) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].get(conditions);
  },
  getById: function getById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].getById(id);
  },
  create: function create(data) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].create(data);
  },
  updateById: function updateById(id, data) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].updateById(id, data);
  },
  deleteById: function deleteById(id) {
    return _model__WEBPACK_IMPORTED_MODULE_0__["default"].deleteById(id);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/entities/user/model/index.js":
/*!******************************************!*\
  !*** ./src/entities/user/model/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/entities/user/model/schema.js");
/* harmony import */ var _Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Application/repository/generic-model */ "./src/application/repository/generic-model.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Model = _objectSpread(_objectSpread({}, (0,_Application_repository_generic_model__WEBPACK_IMPORTED_MODULE_2__["default"])(_schema__WEBPACK_IMPORTED_MODULE_1__["default"])), {}, {
  getByEmail: function getByEmail(email) {
    return _schema__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      where: {
        email: email
      }
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/entities/user/model/schema.js":
/*!*******************************************!*\
  !*** ./src/entities/user/model/schema.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Application/database */ "./src/application/database/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Application_database__WEBPACK_IMPORTED_MODULE_0__.db.define('user', {
  auth0Id: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
  email: _Application_database__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING
}));

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "auth0":
/*!************************!*\
  !*** external "auth0" ***!
  \************************/
/***/ ((module) => {

module.exports = require("auth0");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "jwks-rsa":
/*!***************************!*\
  !*** external "jwks-rsa" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("jwks-rsa");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Application_config_sockets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Application/config/sockets */ "./src/application/config/sockets.js");
/* harmony import */ var _application_middlewares__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/middlewares */ "./src/application/middlewares/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities */ "./src/entities/index.js");
/* harmony import */ var _application_documentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application/documentation */ "./src/application/documentation/index.js");
/* harmony import */ var _application_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./application/database */ "./src/application/database/index.js");








var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
/*
Heroku utiliza la variable de entorno process.env.port para asignar el puerto donde se va ejecutar el servidor,
por eso la hemos definido en esta plantilla
*/

var port = "5000";
var server = http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app);
var io = socket_io__WEBPACK_IMPORTED_MODULE_2___default()(server, _Application_config_sockets__WEBPACK_IMPORTED_MODULE_3__.config);
(0,_application_documentation__WEBPACK_IMPORTED_MODULE_6__["default"])(app);
(0,_application_middlewares__WEBPACK_IMPORTED_MODULE_4__["default"])(app, io);
(0,_entities__WEBPACK_IMPORTED_MODULE_5__.Routes)(app);
(0,_application_database__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
  server.listen(port, function () {
    return console.log("Server listening to http://localhost:".concat(port));
  });
});
io.on('connection', function (socket) {
  (0,_entities__WEBPACK_IMPORTED_MODULE_5__.Sockets)(io, socket);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map