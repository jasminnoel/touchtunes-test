"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _components = _interopRequireDefault(require("../modules/components"));

var _settings = _interopRequireDefault(require("../modules/settings"));

var _touchtunes = _interopRequireDefault(require("../modules/touchtunes"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/index.html'));
});
router.get('/components', function (req, res) {
  res.send(_components["default"]);
});
router.get('/settings', function (req, res) {
  res.send(_settings["default"]);
});
router.get('/filter', function (req, res) {
  res.send((0, _touchtunes["default"])(_components["default"], _settings["default"]));
});
var _default = router;
exports["default"] = _default;