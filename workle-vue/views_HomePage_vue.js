"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["views_HomePage_vue"],{

/***/ "../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-1[0].rules[0].use[3]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-1[0].rules[0].use[3]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./components/PreLoader.vue?../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use%5B3%5D!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/CardItem.vue":
/*!*********************************!*\
  !*** ./components/CardItem.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CardItem_vue_vue_type_template_id_0bb0d11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardItem.vue?vue&type=template&id=0bb0d11e& */ \"./components/CardItem.vue?vue&type=template&id=0bb0d11e&\");\n/* harmony import */ var _CardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardItem.vue?vue&type=script&lang=js& */ \"./components/CardItem.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CardItem_vue_vue_type_template_id_0bb0d11e___WEBPACK_IMPORTED_MODULE_0__.render,\n  _CardItem_vue_vue_type_template_id_0bb0d11e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/CardItem.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/CardItem.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_eye_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/eye.svg */ \"./assets/eye.svg\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    data() {\n        return {\n            eyeIcon: _assets_eye_svg__WEBPACK_IMPORTED_MODULE_1__,\n            key: this.accessKey,\n            image: this.card,\n            views: ''\n        }\n    },\n    props: ['card', 'accessKey'],\n    computed: {\n        getUsername() {\n            return '@' + this.image.user.username\n        },\n        getViews() {\n            return this.views.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ')\n        },\n        getUserProfileLink() {\n            return `/users/${this.getUsername}`\n        }\n    },\n    async mounted() {\n            axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.unsplash.com/photos/${this.image.id}/statistics/?client_id=${this.key}`)\n                .then(response => (this.views = response.data.views.total))\n    }\n});\n\n\n//# sourceURL=webpack:///./components/CardItem.vue?../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/CardList.vue":
/*!*********************************!*\
  !*** ./components/CardList.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CardList_vue_vue_type_template_id_15b64929___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardList.vue?vue&type=template&id=15b64929& */ \"./components/CardList.vue?vue&type=template&id=15b64929&\");\n/* harmony import */ var _CardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardList.vue?vue&type=script&lang=js& */ \"./components/CardList.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CardList_vue_vue_type_template_id_15b64929___WEBPACK_IMPORTED_MODULE_0__.render,\n  _CardList_vue_vue_type_template_id_15b64929___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/CardList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/CardList.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CardItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CardItem.vue */ \"./components/CardItem.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    props: ['unsplash', 'accessKey'],\n    components: {\n        CardItem: _components_CardItem_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    },\n});\n\n\n//# sourceURL=webpack:///./components/CardList.vue?../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/PreLoader.vue":
/*!**********************************!*\
  !*** ./components/PreLoader.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PreLoader_vue_vue_type_template_id_be40ba6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true& */ \"./components/PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true&\");\n/* harmony import */ var _PreLoader_vue_vue_type_style_index_0_id_be40ba6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true& */ \"./components/PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n;\n\n\n/* normalize component */\n\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _PreLoader_vue_vue_type_template_id_be40ba6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,\n  _PreLoader_vue_vue_type_template_id_be40ba6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  \"be40ba6a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/PreLoader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/PreLoader.vue?");

/***/ }),

