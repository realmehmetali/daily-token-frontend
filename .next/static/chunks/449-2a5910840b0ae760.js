(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{5382:function(e,t,r){"use strict";var n=r(7977),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,s,a,l,u,c,d,h=!1;t||(t={}),s=t.debug||!1;try{if(l=n(),u=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",function(r){if(r.stopPropagation(),t.format){if(r.preventDefault(),void 0===r.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=i[t.format]||i.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)}t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(d),u.selectNodeContents(d),c.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");h=!0}catch(n){s&&console.error("unable to copy using execCommand: ",n),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),h=!0}catch(n){s&&console.error("unable to copy using clipboardData: ",n),s&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",o=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",a=r.replace(/#{\s*key\s*}/g,o),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(u):c.removeAllRanges()),d&&document.body.removeChild(d),l()}return h}},3547:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var i,o,s,a,l,u,c,d={},h={};h[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(s in o=(i=p.pop()).value,a=i.cost,l=e[o]||{})l.hasOwnProperty(s)&&(u=a+l[s],c=h[s],(void 0===h[s]||c>u)&&(h[s]=u,p.push(s,u),d[s]=o));if(void 0!==n&&void 0===h[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},967:function(e,t,r){let n=r(2763).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),o=[r-7];for(let e=1;e<t-1;e++)o[e]=o[e-1]-i;return o.push(6),o.reverse()},t.getPositions=function(e){let r=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&r.push([n[e],n[t]]);return r}},4356:function(e,t,r){let n=r(2873),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(e){this.mode=n.ALPHANUMERIC,this.data=e}o.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=o},1212:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},8823:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){let i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},9533:function(e,t,r){let n=r(2873);function i(e){this.mode=n.BYTE,"string"==typeof e?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}i.getBitsLength=function(e){return 8*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=i},3621:function(e,t,r){let n=r(1574),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return o[(e-1)*4+0];case n.M:return o[(e-1)*4+1];case n.Q:return o[(e-1)*4+2];case n.H:return o[(e-1)*4+3];default:return}}},1574:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},1968:function(e,t,r){let n=r(2763).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},3102:function(e,t,r){let n=r(2763),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,o=r<<10;for(;n.getBCHDigit(o)-i>=0;)o^=1335<<n.getBCHDigit(o)-i;return(r<<10|o)^21522}},4884:function(e,t){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},9638:function(e,t,r){let n=r(2873),i=r(2763);function o(e){this.mode=n.KANJI,this.data=e}o.getBitsLength=function(e){return 13*e},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=o},417:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,i=0,o=0,s=null,a=null;for(let l=0;l<t;l++){i=o=0,s=a=null;for(let u=0;u<t;u++){let t=e.get(l,u);t===s?i++:(i>=5&&(n+=r.N1+(i-5)),s=t,i=1),(t=e.get(u,l))===a?o++:(o>=5&&(n+=r.N1+(o-5)),a=t,o=1)}i>=5&&(n+=r.N1+(i-5)),o>=5&&(n+=r.N1+(o-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,i=0,o=0;for(let r=0;r<t;r++){i=o=0;for(let s=0;s<t;s++)i=i<<1&2047|e.get(r,s),s>=10&&(1488===i||93===i)&&n++,o=o<<1&2047|e.get(s,r),s>=10&&(1488===o||93===o)&&n++}return n*r.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];return Math.abs(Math.ceil(100*t/n/5)-10)*r.N4},t.applyMask=function(e,r){let n=r.size;for(let i=0;i<n;i++)for(let o=0;o<n;o++)r.isReserved(o,i)||r.xor(o,i,function(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,o,i))},t.getBestMask=function(e,r){let n=Object.keys(t.Patterns).length,i=0,o=1/0;for(let s=0;s<n;s++){r(s),t.applyMask(s,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(s,e),n<o&&(o=n,i=s)}return i}},2873:function(e,t,r){let n=r(458),i=r(5368);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},8580:function(e,t,r){let n=r(2873);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let n=this.data.length-t;n>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*n+1))},e.exports=i},4306:function(e,t,r){let n=r(4884);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let o=0;o<t.length;o++)r[i+o]^=n.mul(e[i],t[o]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let i=0;i<t.length;i++)r[i]^=n.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},3463:function(e,t,r){let n=r(2763),i=r(1574),o=r(1212),s=r(8823),a=r(967),l=r(1968),u=r(417),c=r(3621),d=r(5770),h=r(8299),p=r(3102),f=r(2873),m=r(762);function g(e,t,r){let n,i;let o=e.size,s=p.getEncodedBits(t,r);for(n=0;n<15;n++)i=(s>>n&1)==1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(o-15+n,8,i,!0),n<8?e.set(8,o-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(o-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let v=i.M;return void 0!==t&&(v=i.from(t.errorCorrectionLevel,i.M),r=h.from(t.version),p=u.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,r,i){let p;if(Array.isArray(e))p=m.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=m.rawSplit(e);n=h.getBestVersionForData(t,r)}p=m.fromString(e,n||40)}else throw Error("Invalid data");let v=h.getBestVersionForData(p,r);if(!v)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<v)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+v+".\n")}else t=v;let y=function(e,t,r){let i=new o;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(i)});let s=(n.getSymbolTotalCodewords(e)-c.getTotalCodewordsCount(e,t))*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let a=(s-i.getLengthInBits())/8;for(let e=0;e<a;e++)i.put(e%2?17:236,8);return function(e,t,r){let i,o;let s=n.getSymbolTotalCodewords(t),a=s-c.getTotalCodewordsCount(t,r),l=c.getBlocksCount(t,r),u=s%l,h=l-u,p=Math.floor(s/l),f=Math.floor(a/l),m=f+1,g=p-f,v=new d(g),y=0,w=Array(l),x=Array(l),b=0,E=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:m;w[e]=E.slice(y,y+t),x[e]=v.encode(w[e]),y+=t,b=Math.max(b,t)}let C=new Uint8Array(s),T=0;for(i=0;i<b;i++)for(o=0;o<l;o++)i<w[o].length&&(C[T++]=w[o][i]);for(i=0;i<g;i++)for(o=0;o<l;o++)C[T++]=x[o][i];return C}(i,e,t)}(t,r,p),w=new s(n.getSymbolSize(t));return function(e,t){let r=e.size,n=l.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],o=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(r<=i+t))for(let n=-1;n<=7;n++)o+n<=-1||r<=o+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,o+n,!0,!0):e.set(i+t,o+n,!1,!0))}}(w,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(w),function(e,t){let r=a.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(w,t),g(w,r,0),t>=7&&function(e,t){let r,n,i;let o=e.size,s=h.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+o-8-3,i=(s>>t&1)==1,e.set(r,n,i,!0),e.set(n,r,i,!0)}(w,t),function(e,t){let r=e.size,n=-1,i=r-1,o=7,s=0;for(let a=r-1;a>0;a-=2)for(6===a&&a--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,a-r)){let n=!1;s<t.length&&(n=(t[s]>>>o&1)==1),e.set(i,a-r,n),-1==--o&&(s++,o=7)}if((i+=n)<0||r<=i){i-=n,n=-n;break}}}(w,y),isNaN(i)&&(i=u.getBestMask(w,g.bind(null,w,r))),u.applyMask(i,w),g(w,r,i),{modules:w,version:t,errorCorrectionLevel:r,maskPattern:i,segments:p}}(e,r,v,p)}},5770:function(e,t,r){let n=r(4306);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},5368:function(e,t){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",i="(?:(?![A-Z0-9 $%*+\\-./:]|"+(n=n.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let o=RegExp("^"+n+"$"),s=RegExp("^"+r+"$"),a=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return s.test(e)},t.testAlphanumeric=function(e){return a.test(e)}},762:function(e,t,r){let n=r(2873),i=r(8580),o=r(4356),s=r(9533),a=r(9638),l=r(5368),u=r(2763),c=r(3547);function d(e){return unescape(encodeURIComponent(e)).length}function h(e,t,r){let n;let i=[];for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function p(e){let t,r;let i=h(l.NUMERIC,n.NUMERIC,e),o=h(l.ALPHANUMERIC,n.ALPHANUMERIC,e);return u.isKanjiModeEnabled()?(t=h(l.BYTE,n.BYTE,e),r=h(l.KANJI,n.KANJI,e)):(t=h(l.BYTE_KANJI,n.BYTE,e),r=[]),i.concat(o,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return o.getBitsLength(e);case n.KANJI:return a.getBitsLength(e);case n.BYTE:return s.getBitsLength(e)}}function m(e,t){let r;let l=n.getBestModeForData(e);if((r=n.from(t,l))!==n.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(l));switch(r!==n.KANJI||u.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new o(e);case n.KANJI:return new a(e);case n.BYTE:return new s(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e},[])},t.fromString=function(e,r){let i=function(e,t){let r={},i={start:{}},o=["start"];for(let s=0;s<e.length;s++){let a=e[s],l=[];for(let e=0;e<a.length;e++){let u=a[e],c=""+s+e;l.push(c),r[c]={node:u,lastCount:0},i[c]={};for(let e=0;e<o.length;e++){let s=o[e];r[s]&&r[s].node.mode===u.mode?(i[s][c]=f(r[s].lastCount+u.length,u.mode)-f(r[s].lastCount,u.mode),r[s].lastCount+=u.length):(r[s]&&(r[s].lastCount=u.length),i[s][c]=f(u.length,u.mode)+4+n.getCharCountIndicator(u.mode,t))}}o=l}for(let e=0;e<o.length;e++)i[o[e]].end=0;return{map:i,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:d(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:d(i.data)}])}}return t}(p(e,u.isKanjiModeEnabled())),r),o=c.find_path(i.map,"start","end"),s=[];for(let e=1;e<o.length-1;e++)s.push(i.table[o[e]].node);return t.fromArray(s.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(p(e,u.isKanjiModeEnabled()))}},2763:function(e,t){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},458:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},8299:function(e,t,r){let n=r(2763),i=r(3621),o=r(1574),s=r(2873),a=r(458),l=n.getBCHDigit(7973);function u(e,t){return s.getCharCountIndicator(e,t)+4}t.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!a.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=s.BYTE);let o=(n.getSymbolTotalCodewords(e)-i.getTotalCodewordsCount(e,t))*8;if(r===s.MIXED)return o;let l=o-u(r,e);switch(r){case s.NUMERIC:return Math.floor(l/10*3);case s.ALPHANUMERIC:return Math.floor(l/11*2);case s.KANJI:return Math.floor(l/13);case s.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let n;let i=o.from(r,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++)if(function(e,t){let r=0;return e.forEach(function(e){let n=u(e.mode,t);r+=n+e.getBitsLength()}),r}(e,n)<=t.getCapacity(n,r,s.MIXED))return n}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},7977:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},9449:function(e,t,r){"use strict";let n,i,o,s;function a(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n of r)if(!Object.prototype.hasOwnProperty.call(t,n)||!Object.is(e[n],t[n]))return!1;return!0}r.d(t,{IO:function(){return lF}});var l,u,c,d,h,p,f,m,g,v,y,w,x=r(8945),b=r.t(x,2),E=r(78),C=r(1592);let{useDebugValue:T}=x,{useSyncExternalStoreWithSelector:P}=E,k=e=>e,S=(e,t)=>{let r=(0,C.M)(e),n=(e,n=t)=>(function(e,t=k,r){let n=P(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return T(n),n})(r,e,n);return Object.assign(n,r),n};var A=r(2810),j=r(3463),R=r(2347),M={en:{"All set!":"All set!","Your World ID is now connected":"Your World ID is now connected","Transmitting verification to host app. Please wait...":"Transmitting verification to host app. Please wait...","Something went wrong":"Something went wrong","Verification Declined":"Verification Declined","Request cancelled":"Request cancelled","Connection to your wallet failed. Please try again.":"Connection to your wallet failed. Please try again.","You've cancelled the request in World App.":"You've cancelled the request in World App.","You have already verified the maximum number of times for this action.":"You have already verified the maximum number of times for this action.","It seems you do not have the verification level required by this app.":"It seems you do not have the verification level required by this app.","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"Invalid network. If you are the app owner, visit docs.world.org/test for details.","Your identity is still being registered. Please wait a few minutes and try again.":"Your identity is still being registered. Please wait a few minutes and try again.","We couldn't complete your request. Please try again.":"We couldn't complete your request. Please try again.","Try Again":"Try Again","Open World App":"Open World App","Hide QR Code":"Hide QR Code","Display QR Code":"Display QR Code","QR Code copied":"QR Code copied","Connect your World ID":"Connect your World ID","Use phone camera to scan the QR code":"Use phone camera to scan the QR code","Connecting...":"Connecting...","Please continue in app":"Please continue in app","You will be redirected to the app, please return to this page once you're done":"You will be redirected to the app, please return to this page once you're done","Action cannot be an empty string.":"Action cannot be an empty string.","Invalid IDKitStage :stage.":"Invalid IDKitStage :stage.","Terms & Privacy":"Terms & Privacy"},es:{"All set!":"\xa1Todo listo!","Your World ID is now connected":"Tu World ID ahora est\xe1 conectado","Transmitting verification to host app. Please wait...":"Transmitiendo verificaci\xf3n a la aplicaci\xf3n host. Por favor espera...","Something went wrong":"Algo sali\xf3 mal","Verification Declined":"Verificaci\xf3n rechazada","Request cancelled":"Solicitud cancelada","Connection to your wallet failed. Please try again.":"La conexi\xf3n a tu billetera fall\xf3. Por favor intenta de nuevo.","You've cancelled the request in World App.":"Has cancelado la solicitud en World App.","You have already verified the maximum number of times for this action.":"Ya has verificado el n\xfamero m\xe1ximo de veces para esta acci\xf3n.","It seems you do not have the verification level required by this app.":"Parece que no tienes el nivel de verificaci\xf3n requerido por esta aplicaci\xf3n.","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"Red inv\xe1lida. Si eres el propietario de la aplicaci\xf3n, visita docs.world.org/test para m\xe1s detalles.","Your identity is still being registered. Please wait a few minutes and try again.":"Tu identidad a\xfan se est\xe1 registrando. Por favor espera unos minutos e intenta de nuevo.","We couldn't complete your request. Please try again.":"No pudimos completar tu solicitud. Por favor intenta de nuevo.","Try Again":"Intentar de nuevo","Open World App":"Abrir World App","Hide QR Code":"Ocultar c\xf3digo QR","Display QR Code":"Mostrar c\xf3digo QR","QR Code copied":"C\xf3digo QR copiado","Connect your World ID":"Conecta tu World ID","Use phone camera to scan the QR code":"Usa la c\xe1mara del tel\xe9fono para escanear el c\xf3digo QR","Connecting...":"Conectando...","Please continue in app":"Por favor contin\xfaa en la aplicaci\xf3n","You will be redirected to the app, please return to this page once you're done":"Ser\xe1s redirigido a la aplicaci\xf3n, por favor regresa a esta p\xe1gina una vez que hayas terminado","Action cannot be an empty string.":"La acci\xf3n no puede ser una cadena vac\xeda.","Invalid IDKitStage :stage.":"IDKitStage inv\xe1lido :stage.","Terms & Privacy":"T\xe9rminos y privacidad"},th:{"All set!":"เรียบร้อย!","Your World ID is now connected":"World ID ของคุณเชื่อมต่อแล้ว","Transmitting verification to host app. Please wait...":"กำลังส่งการยืนยันไปยังแอปโฮสต์ กรุณารอสักครู่...","Something went wrong":"เกิดข้อผิดพลาด","Verification Declined":"การยืนยันถูกปฏิเสธ","Request cancelled":"คำขอถูกยกเลิก","Connection to your wallet failed. Please try again.":"การเชื่อมต่อกับกระเป๋าเงินของคุณล้มเหลว กรุณาลองอีกครั้ง","You've cancelled the request in World App.":"คุณได้ยกเลิกคำขอใน World App","You have already verified the maximum number of times for this action.":"คุณได้ยืนยันครบจำนวนครั้งสูงสุดสำหรับการดำเนินการนี้แล้ว","It seems you do not have the verification level required by this app.":"ดูเหมือนว่าคุณไม่มีระดับการยืนยันที่แอปนี้ต้องการ","Invalid network. If you are the app owner, visit docs.world.org/test for details.":"เครือข่ายไม่ถูกต้อง หากคุณเป็นเจ้าของแอป โปรดไปที่ docs.world.org/test สำหรับรายละเอียด","Your identity is still being registered. Please wait a few minutes and try again.":"ตัวตนของคุณยังอยู่ระหว่างการลงทะเบียน กรุณารอสักครู่แล้วลองอีกครั้ง","We couldn't complete your request. Please try again.":"เราไม่สามารถดำเนินการตามคำขอของคุณได้ กรุณาลองอีกครั้ง","Try Again":"ลองอีกครั้ง","Open World App":"เปิด World App","Hide QR Code":"ซ่อน QR Code","Display QR Code":"แสดง QR Code","QR Code copied":"คัดลอก QR Code แล้ว","Connect your World ID":"เชื่อมต่อ World ID ของคุณ","Use phone camera to scan the QR code":"ใช้กล้องโทรศัพท์เพื่อสแกน QR code","Connecting...":"กำลังเชื่อมต่อ...","Please continue in app":"กรุณาดำเนินการต่อในแอป","You will be redirected to the app, please return to this page once you're done":"คุณจะถูกนำไปยังแอป กรุณากลับมาที่หน้านี้เมื่อเสร็จแล้ว","Action cannot be an empty string.":"การดำเนินการไม่สามารถเป็นข้อความว่างได้","Invalid IDKitStage :stage.":"IDKitStage ไม่ถูกต้อง :stage.","Terms & Privacy":"ข้อกำหนดและความเป็นส่วนตัว"}},D={},N=e=>{D=e},L=()=>D,I=()=>{for(let e of navigator.languages){let[t]=e.split("-"),r=t.toLowerCase();if(r in M)return r}},V=()=>{let e=L();return e.language&&e.language in M?e.language:I()||"en"},F=()=>M[V()],O=()=>F(),B=(e,t)=>{if(!t)return e;let r=e;for(let[e,n]of Object.entries(t))r=r.replace(`:${e}`,n);return r};function U(e,...t){let[r]=t;return"undefined"==typeof navigator&&"undefined"==typeof window?B(e,r):B(O()?.[e]??e,r)}var z=(i?S(i,o):S)((e,t)=>({app_id:"",signal:"",action:"",action_description:"",bridge_url:"",verification_level:A.jG,partner:!1,open:!1,result:null,errorTitle:"",errorDetail:"",autoClose:!0,errorState:null,processing:!1,errorCallbacks:{},verifyCallbacks:{},successCallbacks:{},stage:"WORLD_ID",setStage:t=>e({stage:t}),setErrorState:t=>e({errorState:t}),setProcessing:t=>e({processing:t}),retryFlow:()=>{e({stage:"WORLD_ID",errorState:null})},addErrorCallback:(t,r)=>{e(e=>(e.errorCallbacks[r]=t,e))},addSuccessCallback:(t,r)=>{e(e=>(e.successCallbacks[r]=t,e))},addVerificationCallback:(t,r)=>{e(e=>(e.verifyCallbacks[r]=t,e))},setOptions:({handleVerify:r,onSuccess:n,signal:i,action:o,app_id:s,partner:a,onError:l,verification_level:u,action_description:c,bridge_url:d,autoClose:h,advanced:p},f)=>{e({signal:i,action:o,bridge_url:d,action_description:c,autoClose:h??!0,app_id:p?.self_hosted?"self_hosted":s,verification_level:u??A.jG,partner:a}),t().addSuccessCallback(n,f),l&&t().addErrorCallback(l,f),r&&t().addVerificationCallback(r,f)},handleVerify:r=>{e({stage:"HOST_APP_VERIFICATION",processing:!1}),Promise.all(Object.values(t().verifyCallbacks).map(async e=>e?.(r))).then(()=>{e({stage:"SUCCESS",result:r}),t().autoClose&&setTimeout(()=>t().onOpenChange(!1),2500)},t=>{let r;t&&"object"==typeof t&&t.message&&(r=t.message),e({stage:"ERROR",errorState:{code:A.ov.FailedByHostApp,message:r?U(r):void 0}})})},onOpenChange:r=>{if(r)return e({open:r});let n=t().errorState;if("ERROR"===t().stage&&n){let e=t().errorCallbacks;requestAnimationFrame(()=>Object.values(e).forEach(e=>void e?.(n)))}let i=t().result;if("SUCCESS"==t().stage&&i){let e=t().successCallbacks;requestAnimationFrame(()=>Object.values(e).forEach(e=>void e?.(i)))}e({open:r,result:null,errorState:null,processing:!1,stage:"WORLD_ID"})}}),a),W=((l=W||{}).HOOK="hook",l.PROPS="props",l.MANUAL="manual",l),_=e=>{let t=j.create(e,{errorCorrectionLevel:"M"}).modules.data,r=Math.sqrt(t.length);return t.reduce((e,t,n)=>(n%r==0?e.push([t]):e[e.length-1].push(t),e),[])},H=(0,x.memo)(({data:e,size:t=300})=>{let r=(0,x.useMemo)(()=>{let r=[],n=_(e),i=t/n.length;return[{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:e,y:t})=>{let o=(n.length-7)*i*e,s=(n.length-7)*i*t;for(let n=0;n<3;n++)r.push((0,R.jsx)("rect",{fill:"currentColor",x:o+i*n,y:s+i*n,width:i*(7-2*n),height:i*(7-2*n),rx:-((n-2)*5),ry:-((n-2)*5),className:n%3==0?"text-black":n%3==1?"text-white":"text-black"},`${n}-${e}-${t}`))}),n.forEach((e,t)=>{e.forEach((e,o)=>{n[t][o]&&(t<7&&o<7||t>n.length-8&&o<7||t<7&&o>n.length-8||r.push((0,R.jsx)("circle",{fill:"currentColor",r:i/2.2,cx:t*i+i/2,cy:o*i+i/2,className:"text-black dark:text-white"},`circle-${t}-${o}`)))})}),r},[t,e]);return(0,R.jsx)("svg",{height:t,width:t,"data-test-id":"qr-code",children:r})}),K=r(9493);function $(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}function Y(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function q(...e){return t=>{let r=!1,n=e.map(e=>{let n=Y(e,t);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let t=0;t<n.length;t++){let r=n[t];"function"==typeof r?r():Y(e[t],null)}}}}function Z(...e){return x.useCallback(q(...e),e)}function X(e,t=[]){let r=[],n=()=>{let t=r.map(e=>x.createContext(e));return function(r){let n=r?.[e]||t;return x.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let i=x.createContext(n),o=r.length;r=[...r,n];let s=t=>{let{scope:r,children:n,...s}=t,a=r?.[e]?.[o]||i,l=x.useMemo(()=>s,Object.values(s));return(0,R.jsx)(a.Provider,{value:l,children:n})};return s.displayName=t+"Provider",[s,function(r,s){let a=s?.[e]?.[o]||i,l=x.useContext(a);if(l)return l;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let i=r(e)[`__scope${n}`];return{...t,...i}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}function Q(e){let t=function(e){let t=x.forwardRef((e,t)=>{let{children:r,...n}=e;if(x.isValidElement(r)){let e,i;let o=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref,s=function(e,t){let r={...t};for(let n in t){let i=e[n],o=t[n];/^on[A-Z]/.test(n)?i&&o?r[n]=(...e)=>{let t=o(...e);return i(...e),t}:i&&(r[n]=i):"style"===n?r[n]={...i,...o}:"className"===n&&(r[n]=[i,o].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props);return r.type!==x.Fragment&&(s.ref=t?q(t,o):o),x.cloneElement(r,s)}return x.Children.count(r)>1?x.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}(e),r=x.forwardRef((e,r)=>{let{children:n,...i}=e,o=x.Children.toArray(n),s=o.find(J);if(s){let e=s.props.children,n=o.map(t=>t!==s?t:x.Children.count(e)>1?x.Children.only(null):x.isValidElement(e)?e.props.children:null);return(0,R.jsx)(t,{...i,ref:r,children:x.isValidElement(e)?x.cloneElement(e,void 0,n):null})}return(0,R.jsx)(t,{...i,ref:r,children:n})});return r.displayName=`${e}.Slot`,r}"undefined"!=typeof window&&window.document&&window.document.createElement;var G=Symbol("radix.slottable");function J(e){return x.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===G}var ee=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let r=Q(`Primitive.${t}`),n=x.forwardRef((e,n)=>{let{asChild:i,...o}=e,s=i?r:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,R.jsx)(s,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function et(e,t){e&&K.flushSync(()=>e.dispatchEvent(t))}function er(e){let t=x.useRef(e);return x.useEffect(()=>{t.current=e}),x.useMemo(()=>(...e)=>t.current?.(...e),[])}var en="dismissableLayer.update",ei=x.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),eo=x.forwardRef((e,t)=>{var r,n;let{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:a,onInteractOutside:l,onDismiss:u,...c}=e,d=x.useContext(ei),[h,p]=x.useState(null),f=null!==(n=null==h?void 0:h.ownerDocument)&&void 0!==n?n:null===(r=globalThis)||void 0===r?void 0:r.document,[,m]=x.useState({}),g=Z(t,e=>p(e)),v=Array.from(d.layers),[w]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(w),E=h?v.indexOf(h):-1,C=d.layersWithOutsidePointerEventsDisabled.size>0,T=E>=b,P=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,n=er(e),i=x.useRef(!1),o=x.useRef(()=>{});return x.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){el("dismissableLayer.pointerDownOutside",n,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(r.removeEventListener("click",o.current),o.current=t,r.addEventListener("click",o.current,{once:!0})):t()}else r.removeEventListener("click",o.current);i.current=!1},t=window.setTimeout(()=>{r.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),r.removeEventListener("pointerdown",e),r.removeEventListener("click",o.current)}},[r,n]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,r=[...d.branches].some(e=>e.contains(t));!T||r||(null==s||s(e),null==l||l(e),e.defaultPrevented||null==u||u())},f),k=function(e){var t;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,n=er(e),i=x.useRef(!1);return x.useEffect(()=>{let e=e=>{e.target&&!i.current&&el("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return r.addEventListener("focusin",e),()=>r.removeEventListener("focusin",e)},[r,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...d.branches].some(e=>e.contains(t))||(null==a||a(e),null==l||l(e),e.defaultPrevented||null==u||u())},f);return!function(e,t=globalThis?.document){let r=er(e);x.useEffect(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[r,t])}(e=>{E!==d.layers.size-1||(null==o||o(e),!e.defaultPrevented&&u&&(e.preventDefault(),u()))},f),x.useEffect(()=>{if(h)return i&&(0===d.layersWithOutsidePointerEventsDisabled.size&&(y=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(h)),d.layers.add(h),ea(),()=>{i&&1===d.layersWithOutsidePointerEventsDisabled.size&&(f.body.style.pointerEvents=y)}},[h,f,i,d]),x.useEffect(()=>()=>{h&&(d.layers.delete(h),d.layersWithOutsidePointerEventsDisabled.delete(h),ea())},[h,d]),x.useEffect(()=>{let e=()=>m({});return document.addEventListener(en,e),()=>document.removeEventListener(en,e)},[]),(0,R.jsx)(ee.div,{...c,ref:g,style:{pointerEvents:C?T?"auto":"none":void 0,...e.style},onFocusCapture:$(e.onFocusCapture,k.onFocusCapture),onBlurCapture:$(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:$(e.onPointerDownCapture,P.onPointerDownCapture)})});eo.displayName="DismissableLayer";var es=x.forwardRef((e,t)=>{let r=x.useContext(ei),n=x.useRef(null),i=Z(t,n);return x.useEffect(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,R.jsx)(ee.div,{...e,ref:i})});function ea(){let e=new CustomEvent(en);document.dispatchEvent(e)}function el(e,t,r,n){let{discrete:i}=n,o=r.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),i?et(o,s):o.dispatchEvent(s)}es.displayName="DismissableLayerBranch";var eu=globalThis?.document?x.useLayoutEffect:()=>{},ec=x.forwardRef((e,t)=>{var r,n;let{container:i,...o}=e,[s,a]=x.useState(!1);eu(()=>a(!0),[]);let l=i||s&&(null===(n=globalThis)||void 0===n?void 0:null===(r=n.document)||void 0===r?void 0:r.body);return l?K.createPortal((0,R.jsx)(ee.div,{...o,ref:t}),l):null});ec.displayName="Portal";var ed=e=>{var t,r;let n,i;let{present:o,children:s}=e,a=function(e){var t,r;let[n,i]=x.useState(),o=x.useRef(null),s=x.useRef(e),a=x.useRef("none"),[l,u]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},x.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return x.useEffect(()=>{let e=eh(o.current);a.current="mounted"===l?e:"none"},[l]),eu(()=>{let t=o.current,r=s.current;if(r!==e){let n=a.current,i=eh(t);e?u("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):r&&n!==i?u("ANIMATION_OUT"):u("UNMOUNT"),s.current=e}},[e,u]),eu(()=>{if(n){var e;let t;let r=null!==(e=n.ownerDocument.defaultView)&&void 0!==e?e:window,i=e=>{let i=eh(o.current).includes(CSS.escape(e.animationName));if(e.target===n&&i&&(u("ANIMATION_END"),!s.current)){let e=n.style.animationFillMode;n.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=e)})}},l=e=>{e.target===n&&(a.current=eh(o.current))};return n.addEventListener("animationstart",l),n.addEventListener("animationcancel",i),n.addEventListener("animationend",i),()=>{r.clearTimeout(t),n.removeEventListener("animationstart",l),n.removeEventListener("animationcancel",i),n.removeEventListener("animationend",i)}}u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:x.useCallback(e=>{o.current=e?getComputedStyle(e):null,i(e)},[])}}(o),l="function"==typeof s?s({present:a.isPresent}):x.Children.only(s),u=Z(a.ref,(n=null===(t=Object.getOwnPropertyDescriptor(l.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in n&&n.isReactWarning?l.ref:(n=null===(r=Object.getOwnPropertyDescriptor(l,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning?l.props.ref:l.props.ref||l.ref);return"function"==typeof s||a.isPresent?x.cloneElement(l,{ref:u}):null};function eh(e){return(null==e?void 0:e.animationName)||"none"}ed.displayName="Presence";var ep=b[" useInsertionEffect ".trim().toString()]||eu;function ef({prop:e,defaultProp:t,onChange:r=()=>{},caller:n}){let[i,o,s]=function({defaultProp:e,onChange:t}){let[r,n]=x.useState(e),i=x.useRef(r),o=x.useRef(t);return ep(()=>{o.current=t},[t]),x.useEffect(()=>{i.current!==r&&(o.current?.(r),i.current=r)},[r,i]),[r,n,o]}({defaultProp:t,onChange:r}),a=void 0!==e,l=a?e:i;{let t=x.useRef(void 0!==e);x.useEffect(()=>{let e=t.current;if(e!==a){let t=a?"controlled":"uncontrolled";console.warn(`${n} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)}t.current=a},[a,n])}return[l,x.useCallback(t=>{if(a){let r="function"==typeof t?t(e):t;r!==e&&s.current?.(r)}else o(t)},[a,e,o,s])]}Symbol("RADIX:SYNC_STATE");var em=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),eg=x.forwardRef((e,t)=>(0,R.jsx)(ee.span,{...e,ref:t,style:{...em,...e.style}}));eg.displayName="VisuallyHidden";var ev="ToastProvider",[ey,ew,ex]=function(e){let t=e+"CollectionProvider",[r,n]=X(t),[i,o]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:r}=e,n=x.useRef(null),o=x.useRef(new Map).current;return(0,R.jsx)(i,{scope:t,itemMap:o,collectionRef:n,children:r})};s.displayName=t;let a=e+"CollectionSlot",l=Q(a),u=x.forwardRef((e,t)=>{let{scope:r,children:n}=e,i=Z(t,o(a,r).collectionRef);return(0,R.jsx)(l,{ref:i,children:n})});u.displayName=a;let c=e+"CollectionItemSlot",d="data-radix-collection-item",h=Q(c),p=x.forwardRef((e,t)=>{let{scope:r,children:n,...i}=e,s=x.useRef(null),a=Z(t,s),l=o(c,r);return x.useEffect(()=>(l.itemMap.set(s,{ref:s,...i}),()=>void l.itemMap.delete(s))),(0,R.jsx)(h,{[d]:"",ref:a,children:n})});return p.displayName=c,[{Provider:s,Slot:u,ItemSlot:p},function(t){let r=o(e+"CollectionConsumer",t);return x.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(d,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},n]}("Toast"),[eb,eE]=X("Toast",[ex]),[eC,eT]=eb(ev),eP=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[a,l]=x.useState(null),[u,c]=x.useState(0),d=x.useRef(!1),h=x.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(ev,"`. Expected non-empty `string`.")),(0,R.jsx)(ey.Provider,{scope:t,children:(0,R.jsx)(eC,{scope:t,label:r,duration:n,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:a,onViewportChange:l,onToastAdd:x.useCallback(()=>c(e=>e+1),[]),onToastRemove:x.useCallback(()=>c(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:h,children:s})})};eP.displayName=ev;var ek="ToastViewport",eS=["F8"],eA="toast.viewportPause",ej="toast.viewportResume",eR=x.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:n=eS,label:i="Notifications ({hotkey})",...o}=e,s=eT(ek,r),a=ew(r),l=x.useRef(null),u=x.useRef(null),c=x.useRef(null),d=x.useRef(null),h=Z(t,d,s.onViewportChange),p=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),f=s.toastCount>0;x.useEffect(()=>{let e=e=>{var t;0!==n.length&&n.every(t=>e[t]||e.code===t)&&(null===(t=d.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),x.useEffect(()=>{let e=l.current,t=d.current;if(f&&e&&t){let r=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(eA);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},n=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(ej);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},i=t=>{e.contains(t.relatedTarget)||n()},o=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",i),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",o),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",i),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",o),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[f,s.isClosePausedRef]);let m=x.useCallback(e=>{let{tabbingDirection:t}=e,r=a().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[a]);return x.useEffect(()=>{let e=d.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,i,o;let r=document.activeElement,s=t.shiftKey;if(t.target===e&&s){null===(n=u.current)||void 0===n||n.focus();return}let a=m({tabbingDirection:s?"backwards":"forwards"}),l=a.findIndex(e=>e===r);eH(a.slice(l+1))?t.preventDefault():s?null===(i=u.current)||void 0===i||i.focus():null===(o=c.current)||void 0===o||o.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[a,m]),(0,R.jsxs)(es,{ref:l,role:"region","aria-label":i.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:f?void 0:"none"},children:[f&&(0,R.jsx)(eD,{ref:u,onFocusFromOutsideViewport:()=>{eH(m({tabbingDirection:"forwards"}))}}),(0,R.jsx)(ey.Slot,{scope:r,children:(0,R.jsx)(ee.ol,{tabIndex:-1,...o,ref:h})}),f&&(0,R.jsx)(eD,{ref:c,onFocusFromOutsideViewport:()=>{eH(m({tabbingDirection:"backwards"}))}})]})});eR.displayName=ek;var eM="ToastFocusProxy",eD=x.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,o=eT(eM,r);return(0,R.jsx)(eg,{tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=o.viewport)||void 0===t?void 0:t.contains(r))||n()}})});eD.displayName=eM;var eN="Toast";x.forwardRef((e,t)=>{let{forceMount:r,open:n,defaultOpen:i,onOpenChange:o,...s}=e,[a,l]=ef({prop:n,defaultProp:null==i||i,onChange:o,caller:eN});return(0,R.jsx)(ed,{present:r||a,children:(0,R.jsx)(eV,{open:a,...s,ref:t,onClose:()=>l(!1),onPause:er(e.onPause),onResume:er(e.onResume),onSwipeStart:$(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:$(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:$(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:$(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),l(!1)})})})}).displayName=eN;var[eL,eI]=eb(eN,{onClose(){}}),eV=x.forwardRef((e,t)=>{let{__scopeToast:r,type:n="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:u,onSwipeStart:c,onSwipeMove:d,onSwipeCancel:h,onSwipeEnd:p,...f}=e,m=eT(eN,r),[g,v]=x.useState(null),y=Z(t,e=>v(e)),w=x.useRef(null),b=x.useRef(null),E=i||m.duration,C=x.useRef(0),T=x.useRef(E),P=x.useRef(0),{onToastAdd:k,onToastRemove:S}=m,A=er(()=>{var e;(null==g?void 0:g.contains(document.activeElement))&&(null===(e=m.viewport)||void 0===e||e.focus()),s()}),j=x.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(P.current),C.current=new Date().getTime(),P.current=window.setTimeout(A,e))},[A]);x.useEffect(()=>{let e=m.viewport;if(e){let t=()=>{j(T.current),null==u||u()},r=()=>{let e=new Date().getTime()-C.current;T.current=T.current-e,window.clearTimeout(P.current),null==l||l()};return e.addEventListener(eA,r),e.addEventListener(ej,t),()=>{e.removeEventListener(eA,r),e.removeEventListener(ej,t)}}},[m.viewport,E,l,u,j]),x.useEffect(()=>{o&&!m.isClosePausedRef.current&&j(E)},[o,E,m.isClosePausedRef,j]),x.useEffect(()=>(k(),()=>S()),[k,S]);let M=x.useMemo(()=>g?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,i=""===t.dataset.radixToastAnnounceExclude;if(!n){if(i){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(g):null,[g]);return m.viewport?(0,R.jsxs)(R.Fragment,{children:[M&&(0,R.jsx)(eF,{__scopeToast:r,role:"status","aria-live":"foreground"===n?"assertive":"polite",children:M}),(0,R.jsx)(eL,{scope:r,onClose:A,children:K.createPortal((0,R.jsx)(ey.ItemSlot,{scope:r,children:(0,R.jsx)(eo,{asChild:!0,onEscapeKeyDown:$(a,()=>{m.isFocusedToastEscapeKeyDownRef.current||A(),m.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,R.jsx)(ee.li,{tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":m.swipeDirection,...f,ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:$(e.onKeyDown,e=>{"Escape"!==e.key||(null==a||a(e.nativeEvent),e.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,A()))}),onPointerDown:$(e.onPointerDown,e=>{0===e.button&&(w.current={x:e.clientX,y:e.clientY})}),onPointerMove:$(e.onPointerMove,e=>{if(!w.current)return;let t=e.clientX-w.current.x,r=e.clientY-w.current.y,n=!!b.current,i=["left","right"].includes(m.swipeDirection),o=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,s=i?o(0,t):0,a=i?0:o(0,r),l="touch"===e.pointerType?10:2,u={x:s,y:a},h={originalEvent:e,delta:u};n?(b.current=u,eW("toast.swipeMove",d,h,{discrete:!1})):e_(u,m.swipeDirection,l)?(b.current=u,eW("toast.swipeStart",c,h,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(w.current=null)}),onPointerUp:$(e.onPointerUp,e=>{let t=b.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),b.current=null,w.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};e_(t,m.swipeDirection,m.swipeThreshold)?eW("toast.swipeEnd",p,n,{discrete:!0}):eW("toast.swipeCancel",h,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),m.viewport)})]}):null}),eF=e=>{let{__scopeToast:t,children:r,...n}=e,i=eT(eN,t),[o,s]=x.useState(!1),[a,l]=x.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=er(e);eu(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),x.useEffect(()=>{let e=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(e)},[]),a?null:(0,R.jsx)(ec,{asChild:!0,children:(0,R.jsx)(eg,{...n,children:o&&(0,R.jsxs)(R.Fragment,{children:[i.label," ",r]})})})};x.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,R.jsx)(ee.div,{...n,ref:t})}).displayName="ToastTitle",x.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,R.jsx)(ee.div,{...n,ref:t})}).displayName="ToastDescription";var eO="ToastAction";x.forwardRef((e,t)=>{let{altText:r,...n}=e;return r.trim()?(0,R.jsx)(ez,{altText:r,asChild:!0,children:(0,R.jsx)(eU,{...n,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(eO,"`. Expected non-empty `string`.")),null)}).displayName=eO;var eB="ToastClose",eU=x.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e,i=eI(eB,r);return(0,R.jsx)(ez,{asChild:!0,children:(0,R.jsx)(ee.button,{type:"button",...n,ref:t,onClick:$(e.onClick,i.onClose)})})});eU.displayName=eB;var ez=x.forwardRef((e,t)=>{let{__scopeToast:r,altText:n,...i}=e;return(0,R.jsx)(ee.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...i,ref:t})});function eW(e,t,r,n){let{discrete:i}=n,o=r.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),i?et(o,s):o.dispatchEvent(s)}var e_=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),i=Math.abs(e.y),o=n>i;return"left"===t||"right"===t?o&&n>r:!o&&i>r};function eH(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var eK=r(5382);function e$(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}let eY=e=>Array.isArray(e);function eq(e,t){if(!Array.isArray(t))return!1;let r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function eZ(e){return"string"==typeof e||Array.isArray(e)}function eX(e){let t=[{},{}];return null==e||e.values.forEach((e,r)=>{t[0][r]=e.get(),t[1][r]=e.getVelocity()}),t}function eQ(e,t,r,n){if("function"==typeof t){let[i,o]=eX(n);t=t(void 0!==r?r:e.custom,i,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){let[i,o]=eX(n);t=t(void 0!==r?r:e.custom,i,o)}return t}function eG(e,t,r){let n=e.getProps();return eQ(n,t,void 0!==r?r:n.custom,e)}let eJ=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],e0=["initial",...eJ];function e1(e){let t;return()=>(void 0===t&&(t=e()),t)}let e2=e1(()=>void 0!==window.ScrollTimeline);class e5{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){let r=this.animations.map(r=>e2()&&r.attachTimeline?r.attachTimeline(e):"function"==typeof t?t(r):void 0);return()=>{r.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class e8 extends e5{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function e6(e,t){return e?e[t]||e.default||e:void 0}function e3(e){let t=0,r=e.next(t);for(;!r.done&&t<2e4;)t+=50,r=e.next(t);return t>=2e4?1/0:t}function e7(e){return"function"==typeof e}function e4(e,t){e.timeline=t,e.onfinish=null}let e9=e=>Array.isArray(e)&&"number"==typeof e[0],te={linearEasing:void 0},tt=function(e,t){let r=e1(e);return()=>{var e;return null!==(e=te[t])&&void 0!==e?e:r()}}(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0},"linearEasing"),tr=(e,t,r)=>{let n=t-e;return 0===n?1:(r-e)/n},tn=(e,t,r=10)=>{let n="",i=Math.max(Math.round(t/r),2);for(let t=0;t<i;t++)n+=e(tr(0,i-1,t))+", ";return`linear(${n.substring(0,n.length-2)})`},ti=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,to={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ti([0,.65,.55,1]),circOut:ti([.55,0,1,.45]),backIn:ti([.31,.01,.66,-.59]),backOut:ti([.33,1.53,.69,.99])},ts={x:!1,y:!1};function ta(e,t){let r=function(e,t,r){if(e instanceof Element)return[e];if("string"==typeof e){let t=document.querySelectorAll(e);return t?Array.from(t):[]}return Array.from(e)}(e),n=new AbortController;return[r,{passive:!0,...t,signal:n.signal},()=>n.abort()]}function tl(e){return t=>{"touch"===t.pointerType||ts.x||ts.y||e(t)}}let tu=(e,t)=>!!t&&(e===t||tu(e,t.parentElement)),tc=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary,td=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]),th=new WeakSet;function tp(e){return t=>{"Enter"===t.key&&e(t)}}function tf(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}let tm=(e,t)=>{let r=e.currentTarget;if(!r)return;let n=tp(()=>{if(th.has(r))return;tf(r,"down");let e=tp(()=>{tf(r,"up")});r.addEventListener("keyup",e,t),r.addEventListener("blur",()=>tf(r,"cancel"),t)});r.addEventListener("keydown",n,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",n),t)};function tg(e){return tc(e)&&!(ts.x||ts.y)}let tv=e=>1e3*e,ty=e=>e/1e3,tw=e=>e,tx=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tb=new Set(tx),tE=new Set(["width","height","top","left","right","bottom",...tx]),tC=e=>!!(e&&"object"==typeof e&&e.mix&&e.toValue),tT=e=>eY(e)?e[e.length-1]||0:e,tP={skipAnimations:!1,useManualTiming:!1},tk=["read","resolveKeyframes","update","preRender","render","postRender"];function tS(e,t){let r=!1,n=!0,i={delta:0,timestamp:0,isProcessing:!1},o=()=>r=!0,s=tk.reduce((e,t)=>(e[t]=function(e){let t=new Set,r=new Set,n=!1,i=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1};function a(t){o.has(t)&&(l.schedule(t),e()),t(s)}let l={schedule:(e,i=!1,s=!1)=>{let a=s&&n?t:r;return i&&o.add(e),a.has(e)||a.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,n){i=!0;return}n=!0,[t,r]=[r,t],t.forEach(a),t.clear(),n=!1,i&&(i=!1,l.process(e))}};return l}(o),e),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:h}=s,p=()=>{let o=tP.useManualTiming?i.timestamp:performance.now();r=!1,i.delta=n?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),d.process(i),h.process(i),i.isProcessing=!1,r&&t&&(n=!1,e(p))},f=()=>{r=!0,n=!0,i.isProcessing||e(p)};return{schedule:tk.reduce((e,t)=>{let n=s[t];return e[t]=(e,t=!1,i=!1)=>(r||f(),n.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<tk.length;t++)s[tk[t]].cancel(e)},state:i,steps:s}}let{schedule:tA,cancel:tj,state:tR,steps:tM}=tS("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:tw,!0);function tD(){n=void 0}let tN={now:()=>(void 0===n&&tN.set(tR.isProcessing||tP.useManualTiming?tR.timestamp:performance.now()),n),set:e=>{n=e,queueMicrotask(tD)}};function tL(e,t){-1===e.indexOf(t)&&e.push(t)}function tI(e,t){let r=e.indexOf(t);r>-1&&e.splice(r,1)}class tV{constructor(){this.subscriptions=[]}add(e){return tL(this.subscriptions,e),()=>tI(this.subscriptions,e)}notify(e,t,r){let n=this.subscriptions.length;if(n){if(1===n)this.subscriptions[0](e,t,r);else for(let i=0;i<n;i++){let n=this.subscriptions[i];n&&n(e,t,r)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let tF=e=>!isNaN(parseFloat(e)),tO={current:void 0};class tB{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(e,t=!0)=>{let r=tN.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),t&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=tN.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=tF(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tV);let r=this.events[e].add(t);return"change"===e?()=>{r(),tA.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return tO.current&&tO.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=tN.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let r=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),r?1e3/r*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function tU(e,t){return new tB(e,t)}let tz=e=>!!(e&&e.getVelocity);function tW(e,t){let r=e.getValue("willChange");if(tz(r)&&r.add)return r.add(t)}let t_=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),tH="data-"+t_("framerAppearId"),tK={current:!1},t$=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e;function tY(e,t,r,n){if(e===t&&r===n)return tw;let i=t=>(function(e,t,r,n,i){let o,s;let a=0;do(o=t$(s=t+(r-t)/2,n,i)-e)>0?r=s:t=s;while(Math.abs(o)>1e-7&&++a<12);return s})(t,0,1,e,r);return e=>0===e||1===e?e:t$(i(e),t,n)}let tq=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tZ=e=>t=>1-e(1-t),tX=tY(.33,1.53,.69,.99),tQ=tZ(tX),tG=tq(tQ),tJ=e=>(e*=2)<1?.5*tQ(e):.5*(2-Math.pow(2,-10*(e-1))),t0=e=>1-Math.sin(Math.acos(e)),t1=tZ(t0),t2=tq(t0),t5=e=>/^0[^.\s]+$/u.test(e),t8=(e,t,r)=>r>t?t:r<e?e:r,t6={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},t3={...t6,transform:e=>t8(0,1,e)},t7={...t6,default:1},t4=e=>Math.round(1e5*e)/1e5,t9=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,re=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,rt=(e,t)=>r=>!!("string"==typeof r&&re.test(r)&&r.startsWith(e)||t&&null!=r&&Object.prototype.hasOwnProperty.call(r,t)),rr=(e,t,r)=>n=>{if("string"!=typeof n)return n;let[i,o,s,a]=n.match(t9);return{[e]:parseFloat(i),[t]:parseFloat(o),[r]:parseFloat(s),alpha:void 0!==a?parseFloat(a):1}},rn=e=>t8(0,255,e),ri={...t6,transform:e=>Math.round(rn(e))},ro={test:rt("rgb","red"),parse:rr("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+ri.transform(e)+", "+ri.transform(t)+", "+ri.transform(r)+", "+t4(t3.transform(n))+")"},rs={test:rt("#"),parse:function(e){let t="",r="",n="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,n+=n,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:i?parseInt(i,16)/255:1}},transform:ro.transform},ra=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),rl=ra("deg"),ru=ra("%"),rc=ra("px"),rd=ra("vh"),rh=ra("vw"),rp={...ru,parse:e=>ru.parse(e)/100,transform:e=>ru.transform(100*e)},rf={test:rt("hsl","hue"),parse:rr("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+ru.transform(t4(t))+", "+ru.transform(t4(r))+", "+t4(t3.transform(n))+")"},rm={test:e=>ro.test(e)||rs.test(e)||rf.test(e),parse:e=>ro.test(e)?ro.parse(e):rf.test(e)?rf.parse(e):rs.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?ro.transform(e):rf.transform(e)},rg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,rv="number",ry="color",rw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function rx(e){let t=e.toString(),r=[],n={color:[],number:[],var:[]},i=[],o=0,s=t.replace(rw,e=>(rm.test(e)?(n.color.push(o),i.push(ry),r.push(rm.parse(e))):e.startsWith("var(")?(n.var.push(o),i.push("var"),r.push(e)):(n.number.push(o),i.push(rv),r.push(parseFloat(e))),++o,"${}")).split("${}");return{values:r,split:s,indexes:n,types:i}}function rb(e){return rx(e).values}function rE(e){let{split:t,types:r}=rx(e),n=t.length;return e=>{let i="";for(let o=0;o<n;o++)if(i+=t[o],void 0!==e[o]){let t=r[o];t===rv?i+=t4(e[o]):t===ry?i+=rm.transform(e[o]):i+=e[o]}return i}}let rC=e=>"number"==typeof e?0:e,rT={test:function(e){var t,r;return isNaN(e)&&"string"==typeof e&&((null===(t=e.match(t9))||void 0===t?void 0:t.length)||0)+((null===(r=e.match(rg))||void 0===r?void 0:r.length)||0)>0},parse:rb,createTransformer:rE,getAnimatableNone:function(e){let t=rb(e);return rE(e)(t.map(rC))}},rP=new Set(["brightness","contrast","saturate","opacity"]);function rk(e){let[t,r]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[n]=r.match(t9)||[];if(!n)return e;let i=r.replace(n,""),o=rP.has(t)?1:0;return n!==r&&(o*=100),t+"("+o+i+")"}let rS=/\b([a-z-]*)\(.*?\)/gu,rA={...rT,getAnimatableNone:e=>{let t=e.match(rS);return t?t.map(rk).join(" "):e}},rj={...t6,transform:Math.round},rR={borderWidth:rc,borderTopWidth:rc,borderRightWidth:rc,borderBottomWidth:rc,borderLeftWidth:rc,borderRadius:rc,radius:rc,borderTopLeftRadius:rc,borderTopRightRadius:rc,borderBottomRightRadius:rc,borderBottomLeftRadius:rc,width:rc,maxWidth:rc,height:rc,maxHeight:rc,top:rc,right:rc,bottom:rc,left:rc,padding:rc,paddingTop:rc,paddingRight:rc,paddingBottom:rc,paddingLeft:rc,margin:rc,marginTop:rc,marginRight:rc,marginBottom:rc,marginLeft:rc,backgroundPositionX:rc,backgroundPositionY:rc,rotate:rl,rotateX:rl,rotateY:rl,rotateZ:rl,scale:t7,scaleX:t7,scaleY:t7,scaleZ:t7,skew:rl,skewX:rl,skewY:rl,distance:rc,translateX:rc,translateY:rc,translateZ:rc,x:rc,y:rc,z:rc,perspective:rc,transformPerspective:rc,opacity:t3,originX:rp,originY:rp,originZ:rc,zIndex:rj,size:rc,fillOpacity:t3,strokeOpacity:t3,numOctaves:rj},rM={...rR,color:rm,backgroundColor:rm,outlineColor:rm,fill:rm,stroke:rm,borderColor:rm,borderTopColor:rm,borderRightColor:rm,borderBottomColor:rm,borderLeftColor:rm,filter:rA,WebkitFilter:rA},rD=e=>rM[e];function rN(e,t){let r=rD(e);return r!==rA&&(r=rT),r.getAnimatableNone?r.getAnimatableNone(t):void 0}let rL=new Set(["auto","none","0"]),rI=e=>e===t6||e===rc,rV=(e,t)=>parseFloat(e.split(", ")[t]),rF=(e,t)=>(r,{transform:n})=>{if("none"===n||!n)return 0;let i=n.match(/^matrix3d\((.+)\)$/u);if(i)return rV(i[1],t);{let t=n.match(/^matrix\((.+)\)$/u);return t?rV(t[1],e):0}},rO=new Set(["x","y","z"]),rB=tx.filter(e=>!rO.has(e)),rU={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:rF(4,13),y:rF(5,14)};rU.translateX=rU.x,rU.translateY=rU.y;let rz=new Set,rW=!1,r_=!1;function rH(){if(r_){let e=Array.from(rz).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),r=new Map;t.forEach(e=>{let t=function(e){let t=[];return rB.forEach(r=>{let n=e.getValue(r);void 0!==n&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t}(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,r])=>{var n;null===(n=e.getValue(t))||void 0===n||n.set(r)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}r_=!1,rW=!1,rz.forEach(e=>e.complete()),rz.clear()}function rK(){rz.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(r_=!0)})}class r${constructor(e,t,r,n,i,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=n,this.element=i,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(rz.add(this),rW||(rW=!0,tA.read(rK),tA.resolveKeyframes(rH))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:r,motionValue:n}=this;for(let i=0;i<e.length;i++)if(null===e[i]){if(0===i){let i=null==n?void 0:n.get(),o=e[e.length-1];if(void 0!==i)e[0]=i;else if(r&&t){let n=r.readValue(t,o);null!=n&&(e[0]=n)}void 0===e[0]&&(e[0]=o),n&&void 0===i&&n.set(e[0])}else e[i]=e[i-1]}}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),rz.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,rz.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}let rY=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),rq=e=>t=>"string"==typeof t&&t.startsWith(e),rZ=rq("--"),rX=rq("var(--"),rQ=e=>!!rX(e)&&rG.test(e.split("/*")[0].trim()),rG=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,rJ=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,r0=e=>t=>t.test(e),r1=[t6,rc,ru,rl,rh,rd,{test:e=>"auto"===e,parse:e=>e}],r2=e=>r1.find(r0(e));class r5 extends r${constructor(e,t,r,n,i){super(e,t,r,n,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let r=0;r<e.length;r++){let n=e[r];if("string"==typeof n&&rQ(n=n.trim())){let i=function e(t,r,n=1){tw(n<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);let[i,o]=function(e){let t=rJ.exec(e);if(!t)return[,];let[,r,n,i]=t;return[`--${null!=r?r:n}`,i]}(t);if(!i)return;let s=window.getComputedStyle(r).getPropertyValue(i);if(s){let e=s.trim();return rY(e)?parseFloat(e):e}return rQ(o)?e(o,r,n+1):o}(n,t.current);void 0!==i&&(e[r]=i),r===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!tE.has(r)||2!==e.length)return;let[n,i]=e,o=r2(n),s=r2(i);if(o!==s){if(rI(o)&&rI(s))for(let t=0;t<e.length;t++){let r=e[t];"string"==typeof r&&(e[t]=parseFloat(r))}else this.needsMeasurement=!0}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,r=[];for(let t=0;t<e.length;t++){var n;("number"==typeof(n=e[t])?0===n:null===n||"none"===n||"0"===n||t5(n))&&r.push(t)}r.length&&function(e,t,r){let n,i=0;for(;i<e.length&&!n;){let t=e[i];"string"==typeof t&&!rL.has(t)&&rx(t).values.length&&(n=e[i]),i++}if(n&&r)for(let i of t)e[i]=rN(r,n)}(e,r,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;"height"===r&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=rU[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let n=t[t.length-1];void 0!==n&&e.getValue(r,n).jump(n,!1)}measureEndState(){var e;let{element:t,name:r,unresolvedKeyframes:n}=this;if(!t||!t.current)return;let i=t.getValue(r);i&&i.jump(this.measuredOrigin,!1);let o=n.length-1,s=n[o];n[o]=rU[r](t.measureViewportBox(),window.getComputedStyle(t.current)),null!==s&&void 0===this.finalKeyframe&&(this.finalKeyframe=s),(null===(e=this.removedTransforms)||void 0===e?void 0:e.length)&&this.removedTransforms.forEach(([e,r])=>{t.getValue(e).set(r)}),this.resolveNoneKeyframes()}}let r8=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(rT.test(e)||"0"===e)&&!e.startsWith("url(")),r6=e=>null!==e;function r3(e,{repeat:t,repeatType:r="loop"},n){let i=e.filter(r6),o=t&&"loop"!==r&&t%2==1?0:i.length-1;return o&&void 0!==n?n:i[o]}class r7{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:n=0,repeatDelay:i=0,repeatType:o="loop",...s}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=tN.now(),this.options={autoplay:e,delay:t,type:r,repeat:n,repeatDelay:i,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(rK(),rH()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=tN.now(),this.hasAttemptedResolve=!0;let{name:r,type:n,velocity:i,delay:o,onComplete:s,onUpdate:a,isGenerator:l}=this.options;if(!l&&!function(e,t,r,n){let i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;let o=e[e.length-1],s=r8(i,t),a=r8(o,t);return tw(s===a,`You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),!!s&&!!a&&(function(e){let t=e[0];if(1===e.length)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}(e)||("spring"===r||e7(r))&&n)}(e,r,n,i)){if(tK.current||!o){a&&a(r3(e,this.options,t)),s&&s(),this.resolveFinishedPromise();return}this.options.duration=0}let u=this.initPlayback(e,t);!1!==u&&(this._resolved={keyframes:e,finalKeyframe:t,...u},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}let r4=(e,t,r)=>e+(t-e)*r;function r9(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ne(e,t){return r=>r>0?t:e}let nt=(e,t,r)=>{let n=e*e,i=r*(t*t-n)+n;return i<0?0:Math.sqrt(i)},nr=[rs,ro,rf],nn=e=>nr.find(t=>t.test(e));function ni(e){let t=nn(e);if(tw(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`),!t)return!1;let r=t.parse(e);return t===rf&&(r=function({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,r/=100;let i=0,o=0,s=0;if(t/=100){let n=r<.5?r*(1+t):r+t-r*t,a=2*r-n;i=r9(a,n,e+1/3),o=r9(a,n,e),s=r9(a,n,e-1/3)}else i=o=s=r;return{red:Math.round(255*i),green:Math.round(255*o),blue:Math.round(255*s),alpha:n}}(r)),r}let no=(e,t)=>{let r=ni(e),n=ni(t);if(!r||!n)return ne(e,t);let i={...r};return e=>(i.red=nt(r.red,n.red,e),i.green=nt(r.green,n.green,e),i.blue=nt(r.blue,n.blue,e),i.alpha=r4(r.alpha,n.alpha,e),ro.transform(i))},ns=(e,t)=>r=>t(e(r)),na=(...e)=>e.reduce(ns),nl=new Set(["none","hidden"]);function nu(e,t){return r=>r4(e,t,r)}function nc(e){return"number"==typeof e?nu:"string"==typeof e?rQ(e)?ne:rm.test(e)?no:np:Array.isArray(e)?nd:"object"==typeof e?rm.test(e)?no:nh:ne}function nd(e,t){let r=[...e],n=r.length,i=e.map((e,r)=>nc(e)(e,t[r]));return e=>{for(let t=0;t<n;t++)r[t]=i[t](e);return r}}function nh(e,t){let r={...e,...t},n={};for(let i in r)void 0!==e[i]&&void 0!==t[i]&&(n[i]=nc(e[i])(e[i],t[i]));return e=>{for(let t in n)r[t]=n[t](e);return r}}let np=(e,t)=>{let r=rT.createTransformer(t),n=rx(e),i=rx(t);return n.indexes.var.length===i.indexes.var.length&&n.indexes.color.length===i.indexes.color.length&&n.indexes.number.length>=i.indexes.number.length?nl.has(e)&&!i.values.length||nl.has(t)&&!n.values.length?nl.has(e)?r=>r<=0?e:t:r=>r>=1?t:e:na(nd(function(e,t){var r;let n=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){let s=t.types[o],a=e.indexes[s][i[s]],l=null!==(r=e.values[a])&&void 0!==r?r:0;n[o]=l,i[s]++}return n}(n,i),i.values),r):(tw(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ne(e,t))};function nf(e,t,r){return"number"==typeof e&&"number"==typeof t&&"number"==typeof r?r4(e,t,r):nc(e)(e,t)}function nm(e,t,r){var n,i;let o=Math.max(t-5,0);return n=r-e(o),(i=t-o)?1e3/i*n:0}let ng={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function nv(e,t){return e*Math.sqrt(1-t*t)}let ny=["duration","bounce"],nw=["stiffness","damping","mass"];function nx(e,t){return t.some(t=>void 0!==e[t])}function nb(e=ng.visualDuration,t=ng.bounce){let r;let n="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:i,restDelta:o}=n,s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:u,damping:c,mass:d,duration:h,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:ng.velocity,stiffness:ng.stiffness,damping:ng.damping,mass:ng.mass,isResolvedFromDuration:!1,...e};if(!nx(e,nw)&&nx(e,ny)){if(e.visualDuration){let r=2*Math.PI/(1.2*e.visualDuration),n=r*r,i=2*t8(.05,1,1-(e.bounce||0))*Math.sqrt(n);t={...t,mass:ng.mass,stiffness:n,damping:i}}else{let r=function({duration:e=ng.duration,bounce:t=ng.bounce,velocity:r=ng.velocity,mass:n=ng.mass}){let i,o;tw(e<=tv(ng.maxDuration),"Spring duration must be 10 seconds or less");let s=1-t;s=t8(ng.minDamping,ng.maxDamping,s),e=t8(ng.minDuration,ng.maxDuration,ty(e)),s<1?(i=t=>{let n=t*s,i=n*e;return .001-(n-r)/nv(t,s)*Math.exp(-i)},o=t=>{let n=t*s*e,o=Math.pow(s,2)*Math.pow(t,2)*e,a=nv(Math.pow(t,2),s);return(n*r+r-o)*Math.exp(-n)*(-i(t)+.001>0?-1:1)/a}):(i=t=>-.001+Math.exp(-t*e)*((t-r)*e+1),o=t=>e*e*(r-t)*Math.exp(-t*e));let a=function(e,t,r){let n=r;for(let r=1;r<12;r++)n-=e(n)/t(n);return n}(i,o,5/e);if(e=tv(e),isNaN(a))return{stiffness:ng.stiffness,damping:ng.damping,duration:e};{let t=Math.pow(a,2)*n;return{stiffness:t,damping:2*s*Math.sqrt(n*t),duration:e}}}(e);(t={...t,...r,mass:ng.mass}).isResolvedFromDuration=!0}}return t}({...n,velocity:-ty(n.velocity||0)}),m=p||0,g=c/(2*Math.sqrt(u*d)),v=a-s,y=ty(Math.sqrt(u/d)),w=5>Math.abs(v);if(i||(i=w?ng.restSpeed.granular:ng.restSpeed.default),o||(o=w?ng.restDelta.granular:ng.restDelta.default),g<1){let e=nv(y,g);r=t=>a-Math.exp(-g*y*t)*((m+g*y*v)/e*Math.sin(e*t)+v*Math.cos(e*t))}else if(1===g)r=e=>a-Math.exp(-y*e)*(v+(m+y*v)*e);else{let e=y*Math.sqrt(g*g-1);r=t=>{let r=Math.exp(-g*y*t),n=Math.min(e*t,300);return a-r*((m+g*y*v)*Math.sinh(n)+e*v*Math.cosh(n))/e}}let x={calculatedDuration:f&&h||null,next:e=>{let t=r(e);if(f)l.done=e>=h;else{let n=0;g<1&&(n=0===e?tv(m):nm(r,e,t));let s=Math.abs(n)<=i,u=Math.abs(a-t)<=o;l.done=s&&u}return l.value=l.done?a:t,l},toString:()=>{let e=Math.min(e3(x),2e4),t=tn(t=>x.next(e*t).value,e,30);return e+"ms "+t}};return x}function nE({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){let d,h;let p=e[0],f={done:!1,value:p},m=e=>void 0!==a&&e<a||void 0!==l&&e>l,g=e=>void 0===a?l:void 0===l?a:Math.abs(a-e)<Math.abs(l-e)?a:l,v=r*t,y=p+v,w=void 0===s?y:s(y);w!==y&&(v=w-p);let x=e=>-v*Math.exp(-e/n),b=e=>w+x(e),E=e=>{let t=x(e),r=b(e);f.done=Math.abs(t)<=u,f.value=f.done?w:r},C=e=>{m(f.value)&&(d=e,h=nb({keyframes:[f.value,g(f.value)],velocity:nm(b,e,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return(h||void 0!==d||(t=!0,E(e),C(e)),void 0!==d&&e>=d)?h.next(e-d):(t||E(e),f)}}}let nC=tY(.42,0,1,1),nT=tY(0,0,.58,1),nP=tY(.42,0,.58,1),nk=e=>Array.isArray(e)&&"number"!=typeof e[0],nS={linear:tw,easeIn:nC,easeInOut:nP,easeOut:nT,circIn:t0,circInOut:t2,circOut:t1,backIn:tQ,backInOut:tG,backOut:tX,anticipate:tJ},nA=e=>{if(e9(e)){tw(4===e.length,"Cubic bezier arrays must contain four numerical values.");let[t,r,n,i]=e;return tY(t,r,n,i)}return"string"==typeof e?(tw(void 0!==nS[e],`Invalid easing type '${e}'`),nS[e]):e};function nj({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){let i=nk(n)?n.map(nA):nA(n),o={done:!1,value:t[0]},s=function(e,t,{clamp:r=!0,ease:n,mixer:i}={}){let o=e.length;if(tw(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];let s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let a=function(e,t,r){let n=[],i=r||nf,o=e.length-1;for(let r=0;r<o;r++){let o=i(e[r],e[r+1]);t&&(o=na(Array.isArray(t)?t[r]||tw:t,o)),n.push(o)}return n}(t,n,i),l=a.length,u=r=>{if(s&&r<e[0])return t[0];let n=0;if(l>1)for(;n<e.length-2&&!(r<e[n+1]);n++);let i=tr(e[n],e[n+1],r);return a[n](i)};return r?t=>u(t8(e[0],e[o-1],t)):u}((r&&r.length===t.length?r:function(e){let t=[0];return function(e,t){let r=e[e.length-1];for(let n=1;n<=t;n++){let i=tr(0,t,n);e.push(r4(r,1,i))}}(t,e.length-1),t}(t)).map(t=>t*e),t,{ease:Array.isArray(i)?i:t.map(()=>i||nP).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(o.value=s(t),o.done=t>=e,o)}}let nR=e=>{let t=({timestamp:t})=>e(t);return{start:()=>tA.update(t,!0),stop:()=>tj(t),now:()=>tR.isProcessing?tR.timestamp:tN.now()}},nM={decay:nE,inertia:nE,tween:nj,keyframes:nj,spring:nb},nD=e=>e/100;class nN extends r7{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();let{onStop:e}=this.options;e&&e()};let{name:t,motionValue:r,element:n,keyframes:i}=this.options,o=(null==n?void 0:n.KeyframeResolver)||r$;this.resolver=new o(i,(e,t)=>this.onKeyframesResolved(e,t),t,r,n),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){let t,r;let{type:n="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s,velocity:a=0}=this.options,l=e7(n)?n:nM[n]||nj;l!==nj&&"number"!=typeof e[0]&&(t=na(nD,nf(e[0],e[1])),e=[0,100]);let u=l({...this.options,keyframes:e});"mirror"===s&&(r=l({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===u.calculatedDuration&&(u.calculatedDuration=e3(u));let{calculatedDuration:c}=u,d=c+o;return{generator:u,mirroredGenerator:r,mapPercentToKeyframes:t,calculatedDuration:c,resolvedDuration:d,totalDuration:d*(i+1)-o}}onPostResolved(){let{autoplay:e=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e,t=!1){let{resolved:r}=this;if(!r){let{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}let{finalKeyframe:n,generator:i,mirroredGenerator:o,mapPercentToKeyframes:s,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=r;if(null===this.startTime)return i.next(0);let{delay:d,repeat:h,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;let g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let y=this.currentTime,w=i;if(h){let e=Math.min(this.currentTime,u)/c,t=Math.floor(e),r=e%1;!r&&e>=1&&(r=1),1===r&&t--,(t=Math.min(t,h+1))%2&&("reverse"===p?(r=1-r,f&&(r-=f/c)):"mirror"===p&&(w=o)),y=t8(0,1,r)*c}let x=v?{done:!1,value:a[0]}:w.next(y);s&&(x.value=s(x.value));let{done:b}=x;v||null===l||(b=this.speed>=0?this.currentTime>=u:this.currentTime<=0);let E=null===this.holdTime&&("finished"===this.state||"running"===this.state&&b);return E&&void 0!==n&&(x.value=r3(a,this.options,n)),m&&m(x.value),E&&this.finish(),x}get duration(){let{resolved:e}=this;return e?ty(e.calculatedDuration):0}get time(){return ty(this.currentTime)}set time(e){e=tv(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ty(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;let{driver:e=nR,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),t&&t();let n=this.driver.now();null!==this.holdTime?this.startTime=n-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=n):this.startTime=null!=r?r:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=null!==(e=this.currentTime)&&void 0!==e?e:0}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";let{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}let nL=new Set(["opacity","clipPath","filter","transform"]),nI=e1(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),nV={anticipate:tJ,backInOut:tG,circInOut:t2};class nF extends r7{constructor(e){super(e);let{name:t,motionValue:r,element:n,keyframes:i}=this.options;this.resolver=new r5(i,(e,t)=>this.onKeyframesResolved(e,t),t,r,n),this.resolver.scheduleResolve()}initPlayback(e,t){var r;let{duration:n=300,times:i,ease:o,type:s,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if("string"==typeof o&&tt()&&o in nV&&(o=nV[o]),e7((r=this.options).type)||"spring"===r.type||!function e(t){return!!("function"==typeof t&&tt()||!t||"string"==typeof t&&(t in to||tt())||e9(t)||Array.isArray(t)&&t.every(e))}(r.ease)){let{onComplete:t,onUpdate:r,motionValue:a,element:l,...u}=this.options,c=function(e,t){let r=new nN({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0}),n={done:!1,value:e[0]},i=[],o=0;for(;!n.done&&o<2e4;)i.push((n=r.sample(o)).value),o+=10;return{times:void 0,keyframes:i,duration:o-10,ease:"linear"}}(e,u);1===(e=c.keyframes).length&&(e[1]=e[0]),n=c.duration,i=c.times,o=c.ease,s="keyframes"}let c=function(e,t,r,{delay:n=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeInOut",times:l}={}){let u={[t]:r};l&&(u.offset=l);let c=function e(t,r){if(t)return"function"==typeof t&&tt()?tn(t,r):e9(t)?ti(t):Array.isArray(t)?t.map(t=>e(t,r)||to.easeOut):to[t]}(a,i);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:n,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===s?"alternate":"normal"})}(a.owner.current,l,e,{...this.options,duration:n,times:i,ease:o});return c.startTime=null!=u?u:this.calcStartTime(),this.pendingTimeline?(e4(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{let{onComplete:r}=this.options;a.set(r3(e,this.options,t)),r&&r(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:n,times:i,type:s,ease:o,keyframes:e}}get duration(){let{resolved:e}=this;if(!e)return 0;let{duration:t}=e;return ty(t)}get time(){let{resolved:e}=this;if(!e)return 0;let{animation:t}=e;return ty(t.currentTime||0)}set time(e){let{resolved:t}=this;if(!t)return;let{animation:r}=t;r.currentTime=tv(e)}get speed(){let{resolved:e}=this;if(!e)return 1;let{animation:t}=e;return t.playbackRate}set speed(e){let{resolved:t}=this;if(!t)return;let{animation:r}=t;r.playbackRate=e}get state(){let{resolved:e}=this;if(!e)return"idle";let{animation:t}=e;return t.playState}get startTime(){let{resolved:e}=this;if(!e)return null;let{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){let{resolved:t}=this;if(!t)return tw;let{animation:r}=t;e4(r,e)}else this.pendingTimeline=e;return tw}play(){if(this.isStopped)return;let{resolved:e}=this;if(!e)return;let{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){let{resolved:e}=this;if(!e)return;let{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();let{resolved:e}=this;if(!e)return;let{animation:t,keyframes:r,duration:n,type:i,ease:o,times:s}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){let{motionValue:e,onUpdate:t,onComplete:a,element:l,...u}=this.options,c=new nN({...u,keyframes:r,duration:n,type:i,ease:o,times:s,isGenerator:!0}),d=tv(this.time);e.setWithVelocity(c.sample(d-10).value,c.sample(d).value,10)}let{onStop:a}=this.options;a&&a(),this.cancel()}complete(){let{resolved:e}=this;e&&e.animation.finish()}cancel(){let{resolved:e}=this;e&&e.animation.cancel()}static supports(e){let{motionValue:t,name:r,repeatDelay:n,repeatType:i,damping:o,type:s}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;let{onUpdate:a,transformTemplate:l}=t.owner.getProps();return nI()&&r&&nL.has(r)&&!a&&!l&&!n&&"mirror"!==i&&0!==o&&"inertia"!==s}}let nO={type:"spring",stiffness:500,damping:25,restSpeed:10},nB=e=>({type:"spring",stiffness:550,damping:0===e?2*Math.sqrt(550):30,restSpeed:10}),nU={type:"keyframes",duration:.8},nz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nW=(e,{keyframes:t})=>t.length>2?nU:tb.has(e)?e.startsWith("scale")?nB(t[1]):nO:nz,n_=(e,t,r,n={},i,o)=>s=>{let a=e6(n,e)||{},l=a.delay||n.delay||0,{elapsed:u=0}=n;u-=tv(l);let c={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};!function({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(a)&&(c={...c,...nW(e,c)}),c.duration&&(c.duration=tv(c.duration)),c.repeatDelay&&(c.repeatDelay=tv(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let d=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(c.duration=0,0!==c.delay||(d=!0)),(tK.current||tP.skipAnimations)&&(d=!0,c.duration=0,c.delay=0),d&&!o&&void 0!==t.get()){let e=r3(c.keyframes,a);if(void 0!==e)return tA.update(()=>{c.onUpdate(e),c.onComplete()}),new e8([])}return!o&&nF.supports(c)?new nF(c):new nN(c)};function nH(e,t,{delay:r=0,transitionOverride:n,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;n&&(s=n);let u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(let t in l){let n=e.getValue(t,null!==(o=e.latestValues[t])&&void 0!==o?o:null),i=l[t];if(void 0===i||c&&function({protectedKeys:e,needsAnimating:t},r){let n=e.hasOwnProperty(r)&&!0!==t[r];return t[r]=!1,n}(c,t))continue;let a={delay:r,...e6(s||{},t)},d=!1;if(window.MotionHandoffAnimation){let r=e.props[tH];if(r){let e=window.MotionHandoffAnimation(r,t,tA);null!==e&&(a.startTime=e,d=!0)}}tW(e,t),n.start(n_(t,n,i,e.shouldReduceMotion&&tE.has(t)?{type:!1}:a,e,d));let h=n.animation;h&&u.push(h)}return a&&Promise.all(u).then(()=>{tA.update(()=>{a&&function(e,t){let{transitionEnd:r={},transition:n={},...i}=eG(e,t)||{};for(let t in i={...i,...r}){let r=tT(i[t]);e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,tU(r))}}(e,a)})}),u}function nK(e,t,r={}){var n;let i=eG(e,t,"exit"===r.type?null===(n=e.presenceContext)||void 0===n?void 0:n.custom:void 0),{transition:o=e.getDefaultTransition()||{}}=i||{};r.transitionOverride&&(o=r.transitionOverride);let s=i?()=>Promise.all(nH(e,i,r)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(n=0)=>{let{delayChildren:i=0,staggerChildren:s,staggerDirection:a}=o;return function(e,t,r=0,n=0,i=1,o){let s=[],a=(e.variantChildren.size-1)*n,l=1===i?(e=0)=>e*n:(e=0)=>a-e*n;return Array.from(e.variantChildren).sort(n$).forEach((e,n)=>{e.notify("AnimationStart",t),s.push(nK(e,t,{...o,delay:r+l(n)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(s)}(e,t,i+n,s,a,r)}:()=>Promise.resolve(),{when:l}=o;if(!l)return Promise.all([s(),a(r.delay)]);{let[e,t]="beforeChildren"===l?[s,a]:[a,s];return e().then(()=>t())}}function n$(e,t){return e.sortNodePosition(t)}let nY=e0.length,nq=[...eJ].reverse(),nZ=eJ.length;function nX(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nQ(){return{animate:nX(!0),whileInView:nX(),whileHover:nX(),whileTap:nX(),whileDrag:nX(),whileFocus:nX(),exit:nX()}}class nG{constructor(e){this.isMounted=!1,this.node=e}update(){}}class nJ extends nG{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:r})=>(function(e,t,r={}){let n;if(e.notify("AnimationStart",t),Array.isArray(t))n=Promise.all(t.map(t=>nK(e,t,r)));else if("string"==typeof t)n=nK(e,t,r);else{let i="function"==typeof t?eG(e,t,r.custom):t;n=Promise.all(nH(e,i,r))}return n.then(()=>{e.notify("AnimationComplete",t)})})(e,t,r))),r=nQ(),n=!0,i=t=>(r,n)=>{var i;let o=eG(e,n,"exit"===t?null===(i=e.presenceContext)||void 0===i?void 0:i.custom:void 0);if(o){let{transition:e,transitionEnd:t,...n}=o;r={...r,...n,...t}}return r};function o(o){let{props:s}=e,a=function e(t){if(!t)return;if(!t.isControllingVariants){let r=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(r.initial=t.props.initial),r}let r={};for(let e=0;e<nY;e++){let n=e0[e],i=t.props[n];(eZ(i)||!1===i)&&(r[n]=i)}return r}(e.parent)||{},l=[],u=new Set,c={},d=1/0;for(let t=0;t<nZ;t++){var h;let p=nq[t],f=r[p],m=void 0!==s[p]?s[p]:a[p],g=eZ(m),v=p===o?f.isActive:null;!1===v&&(d=t);let y=m===a[p]&&m!==s[p]&&g;if(y&&n&&e.manuallyAnimateOnMount&&(y=!1),f.protectedKeys={...c},!f.isActive&&null===v||!m&&!f.prevProp||e$(m)||"boolean"==typeof m)continue;let w=(h=f.prevProp,"string"==typeof m?m!==h:!!Array.isArray(m)&&!eq(m,h)),x=w||p===o&&f.isActive&&!y&&g||t>d&&g,b=!1,E=Array.isArray(m)?m:[m],C=E.reduce(i(p),{});!1===v&&(C={});let{prevResolvedValues:T={}}=f,P={...T,...C},k=t=>{x=!0,u.has(t)&&(b=!0,u.delete(t)),f.needsAnimating[t]=!0;let r=e.getValue(t);r&&(r.liveStyle=!1)};for(let e in P){let t=C[e],r=T[e];if(!c.hasOwnProperty(e))(eY(t)&&eY(r)?eq(t,r):t===r)?void 0!==t&&u.has(e)?k(e):f.protectedKeys[e]=!0:null!=t?k(e):u.add(e)}f.prevProp=m,f.prevResolvedValues=C,f.isActive&&(c={...c,...C}),n&&e.blockInitialAnimation&&(x=!1);let S=!(y&&w)||b;x&&S&&l.push(...E.map(e=>({animation:e,options:{type:p}})))}if(u.size){let t={};u.forEach(r=>{let n=e.getBaseTarget(r),i=e.getValue(r);i&&(i.liveStyle=!0),t[r]=null!=n?n:null}),l.push({animation:t})}let p=!!l.length;return n&&(!1===s.initial||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),n=!1,p?t(l):Promise.resolve()}return{animateChanges:o,setActive:function(t,n){var i;if(r[t].isActive===n)return Promise.resolve();null===(i=e.variantChildren)||void 0===i||i.forEach(e=>{var r;return null===(r=e.animationState)||void 0===r?void 0:r.setActive(t,n)}),r[t].isActive=n;let s=o(t);for(let e in r)r[e].protectedKeys={};return s},setAnimateFunction:function(r){t=r(e)},getState:()=>r,reset:()=>{r=nQ(),n=!0}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();e$(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),null===(e=this.unmountControls)||void 0===e||e.call(this)}}let n0=0;class n1 extends nG{constructor(){super(...arguments),this.id=n0++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;let n=this.node.animationState.setActive("exit",!e);t&&!e&&n.then(()=>t(this.id))}mount(){let{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}function n2(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}function n5(e){return{point:{x:e.pageX,y:e.pageY}}}let n8=e=>t=>tc(t)&&e(t,n5(t));function n6(e,t,r,n){return n2(e,t,n8(r),n)}let n3=(e,t)=>Math.abs(e-t);class n7{constructor(e,t,{transformPagePoint:r,contextWindow:n,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{var e,t;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let r=ie(this.lastMoveEventInfo,this.history),n=null!==this.startEvent,i=(e=r.offset,t={x:0,y:0},Math.sqrt(n3(e.x,t.x)**2+n3(e.y,t.y)**2)>=3);if(!n&&!i)return;let{point:o}=r,{timestamp:s}=tR;this.history.push({...o,timestamp:s});let{onStart:a,onMove:l}=this.handlers;n||(a&&a(this.lastMoveEvent,r),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,r)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=n4(t,this.transformPagePoint),tA.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:r,onSessionEnd:n,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=ie("pointercancel"===e.type?this.lastMoveEventInfo:n4(t,this.transformPagePoint),this.history);this.startEvent&&r&&r(e,o),n&&n(e,o)},!tc(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=r,this.contextWindow=n||window;let o=n4(n5(e),this.transformPagePoint),{point:s}=o,{timestamp:a}=tR;this.history=[{...s,timestamp:a}];let{onSessionStart:l}=t;l&&l(e,ie(o,this.history)),this.removeListeners=na(n6(this.contextWindow,"pointermove",this.handlePointerMove),n6(this.contextWindow,"pointerup",this.handlePointerUp),n6(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tj(this.updatePoint)}}function n4(e,t){return t?{point:t(e.point)}:e}function n9(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ie({point:e},t){return{point:e,delta:n9(e,it(t)),offset:n9(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null,i=it(e);for(;r>=0&&(n=e[r],!(i.timestamp-n.timestamp>tv(.1)));)r--;if(!n)return{x:0,y:0};let o=ty(i.timestamp-n.timestamp);if(0===o)return{x:0,y:0};let s={x:(i.x-n.x)/o,y:(i.y-n.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}(t,0)}}function it(e){return e[e.length-1]}function ir(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function ii(e){return e.max-e.min}function io(e,t,r,n=.5){e.origin=n,e.originPoint=r4(t.min,t.max,e.origin),e.scale=ii(r)/ii(t),e.translate=r4(r.min,r.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function is(e,t,r,n){io(e.x,t.x,r.x,n?n.originX:void 0),io(e.y,t.y,r.y,n?n.originY:void 0)}function ia(e,t,r){e.min=r.min+t.min,e.max=e.min+ii(t)}function il(e,t,r){e.min=t.min-r.min,e.max=e.min+ii(t)}function iu(e,t,r){il(e.x,t.x,r.x),il(e.y,t.y,r.y)}function ic(e,t,r){return{min:void 0!==t?e.min+t:void 0,max:void 0!==r?e.max+r-(e.max-e.min):void 0}}function id(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function ih(e,t,r){return{min:ip(e,t),max:ip(e,r)}}function ip(e,t){return"number"==typeof e?e:e[t]||0}let im=()=>({translate:0,scale:1,origin:0,originPoint:0}),ig=()=>({x:im(),y:im()}),iv=()=>({min:0,max:0}),iy=()=>({x:iv(),y:iv()});function iw(e){return[e("x"),e("y")]}function ix({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function ib(e){return void 0===e||1===e}function iE({scale:e,scaleX:t,scaleY:r}){return!ib(e)||!ib(t)||!ib(r)}function iC(e){return iE(e)||iT(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function iT(e){var t,r;return(t=e.x)&&"0%"!==t||(r=e.y)&&"0%"!==r}function iP(e,t,r,n,i){return void 0!==i&&(e=n+i*(e-n)),n+r*(e-n)+t}function ik(e,t=0,r=1,n,i){e.min=iP(e.min,t,r,n,i),e.max=iP(e.max,t,r,n,i)}function iS(e,{x:t,y:r}){ik(e.x,t.translate,t.scale,t.originPoint),ik(e.y,r.translate,r.scale,r.originPoint)}function iA(e,t){e.min=e.min+t,e.max=e.max+t}function ij(e,t,r,n,i=.5){let o=r4(e.min,e.max,i);ik(e,t,r,o,n)}function iR(e,t){ij(e.x,t.x,t.scaleX,t.scale,t.originX),ij(e.y,t.y,t.scaleY,t.scale,t.originY)}function iM(e,t){return ix(function(e,t){if(!t)return e;let r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}(e.getBoundingClientRect(),t))}let iD=({current:e})=>e?e.ownerDocument.defaultView:null,iN=new WeakMap;class iL{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=iy(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){let{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;let{dragSnapToOrigin:n}=this.getProps();this.panSession=new n7(e,{onSessionStart:e=>{let{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(n5(e).point)},onStart:(e,t)=>{let{drag:r,dragPropagation:n,onDragStart:i}=this.getProps();if(r&&!n&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===r||"y"===r?ts[r]?null:(ts[r]=!0,()=>{ts[r]=!1}):ts.x||ts.y?null:(ts.x=ts.y=!0,()=>{ts.x=ts.y=!1}),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),iw(e=>{let t=this.getAxisMotionValue(e).get()||0;if(ru.test(t)){let{projection:r}=this.visualElement;if(r&&r.layout){let n=r.layout.layoutBox[e];if(n){let e=ii(n);t=parseFloat(t)/100*e}}}this.originPoint[e]=t}),i&&tA.postRender(()=>i(e,t)),tW(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{let{dragPropagation:r,dragDirectionLock:n,onDirectionLock:i,onDrag:o}=this.getProps();if(!r&&!this.openDragLock)return;let{offset:s}=t;if(n&&null===this.currentDirection){this.currentDirection=function(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}(s),null!==this.currentDirection&&i&&i(this.currentDirection);return}this.updateAxis("x",t.point,s),this.updateAxis("y",t.point,s),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>iw(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:n,contextWindow:iD(this.visualElement)})}stop(e,t){let r=this.isDragging;if(this.cancel(),!r)return;let{velocity:n}=t;this.startAnimation(n);let{onDragEnd:i}=this.getProps();i&&tA.postRender(()=>i(e,t))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){let{drag:n}=this.getProps();if(!r||!iI(e,n,this.currentDirection))return;let i=this.getAxisMotionValue(e),o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:r},n){return void 0!==t&&e<t?e=n?r4(t,e,n.min):Math.max(e,t):void 0!==r&&e>r&&(e=n?r4(r,e,n.max):Math.min(e,r)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;let{dragConstraints:t,dragElastic:r}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&ir(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&n?this.constraints=function(e,{top:t,left:r,bottom:n,right:i}){return{x:ic(e.x,r,i),y:ic(e.y,t,n)}}(n.layoutBox,t):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:ih(e,"left","right"),y:ih(e,"top","bottom")}}(r),i!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&iw(e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){let r={};return void 0!==t.min&&(r.min=t.min-e.min),void 0!==t.max&&(r.max=t.max-e.min),r}(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!ir(t))return!1;let n=t.current;tw(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:i}=this.visualElement;if(!i||!i.layout)return!1;let o=function(e,t,r){let n=iM(e,r),{scroll:i}=t;return i&&(iA(n.x,i.offset.x),iA(n.y,i.offset.y)),n}(n,i.root,this.visualElement.getTransformPagePoint()),s={x:id((e=i.layout.layoutBox).x,o.x),y:id(e.y,o.y)};if(r){let e=r(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(s));this.hasMutatedConstraints=!!e,e&&(s=ix(e))}return s}startAnimation(e){let{drag:t,dragMomentum:r,dragElastic:n,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:s}=this.getProps(),a=this.constraints||{};return Promise.all(iw(s=>{if(!iI(s,t,this.currentDirection))return;let l=a&&a[s]||{};o&&(l={min:0,max:0});let u={type:"inertia",velocity:r?e[s]:0,bounceStiffness:n?200:1e6,bounceDamping:n?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(s,u)})).then(s)}startAxisValueAnimation(e,t){let r=this.getAxisMotionValue(e);return tW(this.visualElement,e),r.start(n_(e,r,0,t,this.visualElement,!1))}stopAnimation(){iw(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){iw(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps();return r[t]||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){iw(t=>{let{drag:r}=this.getProps();if(!iI(t,r,this.currentDirection))return;let{projection:n}=this.visualElement,i=this.getAxisMotionValue(t);if(n&&n.layout){let{min:r,max:o}=n.layout.layoutBox[t];i.set(e[t]-r4(r,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!ir(t)||!r||!this.constraints)return;this.stopAnimation();let n={x:0,y:0};iw(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){let r=t.get();n[e]=function(e,t){let r=.5,n=ii(e),i=ii(t);return i>n?r=tr(t.min,t.max-n,e.min):n>i&&(r=tr(e.min,e.max-i,t.min)),t8(0,1,r)}({min:r,max:r},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),iw(t=>{if(!iI(t,e,null))return;let r=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];r.set(r4(i,o,n[t]))})}addListeners(){if(!this.visualElement.current)return;iN.set(this.visualElement,this);let e=n6(this.visualElement.current,"pointerdown",e=>{let{drag:t,dragListener:r=!0}=this.getProps();t&&r&&this.start(e)}),t=()=>{let{dragConstraints:e}=this.getProps();ir(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,n=r.addEventListener("measure",t);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),tA.read(t);let i=n2(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(iw(t=>{let r=this.getAxisMotionValue(t);r&&(this.originPoint[t]+=e[t].translate,r.set(r.get()+e[t].translate))}),this.visualElement.render())});return()=>{i(),e(),n(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:n=!1,dragConstraints:i=!1,dragElastic:o=.35,dragMomentum:s=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:n,dragConstraints:i,dragElastic:o,dragMomentum:s}}}function iI(e,t,r){return(!0===t||t===e)&&(null===r||r===e)}class iV extends nG{constructor(e){super(e),this.removeGroupControls=tw,this.removeListeners=tw,this.controls=new iL(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tw}unmount(){this.removeGroupControls(),this.removeListeners()}}let iF=e=>(t,r)=>{e&&tA.postRender(()=>e(t,r))};class iO extends nG{constructor(){super(...arguments),this.removePointerDownListener=tw}onPointerDown(e){this.session=new n7(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:iD(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:n}=this.node.getProps();return{onSessionStart:iF(e),onStart:iF(t),onMove:r,onEnd:(e,t)=>{delete this.session,n&&tA.postRender(()=>n(e,t))}}}mount(){this.removePointerDownListener=n6(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let iB=(0,x.createContext)(null);function iU(e=!0){let t=(0,x.useContext)(iB);if(null===t)return[!0,null];let{isPresent:r,onExitComplete:n,register:i}=t,o=(0,x.useId)();(0,x.useEffect)(()=>{e&&i(o)},[e]);let s=(0,x.useCallback)(()=>e&&n&&n(o),[o,n,e]);return!r&&n?[!1,s]:[!0]}let iz=(0,x.createContext)({}),iW=(0,x.createContext)({}),i_={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function iH(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let iK={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e){if(!rc.test(e))return e;e=parseFloat(e)}let r=iH(e,t.target.x),n=iH(e,t.target.y);return`${r}% ${n}%`}},i$={},{schedule:iY,cancel:iq}=tS(queueMicrotask,!1);class iZ extends x.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:n}=this.props,{projection:i}=e;Object.assign(i$,iQ),i&&(t.group&&t.group.add(i),r&&r.register&&n&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),i_.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:r,drag:n,isPresent:i}=this.props,o=r.projection;return o&&(o.isPresent=i,n||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent===i||(i?o.promote():o.relegate()||tA.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),iY.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:n}=e;n&&(n.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(n),r&&r.deregister&&r.deregister(n))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function iX(e){let[t,r]=iU(),n=(0,x.useContext)(iz);return(0,R.jsx)(iZ,{...e,layoutGroup:n,switchLayoutGroup:(0,x.useContext)(iW),isPresent:t,safeToRemove:r})}let iQ={borderRadius:{...iK,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:iK,borderTopRightRadius:iK,borderBottomLeftRadius:iK,borderBottomRightRadius:iK,boxShadow:{correct:(e,{treeScale:t,projectionDelta:r})=>{let n=rT.parse(e);if(n.length>5)return e;let i=rT.createTransformer(e),o="number"!=typeof n[0]?1:0,s=r.x.scale*t.x,a=r.y.scale*t.y;n[0+o]/=s,n[1+o]/=a;let l=r4(s,a,.5);return"number"==typeof n[2+o]&&(n[2+o]/=l),"number"==typeof n[3+o]&&(n[3+o]/=l),i(n)}}},iG=(e,t)=>e.depth-t.depth;class iJ{constructor(){this.children=[],this.isDirty=!1}add(e){tL(this.children,e),this.isDirty=!0}remove(e){tI(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(iG),this.isDirty=!1,this.children.forEach(e)}}function i0(e){let t=tz(e)?e.get():e;return tC(t)?t.toValue():t}let i1=["TopLeft","TopRight","BottomLeft","BottomRight"],i2=i1.length,i5=e=>"string"==typeof e?parseFloat(e):e,i8=e=>"number"==typeof e||rc.test(e);function i6(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let i3=i4(0,.5,t1),i7=i4(.5,.95,tw);function i4(e,t,r){return n=>n<e?0:n>t?1:r(tr(e,t,n))}function i9(e,t){e.min=t.min,e.max=t.max}function oe(e,t){i9(e.x,t.x),i9(e.y,t.y)}function ot(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function or(e,t,r,n,i){return e-=t,e=n+1/r*(e-n),void 0!==i&&(e=n+1/i*(e-n)),e}function on(e,t,[r,n,i],o,s){!function(e,t=0,r=1,n=.5,i,o=e,s=e){if(ru.test(t)&&(t=parseFloat(t),t=r4(s.min,s.max,t/100)-s.min),"number"!=typeof t)return;let a=r4(o.min,o.max,n);e===o&&(a-=t),e.min=or(e.min,t,r,a,i),e.max=or(e.max,t,r,a,i)}(e,t[r],t[n],t[i],t.scale,o,s)}let oi=["x","scaleX","originX"],oo=["y","scaleY","originY"];function os(e,t,r,n){on(e.x,t,oi,r?r.x:void 0,n?n.x:void 0),on(e.y,t,oo,r?r.y:void 0,n?n.y:void 0)}function oa(e){return 0===e.translate&&1===e.scale}function ol(e){return oa(e.x)&&oa(e.y)}function ou(e,t){return e.min===t.min&&e.max===t.max}function oc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function od(e,t){return oc(e.x,t.x)&&oc(e.y,t.y)}function oh(e){return ii(e.x)/ii(e.y)}function op(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class of{constructor(){this.members=[]}add(e){tL(this.members,e),e.scheduleRender()}remove(e){if(tI(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t;let r=this.members.findIndex(t=>e===t);if(0===r)return!1;for(let e=r;e>=0;e--){let r=this.members[e];if(!1!==r.isPresent){t=r;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:n}=e.options;!1===n&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let om={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},og="undefined"!=typeof window&&void 0!==window.MotionDebug,ov=["","X","Y","Z"],oy={visibility:"hidden"},ow=0;function ox(e,t,r,n){let{latestValues:i}=t;i[e]&&(r[e]=i[e],t.setStaticValue(e,0),n&&(n[e]=0))}function ob({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:i}){return class{constructor(e={},r=null==t?void 0:t()){this.id=ow++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,og&&(om.totalNodes=om.resolvedTargetDeltas=om.recalculatedProjection=0),this.nodes.forEach(oT),this.nodes.forEach(oM),this.nodes.forEach(oD),this.nodes.forEach(oP),og&&window.MotionDebug.record(om)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new iJ)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new tV),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let r=this.eventHandlers.get(e);r&&r.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t,r=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=t instanceof SVGElement&&"svg"!==t.tagName,this.instance=t;let{layoutId:n,layout:i,visualElement:o}=this.options;if(o&&!o.current&&o.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(i||n)&&(this.isLayoutDirty=!0),e){let r;let n=()=>this.root.updateBlockedByResize=!1;e(t,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(e,t){let r=tN.now(),n=({timestamp:t})=>{let i=t-r;i>=250&&(tj(n),e(i-250))};return tA.read(n,!0),()=>tj(n)}(n,0),i_.hasAnimatedSinceResize&&(i_.hasAnimatedSinceResize=!1,this.nodes.forEach(oR))})}n&&this.root.registerSharedNode(n,this),!1!==this.options.animate&&o&&(n||i)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeTargetChanged:r,layout:n})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let i=this.options.transition||o.getDefaultTransition()||oO,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=o.getProps(),l=!this.targetLayout||!od(this.targetLayout,n)||r,u=!t&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||t&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(e,u);let t={...e6(i,"layout"),onPlay:s,onComplete:a};(o.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t)}else t||oR(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=n})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tj(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(oN),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:r}=t.options;if(!r)return;let n=r.props[tH];if(window.MotionHasOptimisedAnimation(n,"transform")){let{layout:e,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",tA,!(e||r))}let{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&e(i)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:r}=this.options;if(void 0===t&&!r)return;let n=this.getTransformTemplate();this.prevTransformTemplateValue=n?n(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(oS);return}this.isUpdating||this.nodes.forEach(oA),this.isUpdating=!1,this.nodes.forEach(oj),this.nodes.forEach(oE),this.nodes.forEach(oC),this.clearAllSnapshots();let e=tN.now();tR.delta=t8(0,1e3/60,e-tR.timestamp),tR.timestamp=e,tR.isProcessing=!0,tM.update.process(tR),tM.preRender.process(tR),tM.render.process(tR),tR.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,iY.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ok),this.sharedNodes.forEach(oL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tA.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tA.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected=iy(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){let t=n(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!ol(this.projectionDelta),r=this.getTransformTemplate(),n=r?r(this.latestValues,""):void 0,o=n!==this.prevTransformTemplateValue;e&&(t||iC(this.latestValues)||o)&&(i(this.instance,n),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let r=this.measurePageBox(),n=this.removeElementScroll(r);return e&&(n=this.removeTransform(n)),oz((t=n).x),oz(t.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){var e;let{visualElement:t}=this.options;if(!t)return iy();let r=t.measureViewportBox();if(!((null===(e=this.scroll)||void 0===e?void 0:e.wasRoot)||this.path.some(o_))){let{scroll:e}=this.root;e&&(iA(r.x,e.offset.x),iA(r.y,e.offset.y))}return r}removeElementScroll(e){var t;let r=iy();if(oe(r,e),null===(t=this.scroll)||void 0===t?void 0:t.wasRoot)return r;for(let t=0;t<this.path.length;t++){let n=this.path[t],{scroll:i,options:o}=n;n!==this.root&&i&&o.layoutScroll&&(i.wasRoot&&oe(r,e),iA(r.x,i.offset.x),iA(r.y,i.offset.y))}return r}applyTransform(e,t=!1){let r=iy();oe(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&iR(r,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),iC(n.latestValues)&&iR(r,n.latestValues)}return iC(this.latestValues)&&iR(r,this.latestValues),r}removeTransform(e){let t=iy();oe(t,e);for(let e=0;e<this.path.length;e++){let r=this.path[e];if(!r.instance||!iC(r.latestValues))continue;iE(r.latestValues)&&r.updateSnapshot();let n=iy();oe(n,r.measurePageBox()),os(t,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,n)}return iC(this.latestValues)&&os(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tR.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){var t,r,n,i;let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let s=!!this.resumingFrom||this!==o;if(!(e||s&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:a,layoutId:l}=this.options;if(this.layout&&(a||l)){if(this.resolvedRelativeTargetAt=tR.timestamp,!this.targetDelta&&!this.relativeTarget){let e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=iy(),this.relativeTargetOrigin=iy(),iu(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if((this.target||(this.target=iy(),this.targetWithTransforms=iy()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),r=this.target,n=this.relativeTarget,i=this.relativeParent.target,ia(r.x,n.x,i.x),ia(r.y,n.y,i.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):oe(this.target,this.layout.layoutBox),iS(this.target,this.targetDelta)):oe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let e=this.getClosestProjectingParent();e&&!!e.resumingFrom==!!this.resumingFrom&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=iy(),this.relativeTargetOrigin=iy(),iu(this.relativeTargetOrigin,this.target,e.target),oe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}og&&om.resolvedTargetDeltas++}}}getClosestProjectingParent(){return!this.parent||iE(this.parent.latestValues)||iT(this.parent.latestValues)?void 0:this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;let t=this.getLead(),r=!!this.resumingFrom||this!==t,n=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(n=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===tR.timestamp&&(n=!1),n)return;let{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(i||o))return;oe(this.layoutCorrected,this.layout.layoutBox);let s=this.treeScale.x,a=this.treeScale.y;!function(e,t,r,n=!1){let i,o;let s=r.length;if(s){t.x=t.y=1;for(let a=0;a<s;a++){o=(i=r[a]).projectionDelta;let{visualElement:s}=i.options;(!s||!s.props.style||"contents"!==s.props.style.display)&&(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&iR(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,iS(e,o)),n&&iC(i.latestValues)&&iR(e,i.latestValues))}t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}}(this.layoutCorrected,this.treeScale,this.path,r),t.layout&&!t.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(t.target=t.layout.layoutBox,t.targetWithTransforms=iy());let{target:l}=t;if(!l){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(ot(this.prevProjectionDelta.x,this.projectionDelta.x),ot(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),is(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.treeScale.x===s&&this.treeScale.y===a&&op(this.projectionDelta.x,this.prevProjectionDelta.x)&&op(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),og&&om.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){var t;if(null===(t=this.options.visualElement)||void 0===t||t.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ig(),this.projectionDelta=ig(),this.projectionDeltaWithTransform=ig()}setAnimationOrigin(e,t=!1){let r;let n=this.snapshot,i=n?n.latestValues:{},o={...this.latestValues},s=ig();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let a=iy(),l=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,d=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(oF));this.animationProgress=0,this.mixTargetDelta=t=>{let n=t/1e3;if(oI(s.x,e.x,n),oI(s.y,e.y,n),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,h,p,f;iu(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,oV(p.x,f.x,a.x,n),oV(p.y,f.y,a.y,n),r&&(u=this.relativeTarget,h=r,ou(u.x,h.x)&&ou(u.y,h.y))&&(this.isProjectionDirty=!1),r||(r=iy()),oe(r,this.relativeTarget)}l&&(this.animationValues=o,function(e,t,r,n,i,o){i?(e.opacity=r4(0,void 0!==r.opacity?r.opacity:1,i3(n)),e.opacityExit=r4(void 0!==t.opacity?t.opacity:1,0,i7(n))):o&&(e.opacity=r4(void 0!==t.opacity?t.opacity:1,void 0!==r.opacity?r.opacity:1,n));for(let i=0;i<i2;i++){let o=`border${i1[i]}Radius`,s=i6(t,o),a=i6(r,o);(void 0!==s||void 0!==a)&&(s||(s=0),a||(a=0),0===s||0===a||i8(s)===i8(a)?(e[o]=Math.max(r4(i5(s),i5(a),n),0),(ru.test(a)||ru.test(s))&&(e[o]+="%")):e[o]=a)}(t.rotate||r.rotate)&&(e.rotate=r4(t.rotate||0,r.rotate||0,n))}(o,i,this.latestValues,n,d,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tj(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tA.update(()=>{i_.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,r){let n=tz(0)?0:tU(0);return n.start(n_("",n,1e3,r)),n.animation}(0,0,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:r,layout:n,latestValues:i}=e;if(t&&r&&n){if(this!==e&&this.layout&&n&&oW(this.options.animationType,this.layout.layoutBox,n.layoutBox)){r=this.target||iy();let t=ii(this.layout.layoutBox.x);r.x.min=e.target.x.min,r.x.max=r.x.min+t;let n=ii(this.layout.layoutBox.y);r.y.min=e.target.y.min,r.y.max=r.y.min+n}oe(t,r),iR(t,i),is(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new of),this.sharedNodes.get(e).add(t);let r=t.options.initialPromotionConfig;t.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){var e;let{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;let{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:r}={}){let n=this.getStack();n&&n.promote(this,r),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:r}=e;if((r.z||r.rotate||r.rotateX||r.rotateY||r.rotateZ||r.skewX||r.skewY)&&(t=!0),!t)return;let n={};r.z&&ox("z",e,n,this.animationValues);for(let t=0;t<ov.length;t++)ox(`rotate${ov[t]}`,e,n,this.animationValues),ox(`skew${ov[t]}`,e,n,this.animationValues);for(let t in e.render(),n)e.setStaticValue(t,n[t]),this.animationValues&&(this.animationValues[t]=n[t]);e.scheduleRender()}getProjectionStyles(e){var t,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return oy;let n={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,n.opacity="",n.pointerEvents=i0(null==e?void 0:e.pointerEvents)||"",n.transform=i?i(this.latestValues,""):"none",n;let o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){let t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=i0(null==e?void 0:e.pointerEvents)||""),this.hasProjected&&!iC(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}let s=o.animationValues||o.latestValues;this.applyTransformsToTarget(),n.transform=function(e,t,r){let n="",i=e.x.translate/t.x,o=e.y.translate/t.y,s=(null==r?void 0:r.z)||0;if((i||o||s)&&(n=`translate3d(${i}px, ${o}px, ${s}px) `),(1!==t.x||1!==t.y)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:o,skewX:s,skewY:a}=r;e&&(n=`perspective(${e}px) ${n}`),t&&(n+=`rotate(${t}deg) `),i&&(n+=`rotateX(${i}deg) `),o&&(n+=`rotateY(${o}deg) `),s&&(n+=`skewX(${s}deg) `),a&&(n+=`skewY(${a}deg) `)}let a=e.x.scale*t.x,l=e.y.scale*t.y;return(1!==a||1!==l)&&(n+=`scale(${a}, ${l})`),n||"none"}(this.projectionDeltaWithTransform,this.treeScale,s),i&&(n.transform=i(s,n.transform));let{x:a,y:l}=this.projectionDelta;for(let e in n.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,o.animationValues?n.opacity=o===this?null!==(r=null!==(t=s.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:n.opacity=o===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0,i$){if(void 0===s[e])continue;let{correct:t,applyTo:r}=i$[e],i="none"===n.transform?s[e]:t(s[e],o);if(r){let e=r.length;for(let t=0;t<e;t++)n[r[t]]=i}else n[e]=i}return this.options.layoutId&&(n.pointerEvents=o===this?i0(null==e?void 0:e.pointerEvents)||"":"none"),n}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(oS),this.root.sharedNodes.clear()}}}function oE(e){e.updateLayout()}function oC(e){var t;let r=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){let{layoutBox:t,measuredBox:n}=e.layout,{animationType:i}=e.options,o=r.source!==e.layout.source;"size"===i?iw(e=>{let n=o?r.measuredBox[e]:r.layoutBox[e],i=ii(n);n.min=t[e].min,n.max=n.min+i}):oW(i,r.layoutBox,t)&&iw(n=>{let i=o?r.measuredBox[n]:r.layoutBox[n],s=ii(t[n]);i.max=i.min+s,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[n].max=e.relativeTarget[n].min+s)});let s=ig();is(s,t,r.layoutBox);let a=ig();o?is(a,e.applyTransform(n,!0),r.measuredBox):is(a,t,r.layoutBox);let l=!ol(s),u=!1;if(!e.resumeFrom){let n=e.getClosestProjectingParent();if(n&&!n.resumeFrom){let{snapshot:i,layout:o}=n;if(i&&o){let s=iy();iu(s,r.layoutBox,i.layoutBox);let a=iy();iu(a,t,o.layoutBox),od(s,a)||(u=!0),n.options.layoutRoot&&(e.relativeTarget=a,e.relativeTargetOrigin=s,e.relativeParent=n)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:r,delta:a,layoutDelta:s,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function oT(e){og&&om.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function oP(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ok(e){e.clearSnapshot()}function oS(e){e.clearMeasurements()}function oA(e){e.isLayoutDirty=!1}function oj(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function oR(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function oM(e){e.resolveTargetDelta()}function oD(e){e.calcProjection()}function oN(e){e.resetSkewAndRotation()}function oL(e){e.removeLeadSnapshot()}function oI(e,t,r){e.translate=r4(t.translate,0,r),e.scale=r4(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function oV(e,t,r,n){e.min=r4(t.min,r.min,n),e.max=r4(t.max,r.max,n)}function oF(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let oO={duration:.45,ease:[.4,0,.1,1]},oB=e=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),oU=oB("applewebkit/")&&!oB("chrome/")?Math.round:tw;function oz(e){e.min=oU(e.min),e.max=oU(e.max)}function oW(e,t,r){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(oh(t)-oh(r)))}function o_(e){var t;return e!==e.root&&(null===(t=e.scroll)||void 0===t?void 0:t.wasRoot)}let oH=ob({attachResizeListener:(e,t)=>n2(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),oK={current:void 0},o$=ob({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!oK.current){let e=new oH({});e.mount(window),e.setOptions({layoutScroll:!0}),oK.current=e}return oK.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function oY(e,t,r){let{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover","Start"===r);let i=n["onHover"+r];i&&tA.postRender(()=>i(t,n5(t)))}class oq extends nG{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,r={}){let[n,i,o]=ta(e,r),s=tl(e=>{let{target:r}=e,n=t(e);if("function"!=typeof n||!r)return;let o=tl(e=>{n(e),r.removeEventListener("pointerleave",o)});r.addEventListener("pointerleave",o,i)});return n.forEach(e=>{e.addEventListener("pointerenter",s,i)}),o}(e,e=>(oY(this.node,e,"Start"),e=>oY(this.node,e,"End"))))}unmount(){}}class oZ extends nG{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=na(n2(this.node.current,"focus",()=>this.onFocus()),n2(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function oX(e,t,r){let{props:n}=e;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap","Start"===r);let i=n["onTap"+("End"===r?"":r)];i&&tA.postRender(()=>i(t,n5(t)))}class oQ extends nG{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,r={}){let[n,i,o]=ta(e,r),s=e=>{let n=e.currentTarget;if(!tg(e)||th.has(n))return;th.add(n);let o=t(e),s=(e,t)=>{window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",l),tg(e)&&th.has(n)&&(th.delete(n),"function"==typeof o&&o(e,{success:t}))},a=e=>{s(e,r.useGlobalTarget||tu(n,e.target))},l=e=>{s(e,!1)};window.addEventListener("pointerup",a,i),window.addEventListener("pointercancel",l,i)};return n.forEach(e=>{td.has(e.tagName)||-1!==e.tabIndex||null!==e.getAttribute("tabindex")||(e.tabIndex=0),(r.useGlobalTarget?window:e).addEventListener("pointerdown",s,i),e.addEventListener("focus",e=>tm(e,i),i)}),o}(e,e=>(oX(this.node,e,"Start"),(e,{success:t})=>oX(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}let oG=new WeakMap,oJ=new WeakMap,o0=e=>{let t=oG.get(e.target);t&&t(e)},o1=e=>{e.forEach(o0)},o2={some:0,all:1};class o5 extends nG{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:n="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:r,threshold:"number"==typeof n?n:o2[n]};return function(e,t,r){let n=function({root:e,...t}){let r=e||document;oJ.has(r)||oJ.set(r,{});let n=oJ.get(r),i=JSON.stringify(t);return n[i]||(n[i]=new IntersectionObserver(o1,{root:e,...t})),n[i]}(t);return oG.set(e,r),n.observe(e),()=>{oG.delete(e),n.unobserve(e)}}(this.node.current,o,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:r,onViewportLeave:n}=this.node.getProps(),o=t?r:n;o&&o(e)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}(e,t))&&this.startObserver()}unmount(){}}let o8=(0,x.createContext)({strict:!1}),o6=(0,x.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),o3=(0,x.createContext)({});function o7(e){return e$(e.animate)||e0.some(t=>eZ(e[t]))}function o4(e){return!!(o7(e)||e.variants)}function o9(e){return Array.isArray(e)?e.join(" "):e}let se="undefined"!=typeof window,st={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sr={};for(let e in st)sr[e]={isEnabled:t=>st[e].some(e=>!!t[e])};let sn=Symbol.for("motionComponentSymbol"),si=se?x.useLayoutEffect:x.useEffect,so=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ss(e){if("string"!=typeof e||e.includes("-"));else if(so.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}function sa(e){let t=(0,x.useRef)(null);return null===t.current&&(t.current=e()),t.current}let sl=e=>(t,r)=>{let n=(0,x.useContext)(o3),i=(0,x.useContext)(iB),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:r},n,i,o){let s={latestValues:function(e,t,r,n){let i={},o=n(e,{});for(let e in o)i[e]=i0(o[e]);let{initial:s,animate:a}=e,l=o7(e),u=o4(e);t&&u&&!l&&!1!==e.inherit&&(void 0===s&&(s=t.initial),void 0===a&&(a=t.animate));let c=!!r&&!1===r.initial,d=(c=c||!1===s)?a:s;if(d&&"boolean"!=typeof d&&!e$(d)){let t=Array.isArray(d)?d:[d];for(let r=0;r<t.length;r++){let n=eQ(e,t[r]);if(n){let{transitionEnd:e,transition:t,...r}=n;for(let e in r){let t=r[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}(n,i,o,e),renderState:t()};return r&&(s.onMount=e=>r({props:n,current:e,...s}),s.onUpdate=e=>r(e)),s})(e,t,n,i);return r?o():sa(o)},su=(e,t)=>t&&"number"==typeof e?t.transform(e):e,sc={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},sd=tx.length;function sh(e,t,r){let{style:n,vars:i,transformOrigin:o}=e,s=!1,a=!1;for(let e in t){let r=t[e];if(tb.has(e)){s=!0;continue}if(rZ(e)){i[e]=r;continue}{let t=su(r,rR[e]);e.startsWith("origin")?(a=!0,o[e]=t):n[e]=t}}if(!t.transform&&(s||r?n.transform=function(e,t,r){let n="",i=!0;for(let o=0;o<sd;o++){let s=tx[o],a=e[s];if(void 0===a)continue;let l=!0;if(!(l="number"==typeof a?a===(s.startsWith("scale")?1:0):0===parseFloat(a))||r){let e=su(a,rR[s]);if(!l){i=!1;let t=sc[s]||s;n+=`${t}(${e}) `}r&&(t[s]=e)}}return n=n.trim(),r?n=r(t,i?"":n):i&&(n="none"),n}(t,e.transform,r):n.transform&&(n.transform="none")),a){let{originX:e="50%",originY:t="50%",originZ:r=0}=o;n.transformOrigin=`${e} ${t} ${r}`}}let sp={offset:"stroke-dashoffset",array:"stroke-dasharray"},sf={offset:"strokeDashoffset",array:"strokeDasharray"};function sm(e,t,r){return"string"==typeof e?e:rc.transform(t+r*e)}function sg(e,{attrX:t,attrY:r,attrScale:n,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(sh(e,u,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:h,style:p,dimensions:f}=e;h.transform&&(f&&(p.transform=h.transform),delete h.transform),f&&(void 0!==i||void 0!==o||p.transform)&&(p.transformOrigin=function(e,t,r){let n=sm(t,e.x,e.width),i=sm(r,e.y,e.height);return`${n} ${i}`}(f,void 0!==i?i:.5,void 0!==o?o:.5)),void 0!==t&&(h.x=t),void 0!==r&&(h.y=r),void 0!==n&&(h.scale=n),void 0!==s&&function(e,t,r=1,n=0,i=!0){e.pathLength=1;let o=i?sp:sf;e[o.offset]=rc.transform(-n);let s=rc.transform(t),a=rc.transform(r);e[o.array]=`${s} ${a}`}(h,s,a,l,!1)}let sv=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),sy=()=>({...sv(),attrs:{}}),sw=e=>"string"==typeof e&&"svg"===e.toLowerCase();function sx(e,{style:t,vars:r},n,i){for(let o in Object.assign(e.style,t,i&&i.getProjectionStyles(n)),r)e.style.setProperty(o,r[o])}let sb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function sE(e,t,r,n){for(let r in sx(e,t,void 0,n),t.attrs)e.setAttribute(sb.has(r)?r:t_(r),t.attrs[r])}function sC(e,{layout:t,layoutId:r}){return tb.has(e)||e.startsWith("origin")||(t||void 0!==r)&&(!!i$[e]||"opacity"===e)}function sT(e,t,r){var n;let{style:i}=e,o={};for(let s in i)(tz(i[s])||t.style&&tz(t.style[s])||sC(s,e)||(null===(n=null==r?void 0:r.getValue(s))||void 0===n?void 0:n.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function sP(e,t,r){let n=sT(e,t,r);for(let r in e)(tz(e[r])||tz(t[r]))&&(n[-1!==tx.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]);return n}let sk=["x","y","width","height","cx","cy","r"],sS={useVisualState:sl({scrapeMotionValuesFromProps:sP,createRenderState:sy,onUpdate:({props:e,prevProps:t,current:r,renderState:n,latestValues:i})=>{if(!r)return;let o=!!e.drag;if(!o){for(let e in i)if(tb.has(e)){o=!0;break}}if(!o)return;let s=!t;if(t)for(let r=0;r<sk.length;r++){let n=sk[r];e[n]!==t[n]&&(s=!0)}s&&tA.read(()=>{!function(e,t){try{t.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(e){t.dimensions={x:0,y:0,width:0,height:0}}}(r,n),tA.render(()=>{sg(n,i,sw(r.tagName),e.transformTemplate),sE(r,n)})})}})},sA={useVisualState:sl({scrapeMotionValuesFromProps:sT,createRenderState:sv})};function sj(e,t,r){for(let n in t)tz(t[n])||sC(n,r)||(e[n]=t[n])}let sR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sM(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||sR.has(e)}let sD=e=>!sM(e);try{(u=require("@emotion/is-prop-valid").default)&&(sD=e=>e.startsWith("on")?!sM(e):u(e))}catch(e){}let sN={current:null},sL={current:!1},sI=[...r1,rm,rT],sV=e=>sI.find(r0(e)),sF=new WeakMap,sO=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sB{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:n,blockInitialAnimation:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=r$,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=tN.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,tA.render(this.render,!1,!0))};let{latestValues:a,renderState:l,onUpdate:u}=o;this.onUpdate=u,this.latestValues=a,this.baseTarget={...a},this.initialValues=t.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=n,this.options=s,this.blockInitialAnimation=!!i,this.isControllingVariants=o7(t),this.isVariantNode=o4(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:c,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];void 0!==a[e]&&tz(t)&&t.set(a[e],!1)}}mount(e){this.current=e,sF.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),sL.current||function(){if(sL.current=!0,se){if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>sN.current=e.matches;e.addListener(t),t()}else sN.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||sN.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in sF.delete(this.current),this.projection&&this.projection.unmount(),tj(this.notifyUpdate),tj(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){let r;this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let n=tb.has(e),i=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&tA.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),o=t.on("renderRequest",this.scheduleRender);window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{i(),o(),r&&r(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in sr){let t=sr[e];if(!t)continue;let{isEnabled:r,Feature:n}=t;if(!this.features[e]&&n&&r(this.props)&&(this.features[e]=new n(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):iy()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<sO.length;t++){let r=sO[t];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let n=e["on"+r];n&&(this.propEventSubscriptions[r]=this.on(r,n))}this.prevMotionValues=function(e,t,r){for(let n in t){let i=t[n],o=r[n];if(tz(i))e.addValue(n,i);else if(tz(o))e.addValue(n,tU(i,{owner:e}));else if(o!==i){if(e.hasValue(n)){let t=e.getValue(n);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(n);e.addValue(n,tU(void 0!==t?t:i,{owner:e}))}}}for(let n in r)void 0===t[n]&&e.removeValue(n);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return void 0===r&&void 0!==t&&(r=tU(null===t?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let n=void 0===this.latestValues[e]&&this.current?null!==(r=this.getBaseTargetFromProps(this.props,e))&&void 0!==r?r:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return null!=n&&("string"==typeof n&&(rY(n)||t5(n))?n=parseFloat(n):!sV(n)&&rT.test(t)&&(n=rN(e,t)),this.setBaseTarget(e,tz(n)?n.get():n)),tz(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;let r;let{initial:n}=this.props;if("string"==typeof n||"object"==typeof n){let i=eQ(this.props,n,null===(t=this.presenceContext)||void 0===t?void 0:t.custom);i&&(r=i[e])}if(n&&void 0!==r)return r;let i=this.getBaseTargetFromProps(this.props,e);return void 0===i||tz(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new tV),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class sU extends sB{constructor(){super(...arguments),this.KeyframeResolver=r5}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;tz(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}class sz extends sU{constructor(){super(...arguments),this.type="html",this.renderInstance=sx}readValueFromInstance(e,t){if(tb.has(t)){let e=rD(t);return e&&e.default||0}{let r=window.getComputedStyle(e),n=(rZ(t)?r.getPropertyValue(t):r[t])||0;return"string"==typeof n?n.trim():n}}measureInstanceViewportBox(e,{transformPagePoint:t}){return iM(e,t)}build(e,t,r){sh(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return sT(e,t,r)}}class sW extends sU{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=iy}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(tb.has(t)){let e=rD(t);return e&&e.default||0}return t=sb.has(t)?t:t_(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return sP(e,t,r)}build(e,t,r){sg(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,n){sE(e,t,r,n)}mount(e){this.isSVGTag=sw(e.tagName),super.mount(e)}}let s_=function(e){if("undefined"==typeof Proxy)return e;let t=new Map;return new Proxy((...t)=>e(...t),{get:(r,n)=>"create"===n?e:(t.has(n)||t.set(n,e(n)),t.get(n))})}((c={animation:{Feature:nJ},exit:{Feature:n1},inView:{Feature:o5},tap:{Feature:oQ},focus:{Feature:oZ},hover:{Feature:oq},pan:{Feature:iO},drag:{Feature:iV,ProjectionNode:o$,MeasureLayout:iX},layout:{ProjectionNode:o$,MeasureLayout:iX}},d=(e,t)=>ss(e)?new sW(t):new sz(t,{allowProjection:e!==x.Fragment}),function(e,{forwardMotionProps:t}={forwardMotionProps:!1}){return function(e){var t,r;let{preloadedFeatures:n,createVisualElement:i,useRender:o,useVisualState:s,Component:a}=e;function l(e,t){var r;let n;let l={...(0,x.useContext)(o6),...e,layoutId:function(e){let{layoutId:t}=e,r=(0,x.useContext)(iz).id;return r&&void 0!==t?r+"-"+t:t}(e)},{isStatic:u}=l,c=function(e){let{initial:t,animate:r}=function(e,t){if(o7(e)){let{initial:t,animate:r}=e;return{initial:!1===t||eZ(t)?t:void 0,animate:eZ(r)?r:void 0}}return!1!==e.inherit?t:{}}(e,(0,x.useContext)(o3));return(0,x.useMemo)(()=>({initial:t,animate:r}),[o9(t),o9(r)])}(e),d=s(e,u);if(!u&&se){(0,x.useContext)(o8).strict;let e=function(e){let{drag:t,layout:r}=sr;if(!t&&!r)return{};let n={...t,...r};return{MeasureLayout:(null==t?void 0:t.isEnabled(e))||(null==r?void 0:r.isEnabled(e))?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}(l);n=e.MeasureLayout,c.visualElement=function(e,t,r,n,i){var o,s;let{visualElement:a}=(0,x.useContext)(o3),l=(0,x.useContext)(o8),u=(0,x.useContext)(iB),c=(0,x.useContext)(o6).reducedMotion,d=(0,x.useRef)(null);n=n||l.renderer,!d.current&&n&&(d.current=n(e,{visualState:t,parent:a,props:r,presenceContext:u,blockInitialAnimation:!!u&&!1===u.initial,reducedMotionConfig:c}));let h=d.current,p=(0,x.useContext)(iW);h&&!h.projection&&i&&("html"===h.type||"svg"===h.type)&&function(e,t,r,n){let{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&ir(a),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:n,layoutScroll:l,layoutRoot:u})}(d.current,r,i,p);let f=(0,x.useRef)(!1);(0,x.useInsertionEffect)(()=>{h&&f.current&&h.update(r,u)});let m=r[tH],g=(0,x.useRef)(!!m&&!(null===(o=window.MotionHandoffIsComplete)||void 0===o?void 0:o.call(window,m))&&(null===(s=window.MotionHasOptimisedAnimation)||void 0===s?void 0:s.call(window,m)));return si(()=>{h&&(f.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),iY.render(h.render),g.current&&h.animationState&&h.animationState.animateChanges())}),(0,x.useEffect)(()=>{h&&(!g.current&&h.animationState&&h.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var e;null===(e=window.MotionHandoffMarkAsComplete)||void 0===e||e.call(window,m)}),g.current=!1))}),h}(a,d,l,i,e.ProjectionNode)}return(0,R.jsxs)(o3.Provider,{value:c,children:[n&&c.visualElement?(0,R.jsx)(n,{visualElement:c.visualElement,...l}):null,o(a,e,(r=c.visualElement,(0,x.useCallback)(e=>{e&&d.onMount&&d.onMount(e),r&&(e?r.mount(e):r.unmount()),t&&("function"==typeof t?t(e):ir(t)&&(t.current=e))},[r])),d,u,c.visualElement)]})}n&&function(e){for(let t in e)sr[t]={...sr[t],...e[t]}}(n),l.displayName="motion.".concat("string"==typeof a?a:"create(".concat(null!==(r=null!==(t=a.displayName)&&void 0!==t?t:a.name)&&void 0!==r?r:"",")"));let u=(0,x.forwardRef)(l);return u[sn]=a,u}({...ss(e)?sS:sA,preloadedFeatures:c,useRender:function(e=!1){return(t,r,n,{latestValues:i},o)=>{let s=(ss(t)?function(e,t,r,n){let i=(0,x.useMemo)(()=>{let r=sy();return sg(r,t,sw(n),e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){let t={};sj(t,e.style,e),i.style={...t,...i.style}}return i}:function(e,t){let r={},n=function(e,t){let r=e.style||{},n={};return sj(n,r,e),Object.assign(n,function({transformTemplate:e},t){return(0,x.useMemo)(()=>{let r=sv();return sh(r,t,e),Object.assign({},r.vars,r.style)},[t])}(e,t)),n}(e,t);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=n,r})(r,i,o,t),a=function(e,t,r){let n={};for(let i in e)("values"!==i||"object"!=typeof e.values)&&(sD(i)||!0===r&&sM(i)||!t&&!sM(i)||e.draggable&&i.startsWith("onDrag"))&&(n[i]=e[i]);return n}(r,"string"==typeof t,e),l=t!==x.Fragment?{...a,...s,ref:n}:{},{children:u}=r,c=(0,x.useMemo)(()=>tz(u)?u.get():u,[u]);return(0,x.createElement)(t,{...l,children:c})}}(t),createVisualElement:d,Component:e})}));class sH extends x.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function sK(e){let{children:t,isPresent:r}=e,n=(0,x.useId)(),i=(0,x.useRef)(null),o=(0,x.useRef)({width:0,height:0,top:0,left:0}),{nonce:s}=(0,x.useContext)(o6);return(0,x.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:l}=o.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=n;let u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(n,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(a,"px !important;\n            left: ").concat(l,"px !important;\n          }\n        ")),()=>{document.head.removeChild(u)}},[r]),(0,R.jsx)(sH,{isPresent:r,childRef:i,sizeRef:o,children:x.cloneElement(t,{ref:i})})}let s$=e=>{let{children:t,initial:r,isPresent:n,onExitComplete:i,custom:o,presenceAffectsLayout:s,mode:a}=e,l=sa(sY),u=(0,x.useId)(),c=(0,x.useCallback)(e=>{for(let t of(l.set(e,!0),l.values()))if(!t)return;i&&i()},[l,i]),d=(0,x.useMemo)(()=>({id:u,initial:r,isPresent:n,custom:o,onExitComplete:c,register:e=>(l.set(e,!1),()=>l.delete(e))}),s?[Math.random(),c]:[n,c]);return(0,x.useMemo)(()=>{l.forEach((e,t)=>l.set(t,!1))},[n]),x.useEffect(()=>{n||l.size||!i||i()},[n]),"popLayout"===a&&(t=(0,R.jsx)(sK,{isPresent:n,children:t})),(0,R.jsx)(iB.Provider,{value:d,children:t})};function sY(){return new Map}let sq=e=>e.key||"";function sZ(e){let t=[];return x.Children.forEach(e,e=>{(0,x.isValidElement)(e)&&t.push(e)}),t}let sX=e=>{let{children:t,custom:r,initial:n=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:s="sync",propagate:a=!1}=e,[l,u]=iU(a),c=(0,x.useMemo)(()=>sZ(t),[t]),d=a&&!l?[]:c.map(sq),h=(0,x.useRef)(!0),p=(0,x.useRef)(c),f=sa(()=>new Map),[m,g]=(0,x.useState)(c),[v,y]=(0,x.useState)(c);si(()=>{h.current=!1,p.current=c;for(let e=0;e<v.length;e++){let t=sq(v[e]);d.includes(t)?f.delete(t):!0!==f.get(t)&&f.set(t,!1)}},[v,d.length,d.join("-")]);let w=[];if(c!==m){let e=[...c];for(let t=0;t<v.length;t++){let r=v[t],n=sq(r);d.includes(n)||(e.splice(t,0,r),w.push(r))}"wait"===s&&w.length&&(e=w),y(sZ(e)),g(c);return}let{forceRender:b}=(0,x.useContext)(iz);return(0,R.jsx)(R.Fragment,{children:v.map(e=>{let t=sq(e),m=(!a||!!l)&&(c===v||d.includes(t));return(0,R.jsx)(s$,{isPresent:m,initial:(!h.current||!!n)&&void 0,custom:m?void 0:r,presenceAffectsLayout:o,mode:s,onExitComplete:m?void 0:()=>{if(!f.has(t))return;f.set(t,!0);let e=!0;f.forEach(t=>{t||(e=!1)}),e&&(null==b||b(),y(p.current),a&&(null==u||u()),i&&i())},children:e},t)})})};var sQ=b[" useId ".trim().toString()]||(()=>void 0),sG=0;function sJ(e){let[t,r]=x.useState(sQ());return eu(()=>{e||r(e=>e??String(sG++))},[e]),e||(t?`radix-${t}`:"")}var s0="focusScope.autoFocusOnMount",s1="focusScope.autoFocusOnUnmount",s2={bubbles:!1,cancelable:!0},s5=x.forwardRef((e,t)=>{let{loop:r=!1,trapped:n=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=e,[a,l]=x.useState(null),u=er(i),c=er(o),d=x.useRef(null),h=Z(t,e=>l(e)),p=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(n){let e=function(e){if(p.paused||!a)return;let t=e.target;a.contains(t)?d.current=t:s3(d.current,{select:!0})},t=function(e){if(p.paused||!a)return;let t=e.relatedTarget;null===t||a.contains(t)||s3(d.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&s3(a)});return a&&r.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[n,a,p.paused]),x.useEffect(()=>{if(a){s7.add(p);let e=document.activeElement;if(!a.contains(e)){let t=new CustomEvent(s0,s2);a.addEventListener(s0,u),a.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=document.activeElement;for(let n of e)if(s3(n,{select:t}),document.activeElement!==r)return}(s8(a).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&s3(a))}return()=>{a.removeEventListener(s0,u),setTimeout(()=>{let t=new CustomEvent(s1,s2);a.addEventListener(s1,c),a.dispatchEvent(t),t.defaultPrevented||s3(null!=e?e:document.body,{select:!0}),a.removeEventListener(s1,c),s7.remove(p)},0)}}},[a,u,c,p]);let f=x.useCallback(e=>{if(!r&&!n||p.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,i=document.activeElement;if(t&&i){let t=e.currentTarget,[n,o]=function(e){let t=s8(e);return[s6(t,e),s6(t.reverse(),e)]}(t);n&&o?e.shiftKey||i!==o?e.shiftKey&&i===n&&(e.preventDefault(),r&&s3(o,{select:!0})):(e.preventDefault(),r&&s3(n,{select:!0})):i===t&&e.preventDefault()}},[r,n,p.paused]);return(0,R.jsx)(ee.div,{tabIndex:-1,...s,ref:h,onKeyDown:f})});function s8(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function s6(e,t){for(let r of e)if(!function(e,t){let{upTo:r}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===r||e!==r);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(r,{upTo:t}))return r}function s3(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var r;let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&(r=e)instanceof HTMLInputElement&&"select"in r&&t&&e.select()}}s5.displayName="FocusScope";var s7=(s=[],{add(e){let t=s[0];e!==t&&(null==t||t.pause()),(s=s4(s,e)).unshift(e)},remove(e){var t;null===(t=(s=s4(s,e))[0])||void 0===t||t.resume()}});function s4(e,t){let r=[...e],n=r.indexOf(t);return -1!==n&&r.splice(n,1),r}var s9=0;function ae(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var at=function(){return(at=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function ar(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}"function"==typeof SuppressedError&&SuppressedError;var an="right-scroll-bar-position",ai="width-before-scroll-bar";function ao(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var as="undefined"!=typeof window?x.useLayoutEffect:x.useEffect,aa=new WeakMap,al=(void 0===h&&(h={}),(void 0===p&&(p=function(e){return e}),f=[],m=!1,g={read:function(){if(m)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return f.length?f[f.length-1]:null},useMedium:function(e){var t=p(e,m);return f.push(t),function(){f=f.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(m=!0;f.length;){var t=f;f=[],t.forEach(e)}f={push:function(t){return e(t)},filter:function(){return f}}},assignMedium:function(e){m=!0;var t=[];if(f.length){var r=f;f=[],r.forEach(e),t=f}var n=function(){var r=t;t=[],r.forEach(e)},i=function(){return Promise.resolve().then(n)};i(),f={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),f}}}}).options=at({async:!0,ssr:!1},h),g),au=function(){},ac=x.forwardRef(function(e,t){var r,n,i,o,s=x.useRef(null),a=x.useState({onScrollCapture:au,onWheelCapture:au,onTouchMoveCapture:au}),l=a[0],u=a[1],c=e.forwardProps,d=e.children,h=e.className,p=e.removeScrollBar,f=e.enabled,m=e.shards,g=e.sideCar,v=e.noRelative,y=e.noIsolation,w=e.inert,b=e.allowPinchZoom,E=e.as,C=e.gapMode,T=ar(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(r=[s,t],n=function(e){return r.forEach(function(t){return ao(t,e)})},(i=(0,x.useState)(function(){return{value:null,callback:n,facade:{get current(){return i.value},set current(value){var e=i.value;e!==value&&(i.value=value,i.callback(value,e))}}}})[0]).callback=n,o=i.facade,as(function(){var e=aa.get(o);if(e){var t=new Set(e),n=new Set(r),i=o.current;t.forEach(function(e){n.has(e)||ao(e,null)}),n.forEach(function(e){t.has(e)||ao(e,i)})}aa.set(o,r)},[r]),o),k=at(at({},T),l);return x.createElement(x.Fragment,null,f&&x.createElement(g,{sideCar:al,removeScrollBar:p,shards:m,noRelative:v,noIsolation:y,inert:w,setCallbacks:u,allowPinchZoom:!!b,lockRef:s,gapMode:C}),c?x.cloneElement(x.Children.only(d),at(at({},k),{ref:P})):x.createElement(void 0===E?"div":E,at({},k,{className:h,ref:P}),d))});ac.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},ac.classNames={fullWidth:ai,zeroRight:an};var ad=function(e){var t=e.sideCar,r=ar(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw Error("Sidecar medium not found");return x.createElement(n,at({},r))};ad.isSideCarExport=!0;var ah=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=w||r.nc;return t&&e.setAttribute("nonce",t),e}())){var i,o;(i=t).styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},ap=function(){var e=ah();return function(t,r){x.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&r])}},af=function(){var e=ap();return function(t){return e(t.styles,t.dynamic),null}},am={left:0,top:0,right:0,gap:0},ag=function(e){return parseInt(e||"",10)||0},av=function(e){var t=window.getComputedStyle(document.body),r=t["padding"===e?"paddingLeft":"marginLeft"],n=t["padding"===e?"paddingTop":"marginTop"],i=t["padding"===e?"paddingRight":"marginRight"];return[ag(r),ag(n),ag(i)]},ay=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return am;var t=av(e),r=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-r+t[2]-t[0])}},aw=af(),ax="data-scroll-locked",ab=function(e,t,r,n){var i=e.left,o=e.top,s=e.right,a=e.gap;return void 0===r&&(r="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(n,";\n   padding-right: ").concat(a,"px ").concat(n,";\n  }\n  body[").concat(ax,"] {\n    overflow: hidden ").concat(n,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(n,";"),"margin"===r&&"\n    padding-left: ".concat(i,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(s,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(n,";\n    "),"padding"===r&&"padding-right: ".concat(a,"px ").concat(n,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(an," {\n    right: ").concat(a,"px ").concat(n,";\n  }\n  \n  .").concat(ai," {\n    margin-right: ").concat(a,"px ").concat(n,";\n  }\n  \n  .").concat(an," .").concat(an," {\n    right: 0 ").concat(n,";\n  }\n  \n  .").concat(ai," .").concat(ai," {\n    margin-right: 0 ").concat(n,";\n  }\n  \n  body[").concat(ax,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},aE=function(){var e=parseInt(document.body.getAttribute(ax)||"0",10);return isFinite(e)?e:0},aC=function(){x.useEffect(function(){return document.body.setAttribute(ax,(aE()+1).toString()),function(){var e=aE()-1;e<=0?document.body.removeAttribute(ax):document.body.setAttribute(ax,e.toString())}},[])},aT=function(e){var t=e.noRelative,r=e.noImportant,n=e.gapMode,i=void 0===n?"margin":n;aC();var o=x.useMemo(function(){return ay(i)},[i]);return x.createElement(aw,{styles:ab(o,!t,i,r?"":"!important")})},aP=!1;if("undefined"!=typeof window)try{var ak=Object.defineProperty({},"passive",{get:function(){return aP=!0,!0}});window.addEventListener("test",ak,ak),window.removeEventListener("test",ak,ak)}catch(e){aP=!1}var aS=!!aP&&{passive:!1},aA=function(e,t){if(!(e instanceof Element))return!1;var r=window.getComputedStyle(e);return"hidden"!==r[t]&&!(r.overflowY===r.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===r[t])},aj=function(e,t){var r=t.ownerDocument,n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),aR(e,n)){var i=aM(e,n);if(i[1]>i[2])return!0}n=n.parentNode}while(n&&n!==r.body);return!1},aR=function(e,t){return"v"===e?aA(t,"overflowY"):aA(t,"overflowX")},aM=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},aD=function(e,t,r,n,i){var o,s=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),a=s*n,l=r.target,u=t.contains(l),c=!1,d=a>0,h=0,p=0;do{if(!l)break;var f=aM(e,l),m=f[0],g=f[1]-f[2]-s*m;(m||g)&&aR(e,l)&&(h+=g,p+=m);var v=l.parentNode;l=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return d&&(i&&1>Math.abs(h)||!i&&a>h)?c=!0:!d&&(i&&1>Math.abs(p)||!i&&-a>p)&&(c=!0),c},aN=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},aL=function(e){return[e.deltaX,e.deltaY]},aI=function(e){return e&&"current"in e?e.current:e},aV=0,aF=[],aO=(v=function(e){var t=x.useRef([]),r=x.useRef([0,0]),n=x.useRef(),i=x.useState(aV++)[0],o=x.useState(af)[0],s=x.useRef(e);x.useEffect(function(){s.current=e},[e]),x.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(function(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(aI),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var a=x.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!s.current.allowPinchZoom;var i,o=aN(e),a=r.current,l="deltaX"in e?e.deltaX:a[0]-o[0],u="deltaY"in e?e.deltaY:a[1]-o[1],c=e.target,d=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var h=aj(d,c);if(!h)return!0;if(h?i=d:(i="v"===d?"h":"v",h=aj(d,c)),!h)return!1;if(!n.current&&"changedTouches"in e&&(l||u)&&(n.current=i),!i)return!0;var p=n.current||i;return aD(p,t,e,"h"===p?l:u,!0)},[]),l=x.useCallback(function(e){if(aF.length&&aF[aF.length-1]===o){var r="deltaY"in e?aL(e):aN(e),n=t.current.filter(function(t){var n;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(n=t.delta)[0]===r[0]&&n[1]===r[1]})[0];if(n&&n.should){e.cancelable&&e.preventDefault();return}if(!n){var i=(s.current.shards||[]).map(aI).filter(Boolean).filter(function(t){return t.contains(e.target)});(i.length>0?a(e,i[0]):!s.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=x.useCallback(function(e,r,n,i){var o={name:e,delta:r,target:n,should:i,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(n)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=x.useCallback(function(e){r.current=aN(e),n.current=void 0},[]),d=x.useCallback(function(t){u(t.type,aL(t),t.target,a(t,e.lockRef.current))},[]),h=x.useCallback(function(t){u(t.type,aN(t),t.target,a(t,e.lockRef.current))},[]);x.useEffect(function(){return aF.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",l,aS),document.addEventListener("touchmove",l,aS),document.addEventListener("touchstart",c,aS),function(){aF=aF.filter(function(e){return e!==o}),document.removeEventListener("wheel",l,aS),document.removeEventListener("touchmove",l,aS),document.removeEventListener("touchstart",c,aS)}},[]);var p=e.removeScrollBar,f=e.inert;return x.createElement(x.Fragment,null,f?x.createElement(o,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,p?x.createElement(aT,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},al.useMedium(v),ad),aB=x.forwardRef(function(e,t){return x.createElement(ac,at({},e,{ref:t,sideCar:aO}))});aB.classNames=ac.classNames;var aU=new WeakMap,az=new WeakMap,aW={},a_=0,aH=function(e){return e&&(e.host||aH(e.parentNode))},aK=function(e,t,r,n){var i=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var r=aH(e);return r&&t.contains(r)?r:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});aW[r]||(aW[r]=new WeakMap);var o=aW[r],s=[],a=new Set,l=new Set(i),u=function(e){!e||a.has(e)||(a.add(e),u(e.parentNode))};i.forEach(u);var c=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(a.has(e))c(e);else try{var t=e.getAttribute(n),i=null!==t&&"false"!==t,l=(aU.get(e)||0)+1,u=(o.get(e)||0)+1;aU.set(e,l),o.set(e,u),s.push(e),1===l&&i&&az.set(e,!0),1===u&&e.setAttribute(r,"true"),i||e.setAttribute(n,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return c(t),a.clear(),a_++,function(){s.forEach(function(e){var t=aU.get(e)-1,i=o.get(e)-1;aU.set(e,t),o.set(e,i),t||(az.has(e)||e.removeAttribute(n),az.delete(e)),i||e.removeAttribute(r)}),--a_||(aU=new WeakMap,aU=new WeakMap,az=new WeakMap,aW={})}},a$=function(e,t,r){void 0===r&&(r="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),i=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return i?(n.push.apply(n,Array.from(i.querySelectorAll("[aria-live], script"))),aK(n,i,r,"aria-hidden")):function(){return null}},aY="Dialog",[aq,aZ]=X(aY),[aX,aQ]=aq(aY),aG=e=>{let{__scopeDialog:t,children:r,open:n,defaultOpen:i,onOpenChange:o,modal:s=!0}=e,a=x.useRef(null),l=x.useRef(null),[u,c]=ef({prop:n,defaultProp:null!=i&&i,onChange:o,caller:aY});return(0,R.jsx)(aX,{scope:t,triggerRef:a,contentRef:l,contentId:sJ(),titleId:sJ(),descriptionId:sJ(),open:u,onOpenChange:c,onOpenToggle:x.useCallback(()=>c(e=>!e),[c]),modal:s,children:r})};aG.displayName=aY;var aJ="DialogTrigger";x.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,i=aQ(aJ,r),o=Z(t,i.triggerRef);return(0,R.jsx)(ee.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":ll(i.open),...n,ref:o,onClick:$(e.onClick,i.onOpenToggle)})}).displayName=aJ;var a0="DialogPortal",[a1,a2]=aq(a0,{forceMount:void 0}),a5=e=>{let{__scopeDialog:t,forceMount:r,children:n,container:i}=e,o=aQ(a0,t);return(0,R.jsx)(a1,{scope:t,forceMount:r,children:x.Children.map(n,e=>(0,R.jsx)(ed,{present:r||o.open,children:(0,R.jsx)(ec,{asChild:!0,container:i,children:e})}))})};a5.displayName=a0;var a8="DialogOverlay",a6=x.forwardRef((e,t)=>{let r=a2(a8,e.__scopeDialog),{forceMount:n=r.forceMount,...i}=e,o=aQ(a8,e.__scopeDialog);return o.modal?(0,R.jsx)(ed,{present:n||o.open,children:(0,R.jsx)(a7,{...i,ref:t})}):null});a6.displayName=a8;var a3=Q("DialogOverlay.RemoveScroll"),a7=x.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,i=aQ(a8,r);return(0,R.jsx)(aB,{as:a3,allowPinchZoom:!0,shards:[i.contentRef],children:(0,R.jsx)(ee.div,{"data-state":ll(i.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),a4="DialogContent",a9=x.forwardRef((e,t)=>{let r=a2(a4,e.__scopeDialog),{forceMount:n=r.forceMount,...i}=e,o=aQ(a4,e.__scopeDialog);return(0,R.jsx)(ed,{present:n||o.open,children:o.modal?(0,R.jsx)(le,{...i,ref:t}):(0,R.jsx)(lt,{...i,ref:t})})});a9.displayName=a4;var le=x.forwardRef((e,t)=>{let r=aQ(a4,e.__scopeDialog),n=x.useRef(null),i=Z(t,r.contentRef,n);return x.useEffect(()=>{let e=n.current;if(e)return a$(e)},[]),(0,R.jsx)(lr,{...e,ref:i,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:$(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=r.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:$(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey;(2===t.button||r)&&e.preventDefault()}),onFocusOutside:$(e.onFocusOutside,e=>e.preventDefault())})}),lt=x.forwardRef((e,t)=>{let r=aQ(a4,e.__scopeDialog),n=x.useRef(!1),i=x.useRef(!1);return(0,R.jsx)(lr,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,s;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(n.current||null===(s=r.triggerRef.current)||void 0===s||s.focus(),t.preventDefault()),n.current=!1,i.current=!1},onInteractOutside:t=>{var o,s;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(n.current=!0,"pointerdown"!==t.detail.originalEvent.type||(i.current=!0));let a=t.target;(null===(s=r.triggerRef.current)||void 0===s?void 0:s.contains(a))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})}),lr=x.forwardRef((e,t)=>{let{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:i,onCloseAutoFocus:o,...s}=e,a=aQ(a4,r),l=x.useRef(null),u=Z(t,l);return x.useEffect(()=>{var e,t;let r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=r[0])&&void 0!==e?e:ae()),document.body.insertAdjacentElement("beforeend",null!==(t=r[1])&&void 0!==t?t:ae()),s9++,()=>{1===s9&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),s9--}},[]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(s5,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:i,onUnmountAutoFocus:o,children:(0,R.jsx)(eo,{role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":ll(a.open),...s,ref:u,onDismiss:()=>a.onOpenChange(!1)})}),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(lh,{titleId:a.titleId}),(0,R.jsx)(lp,{contentRef:l,descriptionId:a.descriptionId})]})]})}),ln="DialogTitle",li=x.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,i=aQ(ln,r);return(0,R.jsx)(ee.h2,{id:i.titleId,...n,ref:t})});li.displayName=ln;var lo="DialogDescription";x.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,i=aQ(lo,r);return(0,R.jsx)(ee.p,{id:i.descriptionId,...n,ref:t})}).displayName=lo;var ls="DialogClose",la=x.forwardRef((e,t)=>{let{__scopeDialog:r,...n}=e,i=aQ(ls,r);return(0,R.jsx)(ee.button,{type:"button",...n,ref:t,onClick:$(e.onClick,()=>i.onOpenChange(!1))})});function ll(e){return e?"open":"closed"}la.displayName=ls;var lu="DialogTitleWarning",[lc,ld]=function(e,t){let r=x.createContext(t),n=e=>{let{children:t,...n}=e,i=x.useMemo(()=>n,Object.values(n));return(0,R.jsx)(r.Provider,{value:i,children:t})};return n.displayName=e+"Provider",[n,function(n){let i=x.useContext(r);if(i)return i;if(void 0!==t)return t;throw Error(`\`${n}\` must be used within \`${e}\``)}]}(lu,{contentName:a4,titleName:ln,docsSlug:"dialog"}),lh=e=>{let{titleId:t}=e,r=ld(lu),n="`".concat(r.contentName,"` requires a `").concat(r.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(r.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(r.docsSlug);return x.useEffect(()=>{t&&!document.getElementById(t)&&console.error(n)},[n,t]),null},lp=e=>{let{contentRef:t,descriptionId:r}=e,n=ld("DialogDescriptionWarning"),i="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(n.contentName,"}.");return x.useEffect(()=>{var e;let n=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");r&&n&&!document.getElementById(r)&&console.warn(i)},[i,t,r]),null};r(8039),r(7404);var lf=()=>{let[e,t]=(0,x.useState)("undefined"!=typeof window&&window.matchMedia("(max-width: 1024px)").matches?"mobile":"desktop");return(0,x.useEffect)(()=>{let e=window.matchMedia("(max-width: 1024px)"),r=e=>t(e.matches?"mobile":"desktop");return r(e),e.addEventListener("change",r),()=>{e.removeEventListener("change",r)}},[]),e},lm=`/* Remote TWK Lausanne font definitions */
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
`,lg=()=>(0,R.jsx)("style",{children:lm}),lv=({id:e,children:t,mode:r="open",delegatesFocus:n=!1})=>{let[i,o]=(0,x.useState)(null),s=(0,x.useCallback)(e=>{e&&o(e.shadowRoot??e.attachShadow({mode:r,delegatesFocus:n}))},[r,n]);return(0,R.jsx)("div",{ref:s,id:e,children:i&&K.createPortal(t,i)})},ly=e=>(0,R.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:(0,R.jsx)("path",{strokeWidth:"1.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m16.243 7.758-8.485 8.485m8.485 0L7.758 7.758"})}),lw=function(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(n&&(n+=" "),n+=t);return n},lx=e=>(0,R.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,R.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#9BA3AE"}),(0,R.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3198)"}),(0,R.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3198)"}),(0,R.jsx)("path",{d:"M33.0146 53.9853L43.4999 43.5M53.9851 33.0147L43.4999 43.5M43.4999 43.5L33.0146 33.0147M43.4999 43.5L53.9851 53.9853",stroke:"white",strokeWidth:"3"}),(0,R.jsxs)("defs",{children:[(0,R.jsxs)("radialGradient",{id:"paint0_radial_117706_3198",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,R.jsx)("stop",{stopColor:"white"}),(0,R.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,R.jsxs)("linearGradient",{id:"paint1_linear_117706_3198",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,R.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,R.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lb=e=>(0,R.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,R.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#FFAE00"}),(0,R.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3182)"}),(0,R.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3182)"}),(0,R.jsx)("path",{d:"M64.1707 59.5415H22.8298L43.4998 22.3354L64.1707 59.5415ZM42.1208 51.3003L42.1218 54.0503H44.8992L44.8982 51.3003H42.1208ZM42.1248 46.7085H44.8748V36.6255H42.1248V46.7085Z",fill:"white"}),(0,R.jsxs)("defs",{children:[(0,R.jsxs)("radialGradient",{id:"paint0_radial_117706_3182",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,R.jsx)("stop",{stopColor:"white"}),(0,R.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,R.jsxs)("linearGradient",{id:"paint1_linear_117706_3182",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,R.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,R.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lE=({retryFlow:e,errorState:t})=>({retryFlow:e,errorState:t}),lC=e=>{switch(e){case A.ov.GenericError:return U("Something went wrong");case A.ov.FailedByHostApp:return U("Verification Declined");case A.ov.VerificationRejected:return U("Request cancelled");default:return U("Something went wrong")}},lT=e=>{switch(e){case A.ov.ConnectionFailed:return U("Connection to your wallet failed. Please try again.");case A.ov.VerificationRejected:return U("You've cancelled the request in World App.");case A.ov.MaxVerificationsReached:return U("You've already verified the maximum number of times for this action.");case A.ov.CredentialUnavailable:return U("It seems you don't have the verification level required by this app.");case A.ov.InvalidNetwork:return U("Invalid network. If you are the app owner, visit docs.world.org/test for details.");case A.ov.InclusionProofPending:return U("Your identity is still being registered. Please wait a few minutes and try again.");case A.ov.GenericError:default:return U("We couldn't complete your request. Please try again.")}},lP=e=>{let{retryFlow:t,errorState:r}=z(lE),{show_modal:n}=e;return(0,x.useEffect)(()=>{r&&console.error("Error state: ",r)},[r]),(0,R.jsxs)("div",{className:"space-y-8",children:[(0,R.jsx)("div",{className:lw("flex items-center justify-center",n?"-mt-5":""),children:r?.code==A.ov.VerificationRejected?(0,R.jsx)(lb,{className:"w-24"}):(0,R.jsx)(lx,{className:"w-24"})}),(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-900 dark:text-white",children:r?.code?lC(r.code):lC(A.ov.GenericError)}),(0,R.jsx)("p",{className:"mx-auto mt-2 max-w-[224px] text-center text-657080",children:r?.code?lT(r.code):lT(A.ov.GenericError)})]}),(0,R.jsx)("div",{className:"flex justify-center",children:(0,R.jsx)("button",{type:"button",onClick:t,className:"inline-flex items-center rounded-full border-[1.2px] border-ebecef bg-transparent px-8 py-3 font-semibold text-gray-900 shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",children:U("Try Again")})})]})},lk=e=>(0,R.jsxs)("svg",{width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,R.jsx)("rect",{width:"88",height:"88",rx:"44",fill:"#00C230"}),(0,R.jsx)("rect",{opacity:"0.2",width:"88",height:"88",rx:"44",fill:"url(#paint0_radial_117706_3174)"}),(0,R.jsx)("rect",{x:"0.5",y:"0.5",width:"87",height:"87",rx:"43.5",stroke:"url(#paint1_linear_117706_3174)"}),(0,R.jsx)("path",{d:"M29.5 45.5L37.5 53.5L57.5 33.5",stroke:"white",strokeWidth:"3"}),(0,R.jsxs)("defs",{children:[(0,R.jsxs)("radialGradient",{id:"paint0_radial_117706_3174",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(20 -1.6729e-06) rotate(63.4349) scale(98.387 97.9627)",children:[(0,R.jsx)("stop",{stopColor:"white"}),(0,R.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,R.jsxs)("linearGradient",{id:"paint1_linear_117706_3174",x1:"44",y1:"0",x2:"44",y2:"88",gradientUnits:"userSpaceOnUse",children:[(0,R.jsx)("stop",{stopColor:"white",stopOpacity:"0.3"}),(0,R.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})]})]}),lS=e=>(0,R.jsxs)("div",{className:"space-y-6",children:[(0,R.jsx)("div",{className:lw("flex items-center justify-center",e.show_modal?"-mt-5":""),children:(0,R.jsx)(lk,{className:"w-24 text-white"})}),(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:"text-center text-2xl font-semibold text-gray-900 dark:text-white",children:U("All set!")}),(0,R.jsx)("p",{className:"mx-auto mt-2 max-w-[260px] text-center text-lg text-657080",children:U("Your World ID is now connected")})]})]}),lA=e=>(0,R.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...e,children:(0,R.jsx)("path",{d:"M30.7367 9.77239C29.9301 7.86586 28.7772 6.15721 27.3084 4.68831C25.8397 3.21941 24.1275 2.06636 22.225 1.2596C20.2502 0.422405 18.1574 0 15.9962 0C13.8388 0 11.7422 0.422405 9.76742 1.2596C7.86112 2.06636 6.15268 3.21941 4.68395 4.68831C3.21522 6.15721 2.06231 7.86966 1.25565 9.77239C0.422354 11.7436 0 13.8404 0 15.9981C0 18.1558 0.422354 20.2526 1.25945 22.2276C2.06611 24.1341 3.21903 25.8428 4.68775 27.3117C6.15648 28.7806 7.86873 29.9336 9.77122 30.7404C11.746 31.5738 13.8388 32 16 32C18.1574 32 20.254 31.5776 22.2288 30.7404C24.1351 29.9336 25.8435 28.7806 27.3122 27.3117C28.781 25.8428 29.9339 24.1303 30.7405 22.2276C31.5738 20.2526 32 18.1596 32 15.9981C31.9962 13.8404 31.57 11.7436 30.7367 9.77239ZM10.6844 14.4949C11.3503 11.9377 13.679 10.0464 16.4452 10.0464H27.552C28.2673 11.4278 28.7239 12.9309 28.9027 14.4949H10.6844ZM28.9027 17.5012C28.7239 19.0653 28.2635 20.5684 27.552 21.9498H16.4452C13.6828 21.9498 11.3541 20.0585 10.6844 17.5012H28.9027ZM6.81094 6.81175C9.26516 4.35724 12.526 3.0063 15.9962 3.0063C19.4663 3.0063 22.7272 4.35724 25.1815 6.81175C25.2576 6.88786 25.3298 6.96397 25.4021 7.04008H16.4452C14.0518 7.04008 11.8031 7.97241 10.1099 9.66583C8.77812 10.9977 7.91819 12.6759 7.60999 14.4988H3.09346C3.42449 11.5952 4.71439 8.90855 6.81094 6.81175ZM15.9962 28.9937C12.526 28.9937 9.26516 27.6428 6.81094 25.1883C4.71439 23.0915 3.42449 20.4048 3.09346 17.5051H7.60999C7.91439 19.3279 8.77812 21.0061 10.1099 22.338C11.8031 24.0314 14.0518 24.9637 16.4452 24.9637H25.4059C25.3337 25.0398 25.2576 25.1159 25.1853 25.1921C22.731 27.639 19.4663 28.9937 15.9962 28.9937Z",fill:"currentColor"})}),lj=e=>(0,R.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 200 200",children:[(0,R.jsx)("path",{fill:"#EBECEF",fillRule:"evenodd",d:"M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",clipRule:"evenodd"}),(0,R.jsx)("path",{fill:"#EBECEF",d:"M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"}),(0,R.jsx)("path",{fill:"#EBECEF",fillRule:"evenodd",d:"M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712ZM12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",clipRule:"evenodd"}),(0,R.jsx)("path",{fill:"#EBECEF",d:"M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Zm102.135-40.926a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253ZM67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Zm78.291-120.285a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252ZM95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"}),(0,R.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",clipRule:"evenodd"}),(0,R.jsx)("path",{fill:"url(#a)",d:"M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"}),(0,R.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712Z",clipRule:"evenodd"}),(0,R.jsx)("path",{fill:"url(#a)",fillRule:"evenodd",d:"M12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",clipRule:"evenodd"}),(0,R.jsx)("path",{fill:"url(#a)",d:"M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Z"}),(0,R.jsx)("path",{fill:"url(#a)",d:"M108.185 48.754a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253Z"}),(0,R.jsx)("path",{fill:"url(#a)",d:"M67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"}),(0,R.jsx)("path",{fill:"url(#a)",d:"M145.907 64.413a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"}),(0,R.jsx)("path",{fill:"url(#a)",d:"M95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"}),(0,R.jsx)("defs",{children:(0,R.jsxs)("linearGradient",{id:"a",x1:"0",x2:"200",y1:"0",y2:"200",gradientUnits:"userSpaceOnUse",children:[(0,R.jsx)("stop",{offset:".37",stopColor:"#fff",stopOpacity:"0"}),(0,R.jsx)("stop",{offset:".5",stopColor:"#fff",stopOpacity:".85"}),(0,R.jsx)("stop",{offset:".63",stopColor:"#fff",stopOpacity:"0"})]})})]}),lR=({qrData:e,showQR:t,setShowQR:r})=>{lf();let[n,i]=(0,x.useState)(!1),o=(0,x.useCallback)(()=>{eK(e??""),i(!0),setTimeout(()=>i(!1),2e3)},[e]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",{className:"md:hidden",children:(0,R.jsxs)("a",{href:e??"",className:"flex w-full items-center space-x-2 rounded-2xl border border-transparent p-4 font-medium shadow-sm bg-0d151d text-white dark:bg-white dark:text-0d151d",children:[(0,R.jsx)(lA,{className:"size-5"}),(0,R.jsx)("span",{className:"flex-1 text-center",children:U("Open World App")})]})}),(0,R.jsxs)("div",{className:lw("hidden md:block xl:hidden",{"mb-10 space-y-4":!t}),children:[(0,R.jsxs)("a",{href:e??"",className:lw("flex w-full items-center space-x-2 rounded-2xl border border-transparent p-4 font-medium shadow-sm","bg-0d151d text-white dark:bg-white dark:text-0d151d",{hidden:t}),children:[(0,R.jsx)(lA,{className:"size-5"}),(0,R.jsx)("span",{className:"flex-1 text-center",children:U("Open World App")})]}),(0,R.jsxs)("div",{className:lw("mb-3 space-y-4",{hidden:t}),children:[(0,R.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,R.jsx)("hr",{className:"flex-1"}),(0,R.jsx)("span",{className:"text-xs font-medium text-9ba3ae",children:"or"}),(0,R.jsx)("hr",{className:"flex-1"})]}),(0,R.jsx)(s_.button,{className:"w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",onClick:()=>r(e=>!e),children:U("Display QR Code")})]})]}),t&&(0,R.jsxs)("div",{className:"hidden md:block xl:hidden",children:[(0,R.jsx)("div",{className:"mb-4",children:(0,R.jsx)(s_.button,{className:"w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",onClick:()=>r(!1),children:U("Hide QR Code")})}),(0,R.jsx)("div",{className:"relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-3 dark:border-f1f5f8/10",children:(0,R.jsx)("div",{className:"text-29343f dark:text-white",children:e?(0,R.jsx)("div",{onClick:o,className:"cursor-pointer",children:(0,R.jsx)(H,{data:e,size:200})}):(0,R.jsx)("div",{className:"flex size-[200px] items-center justify-center",children:(0,R.jsx)(lj,{className:"size-[200px] animate-pulse"})})})}),(0,R.jsx)(sX,{children:n&&(0,R.jsx)(s_.div,{className:"text-sm text-9eafc0 text-center",initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,height:0,marginTop:0},visible:{opacity:1,height:"auto",marginTop:8,transition:{duration:.25,opacity:{delay:.05,duration:.2},ease:"easeInOut"}},exit:{opacity:0,height:0,marginTop:0,transition:{duration:.4,delay:.1,opacity:{duration:.25,delay:0},ease:"easeInOut"}}},children:(0,R.jsx)("span",{className:"rounded-lg border border-f1f5f8 px-2 py-1 text-sm",children:U("QR Code copied")})},"copied")})]}),(0,R.jsxs)("div",{className:"hidden xl:block",children:[(0,R.jsx)(sX,{children:n&&(0,R.jsx)(s_.div,{className:"text-sm text-9eafc0",initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{opacity:0,height:0,marginTop:0,y:0},visible:{opacity:1,height:"auto",marginTop:8,y:-20,transition:{duration:.25,opacity:{delay:.05,duration:.2},ease:"easeInOut"}},exit:{opacity:0,height:0,marginTop:0,y:0,transition:{duration:.4,delay:.1,opacity:{duration:.25,delay:0},ease:"easeInOut"}}},children:(0,R.jsx)("span",{className:"rounded-lg border border-f1f5f8 px-2 py-1 text-sm",children:U("QR Code copied")})},"copied")}),(0,R.jsx)("div",{className:"relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-3 dark:border-f1f5f8/10",children:(0,R.jsx)("div",{className:"text-29343f dark:text-white",children:e?(0,R.jsx)("div",{onClick:o,className:"cursor-pointer",children:(0,R.jsx)(H,{data:e,size:200})}):(0,R.jsx)("div",{className:"flex size-[200px] items-center justify-center",children:(0,R.jsx)(lj,{className:"size-[200px] animate-pulse"})})})})]})]})},lM=(e,t,r,n,i,o,s)=>{let a=(0,x.useRef)(i),{reset:l,result:u,connectorURI:c,createClient:d,pollForUpdates:h,verificationState:p,errorCode:f}=(0,A.MZ)();return(0,x.useEffect)(()=>{c||d({app_id:e,action:t,signal:r,bridge_url:n,action_description:o,verification_level:a.current,partner:s})},[e,t,r,o,d,a,n,c,s]),(0,x.useEffect)(()=>{if(!c||u||f)return;let e=setInterval(()=>void h(),3e3);return()=>clearInterval(e)},[c,h,f,u]),{connectorURI:c,reset:l,result:u,verificationState:p,errorCode:f}},lD=({className:e,...t})=>(0,R.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:`animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] ${e}`,...t,children:[(0,R.jsx)("circle",{cx:"12",cy:"12",r:"10.75",stroke:"#191C20",strokeOpacity:".16",strokeWidth:"2.5"}),(0,R.jsx)("path",{fill:"#191C20",d:"M17.28 2.633c.338-.6.127-1.368-.505-1.642A12 12 0 0 0 7.459.892c-.638.261-.864 1.024-.539 1.632.326.607 1.08.827 1.725.584a9.504 9.504 0 0 1 6.897.073c.64.257 1.399.053 1.737-.548Z"})]}),lN=e=>({signal:e.signal,app_id:e.app_id,action:e.action,setStage:e.setStage,bridge_url:e.bridge_url,handleVerify:e.handleVerify,setErrorState:e.setErrorState,verification_level:e.verification_level,action_description:e.action_description,partner:e.partner}),lL=e=>{let t=lf(),[r,n]=(0,x.useState)(!1),{app_id:i,action:o,signal:s,setStage:l,handleVerify:u,bridge_url:c,action_description:d,verification_level:h,setErrorState:p,partner:f}=z(lN,a),{connectorURI:m,reset:g,errorCode:v,result:y,verificationState:w}=lM(i,o,s,c,h,d,f);(0,x.useEffect)(()=>g,[g]),(0,x.useEffect)(()=>{if(w===A.xr.Failed&&(l("ERROR"),p({code:v??A.ov.GenericError})),y){if(h===A.fZ.Orb&&y.verification_level===A.fZ.Device){console.error("Credential type received from wallet does not match configured credential_types."),l("ERROR"),p({code:A.ov.CredentialUnavailable});return}return u(y)}},[y,u,w,l,v,p,h]);let{show_modal:b}=e;return(0,R.jsxs)("div",{className:lw("flex flex-col items-center text-center",b?r?"-mt-6 space-y-5 ":"-mt-6 space-y-10 ":""),children:[(0,R.jsxs)("div",{className:lw(b?"":"hidden"),children:[(0,R.jsx)("div",{className:"mb-4 flex items-center justify-center",children:(0,R.jsx)("div",{className:"flex size-14 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF]",children:(0,R.jsx)(lA,{className:"size-8 text-0d151d dark:text-white"})})}),(0,R.jsx)("p",{className:"text-2xl font-semibold text-gray-900 dark:text-white",children:U("Connect your World ID")}),(0,R.jsx)("p",{className:lw("mt-3 text-657080 dark:text-9eafc0 md:mt-2",{hidden:"mobile"===t}),children:U("Use phone camera to scan the QR code")}),(0,R.jsx)("p",{className:lw("mt-3 text-657080 dark:text-9eafc0 md:mt-2",{hidden:"mobile"!==t}),children:U("You will be redirected to the app, please return to this page once you're done")})]}),(0,R.jsxs)("div",{className:"relative w-full",children:[w===A.xr.WaitingForApp&&(0,R.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center space-y-6",children:[(0,R.jsx)(lD,{className:"size-6"}),(0,R.jsxs)("div",{children:[(0,R.jsx)("p",{className:"font-medium text-657080",children:U("Connecting...")}),(0,R.jsx)("p",{className:"text-sm font-light text-657080",children:U("Please continue in app")})]})]}),(0,R.jsx)("div",{className:lw("transition duration-500 ease-in-out",w===A.xr.WaitingForApp&&"opacity-40 blur-lg"),children:(0,R.jsx)("div",{className:"mx-auto",children:(0,R.jsx)(lR,{showQR:r,setShowQR:n,qrData:m})})})]})]})},lI=()=>(0,R.jsxs)("div",{className:"space-y-6",children:[(0,R.jsx)("div",{className:"flex justify-center",children:(0,R.jsx)(lD,{className:"size-24"})}),(0,R.jsx)("div",{className:"mt-4 text-70868f",children:U("Transmitting verification to host app. Please wait...")})]}),lV=({open:e,processing:t,onOpenChange:r,stage:n,setStage:i,setOptions:o,setErrorState:s})=>({stage:n,setStage:i,processing:t,setOptions:o,setErrorState:s,isOpen:e,onOpenChange:r}),lF=(0,x.memo)(({children:e,show_modal:t=!0,container_id:r,disable_default_modal_behavior:n=!1,language:i,...o})=>{let s=lf(),{isOpen:l,onOpenChange:u,stage:c,setStage:d,setOptions:h,setErrorState:p}=z(lV,a);(0,x.useEffect)(()=>{i&&N({language:i})},[i]),(0,x.useEffect)(()=>{if(""===o.action)throw Error(U("Action cannot be an empty string."));h(o,"props")},[o,h]);let f=(0,x.useMemo)(()=>{switch(c){case"WORLD_ID":return(0,R.jsx)(lL,{show_modal:t});case"SUCCESS":return(0,R.jsx)(lS,{});case"ERROR":return(0,R.jsx)(lP,{});case"HOST_APP_VERIFICATION":return(0,R.jsx)(lI,{});default:throw Error(U("Invalid IDKitStage :stage.",{s:String(c)}))}},[c,t]),m=(0,R.jsxs)(lv,{mode:"open",id:"idkit-widget",children:[(0,R.jsx)(lg,{}),(0,R.jsxs)(eP,{children:[(0,R.jsx)(eR,{className:"flex justify-center"}),(0,R.jsx)("div",{id:"widget-content-inline",className:"relative flex flex-col bg-white p-4 focus:outline-none dark:bg-0d151d",children:f})]})]});if(!t&&r){let e=document.getElementById(r);if(e)return(0,K.createPortal)(m,e);console.warn(`Container element with id "${r}" not found. Rendering widget inline.`)}let g=e=>{n&&e.preventDefault()};return(0,R.jsxs)(aG,{open:l,onOpenChange:u,children:[e?.({open:()=>u(!0)}),(0,R.jsx)(a5,{forceMount:!0,children:(0,R.jsx)(x.Fragment,{children:(0,R.jsx)(sX,{children:l&&(0,R.jsxs)(lv,{mode:"open",id:"idkit-widget",children:[(0,R.jsx)(lg,{}),(0,R.jsxs)("div",{id:"modal",className:"fixed z-[9999] font-sans",children:[(0,R.jsx)(a6,{asChild:!0,children:(0,R.jsx)(s_.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-lg"})}),(0,R.jsx)("div",{className:"fixed inset-0 z-[9999] overflow-y-hidden md:overflow-y-auto",children:(0,R.jsxs)("div",{className:"flex min-h-full items-end justify-center text-center md:items-center md:p-4",children:[(0,R.jsx)(li,{}),(0,R.jsx)(a9,{asChild:!0,onPointerDownOutside:g,onInteractOutside:g,children:(0,R.jsx)(s_.div,{layout:"mobile"!=s||"position",exit:"mobile"==s?"initMob":"init",initial:"mobile"==s?"initMob":"init",animate:"mobile"==s?"animateMob":"animate",variants:{init:{opacity:0,scale:.9},initMob:{translateY:"100%"},animate:{opacity:1,scale:1},animateMob:{translateY:0}},transition:{layout:{duration:.15}},className:"relative z-50 flex min-h-screen w-full flex-col bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 dark:bg-0d151d md:min-h-[35rem] md:max-w-md md:rounded-[24px]",children:(0,R.jsxs)(eP,{children:[(0,R.jsx)(eR,{className:"flex justify-center"}),(0,R.jsx)("div",{className:"mx-6 flex items-center justify-end",children:(0,R.jsx)(la,{className:"flex size-8 items-center justify-center rounded-full border-[1.2px] border-solid border-[#EBECEF] text-black dark:text-white",children:(0,R.jsx)(ly,{className:"size-4"})})}),(0,R.jsx)("div",{className:"relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center",children:f}),(0,R.jsx)("div",{className:"flex items-center justify-center border-t border-f5f5f7 p-7 md:rounded-b-2xl",children:(0,R.jsx)("a",{href:"https://developer.worldcoin.org/privacy-statement",target:"_blank",rel:"noreferrer",className:"text-sm text-657080 hover:underline",children:U("Terms & Privacy")})})]})})})]})})]})]})})})})]})});A.xr.Confirmed,A.xr.Failed}}]);