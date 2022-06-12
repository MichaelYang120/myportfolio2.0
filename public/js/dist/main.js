(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// preloader\nconst preloader = document.querySelector('.preloader');\nwindow.addEventListener('load', function () {\n  preloader.classList.add('hide-preloader');\n}); // project list\n\nconst menu = [{\n  id: 1,\n  title: 'Kayak Email',\n  category: 'email',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bdbbbff8-dac0-4312-b887-b6b9e3b61f9d.gif?ClientID=vimeo-core-prod&Date=1654951998&Signature=4b006bfb161ef3ab0af581a2a133d9cdebf800f2',\n  desc: \"Skills Used: HTML, CSS, SASS, Media Queries, and Framework\",\n  button: 'asdfjlskadf',\n  source: 'https://github.com/MichaelYang120/email-template-projects/blob/main-v2/kayak%20email',\n  live: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/MichaelYang120/email-template-projects/main-v2/kayak%20email'\n}, {\n  // '//im5.ezgif.com/tmp/ezgif-5-26fad992ca.gif'\n  id: 2,\n  title: 'Mens Wearhouse Email',\n  category: 'email',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/0b0b8097-2d39-4d5b-b06b-f832d961834c.gif?ClientID=vimeo-core-prod&Date=1654958065&Signature=58645330ce275f063c74a9de8ba38c4e4419b016',\n  desc: \"Skills Used: HTML, CSS, SASS, Media Queries, and Framework \",\n  source: 'https://github.com/MichaelYang120/email-template-projects/blob/main-v2/men-email',\n  live: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/MichaelYang120/email-template-projects/main-v2/men-email'\n}, {\n  id: 3,\n  title: 'Budget Email',\n  category: 'email',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/8da15f56-a255-4e9b-8564-6b20fc1fd0c4.gif?ClientID=vimeo-core-prod&Date=1654958916&Signature=a0deebee2416d333ce46182234fd9ab1291860c3',\n  desc: \"Skills Used: HTML, CSS, SASS, Media Queries, and Framework \",\n  source: 'https://github.com/MichaelYang120/email-template-projects/blob/main-v2/budget.html#L1',\n  live: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/MichaelYang120/email-template-projects/main-v2/budget.html'\n}, {\n  id: 4,\n  title: 'K Green Drinks Landing Page',\n  category: 'Webpage',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/69c632dc-3aba-46b2-9338-0cab929d2190.gif?ClientID=vimeo-core-prod&Date=1655011492&Signature=63271d8a6385c4b6641c51de7cfb83d64f4ba294',\n  desc: \"Skills Used: HTML, CSS, Javascript\",\n  source: 'https://github.com/MichaelYang120/michaelyang120.github.io/blob/main-v2/kgreenlandingpage/index.html',\n  live: 'https://michaelyang120.github.io/kgreenlandingpage/index.html'\n}, {\n  id: 5,\n  title: 'Lux Landing Page',\n  category: 'Webpage',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/29035228-1d6a-4930-8806-693bb3016382.gif?ClientID=vimeo-core-prod&Date=1655017518&Signature=d00be2dd5ad347f4509dd9348fe8d3109624ac0e',\n  desc: \"Skills Used: HTML, CSS\",\n  source: 'https://github.com/MichaelYang120/michaelyang120.github.io/blob/main-v2/luxlandingpage/index.html',\n  live: 'https://michaelyang120.github.io/luxlandingpage/index.html'\n}, {\n  id: 6,\n  title: 'Mortgage Calculator',\n  category: 'Webpage',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/213f43af-c5ad-4d57-a7b3-a40352767299.gif?ClientID=vimeo-core-prod&Date=1655020223&Signature=3a3533e99b48579425c2106b51468c21cbb8b0cb',\n  desc: \"Skills Used: HTML, CSS, Javascript\",\n  source: 'https://github.com/MichaelYang120/michaelyang120.github.io/blob/main-v2/mortgage-cal/index.html',\n  live: 'https://michaelyang120.github.io/mortgage-cal/index.html'\n}, {\n  id: 7,\n  title: 'Shopify Website',\n  category: 'Webpage',\n  price: '',\n  img: 'https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/01c4dea0-a000-441a-94df-ed8bdc7fff80.gif?ClientID=vimeo-core-prod&Date=1655019035&Signature=62d263ada8946d632af368cf8986de4f4d305d82',\n  desc: \"Click on live preview to see website \\\"Password: onestop\\\"\",\n  live: 'https://onetopstop.myshopify.com/'\n} // {\n// \tid: 8,\n// \ttitle: 'american classic',\n// \tcategory: 'lunch',\n// \tprice: 12.99,\n// \timg: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',\n// \tdesc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `\n// },\n// {\n// \tid: 9,\n// \ttitle: 'quarantine buddy',\n// \tcategory: 'shakes',\n// \tprice: 16.99,\n// \timg: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',\n// \tdesc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`\n// },\n// {\n// \tid: 10,\n// \ttitle: 'bison steak',\n// \tcategory: 'email',\n// \tprice: 22.99,\n// \timg: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',\n// \tdesc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`\n// }\n]; // typewritter effect on occupation\n\nvar app = document.getElementById('test');\nvar typewriter = new Typewriter(app, {\n  loop: true // cursor: \"\",\n\n});\ntypewriter.typeString('software engineer').pauseFor(1500).deleteAll().typeString('frontend developer').pauseFor(1500).deleteAll().typeString('email developer').pauseFor(1500).deleteAll().typeString('web content editor').pauseFor(1500).start(); // parent element\n\nconst projectSectionCenter = document.querySelector('.projects-section-center');\nconst btnContainer = document.querySelector('.btn-container');\nwindow.addEventListener('DOMContentLoaded', function () {\n  displayMenuItems(menu);\n  displayMenuButtons();\n});\n\nfunction displayMenuItems(menuItems) {\n  let displayMenu = menuItems.map(function (item) {\n    return \"\\n\\t\\t<article class=\\\"projects-item\\\">\\n\\t\\t\\t<img src=\\\"\".concat(item.img, \"\\\" alt=\\\"\").concat(item.title, \"\\\" class=\\\"photo\\\" />\\n\\t\\t\\t<div class=\\\"projects-info\\\">\\n\\t\\t\\t\\t<header>\\n\\t\\t\\t\\t\\t<h4>\").concat(item.title, \"</h4>\\n\\t\\t\\t\\t\\t<h4 class=\\\"tech-info\\\">\").concat(item.price, \"</h4>\\n\\t\\t\\t\\t</header>\\n\\t\\t\\t\\t<p class=\\\"projects-text\\\">\\n\\t\\t\\t\\t\").concat(item.desc, \"\\n\\t\\t\\t\\t</p>\\n                <button class=\\\"code-btn\\\"><a href=\\\"\").concat(item.source, \"\\\">\\n                 Source Code <i class=\\\"fa-brands fa-github\\\"></i></a></button>\\n                <button class=\\\"code-btn\\\"><a href=\\\"\").concat(item.live, \"\\\">Live Preview <i class=\\\"fa-solid fa-play\\\"></i></a></button>\\n\\n\\t\\t\\t</div>\\n\\t\\t</article>\\n\\t\\t\");\n  });\n  displayMenu = displayMenu.join(''); // console.log(displayMenu);\n\n  projectSectionCenter.innerHTML = displayMenu;\n}\n\nfunction displayMenuButtons() {\n  const categories = menu.reduce(function (values, item) {\n    if (!values.includes(item.category)) {\n      values.push(item.category);\n    }\n\n    return values;\n  }, ['all']); // filter btn\n\n  const categoryBtn = categories.map(function (category) {\n    return \"<button type=\\\"button\\\" class=\\\"filter-btn\\\" data-id=\".concat(category, \">\\n\\t\\t\\t\").concat(category, \"\\n\\t\\t  </button>\");\n  }).join('');\n  btnContainer.innerHTML = categoryBtn;\n  const filterBtn = btnContainer.querySelectorAll('.filter-btn');\n  console.log(filterBtn);\n  filterBtn.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      const category = e.currentTarget.dataset.id;\n      const menuCategory = menu.filter(function (menuItem) {\n        if (menuItem.category === category) {\n          return menuItem;\n        }\n      });\n\n      if (category === 'all') {\n        displayMenuItems(menu);\n      } else {\n        displayMenuItems(menuCategory);\n      }\n    });\n  });\n} // jokes\n\n\nconst url = 'https://icanhazdadjoke.com/';\nconst btnJokes = document.querySelector('.btn-jokes');\nconst result = document.querySelector('.result');\nbtnJokes.addEventListener('click', function () {\n  fetchDadJoke();\n});\n\nconst fetchDadJoke =\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(function* () {\n    try {\n      const response = yield fetch(url, {\n        headers: {\n          Accept: 'application/json',\n          'User-Agent': 'learning app'\n        }\n      });\n\n      if (!response.ok) {\n        throw new Error(' Error');\n      }\n\n      const data = yield response.json();\n      result.textContent = data.joke;\n    } catch (error) {\n      console.log(error.message);\n      result.textContent = 'There was an error...';\n    }\n  });\n\n  return function fetchDadJoke() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nfetchDadJoke();\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});