/***/ "./views/HomePage.vue":
/*!****************************!*\
  !*** ./views/HomePage.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomePage_vue_vue_type_template_id_aafd6f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=aafd6f86& */ \"./views/HomePage.vue?vue&type=template&id=aafd6f86&\");\n/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ \"./views/HomePage.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _HomePage_vue_vue_type_template_id_aafd6f86___WEBPACK_IMPORTED_MODULE_0__.render,\n  _HomePage_vue_vue_type_template_id_aafd6f86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"views/HomePage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./views/HomePage.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js??vue-loader-options!./views/HomePage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/index.js??vue-loader-options!./views/HomePage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CardList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CardList.vue */ \"./components/CardList.vue\");\n/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-paginate */ \"../node_modules/vuejs-paginate/dist/index.js\");\n/* harmony import */ var vuejs_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuejs_paginate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PreLoader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PreLoader.vue */ \"./components/PreLoader.vue\");\n/* harmony import */ var _mixin_pagination_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/mixin/pagination.mixin */ \"./mixin/pagination.mixin.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    name: 'App',\n    mixins: [_mixin_pagination_mixin__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\n    data() {\n        return {\n            accessKey: 'k-ZNZFSnuC8-q4xomhcdbNvbsk-8y274UIBPjcl--8M',\n            loading: true\n        }\n    },\n    components: {\n        CardList: _components_CardList_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        CardPaginate: (vuejs_paginate__WEBPACK_IMPORTED_MODULE_1___default()),\n        PreLoader: _components_PreLoader_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    mounted() {\n        this.setupPagination(this.page)\n    }\n});\n\n\n//# sourceURL=webpack:///./views/HomePage.vue?../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./components/PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_1_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PreLoader_vue_vue_type_style_index_0_id_be40ba6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-1[0].rules[0].use[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true& */ \"../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-1[0].rules[0].use[3]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/PreLoader.vue?vue&type=style&index=0&id=be40ba6a&lang=scss&scoped=true&\");\n\n\n//# sourceURL=webpack:///./components/PreLoader.vue?");

/***/ }),

/***/ "./components/CardItem.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./components/CardItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardItem.vue?vue&type=script&lang=js& */ \"../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardItem.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/CardItem.vue?");

/***/ }),

/***/ "./components/CardItem.vue?vue&type=template&id=0bb0d11e&":
/*!****************************************************************!*\
  !*** ./components/CardItem.vue?vue&type=template&id=0bb0d11e& ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_template_id_0bb0d11e___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_template_id_0bb0d11e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardItem_vue_vue_type_template_id_0bb0d11e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardItem.vue?vue&type=template&id=0bb0d11e& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardItem.vue?vue&type=template&id=0bb0d11e&\");\n\n\n//# sourceURL=webpack:///./components/CardItem.vue?");

/***/ }),

/***/ "./components/CardList.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./components/CardList.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardList.vue?vue&type=script&lang=js& */ \"../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardList.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/CardList.vue?");

/***/ }),

/***/ "./components/CardList.vue?vue&type=template&id=15b64929&":
/*!****************************************************************!*\
  !*** ./components/CardList.vue?vue&type=template&id=15b64929& ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_template_id_15b64929___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_template_id_15b64929___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardList_vue_vue_type_template_id_15b64929___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardList.vue?vue&type=template&id=15b64929& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardList.vue?vue&type=template&id=15b64929&\");\n\n\n//# sourceURL=webpack:///./components/CardList.vue?");

/***/ }),

/***/ "./components/PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./components/PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreLoader_vue_vue_type_template_id_be40ba6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreLoader_vue_vue_type_template_id_be40ba6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PreLoader_vue_vue_type_template_id_be40ba6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true&\");\n\n\n//# sourceURL=webpack:///./components/PreLoader.vue?");

/***/ }),

/***/ "./views/HomePage.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./views/HomePage.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ \"../node_modules/vue-loader/lib/index.js??vue-loader-options!./views/HomePage.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./views/HomePage.vue?");

/***/ }),

