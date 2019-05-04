"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 *
 * @param {array of objects} componentsParam
 * @param {array of objects} settingsParam
 */
var filterSettings = function filterSettings(componentsParam, settingsParam) {
  var finalArray = [];

  if (!Array.isArray(componentsParam) || !Array.isArray(settingsParam)) {
    return false;
  } else {
    settingsParam.forEach(function (setting) {
      if (setting.requires.length < 1) {
        finalArray.push(setting);
      } else {
        componentsParam.forEach(function (component) {
          if (setting.requires.includes(component.name)) {
            finalArray.push(setting);
          }
        });
      }
    });
  }

  return finalArray;
};

var _default = filterSettings;
exports["default"] = _default;