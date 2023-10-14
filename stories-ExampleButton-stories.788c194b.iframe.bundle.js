/*! For license information please see stories-ExampleButton-stories.788c194b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[535],{"./src/stories/ExampleButton.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:function(){return Large},Primary:function(){return Primary},Secondary:function(){return Secondary},Small:function(){return Small},Warning:function(){return Warning},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ExampleButton_stories}});__webpack_require__("./node_modules/react/index.js");var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_Small$parameters,_Small$parameters2,_Small$parameters2$do,_Warning$parameters,_Warning$parameters2,_Warning$parameters2$,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["primary","size","backgroundColor","label"],ExampleButton=function ExampleButton(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=_objectWithoutProperties(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",_objectSpread2(_objectSpread2({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:{backgroundColor:backgroundColor}},props),{},{children:label}))};try{ExampleButton.displayName="ExampleButton",ExampleButton.__docgenInfo={description:"Primary UI component for user interaction",displayName:"ExampleButton",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/ExampleButton.tsx#ExampleButton"]={docgenInfo:ExampleButton.__docgenInfo,name:"ExampleButton",path:"src/stories/ExampleButton.tsx#ExampleButton"})}catch(__react_docgen_typescript_loader_error){}var ExampleButton_stories={title:"Example/ExampleButton",component:ExampleButton,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},Primary={args:{primary:!0,label:"Example Button"}},Secondary={args:{label:"Example Button"}},Large={args:{size:"large",label:"Example Button"}},Small={args:{size:"small",label:"Example Button"}},Warning={args:{primary:!0,label:"Delete now",backgroundColor:"red"}};Primary.parameters=_objectSpread2(_objectSpread2({},Primary.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread2({originalSource:"{\n  args: {\n    primary: true,\n    label: 'Example Button'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=_objectSpread2(_objectSpread2({},Secondary.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread2({originalSource:"{\n  args: {\n    label: 'Example Button'\n  }\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),Large.parameters=_objectSpread2(_objectSpread2({},Large.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread2({originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Example Button'\n  }\n}"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),Small.parameters=_objectSpread2(_objectSpread2({},Small.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:_objectSpread2({originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Example Button'\n  }\n}"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source)})}),Warning.parameters=_objectSpread2(_objectSpread2({},Warning.parameters),{},{docs:_objectSpread2(_objectSpread2({},null===(_Warning$parameters=Warning.parameters)||void 0===_Warning$parameters?void 0:_Warning$parameters.docs),{},{source:_objectSpread2({originalSource:"{\n  args: {\n    primary: true,\n    label: 'Delete now',\n    backgroundColor: 'red'\n  }\n}"},null===(_Warning$parameters2=Warning.parameters)||void 0===_Warning$parameters2||null===(_Warning$parameters2$=_Warning$parameters2.docs)||void 0===_Warning$parameters2$?void 0:_Warning$parameters2$.source)})});var __namedExportsOrder=["Primary","Secondary","Large","Small","Warning"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);