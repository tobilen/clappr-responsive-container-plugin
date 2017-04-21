(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["Clappr"], factory);
	else if(typeof exports === 'object')
		exports["ResponsiveContainer"] = factory(require("Clappr"));
	else
		root["ResponsiveContainer"] = factory(root["Clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _clappr=__webpack_require__(1);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ResponsiveContainer=function(_UIContainerPlugin){_inherits(ResponsiveContainer,_UIContainerPlugin);_createClass(ResponsiveContainer,[{key:'name',get:function get(){return'responsive_container';}}]);function ResponsiveContainer(container){_classCallCheck(this,ResponsiveContainer);var _this=_possibleConstructorReturn(this,(ResponsiveContainer.__proto__||Object.getPrototypeOf(ResponsiveContainer)).call(this,container));_this.playerInfo=_clappr.PlayerInfo.getInstance(_this.options.playerId);_this.playerWrapper=_this.playerInfo.options.parentElement;(0,_clappr.$)(document).ready(function(){setTimeout(_this._onResize(),500);});return _this;}_createClass(ResponsiveContainer,[{key:'bindEvents',value:function bindEvents(){var _this2=this;(0,_clappr.$)(window).resize(function(){setTimeout(_this2._onResize(),500);});}},{key:'_onResize',value:function _onResize(){var width=this.playerWrapper.clientWidth===0?this.options.width:this.playerWrapper.clientWidth;this.resizeByWidth(width);}},{key:'resizeByWidth',value:function resizeByWidth(newWidth){var calculatedHeight=Math.floor(this.options.height/this.options.width*newWidth);this.playerInfo.currentSize={width:newWidth,height:calculatedHeight};this.triggerResize(this.playerInfo.currentSize);}},{key:'triggerResize',value:function triggerResize(newSize){//should initiate resizing. doesnt though, so we bypass and mutate directly with jq
	_clappr.Mediator.trigger(this.options.playerId+':'+_clappr.Events.PLAYER_RESIZE,newSize);var $playerDiv=(0,_clappr.$)(this.playerWrapper).children("[data-player]");$playerDiv.width(newSize.width);$playerDiv.height(newSize.height);}}]);return ResponsiveContainer;}(_clappr.UIContainerPlugin);exports.default=ResponsiveContainer;module.exports=exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ])
});
;