(()=>{var e={};e.id=928,e.ids=[928],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6005:e=>{"use strict";e.exports=require("node:crypto")},7431:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u}),r(8839),r(7130),r(5128);var i=r(2357),n=r(1284),o=r(8027),s=r.n(o),a=r(5442),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["test",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8839)),"/Users/mehmetaliozmen/dailytoken/frontend/app/test/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7130)),"/Users/mehmetaliozmen/dailytoken/frontend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5128,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/mehmetaliozmen/dailytoken/frontend/app/test/page.tsx"],d="/test/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/test/page",pathname:"/test",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},5948:(e,t,r)=>{Promise.resolve().then(r.bind(r,6855)),Promise.resolve().then(r.bind(r,9760))},6115:(e,t,r)=>{Promise.resolve().then(r.bind(r,9783))},7330:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3877,23)),Promise.resolve().then(r.t.bind(r,9158,23)),Promise.resolve().then(r.t.bind(r,7341,23)),Promise.resolve().then(r.t.bind(r,4953,23)),Promise.resolve().then(r.t.bind(r,1276,23)),Promise.resolve().then(r.t.bind(r,4066,23))},6855:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var i=r(6449);function n({children:e}){return i.jsx(i.Fragment,{children:e})}r(9802),r(7502)},9760:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var i=r(6449),n=r(9190),o=r(7178),s=r(6277),a=r(3377),l=r(3045);let u={id:480,name:"World Chain",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://worldchain-mainnet.g.alchemy.com/public"]},public:{http:["https://worldchain-mainnet.g.alchemy.com/public"]}},blockExplorers:{default:{name:"World Scan",url:"https://worldscan.org"}}},c=(0,n._)({chains:[u],transports:{[u.id]:(0,o.d)()},ssr:!0}),d=new a.S;function h({children:e}){return i.jsx(s.F,{config:c,children:i.jsx(l.aH,{client:d,children:e})})}},9783:(e,t,r)=>{"use strict";let i,n,o,s;r.r(t),r.d(t,{default:()=>lN});var a,l,u,c,d,h=r(6449);function p(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let i of r)if(!Object.prototype.hasOwnProperty.call(t,i)||!Object.is(e[i],t[i]))return!1;return!0}var f=r(9802),m=r.t(f,2),g=r(2255),v=r(7407);let{useDebugValue:y}=f,{useSyncExternalStoreWithSelector:w}=g,x=e=>e,b=(e,t)=>{let r=(0,v.M)(e),i=(e,i=t)=>(function(e,t=x,r){let i=w(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return y(i),i})(r,e,i);return Object.assign(i,r),i};var E=r(9034),C=r(3389),P={en:{"All set!":"All set!","Your World ID is now connected":"Your World ID is now connected","Transmitting verification to host app. Please wait...":"Transmitting verification to host app. Please wait...","Something went wrong":"Something went wrong","Verification Declined":"Verification Declined","Request cancelled":"Request cancelled","Connection to your wallet failed. Please try again.":"Connection to your wallet failed. Please try again.","You've cancelled the request in World App.":"You've cancelled the request in World App.","You have already verified the maximum number of times for this action.":"You have already verified the maximum number of times for this action.","It seems you do not have the verification level required by this app.":"It seems you do not have the verification level required by this app.","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"Invalid network. If you are the app owner, visit docs.world.org/test for details.","Your identity is still being registered. Please wait a few minutes and try again.":"Your identity is still being registered. Please wait a few minutes and try again.","We couldn't complete your request. Please try again.":"We couldn't complete your request. Please try again.","Try Again":"Try Again","Open World App":"Open World App","Hide QR Code":"Hide QR Code","Display QR Code":"Display QR Code","QR Code copied":"QR Code copied","Connect your World ID":"Connect your World ID","Use phone camera to scan the QR code":"Use phone camera to scan the QR code","Connecting...":"Connecting...","Please continue in app":"Please continue in app","You will be redirected to the app, please return to this page once you're done":"You will be redirected to the app, please return to this page once you're done","Action cannot be an empty string.":"Action cannot be an empty string.","Invalid IDKitStage :stage.":"Invalid IDKitStage :stage.","Terms & Privacy":"Terms & Privacy"},es:{"All set!":"\xa1Todo listo!","Your World ID is now connected":"Tu World ID ahora est\xe1 conectado","Transmitting verification to host app. Please wait...":"Transmitiendo verificaci\xf3n a la aplicaci\xf3n host. Por favor espera...","Something went wrong":"Algo sali\xf3 mal","Verification Declined":"Verificaci\xf3n rechazada","Request cancelled":"Solicitud cancelada","Connection to your wallet failed. Please try again.":"La conexi\xf3n a tu billetera fall\xf3. Por favor intenta de nuevo.","You've cancelled the request in World App.":"Has cancelado la solicitud en World App.","You have already verified the maximum number of times for this action.":"Ya has verificado el n\xfamero m\xe1ximo de veces para esta acci\xf3n.","It seems you do not have the verification level required by this app.":"Parece que no tienes el nivel de verificaci\xf3n requerido por esta aplicaci\xf3n.","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"Red inv\xe1lida. Si eres el propietario de la aplicaci\xf3n, visita docs.world.org/test para m\xe1s detalles.","Your identity is still being registered. Please wait a few minutes and try again.":"Tu identidad a\xfan se est\xe1 registrando. Por favor espera unos minutos e intenta de nuevo.","We couldn't complete your request. Please try again.":"No pudimos completar tu solicitud. Por favor intenta de nuevo.","Try Again":"Intentar de nuevo","Open World App":"Abrir World App","Hide QR Code":"Ocultar c\xf3digo QR","Display QR Code":"Mostrar c\xf3digo QR","QR Code copied":"C\xf3digo QR copiado","Connect your World ID":"Conecta tu World ID","Use phone camera to scan the QR code":"Usa la c\xe1mara del tel\xe9fono para escanear el c\xf3digo QR","Connecting...":"Conectando...","Please continue in app":"Por favor contin\xfaa en la aplicaci\xf3n","You will be redirected to the app, please return to this page once you're done":"Ser\xe1s redirigido a la aplicaci\xf3n, por favor regresa a esta p\xe1gina una vez que hayas terminado","Action cannot be an empty string.":"La acci\xf3n no puede ser una cadena vac\xeda.","Invalid IDKitStage :stage.":"IDKitStage inv\xe1lido :stage.","Terms & Privacy":"T\xe9rminos y privacidad"},th:{"All set!":"เรียบร้อย!","Your World ID is now connected":"World ID ของคุณเชื่อมต่อแล้ว","Transmitting verification to host app. Please wait...":"กำลังส่งการยืนยันไปยังแอปโฮสต์ กรุณารอสักครู่...","Something went wrong":"เกิดข้อผิดพลาด","Verification Declined":"การยืนยันถูกปฏิเสธ","Request cancelled":"คำขอถูกยกเลิก","Connection to your wallet failed. Please try again.":"การเชื่อมต่อกับกระเป๋าเงินของคุณล้มเหลว กรุณาลองอีกครั้ง","You've cancelled the request in World App.":"คุณได้ยกเลิกคำขอใน World App","You have already verified the maximum number of times for this action.":"คุณได้ยืนยันครบจำนวนครั้งสูงสุดสำหรับการดำเนินการนี้แล้ว","It seems you do not have the verification level required by this app.":"ดูเหมือนว่าคุณไม่มีระดับการยืนยันที่แอปนี้ต้องการ","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"เครือข่ายไม่ถูกต้อง หากคุณเป็นเจ้าของแอป โปรดไปที่ docs.world.org/test สำหรับรายละเอียด","Your identity is still being registered. Please wait a few minutes and try again.":"ตัวตนของคุณยังอยู่ระหว่างการลงทะเบียน กรุณารอสักครู่แล้วลองอีกครั้ง","We couldn't complete your request. Please try again.":"เราไม่สามารถดำเนินการตามคำขอของคุณได้ กรุณาลองอีกครั้ง","Try Again":"ลองอีกครั้ง","Open World App":"เปิด World App","Hide QR Code":"ซ่อน QR Code","Display QR Code":"แสดง QR Code","QR Code copied":"คัดลอก QR Code แล้ว","Connect your World ID":"เชื่อมต่อ World ID ของคุณ","Use phone camera to scan the QR code":"ใช้กล้องโทรศัพท์เพื่อสแกน QR code","Connecting...":"กำลังเชื่อมต่อ...","Please continue in app":"กรุณาดำเนินการต่อในแอป","You will be redirected to the app, please return to this page once you're done":"คุณจะถูกนำไปยังแอป กรุณากลับมาที่หน้านี้เมื่อเสร็จแล้ว","Action cannot be an empty string.":"การดำเนินการไม่สามารถเป็นข้อความว่างได้","Invalid IDKitStage :stage.":"IDKitStage ไม่ถูกต้อง :stage.","Terms & Privacy":"ข้อกำหนดและความเป็นส่วนตัว"}},T={},k=e=>{T=e},S=()=>T,A=()=>{for(let e of navigator.languages){let[t]=e.split("-"),r=t.toLowerCase();if(r in P)return r}},j=()=>{let e=S();return e.language&&e.language in P?e.language:A()||"en"},R=()=>P[j()],M=()=>R(),D=(e,t)=>{if(!t)return e;let r=e;for(let[e,i]of Object.entries(t))r=r.replace(`:${e}`,i);return r};function N(e,...t){let[r]=t;return"undefined"==typeof navigator&&"undefined"==typeof window?D(e,r):D(M()?.[e]??e,r)}var L=(n?b(n,o):b)((e,t)=>({app_id:"",signal:"",action:"",action_description:"",bridge_url:"",verification_level:E.jG,partner:!1,open:!1,result:null,errorTitle:"",errorDetail:"",autoClose:!0,errorState:null,processing:!1,errorCallbacks:{},verifyCallbacks:{},successCallbacks:{},stage:"WORLD_ID",setStage:t=>e({stage:t}),setErrorState:t=>e({errorState:t}),setProcessing:t=>e({processing:t}),retryFlow:()=>{e({stage:"WORLD_ID",errorState:null})},addErrorCallback:(t,r)=>{e(e=>(e.errorCallbacks[r]=t,e))},addSuccessCallback:(t,r)=>{e(e=>(e.successCallbacks[r]=t,e))},addVerificationCallback:(t,r)=>{e(e=>(e.verifyCallbacks[r]=t,e))},setOptions:({handleVerify:r,onSuccess:i,signal:n,action:o,app_id:s,partner:a,onError:l,verification_level:u,action_description:c,bridge_url:d,autoClose:h,advanced:p},f)=>{e({signal:n,action:o,bridge_url:d,action_description:c,autoClose:h??!0,app_id:p?.self_hosted?"self_hosted":s,verification_level:u??E.jG,partner:a}),t().addSuccessCallback(i,f),l&&t().addErrorCallback(l,f),r&&t().addVerificationCallback(r,f)},handleVerify:r=>{e({stage:"HOST_APP_VERIFICATION",processing:!1}),Promise.all(Object.values(t().verifyCallbacks).map(async e=>e?.(r))).then(()=>{e({stage:"SUCCESS",result:r}),t().autoClose&&setTimeout(()=>t().onOpenChange(!1),2500)},t=>{let r;t&&"object"==typeof t&&t.message&&(r=t.message),e({stage:"ERROR",errorState:{code:E.ov.FailedByHostApp,message:r?N(r):void 0}})})},onOpenChange:r=>{if(r)return e({open:r});let i=t().errorState;if("ERROR"===t().stage&&i){let e=t().errorCallbacks;requestAnimationFrame(()=>Object.values(e).forEach(e=>void e?.(i)))}let n=t().result;if("SUCCESS"==t().stage&&n){let e=t().successCallbacks;requestAnimationFrame(()=>Object.values(e).forEach(e=>void e?.(n)))}e({open:r,result:null,errorState:null,processing:!1,stage:"WORLD_ID"})}}),p),I=((s=I||{}).HOOK="hook",s.PROPS="props",s.MANUAL="manual",s),V=e=>{let t=C.create(e,{errorCorrectionLevel:"M"}).modules.data,r=Math.sqrt(t.length);return t.reduce((e,t,i)=>(i%r==0?e.push([t]):e[e.length-1].push(t),e),[])},F=(0,f.memo)(({data:e,size:t=300})=>{let r=(0,f.useMemo)(()=>{let r=[],i=V(e),n=t/i.length;return[{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:e,y:t})=>{let o=(i.length-7)*n*e,s=(i.length-7)*n*t;for(let i=0;i<3;i++)r.push((0,h.jsx)("rect",{fill:"currentColor",x:o+n*i,y:s+n*i,width:n*(7-2*i),height:n*(7-2*i),rx:-((i-2)*5),ry:-((i-2)*5),className:i%3==0?"text-black":i%3==1?"text-white":"text-black"},`${i}-${e}-${t}`))}),i.forEach((e,t)=>{e.forEach((e,o)=>{i[t][o]&&(t<7&&o<7||t>i.length-8&&o<7||t<7&&o>i.length-8||r.push((0,h.jsx)("circle",{fill:"currentColor",r:n/2.2,cx:t*n+n/2,cy:o*n+n/2,className:"text-black dark:text-white"},`circle-${t}-${o}`)))})}),r},[t,e]);return(0,h.jsx)("svg",{height:t,width:t,"data-test-id":"qr-code",children:r})}),O=r(9580);function B(e,t,{checkForDefaultPrevented:r=!0}={}){return function(i){if(e?.(i),!1===r||!i.defaultPrevented)return t?.(i)}}function U(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function _(...e){return t=>{let r=!1,i=e.map(e=>{let i=U(e,t);return r||"function"!=typeof i||(r=!0),i});if(r)return()=>{for(let t=0;t<i.length;t++){let r=i[t];"function"==typeof r?r():U(e[t],null)}}}}function z(...e){return f.useCallback(_(...e),e)}function W(e,t=[]){let r=[],i=()=>{let t=r.map(e=>f.createContext(e));return function(r){let i=r?.[e]||t;return f.useMemo(()=>({[`__scope${e}`]:{...r,[e]:i}}),[r,i])}};return i.scopeName=e,[function(t,i){let n=f.createContext(i),o=r.length;r=[...r,i];let s=t=>{let{scope:r,children:i,...s}=t,a=r?.[e]?.[o]||n,l=f.useMemo(()=>s,Object.values(s));return(0,h.jsx)(a.Provider,{value:l,children:i})};return s.displayName=t+"Provider",[s,function(r,s){let a=s?.[e]?.[o]||n,l=f.useContext(a);if(l)return l;if(void 0!==i)return i;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=r.reduce((t,{useScope:r,scopeName:i})=>{let n=r(e)[`__scope${i}`];return{...t,...n}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return r.scopeName=t.scopeName,r}(i,...t)]}function H(e){let t=function(e){let t=f.forwardRef((e,t)=>{let{children:r,...i}=e;if(f.isValidElement(r)){let e,n;let o=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref,s=function(e,t){let r={...t};for(let i in t){let n=e[i],o=t[i];/^on[A-Z]/.test(i)?n&&o?r[i]=(...e)=>{let t=o(...e);return n(...e),t}:n&&(r[i]=n):"style"===i?r[i]={...n,...o}:"className"===i&&(r[i]=[n,o].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props);return r.type!==f.Fragment&&(s.ref=t?_(t,o):o),f.cloneElement(r,s)}return f.Children.count(r)>1?f.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}(e),r=f.forwardRef((e,r)=>{let{children:i,...n}=e,o=f.Children.toArray(i),s=o.find(K);if(s){let e=s.props.children,i=o.map(t=>t!==s?t:f.Children.count(e)>1?f.Children.only(null):f.isValidElement(e)?e.props.children:null);return(0,h.jsx)(t,{...n,ref:r,children:f.isValidElement(e)?f.cloneElement(e,void 0,i):null})}return(0,h.jsx)(t,{...n,ref:r,children:i})});return r.displayName=`${e}.Slot`,r}"undefined"!=typeof window&&window.document&&window.document.createElement;var $=Symbol("radix.slottable");function K(e){return f.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===$}var Y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let r=H(`Primitive.${t}`),i=f.forwardRef((e,i)=>{let{asChild:n,...o}=e,s=n?r:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,h.jsx)(s,{...o,ref:i})});return i.displayName=`Primitive.${t}`,{...e,[t]:i}},{});function q(e,t){e&&O.flushSync(()=>e.dispatchEvent(t))}function Z(e){let t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...e)=>t.current?.(...e),[])}var X="dismissableLayer.update",Q=f.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),G=f.forwardRef((e,t)=>{let{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:n,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=e,u=f.useContext(Q),[d,p]=f.useState(null),m=d?.ownerDocument??globalThis?.document,[,g]=f.useState({}),v=z(t,e=>p(e)),y=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),x=y.indexOf(w),b=d?y.indexOf(d):-1,E=u.layersWithOutsidePointerEventsDisabled.size>0,C=b>=x,P=function(e,t=globalThis?.document){let r=Z(e),i=f.useRef(!1),n=f.useRef(()=>{});return f.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let i=function(){et("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",n.current),n.current=i,t.addEventListener("click",n.current,{once:!0})):i()}else t.removeEventListener("click",n.current);i.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",n.current)}},[t,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,r=[...u.branches].some(e=>e.contains(t));!C||r||(n?.(e),s?.(e),e.defaultPrevented||a?.())},m),T=function(e,t=globalThis?.document){let r=Z(e),i=f.useRef(!1);return f.useEffect(()=>{let e=e=>{e.target&&!i.current&&et("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...u.branches].some(e=>e.contains(t))||(o?.(e),s?.(e),e.defaultPrevented||a?.())},m);return function(e,t=globalThis?.document){let r=Z(e);f.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}(e=>{b!==u.layers.size-1||(i?.(e),!e.defaultPrevented&&a&&(e.preventDefault(),a()))},m),f.useEffect(()=>{if(d)return r&&(0===u.layersWithOutsidePointerEventsDisabled.size&&(c=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),ee(),()=>{r&&1===u.layersWithOutsidePointerEventsDisabled.size&&(m.body.style.pointerEvents=c)}},[d,m,r,u]),f.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),ee())},[d,u]),f.useEffect(()=>{let e=()=>g({});return document.addEventListener(X,e),()=>document.removeEventListener(X,e)},[]),(0,h.jsx)(Y.div,{...l,ref:v,style:{pointerEvents:E?C?"auto":"none":void 0,...e.style},onFocusCapture:B(e.onFocusCapture,T.onFocusCapture),onBlurCapture:B(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:B(e.onPointerDownCapture,P.onPointerDownCapture)})});G.displayName="DismissableLayer";var J=f.forwardRef((e,t)=>{let r=f.useContext(Q),i=f.useRef(null),n=z(t,i);return f.useEffect(()=>{let e=i.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,h.jsx)(Y.div,{...e,ref:n})});function ee(){let e=new CustomEvent(X);document.dispatchEvent(e)}function et(e,t,r,{discrete:i}){let n=r.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),i?q(n,o):n.dispatchEvent(o)}J.displayName="DismissableLayerBranch";var er=globalThis?.document?f.useLayoutEffect:()=>{},ei=f.forwardRef((e,t)=>{let{container:r,...i}=e,[n,o]=f.useState(!1);er(()=>o(!0),[]);let s=r||n&&globalThis?.document?.body;return s?O.createPortal((0,h.jsx)(Y.div,{...i,ref:t}),s):null});ei.displayName="Portal";var en=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[i,n]=f.useState(),o=f.useRef(null),s=f.useRef(e),a=f.useRef("none"),[l,u]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},f.useReducer((e,t)=>r[e][t]??e,t));return f.useEffect(()=>{let e=eo(o.current);a.current="mounted"===l?e:"none"},[l]),er(()=>{let t=o.current,r=s.current;if(r!==e){let i=a.current,n=eo(t);e?u("MOUNT"):"none"===n||t?.display==="none"?u("UNMOUNT"):r&&i!==n?u("ANIMATION_OUT"):u("UNMOUNT"),s.current=e}},[e,u]),er(()=>{if(i){let e;let t=i.ownerDocument.defaultView??window,r=r=>{let n=eo(o.current).includes(CSS.escape(r.animationName));if(r.target===i&&n&&(u("ANIMATION_END"),!s.current)){let r=i.style.animationFillMode;i.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===i.style.animationFillMode&&(i.style.animationFillMode=r)})}},n=e=>{e.target===i&&(a.current=eo(o.current))};return i.addEventListener("animationstart",n),i.addEventListener("animationcancel",r),i.addEventListener("animationend",r),()=>{t.clearTimeout(e),i.removeEventListener("animationstart",n),i.removeEventListener("animationcancel",r),i.removeEventListener("animationend",r)}}u("ANIMATION_END")},[i,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:f.useCallback(e=>{o.current=e?getComputedStyle(e):null,n(e)},[])}}(t),n="function"==typeof r?r({present:i.isPresent}):f.Children.only(r),o=z(i.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n));return"function"==typeof r||i.isPresent?f.cloneElement(n,{ref:o}):null};function eo(e){return e?.animationName||"none"}en.displayName="Presence";var es=m[" useInsertionEffect ".trim().toString()]||er;function ea({prop:e,defaultProp:t,onChange:r=()=>{},caller:i}){let[n,o,s]=function({defaultProp:e,onChange:t}){let[r,i]=f.useState(e),n=f.useRef(r),o=f.useRef(t);return es(()=>{o.current=t},[t]),f.useEffect(()=>{n.current!==r&&(o.current?.(r),n.current=r)},[r,n]),[r,i,o]}({defaultProp:t,onChange:r}),a=void 0!==e,l=a?e:n;{let t=f.useRef(void 0!==e);f.useEffect(()=>{let e=t.current;if(e!==a){let t=a?"controlled":"uncontrolled";console.warn(`${i} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}t.current=a},[a,i])}return[l,f.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&s.current?.(r)}else o(t)},[a,e,o,s])]}Symbol("RADIX:SYNC_STATE");var el=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),eu=f.forwardRef((e,t)=>(0,h.jsx)(Y.span,{...e,ref:t,style:{...el,...e.style}}));eu.displayName="VisuallyHidden";var ec="ToastProvider",[ed,eh,ep]=function(e){let t=e+"CollectionProvider",[r,i]=W(t),[n,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:r}=e,i=f.useRef(null),o=f.useRef(new Map).current;return(0,h.jsx)(n,{scope:t,itemMap:o,collectionRef:i,children:r})};s.displayName=t;let a=e+"CollectionSlot",l=H(a),u=f.forwardRef((e,t)=>{let{scope:r,children:i}=e,n=z(t,o(a,r).collectionRef);return(0,h.jsx)(l,{ref:n,children:i})});u.displayName=a;let c=e+"CollectionItemSlot",d="data-radix-collection-item",p=H(c),m=f.forwardRef((e,t)=>{let{scope:r,children:i,...n}=e,s=f.useRef(null),a=z(t,s),l=o(c,r);return f.useEffect(()=>(l.itemMap.set(s,{ref:s,...n}),()=>void l.itemMap.delete(s))),(0,h.jsx)(p,{[d]:"",ref:a,children:i})});return m.displayName=c,[{Provider:s,Slot:u,ItemSlot:m},function(t){let r=o(e+"CollectionConsumer",t);return f.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${d}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},i]}("Toast"),[ef,em]=W("Toast",[ep]),[eg,ev]=ef(ec),ey=e=>{let{__scopeToast:t,label:r="Notification",duration:i=5e3,swipeDirection:n="right",swipeThreshold:o=50,children:s}=e,[a,l]=f.useState(null),[u,c]=f.useState(0),d=f.useRef(!1),p=f.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${ec}\`. Expected non-empty \`string\`.`),(0,h.jsx)(ed.Provider,{scope:t,children:(0,h.jsx)(eg,{scope:t,label:r,duration:i,swipeDirection:n,swipeThreshold:o,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:f.useCallback(()=>c(e=>e+1),[]),onToastRemove:f.useCallback(()=>c(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:p,children:s})})};ey.displayName=ec;var ew="ToastViewport",ex=["F8"],eb="toast.viewportPause",eE="toast.viewportResume",eC=f.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:i=ex,label:n="Notifications ({hotkey})",...o}=e,s=ev(ew,r),a=eh(r),l=f.useRef(null),u=f.useRef(null),c=f.useRef(null),d=f.useRef(null),p=z(t,d,s.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=s.toastCount>0;f.useEffect(()=>{let e=e=>{0!==i.length&&i.every(t=>e[t]||e.code===t)&&d.current?.focus()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[i]),f.useEffect(()=>{let e=l.current,t=d.current;if(g&&e&&t){let r=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(eb);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},i=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(eE);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},n=t=>{e.contains(t.relatedTarget)||i()},o=()=>{e.contains(document.activeElement)||i()};return e.addEventListener("focusin",r),e.addEventListener("focusout",n),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",o),window.addEventListener("blur",r),window.addEventListener("focus",i),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",n),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",o),window.removeEventListener("blur",r),window.removeEventListener("focus",i)}}},[g,s.isClosePausedRef]);let v=f.useCallback(({tabbingDirection:e})=>{let t=a().map(t=>{let r=t.ref.current,i=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?i:i.reverse()});return("forwards"===e?t.reverse():t).flat()},[a]);return f.useEffect(()=>{let e=d.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){let r=document.activeElement,i=t.shiftKey;if(t.target===e&&i){u.current?.focus();return}let n=v({tabbingDirection:i?"backwards":"forwards"}),o=n.findIndex(e=>e===r);eF(n.slice(o+1))?t.preventDefault():i?u.current?.focus():c.current?.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[a,v]),(0,h.jsxs)(J,{ref:l,role:"region","aria-label":n.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&(0,h.jsx)(eT,{ref:u,onFocusFromOutsideViewport:()=>{eF(v({tabbingDirection:"forwards"}))}}),(0,h.jsx)(ed.Slot,{scope:r,children:(0,h.jsx)(Y.ol,{tabIndex:-1,...o,ref:p})}),g&&(0,h.jsx)(eT,{ref:c,onFocusFromOutsideViewport:()=>{eF(v({tabbingDirection:"backwards"}))}})]})});eC.displayName=ew;var eP="ToastFocusProxy",eT=f.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:i,...n}=e,o=ev(eP,r);return(0,h.jsx)(eu,{tabIndex:0,...n,ref:t,style:{position:"fixed"},onFocus:e=>{let t=e.relatedTarget;o.viewport?.contains(t)||i()}})});eT.displayName=eP;var ek="Toast";f.forwardRef((e,t)=>{let{forceMount:r,open:i,defaultOpen:n,onOpenChange:o,...s}=e,[a,l]=ea({prop:i,defaultProp:n??!0,onChange:o,caller:ek});return(0,h.jsx)(en,{present:r||a,children:(0,h.jsx)(ej,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:Z(e.onPause),onResume:Z(e.onResume),onSwipeStart:B(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:B(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:B(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:B(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),l(!1)})})})}).displayName=ek;var[eS,eA]=ef(ek,{onClose(){}}),ej=f.forwardRef((e,t)=>{let{__scopeToast:r,type:i="foreground",duration:n,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:c,onSwipeMove:d,onSwipeCancel:p,onSwipeEnd:m,...g}=e,v=ev(ek,r),[y,w]=f.useState(null),x=z(t,e=>w(e)),b=f.useRef(null),E=f.useRef(null),C=n||v.duration,P=f.useRef(0),T=f.useRef(C),k=f.useRef(0),{onToastAdd:S,onToastRemove:A}=v,j=Z(()=>{y?.contains(document.activeElement)&&v.viewport?.focus(),s()}),R=f.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(k.current),P.current=new Date().getTime(),k.current=window.setTimeout(j,e))},[j]);f.useEffect(()=>{let e=v.viewport;if(e){let t=()=>{R(T.current),u?.()},r=()=>{let e=new Date().getTime()-P.current;T.current=T.current-e,window.clearTimeout(k.current),l?.()};return e.addEventListener(eb,r),e.addEventListener(eE,t),()=>{e.removeEventListener(eb,r),e.removeEventListener(eE,t)}}},[v.viewport,C,l,u,R]),f.useEffect(()=>{o&&!v.isClosePausedRef.current&&R(C)},[o,C,v.isClosePausedRef,R]),f.useEffect(()=>(S(),()=>A()),[S,A]);let M=f.useMemo(()=>y?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let i=t.ariaHidden||t.hidden||"none"===t.style.display,n=""===t.dataset.radixToastAnnounceExclude;if(!i){if(n){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(y):null,[y]);return v.viewport?(0,h.jsxs)(h.Fragment,{children:[M&&(0,h.jsx)(eR,{__scopeToast:r,role:"status","aria-live":"foreground"===i?"assertive":"polite",children:M}),(0,h.jsx)(eS,{scope:r,onClose:j,children:O.createPortal((0,h.jsx)(ed.ItemSlot,{scope:r,children:(0,h.jsx)(G,{asChild:!0,onEscapeKeyDown:B(a,()=>{v.isFocusedToastEscapeKeyDownRef.current||j(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,h.jsx)(Y.li,{tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...g,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:B(e.onKeyDown,e=>{"Escape"!==e.key||(a?.(e.nativeEvent),e.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,j()))}),onPointerDown:B(e.onPointerDown,e=>{0===e.button&&(b.current={x:e.clientX,y:e.clientY})}),onPointerMove:B(e.onPointerMove,e=>{if(!b.current)return;let t=e.clientX-b.current.x,r=e.clientY-b.current.y,i=!!E.current,n=["left","right"].includes(v.swipeDirection),o=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,s=n?o(0,t):0,a=n?0:o(0,r),l="touch"===e.pointerType?10:2,u={x:s,y:a},h={originalEvent:e,delta:u};i?(E.current=u,eI("toast.swipeMove",d,h,{discrete:!1})):eV(u,v.swipeDirection,l)?(E.current=u,eI("toast.swipeStart",c,h,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(b.current=null)}),onPointerUp:B(e.onPointerUp,e=>{let t=E.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),E.current=null,b.current=null,t){let r=e.currentTarget,i={originalEvent:e,delta:t};eV(t,v.swipeDirection,v.swipeThreshold)?eI("toast.swipeEnd",m,i,{discrete:!0}):eI("toast.swipeCancel",p,i,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),eR=e=>{let{__scopeToast:t,children:r,...i}=e,n=ev(ek,t),[o,s]=f.useState(!1),[a,l]=f.useState(!1);return function(e=()=>{}){let t=Z(e);er(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),f.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),a?null:(0,h.jsx)(ei,{asChild:!0,children:(0,h.jsx)(eu,{...i,children:o&&(0,h.jsxs)(h.Fragment,{children:[n.label," ",r]})})})};f.forwardRef((e,t)=>{let{__scopeToast:r,...i}=e;return(0,h.jsx)(Y.div,{...i,ref:t})}).displayName="ToastTitle",f.forwardRef((e,t)=>{let{__scopeToast:r,...i}=e;return(0,h.jsx)(Y.div,{...i,ref:t})}).displayName="ToastDescription";var eM="ToastAction";f.forwardRef((e,t)=>{let{altText:r,...i}=e;return r.trim()?(0,h.jsx)(eL,{altText:r,asChild:!0,children:(0,h.jsx)(eN,{...i,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${eM}\`. Expected non-empty \`string\`.`),null)}).displayName=eM;var eD="ToastClose",eN=f.forwardRef((e,t)=>{let{__scopeToast:r,...i}=e,n=eA(eD,r);return(0,h.jsx)(eL,{asChild:!0,children:(0,h.jsx)(Y.button,{type:"button",...i,ref:t,onClick:B(e.onClick,n.onClose)})})});eN.displayName=eD;var eL=f.forwardRef((e,t)=>{let{__scopeToast:r,altText:i,...n}=e;return(0,h.jsx)(Y.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...n,ref:t})});function eI(e,t,r,{discrete:i}){let n=r.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&n.addEventListener(e,t,{once:!0}),i?q(n,o):n.dispatchEvent(o)}var eV=(e,t,r=0)=>{let i=Math.abs(e.x),n=Math.abs(e.y),o=i>n;return"left"===t||"right"===t?o&&i>r:!o&&n>r};function eF(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var eO=r(2986);function eB(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}let eU=e=>Array.isArray(e);function e_(e,t){if(!Array.isArray(t))return!1;let r=t.length;if(r!==e.length)return!1;for(let i=0;i<r;i++)if(t[i]!==e[i])return!1;return!0}function ez(e){return"string"==typeof e||Array.isArray(e)}function eW(e){let t=[{},{}];return null==e||e.values.forEach((e,r)=>{t[0][r]=e.get(),t[1][r]=e.getVelocity()}),t}function eH(e,t,r,i){if("function"==typeof t){let[n,o]=eW(i);t=t(void 0!==r?r:e.custom,n,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){let[n,o]=eW(i);t=t(void 0!==r?r:e.custom,n,o)}return t}function e$(e,t,r){let i=e.getProps();return eH(i,t,void 0!==r?r:i.custom,e)}let eK=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],eY=["initial",...eK];function eq(e){let t;return()=>(void 0===t&&(t=e()),t)}let eZ=eq(()=>void 0!==window.ScrollTimeline);class eX{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){let r=this.animations.map(r=>eZ()&&r.attachTimeline?r.attachTimeline(e):"function"==typeof t?t(r):void 0);return()=>{r.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class eQ extends eX{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function eG(e,t){return e?e[t]||e.default||e:void 0}function eJ(e){let t=0,r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}function e0(e){return"function"==typeof e}function e1(e,t){e.timeline=t,e.onfinish=null}let e2=e=>Array.isArray(e)&&"number"==typeof e[0],e5={linearEasing:void 0},e8=function(e,t){let r=eq(e);return()=>{var e;return null!==(e=e5[t])&&void 0!==e?e:r()}}(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0},"linearEasing"),e6=(e,t,r)=>{let i=t-e;return 0===i?1:(r-e)/i},e3=(e,t,r=10)=>{let i="",n=Math.max(Math.round(t/r),2);for(let t=0;t<n;t++)i+=e(e6(0,n-1,t))+", ";return`linear(${i.substring(0,i.length-2)})`},e7=([e,t,r,i])=>`cubic-bezier(${e}, ${t}, ${r}, ${i})`,e4={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:e7([0,.65,.55,1]),circOut:e7([.55,0,1,.45]),backIn:e7([.31,.01,.66,-.59]),backOut:e7([.33,1.53,.69,.99])},e9={x:!1,y:!1};function te(e,t){let r=function(e,t,r){if(e instanceof Element)return[e];if("string"==typeof e){let t=document.querySelectorAll(e);return t?Array.from(t):[]}return Array.from(e)}(e),i=new AbortController;return[r,{passive:!0,...t,signal:i.signal},()=>i.abort()]}function tt(e){return t=>{"touch"===t.pointerType||e9.x||e9.y||e(t)}}let tr=(e,t)=>!!t&&(e===t||tr(e,t.parentElement)),ti=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary,tn=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),to=new WeakSet;function ts(e){return t=>{"Enter"===t.key&&e(t)}}function ta(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}let tl=(e,t)=>{let r=e.currentTarget;if(!r)return;let i=ts(()=>{if(to.has(r))return;ta(r,"down");let e=ts(()=>{ta(r,"up")});r.addEventListener("keyup",e,t),r.addEventListener("blur",()=>ta(r,"cancel"),t)});r.addEventListener("keydown",i,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",i),t)};function tu(e){return ti(e)&&!(e9.x||e9.y)}let tc=e=>1e3*e,td=e=>e/1e3,th=e=>e,tp=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tf=new Set(tp),tm=new Set(["width","height","top","left","right","bottom",...tp]),tg=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),tv=e=>eU(e)?e[e.length-1]||0:e,ty={skipAnimations:!1,useManualTiming:!1},tw=["read","resolveKeyframes","update","preRender","render","postRender"];function tx(e,t){let r=!1,i=!0,n={delta:0,timestamp:0,isProcessing:!1},o=()=>r=!0,s=tw.reduce((e,t)=>(e[t]=function(e){let t=new Set,r=new Set,i=!1,n=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1};function a(t){o.has(t)&&(l.schedule(t),e()),t(s)}let l={schedule:(e,n=!1,s=!1)=>{let a=s&&i?t:r;return n&&o.add(e),a.has(e)||a.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){n=!0;return}i=!0,[t,r]=[r,t],t.forEach(a),t.clear(),i=!1,n&&(n=!1,l.process(e))}};return l}(o),e),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:h}=s,p=()=>{let o=ty.useManualTiming?n.timestamp:performance.now();r=!1,n.delta=i?1e3/60:Math.max(Math.min(o-n.timestamp,40),1),n.timestamp=o,n.isProcessing=!0,a.process(n),l.process(n),u.process(n),c.process(n),d.process(n),h.process(n),n.isProcessing=!1,r&&t&&(i=!1,e(p))},f=()=>{r=!0,i=!0,n.isProcessing||e(p)};return{schedule:tw.reduce((e,t)=>{let i=s[t];return e[t]=(e,t=!1,n=!1)=>(r||f(),i.schedule(e,t,n)),e},{}),cancel:e=>{for(let t=0;t<tw.length;t++)s[tw[t]].cancel(e)},state:n,steps:s}}let{schedule:tb,cancel:tE,state:tC,steps:tP}=tx("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:th,!0);function tT(){i=void 0}let tk={now:()=>(void 0===i&&tk.set(tC.isProcessing||ty.useManualTiming?tC.timestamp:performance.now()),i),set:e=>{i=e,queueMicrotask(tT)}};function tS(e,t){-1===e.indexOf(t)&&e.push(t)}function tA(e,t){let r=e.indexOf(t);r>-1&&e.splice(r,1)}class tj{constructor(){this.subscriptions=[]}add(e){return tS(this.subscriptions,e),()=>tA(this.subscriptions,e)}notify(e,t,r){let i=this.subscriptions.length;if(i){if(1===i)this.subscriptions[0](e,t,r);else for(let n=0;n<i;n++){let i=this.subscriptions[n];i&&i(e,t,r)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let tR=e=>!isNaN(parseFloat(e)),tM={current:void 0};class tD{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=!0)=>{let r=tk.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=tk.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=tR(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tj);let r=this.events[e].add(t);return"change"===e?()=>{r(),tb.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return tM.current&&tM.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=tk.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let r=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),r?1e3/r*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tN(e,t){return new tD(e,t)}let tL=e=>!!(e&&e.getVelocity);function tI(e,t){let r=e.getValue("willChange");if(tL(r)&&r.add)return r.add(t)}let tV=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),tF="data-"+tV("framerAppearId"),tO={current:!1},tB=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function tU(e,t,r,i){if(e===t&&r===i)return th;let n=t=>(function(e,t,r,i,n){let o,s;let a=0;do(o=tB(s=t+(r-t)/2,i,n)-e)>0?r=s:t=s;while(Math.abs(o)>1e-7&&++a<12);return s})(t,0,1,e,r);return e=>0===e||1===e?e:tB(n(e),t,i)}let t_=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tz=e=>t=>1-e(1-t),tW=tU(.33,1.53,.69,.99),tH=tz(tW),t$=t_(tH),tK=e=>(e*=2)<1?.5*tH(e):.5*(2-Math.pow(2,-10*(e-1))),tY=e=>1-Math.sin(Math.acos(e)),tq=tz(tY),tZ=t_(tY),tX=e=>/^0[^.\s]+$/u.test(e),tQ=(e,t,r)=>r>t?t:r<e?e:r,tG={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},tJ={...tG,transform:e=>tQ(0,1,e)},t0={...tG,default:1},t1=e=>Math.round(1e5*e)/1e5,t2=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,t5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,t8=(e,t)=>r=>!!("string"==typeof r&&t5.test(r)&&r.startsWith(e)||t&&null!=r&&Object.prototype.hasOwnProperty.call(r,t)),t6=(e,t,r)=>i=>{if("string"!=typeof i)return i;let[n,o,s,a]=i.match(t2);return{[e]:parseFloat(n),[t]:parseFloat(o),[r]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},t3=e=>tQ(0,255,e),t7={...tG,transform:e=>Math.round(t3(e))},t4={test:t8("rgb","red"),parse:t6("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:i=1})=>"rgba("+t7.transform(e)+", "+t7.transform(t)+", "+t7.transform(r)+", "+t1(tJ.transform(i))+")"},t9={test:t8("#"),parse:function(e){let t="",r="",i="",n="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),i=e.substring(5,7),n=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),i=e.substring(3,4),n=e.substring(4,5),t+=t,r+=r,i+=i,n+=n),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(i,16),alpha:n?parseInt(n,16)/255:1}},transform:t4.transform},re=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),rt=re("deg"),rr=re("%"),ri=re("px"),rn=re("vh"),ro=re("vw"),rs={...rr,parse:e=>rr.parse(e)/100,transform:e=>rr.transform(100*e)},ra={test:t8("hsl","hue"),parse:t6("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:i=1})=>"hsla("+Math.round(e)+", "+rr.transform(t1(t))+", "+rr.transform(t1(r))+", "+t1(tJ.transform(i))+")"},rl={test:e=>t4.test(e)||t9.test(e)||ra.test(e),parse:e=>t4.test(e)?t4.parse(e):ra.test(e)?ra.parse(e):t9.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?t4.transform(e):ra.transform(e)},ru=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,rc="number",rd="color",rh=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function rp(e){let t=e.toString(),r=[],i={color:[],number:[],var:[]},n=[],o=0,s=t.replace(rh,e=>(rl.test(e)?(i.color.push(o),n.push(rd),r.push(rl.parse(e))):e.startsWith("var(")?(i.var.push(o),n.push("var"),r.push(e)):(i.number.push(o),n.push(rc),r.push(parseFloat(e))),++o,"${}")).split("${}");return{values:r,split:s,indexes:i,types:n}}function rf(e){return rp(e).values}function rm(e){let{split:t,types:r}=rp(e),i=t.length;return e=>{let n="";for(let o=0;o<i;o++)if(n+=t[o],void 0!==e[o]){let t=r[o];t===rc?n+=t1(e[o]):t===rd?n+=rl.transform(e[o]):n+=e[o]}return n}}let rg=e=>"number"==typeof e?0:e,rv={test:function(e){var t,r;return isNaN(e)&&"string"==typeof e&&((null===(t=e.match(t2))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(ru))||void 0===r?void 0:r.length)||0)>0},parse:rf,createTransformer:rm,getAnimatableNone:function(e){let t=rf(e);return rm(e)(t.map(rg))}},ry=new Set(["brightness","contrast","saturate","opacity"]);function rw(e){let[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[i]=r.match(t2)||[];if(!i)return e;let n=r.replace(i,""),o=ry.has(t)?1:0;return i!==r&&(o*=100),t+"("+o+n+")"}let rx=/\b([a-z-]*)\(.*?\)/gu,rb={...rv,getAnimatableNone:e=>{let t=e.match(rx);return t?t.map(rw).join(" "):e}},rE={...tG,transform:Math.round},rC={borderWidth:ri,borderTopWidth:ri,borderRightWidth:ri,borderBottomWidth:ri,borderLeftWidth:ri,borderRadius:ri,radius:ri,borderTopLeftRadius:ri,borderTopRightRadius:ri,borderBottomRightRadius:ri,borderBottomLeftRadius:ri,width:ri,maxWidth:ri,height:ri,maxHeight:ri,top:ri,right:ri,bottom:ri,left:ri,padding:ri,paddingTop:ri,paddingRight:ri,paddingBottom:ri,paddingLeft:ri,margin:ri,marginTop:ri,marginRight:ri,marginBottom:ri,marginLeft:ri,backgroundPositionX:ri,backgroundPositionY:ri,rotate:rt,rotateX:rt,rotateY:rt,rotateZ:rt,scale:t0,scaleX:t0,scaleY:t0,scaleZ:t0,skew:rt,skewX:rt,skewY:rt,distance:ri,translateX:ri,translateY:ri,translateZ:ri,x:ri,y:ri,z:ri,perspective:ri,transformPerspective:ri,opacity:tJ,originX:rs,originY:rs,originZ:ri,zIndex:rE,size:ri,fillOpacity:tJ,strokeOpacity:tJ,numOctaves:rE},rP={...rC,color:rl,backgroundColor:rl,outlineColor:rl,fill:rl,stroke:rl,borderColor:rl,borderTopColor:rl,borderRightColor:rl,borderBottomColor:rl,borderLeftColor:rl,filter:rb,WebkitFilter:rb},rT=e=>rP[e];function rk(e,t){let r=rT(e);return r!==rb&&(r=rv),r.getAnimatableNone?r.getAnimatableNone(t):void 0}let rS=new Set(["auto","none","0"]),rA=e=>e===tG||e===ri,rj=(e,t)=>parseFloat(e.split(", ")[t]),rR=(e,t)=>(r,{transform:i})=>{if("none"===i||!i)return 0;let n=i.match(/^matrix3d\((.+)\)$/u);if(n)return rj(n[1],t);{let t=i.match(/^matrix\((.+)\)$/u);return t?rj(t[1],e):0}},rM=new Set(["x","y","z"]),rD=tp.filter(e=>!rM.has(e)),rN={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:rR(4,13),y:rR(5,14)};rN.translateX=rN.x,rN.translateY=rN.y;let rL=new Set,rI=!1,rV=!1;function rF(){if(rV){let e=Array.from(rL).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),r=new Map;t.forEach(e=>{let t=function(e){let t=[];return rD.forEach(r=>{let i=e.getValue(r);void 0!==i&&(t.push([r,i.get()]),i.set(r.startsWith("scale")?1:0))}),t}(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,r])=>{var i;null===(i=e.getValue(t))||void 0===i||i.set(r)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}rV=!1,rI=!1,rL.forEach(e=>e.complete()),rL.clear()}function rO(){rL.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(rV=!0)})}class rB{constructor(e,t,r,i,n,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=i,this.element=n,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(rL.add(this),rI||(rI=!0,tb.read(rO),tb.resolveKeyframes(rF))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:r,motionValue:i}=this;for(let n=0;n<e.length;n++)if(null===e[n]){if(0===n){let n=null==i?void 0:i.get(),o=e[e.length-1];if(void 0!==n)e[0]=n;else if(r&&t){let i=r.readValue(t,o);null!=i&&(e[0]=i)}void 0===e[0]&&(e[0]=o),i&&void 0===n&&i.set(e[0])}else e[n]=e[n-1]}}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),rL.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,rL.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}let rU=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),r_=e=>t=>"string"==typeof t&&t.startsWith(e),rz=r_("--"),rW=r_("var(--"),rH=e=>!!rW(e)&&r$.test(e.split("/*")[0].trim()),r$=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,rK=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,rY=e=>t=>t.test(e),rq=[tG,ri,rr,rt,ro,rn,{test:e=>"auto"===e,parse:e=>e}],rZ=e=>rq.find(rY(e));class rX extends rB{constructor(e,t,r,i,n){super(e,t,r,i,n,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let r=0;r<e.length;r++){let i=e[r];if("string"==typeof i&&rH(i=i.trim())){let n=function e(t,r,i=1){th(i<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[n,o]=function(e){let t=rK.exec(e);if(!t)return[,];let[,r,i,n]=t;return[`--${null!=r?r:i}`,n]}(t);if(!n)return;let s=window.getComputedStyle(r).getPropertyValue(n);if(s){let e=s.trim();return rU(e)?parseFloat(e):e}return rH(o)?e(o,r,i+1):o}(i,t.current);void 0!==n&&(e[r]=n),r===e.length-1&&(this.finalKeyframe=i)}}if(this.resolveNoneKeyframes(),!tm.has(r)||2!==e.length)return;let[i,n]=e,o=rZ(i),s=rZ(n);if(o!==s){if(rA(o)&&rA(s))for(let t=0;t<e.length;t++){let r=e[t];"string"==typeof r&&(e[t]=parseFloat(r))}else this.needsMeasurement=!0}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,r=[];for(let t=0;t<e.length;t++){var i;("number"==typeof(i=e[t])?0===i:null===i||"none"===i||"0"===i||tX(i))&&r.push(t)}r.length&&function(e,t,r){let i,n=0;for(;n<e.length&&!i;){let t=e[n];"string"==typeof t&&!rS.has(t)&&rp(t).values.length&&(i=e[n]),n++}if(i&&r)for(let n of t)e[n]=rk(r,i)}(e,r,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;"height"===r&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=rN[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let i=t[t.length-1];void 0!==i&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;let{element:t,name:r,unresolvedKeyframes:i}=this;if(!t||!t.current)return;let n=t.getValue(r);n&&n.jump(this.measuredOrigin,!1);let o=i.length-1,s=i[o];i[o]=rN[r](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach(([e,r])=>{t.getValue(e).set(r)}),this.resolveNoneKeyframes()}}let rQ=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(rv.test(e)||"0"===e)&&!e.startsWith("url(")),rG=e=>null!==e;function rJ(e,{repeat:t,repeatType:r="loop"},i){let n=e.filter(rG),o=t&&"loop"!==r&&t%2==1?0:n.length-1;return o&&void 0!==i?i:n[o]}class r0{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:i=0,repeatDelay:n=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=tk.now(),this.options={autoplay:e,delay:t,type:r,repeat:i,repeatDelay:n,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(rO(),rF()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=tk.now(),this.hasAttemptedResolve=!0;let{name:r,type:i,velocity:n,delay:o,onComplete:s,onUpdate:a,isGenerator:l}=this.options;if(!l&&!function(e,t,r,i){let n=e[0];if(null===n)return!1;if("display"===t||"visibility"===t)return!0;let o=e[e.length-1],s=rQ(n,t),a=rQ(o,t);return th(s===a,`You are trying to animate ${t} from "${n}" to "${o}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${o} via the \`style\` property.`),!!s&&!!a&&(function(e){let t=e[0];if(1===e.length)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}(e)||("spring"===r||e0(r))&&i)}(e,r,i,n)){if(tO.current||!o){a&&a(rJ(e,this.options,t)),s&&s(),this.resolveFinishedPromise();return}this.options.duration=0}let u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}let r1=(e,t,r)=>e+(t-e)*r;function r2(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function r5(e,t){return r=>r>0?t:e}let r8=(e,t,r)=>{let i=e*e,n=r*(t*t-i)+i;return n<0?0:Math.sqrt(n)},r6=[t9,t4,ra],r3=e=>r6.find(t=>t.test(e));function r7(e){let t=r3(e);if(th(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`),!t)return!1;let r=t.parse(e);return t===ra&&(r=function({hue:e,saturation:t,lightness:r,alpha:i}){e/=360,r/=100;let n=0,o=0,s=0;if(t/=100){let i=r<.5?r*(1+t):r+t-r*t,a=2*r-i;n=r2(a,i,e+1/3),o=r2(a,i,e),s=r2(a,i,e-1/3)}else n=o=s=r;return{red:Math.round(255*n),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(r)),r}let r4=(e,t)=>{let r=r7(e),i=r7(t);if(!r||!i)return r5(e,t);let n={...r};return e=>(n.red=r8(r.red,i.red,e),n.green=r8(r.green,i.green,e),n.blue=r8(r.blue,i.blue,e),n.alpha=r1(r.alpha,i.alpha,e),t4.transform(n))},r9=(e,t)=>r=>t(e(r)),ie=(...e)=>e.reduce(r9),it=new Set(["none","hidden"]);function ir(e,t){return r=>r1(e,t,r)}function ii(e){return"number"==typeof e?ir:"string"==typeof e?rH(e)?r5:rl.test(e)?r4:ia:Array.isArray(e)?io:"object"==typeof e?rl.test(e)?r4:is:r5}function io(e,t){let r=[...e],i=r.length,n=e.map((e,r)=>ii(e)(e,t[r]));return e=>{for(let t=0;t<i;t++)r[t]=n[t](e);return r}}function is(e,t){let r={...e,...t},i={};for(let n in r)void 0!==e[n]&&void 0!==t[n]&&(i[n]=ii(e[n])(e[n],t[n]));return e=>{for(let t in i)r[t]=i[t](e);return r}}let ia=(e,t)=>{let r=rv.createTransformer(t),i=rp(e),n=rp(t);return i.indexes.var.length===n.indexes.var.length&&i.indexes.color.length===n.indexes.color.length&&i.indexes.number.length>=n.indexes.number.length?it.has(e)&&!n.values.length||it.has(t)&&!i.values.length?function(e,t){return it.has(e)?r=>r<=0?e:t:r=>r>=1?t:e}(e,t):ie(io(function(e,t){var r;let i=[],n={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){let s=t.types[o],a=e.indexes[s][n[s]],l=null!==(r=e.values[a])&&void 0!==r?r:0;i[o]=l,n[s]++}return i}(i,n),n.values),r):(th(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),r5(e,t))};function il(e,t,r){return"number"==typeof e&&"number"==typeof t&&"number"==typeof r?r1(e,t,r):ii(e)(e,t)}function iu(e,t,r){var i,n;let o=Math.max(t-5,0);return i=r-e(o),(n=t-o)?1e3/n*i:0}let ic={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function id(e,t){return e*Math.sqrt(1-t*t)}let ih=["duration","bounce"],ip=["stiffness","damping","mass"];function im(e,t){return t.some(t=>void 0!==e[t])}function ig(e=ic.visualDuration,t=ic.bounce){let r;let i="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:n,restDelta:o}=i,s=i.keyframes[0],a=i.keyframes[i.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:h,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:ic.velocity,stiffness:ic.stiffness,damping:ic.damping,mass:ic.mass,isResolvedFromDuration:!1,...e};if(!im(e,ip)&&im(e,ih)){if(e.visualDuration){let r=2*Math.PI/(1.2*e.visualDuration),i=r*r,n=2*tQ(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ic.mass,stiffness:i,damping:n}}else{let r=function({duration:e=ic.duration,bounce:t=ic.bounce,velocity:r=ic.velocity,mass:i=ic.mass}){let n,o;th(e<=tc(ic.maxDuration),"Spring duration must be 10 seconds or less");let s=1-t;s=tQ(ic.minDamping,ic.maxDamping,s),e=tQ(ic.minDuration,ic.maxDuration,td(e)),s<1?(n=t=>{let i=t*s,n=i*e;return .001-(i-r)/id(t,s)*Math.exp(-n)},o=t=>{let i=t*s*e,o=Math.pow(s,2)*Math.pow(t,2)*e,a=id(Math.pow(t,2),s);return(i*r+r-o)*Math.exp(-i)*(-n(t)+.001>0?-1:1)/a}):(n=t=>-.001+Math.exp(-t*e)*((t-r)*e+1),o=t=>e*e*(r-t)*Math.exp(-t*e));let a=function(e,t,r){let i=r;for(let r=1;r<12;r++)i-=e(i)/t(i);return i}(n,o,5/e);if(e=tc(e),isNaN(a))return{stiffness:ic.stiffness,damping:ic.damping,duration:e};{let t=Math.pow(a,2)*i;return{stiffness:t,damping:2*s*Math.sqrt(i*t),duration:e}}}(e);(t={...t,...r,mass:ic.mass}).isResolvedFromDuration=!0}}return t}({...i,velocity:-td(i.velocity||0)}),m=p||0,g=c/(2*Math.sqrt(u*d)),v=a-s,y=td(Math.sqrt(u/d)),w=5>Math.abs(v);if(n||(n=w?ic.restSpeed.granular:ic.restSpeed.default),o||(o=w?ic.restDelta.granular:ic.restDelta.default),g<1){let e=id(y,g);r=t=>a-Math.exp(-g*y*t)*((m+g*y*v)/e*Math.sin(e*t)+v*Math.cos(e*t))}else if(1===g)r=e=>a-Math.exp(-y*e)*(v+(m+y*v)*e);else{let e=y*Math.sqrt(g*g-1);r=t=>{let r=Math.exp(-g*y*t),i=Math.min(e*t,300);return a-r*((m+g*y*v)*Math.sinh(i)+e*v*Math.cosh(i))/e}}let x={calculatedDuration:f&&h||null,next:e=>{let t=r(e);if(f)l.done=e>=h;else{let i=0;g<1&&(i=0===e?tc(m):iu(r,e,t));let s=Math.abs(i)<=n,u=Math.abs(a-t)<=o;l.done=s&&u}return l.value=l.done?a:t,l},toString:()=>{let e=Math.min(eJ(x),2e4),t=e3(t=>x.next(e*t).value,e,30);return e+"ms "+t}};return x}function iv({keyframes:e,velocity:t=0,power:r=.8,timeConstant:i=325,bounceDamping:n=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){let d,h;let p=e[0],f={done:!1,value:p},m=e=>void 0!==a&&e<a||void 0!==l&&e>l,g=e=>void 0===a?l:void 0===l?a:Math.abs(a-e)<Math.abs(l-e)?a:l,v=r*t,y=p+v,w=void 0===s?y:s(y);w!==y&&(v=w-p);let x=e=>-v*Math.exp(-e/i),b=e=>w+x(e),E=e=>{let t=x(e),r=b(e);f.done=Math.abs(t)<=u,f.value=f.done?w:r},C=e=>{m(f.value)&&(d=e,h=ig({keyframes:[f.value,g(f.value)],velocity:iu(b,e,f.value),damping:n,stiffness:o,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return(h||void 0!==d||(t=!0,E(e),C(e)),void 0!==d&&e>=d)?h.next(e-d):(t||E(e),f)}}}let iy=tU(.42,0,1,1),iw=tU(0,0,.58,1),ix=tU(.42,0,.58,1),ib=e=>Array.isArray(e)&&"number"!=typeof e[0],iE={linear:th,easeIn:iy,easeInOut:ix,easeOut:iw,circIn:tY,circInOut:tZ,circOut:tq,backIn:tH,backInOut:t$,backOut:tW,anticipate:tK},iC=e=>{if(e2(e)){th(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,r,i,n]=e;return tU(t,r,i,n)}return"string"==typeof e?(th(void 0!==iE[e],`Invalid easing type '${e}'`),iE[e]):e};function iP({duration:e=300,keyframes:t,times:r,ease:i="easeInOut"}){let n=ib(i)?i.map(iC):iC(i),o={done:!1,value:t[0]},s=function(e,t,{clamp:r=!0,ease:i,mixer:n}={}){let o=e.length;if(th(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];let s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,r){let i=[],n=r||il,o=e.length-1;for(let r=0;r<o;r++){let o=n(e[r],e[r+1]);t&&(o=ie(Array.isArray(t)?t[r]||th:t,o)),i.push(o)}return i}(t,i,n),l=a.length,u=r=>{if(s&&r<e[0])return t[0];let i=0;if(l>1)for(;i<e.length-2&&!(r<e[i+1]);i++);let n=e6(e[i],e[i+1],r);return a[i](n)};return r?t=>u(tQ(e[0],e[o-1],t)):u}((r&&r.length===t.length?r:function(e){let t=[0];return function(e,t){let r=e[e.length-1];for(let i=1;i<=t;i++){let n=e6(0,t,i);e.push(r1(r,1,n))}}(t,e.length-1),t}(t)).map(t=>t*e),t,{ease:Array.isArray(n)?n:t.map(()=>n||ix).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(o.value=s(t),o.done=t>=e,o)}}let iT=e=>{let t=({timestamp:t})=>e(t);return{start:()=>tb.update(t,!0),stop:()=>tE(t),now:()=>tC.isProcessing?tC.timestamp:tk.now()}},ik={decay:iv,inertia:iv,tween:iP,keyframes:iP,spring:ig},iS=e=>e/100;class iA extends r0{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();let{onStop:e}=this.options;e&&e()};let{name:t,motionValue:r,element:i,keyframes:n}=this.options,o=(null==i?void 0:i.KeyframeResolver)||rB;this.resolver=new o(n,(e,t)=>this.onKeyframesResolved(e,t),t,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){let t,r;let{type:i="keyframes",repeat:n=0,repeatDelay:o=0,repeatType:s,velocity:a=0}=this.options,l=e0(i)?i:ik[i]||iP;l!==iP&&"number"!=typeof e[0]&&(t=ie(iS,il(e[0],e[1])),e=[0,100]);let u=l({...this.options,keyframes:e});"mirror"===s&&(r=l({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===u.calculatedDuration&&(u.calculatedDuration=eJ(u));let{calculatedDuration:c}=u,d=c+o;return{generator:u,mirroredGenerator:r,mapPercentToKeyframes:t,calculatedDuration:c,resolvedDuration:d,totalDuration:d*(n+1)-o}}onPostResolved(){let{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e,t=!1){let{resolved:r}=this;if(!r){let{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}let{finalKeyframe:i,generator:n,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=r;if(null===this.startTime)return n.next(0);let{delay:d,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;let g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,w=n;if(h){let e=Math.min(this.currentTime,u)/c,t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,(t=Math.min(t,h+1))%2&&("reverse"===p?(r=1-r,f&&(r-=f/c)):"mirror"===p&&(w=o)),y=tQ(0,1,r)*c}let x=v?{done:!1,value:a[0]}:w.next(y);s&&(x.value=s(x.value));let{done:b}=x;v||null===l||(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);let E=null===this.holdTime&&("finished"===this.state||"running"===this.state&&b);return E&&void 0!==i&&(x.value=rJ(a,this.options,i)),m&&m(x.value),E&&this.finish(),x}get duration(){let{resolved:e}=this;return e?td(e.calculatedDuration):0}get time(){return td(this.currentTime)}set time(e){e=tc(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=td(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;let{driver:e=iT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),t&&t();let i=this.driver.now();null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=i):this.startTime=null!=r?r:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";let{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}let ij=new Set(["opacity","clipPath","filter","transform"]),iR=eq(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),iM={anticipate:tK,backInOut:t$,circInOut:tZ};class iD extends r0{constructor(e){super(e);let{name:t,motionValue:r,element:i,keyframes:n}=this.options;this.resolver=new rX(n,(e,t)=>this.onKeyframesResolved(e,t),t,r,i),this.resolver.scheduleResolve()}initPlayback(e,t){var r;let{duration:i=300,times:n,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if("string"==typeof o&&e8()&&o in iM&&(o=iM[o]),e0((r=this.options).type)||"spring"===r.type||!function e(t){return!!("function"==typeof t&&e8()||!t||"string"==typeof t&&(t in e4||e8())||e2(t)||Array.isArray(t)&&t.every(e))}(r.ease)){let{onComplete:t,onUpdate:r,motionValue:a,element:l,...u}=this.options,c=function(e,t){let r=new iA({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0}),i={done:!1,value:e[0]},n=[],o=0;for(;!i.done&&o<2e4;)n.push((i=r.sample(o)).value),o+=10;return{times:void 0,keyframes:n,duration:o-10,ease:"linear"}}(e,u);1===(e=c.keyframes).length&&(e[1]=e[0]),i=c.duration,n=c.times,o=c.ease,s="keyframes"}let c=function(e,t,r,{delay:i=0,duration:n=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){let u={[t]:r};l&&(u.offset=l);let c=function e(t,r){if(t)return"function"==typeof t&&e8()?e3(t,r):e2(t)?e7(t):Array.isArray(t)?t.map(t=>e(t,r)||e4.easeOut):e4[t]}(a,n);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:i,duration:n,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"})}(a.owner.current,l,e,{...this.options,duration:i,times:n,ease:o});return c.startTime=null!=u?u:this.calcStartTime(),this.pendingTimeline?(e1(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{let{onComplete:r}=this.options;a.set(rJ(e,this.options,t)),r&&r(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:n,type:s,ease:o,keyframes:e}}get duration(){let{resolved:e}=this;if(!e)return 0;let{duration:t}=e;return td(t)}get time(){let{resolved:e}=this;if(!e)return 0;let{animation:t}=e;return td(t.currentTime||0)}set time(e){let{resolved:t}=this;if(!t)return;let{animation:r}=t;r.currentTime=tc(e)}get speed(){let{resolved:e}=this;if(!e)return 1;let{animation:t}=e;return t.playbackRate}set speed(e){let{resolved:t}=this;if(!t)return;let{animation:r}=t;r.playbackRate=e}get state(){let{resolved:e}=this;if(!e)return"idle";let{animation:t}=e;return t.playState}get startTime(){let{resolved:e}=this;if(!e)return null;let{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){let{resolved:t}=this;if(!t)return th;let{animation:r}=t;e1(r,e)}else this.pendingTimeline=e;return th}play(){if(this.isStopped)return;let{resolved:e}=this;if(!e)return;let{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();let{resolved:e}=this;if(!e)return;let{animation:t,keyframes:r,duration:i,type:n,ease:o,times:s}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){let{motionValue:e,onUpdate:t,onComplete:a,element:l,...u}=this.options,c=new iA({...u,keyframes:r,duration:i,type:n,ease:o,times:s,isGenerator:!0}),d=tc(this.time);e.setWithVelocity(c.sample(d-10).value,c.sample(d).value,10)}let{onStop:a}=this.options;a&&a(),this.cancel()}complete(){let{resolved:e}=this;e&&e.animation.finish()}cancel(){let{resolved:e}=this;e&&e.animation.cancel()}static supports(e){let{motionValue:t,name:r,repeatDelay:i,repeatType:n,damping:o,type:s}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;let{onUpdate:a,transformTemplate:l}=t.owner.getProps();return iR()&&r&&ij.has(r)&&!a&&!l&&!i&&"mirror"!==n&&0!==o&&"inertia"!==s}}let iN={type:"spring",stiffness:500,damping:25,restSpeed:10},iL=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),iI={type:"keyframes",duration:.8},iV={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},iF=(e,{keyframes:t})=>t.length>2?iI:tf.has(e)?e.startsWith("scale")?iL(t[1]):iN:iV,iO=(e,t,r,i={},n,o)=>s=>{let a=eG(i,e)||{},l=a.delay||i.delay||0,{elapsed:u=0}=i;u-=tc(l);let c={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:n};!function({when:e,delay:t,delayChildren:r,staggerChildren:i,staggerDirection:n,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(a)&&(c={...c,...iF(e,c)}),c.duration&&(c.duration=tc(c.duration)),c.repeatDelay&&(c.repeatDelay=tc(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(c.duration=0,0!==c.delay||(d=!0)),(tO.current||ty.skipAnimations)&&(d=!0,c.duration=0,c.delay=0),d&&!o&&void 0!==t.get()){let e=rJ(c.keyframes,a);if(void 0!==e)return tb.update(()=>{c.onUpdate(e),c.onComplete()}),new eQ([])}return!o&&iD.supports(c)?new iD(c):new iA(c)};function iB(e,t,{delay:r=0,transitionOverride:i,type:n}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;i&&(s=i);let u=[],c=n&&e.animationState&&e.animationState.getState()[n];for(let t in l){let i=e.getValue(t,null!==(o=e.latestValues[t])&&void 0!==o?o:null),n=l[t];if(void 0===n||c&&function({protectedKeys:e,needsAnimating:t},r){let i=e.hasOwnProperty(r)&&!0!==t[r];return t[r]=!1,i}(c,t))continue;let a={delay:r,...eG(s||{},t)},d=!1;if(window.MotionHandoffAnimation){let r=e.props[tF];if(r){let e=window.MotionHandoffAnimation(r,t,tb);null!==e&&(a.startTime=e,d=!0)}}tI(e,t),i.start(iO(t,i,n,e.shouldReduceMotion&&tm.has(t)?{type:!1}:a,e,d));let h=i.animation;h&&u.push(h)}return a&&Promise.all(u).then(()=>{tb.update(()=>{a&&function(e,t){let{transitionEnd:r={},transition:i={},...n}=e$(e,t)||{};for(let t in n={...n,...r}){let r=tv(n[t]);e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,tN(r))}}(e,a)})}),u}function iU(e,t,r={}){var i;let n=e$(e,t,"exit"===r.type?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0),{transition:o=e.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(o=r.transitionOverride);let s=n?()=>Promise.all(iB(e,n,r)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(i=0)=>{let{delayChildren:n=0,staggerChildren:s,staggerDirection:a}=o;return function(e,t,r=0,i=0,n=1,o){let s=[],a=(e.variantChildren.size-1)*i,l=1===n?(e=0)=>e*i:(e=0)=>a-e*i;return Array.from(e.variantChildren).sort(i_).forEach((e,i)=>{e.notify("AnimationStart",t),s.push(iU(e,t,{...o,delay:r+l(i)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(s)}(e,t,n+i,s,a,r)}:()=>Promise.resolve(),{when:l}=o;if(!l)return Promise.all([s(),a(r.delay)]);{let[e,t]="beforeChildren"===l?[s,a]:[a,s];return e().then(()=>t())}}function i_(e,t){return e.sortNodePosition(t)}let iz=eY.length,iW=[...eK].reverse(),iH=eK.length;function i$(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function iK(){return{animate:i$(!0),whileInView:i$(),whileHover:i$(),whileTap:i$(),whileDrag:i$(),whileFocus:i$(),exit:i$()}}class iY{constructor(e){this.isMounted=!1,this.node=e}update(){}}class iq extends iY{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:r})=>(function(e,t,r={}){let i;if(e.notify("AnimationStart",t),Array.isArray(t))i=Promise.all(t.map(t=>iU(e,t,r)));else if("string"==typeof t)i=iU(e,t,r);else{let n="function"==typeof t?e$(e,t,r.custom):t;i=Promise.all(iB(e,n,r))}return i.then(()=>{e.notify("AnimationComplete",t)})})(e,t,r))),r=iK(),i=!0,n=t=>(r,i)=>{var n;let o=e$(e,i,"exit"===t?null===(n=e.presenceContext)||void 0===n?void 0:n.custom:void 0);if(o){let{transition:e,transitionEnd:t,...i}=o;r={...r,...i,...t}}return r};function o(o){let{props:s}=e,a=function e(t){if(!t)return;if(!t.isControllingVariants){let r=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(r.initial=t.props.initial),r}let r={};for(let e=0;e<iz;e++){let i=eY[e],n=t.props[i];(ez(n)||!1===n)&&(r[i]=n)}return r}(e.parent)||{},l=[],u=new Set,c={},d=1/0;for(let t=0;t<iH;t++){var h;let p=iW[t],f=r[p],m=void 0!==s[p]?s[p]:a[p],g=ez(m),v=p===o?f.isActive:null;!1===v&&(d=t);let y=m===a[p]&&m!==s[p]&&g;if(y&&i&&e.manuallyAnimateOnMount&&(y=!1),f.protectedKeys={...c},!f.isActive&&null===v||!m&&!f.prevProp||eB(m)||"boolean"==typeof m)continue;let w=(h=f.prevProp,"string"==typeof m?m!==h:!!Array.isArray(m)&&!e_(m,h)),x=w||p===o&&f.isActive&&!y&&g||t>d&&g,b=!1,E=Array.isArray(m)?m:[m],C=E.reduce(n(p),{});!1===v&&(C={});let{prevResolvedValues:P={}}=f,T={...P,...C},k=t=>{x=!0,u.has(t)&&(b=!0,u.delete(t)),f.needsAnimating[t]=!0;let r=e.getValue(t);r&&(r.liveStyle=!1)};for(let e in T){let t=C[e],r=P[e];if(!c.hasOwnProperty(e))(eU(t)&&eU(r)?e_(t,r):t===r)?void 0!==t&&u.has(e)?k(e):f.protectedKeys[e]=!0:null!=t?k(e):u.add(e)}f.prevProp=m,f.prevResolvedValues=C,f.isActive&&(c={...c,...C}),i&&e.blockInitialAnimation&&(x=!1);let S=!(y&&w)||b;x&&S&&l.push(...E.map(e=>({animation:e,options:{type:p}})))}if(u.size){let t={};u.forEach(r=>{let i=e.getBaseTarget(r),n=e.getValue(r);n&&(n.liveStyle=!0),t[r]=null!=i?i:null}),l.push({animation:t})}let p=!!l.length;return i&&(!1===s.initial||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),i=!1,p?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,i){var n;if(r[t].isActive===i)return Promise.resolve();null===(n=e.variantChildren)||void 0===n||n.forEach(e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,i)}),r[t].isActive=i;let s=o(t);for(let e in r)r[e].protectedKeys={};return s},setAnimateFunction:function(r){t=r(e)},getState:()=>r,reset:()=>{r=iK(),i=!0}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();eB(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}let iZ=0;class iX extends iY{constructor(){super(...arguments),this.id=iZ++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;let i=this.node.animationState.setActive("exit",!e);t&&!e&&i.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}function iQ(e,t,r,i={passive:!0}){return e.addEventListener(t,r,i),()=>e.removeEventListener(t,r)}function iG(e){return{point:{x:e.pageX,y:e.pageY}}}let iJ=e=>t=>ti(t)&&e(t,iG(t));function i0(e,t,r,i){return iQ(e,t,iJ(r),i)}let i1=(e,t)=>Math.abs(e-t);class i2{constructor(e,t,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:n=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let e=i6(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,r=function(e,t){return Math.sqrt(i1(e.x,t.x)**2+i1(e.y,t.y)**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!r)return;let{point:i}=e,{timestamp:n}=tC;this.history.push({...i,timestamp:n});let{onStart:o,onMove:s}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),s&&s(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=i5(t,this.transformPagePoint),tb.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:r,onSessionEnd:i,resumeAnimation:n}=this.handlers;if(this.dragSnapToOrigin&&n&&n(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=i6("pointercancel"===e.type?this.lastMoveEventInfo:i5(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,o),i&&i(e,o)},!ti(e))return;this.dragSnapToOrigin=n,this.handlers=t,this.transformPagePoint=r,this.contextWindow=i||window;let o=i5(iG(e),this.transformPagePoint),{point:s}=o,{timestamp:a}=tC;this.history=[{...s,timestamp:a}];let{onSessionStart:l}=t;l&&l(e,i6(o,this.history)),this.removeListeners=ie(i0(this.contextWindow,"pointermove",this.handlePointerMove),i0(this.contextWindow,"pointerup",this.handlePointerUp),i0(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tE(this.updatePoint)}}function i5(e,t){return t?{point:t(e.point)}:e}function i8(e,t){return{x:e.x-t.x,y:e.y-t.y}}function i6({point:e},t){return{point:e,delta:i8(e,i3(t)),offset:i8(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,i=null,n=i3(e);for(;r>=0&&(i=e[r],!(n.timestamp-i.timestamp>tc(.1)));)r--;if(!i)return{x:0,y:0};let o=td(n.timestamp-i.timestamp);if(0===o)return{x:0,y:0};let s={x:(n.x-i.x)/o,y:(n.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}(t,0)}}function i3(e){return e[e.length-1]}function i7(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function i4(e){return e.max-e.min}function i9(e,t,r,i=.5){e.origin=i,e.originPoint=r1(t.min,t.max,e.origin),e.scale=i4(r)/i4(t),e.translate=r1(r.min,r.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function ne(e,t,r,i){i9(e.x,t.x,r.x,i?i.originX:void 0),i9(e.y,t.y,r.y,i?i.originY:void 0)}function nt(e,t,r){e.min=r.min+t.min,e.max=e.min+i4(t)}function nr(e,t,r){e.min=t.min-r.min,e.max=e.min+i4(t)}function ni(e,t,r){nr(e.x,t.x,r.x),nr(e.y,t.y,r.y)}function nn(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function no(e,t){let r=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,i]=[i,r]),{min:r,max:i}}function ns(e,t,r){return{min:na(e,t),max:na(e,r)}}function na(e,t){return"number"==typeof e?e:e[t]||0}let nl=()=>({translate:0,scale:1,origin:0,originPoint:0}),nu=()=>({x:nl(),y:nl()}),nc=()=>({min:0,max:0}),nd=()=>({x:nc(),y:nc()});function nh(e){return[e("x"),e("y")]}function np({top:e,left:t,right:r,bottom:i}){return{x:{min:t,max:r},y:{min:e,max:i}}}function nf(e){return void 0===e||1===e}function nm({scale:e,scaleX:t,scaleY:r}){return!nf(e)||!nf(t)||!nf(r)}function ng(e){return nm(e)||nv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function nv(e){var t,r;return(t=e.x)&&"0%"!==t||(r=e.y)&&"0%"!==r}function ny(e,t,r,i,n){return void 0!==n&&(e=i+n*(e-i)),i+r*(e-i)+t}function nw(e,t=0,r=1,i,n){e.min=ny(e.min,t,r,i,n),e.max=ny(e.max,t,r,i,n)}function nx(e,{x:t,y:r}){nw(e.x,t.translate,t.scale,t.originPoint),nw(e.y,r.translate,r.scale,r.originPoint)}function nb(e,t){e.min=e.min+t,e.max=e.max+t}function nE(e,t,r,i,n=.5){let o=r1(e.min,e.max,n);nw(e,t,r,o,i)}function nC(e,t){nE(e.x,t.x,t.scaleX,t.scale,t.originX),nE(e.y,t.y,t.scaleY,t.scale,t.originY)}function nP(e,t){return np(function(e,t){if(!t)return e;let r=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:i.y,right:i.x}}(e.getBoundingClientRect(),t))}let nT=({current:e})=>e?e.ownerDocument.defaultView:null,nk=new WeakMap;class nS{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=nd(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){let{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;let{dragSnapToOrigin:i}=this.getProps();this.panSession=new i2(e,{onSessionStart:e=>{let{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(iG(e).point)},onStart:(e,t)=>{let{drag:r,dragPropagation:i,onDragStart:n}=this.getProps();if(r&&!i&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===r||"y"===r?e9[r]?null:(e9[r]=!0,()=>{e9[r]=!1}):e9.x||e9.y?null:(e9.x=e9.y=!0,()=>{e9.x=e9.y=!1}),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nh(e=>{let t=this.getAxisMotionValue(e).get()||0;if(rr.test(t)){let{projection:r}=this.visualElement;if(r&&r.layout){let i=r.layout.layoutBox[e];if(i){let e=i4(i);t=parseFloat(t)/100*e}}}this.originPoint[e]=t}),n&&tb.postRender(()=>n(e,t)),tI(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{let{dragPropagation:r,dragDirectionLock:i,onDirectionLock:n,onDrag:o}=this.getProps();if(!r&&!this.openDragLock)return;let{offset:s}=t;if(i&&null===this.currentDirection){this.currentDirection=function(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}(s),null!==this.currentDirection&&n&&n(this.currentDirection);return}this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>nh(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:nT(this.visualElement)})}stop(e,t){let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:i}=t;this.startAnimation(i);let{onDragEnd:n}=this.getProps();n&&tb.postRender(()=>n(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){let{drag:i}=this.getProps();if(!r||!nA(e,i,this.currentDirection))return;let n=this.getAxisMotionValue(e),o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:r},i){return void 0!==t&&e<t?e=i?r1(t,e,i.min):Math.max(e,t):void 0!==r&&e>r&&(e=i?r1(r,e,i.max):Math.min(e,r)),e}(o,this.constraints[e],this.elastic[e])),n.set(o)}resolveConstraints(){var e;let{dragConstraints:t,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,n=this.constraints;t&&i7(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=function(e,{top:t,left:r,bottom:i,right:n}){return{x:nn(e.x,r,n),y:nn(e.y,t,i)}}(i.layoutBox,t):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:ns(e,"left","right"),y:ns(e,"top","bottom")}}(r),n!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&nh(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){let r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(i.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!i7(t))return!1;let i=t.current;th(null!==i,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:n}=this.visualElement;if(!n||!n.layout)return!1;let o=function(e,t,r){let i=nP(e,r),{scroll:n}=t;return n&&(nb(i.x,n.offset.x),nb(i.y,n.offset.y)),i}(i,n.root,this.visualElement.getTransformPagePoint()),s={x:no((e=n.layout.layoutBox).x,o.x),y:no(e.y,o.y)};if(r){let e=r(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(s));this.hasMutatedConstraints=!!e,e&&(s=np(e))}return s}startAnimation(e){let{drag:t,dragMomentum:r,dragElastic:i,dragTransition:n,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{};return Promise.all(nh(s=>{if(!nA(s,t,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:r?e[s]:0,bounceStiffness:i?200:1e6,bounceDamping:i?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...n,...l};return this.startAxisValueAnimation(s,u)})).then(s)}startAxisValueAnimation(e,t){let r=this.getAxisMotionValue(e);return tI(this.visualElement,e),r.start(iO(e,r,0,t,this.visualElement,!1))}stopAnimation(){nh(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){nh(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps();return r[t]||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){nh(t=>{let{drag:r}=this.getProps();if(!nA(t,r,this.currentDirection))return;let{projection:i}=this.visualElement,n=this.getAxisMotionValue(t);if(i&&i.layout){let{min:r,max:o}=i.layout.layoutBox[t];n.set(e[t]-r1(r,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!i7(t)||!r||!this.constraints)return;this.stopAnimation();let i={x:0,y:0};nh(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){let r=t.get();i[e]=function(e,t){let r=.5,i=i4(e),n=i4(t);return n>i?r=e6(t.min,t.max-i,e.min):i>n&&(r=e6(e.min,e.max-n,t.min)),tQ(0,1,r)}({min:r,max:r},this.constraints[e])}});let{transformTemplate:n}=this.visualElement.getProps();this.visualElement.current.style.transform=n?n({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),nh(t=>{if(!nA(t,e,null))return;let r=this.getAxisMotionValue(t),{min:n,max:o}=this.constraints[t];r.set(r1(n,o,i[t]))})}addListeners(){if(!this.visualElement.current)return;nk.set(this.visualElement,this);let e=i0(this.visualElement.current,"pointerdown",e=>{let{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)}),t=()=>{let{dragConstraints:e}=this.getProps();i7(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener("measure",t);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),tb.read(t);let n=iQ(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(nh(t=>{let r=this.getAxisMotionValue(t);r&&(this.originPoint[t]+=e[t].translate,r.set(r.get()+e[t].translate))}),this.visualElement.render())});return()=>{n(),e(),i(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:n=!1,dragElastic:o=.35,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:i,dragConstraints:n,dragElastic:o,dragMomentum:s}}}function nA(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}class nj extends iY{constructor(e){super(e),this.removeGroupControls=th,this.removeListeners=th,this.controls=new nS(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||th}unmount(){this.removeGroupControls(),this.removeListeners()}}let nR=e=>(t,r)=>{e&&tb.postRender(()=>e(t,r))};class nM extends iY{constructor(){super(...arguments),this.removePointerDownListener=th}onPointerDown(e){this.session=new i2(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nT(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:nR(e),onStart:nR(t),onMove:r,onEnd:(e,t)=>{delete this.session,i&&tb.postRender(()=>i(e,t))}}}mount(){this.removePointerDownListener=i0(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nD=(0,f.createContext)(null);function nN(e=!0){let t=(0,f.useContext)(nD);if(null===t)return[!0,null];let{isPresent:r,onExitComplete:i,register:n}=t,o=(0,f.useId)();(0,f.useEffect)(()=>{e&&n(o)},[e]);let s=(0,f.useCallback)(()=>e&&i&&i(o),[o,i,e]);return!r&&i?[!1,s]:[!0]}let nL=(0,f.createContext)({}),nI=(0,f.createContext)({}),nV={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function nF(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let nO={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e){if(!ri.test(e))return e;e=parseFloat(e)}let r=nF(e,t.target.x),i=nF(e,t.target.y);return`${r}% ${i}%`}},nB={},{schedule:nU,cancel:n_}=tx(queueMicrotask,!1);class nz extends f.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:i}=this.props,{projection:n}=e;Object.assign(nB,nH),n&&(t.group&&t.group.add(n),r&&r.register&&i&&r.register(n),n.root.didUpdate(),n.addEventListener("animationComplete",()=>{this.safeToRemove()}),n.setOptions({...n.options,onExitComplete:()=>this.safeToRemove()})),nV.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:r,drag:i,isPresent:n}=this.props,o=r.projection;return o&&(o.isPresent=n,i||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent===n||(n?o.promote():o.relegate()||tb.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),nU.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nW(e){let[t,r]=nN(),i=(0,f.useContext)(nL);return(0,h.jsx)(nz,{...e,layoutGroup:i,switchLayoutGroup:(0,f.useContext)(nI),isPresent:t,safeToRemove:r})}let nH={borderRadius:{...nO,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:nO,borderTopRightRadius:nO,borderBottomLeftRadius:nO,borderBottomRightRadius:nO,boxShadow:{correct:(e,{treeScale:t,projectionDelta:r})=>{let i=rv.parse(e);if(i.length>5)return e;let n=rv.createTransformer(e),o="number"!=typeof i[0]?1:0,s=r.x.scale*t.x,a=r.y.scale*t.y;i[0+o]/=s,i[1+o]/=a;let l=r1(s,a,.5);return"number"==typeof i[2+o]&&(i[2+o]/=l),"number"==typeof i[3+o]&&(i[3+o]/=l),n(i)}}},n$=(e,t)=>e.depth-t.depth;class nK{constructor(){this.children=[],this.isDirty=!1}add(e){tS(this.children,e),this.isDirty=!0}remove(e){tA(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(n$),this.isDirty=!1,this.children.forEach(e)}}function nY(e){let t=tL(e)?e.get():e;return tg(t)?t.toValue():t}let nq=["TopLeft","TopRight","BottomLeft","BottomRight"],nZ=nq.length,nX=e=>"string"==typeof e?parseFloat(e):e,nQ=e=>"number"==typeof e||ri.test(e);function nG(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let nJ=n1(0,.5,tq),n0=n1(.5,.95,th);function n1(e,t,r){return i=>i<e?0:i>t?1:r(e6(e,t,i))}function n2(e,t){e.min=t.min,e.max=t.max}function n5(e,t){n2(e.x,t.x),n2(e.y,t.y)}function n8(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function n6(e,t,r,i,n){return e-=t,e=i+1/r*(e-i),void 0!==n&&(e=i+1/n*(e-i)),e}function n3(e,t,[r,i,n],o,s){!function(e,t=0,r=1,i=.5,n,o=e,s=e){if(rr.test(t)&&(t=parseFloat(t),t=r1(s.min,s.max,t/100)-s.min),"number"!=typeof t)return;let a=r1(o.min,o.max,i);e===o&&(a-=t),e.min=n6(e.min,t,r,a,n),e.max=n6(e.max,t,r,a,n)}(e,t[r],t[i],t[n],t.scale,o,s)}let n7=["x","scaleX","originX"],n4=["y","scaleY","originY"];function n9(e,t,r,i){n3(e.x,t,n7,r?r.x:void 0,i?i.x:void 0),n3(e.y,t,n4,r?r.y:void 0,i?i.y:void 0)}function oe(e){return 0===e.translate&&1===e.scale}function ot(e){return oe(e.x)&&oe(e.y)}function or(e,t){return e.min===t.min&&e.max===t.max}function oi(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function on(e,t){return oi(e.x,t.x)&&oi(e.y,t.y)}function oo(e){return i4(e.x)/i4(e.y)}function os(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class oa{constructor(){this.members=[]}add(e){tS(this.members,e),e.scheduleRender()}remove(e){if(tA(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let r=this.members.findIndex(t=>e===t);if(0===r)return!1;for(let e=r;e>=0;e--){let r=this.members[e];if(!1!==r.isPresent){t=r;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:i}=e.options;!1===i&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let ol={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ou="undefined"!=typeof window&&void 0!==window.MotionDebug,oc=["","X","Y","Z"],od={visibility:"hidden"},oh=0;function op(e,t,r,i){let{latestValues:n}=t;n[e]&&(r[e]=n[e],t.setStaticValue(e,0),i&&(i[e]=0))}function of({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:i,resetTransform:n}){return class{constructor(e={},r=null==t?void 0:t()){this.id=oh++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ou&&(ol.totalNodes=ol.resolvedTargetDeltas=ol.recalculatedProjection=0),this.nodes.forEach(ov),this.nodes.forEach(oP),this.nodes.forEach(oT),this.nodes.forEach(oy),ou&&window.MotionDebug.record(ol)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new nK)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new tj),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let r=this.eventHandlers.get(e);r&&r.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t,r=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:i,layout:n,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(n||i)&&(this.isLayoutDirty=!0),e){let r;let i=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(e,t){let r=tk.now(),i=({timestamp:t})=>{let n=t-r;n>=250&&(tE(i),e(n-250))};return tb.read(i,!0),()=>tE(i)}(i,250),nV.hasAnimatedSinceResize&&(nV.hasAnimatedSinceResize=!1,this.nodes.forEach(oC))})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||n)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:r,layout:i})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let n=this.options.transition||o.getDefaultTransition()||oM,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=o.getProps(),l=!this.targetLayout||!on(this.targetLayout,i)||r,u=!t&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...eG(n,"layout"),onPlay:s,onComplete:a};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||oC(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tE(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ok),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:r}=t.options;if(!r)return;let i=r.props[tF];if(window.MotionHasOptimisedAnimation(i,"transform")){let{layout:e,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",tb,!(e||r))}let{parent:n}=t;n&&!n.hasCheckedOptimisedAppear&&e(n)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;let i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ox);return}this.isUpdating||this.nodes.forEach(ob),this.isUpdating=!1,this.nodes.forEach(oE),this.nodes.forEach(om),this.nodes.forEach(og),this.clearAllSnapshots();let e=tk.now();tC.delta=tQ(0,1e3/60,e-tC.timestamp),tC.timestamp=e,tC.isProcessing=!0,tP.update.process(tC),tP.preRender.process(tC),tP.render.process(tC),tC.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nU.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ow),this.sharedNodes.forEach(oS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tb.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tb.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=nd(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){let t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!n)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ot(this.projectionDelta),r=this.getTransformTemplate(),i=r?r(this.latestValues,""):void 0,o=i!==this.prevTransformTemplateValue;e&&(t||ng(this.latestValues)||o)&&(n(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let r=this.measurePageBox(),i=this.removeElementScroll(r);return e&&(i=this.removeTransform(i)),oL((t=i).x),oL(t.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:i,latestValues:{},source:this.id}}measurePageBox(){var e;let{visualElement:t}=this.options;if(!t)return nd();let r=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(oV))){let{scroll:e}=this.root;e&&(nb(r.x,e.offset.x),nb(r.y,e.offset.y))}return r}removeElementScroll(e){var t;let r=nd();if(n5(r,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return r;for(let t=0;t<this.path.length;t++){let i=this.path[t],{scroll:n,options:o}=i;i!==this.root&&n&&o.layoutScroll&&(n.wasRoot&&n5(r,e),nb(r.x,n.offset.x),nb(r.y,n.offset.y))}return r}applyTransform(e,t=!1){let r=nd();n5(r,e);for(let e=0;e<this.path.length;e++){let i=this.path[e];!t&&i.options.layoutScroll&&i.scroll&&i!==i.root&&nC(r,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),ng(i.latestValues)&&nC(r,i.latestValues)}return ng(this.latestValues)&&nC(r,this.latestValues),r}removeTransform(e){let t=nd();n5(t,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];if(!r.instance||!ng(r.latestValues))continue;nm(r.latestValues)&&r.updateSnapshot();let i=nd();n5(i,r.measurePageBox()),n9(t,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,i)}return ng(this.latestValues)&&n9(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tC.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,r,i,n;let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let s=!!this.resumingFrom||this!==o;if(!(e||s&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:a,layoutId:l}=this.options;if(this.layout&&(a||l)){if(this.resolvedRelativeTargetAt=tC.timestamp,!this.targetDelta&&!this.relativeTarget){let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nd(),this.relativeTargetOrigin=nd(),ni(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),n5(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if((this.target||(this.target=nd(),this.targetWithTransforms=nd()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),r=this.target,i=this.relativeTarget,n=this.relativeParent.target,nt(r.x,i.x,n.x),nt(r.y,i.y,n.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):n5(this.target,this.layout.layoutBox),nx(this.target,this.targetDelta)):n5(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=nd(),this.relativeTargetOrigin=nd(),ni(this.relativeTargetOrigin,this.target,e.target),n5(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ou&&ol.resolvedTargetDeltas++}}}getClosestProjectingParent(){return!this.parent||nm(this.parent.latestValues)||nv(this.parent.latestValues)?void 0:this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),r=!!this.resumingFrom||this!==t,i=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(i=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===tC.timestamp&&(i=!1),i)return;let{layout:n,layoutId:o}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(n||o))return;n5(this.layoutCorrected,this.layout.layoutBox);let s=this.treeScale.x,a=this.treeScale.y;(function(e,t,r,i=!1){let n,o;let s=r.length;if(s){t.x=t.y=1;for(let a=0;a<s;a++){o=(n=r[a]).projectionDelta;let{visualElement:s}=n.options;(!s||!s.props.style||"contents"!==s.props.style.display)&&(i&&n.options.layoutScroll&&n.scroll&&n!==n.root&&nC(e,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,nx(e,o)),i&&ng(n.latestValues)&&nC(e,n.latestValues))}t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}})(this.layoutCorrected,this.treeScale,this.path,r),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=nd());let{target:l}=t;if(!l){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(n8(this.prevProjectionDelta.x,this.projectionDelta.x),n8(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ne(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===s&&this.treeScale.y===a&&os(this.projectionDelta.x,this.prevProjectionDelta.x)&&os(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),ou&&ol.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=nu(),this.projectionDelta=nu(),this.projectionDeltaWithTransform=nu()}setAnimationOrigin(e,t=!1){let r;let i=this.snapshot,n=i?i.latestValues:{},o={...this.latestValues},s=nu();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let a=nd(),l=(i?i.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,d=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(oR));this.animationProgress=0,this.mixTargetDelta=t=>{let i=t/1e3;if(oA(s.x,e.x,i),oA(s.y,e.y,i),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,h,p,f;ni(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,oj(p.x,f.x,a.x,i),oj(p.y,f.y,a.y,i),r&&(u=this.relativeTarget,h=r,or(u.x,h.x)&&or(u.y,h.y))&&(this.isProjectionDirty=!1),r||(r=nd()),n5(r,this.relativeTarget)}l&&(this.animationValues=o,function(e,t,r,i,n,o){n?(e.opacity=r1(0,void 0!==r.opacity?r.opacity:1,nJ(i)),e.opacityExit=r1(void 0!==t.opacity?t.opacity:1,0,n0(i))):o&&(e.opacity=r1(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,i));for(let n=0;n<nZ;n++){let o=`border${nq[n]}Radius`,s=nG(t,o),a=nG(r,o);(void 0!==s||void 0!==a)&&(s||(s=0),a||(a=0),0===s||0===a||nQ(s)===nQ(a)?(e[o]=Math.max(r1(nX(s),nX(a),i),0),(rr.test(a)||rr.test(s))&&(e[o]+="%")):e[o]=a)}(t.rotate||r.rotate)&&(e.rotate=r1(t.rotate||0,r.rotate||0,i))}(o,n,this.latestValues,i,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tE(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tb.update(()=>{nV.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){let i=tL(0)?0:tN(0);return i.start(iO("",i,1e3,r)),i.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:r,layout:i,latestValues:n}=e;if(t&&r&&i){if(this!==e&&this.layout&&i&&oI(this.options.animationType,this.layout.layoutBox,i.layoutBox)){r=this.target||nd();let t=i4(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;let i=i4(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+i}n5(t,r),nC(t,n),ne(this.projectionDeltaWithTransform,this.layoutCorrected,t,n)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new oa),this.sharedNodes.get(e).add(t);let r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:r}={}){let i=this.getStack();i&&i.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:r}=e;if((r.z||r.rotate||r.rotateX||r.rotateY||r.rotateZ||r.skewX||r.skewY)&&(t=!0),!t)return;let i={};r.z&&op("z",e,i,this.animationValues);for(let t=0;t<oc.length;t++)op(`rotate${oc[t]}`,e,i,this.animationValues),op(`skew${oc[t]}`,e,i,this.animationValues);for(let t in e.render(),i)e.setStaticValue(t,i[t]),this.animationValues&&(this.animationValues[t]=i[t]);e.scheduleRender()}getProjectionStyles(e){var t,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return od;let i={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,i.opacity="",i.pointerEvents=nY(null==e?void 0:e.pointerEvents)||"",i.transform=n?n(this.latestValues,""):"none",i;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=nY(null==e?void 0:e.pointerEvents)||""),this.hasProjected&&!ng(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}let s=o.animationValues||o.latestValues;this.applyTransformsToTarget(),i.transform=function(e,t,r){let i="",n=e.x.translate/t.x,o=e.y.translate/t.y,s=(null==r?void 0:r.z)||0;if((n||o||s)&&(i=`translate3d(${n}px, ${o}px, ${s}px) `),(1!==t.x||1!==t.y)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),r){let{transformPerspective:e,rotate:t,rotateX:n,rotateY:o,skewX:s,skewY:a}=r;e&&(i=`perspective(${e}px) ${i}`),t&&(i+=`rotate(${t}deg) `),n&&(i+=`rotateX(${n}deg) `),o&&(i+=`rotateY(${o}deg) `),s&&(i+=`skewX(${s}deg) `),a&&(i+=`skewY(${a}deg) `)}let a=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==a||1!==l)&&(i+=`scale(${a}, ${l})`),i||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),n&&(i.transform=n(s,i.transform));let{x:a,y:l}=this.projectionDelta;for(let e in i.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,o.animationValues?i.opacity=o===this?null!==(r=null!==(t=s.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:i.opacity=o===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0,nB){if(void 0===s[e])continue;let{correct:t,applyTo:r}=nB[e],n="none"===i.transform?s[e]:t(s[e],o);if(r){let e=r.length;for(let t=0;t<e;t++)i[r[t]]=n}else i[e]=n}return this.options.layoutId&&(i.pointerEvents=o===this?nY(null==e?void 0:e.pointerEvents)||"":"none"),i}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(ox),this.root.sharedNodes.clear()}}}function om(e){e.updateLayout()}function og(e){var t;let r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:i}=e.layout,{animationType:n}=e.options,o=r.source!==e.layout.source;"size"===n?nh(e=>{let i=o?r.measuredBox[e]:r.layoutBox[e],n=i4(i);i.min=t[e].min,i.max=i.min+n}):oI(n,r.layoutBox,t)&&nh(i=>{let n=o?r.measuredBox[i]:r.layoutBox[i],s=i4(t[i]);n.max=n.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[i].max=e.relativeTarget[i].min+s)});let s=nu();ne(s,t,r.layoutBox);let a=nu();o?ne(a,e.applyTransform(i,!0),r.measuredBox):ne(a,t,r.layoutBox);let l=!ot(s),u=!1;if(!e.resumeFrom){let i=e.getClosestProjectingParent();if(i&&!i.resumeFrom){let{snapshot:n,layout:o}=i;if(n&&o){let s=nd();ni(s,r.layoutBox,n.layoutBox);let a=nd();ni(a,t,o.layoutBox),on(s,a)||(u=!0),i.options.layoutRoot&&(e.relativeTarget=a,e.relativeTargetOrigin=s,e.relativeParent=i)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function ov(e){ou&&ol.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function oy(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ow(e){e.clearSnapshot()}function ox(e){e.clearMeasurements()}function ob(e){e.isLayoutDirty=!1}function oE(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function oC(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function oP(e){e.resolveTargetDelta()}function oT(e){e.calcProjection()}function ok(e){e.resetSkewAndRotation()}function oS(e){e.removeLeadSnapshot()}function oA(e,t,r){e.translate=r1(t.translate,0,r),e.scale=r1(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function oj(e,t,r,i){e.min=r1(t.min,r.min,i),e.max=r1(t.max,r.max,i)}function oR(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let oM={duration:.45,ease:[.4,0,.1,1]},oD=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),oN=oD("applewebkit/")&&!oD("chrome/")?Math.round:th;function oL(e){e.min=oN(e.min),e.max=oN(e.max)}function oI(e,t,r){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(oo(t)-oo(r)))}function oV(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}let oF=of({attachResizeListener:(e,t)=>iQ(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),oO={current:void 0},oB=of({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!oO.current){let e=new oF({});e.mount(window),e.setOptions({layoutScroll:!0}),oO.current=e}return oO.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function oU(e,t,r){let{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover","Start"===r);let n=i["onHover"+r];n&&tb.postRender(()=>n(t,iG(t)))}class o_ extends iY{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,r={}){let[i,n,o]=te(e,r),s=tt(e=>{let{target:r}=e,i=t(e);if("function"!=typeof i||!r)return;let o=tt(e=>{i(e),r.removeEventListener("pointerleave",o)});r.addEventListener("pointerleave",o,n)});return i.forEach(e=>{e.addEventListener("pointerenter",s,n)}),o}(e,e=>(oU(this.node,e,"Start"),e=>oU(this.node,e,"End"))))}unmount(){}}class oz extends iY{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ie(iQ(this.node.current,"focus",()=>this.onFocus()),iQ(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function oW(e,t,r){let{props:i}=e;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap","Start"===r);let n=i["onTap"+("End"===r?"":r)];n&&tb.postRender(()=>n(t,iG(t)))}class oH extends iY{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,r={}){let[i,n,o]=te(e,r),s=e=>{let i=e.currentTarget;if(!tu(e)||to.has(i))return;to.add(i);let o=t(e),s=(e,t)=>{window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),tu(e)&&to.has(i)&&(to.delete(i),"function"==typeof o&&o(e,{success:t}))},a=e=>{s(e,r.useGlobalTarget||tr(i,e.target))},l=e=>{s(e,!1)};window.addEventListener("pointerup",a,n),window.addEventListener("pointercancel",l,n)};return i.forEach(e=>{tn.has(e.tagName)||-1!==e.tabIndex||null!==e.getAttribute("tabindex")||(e.tabIndex=0),(r.useGlobalTarget?window:e).addEventListener("pointerdown",s,n),e.addEventListener("focus",e=>tl(e,n),n)}),o}(e,e=>(oW(this.node,e,"Start"),(e,{success:t})=>oW(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}let o$=new WeakMap,oK=new WeakMap,oY=e=>{let t=o$.get(e.target);t&&t(e)},oq=e=>{e.forEach(oY)},oZ={some:0,all:1};class oX extends iY{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:i="some",once:n}=e,o={root:t?t.current:void 0,rootMargin:r,threshold:"number"==typeof i?i:oZ[i]};return function(e,t,r){let i=function({root:e,...t}){let r=e||document;oK.has(r)||oK.set(r,{});let i=oK.get(r),n=JSON.stringify(t);return i[n]||(i[n]=new IntersectionObserver(oq,{root:e,...t})),i[n]}(t);return o$.set(e,r),i.observe(e),()=>{o$.delete(e),i.unobserve(e)}}(this.node.current,o,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,n&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:r,onViewportLeave:i}=this.node.getProps(),o=t?r:i;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}(e,t))&&this.startObserver()}unmount(){}}let oQ=(0,f.createContext)({strict:!1}),oG=(0,f.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),oJ=(0,f.createContext)({});function o0(e){return eB(e.animate)||eY.some(t=>ez(e[t]))}function o1(e){return!!(o0(e)||e.variants)}function o2(e){return Array.isArray(e)?e.join(" "):e}let o5="undefined"!=typeof window,o8={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},o6={};for(let e in o8)o6[e]={isEnabled:t=>o8[e].some(e=>!!t[e])};let o3=Symbol.for("motionComponentSymbol"),o7=o5?f.useLayoutEffect:f.useEffect,o4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o9(e){if("string"!=typeof e||e.includes("-"));else if(o4.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}function se(e){let t=(0,f.useRef)(null);return null===t.current&&(t.current=e()),t.current}let st=e=>(t,r)=>{let i=(0,f.useContext)(oJ),n=(0,f.useContext)(nD),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:r},i,n,o){let s={latestValues:function(e,t,r,i){let n={},o=i(e,{});for(let e in o)n[e]=nY(o[e]);let{initial:s,animate:a}=e,l=o0(e),u=o1(e);t&&u&&!l&&!1!==e.inherit&&(void 0===s&&(s=t.initial),void 0===a&&(a=t.animate));let c=!!r&&!1===r.initial,d=(c=c||!1===s)?a:s;if(d&&"boolean"!=typeof d&&!eB(d)){let t=Array.isArray(d)?d:[d];for(let r=0;r<t.length;r++){let i=eH(e,t[r]);if(i){let{transitionEnd:e,transition:t,...r}=i;for(let e in r){let t=r[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(n[e]=t)}for(let t in e)n[t]=e[t]}}}return n}(i,n,o,e),renderState:t()};return r&&(s.onMount=e=>r({props:i,current:e,...s}),s.onUpdate=e=>r(e)),s})(e,t,i,n);return r?o():se(o)},sr=(e,t)=>t&&"number"==typeof e?t.transform(e):e,si={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sn=tp.length;function so(e,t,r){let{style:i,vars:n,transformOrigin:o}=e,s=!1,a=!1;for(let e in t){let r=t[e];if(tf.has(e)){s=!0;continue}if(rz(e)){n[e]=r;continue}{let t=sr(r,rC[e]);e.startsWith("origin")?(a=!0,o[e]=t):i[e]=t}}if(!t.transform&&(s||r?i.transform=function(e,t,r){let i="",n=!0;for(let o=0;o<sn;o++){let s=tp[o],a=e[s];if(void 0===a)continue;let l=!0;if(!(l="number"==typeof a?a===(s.startsWith("scale")?1:0):0===parseFloat(a))||r){let e=sr(a,rC[s]);if(!l){n=!1;let t=si[s]||s;i+=`${t}(${e}) `}r&&(t[s]=e)}}return i=i.trim(),r?i=r(t,n?"":i):n&&(i="none"),i}(t,e.transform,r):i.transform&&(i.transform="none")),a){let{originX:e="50%",originY:t="50%",originZ:r=0}=o;i.transformOrigin=`${e} ${t} ${r}`}}let ss={offset:"stroke-dashoffset",array:"stroke-dasharray"},sa={offset:"strokeDashoffset",array:"strokeDasharray"};function sl(e,t,r){return"string"==typeof e?e:ri.transform(t+r*e)}function su(e,{attrX:t,attrY:r,attrScale:i,originX:n,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(so(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:h,style:p,dimensions:f}=e;h.transform&&(f&&(p.transform=h.transform),delete h.transform),f&&(void 0!==n||void 0!==o||p.transform)&&(p.transformOrigin=function(e,t,r){let i=sl(t,e.x,e.width),n=sl(r,e.y,e.height);return`${i} ${n}`}(f,void 0!==n?n:.5,void 0!==o?o:.5)),void 0!==t&&(h.x=t),void 0!==r&&(h.y=r),void 0!==i&&(h.scale=i),void 0!==s&&function(e,t,r=1,i=0,n=!0){e.pathLength=1;let o=n?ss:sa;e[o.offset]=ri.transform(-i);let s=ri.transform(t),a=ri.transform(r);e[o.array]=`${s} ${a}`}(h,s,a,l,!1)}let sc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),sd=()=>({...sc(),attrs:{}}),sh=e=>"string"==typeof e&&"svg"===e.toLowerCase();function sp(e,{style:t,vars:r},i,n){for(let o in Object.assign(e.style,t,n&&n.getProjectionStyles(i)),r)e.style.setProperty(o,r[o])}let sf=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sm(e,t,r,i){for(let r in sp(e,t,void 0,i),t.attrs)e.setAttribute(sf.has(r)?r:tV(r),t.attrs[r])}function sg(e,{layout:t,layoutId:r}){return tf.has(e)||e.startsWith("origin")||(t||void 0!==r)&&(!!nB[e]||"opacity"===e)}function sv(e,t,r){var i;let{style:n}=e,o={};for(let s in n)(tL(n[s])||t.style&&tL(t.style[s])||sg(s,e)||(null===(i=null==r?void 0:r.getValue(s))||void 0===i?void 0:i.liveStyle)!==void 0)&&(o[s]=n[s]);return o}function sy(e,t,r){let i=sv(e,t,r);for(let r in e)(tL(e[r])||tL(t[r]))&&(i[-1!==tp.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]);return i}let sw=["x","y","width","height","cx","cy","r"],sx={useVisualState:st({scrapeMotionValuesFromProps:sy,createRenderState:sd,onUpdate:({props:e,prevProps:t,current:r,renderState:i,latestValues:n})=>{if(!r)return;let o=!!e.drag;if(!o){for(let e in n)if(tf.has(e)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let r=0;r<sw.length;r++){let i=sw[r];e[i]!==t[i]&&(s=!0)}s&&tb.read(()=>{(function(e,t){try{t.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(e){t.dimensions={x:0,y:0,width:0,height:0}}})(r,i),tb.render(()=>{su(i,n,sh(r.tagName),e.transformTemplate),sm(r,i)})})}})},sb={useVisualState:st({scrapeMotionValuesFromProps:sv,createRenderState:sc})};function sE(e,t,r){for(let i in t)tL(t[i])||sg(i,r)||(e[i]=t[i])}let sC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sP(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||sC.has(e)}let sT=e=>!sP(e);try{!function(e){e&&(sT=t=>t.startsWith("on")?!sP(t):e(t))}(require("@emotion/is-prop-valid").default)}catch(e){}let sk={current:null},sS={current:!1},sA=[...rq,rl,rv],sj=e=>sA.find(rY(e)),sR=new WeakMap,sM=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sD{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:n,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=rB,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=tk.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,tb.render(this.render,!1,!0))};let{latestValues:a,renderState:l,onUpdate:u}=o;this.onUpdate=u,this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!n,this.isControllingVariants=o0(t),this.isVariantNode=o1(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:c,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];void 0!==a[e]&&tL(t)&&t.set(a[e],!1)}}mount(e){this.current=e,sR.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),sS.current||function(){if(sS.current=!0,o5){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>sk.current=e.matches;e.addListener(t),t()}else sk.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||sk.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in sR.delete(this.current),this.projection&&this.projection.unmount(),tE(this.notifyUpdate),tE(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){let r;this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let i=tf.has(e),n=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&tb.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),o=t.on("renderRequest",this.scheduleRender);window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{n(),o(),r&&r(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in o6){let t=o6[e];if(!t)continue;let{isEnabled:r,Feature:i}=t;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):nd()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<sM.length;t++){let r=sM[t];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let i=e["on"+r];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=function(e,t,r){for(let i in t){let n=t[i],o=r[i];if(tL(n))e.addValue(i,n);else if(tL(o))e.addValue(i,tN(n,{owner:e}));else if(o!==n){if(e.hasValue(i)){let t=e.getValue(i);!0===t.liveStyle?t.jump(n):t.hasAnimated||t.set(n)}else{let t=e.getStaticValue(i);e.addValue(i,tN(void 0!==t?t:n,{owner:e}))}}}for(let i in r)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=tN(null===t?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let i=void 0===this.latestValues[e]&&this.current?null!==(r=this.getBaseTargetFromProps(this.props,e))&&void 0!==r?r:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return null!=i&&("string"==typeof i&&(rU(i)||tX(i))?i=parseFloat(i):!sj(i)&&rv.test(t)&&(i=rk(e,t)),this.setBaseTarget(e,tL(i)?i.get():i)),tL(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;let r;let{initial:i}=this.props;if("string"==typeof i||"object"==typeof i){let n=eH(this.props,i,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);n&&(r=n[e])}if(i&&void 0!==r)return r;let n=this.getBaseTargetFromProps(this.props,e);return void 0===n||tL(n)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:n}on(e,t){return this.events[e]||(this.events[e]=new tj),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class sN extends sD{constructor(){super(...arguments),this.KeyframeResolver=rX}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;tL(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}class sL extends sN{constructor(){super(...arguments),this.type="html",this.renderInstance=sp}readValueFromInstance(e,t){if(tf.has(t)){let e=rT(t);return e&&e.default||0}{let r=window.getComputedStyle(e),i=(rz(t)?r.getPropertyValue(t):r[t])||0;return"string"==typeof i?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:t}){return nP(e,t)}build(e,t,r){so(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return sv(e,t,r)}}class sI extends sN{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=nd}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(tf.has(t)){let e=rT(t);return e&&e.default||0}return t=sf.has(t)?t:tV(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return sy(e,t,r)}build(e,t,r){su(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,i){sm(e,t,r,i)}mount(e){this.isSVGTag=sh(e.tagName),super.mount(e)}}let sV=function(e){if("undefined"==typeof Proxy)return e;let t=new Map;return new Proxy((...t)=>e(...t),{get:(r,i)=>"create"===i?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}((a={animation:{Feature:iq},exit:{Feature:iX},inView:{Feature:oX},tap:{Feature:oH},focus:{Feature:oz},hover:{Feature:o_},pan:{Feature:nM},drag:{Feature:nj,ProjectionNode:oB,MeasureLayout:nW},layout:{ProjectionNode:oB,MeasureLayout:nW}},l=(e,t)=>o9(e)?new sI(t):new sL(t,{allowProjection:e!==f.Fragment}),function(e,{forwardMotionProps:t}={forwardMotionProps:!1}){return function({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:i,Component:n}){var o,s;function a(e,o){var s;let a;let l={...(0,f.useContext)(oG),...e,layoutId:function({layoutId:e}){let t=(0,f.useContext)(nL).id;return t&&void 0!==e?t+"-"+e:e}(e)},{isStatic:u}=l,c=function(e){let{initial:t,animate:r}=function(e,t){if(o0(e)){let{initial:t,animate:r}=e;return{initial:!1===t||ez(t)?t:void 0,animate:ez(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,f.useContext)(oJ));return(0,f.useMemo)(()=>({initial:t,animate:r}),[o2(t),o2(r)])}(e),d=i(e,u);if(!u&&o5){(0,f.useContext)(oQ).strict;let e=function(e){let{drag:t,layout:r}=o6;if(!t&&!r)return{};let i={...t,...r};return{MeasureLayout:(null==t?void 0:t.isEnabled(e))||(null==r?void 0:r.isEnabled(e))?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(l);a=e.MeasureLayout,c.visualElement=function(e,t,r,i,n){var o,s;let{visualElement:a}=(0,f.useContext)(oJ),l=(0,f.useContext)(oQ),u=(0,f.useContext)(nD),c=(0,f.useContext)(oG).reducedMotion,d=(0,f.useRef)(null);i=i||l.renderer,!d.current&&i&&(d.current=i(e,{visualState:t,parent:a,props:r,presenceContext:u,blockInitialAnimation:!!u&&!1===u.initial,reducedMotionConfig:c}));let h=d.current,p=(0,f.useContext)(nI);h&&!h.projection&&n&&("html"===h.type||"svg"===h.type)&&function(e,t,r,i){let{layoutId:n,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent)),e.projection.setOptions({layoutId:n,layout:o,alwaysMeasureLayout:!!s||a&&i7(a),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}(d.current,r,n,p);let m=(0,f.useRef)(!1);(0,f.useInsertionEffect)(()=>{h&&m.current&&h.update(r,u)});let g=r[tF],v=(0,f.useRef)(!!g&&!(null===(o=window.MotionHandoffIsComplete)||void 0===o?void 0:o.call(window,g))&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,g)));return o7(()=>{h&&(m.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),nU.render(h.render),v.current&&h.animationState&&h.animationState.animateChanges())}),(0,f.useEffect)(()=>{h&&(!v.current&&h.animationState&&h.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var e;null===(e=window.MotionHandoffMarkAsComplete)||void 0===e||e.call(window,g)}),v.current=!1))}),h}(n,d,l,t,e.ProjectionNode)}return(0,h.jsxs)(oJ.Provider,{value:c,children:[a&&c.visualElement?(0,h.jsx)(a,{visualElement:c.visualElement,...l}):null,r(n,e,(s=c.visualElement,(0,f.useCallback)(e=>{e&&d.onMount&&d.onMount(e),s&&(e?s.mount(e):s.unmount()),o&&("function"==typeof o?o(e):i7(o)&&(o.current=e))},[s])),d,u,c.visualElement)]})}e&&function(e){for(let t in e)o6[t]={...o6[t],...e[t]}}(e),a.displayName=`motion.${"string"==typeof n?n:`create(${null!==(s=null!==(o=n.displayName)&&void 0!==o?o:n.name)&&void 0!==s?s:""})`}`;let l=(0,f.forwardRef)(a);return l[o3]=n,l}({...o9(e)?sx:sb,preloadedFeatures:a,useRender:function(e=!1){return(t,r,i,{latestValues:n},o)=>{let s=(o9(t)?function(e,t,r,i){let n=(0,f.useMemo)(()=>{let r=sd();return su(r,t,sh(i),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){let t={};sE(t,e.style,e),n.style={...t,...n.style}}return n}:function(e,t){let r={},i=function(e,t){let r=e.style||{},i={};return sE(i,r,e),Object.assign(i,function({transformTemplate:e},t){return(0,f.useMemo)(()=>{let r=sc();return so(r,t,e),Object.assign({},r.vars,r.style)},[t])}(e,t)),i}(e,t);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r})(r,n,o,t),a=function(e,t,r){let i={};for(let n in e)("values"!==n||"object"!=typeof e.values)&&(sT(n)||!0===r&&sP(n)||!t&&!sP(n)||e.draggable&&n.startsWith("onDrag"))&&(i[n]=e[n]);return i}(r,"string"==typeof t,e),l=t!==f.Fragment?{...a,...s,ref:i}:{},{children:u}=r,c=(0,f.useMemo)(()=>tL(u)?u.get():u,[u]);return(0,f.createElement)(t,{...l,children:c})}}(t),createVisualElement:l,Component:e})}));class sF extends f.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function sO({children:e,isPresent:t}){let r=(0,f.useId)(),i=(0,f.useRef)(null),n=(0,f.useRef)({width:0,height:0,top:0,left:0}),{nonce:o}=(0,f.useContext)(oG);return(0,f.useInsertionEffect)(()=>{let{width:e,height:s,top:a,left:l}=n.current;if(t||!i.current||!e||!s)return;i.current.dataset.motionPopId=r;let u=document.createElement("style");return o&&(u.nonce=o),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),(0,h.jsx)(sF,{isPresent:t,childRef:i,sizeRef:n,children:f.cloneElement(e,{ref:i})})}let sB=({children:e,initial:t,isPresent:r,onExitComplete:i,custom:n,presenceAffectsLayout:o,mode:s})=>{let a=se(sU),l=(0,f.useId)(),u=(0,f.useCallback)(e=>{for(let t of(a.set(e,!0),a.values()))if(!t)return;i&&i()},[a,i]),c=(0,f.useMemo)(()=>({id:l,initial:t,isPresent:r,custom:n,onExitComplete:u,register:e=>(a.set(e,!1),()=>a.delete(e))}),o?[Math.random(),u]:[r,u]);return(0,f.useMemo)(()=>{a.forEach((e,t)=>a.set(t,!1))},[r]),f.useEffect(()=>{r||a.size||!i||i()},[r]),"popLayout"===s&&(e=(0,h.jsx)(sO,{isPresent:r,children:e})),(0,h.jsx)(nD.Provider,{value:c,children:e})};function sU(){return new Map}let s_=e=>e.key||"";function sz(e){let t=[];return f.Children.forEach(e,e=>{(0,f.isValidElement)(e)&&t.push(e)}),t}let sW=({children:e,custom:t,initial:r=!0,onExitComplete:i,presenceAffectsLayout:n=!0,mode:o="sync",propagate:s=!1})=>{let[a,l]=nN(s),u=(0,f.useMemo)(()=>sz(e),[e]),c=s&&!a?[]:u.map(s_),d=(0,f.useRef)(!0),p=(0,f.useRef)(u),m=se(()=>new Map),[g,v]=(0,f.useState)(u),[y,w]=(0,f.useState)(u);o7(()=>{d.current=!1,p.current=u;for(let e=0;e<y.length;e++){let t=s_(y[e]);c.includes(t)?m.delete(t):!0!==m.get(t)&&m.set(t,!1)}},[y,c.length,c.join("-")]);let x=[];if(u!==g){let e=[...u];for(let t=0;t<y.length;t++){let r=y[t],i=s_(r);c.includes(i)||(e.splice(t,0,r),x.push(r))}"wait"===o&&x.length&&(e=x),w(sz(e)),v(u);return}let{forceRender:b}=(0,f.useContext)(nL);return(0,h.jsx)(h.Fragment,{children:y.map(e=>{let f=s_(e),g=(!s||!!a)&&(u===y||c.includes(f));return(0,h.jsx)(sB,{isPresent:g,initial:(!d.current||!!r)&&void 0,custom:g?void 0:t,presenceAffectsLayout:n,mode:o,onExitComplete:g?void 0:()=>{if(!m.has(f))return;m.set(f,!0);let e=!0;m.forEach(t=>{t||(e=!1)}),e&&(null==b||b(),w(p.current),s&&(null==l||l()),i&&i())},children:e},f)})})};var sH=m[" useId ".trim().toString()]||(()=>void 0),s$=0;function sK(e){let[t,r]=f.useState(sH());return er(()=>{e||r(e=>e??String(s$++))},[e]),e||(t?`radix-${t}`:"")}var sY="focusScope.autoFocusOnMount",sq="focusScope.autoFocusOnUnmount",sZ={bubbles:!1,cancelable:!0},sX=f.forwardRef((e,t)=>{let{loop:r=!1,trapped:i=!1,onMountAutoFocus:n,onUnmountAutoFocus:o,...s}=e,[a,l]=f.useState(null),u=Z(n),c=Z(o),d=f.useRef(null),p=z(t,e=>l(e)),m=f.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;f.useEffect(()=>{if(i){let e=function(e){if(m.paused||!a)return;let t=e.target;a.contains(t)?d.current=t:sJ(d.current,{select:!0})},t=function(e){if(m.paused||!a)return;let t=e.relatedTarget;null===t||a.contains(t)||sJ(d.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&sJ(a)});return a&&r.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[i,a,m.paused]),f.useEffect(()=>{if(a){s0.add(m);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(sY,sZ);a.addEventListener(sY,u),a.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let r=document.activeElement;for(let i of e)if(sJ(i,{select:t}),document.activeElement!==r)return}(sQ(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&sJ(a))}return()=>{a.removeEventListener(sY,u),setTimeout(()=>{let t=new CustomEvent(sq,sZ);a.addEventListener(sq,c),a.dispatchEvent(t),t.defaultPrevented||sJ(e??document.body,{select:!0}),a.removeEventListener(sq,c),s0.remove(m)},0)}}},[a,u,c,m]);let g=f.useCallback(e=>{if(!r&&!i||m.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,n=document.activeElement;if(t&&n){let t=e.currentTarget,[i,o]=function(e){let t=sQ(e);return[sG(t,e),sG(t.reverse(),e)]}(t);i&&o?e.shiftKey||n!==o?e.shiftKey&&n===i&&(e.preventDefault(),r&&sJ(o,{select:!0})):(e.preventDefault(),r&&sJ(i,{select:!0})):n===t&&e.preventDefault()}},[r,i,m.paused]);return(0,h.jsx)(Y.div,{tabIndex:-1,...s,ref:p,onKeyDown:g})});function sQ(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function sG(e,t){for(let r of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(r,{upTo:t}))return r}function sJ(e,{select:t=!1}={}){if(e&&e.focus){var r;let i=document.activeElement;e.focus({preventScroll:!0}),e!==i&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}}sX.displayName="FocusScope";var s0=function(){let e=[];return{add(t){let r=e[0];t!==r&&r?.pause(),(e=s1(e,t)).unshift(t)},remove(t){e=s1(e,t),e[0]?.resume()}}}();function s1(e,t){let r=[...e],i=r.indexOf(t);return -1!==i&&r.splice(i,1),r}var s2=0;function s5(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var s8=function(){return(s8=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function s6(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}Object.create,Object.create;var s3=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),s7="width-before-scroll-bar";function s4(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var s9="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,ae=new WeakMap;function at(e){return e}var ar=function(e){void 0===e&&(e={});var t,r,i,n=(void 0===t&&(t=at),r=[],i=!1,{read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var n=t(e,i);return r.push(n),function(){r=r.filter(function(e){return e!==n})}},assignSyncMedium:function(e){for(i=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){i=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var o=function(){var r=t;t=[],r.forEach(e)},s=function(){return Promise.resolve().then(o)};s(),r={push:function(e){t.push(e),s()},filter:function(e){return t=t.filter(e),r}}}});return n.options=s8({async:!0,ssr:!1},e),n}(),ai=function(){},an=f.forwardRef(function(e,t){var r,i,n,o,s=f.useRef(null),a=f.useState({onScrollCapture:ai,onWheelCapture:ai,onTouchMoveCapture:ai}),l=a[0],u=a[1],c=e.forwardProps,d=e.children,h=e.className,p=e.removeScrollBar,m=e.enabled,g=e.shards,v=e.sideCar,y=e.noRelative,w=e.noIsolation,x=e.inert,b=e.allowPinchZoom,E=e.as,C=e.gapMode,P=s6(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=(r=[s,t],i=function(e){return r.forEach(function(t){return s4(t,e)})},(n=(0,f.useState)(function(){return{value:null,callback:i,facade:{get current(){return n.value},set current(value){var e=n.value;e!==value&&(n.value=value,n.callback(value,e))}}}})[0]).callback=i,o=n.facade,s9(function(){var e=ae.get(o);if(e){var t=new Set(e),i=new Set(r),n=o.current;t.forEach(function(e){i.has(e)||s4(e,null)}),i.forEach(function(e){t.has(e)||s4(e,n)})}ae.set(o,r)},[r]),o),k=s8(s8({},P),l);return f.createElement(f.Fragment,null,m&&f.createElement(v,{sideCar:ar,removeScrollBar:p,shards:g,noRelative:y,noIsolation:w,inert:x,setCallbacks:u,allowPinchZoom:!!b,lockRef:s,gapMode:C}),c?f.cloneElement(f.Children.only(d),s8(s8({},k),{ref:T})):f.createElement(void 0===E?"div":E,s8({},k,{className:h,ref:T}),d))});an.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},an.classNames={fullWidth:s7,zeroRight:s3};var ao=function(e){var t=e.sideCar,r=s6(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=t.read();if(!i)throw Error("Sidecar medium not found");return f.createElement(i,s8({},r))};ao.isSideCarExport=!0;var as=function(){var e=0,t=null;return{add:function(i){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=d||r.nc;return t&&e.setAttribute("nonce",t),e}())){var n,o;(n=t).styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},aa=function(){var e=as();return function(t,r){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},al=function(){var e=aa();return function(t){return e(t.styles,t.dynamic),null}},au={left:0,top:0,right:0,gap:0},ac=function(e){return parseInt(e||"",10)||0},ad=function(e){var t=window.getComputedStyle(document.body),r=t["padding"===e?"paddingLeft":"marginLeft"],i=t["padding"===e?"paddingTop":"marginTop"],n=t["padding"===e?"paddingRight":"marginRight"];return[ac(r),ac(i),ac(n)]},ah=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return au;var t=ad(e),r=document.documentElement.clientWidth,i=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,i-r+t[2]-t[0])}},ap=al(),af="data-scroll-locked",am=function(e,t,r,i){var n=e.left,o=e.top,s=e.right,a=e.gap;return void 0===r&&(r="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(i,";\n   padding-right: ").concat(a,"px ").concat(i,";\n  }\n  body[").concat(af,"] {\n    overflow: hidden ").concat(i,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(i,";"),"margin"===r&&"\n    padding-left: ".concat(n,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(s,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(i,";\n    "),"padding"===r&&"padding-right: ".concat(a,"px ").concat(i,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(s3," {\n    right: ").concat(a,"px ").concat(i,";\n  }\n  \n  .").concat(s7," {\n    margin-right: ").concat(a,"px ").concat(i,";\n  }\n  \n  .").concat(s3," .").concat(s3," {\n    right: 0 ").concat(i,";\n  }\n  \n  .").concat(s7," .").concat(s7," {\n    margin-right: 0 ").concat(i,";\n  }\n  \n  body[").concat(af,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},ag=function(){var e=parseInt(document.body.getAttribute(af)||"0",10);return isFinite(e)?e:0},av=function(){f.useEffect(function(){return document.body.setAttribute(af,(ag()+1).toString()),function(){var e=ag()-1;e<=0?document.body.removeAttribute(af):document.body.setAttribute(af,e.toString())}},[])},ay=function(e){var t=e.noRelative,r=e.noImportant,i=e.gapMode,n=void 0===i?"margin":i;av();var o=f.useMemo(function(){return ah(n)},[n]);return f.createElement(ap,{styles:am(o,!t,n,r?"":"!important")})},aw=!1;if("undefined"!=typeof window)try{var ax=Object.defineProperty({},"passive",{get:function(){return aw=!0,!0}});window.addEventListener("test",ax,ax),window.removeEventListener("test",ax,ax)}catch(e){aw=!1}var ab=!!aw&&{passive:!1},aE=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return"hidden"!==r[t]&&!(r.overflowY===r.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===r[t])},aC=function(e,t){var r=t.ownerDocument,i=t;do{if("undefined"!=typeof ShadowRoot&&i instanceof ShadowRoot&&(i=i.host),aP(e,i)){var n=aT(e,i);if(n[1]>n[2])return!0}i=i.parentNode}while(i&&i!==r.body);return!1},aP=function(e,t){return"v"===e?aE(t,"overflowY"):aE(t,"overflowX")},aT=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ak=function(e,t,r,i,n){var o,s=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),a=s*i,l=r.target,u=t.contains(l),c=!1,d=a>0,h=0,p=0;do{if(!l)break;var f=aT(e,l),m=f[0],g=f[1]-f[2]-s*m;(m||g)&&aP(e,l)&&(h+=g,p+=m);var v=l.parentNode;l=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return d&&(n&&1>Math.abs(h)||!n&&a>h)?c=!0:!d&&(n&&1>Math.abs(p)||!n&&-a>p)&&(c=!0),c},aS=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},aA=function(e){return[e.deltaX,e.deltaY]},aj=function(e){return e&&"current"in e?e.current:e},aR=0,aM=[];let aD=(u=function(e){var t=f.useRef([]),r=f.useRef([0,0]),i=f.useRef(),n=f.useState(aR++)[0],o=f.useState(al)[0],s=f.useRef(e);f.useEffect(function(){s.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(n));var t=(function(e,t,r){if(r||2==arguments.length)for(var i,n=0,o=t.length;n<o;n++)!i&&n in t||(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(aj),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(n))}),function(){document.body.classList.remove("block-interactivity-".concat(n)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(n))})}}},[e.inert,e.lockRef.current,e.shards]);var a=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!s.current.allowPinchZoom;var n,o=aS(e),a=r.current,l="deltaX"in e?e.deltaX:a[0]-o[0],u="deltaY"in e?e.deltaY:a[1]-o[1],c=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var h=aC(d,c);if(!h)return!0;if(h?n=d:(n="v"===d?"h":"v",h=aC(d,c)),!h)return!1;if(!i.current&&"changedTouches"in e&&(l||u)&&(i.current=n),!n)return!0;var p=i.current||n;return ak(p,t,e,"h"===p?l:u,!0)},[]),l=f.useCallback(function(e){if(aM.length&&aM[aM.length-1]===o){var r="deltaY"in e?aA(e):aS(e),i=t.current.filter(function(t){var i;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(i=t.delta)[0]===r[0]&&i[1]===r[1]})[0];if(i&&i.should){e.cancelable&&e.preventDefault();return}if(!i){var n=(s.current.shards||[]).map(aj).filter(Boolean).filter(function(t){return t.contains(e.target)});(n.length>0?a(e,n[0]):!s.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=f.useCallback(function(e,r,i,n){var o={name:e,delta:r,target:i,should:n,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(i)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=f.useCallback(function(e){r.current=aS(e),i.current=void 0},[]),d=f.useCallback(function(t){u(t.type,aA(t),t.target,a(t,e.lockRef.current))},[]),h=f.useCallback(function(t){u(t.type,aS(t),t.target,a(t,e.lockRef.current))},[]);f.useEffect(function(){return aM.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",l,ab),document.addEventListener("touchmove",l,ab),document.addEventListener("touchstart",c,ab),function(){aM=aM.filter(function(e){return e!==o}),document.removeEventListener("wheel",l,ab),document.removeEventListener("touchmove",l,ab),document.removeEventListener("touchstart",c,ab)}},[]);var p=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(o,{styles:"\n  .block-interactivity-".concat(n," {pointer-events: none;}\n  .allow-interactivity-").concat(n," {pointer-events: all;}\n")}):null,p?f.createElement(ay,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},ar.useMedium(u),ao);var aN=f.forwardRef(function(e,t){return f.createElement(an,s8({},e,{ref:t,sideCar:aD}))});aN.classNames=an.classNames;var aL=new WeakMap,aI=new WeakMap,aV={},aF=0,aO=function(e){return e&&(e.host||aO(e.parentNode))},aB=function(e,t,r,i){var n=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var r=aO(e);return r&&t.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});aV[r]||(aV[r]=new WeakMap);var o=aV[r],s=[],a=new Set,l=new Set(n),u=function(e){!e||a.has(e)||(a.add(e),u(e.parentNode))};n.forEach(u);var c=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(a.has(e))c(e);else try{var t=e.getAttribute(i),n=null!==t&&"false"!==t,l=(aL.get(e)||0)+1,u=(o.get(e)||0)+1;aL.set(e,l),o.set(e,u),s.push(e),1===l&&n&&aI.set(e,!0),1===u&&e.setAttribute(r,"true"),n||e.setAttribute(i,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return c(t),a.clear(),aF++,function(){s.forEach(function(e){var t=aL.get(e)-1,n=o.get(e)-1;aL.set(e,t),o.set(e,n),t||(aI.has(e)||e.removeAttribute(i),aI.delete(e)),n||e.removeAttribute(r)}),--aF||(aL=new WeakMap,aL=new WeakMap,aI=new WeakMap,aV={})}},aU=function(e,t,r){void 0===r&&(r="data-aria-hidden");var i,n=Array.from(Array.isArray(e)?e:[e]),o=t||(i=e,"undefined"==typeof document?null:(Array.isArray(i)?i[0]:i).ownerDocument.body);return o?(n.push.apply(n,Array.from(o.querySelectorAll("[aria-live], script"))),aB(n,o,r,"aria-hidden")):function(){return null}},a_="Dialog",[az,aW]=W(a_),[aH,a$]=az(a_),aK=e=>{let{__scopeDialog:t,children:r,open:i,defaultOpen:n,onOpenChange:o,modal:s=!0}=e,a=f.useRef(null),l=f.useRef(null),[u,c]=ea({prop:i,defaultProp:n??!1,onChange:o,caller:a_});return(0,h.jsx)(aH,{scope:t,triggerRef:a,contentRef:l,contentId:sK(),titleId:sK(),descriptionId:sK(),open:u,onOpenChange:c,onOpenToggle:f.useCallback(()=>c(e=>!e),[c]),modal:s,children:r})};aK.displayName=a_;var aY="DialogTrigger";f.forwardRef((e,t)=>{let{__scopeDialog:r,...i}=e,n=a$(aY,r),o=z(t,n.triggerRef);return(0,h.jsx)(Y.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":lr(n.open),...i,ref:o,onClick:B(e.onClick,n.onOpenToggle)})}).displayName=aY;var aq="DialogPortal",[aZ,aX]=az(aq,{forceMount:void 0}),aQ=e=>{let{__scopeDialog:t,forceMount:r,children:i,container:n}=e,o=a$(aq,t);return(0,h.jsx)(aZ,{scope:t,forceMount:r,children:f.Children.map(i,e=>(0,h.jsx)(en,{present:r||o.open,children:(0,h.jsx)(ei,{asChild:!0,container:n,children:e})}))})};aQ.displayName=aq;var aG="DialogOverlay",aJ=f.forwardRef((e,t)=>{let r=aX(aG,e.__scopeDialog),{forceMount:i=r.forceMount,...n}=e,o=a$(aG,e.__scopeDialog);return o.modal?(0,h.jsx)(en,{present:i||o.open,children:(0,h.jsx)(a1,{...n,ref:t})}):null});aJ.displayName=aG;var a0=H("DialogOverlay.RemoveScroll"),a1=f.forwardRef((e,t)=>{let{__scopeDialog:r,...i}=e,n=a$(aG,r);return(0,h.jsx)(aN,{as:a0,allowPinchZoom:!0,shards:[n.contentRef],children:(0,h.jsx)(Y.div,{"data-state":lr(n.open),...i,ref:t,style:{pointerEvents:"auto",...i.style}})})}),a2="DialogContent",a5=f.forwardRef((e,t)=>{let r=aX(a2,e.__scopeDialog),{forceMount:i=r.forceMount,...n}=e,o=a$(a2,e.__scopeDialog);return(0,h.jsx)(en,{present:i||o.open,children:o.modal?(0,h.jsx)(a8,{...n,ref:t}):(0,h.jsx)(a6,{...n,ref:t})})});a5.displayName=a2;var a8=f.forwardRef((e,t)=>{let r=a$(a2,e.__scopeDialog),i=f.useRef(null),n=z(t,r.contentRef,i);return f.useEffect(()=>{let e=i.current;if(e)return aU(e)},[]),(0,h.jsx)(a3,{...e,ref:n,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:B(e.onCloseAutoFocus,e=>{e.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:B(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey;(2===t.button||r)&&e.preventDefault()}),onFocusOutside:B(e.onFocusOutside,e=>e.preventDefault())})}),a6=f.forwardRef((e,t)=>{let r=a$(a2,e.__scopeDialog),i=f.useRef(!1),n=f.useRef(!1);return(0,h.jsx)(a3,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(i.current||r.triggerRef.current?.focus(),t.preventDefault()),i.current=!1,n.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(i.current=!0,"pointerdown"!==t.detail.originalEvent.type||(n.current=!0));let o=t.target;r.triggerRef.current?.contains(o)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&n.current&&t.preventDefault()}})}),a3=f.forwardRef((e,t)=>{let{__scopeDialog:r,trapFocus:i,onOpenAutoFocus:n,onCloseAutoFocus:o,...s}=e,a=a$(a2,r),l=f.useRef(null),u=z(t,l);return f.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??s5()),document.body.insertAdjacentElement("beforeend",e[1]??s5()),s2++,()=>{1===s2&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),s2--}},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(sX,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:n,onUnmountAutoFocus:o,children:(0,h.jsx)(G,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":lr(a.open),...s,ref:u,onDismiss:()=>a.onOpenChange(!1)})}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ls,{titleId:a.titleId}),(0,h.jsx)(la,{contentRef:l,descriptionId:a.descriptionId})]})]})}),a7="DialogTitle",a4=f.forwardRef((e,t)=>{let{__scopeDialog:r,...i}=e,n=a$(a7,r);return(0,h.jsx)(Y.h2,{id:n.titleId,...i,ref:t})});a4.displayName=a7;var a9="DialogDescription";f.forwardRef((e,t)=>{let{__scopeDialog:r,...i}=e,n=a$(a9,r);return(0,h.jsx)(Y.p,{id:n.descriptionId,...i,ref:t})}).displayName=a9;var le="DialogClose",lt=f.forwardRef((e,t)=>{let{__scopeDialog:r,...i}=e,n=a$(le,r);return(0,h.jsx)(Y.button,{type:"button",...i,ref:t,onClick:B(e.onClick,()=>n.onOpenChange(!1))})});function lr(e){return e?"open":"closed"}lt.displayName=le;var li="DialogTitleWarning",[ln,lo]=function(e,t){let r=f.createContext(t),i=e=>{let{children:t,...i}=e,n=f.useMemo(()=>i,Object.values(i));return(0,h.jsx)(r.Provider,{value:n,children:t})};return i.displayName=e+"Provider",[i,function(i){let n=f.useContext(r);if(n)return n;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}(li,{contentName:a2,titleName:a7,docsSlug:"dialog"}),ls=({titleId:e})=>{let t=lo(li),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return f.useEffect(()=>{e&&!document.getElementById(e)&&console.error(r)},[r,e]),null},la=({contentRef:e,descriptionId:t})=>{let r=lo("DialogDescriptionWarning"),i=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;return f.useEffect(()=>{let r=e.current?.getAttribute("aria-describedby");t&&r&&!document.getElementById(t)&&console.warn(i)},[i,e,t]),null};r(6441),r(9423);var ll=()=>{let[e,t]=(0,f.useState)("undefined"!=typeof window&&window.matchMedia("(max-width: 1024px)").matches?"mobile":"desktop");return(0,f.useEffect)(()=>{let e=window.matchMedia("(max-width: 1024px)"),r=e=>t(e.matches?"mobile":"desktop");return r(e),e.addEventListener("change",r),()=>{e.removeEventListener("change",r)}},[]),e},lu=`/* Remote TWK Lausanne font definitions */
@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-200.woff2') format('woff2');
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-300.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-350.woff2') format('woff2');
  font-weight: 350;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-450.woff2') format('woff2');
  font-weight: 450;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-500.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-550.woff2') format('woff2');
  font-weight: 550;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'TWK Lausanne';
  src: url('https://world-id-assets.com/fonts/TWKLausanne-600.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

/* ! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: TWK Lausanne, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
  text-align: inherit;
}

::-webkit-datetime-edit {
  display: inline-flex;
}

::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field {
  padding-top: 0;
  padding-bottom: 0;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}

[multiple],[size]:where(select:not([size="1"])) {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {
  [type='checkbox']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

@media (forced-colors: active)  {
  [type='radio']:checked {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media (forced-colors: active)  {
  [type='checkbox']:indeterminate {
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.container {
  width: 100%;
}
@media (min-width: 414px) {
  .container {
    max-width: 414px;
  }
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.visible {
  visibility: visible;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0;
}
.z-50 {
  z-index: 50;
}
.z-\\[9999\\] {
  z-index: 9999;
}
.mx-6 {
  margin-left: 24px;
  margin-right: 24px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.-mt-5 {
  margin-top: -20px;
}
.-mt-6 {
  margin-top: -24px;
}
.mb-10 {
  margin-bottom: 40px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-6 {
  margin-bottom: 24px;
}
.mt-2 {
  margin-top: 8px;
}
.mt-3 {
  margin-top: 12px;
}
.mt-4 {
  margin-top: 16px;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.hidden {
  display: none;
}
.size-14 {
  width: 56px;
  height: 56px;
}
.size-24 {
  width: 96px;
  height: 96px;
}
.size-4 {
  width: 16px;
  height: 16px;
}
.size-5 {
  width: 20px;
  height: 20px;
}
.size-6 {
  width: 24px;
  height: 24px;
}
.size-8 {
  width: 32px;
  height: 32px;
}
.size-\\[200px\\] {
  width: 200px;
  height: 200px;
}
.min-h-full {
  min-height: 100%;
}
.min-h-screen {
  min-height: 100vh;
}
.w-24 {
  width: 96px;
}
.w-full {
  width: 100%;
}
.max-w-\\[224px\\] {
  max-width: 224px;
}
.max-w-\\[260px\\] {
  max-width: 260px;
}
.flex-1 {
  flex: 1 1 0%;
}
@keyframes pulse {
  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-pointer {
  cursor: pointer;
}
.flex-col {
  flex-direction: column;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(8px * var(--tw-space-x-reverse));
  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(16px * var(--tw-space-x-reverse));
  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(40px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(40px * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(20px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(20px * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(32px * var(--tw-space-y-reverse));
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.border {
  border-width: 1px;
}
.border-\\[1\\.2px\\] {
  border-width: 1.2px;
}
.border-t {
  border-top-width: 1px;
}
.border-solid {
  border-style: solid;
}
.border-\\[\\#EBECEF\\] {
  --tw-border-opacity: 1;
  border-color: rgb(235 236 239 / var(--tw-border-opacity));
}
.border-ebecef {
  --tw-border-opacity: 1;
  border-color: rgb(235 236 239 / var(--tw-border-opacity));
}
.border-f1f5f8 {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 248 / var(--tw-border-opacity));
}
.border-f5f5f7 {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 247 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.bg-0d151d {
  --tw-bg-opacity: 1;
  background-color: rgb(13 21 29 / var(--tw-bg-opacity));
}
.bg-black\\/50 {
  background-color: rgb(0 0 0 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-7 {
  padding: 28px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-8 {
  padding-left: 32px;
  padding-right: 32px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.pt-6 {
  padding-top: 24px;
}
.text-center {
  text-align: center;
}
.font-sans {
  font-family: TWK Lausanne, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 24px;
  line-height: 32px;
}
.text-lg {
  font-size: 18px;
  line-height: 28px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.text-0d151d {
  --tw-text-opacity: 1;
  color: rgb(13 21 29 / var(--tw-text-opacity));
}
.text-29343f {
  --tw-text-opacity: 1;
  color: rgb(41 52 63 / var(--tw-text-opacity));
}
.text-3c424b {
  --tw-text-opacity: 1;
  color: rgb(60 66 75 / var(--tw-text-opacity));
}
.text-657080 {
  --tw-text-opacity: 1;
  color: rgb(101 112 128 / var(--tw-text-opacity));
}
.text-70868f {
  --tw-text-opacity: 1;
  color: rgb(112 134 143 / var(--tw-text-opacity));
}
.text-9ba3ae {
  --tw-text-opacity: 1;
  color: rgb(155 163 174 / var(--tw-text-opacity));
}
.text-9eafc0 {
  --tw-text-opacity: 1;
  color: rgb(158 175 192 / var(--tw-text-opacity));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.opacity-40 {
  opacity: 0.4;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.blur-lg {
  --tw-blur: blur(16px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-lg {
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
          appearance: none;
}
.hover\\:underline:hover {
  text-decoration-line: underline;
}
.hover\\:shadow:hover {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}
.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:ring:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:ring-purple-500\\/75:focus-visible {
  --tw-ring-color: rgb(168 85 247 / 0.75);
}
.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:opacity-40:disabled {
  opacity: 0.4;
}
@media (prefers-reduced-motion: reduce) {
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\] {
    animation: spin 1.5s linear infinite;
  }
}
.dark\\:border-f1f5f8\\/10:is(.dark *) {
  border-color: rgb(241 245 248 / 0.1);
}
.dark\\:bg-0d151d:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(13 21 29 / var(--tw-bg-opacity));
}
.dark\\:bg-white:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.dark\\:text-0d151d:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(13 21 29 / var(--tw-text-opacity));
}
.dark\\:text-9eafc0:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(158 175 192 / var(--tw-text-opacity));
}
.dark\\:text-white:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
@media (min-width: 768px) {
  .md\\:mt-2 {
    margin-top: 8px;
  }
  .md\\:block {
    display: block;
  }
  .md\\:hidden {
    display: none;
  }
  .md\\:min-h-\\[35rem\\] {
    min-height: 35rem;
  }
  .md\\:max-w-md {
    max-width: 448px;
  }
  .md\\:items-center {
    align-items: center;
  }
  .md\\:overflow-y-auto {
    overflow-y: auto;
  }
  .md\\:rounded-\\[24px\\] {
    border-radius: 24px;
  }
  .md\\:rounded-b-2xl {
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  .md\\:p-4 {
    padding: 16px;
  }
}
@media (min-width: 1280px) {
  .xl\\:block {
    display: block;
  }
  .xl\\:hidden {
    display: none;
  }
}
`,lc=()=>(0,h.jsx)("style",{children:lu}),ld=({id:e,children:t,mode:r="open",delegatesFocus:i=!1})=>{let[n,o]=(0,f.useState)(null),s=(0,f.useCallback)(e=>{e&&o(e.shadowRoot??e.attachShadow({mode:r,delegatesFocus:i}))},[r,i]);return(0,h.jsx)("div",{ref:s,id:e,children:n&&O.createPortal(t,n)})},lh=e=>(0,h.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:(0,h.jsx)("path",{strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m16.243 7.758-8.485 8.485m8.485 0L7.758 7.758"})}),lp=function(){for(var e,t,r=0,i="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,i,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(i=e(t[r]))&&(n&&(n+=" "),n+=i)}else for(i in t)t[i]&&(n&&(n+=" "),n+=i)}return n}(e))&&(i&&(i+=" "),i+=t);return i},lf=e=>(0,h.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,h.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#9BA3AE"}),(0,h.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3198)"}),(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3198)"}),(0,h.jsx)("path",{d:"M33.0146 53.9853L43.4999 43.5M53.9851 33.0147L43.4999 43.5M43.4999 43.5L33.0146 33.0147M43.4999 43.5L53.9851 53.9853",stroke:"white",strokeWidth:"3"}),(0,h.jsxs)("defs",{children:[(0,h.jsxs)("radialGradient",{id:"paint0_radial_117706_3198",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,h.jsx)("stop",{stopColor:"white"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,h.jsxs)("linearGradient",{id:"paint1_linear_117706_3198",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lm=e=>(0,h.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,h.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#FFAE00"}),(0,h.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3182)"}),(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3182)"}),(0,h.jsx)("path",{d:"M64.1707 59.5415H22.8298L43.4998 22.3354L64.1707 59.5415ZM42.1208 51.3003L42.1218 54.0503H44.8992L44.8982 51.3003H42.1208ZM42.1248 46.7085H44.8748V36.6255H42.1248V46.7085Z",fill:"white"}),(0,h.jsxs)("defs",{children:[(0,h.jsxs)("radialGradient",{id:"paint0_radial_117706_3182",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,h.jsx)("stop",{stopColor:"white"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,h.jsxs)("linearGradient",{id:"paint1_linear_117706_3182",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lg=({retryFlow:e,errorState:t})=>({retryFlow:e,errorState:t}),lv=e=>{switch(e){case E.ov.GenericError:return N("Something went wrong");case E.ov.FailedByHostApp:return N("Verification Declined");case E.ov.VerificationRejected:return N("Request cancelled");default:return N("Something went wrong")}},ly=e=>{switch(e){case E.ov.ConnectionFailed:return N("Connection to your wallet failed. Please try again.");case E.ov.VerificationRejected:return N("You've cancelled the request in World App.");case E.ov.MaxVerificationsReached:return N("You've already verified the maximum number of times for this action.");case E.ov.CredentialUnavailable:return N("It seems you don't have the verification level required by this app.");case E.ov.InvalidNetwork:return N("Invalid network. If you are the app owner, visit docs.world.org/test for details.");case E.ov.InclusionProofPending:return N("Your identity is still being registered. Please wait a few minutes and try again.");case E.ov.GenericError:default:return N("We couldn't complete your request. Please try again.")}},lw=e=>{let{retryFlow:t,errorState:r}=L(lg),{show_modal:i}=e;return(0,f.useEffect)(()=>{r&&console.error("Error state: ",r)},[r]),(0,h.jsxs)("div",{className:"space-y-8",children:[(0,h.jsx)("div",{className:lp("flex items-center justify-center",i?"-mt-5":""),children:r?.code==E.ov.VerificationRejected?(0,h.jsx)(lm,{className:"w-24"}):(0,h.jsx)(lf,{className:"w-24"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-900 dark:text-white",children:r?.code?lv(r.code):lv(E.ov.GenericError)}),(0,h.jsx)("p",{className:"mx-auto mt-2 max-w-[224px] text-center text-657080",children:r?.code?ly(r.code):ly(E.ov.GenericError)})]}),(0,h.jsx)("div",{className:"flex justify-center",children:(0,h.jsx)("button",{type:"button",onClick:t,className:"inline-flex items-center rounded-full border-[1.2px] border-ebecef bg-transparent px-8 py-3 font-semibold text-gray-900 shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",children:N("Try Again")})})]})},lx=e=>(0,h.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,h.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#00C230"}),(0,h.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3174)"}),(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3174)"}),(0,h.jsx)("path",{d:"M29.5 45.5L37.5 53.5L57.5 33.5",stroke:"white",strokeWidth:"3"}),(0,h.jsxs)("defs",{children:[(0,h.jsxs)("radialGradient",{id:"paint0_radial_117706_3174",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,h.jsx)("stop",{stopColor:"white"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,h.jsxs)("linearGradient",{id:"paint1_linear_117706_3174",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lb=e=>(0,h.jsxs)("div",{className:"space-y-6",children:[(0,h.jsx)("div",{className:lp("flex items-center justify-center",e.show_modal?"-mt-5":""),children:(0,h.jsx)(lx,{className:"w-24 text-white"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-900 dark:text-white",children:N("All set!")}),(0,h.jsx)("p",{className:"mx-auto mt-2 max-w-[260px] text-center text-lg text-657080",children:N("Your World ID is now connected")})]})]}),lE=e=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...e,children:(0,h.jsx)("path",{d:"M30.7367 9.77239C29.9301 7.86586 28.7772 6.15721 27.3084 4.68831C25.8397 3.21941 24.1275 2.06636 22.225 1.2596C20.2502 0.422405 18.1574 0 15.9962 0C13.8388 0 11.7422 0.422405 9.76742 1.2596C7.86112 2.06636 6.15268 3.21941 4.68395 4.68831C3.21522 6.15721 2.06231 7.86966 1.25565 9.77239C0.422354 11.7436 0 13.8404 0 15.9981C0 18.1558 0.422354 20.2526 1.25945 22.2276C2.06611 24.1341 3.21903 25.8428 4.68775 27.3117C6.15648 28.7806 7.86873 29.9336 9.77122 30.7404C11.746 31.5738 13.8388 32 16 32C18.1574 32 20.254 31.5776 22.2288 30.7404C24.1351 29.9336 25.8435 28.7806 27.3122 27.3117C28.781 25.8428 29.9339 24.1303 30.7405 22.2276C31.5738 20.2526 32 18.1596 32 15.9981C31.9962 13.8404 31.57 11.7436 30.7367 9.77239ZM10.6844 14.4949C11.3503 11.9377 13.679 10.0464 16.4452 10.0464H27.552C28.2673 11.4278 28.7239 12.9309 28.9027 14.4949H10.6844ZM28.9027 17.5012C28.7239 19.0653 28.2635 20.5684 27.552 21.9498H16.4452C13.6828 21.9498 11.3541 20.0585 10.6844 17.5012H28.9027ZM6.81094 6.81175C9.26516 4.35724 12.526 3.0063 15.9962 3.0063C19.4663 3.0063 22.7272 4.35724 25.1815 6.81175C25.2576 6.88786 25.3298 6.96397 25.4021 7.04008H16.4452C14.0518 7.04008 11.8031 7.97241 10.1099 9.66583C8.77812 10.9977 7.91819 12.6759 7.60999 14.4988H3.09346C3.42449 11.5952 4.71439 8.90855 6.81094 6.81175ZM15.9962 28.9937C12.526 28.9937 9.26516 27.6428 6.81094 25.1883C4.71439 23.0915 3.42449 20.4048 3.09346 17.5051H7.60999C7.91439 19.3279 8.77812 21.0061 10.1099 22.338C11.8031 24.0314 14.0518 24.9637 16.4452 24.9637H25.4059C25.3337 25.0398 25.2576 25.1159 25.1853 25.1921C22.731 27.639 19.4663 28.9937 15.9962 28.9937Z",fill:"currentColor"})}),lC=e=>(0,h.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 200 200",children:[(0,h.jsx)("path",{fill:"#EBECEF",fillRule:"evenodd",d:"M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",clipRule:"evenodd"}),(0,h.jsx)("path",{fill:"#EBECEF",d:"M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"}),(0,h.jsx)("path",{fill:"#EBECEF",fillRule:"evenodd",d:"M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712ZM12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",clipRule:"evenodd"}),(0,h.jsx)("path",{fill:"#EBECEF",d:"M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Zm102.135-40.926a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253ZM67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Zm78.291-120.285a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252ZM95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"}),(0,h.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",clipRule:"evenodd"}),(0,h.jsx)("path",{fill:"url(#a)",d:"M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"}),(0,h.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712Z",clipRule:"evenodd"}),(0,h.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",clipRule:"evenodd"}),(0,h.jsx)("path",{fill:"url(#a)",d:"M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Z"}),(0,h.jsx)("path",{fill:"url(#a)",d:"M108.185 48.754a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253Z"}),(0,h.jsx)("path",{fill:"url(#a)",d:"M67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"}),(0,h.jsx)("path",{fill:"url(#a)",d:"M145.907 64.413a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"}),(0,h.jsx)("path",{fill:"url(#a)",d:"M95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"}),(0,h.jsx)("defs",{children:(0,h.jsxs)("linearGradient",{id:"a",x1:"0",x2:"200",y1:"0",y2:"200",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{offset:".37",stopColor:"#fff",stopOpacity:"0"}),(0,h.jsx)("stop",{offset:".5",stopColor:"#fff",stopOpacity:".85"}),(0,h.jsx)("stop",{offset:".63",stopColor:"#fff",stopOpacity:"0"})]})})]}),lP=({qrData:e,showQR:t,setShowQR:r})=>{ll();let[i,n]=(0,f.useState)(!1),o=(0,f.useCallback)(()=>{eO(e??""),n(!0),setTimeout(()=>n(!1),2e3)},[e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"md:hidden",children:(0,h.jsxs)("a",{href:e??"",className:"flex w-full items-center space-x-2 rounded-2xl border border-transparent p-4 font-medium shadow-sm bg-0d151d text-white dark:bg-white dark:text-0d151d",children:[(0,h.jsx)(lE,{className:"size-5"}),(0,h.jsx)("span",{className:"flex-1 text-center",children:N("Open World App")})]})}),(0,h.jsxs)("div",{className:lp("hidden md:block xl:hidden",{"mb-10 space-y-4":!t}),children:[(0,h.jsxs)("a",{href:e??"",className:lp("flex w-full items-center space-x-2 rounded-2xl border border-transparent p-4 font-medium shadow-sm","bg-0d151d text-white dark:bg-white dark:text-0d151d",{hidden:t}),children:[(0,h.jsx)(lE,{className:"size-5"}),(0,h.jsx)("span",{className:"flex-1 text-center",children:N("Open World App")})]}),(0,h.jsxs)("div",{className:lp("mb-3 space-y-4",{hidden:t}),children:[(0,h.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,h.jsx)("hr",{className:"flex-1"}),(0,h.jsx)("span",{className:"text-xs font-medium text-9ba3ae",children:"or"}),(0,h.jsx)("hr",{className:"flex-1"})]}),(0,h.jsx)(sV.button,{className:"w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",onClick:()=>r(e=>!e),children:N("Display QR Code")})]})]}),t&&(0,h.jsxs)("div",{className:"hidden md:block xl:hidden",children:[(0,h.jsx)("div",{className:"mb-4",children:(0,h.jsx)(sV.button,{className:"w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",onClick:()=>r(!1),children:N("Hide QR Code")})}),(0,h.jsx)("div",{className:"relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-3 dark:border-f1f5f8/10",children:(0,h.jsx)("div",{className:"text-29343f dark:text-white",children:e?(0,h.jsx)("div",{onClick:o,className:"cursor-pointer",children:(0,h.jsx)(F,{data:e,size:200})}):(0,h.jsx)("div",{className:"flex size-[200px] items-center justify-center",children:(0,h.jsx)(lC,{className:"size-[200px] animate-pulse"})})})}),(0,h.jsx)(sW,{children:i&&(0,h.jsx)(sV.div,{className:"text-sm text-9eafc0 text-center",initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,height:0,marginTop:0},visible:{opacity:1,height:"auto",marginTop:8,transition:{duration:.25,opacity:{delay:.05,duration:.2},ease:"easeInOut"}},exit:{opacity:0,height:0,marginTop:0,transition:{duration:.4,delay:.1,opacity:{duration:.25,delay:0},ease:"easeInOut"}}},children:(0,h.jsx)("span",{className:"rounded-lg border border-f1f5f8 px-2 py-1 text-sm",children:N("QR Code copied")})},"copied")})]}),(0,h.jsxs)("div",{className:"hidden xl:block",children:[(0,h.jsx)(sW,{children:i&&(0,h.jsx)(sV.div,{className:"text-sm text-9eafc0",initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,height:0,marginTop:0,y:0},visible:{opacity:1,height:"auto",marginTop:8,y:-20,transition:{duration:.25,opacity:{delay:.05,duration:.2},ease:"easeInOut"}},exit:{opacity:0,height:0,marginTop:0,y:0,transition:{duration:.4,delay:.1,opacity:{duration:.25,delay:0},ease:"easeInOut"}}},children:(0,h.jsx)("span",{className:"rounded-lg border border-f1f5f8 px-2 py-1 text-sm",children:N("QR Code copied")})},"copied")}),(0,h.jsx)("div",{className:"relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-3 dark:border-f1f5f8/10",children:(0,h.jsx)("div",{className:"text-29343f dark:text-white",children:e?(0,h.jsx)("div",{onClick:o,className:"cursor-pointer",children:(0,h.jsx)(F,{data:e,size:200})}):(0,h.jsx)("div",{className:"flex size-[200px] items-center justify-center",children:(0,h.jsx)(lC,{className:"size-[200px] animate-pulse"})})})})]})]})},lT=(e,t,r,i,n,o,s)=>{let a=(0,f.useRef)(n),{reset:l,result:u,connectorURI:c,createClient:d,pollForUpdates:h,verificationState:p,errorCode:m}=(0,E.MZ)();return(0,f.useEffect)(()=>{c||d({app_id:e,action:t,signal:r,bridge_url:i,action_description:o,verification_level:a.current,partner:s})},[e,t,r,o,d,a,i,c,s]),(0,f.useEffect)(()=>{if(!c||u||m)return;let e=setInterval(()=>void h(),3e3);return()=>clearInterval(e)},[c,h,m,u]),{connectorURI:c,reset:l,result:u,verificationState:p,errorCode:m}},lk=({className:e,...t})=>(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:`animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] ${e}`,...t,children:[(0,h.jsx)("circle",{cx:"12",cy:"12",r:"10.75",stroke:"#191C20",strokeOpacity:".16",strokeWidth:"2.5"}),(0,h.jsx)("path",{fill:"#191C20",d:"M17.28 2.633c.338-.6.127-1.368-.505-1.642A12 12 0 0 0 7.459.892c-.638.261-.864 1.024-.539 1.632.326.607 1.08.827 1.725.584a9.504 9.504 0 0 1 6.897.073c.64.257 1.399.053 1.737-.548Z"})]}),lS=e=>({signal:e.signal,app_id:e.app_id,action:e.action,setStage:e.setStage,bridge_url:e.bridge_url,handleVerify:e.handleVerify,setErrorState:e.setErrorState,verification_level:e.verification_level,action_description:e.action_description,partner:e.partner}),lA=e=>{let t=ll(),[r,i]=(0,f.useState)(!1),{app_id:n,action:o,signal:s,setStage:a,handleVerify:l,bridge_url:u,action_description:c,verification_level:d,setErrorState:m,partner:g}=L(lS,p),{connectorURI:v,reset:y,errorCode:w,result:x,verificationState:b}=lT(n,o,s,u,d,c,g);(0,f.useEffect)(()=>y,[y]),(0,f.useEffect)(()=>{if(b===E.xr.Failed&&(a("ERROR"),m({code:w??E.ov.GenericError})),x){if(d===E.fZ.Orb&&x.verification_level===E.fZ.Device){console.error("Credential type received from wallet does not match configured credential_types."),a("ERROR"),m({code:E.ov.CredentialUnavailable});return}return l(x)}},[x,l,b,a,w,m,d]);let{show_modal:C}=e;return(0,h.jsxs)("div",{className:lp("flex flex-col items-center text-center",C?r?"-mt-6 space-y-5 ":"-mt-6 space-y-10 ":""),children:[(0,h.jsxs)("div",{className:lp(C?"":"hidden"),children:[(0,h.jsx)("div",{className:"mb-4 flex items-center justify-center",children:(0,h.jsx)("div",{className:"flex size-14 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF]",children:(0,h.jsx)(lE,{className:"size-8 text-0d151d dark:text-white"})})}),(0,h.jsx)("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:N("Connect your World ID")}),(0,h.jsx)("p",{className:lp("mt-3 text-657080 dark:text-9eafc0 md:mt-2",{hidden:"mobile"===t}),children:N("Use phone camera to scan the QR code")}),(0,h.jsx)("p",{className:lp("mt-3 text-657080 dark:text-9eafc0 md:mt-2",{hidden:"mobile"!==t}),children:N("You will be redirected to the app, please return to this page once you're done")})]}),(0,h.jsxs)("div",{className:"relative w-full",children:[b===E.xr.WaitingForApp&&(0,h.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center space-y-6",children:[(0,h.jsx)(lk,{className:"size-6"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{className:"font-medium text-657080",children:N("Connecting...")}),(0,h.jsx)("p",{className:"text-sm font-light text-657080",children:N("Please continue in app")})]})]}),(0,h.jsx)("div",{className:lp("transition duration-500 ease-in-out",b===E.xr.WaitingForApp&&"opacity-40 blur-lg"),children:(0,h.jsx)("div",{className:"mx-auto",children:(0,h.jsx)(lP,{showQR:r,setShowQR:i,qrData:v})})})]})]})},lj=()=>(0,h.jsxs)("div",{className:"space-y-6",children:[(0,h.jsx)("div",{className:"flex justify-center",children:(0,h.jsx)(lk,{className:"size-24"})}),(0,h.jsx)("div",{className:"mt-4 text-70868f",children:N("Transmitting verification to host app. Please wait...")})]}),lR=({open:e,processing:t,onOpenChange:r,stage:i,setStage:n,setOptions:o,setErrorState:s})=>({stage:i,setStage:n,processing:t,setOptions:o,setErrorState:s,isOpen:e,onOpenChange:r}),lM=(0,f.memo)(({children:e,show_modal:t=!0,container_id:r,disable_default_modal_behavior:i=!1,language:n,...o})=>{let s=ll(),{isOpen:a,onOpenChange:l,stage:u,setStage:c,setOptions:d,setErrorState:m}=L(lR,p);(0,f.useEffect)(()=>{n&&k({language:n})},[n]),(0,f.useEffect)(()=>{if(""===o.action)throw Error(N("Action cannot be an empty string."));d(o,"props")},[o,d]);let g=(0,f.useMemo)(()=>{switch(u){case"WORLD_ID":return(0,h.jsx)(lA,{show_modal:t});case"SUCCESS":return(0,h.jsx)(lb,{});case"ERROR":return(0,h.jsx)(lw,{});case"HOST_APP_VERIFICATION":return(0,h.jsx)(lj,{});default:throw Error(N("Invalid IDKitStage :stage.",{s:String(u)}))}},[u,t]),v=(0,h.jsxs)(ld,{mode:"open",id:"idkit-widget",children:[(0,h.jsx)(lc,{}),(0,h.jsxs)(ey,{children:[(0,h.jsx)(eC,{className:"flex justify-center"}),(0,h.jsx)("div",{id:"widget-content-inline",className:"relative flex flex-col bg-white p-4 focus:outline-none dark:bg-0d151d",children:g})]})]});if(!t&&r){let e=document.getElementById(r);if(e)return(0,O.createPortal)(v,e);console.warn(`Container element with id "${r}" not found. Rendering widget inline.`)}let y=e=>{i&&e.preventDefault()};return(0,h.jsxs)(aK,{open:a,onOpenChange:l,children:[e?.({open:()=>l(!0)}),(0,h.jsx)(aQ,{forceMount:!0,children:(0,h.jsx)(f.Fragment,{children:(0,h.jsx)(sW,{children:a&&(0,h.jsxs)(ld,{mode:"open",id:"idkit-widget",children:[(0,h.jsx)(lc,{}),(0,h.jsxs)("div",{id:"modal",className:"fixed z-[9999] font-sans",children:[(0,h.jsx)(aJ,{asChild:!0,children:(0,h.jsx)(sV.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-lg"})}),(0,h.jsx)("div",{className:"fixed inset-0 z-[9999] overflow-y-hidden md:overflow-y-auto",children:(0,h.jsxs)("div",{className:"flex min-h-full items-end justify-center text-center md:items-center md:p-4",children:[(0,h.jsx)(a4,{}),(0,h.jsx)(a5,{asChild:!0,onPointerDownOutside:y,onInteractOutside:y,children:(0,h.jsx)(sV.div,{layout:"mobile"!=s||"position",exit:"mobile"==s?"initMob":"init",initial:"mobile"==s?"initMob":"init",animate:"mobile"==s?"animateMob":"animate",variants:{init:{opacity:0,scale:.9},initMob:{translateY:"100%"},animate:{opacity:1,scale:1},animateMob:{translateY:0}},transition:{layout:{duration:.15}},className:"relative z-50 flex min-h-screen w-full flex-col bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 dark:bg-0d151d md:min-h-[35rem] md:max-w-md md:rounded-[24px]",children:(0,h.jsxs)(ey,{children:[(0,h.jsx)(eC,{className:"flex justify-center"}),(0,h.jsx)("div",{className:"mx-6 flex items-center justify-end",children:(0,h.jsx)(lt,{className:"flex size-8 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF] text-black dark:text-white",children:(0,h.jsx)(lh,{className:"size-4"})})}),(0,h.jsx)("div",{className:"relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center",children:g}),(0,h.jsx)("div",{className:"flex items-center justify-center border-t border-f5f5f7 p-7 md:rounded-b-2xl",children:(0,h.jsx)("a",{href:"https://developer.worldcoin.org/privacy-statement",target:"_blank",rel:"noreferrer",className:"text-sm text-657080 hover:underline",children:N("Terms & Privacy")})})]})})})]})})]})]})})})})]})});E.xr.Confirmed,E.xr.Failed;let lD=process.env.NEXT_PUBLIC_WORLD_ID_ACTION;function lN(){return(0,h.jsxs)("main",{className:"p-6",children:[h.jsx("h1",{className:"mb-4 text-xl font-bold",children:"World ID Test"}),h.jsx(lM,{app_id:"app_staging_3bdb0aa7e9043558d3111af17547b34a",action:lD,signal:"0x123",onSuccess:e=>{console.log("✅ Proof:",e),alert("Proof captured. You can now call claimVerified on-chain.")},onError:e=>{console.error("World ID error:",e),alert("World ID error: "+("string"==typeof e?e:e?.message??"unknown"))},children:({open:e})=>h.jsx("button",{onClick:e,className:"px-4 py-2 rounded-xl bg-black text-white",children:"Open IDKit"})})]})}},2986:(e,t,r)=>{"use strict";var i=r(4509),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,s,a,l,u,c,d,h=!1;t||(t={}),s=t.debug||!1;try{if(l=i(),u=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=n[t.format]||n.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(d),u.selectNodeContents(d),c.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");h=!0}catch(i){s&&console.error("unable to copy using execCommand: ",i),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),h=!0}catch(i){s&&console.error("unable to copy using clipboardData: ",i),s&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",a=r.replace(/#{\s*key\s*}/g,o),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(u):c.removeAllRanges()),d&&document.body.removeChild(d),l()}return h}},8942:e=>{"use strict";var t={single_source_shortest_paths:function(e,r,i){var n,o,s,a,l,u,c,d={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(s in o=(n=p.pop()).value,a=n.cost,l=e[o]||{})l.hasOwnProperty(s)&&(u=a+l[s],c=h[s],(void 0===h[s]||c>u)&&(h[s]=u,p.push(s,u),d[s]=o));if(void 0!==i&&void 0===h[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],i=t;i;)r.push(i),e[i],i=e[i];return r.reverse(),r},find_path:function(e,r,i){var n=t.single_source_shortest_paths(e,r,i);return t.extract_shortest_path_from_predecessor_list(n,i)},PriorityQueue:{make:function(e){var r,i=t.PriorityQueue,n={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(n[r]=i[r]);return n.queue=[],n.sorter=e.sorter||i.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},1600:(e,t,r)=>{let i=r(5907).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=i(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-n;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],i=t.getRowColCoords(e),n=i.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([i[e],i[t]]);return r}},190:(e,t,r)=>{let i=r(4340),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=i.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=o},1701:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},8120:e=>{function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,i){let n=e*this.size+t;this.data[n]=r,i&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},3865:(e,t,r)=>{let i=r(4340);function n(e){this.mode=i.BYTE,"string"==typeof e?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}n.getBitsLength=function(e){return 8*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=n},7320:(e,t,r)=>{let i=r(6753),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case i.L:return n[(e-1)*4+0];case i.M:return n[(e-1)*4+1];case i.Q:return n[(e-1)*4+2];case i.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case i.L:return o[(e-1)*4+0];case i.M:return o[(e-1)*4+1];case i.Q:return o[(e-1)*4+2];case i.H:return o[(e-1)*4+3];default:return}}},6753:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},1350:(e,t,r)=>{let i=r(5907).getSymbolSize;t.getPositions=function(e){let t=i(e);return[[0,0],[t-7,0],[0,t-7]]}},4572:(e,t,r)=>{let i=r(5907),n=i.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;i.getBCHDigit(o)-n>=0;)o^=1335<<i.getBCHDigit(o)-n;return(r<<10|o)^21522}},6101:(e,t)=>{let r=new Uint8Array(512),i=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)r[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]})(),t.log=function(e){if(e<1)throw Error("log("+e+")");return i[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[i[e]+i[t]]}},1729:(e,t,r)=>{let i=r(4340),n=r(5907);function o(e){this.mode=i.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},299:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,i=0,n=0,o=0,s=null,a=null;for(let l=0;l<t;l++){n=o=0,s=a=null;for(let u=0;u<t;u++){let t=e.get(l,u);t===s?n++:(n>=5&&(i+=r.N1+(n-5)),s=t,n=1),(t=e.get(u,l))===a?o++:(o>=5&&(i+=r.N1+(o-5)),a=t,o=1)}n>=5&&(i+=r.N1+(n-5)),o>=5&&(i+=r.N1+(o-5))}return i},t.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let n=0;n<t-1;n++){let t=e.get(r,n)+e.get(r,n+1)+e.get(r+1,n)+e.get(r+1,n+1);(4===t||0===t)&&i++}return i*r.N2},t.getPenaltyN3=function(e){let t=e.size,i=0,n=0,o=0;for(let r=0;r<t;r++){n=o=0;for(let s=0;s<t;s++)n=n<<1&2047|e.get(r,s),s>=10&&(1488===n||93===n)&&i++,o=o<<1&2047|e.get(s,r),s>=10&&(1488===o||93===o)&&i++}return i*r.N3},t.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/i/5)-10)*r.N4},t.applyMask=function(e,r){let i=r.size;for(let n=0;n<i;n++)for(let o=0;o<i;o++)r.isReserved(o,n)||r.xor(o,n,function(e,r,i){switch(e){case t.Patterns.PATTERN000:return(r+i)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return i%3==0;case t.Patterns.PATTERN011:return(r+i)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(i/3))%2==0;case t.Patterns.PATTERN101:return r*i%2+r*i%3==0;case t.Patterns.PATTERN110:return(r*i%2+r*i%3)%2==0;case t.Patterns.PATTERN111:return(r*i%3+(r+i)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,n))},t.getBestMask=function(e,r){let i=Object.keys(t.Patterns).length,n=0,o=1/0;for(let s=0;s<i;s++){r(s),t.applyMask(s,e);let i=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),i<o&&(o=i,n=s)}return n}},4340:(e,t,r)=>{let i=r(7132),n=r(877);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!i.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},3452:(e,t,r)=>{let i=r(4340);function n(e){this.mode=i.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let i=this.data.length-t;i>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*i+1))},e.exports=n},9836:(e,t,r)=>{let i=r(6101);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let o=0;o<t.length;o++)r[n+o]^=i.mul(e[n],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=i.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,i.exp(n)]));return r}},3389:(e,t,r)=>{let i=r(5907),n=r(6753),o=r(1701),s=r(8120),a=r(1600),l=r(1350),u=r(299),c=r(7320),d=r(2949),h=r(2048),p=r(4572),f=r(4340),m=r(9678);function g(e,t,r){let i,n;let o=e.size,s=p.getEncodedBits(t,r);for(i=0;i<15;i++)n=(s>>i&1)==1,i<6?e.set(i,8,n,!0):i<8?e.set(i+1,8,n,!0):e.set(o-15+i,8,n,!0),i<8?e.set(8,o-i-1,n,!0):i<9?e.set(8,15-i-1+1,n,!0):e.set(8,15-i-1,n,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let v=n.M;return void 0!==t&&(v=n.from(t.errorCorrectionLevel,n.M),r=h.from(t.version),p=u.from(t.maskPattern),t.toSJISFunc&&i.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let p;if(Array.isArray(e))p=m.fromArray(e);else if("string"==typeof e){let i=t;if(!i){let t=m.rawSplit(e);i=h.getBestVersionForData(t,r)}p=m.fromString(e,i||40)}else throw Error("Invalid data");let v=h.getBestVersionForData(p,r);if(!v)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<v)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+v+".\n")}else t=v;let y=function(e,t,r){let n=new o;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(n)});let s=(i.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let a=(s-n.getLengthInBits())/8;for(let e=0;e<a;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,o;let s=i.getSymbolTotalCodewords(t),a=s-c.getTotalCodewordsCount(t,r),l=c.getBlocksCount(t,r),u=s%l,h=l-u,p=Math.floor(s/l),f=Math.floor(a/l),m=f+1,g=p-f,v=new d(g),y=0,w=Array(l),x=Array(l),b=0,E=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:m;w[e]=E.slice(y,y+t),x[e]=v.encode(w[e]),y+=t,b=Math.max(b,t)}let C=new Uint8Array(s),P=0;for(n=0;n<b;n++)for(o=0;o<l;o++)n<w[o].length&&(C[P++]=w[o][n]);for(n=0;n<g;n++)for(o=0;o<l;o++)C[P++]=x[o][n];return C}(n,e,t)}(t,r,p),w=new s(i.getSymbolSize(t));return function(e,t){let r=e.size,i=l.getPositions(t);for(let t=0;t<i.length;t++){let n=i[t][0],o=i[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let i=-1;i<=7;i++)o+i<=-1||r<=o+i||(t>=0&&t<=6&&(0===i||6===i)||i>=0&&i<=6&&(0===t||6===t)||t>=2&&t<=4&&i>=2&&i<=4?e.set(n+t,o+i,!0,!0):e.set(n+t,o+i,!1,!0))}}(w,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(w),function(e,t){let r=a.getPositions(t);for(let t=0;t<r.length;t++){let i=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(i+t,n+r,!0,!0):e.set(i+t,n+r,!1,!0)}}(w,t),g(w,r,0),t>=7&&function(e,t){let r,i,n;let o=e.size,s=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),i=t%3+o-8-3,n=(s>>t&1)==1,e.set(r,i,n,!0),e.set(i,r,n,!0)}(w,t),function(e,t){let r=e.size,i=-1,n=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(6===a&&a--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,a-r)){let i=!1;s<t.length&&(i=(t[s]>>>o&1)==1),e.set(n,a-r,i),-1==--o&&(s++,o=7)}if((n+=i)<0||r<=n){n-=i,i=-i;break}}}(w,y),isNaN(n)&&(n=u.getBestMask(w,g.bind(null,w,r))),u.applyMask(n,w),g(w,r,n),{modules:w,version:t,errorCorrectionLevel:r,maskPattern:n,segments:p}}(e,r,v,p)}},2949:(e,t,r)=>{let i=r(9836);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=i.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},877:(e,t)=>{let r="[0-9]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(i=i.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(i,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+i+"$"),s=RegExp("^"+r+"$"),a=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return a.test(e)}},9678:(e,t,r)=>{let i=r(4340),n=r(3452),o=r(190),s=r(3865),a=r(1729),l=r(877),u=r(5907),c=r(8942);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let i;let n=[];for(;null!==(i=e.exec(r));)n.push({data:i[0],index:i.index,mode:t,length:i[0].length});return n}function p(e){let t,r;let n=h(l.NUMERIC,i.NUMERIC,e),o=h(l.ALPHANUMERIC,i.ALPHANUMERIC,e);return u.isKanjiModeEnabled()?(t=h(l.BYTE,i.BYTE,e),r=h(l.KANJI,i.KANJI,e)):(t=h(l.BYTE_KANJI,i.BYTE,e),r=[]),n.concat(o,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case i.NUMERIC:return n.getBitsLength(e);case i.ALPHANUMERIC:return o.getBitsLength(e);case i.KANJI:return a.getBitsLength(e);case i.BYTE:return s.getBitsLength(e)}}function m(e,t){let r;let l=i.getBestModeForData(e);if((r=i.from(t,l))!==i.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+i.toString(r)+".\n Suggested mode is: "+i.toString(l));switch(r!==i.KANJI||u.isKanjiModeEnabled()||(r=i.BYTE),r){case i.NUMERIC:return new n(e);case i.ALPHANUMERIC:return new o(e);case i.KANJI:return new a(e);case i.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},o=["start"];for(let s=0;s<e.length;s++){let a=e[s],l=[];for(let e=0;e<a.length;e++){let u=a[e],c=""+s+e;l.push(c),r[c]={node:u,lastCount:0},n[c]={};for(let e=0;e<o.length;e++){let s=o[e];r[s]&&r[s].node.mode===u.mode?(n[s][c]=f(r[s].lastCount+u.length,u.mode)-f(r[s].lastCount,u.mode),r[s].lastCount+=u.length):(r[s]&&(r[s].lastCount=u.length),n[s][c]=f(u.length,u.mode)+4+i.getCharCountIndicator(u.mode,t))}}o=l}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case i.NUMERIC:t.push([n,{data:n.data,mode:i.ALPHANUMERIC,length:n.length},{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.ALPHANUMERIC:t.push([n,{data:n.data,mode:i.BYTE,length:n.length}]);break;case i.KANJI:t.push([n,{data:n.data,mode:i.BYTE,length:d(n.data)}]);break;case i.BYTE:t.push([{data:n.data,mode:i.BYTE,length:d(n.data)}])}}return t}(p(e,u.isKanjiModeEnabled())),r),o=c.find_path(n.map,"start","end"),s=[];for(let e=1;e<o.length-1;e++)s.push(n.table[o[e]].node);return t.fromArray(s.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,u.isKanjiModeEnabled()))}},5907:(e,t)=>{let r;let i=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return i[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},7132:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},2048:(e,t,r)=>{let i=r(5907),n=r(7320),o=r(6753),s=r(4340),a=r(7132),l=i.getBCHDigit(7973);function u(e,t){return s.getCharCountIndicator(e,t)+4}t.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!a.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=s.BYTE);let o=(i.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===s.MIXED)return o;let l=o-u(r,e);switch(r){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let i;let n=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let i=1;i<=40;i++)if(function(e,t){let r=0;return e.forEach(function(e){let i=u(e.mode,t);r+=i+e.getBitsLength()}),r}(e,i)<=t.getCapacity(i,r,s.MIXED))return i}(e,n);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,i){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,i,e))return n}(i.mode,i.getLength(),n)},t.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;i.getBCHDigit(t)-l>=0;)t^=7973<<i.getBCHDigit(t)-l;return e<<12|t}},4509:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],i=0;i<e.rangeCount;i++)r.push(e.getRangeAt(i));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},7130:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(3524);r(9235);var n=r(7041);let o=(0,n.createProxy)(String.raw`/Users/mehmetaliozmen/dailytoken/frontend/app/providers.tsx#default`),s=(0,n.createProxy)(String.raw`/Users/mehmetaliozmen/dailytoken/frontend/app/minikit-provider.tsx#default`);function a({children:e}){return i.jsx("html",{lang:"en",children:i.jsx("body",{children:i.jsx(o,{children:i.jsx(s,{children:e})})})})}},8839:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(7041).createProxy)(String.raw`/Users/mehmetaliozmen/dailytoken/frontend/app/test/page.tsx#default`)},9235:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[755,264],()=>r(7431));module.exports=i})();