/***/ "./views/HomePage.vue?vue&type=template&id=aafd6f86&":
/*!***********************************************************!*\
  !*** ./views/HomePage.vue?vue&type=template&id=aafd6f86& ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_aafd6f86___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_aafd6f86___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_aafd6f86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomePage.vue?vue&type=template&id=aafd6f86& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./views/HomePage.vue?vue&type=template&id=aafd6f86&\");\n\n\n//# sourceURL=webpack:///./views/HomePage.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardItem.vue?vue&type=template&id=0bb0d11e&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardItem.vue?vue&type=template&id=0bb0d11e& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"card\" }, [\n    _c(\"div\", { staticClass: \"card__header\" }, [\n      _c(\"div\", { staticClass: \"card__profile-image\" }, [\n        _c(\"img\", {\n          attrs: {\n            src: _vm.image.user.profile_image.small,\n            alt: \"some profile image...\",\n          },\n        }),\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"card__titile\" }, [\n        _c(\n          \"p\",\n          { staticClass: \"card__author\" },\n          [\n            _c(\n              \"router-link\",\n              {\n                staticClass: \"brand-link\",\n                attrs: { target: \"_blank\", to: _vm.getUserProfileLink },\n              },\n              [\n                _vm._v(\n                  \"\\n                    \" +\n                    _vm._s(_vm.image.user.name) +\n                    \"\\n                \"\n                ),\n              ]\n            ),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"p\", { staticClass: \"card__username\" }, [\n          _vm._v(_vm._s(_vm.getUsername)),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"card__image\" }, [\n      _c(\"img\", { attrs: { src: _vm.image.urls.small, alt: \"some image...\" } }),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"card__footer\" }, [\n      _c(\"span\", { staticClass: \"card__view-count\" }, [\n        _vm._v(_vm._s(_vm.getViews)),\n      ]),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"card__view-icon\" }, [\n        _c(\"img\", { attrs: { src: _vm.eyeIcon, alt: \"some icon...\" } }),\n      ]),\n    ]),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/CardItem.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardList.vue?vue&type=template&id=15b64929&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/CardList.vue?vue&type=template&id=15b64929& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"gallery\" },\n    _vm._l(_vm.unsplash, function (card) {\n      return _c(\"CardItem\", {\n        key: card.id,\n        attrs: { card: card, accessKey: _vm.accessKey },\n      })\n    }),\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/CardList.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/PreLoader.vue?vue&type=template&id=be40ba6a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"loadingio-spinner-rolling-o73itgoe4n\" }, [\n      _c(\"div\", { staticClass: \"ldio-wfjei6dk2ql\" }, [_c(\"div\")]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/PreLoader.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./views/HomePage.vue?vue&type=template&id=aafd6f86&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./views/HomePage.vue?vue&type=template&id=aafd6f86& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"root\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"container\" },\n      [\n        _vm.loading\n          ? _c(\"PreLoader\")\n          : _c(\"CardList\", {\n              attrs: { accessKey: _vm.accessKey, unsplash: _vm.unsplash },\n            }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"pagination\" },\n      [\n        _c(\"CardPaginate\", {\n          attrs: {\n            \"page-count\": _vm.pageCount,\n            \"click-handler\": _vm.pageChangeHandler,\n            \"container-class\": \"pagination__list\",\n            \"page-class\": \"pagination__page\",\n            \"active-class\": \"pagination__page_active\",\n            \"prev-class\": \"pagination__page_prev\",\n            \"next-class\": \"pagination__page_next\",\n          },\n        }),\n      ],\n      1\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./views/HomePage.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./assets/eye.svg":
/*!************************!*\
  !*** ./assets/eye.svg ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ca5f6834c160040fea3a.svg\";\n\n//# sourceURL=webpack:///./assets/eye.svg?");

/***/ }),

/***/ "./mixin/pagination.mixin.js":
/*!***********************************!*\
  !*** ./mixin/pagination.mixin.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    data() {\r\n        return {\r\n            page: 1,\r\n            pageSize: 30,\r\n            pageCount: 59,\r\n            unsplash: null,\r\n        }\r\n    },\r\n    methods: {\r\n        pageChangeHandler(page) {\r\n            this.loading = true\r\n            this.setupPagination(page)\r\n        },\r\n        setupPagination(currentPage) {\r\n            axios__WEBPACK_IMPORTED_MODULE_0__.get(\r\n                    `https://api.unsplash.com/photos/?page=${currentPage}&per_page=10&client_id=${this.accessKey}`\r\n                )\r\n                .then(response => (this.unsplash = response.data))\r\n                .finally(() => {\r\n                    setTimeout(() => {\r\n                        this.loading = false\r\n                    }, 1000)\r\n                })\r\n        },\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack:///./mixin/pagination.mixin.js?");

/***/ })

}]);