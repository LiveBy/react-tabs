(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactTabs"] = factory();
	else
		root["ReactTabs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  Tabs: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Tabs\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	  TabList: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/TabList\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	  Tab: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Tab\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	  TabPanel: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/TabPanel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-tabs.js.map