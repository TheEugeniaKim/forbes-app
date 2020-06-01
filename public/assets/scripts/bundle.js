/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Variables\nvar API_CLIENTID = \"xehbc6il9cwCbakmIJVQSx6D-7E0DPlx95C7jkpwILk\";\nvar API_URL = \"https://api.unsplash.com/search/photos?page=1&per_page=10&client_id=\".concat(API_CLIENTID);\nvar form = document.querySelector('form');\nvar input = document.querySelector('input');\nvar imgContainer = document.querySelector('.img-container');\nvar allImgs = document.querySelectorAll('.img');\nvar nextBtn = document.querySelector('.next-btn');\nvar backBtn = document.querySelector('.back-btn');\nvar page = document.querySelector('.page');\nvar pagination = document.querySelector('.pagination');\nvar pageContainer = document.querySelector('.pagination-container');\nvar modalNode = document.querySelector('.modal');\nvar logo = document.querySelector('.forbes-logo');\nvar modal = modalNode.childNodes;\nvar searchTerm;\nvar pageNum = 1;\nvar images = []; // Add Event Listeners \n\nform.addEventListener('submit', function () {\n  return submitForm(event);\n});\nnextBtn.addEventListener('click', function () {\n  return nextTenPhotos(event);\n});\nbackBtn.addEventListener('click', function () {\n  return backTenPhotos(event);\n});\nlogo.addEventListener('click', function () {\n  location.reload();\n}); //Functions\n\nvar submitForm = function submitForm(event) {\n  event.preventDefault();\n  searchTerm = input.value;\n  input.value = \"\";\n  searchPhotos(searchTerm);\n};\n\nvar nextTenPhotos = function nextTenPhotos(event) {\n  pageNum++;\n  searchPhotos(searchTerm);\n};\n\nvar backTenPhotos = function backTenPhotos(event) {\n  if (pageNum > 1) {\n    pageNum--;\n    searchPhotos(searchTerm);\n  }\n};\n\nvar searchPhotos = function searchPhotos(searchTerm) {\n  var url = \"\".concat(API_URL, \"&query=\").concat(searchTerm, \"&page=\").concat(pageNum);\n  return fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    console.log(data);\n    images = data;\n    displayPhotos(data);\n  });\n};\n\nvar displayPhotos = function displayPhotos(data) {\n  //clears previous images on page \n  if (imgContainer.childNodes.length > 0) {\n    imgContainer.innerHTML = '';\n  } // update page number\n\n\n  if (data.results.length > 0) {\n    pagination.style.display = 'inline-block';\n    page.innerHTML = \"\";\n    page.insertAdjacentText('afterbegin', \"Page: \".concat(pageNum));\n  } //placing new images on page and adding event listeners for modal\n\n\n  data.results.forEach(function (img, index) {\n    var imgElement = document.createElement('img');\n    imgElement.src = img.urls.thumb;\n    imgElement.alt = img.alt_description;\n    imgElement.className = \"img\";\n    imgElement.id = index;\n    imgElement.addEventListener('click', function () {\n      return displayModal(img, index);\n    });\n    imgContainer.appendChild(imgElement);\n  });\n}; //helper function - get modal element\n\n\nvar findModalElement = function findModalElement(element) {\n  return document.querySelector(\".modal \".concat(element));\n};\n\nvar displayModal = function displayModal(img, index) {\n  modalNode.style.display = 'block';\n  findModalElement('img').src = img.urls.regular;\n  findModalElement('p').innerHTML = img.description;\n};\n\nfindModalElement('span').addEventListener('click', function () {\n  console.log('clicking');\n  document.querySelector('body').style.overflow = 'auto';\n  modalNode.style.display = 'none';\n});\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });