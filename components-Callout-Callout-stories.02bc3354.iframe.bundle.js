/*! For license information please see components-Callout-Callout-stories.02bc3354.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui_kit=self.webpackChunkui_kit||[]).push([[827],{"./src/components/Callout/Callout.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:function(){return Large},Small:function(){return Small},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Callout_stories}});var _templateObject,_templateObject2,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Button=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Button/index.tsx")),Card=__webpack_require__("./src/components/Card/index.tsx"),Typography=__webpack_require__("./src/components/Typography/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: ",";\n  gap: ",";\n  align-items: ",";\n  justify-content: space-between;\n"])),(function(_ref){return"large"===_ref.size?"column":"row"}),(function(_ref2){return"large"===_ref2.size?"20px":"56px"}),(function(_ref3){return"large"===_ref3.size?"start":"center"})),ButtonsContainer=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  gap: 20px;\n"])));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Callout/Callout.styled.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Callout/Callout.styled.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{ButtonsContainer.displayName="ButtonsContainer",ButtonsContainer.__docgenInfo={description:"",displayName:"ButtonsContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Callout/Callout.styled.tsx#ButtonsContainer"]={docgenInfo:ButtonsContainer.__docgenInfo,name:"ButtonsContainer",path:"src/components/Callout/Callout.styled.tsx#ButtonsContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Callout(_ref){var title=_ref.title,text=_ref.text,buttons=_ref.buttons,className=_ref.className;return(0,jsx_runtime.jsx)(Card.Z,{size:title?"large":"small",width:title?"800px":"100%",className:className,children:(0,jsx_runtime.jsxs)(Container,{size:title?"large":"small",children:[title?(0,jsx_runtime.jsx)(Typography.Z,{role:"h2",fontStyle:"bold",content:title,mb:"0",mt:"0"}):null,text?(0,jsx_runtime.jsx)(Typography.Z,{role:title?"h4":"h3",content:text,mb:title?"14px":"0",mt:"0"}):null,(0,jsx_runtime.jsx)(ButtonsContainer,{children:buttons})]})})}var _Large$parameters,_Large$parameters2,_Large$parameters2$do,_Small$parameters,_Small$parameters2,_Small$parameters2$do,components_Callout=Callout;try{Callout.displayName="Callout",Callout.__docgenInfo={description:"",displayName:"Callout",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Allows to use styled-components",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Callout/index.tsx#Callout"]={docgenInfo:Callout.__docgenInfo,name:"Callout",path:"src/components/Callout/index.tsx#Callout"})}catch(__react_docgen_typescript_loader_error){}var Callout_stories={title:"Molecules/Callout",component:components_Callout,parameters:{layout:"centered"},tags:["autodocs"]},butttonsArray=[(0,jsx_runtime.jsx)(Button.Z,{label:"Button",bordered:!0},"Button"),(0,jsx_runtime.jsx)(Button.Z,{label:"Action",primary:!0},"Action")],Large={args:{title:"Callout Title",text:"Supportive text for the callout goes here, which informs and helps users decide what they should do next.",buttons:butttonsArray}},Small={args:{text:"Supportive text for the callout.",buttons:butttonsArray}};Large.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Large.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    title: 'Callout Title',\n    text: 'Supportive text for the callout goes here, which informs and helps users decide what they should do next.',\n    buttons: butttonsArray\n  }\n}"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),Small.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Small.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    text: 'Supportive text for the callout.',\n    buttons: butttonsArray\n  }\n}"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source)})});var __namedExportsOrder=["Large","Small"]},"./src/components/Button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Button}});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  cursor: ",";\n  padding: ",";\n  background-color: ",";\n  border: ",";\n  border-radius: 6px;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  color: ",";\n  text-align: center;\n  font-family: Inter;\n  font-size: ",";\n  font-style: normal;\n  font-weight: ",";\n  line-height: ",";\n"])),(function(_ref){return _ref.disabled?"not-allowed":"pointer"}),(function(_ref2){return"large"===_ref2.size?"21px 101px 21px 106px":"15px 68px"}),(function(_ref3){var primary=_ref3.primary,disabled=_ref3.disabled,theme=_ref3.theme;return disabled?theme.tint:primary?theme.accent:theme.bright}),(function(_ref4){var primary=_ref4.primary,bordered=_ref4.bordered,disabled=_ref4.disabled,error=_ref4.error,theme=_ref4.theme;return"1px solid ".concat(disabled?theme.tint:primary?theme.accent:error?theme.error:bordered?theme.accent:theme.bright)}),(function(_ref5){var primary=_ref5.primary,disabled=_ref5.disabled,error=_ref5.error,theme=_ref5.theme;return disabled?theme.shade:primary?theme.bright:error?theme.error:theme.accent}),(function(_ref6){return"large"===_ref6.size?"28px":"20px"}),(function(_ref7){return"large"===_ref7.size?"700":"500"}),(function(_ref8){return"large"===_ref8.size?"36px":"28px"}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styled.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.styled.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Button_Button(_ref){var onClick=_ref.onClick,bordered=_ref.bordered,primary=_ref.primary,disabled=_ref.disabled,size=_ref.size,label=_ref.label,error=_ref.error,className=_ref.className;return(0,jsx_runtime.jsx)(Button,{onClick:onClick,bordered:bordered,primary:primary,disabled:disabled,size:size,error:error,className:className,children:label})}var components_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},bordered:{defaultValue:null,description:"Should the button have a border?",name:"bordered",required:!1,type:{name:"boolean"}},primary:{defaultValue:null,description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Is this button disabled?",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Does button have an error state?",name:"error",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Allows to use styled-components",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Card/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Card}});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Card=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  border-radius: 16px;\n  background: ",";\n  position: relative;\n  padding: ",";\n  ","\n"])),(function(_ref){return _ref.theme.bright}),(function(_ref2){switch(_ref2.size){case"large":return"50px";case"small":return"23px 50px 22px 50px";default:return"none"}}),(function(_ref3){var width=_ref3.width;return(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    width: ",";\n  "])),width)}));try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.styled.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.styled.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Card_Card(_ref){var size=_ref.size,width=_ref.width,children=_ref.children,className=_ref.className;return(0,jsx_runtime.jsx)(Card,{size:size,width:width,className:className,children:children})}var components_Card=Card_Card;try{Card_Card.displayName="Card",Card_Card.__docgenInfo={description:"",displayName:"Card",props:{size:{defaultValue:null,description:"Affects the paddings in the card",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},children:{defaultValue:null,description:"What elements should be inside the card?",name:"children",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"The width of the card",name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Allows to use styled-components",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/index.tsx#Card"]={docgenInfo:Card_Card.__docgenInfo,name:"Card",path:"src/components/Card/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return components_Typography}});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TypographyBase=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  color: ",";\n  font-style: ",";\n  font-weight: ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"])),(function(_ref){return _ref.theme.text}),(function(_ref2){return"italic"===_ref2.$fontStyle?"italic":"normal"}),(function(_ref3){return"bold"===_ref3.$fontStyle?"700":"500"}),(function(_ref4){var $mt=_ref4.$mt;return(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    margin-top: ",";\n  "])),$mt)}),(function(_ref5){var $mr=_ref5.$mr;return(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    margin-right: ",";\n  "])),$mr)}),(function(_ref6){var $mb=_ref6.$mb;return(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    margin-bottom: ",";\n  "])),$mb)}),(function(_ref7){var $ml=_ref7.$ml;return(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    margin-left: ",";\n  "])),$ml)})),HeadingH1=styled_components_browser_esm.ZP.h1(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  ","\n  font-size: 56px;\n  line-height: 68px;\n"])),TypographyBase),HeadingH2=styled_components_browser_esm.ZP.h2(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  ","\n  font-size: 40px;\n  line-height: 44px;\n"])),TypographyBase),HeadingH3=styled_components_browser_esm.ZP.h3(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n  ","\n  font-size: 28px;\n  line-height: 36px;\n"])),TypographyBase),HeadingH4=styled_components_browser_esm.ZP.h4(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n  ","\n  font-size: 20px;\n  line-height: 28px;\n"])),TypographyBase),ParagraphX1=styled_components_browser_esm.ZP.p(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n  ","\n  font-size: 16px;\n  line-height: 22px;\n"])),TypographyBase),ParagraphX2=styled_components_browser_esm.ZP.p(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n  ","\n  font-size: 14px;\n  font-weight: ",";\n  line-height: 20px;\n"])),TypographyBase,(function(_ref8){return"bold"===_ref8.$fontStyle?"700":"400"}));try{HeadingH1.displayName="HeadingH1",HeadingH1.__docgenInfo={description:"",displayName:"HeadingH1",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.styled.tsx#HeadingH1"]={docgenInfo:HeadingH1.__docgenInfo,name:"HeadingH1",path:"src/components/Typography/Typography.styled.tsx#HeadingH1"})}catch(__react_docgen_typescript_loader_error){}try{HeadingH2.displayName="HeadingH2",HeadingH2.__docgenInfo={description:"",displayName:"HeadingH2",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.styled.tsx#HeadingH2"]={docgenInfo:HeadingH2.__docgenInfo,name:"HeadingH2",path:"src/components/Typography/Typography.styled.tsx#HeadingH2"})}catch(__react_docgen_typescript_loader_error){}try{HeadingH3.displayName="HeadingH3",HeadingH3.__docgenInfo={description:"",displayName:"HeadingH3",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.styled.tsx#HeadingH3"]={docgenInfo:HeadingH3.__docgenInfo,name:"HeadingH3",path:"src/components/Typography/Typography.styled.tsx#HeadingH3"})}catch(__react_docgen_typescript_loader_error){}try{HeadingH4.displayName="HeadingH4",HeadingH4.__docgenInfo={description:"",displayName:"HeadingH4",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.styled.tsx#HeadingH4"]={docgenInfo:HeadingH4.__docgenInfo,name:"HeadingH4",path:"src/components/Typography/Typography.styled.tsx#HeadingH4"})}catch(__react_docgen_typescript_loader_error){}try{ParagraphX1.displayName="ParagraphX1",ParagraphX1.__docgenInfo={description:"",displayName:"ParagraphX1",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.styled.tsx#ParagraphX1"]={docgenInfo:ParagraphX1.__docgenInfo,name:"ParagraphX1",path:"src/components/Typography/Typography.styled.tsx#ParagraphX1"})}catch(__react_docgen_typescript_loader_error){}try{ParagraphX2.displayName="ParagraphX2",ParagraphX2.__docgenInfo={description:"",displayName:"ParagraphX2",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.styled.tsx#ParagraphX2"]={docgenInfo:ParagraphX2.__docgenInfo,name:"ParagraphX2",path:"src/components/Typography/Typography.styled.tsx#ParagraphX2"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Typography(_ref){var content=_ref.content,role=_ref.role,fontStyle=_ref.fontStyle,mb=_ref.mb,mt=_ref.mt,mr=_ref.mr,ml=_ref.ml,className=_ref.className;switch(role){case"h1":return(0,jsx_runtime.jsx)(HeadingH1,{$fontStyle:fontStyle,$mb:mb,$mt:mt,$mr:mr,$ml:ml,className:className,children:content});case"h2":return(0,jsx_runtime.jsx)(HeadingH2,{$fontStyle:fontStyle,$mb:mb,$mt:mt,$mr:mr,$ml:ml,className:className,children:content});case"h3":return(0,jsx_runtime.jsx)(HeadingH3,{$fontStyle:fontStyle,$mb:mb,$mt:mt,$mr:mr,$ml:ml,className:className,children:content});case"h4":return(0,jsx_runtime.jsx)(HeadingH4,{$fontStyle:fontStyle,$mb:mb,$mt:mt,$mr:mr,$ml:ml,className:className,children:content});case"p1":default:return(0,jsx_runtime.jsx)(ParagraphX1,{$fontStyle:fontStyle,$mb:mb,$mt:mt,$mr:mr,$ml:ml,className:className,children:content});case"p2":return(0,jsx_runtime.jsx)(ParagraphX2,{$fontStyle:fontStyle,$mb:mb,$mt:mt,$mr:mr,$ml:ml,className:className,children:content})}}var components_Typography=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"p1"'},{value:'"p2"'}]}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"italic"'}]}},mt:{defaultValue:null,description:"Top margin",name:"mt",required:!1,type:{name:"string"}},mb:{defaultValue:null,description:"Bottom margin",name:"mb",required:!1,type:{name:"string"}},mr:{defaultValue:null,description:"Right margin",name:"mr",required:!1,type:{name:"string"}},ml:{defaultValue:null,description:"Left margin",name:"ml",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Allows to use styled-components",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/index.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/index.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);