var fh=Object.defineProperty;var ph=(i,t,e)=>t in i?fh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ri=(i,t,e)=>ph(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="169",Vi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mh=0,vl=1,gh=2,Jc=1,Qc=2,Rn=3,Qn=0,We=1,Ln=2,Un=0,Gi=1,Vo=2,xl=3,Ml=4,_h=5,fi=100,vh=101,xh=102,Mh=103,yh=104,Sh=200,Eh=201,bh=202,Ah=203,Go=204,Wo=205,Th=206,wh=207,Ch=208,Rh=209,Ph=210,Lh=211,Dh=212,Ih=213,Uh=214,Xo=0,Yo=1,$o=2,qi=3,qo=4,jo=5,Ko=6,Zo=7,tu=0,Nh=1,Oh=2,Kn=0,Fh=1,Bh=2,zh=3,eu=4,Hh=5,kh=6,Vh=7,nu=300,ji=301,Ki=302,Jo=303,Qo=304,Nr=306,ta=1e3,gi=1001,ea=1002,Ve=1003,Gh=1004,Ls=1005,cn=1006,Wr=1007,_i=1008,Fn=1009,iu=1010,su=1011,ys=1012,za=1013,vi=1014,Mn=1015,Nn=1016,Ha=1017,ka=1018,Zi=1020,ru=35902,ou=1021,au=1022,dn=1023,lu=1024,cu=1025,Wi=1026,Ji=1027,Va=1028,Ga=1029,uu=1030,Wa=1031,Xa=1033,cr=33776,ur=33777,hr=33778,dr=33779,na=35840,ia=35841,sa=35842,ra=35843,oa=36196,aa=37492,la=37496,ca=37808,ua=37809,ha=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,Ma=37819,ya=37820,Sa=37821,fr=36492,Ea=36494,ba=36495,hu=36283,Aa=36284,Ta=36285,wa=36286,Wh=3200,Xh=3201,du=0,Yh=1,qn="",ln="srgb",ei="srgb-linear",Ya="display-p3",Or="display-p3-linear",Mr="linear",oe="srgb",yr="rec709",Sr="p3",Ai=7680,yl=519,$h=512,qh=513,jh=514,fu=515,Kh=516,Zh=517,Jh=518,Qh=519,Ca=35044,td=35048,Sl="300 es",Dn=2e3,Er=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,Ra=180/Math.PI;function As(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function ed(i,t){return(i%t+t)%t}function Xr(i,t,e){return(1-e)*i+e*t}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nd={DEG2RAD:pr};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],f=n[8],_=s[0],g=s[3],m=s[6],M=s[1],v=s[4],E=s[7],w=s[2],T=s[5],b=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*g+a*v+l*T,r[6]=o*m+a*E+l*b,r[1]=c*_+u*M+h*w,r[4]=c*g+u*v+h*T,r[7]=c*m+u*E+h*b,r[2]=d*_+p*M+f*w,r[5]=d*g+p*v+f*T,r[8]=d*m+p*E+f*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,f=e*h+n*d+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Xt;function pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){const i=br("canvas");return i.style.display="block",i}const El={};function mr(i){i in El||(El[i]=!0,console.warn(i))}function sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function od(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bl=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Al=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[ei]:{transfer:Mr,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ln]:{transfer:oe,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Or]:{transfer:Mr,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Al),fromReference:i=>i.applyMatrix3(bl)},[Ya]:{transfer:oe,primaries:Sr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Al),fromReference:i=>i.applyMatrix3(bl).convertLinearToSRGB()}},ad=new Set([ei,Or]),te={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ad.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ss[t].toReference,s=ss[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ss[i].primaries},getTransfer:function(i){return i===qn?Mr:ss[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ss[t].luminanceCoefficients)}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class ld{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=br("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cd=0;class mu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ud=0;class Oe extends Mi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=gi,s=gi,r=cn,o=_i,a=dn,l=Fn,c=Oe.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=As(),this.name="",this.source=new mu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=nu;Oe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],f=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(f-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,E=(p+1)/2,w=(m+1)/2,T=(u+d)/4,b=(h+_)/4,R=(f+g)/4;return v>E&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=b/n):E>w?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=R/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=b/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-f)*(g-f)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-f)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hd extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gu extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],f=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==f){let g=1-a;const m=l*d+c*p+u*f+h*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),T=Math.atan2(w,m*M);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const E=a*M;if(l=l*g+d*E,c=c*g+p*E,u=u*g+f*E,h=h*g+_*E,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+u*h+l*p-c*d,t[e+1]=l*f+u*d+c*h-a*p,t[e+2]=c*f+u*p+a*d-l*h,t[e+3]=u*f-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h-d*p*f;break;case"YXZ":this._x=d*u*h+c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h+d*p*f;break;case"ZXY":this._x=d*u*h-c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h-d*p*f;break;case"ZYX":this._x=d*u*h-c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h+d*p*f;break;case"YZX":this._x=d*u*h+c*p*f,this._y=c*p*h+d*u*f,this._z=c*u*f-d*p*h,this._w=c*u*h-d*p*f;break;case"XZY":this._x=d*u*h-c*p*f,this._y=c*p*h-d*u*f,this._z=c*u*f+d*p*h,this._w=c*u*h+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jr.copy(this).projectOnVector(t),this.sub(jr)}reflect(t){return this.sub(jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new U,Tl=new xi;class yi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(t.matrixWorld),this.union(Ds)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Is.subVectors(this.max,rs),wi.subVectors(t.a,rs),Ci.subVectors(t.b,rs),Ri.subVectors(t.c,rs),zn.subVectors(Ci,wi),Hn.subVectors(Ri,Ci),oi.subVectors(wi,Ri);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-oi.z,oi.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,oi.z,0,-oi.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-oi.y,oi.x,0];return!Kr(e,wi,Ci,Ri,Is)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,wi,Ci,Ri,Is))?!1:(Us.crossVectors(zn,Hn),e=[Us.x,Us.y,Us.z],Kr(e,wi,Ci,Ri,Is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new U,new U,new U,new U,new U,new U,new U,new U],sn=new U,Ds=new yi,wi=new U,Ci=new U,Ri=new U,zn=new U,Hn=new U,oi=new U,rs=new U,Is=new U,Us=new U,ai=new U;function Kr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ai.fromArray(i,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fd=new yi,os=new U,Zr=new U;class es{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Zr)),this.expandByPoint(os.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new U,Jr=new U,Ns=new U,kn=new U,Qr=new U,Os=new U,to=new U;class $a{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ns),a=kn.dot(this.direction),l=-kn.dot(Ns),c=kn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,f;if(u>0)if(h=o*l-a,d=o*a-l,f=r*u,h>=0)if(d>=-f)if(d<=f){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-f?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=f?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jr).addScaledVector(Ns,d),p}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){Qr.subVectors(e,t),Os.subVectors(n,t),to.crossVectors(Qr,Os);let o=this.direction.dot(to),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(Os.crossVectors(kn,Os));if(l<0)return null;const c=a*this.direction.dot(Qr.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(to);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,c,u,h,d,p,f,_,g){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,p,f,_,g)}set(t,e,n,s,r,o,a,l,c,u,h,d,p,f,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,f=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+f*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,f=c*u,_=c*h;e[0]=d+_*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-f,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,f=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,f=a*u,_=a*h;e[0]=l*u,e[4]=f*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,f=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=f*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+f,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,p=o*c,f=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-f,e[2]=f*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Vn.crossVectors(n,$e),Vn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Vn.crossVectors(n,$e)),Vn.normalize(),Fs.crossVectors($e,Vn),s[0]=Vn.x,s[4]=Fs.x,s[8]=$e.x,s[1]=Vn.y,s[5]=Fs.y,s[9]=$e.y,s[2]=Vn.z,s[6]=Fs.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],f=n[2],_=n[6],g=n[10],m=n[14],M=n[3],v=n[7],E=n[11],w=n[15],T=s[0],b=s[4],R=s[8],N=s[12],x=s[1],y=s[5],z=s[9],I=s[13],G=s[2],D=s[6],P=s[10],F=s[14],O=s[3],st=s[7],rt=s[11],dt=s[15];return r[0]=o*T+a*x+l*G+c*O,r[4]=o*b+a*y+l*D+c*st,r[8]=o*R+a*z+l*P+c*rt,r[12]=o*N+a*I+l*F+c*dt,r[1]=u*T+h*x+d*G+p*O,r[5]=u*b+h*y+d*D+p*st,r[9]=u*R+h*z+d*P+p*rt,r[13]=u*N+h*I+d*F+p*dt,r[2]=f*T+_*x+g*G+m*O,r[6]=f*b+_*y+g*D+m*st,r[10]=f*R+_*z+g*P+m*rt,r[14]=f*N+_*I+g*F+m*dt,r[3]=M*T+v*x+E*G+w*O,r[7]=M*b+v*y+E*D+w*st,r[11]=M*R+v*z+E*P+w*rt,r[15]=M*N+v*I+E*F+w*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],f=t[3],_=t[7],g=t[11],m=t[15];return f*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+g*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],f=t[12],_=t[13],g=t[14],m=t[15],M=h*g*c-_*d*c+_*l*p-a*g*p-h*l*m+a*d*m,v=f*d*c-u*g*c-f*l*p+o*g*p+u*l*m-o*d*m,E=u*_*c-f*h*c+f*a*p-o*_*p-u*a*m+o*h*m,w=f*h*l-u*_*l-f*a*d+o*_*d+u*a*g-o*h*g,T=e*M+n*v+s*E+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=M*b,t[1]=(_*d*r-h*g*r-_*s*p+n*g*p+h*s*m-n*d*m)*b,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*b,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*b,t[4]=v*b,t[5]=(u*g*r-f*d*r+f*s*p-e*g*p-u*s*m+e*d*m)*b,t[6]=(f*l*r-o*g*r-f*s*c+e*g*c+o*s*m-e*l*m)*b,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*b,t[8]=E*b,t[9]=(f*h*r-u*_*r-f*n*p+e*_*p+u*n*m-e*h*m)*b,t[10]=(o*_*r-f*a*r+f*n*c-e*_*c-o*n*m+e*a*m)*b,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*b,t[12]=w*b,t[13]=(u*_*s-f*h*s+f*n*d-e*_*d-u*n*g+e*h*g)*b,t[14]=(f*a*s-o*_*s-f*n*l+e*_*l+o*n*g-e*a*g)*b,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,f=r*h,_=o*u,g=o*h,m=a*h,M=l*c,v=l*u,E=l*h,w=n.x,T=n.y,b=n.z;return s[0]=(1-(_+m))*w,s[1]=(p+E)*w,s[2]=(f-v)*w,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(d+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(f+v)*b,s[9]=(g-M)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,f;if(a===Dn)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Er)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,p=(n+s)*u;let f,_;if(a===Dn)f=(o+r)*h,_=-2*h;else if(a===Er)f=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new U,rn=new se,pd=new U(0,0,0),md=new U(1,1,1),Vn=new U,Fs=new U,$e=new U,wl=new se,Cl=new xi;class En{constructor(t=0,e=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gd=0;const Rl=new U,Li=new xi,Tn=new se,Bs=new U,as=new U,_d=new U,vd=new xi,Pl=new U(1,0,0),Ll=new U(0,1,0),Dl=new U(0,0,1),Il={type:"added"},xd={type:"removed"},Di={type:"childadded",child:null},eo={type:"childremoved",child:null};class Ee extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new U,e=new En,n=new xi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Xt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(as,Bs,this.up):Tn.lookAt(Bs,as,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Tn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Il),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),eo.child=t,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Il),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new U,wn=new U,no=new U,Cn=new U,Ii=new U,Ui=new U,Ul=new U,io=new U,so=new U,ro=new U,oo=new ie,ao=new ie,lo=new ie;class un{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),wn.subVectors(n,e),no.subVectors(t,e);const o=on.dot(on),a=on.dot(wn),l=on.dot(no),c=wn.dot(wn),u=wn.dot(no),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,f=(o*u-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oo.setScalar(0),ao.setScalar(0),lo.setScalar(0),oo.fromBufferAttribute(t,e),ao.fromBufferAttribute(t,n),lo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oo,r.x),o.addScaledVector(ao,r.y),o.addScaledVector(lo,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),wn.subVectors(t,e),on.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ii.subVectors(s,n),Ui.subVectors(r,n),io.subVectors(t,n);const l=Ii.dot(io),c=Ui.dot(io);if(l<=0&&c<=0)return e.copy(n);so.subVectors(t,s);const u=Ii.dot(so),h=Ui.dot(so);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ii,o);ro.subVectors(t,r);const p=Ii.dot(ro),f=Ui.dot(ro);if(f>=0&&p<=f)return e.copy(r);const _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Ui,a);const g=u*f-p*h;if(g<=0&&h-u>=0&&p-f>=0)return Ul.subVectors(r,s),a=(h-u)/(h-u+(p-f)),e.copy(s).addScaledVector(Ul,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=ed(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=co(o,r,t+1/3),this.g=co(o,r,t),this.b=co(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=vu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return te.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ue(Pe.r*255,0,255))*65536+Math.round(Ue(Pe.g*255,0,255))*256+Math.round(Ue(Pe.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ln){te.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(zs);const n=Xr(Gn.h,zs.h,e),s=Xr(Gn.s,zs.s,e),r=Xr(Gn.l,zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Gt;Gt.NAMES=vu;let Md=0;class Si extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Gi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fr extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,Hs=new Pt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),t}}class xu extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mu extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yd=0;const Je=new se,uo=new Ee,Ni=new U,qe=new yi,ls=new yi,Me=new U;class Fe extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pu(t)?Mu:xu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(qe.min,ls.min),qe.expandByPoint(Me),Me.addVectors(qe.max,ls.max),qe.expandByPoint(Me)):(qe.expandByPoint(ls.min),qe.expandByPoint(ls.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),Me.add(Ni)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;const c=new U,u=new U,h=new U,d=new Pt,p=new Pt,f=new Pt,_=new U,g=new U;function m(R,N,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,N),f.fromBufferAttribute(r,x),u.sub(c),h.sub(c),p.sub(d),f.sub(d);const y=1/(p.x*f.y-f.x*p.y);isFinite(y)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(h,-p.y).multiplyScalar(y),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(y),a[R].add(_),a[N].add(_),a[x].add(_),l[R].add(g),l[N].add(g),l[x].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,N=M.length;R<N;++R){const x=M[R],y=x.start,z=x.count;for(let I=y,G=y+z;I<G;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const v=new U,E=new U,w=new U,T=new U;function b(R){w.fromBufferAttribute(s,R),T.copy(w);const N=a[R];v.copy(N),v.sub(w.multiplyScalar(w.dot(N))).normalize(),E.crossVectors(T,N);const y=E.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,y)}for(let R=0,N=M.length;R<N;++R){const x=M[R],y=x.start,z=x.count;for(let I=y,G=y+z;I<G;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,f=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let m=0;m<u;m++)d[f++]=c[p++]}return new Ke(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new se,li=new $a,ks=new es,Ol=new U,Vs=new U,Gs=new U,Ws=new U,ho=new U,Xs=new U,Fl=new U,Ys=new U;class ae extends Ee{constructor(t=new Fe,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ho.fromBufferAttribute(h,t),o?Xs.addScaledVector(ho,u):Xs.addScaledVector(ho.sub(e),u))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(ks.containsPoint(li.origin)===!1&&(li.intersectSphere(ks,Ol)===null||li.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=d.length;f<_;f++){const g=d[f],m=o[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let E=M,w=v;E<w;E+=3){const T=a.getX(E),b=a.getX(E+1),R=a.getX(E+2);s=$s(this,m,t,n,c,u,h,T,b,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const M=a.getX(g),v=a.getX(g+1),E=a.getX(g+2);s=$s(this,o,t,n,c,u,h,M,v,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,_=d.length;f<_;f++){const g=d[f],m=o[g.materialIndex],M=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=M,w=v;E<w;E+=3){const T=E,b=E+1,R=E+2;s=$s(this,m,t,n,c,u,h,T,b,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const M=g,v=g+1,E=g+2;s=$s(this,o,t,n,c,u,h,M,v,E),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Sd(i,t,e,n,s,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function $s(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vs),i.getVertexPosition(l,Gs),i.getVertexPosition(c,Ws);const u=Sd(i,t,e,n,Vs,Gs,Ws,Fl);if(u){const h=new U;un.getBarycoord(Fl,Vs,Gs,Ws,h),s&&(u.uv=un.getInterpolatedAttribute(s,a,l,c,h,new Pt)),r&&(u.uv1=un.getInterpolatedAttribute(r,a,l,c,h,new Pt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};un.getNormal(Vs,Gs,Ws,d.normal),u.face=d,u.barycoord=h}return u}class Zn extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,s,o,2),f("x","z","y",1,-1,t,n,-e,s,o,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function f(_,g,m,M,v,E,w,T,b,R,N){const x=E/b,y=w/R,z=E/2,I=w/2,G=T/2,D=b+1,P=R+1;let F=0,O=0;const st=new U;for(let rt=0;rt<P;rt++){const dt=rt*y-I;for(let vt=0;vt<D;vt++){const lt=vt*x-z;st[_]=lt*M,st[g]=dt*v,st[m]=G,c.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[m]=T>0?1:-1,u.push(st.x,st.y,st.z),h.push(vt/b),h.push(1-rt/R),F+=1}}for(let rt=0;rt<R;rt++)for(let dt=0;dt<b;dt++){const vt=d+dt+D*rt,lt=d+dt+D*(rt+1),W=d+(dt+1)+D*(rt+1),Q=d+(dt+1)+D*rt;l.push(vt,lt,Q),l.push(lt,W,Q),O+=6}a.addGroup(p,O,N),p+=O,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ed(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ar={clone:Qi,merge:De};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Su extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new U,Bl=new Pt,zl=new Pt;class ke extends Su{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,zl),e.subVectors(zl,Bl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Fi=1;class Td extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Oi,Fi,t,e);s.layers=this.layers,this.add(s);const r=new ke(Oi,Fi,t,e);r.layers=this.layers,this.add(r);const o=new ke(Oi,Fi,t,e);o.layers=this.layers,this.add(o);const a=new ke(Oi,Fi,t,e);a.layers=this.layers,this.add(a);const l=new ke(Oi,Fi,t,e);l.layers=this.layers,this.add(l);const c=new ke(Oi,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Eu extends Oe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wd extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zn(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Un});r.uniforms.tEquirect.value=e;const o=new ae(s,r),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=cn),new Td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const fo=new U,Cd=new U,Rd=new Xt;class Yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=fo.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rd.getNormalMatrix(t),s=this.coplanarPoint(fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new es,qs=new U;class qa{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],f=s[9],_=s[10],g=s[11],m=s[12],M=s[13],v=s[14],E=s[15];if(n[0].setComponents(l-r,d-c,g-p,E-m).normalize(),n[1].setComponents(l+r,d+c,g+p,E+m).normalize(),n[2].setComponents(l+o,d+u,g+f,E+M).normalize(),n[3].setComponents(l-o,d-u,g-f,E-M).normalize(),n[4].setComponents(l-a,d-h,g-_,E-v).normalize(),e===Dn)n[5].setComponents(l+a,d+h,g+_,E+v).normalize();else if(e===Er)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qs.x=s.normal.x>0?t.max.x:t.min.x,qs.y=s.normal.y>0?t.max.y:t.min.y,qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<h.length;p++){const f=h[d],_=h[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,f=h.length;p<f;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ts extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],f=[],_=[],g=[];for(let m=0;m<u;m++){const M=m*d-o;for(let v=0;v<c;v++){const E=v*h-r;f.push(E,-M,0),_.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,E=M+c*(m+1),w=M+1+c*(m+1),T=M+1+c*m;p.push(v,E,T),p.push(E,w,T)}this.setIndex(p),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,If=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Ld,alphahash_pars_fragment:Dd,alphamap_fragment:Id,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Od,aomap_fragment:Fd,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:Hd,begin_vertex:kd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:qd,clipping_planes_vertex:jd,color_fragment:Kd,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:Qd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:of,emissivemap_pars_fragment:af,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:uf,envmap_common_pars_fragment:hf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:bf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:vf,gradientmap_pars_fragment:xf,lightmap_pars_fragment:Mf,lights_lambert_fragment:yf,lights_lambert_pars_fragment:Sf,lights_pars_begin:Ef,lights_toon_fragment:Af,lights_toon_pars_fragment:Tf,lights_phong_fragment:wf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:If,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Ff,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:Hf,map_particle_pars_fragment:kf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:Yf,morphtarget_pars_vertex:$f,morphtarget_vertex:qf,normal_fragment_begin:jf,normal_fragment_maps:Kf,normal_pars_fragment:Zf,normal_pars_vertex:Jf,normal_vertex:Qf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:op,premultiplied_alpha_fragment:ap,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:up,roughnessmap_fragment:hp,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:vp,skinning_vertex:xp,skinnormal_vertex:Mp,specularmap_fragment:yp,specularmap_pars_fragment:Sp,tonemapping_fragment:Ep,tonemapping_pars_fragment:bp,transmission_fragment:Ap,transmission_pars_fragment:Tp,uv_pars_fragment:wp,uv_pars_vertex:Cp,uv_vertex:Rp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Ip,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Op,depth_vert:Fp,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:Hp,equirect_vert:kp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:Yp,meshlambert_vert:$p,meshlambert_frag:qp,meshmatcap_vert:jp,meshmatcap_frag:Kp,meshnormal_vert:Zp,meshnormal_frag:Jp,meshphong_vert:Qp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:om,shadow_vert:am,shadow_frag:lm,sprite_vert:cm,sprite_frag:um},xt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},_n={basic:{uniforms:De([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:De([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:De([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:De([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:De([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:De([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:De([xt.points,xt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:De([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:De([xt.common,xt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:De([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:De([xt.sprite,xt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:De([xt.common,xt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:De([xt.lights,xt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};_n.physical={uniforms:De([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const js={r:0,b:0,g:0},ui=new En,hm=new se;function dm(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function f(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const E=f(M);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,v){const E=f(v);E&&(E.isCubeTexture||E.mapping===Nr)?(u===void 0&&(u=new ae(new Zn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Qi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ui.copy(v.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hm.makeRotationFromEuler(ui)),u.material.toneMapped=te.getTransfer(E.colorSpace)!==oe,(h!==E||d!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ae(new Ts(2,2),new Ge({name:"BackgroundMaterial",uniforms:Qi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(E.colorSpace)!==oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(js,yu(i)),n.buffers.color.setClear(js.r,js.g,js.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:g}}function fm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,y,z,I,G){let D=!1;const P=h(I,z,y);r!==P&&(r=P,c(r.object)),D=p(x,I,z,G),D&&f(x,I,z,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,E(x,y,z,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,y,z){const I=z.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let D=G[y.id];D===void 0&&(D={},G[y.id]=D);let P=D[I];return P===void 0&&(P=d(l()),D[I]=P),P}function d(x){const y=[],z=[],I=[];for(let G=0;G<e;G++)y[G]=0,z[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:z,attributeDivisors:I,object:x,attributes:{},index:null}}function p(x,y,z,I){const G=r.attributes,D=y.attributes;let P=0;const F=z.getAttributes();for(const O in F)if(F[O].location>=0){const rt=G[O];let dt=D[O];if(dt===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),rt===void 0||rt.attribute!==dt||dt&&rt.data!==dt.data)return!0;P++}return r.attributesNum!==P||r.index!==I}function f(x,y,z,I){const G={},D=y.attributes;let P=0;const F=z.getAttributes();for(const O in F)if(F[O].location>=0){let rt=D[O];rt===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const dt={};dt.attribute=rt,rt&&rt.data&&(dt.data=rt.data),G[O]=dt,P++}r.attributes=G,r.attributesNum=P,r.index=I}function _(){const x=r.newAttributes;for(let y=0,z=x.length;y<z;y++)x[y]=0}function g(x){m(x,0)}function m(x,y){const z=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;z[x]=1,I[x]===0&&(i.enableVertexAttribArray(x),I[x]=1),G[x]!==y&&(i.vertexAttribDivisor(x,y),G[x]=y)}function M(){const x=r.newAttributes,y=r.enabledAttributes;for(let z=0,I=y.length;z<I;z++)y[z]!==x[z]&&(i.disableVertexAttribArray(z),y[z]=0)}function v(x,y,z,I,G,D,P){P===!0?i.vertexAttribIPointer(x,y,z,G,D):i.vertexAttribPointer(x,y,z,I,G,D)}function E(x,y,z,I){_();const G=I.attributes,D=z.getAttributes(),P=y.defaultAttributeValues;for(const F in D){const O=D[F];if(O.location>=0){let st=G[F];if(st===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const rt=st.normalized,dt=st.itemSize,vt=t.get(st);if(vt===void 0)continue;const lt=vt.buffer,W=vt.type,Q=vt.bytesPerElement,ht=W===i.INT||W===i.UNSIGNED_INT||st.gpuType===za;if(st.isInterleavedBufferAttribute){const ut=st.data,Mt=ut.stride,Et=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Lt=0;Lt<O.locationSize;Lt++)m(O.location+Lt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Lt=0;Lt<O.locationSize;Lt++)g(O.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Lt=0;Lt<O.locationSize;Lt++)v(O.location+Lt,dt/O.locationSize,W,rt,Mt*Q,(Et+dt/O.locationSize*Lt)*Q,ht)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<O.locationSize;ut++)m(O.location+ut,st.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<O.locationSize;ut++)g(O.location+ut);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ut=0;ut<O.locationSize;ut++)v(O.location+ut,dt/O.locationSize,W,rt,dt*Q,dt/O.locationSize*ut*Q,ht)}}else if(P!==void 0){const rt=P[F];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(O.location,rt);break;case 3:i.vertexAttrib3fv(O.location,rt);break;case 4:i.vertexAttrib4fv(O.location,rt);break;default:i.vertexAttrib1fv(O.location,rt)}}}}M()}function w(){R();for(const x in n){const y=n[x];for(const z in y){const I=y[z];for(const G in I)u(I[G].object),delete I[G];delete y[z]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const y=n[x.id];for(const z in y){const I=y[z];for(const G in I)u(I[G].object),delete I[G];delete y[z]}delete n[x.id]}function b(x){for(const y in n){const z=n[y];if(z[x.id]===void 0)continue;const I=z[x.id];for(const G in I)u(I[G].object),delete I[G];delete z[x.id]}}function R(){N(),o=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function pm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let f=0;f<h;f++)p+=u[f];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],u[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];for(let _=0;_<d.length;_++)e.update(f,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==dn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Fn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Mn&&!R)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:w,maxSamples:T}}function gm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const f=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||f===null||f.length===0||r&&!g)r?u(null):c();else{const M=r?0:n,v=M*4;let E=m.clippingState||null;l.value=E,E=u(f,d,v,p);for(let w=0;w!==v;++w)E[w]=e[w];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,f){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const m=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,E=p;v!==_;++v,E+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(g,E),g[E+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function _m(i){let t=new WeakMap;function e(o,a){return a===Jo?o.mapping=ji:a===Qo&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jo||a===Qo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ja extends Su{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,Hl=[.125,.215,.35,.446,.526,.582],pi=20,po=new ja,kl=new Gt;let mo=null,go=0,_o=0,vo=!1;const di=(1+Math.sqrt(5))/2,Bi=1/di,Vl=[new U(-di,Bi,0),new U(di,Bi,0),new U(-Bi,0,di),new U(Bi,0,di),new U(0,di,-Bi),new U(0,di,Bi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Gl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=vo,t.scissorTest=!1,Ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Nn,format:dn,colorSpace:ei,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vm(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(kl),u.toneMapping=Kn,u.autoClear=!1;const p=new Fr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),f=new ae(new Zn,p);let _=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(kl),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Ks(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(f,a),u.render(t,a)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ji||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vl[(s-r-1)%Vl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*pi-1),_=r/f,g=isFinite(r)?1+Math.floor(u*_):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);const m=[];let M=0;for(let b=0;b<pi;++b){const R=b/_,N=Math.exp(-R*R/2);m.push(N),b===0?M+=N:b<g&&(M+=2*N)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=f,d.mipInt.value=v-n;const E=this._sizeLods[s],w=3*E*(s>v-ki?s-v+ki:0),T=4*(this._cubeSize-E);Ks(e,w,T,3*E,2*E),l.setRenderTarget(e),l.render(h,po)}}function vm(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+Hl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ki?l=Hl[o-i+ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,f=6,_=3,g=2,m=1,M=new Float32Array(_*f*p),v=new Float32Array(g*f*p),E=new Float32Array(m*f*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,R=T>2?0:-1,N=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];M.set(N,_*f*T),v.set(d,g*f*T);const x=[T,T,T,T,T,T];E.set(x,m*f*T)}const w=new Fe;w.setAttribute("position",new Ke(M,_)),w.setAttribute("uv",new Ke(v,g)),w.setAttribute("faceIndex",new Ke(E,m)),t.push(w),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){const n=new fn(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xm(i,t,e){const n=new Float32Array(pi),s=new U(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xl(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Yl(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jo||l===Qo,u=l===ji||l===Ki;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Gl(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Gl(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ym(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const f in d.attributes)t.remove(d.attributes[f]);for(const f in d.morphAttributes){const _=d.morphAttributes[f];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const f in p){const _=p[f];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,f=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,E=M.length;v<E;v+=3){const w=M[v+0],T=M[v+1],b=M[v+2];d.push(w,T,T,b,b,w)}}else if(f!==void 0){const M=f.array;_=f.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const w=v+0,T=v+1,b=v+2;d.push(w,T,T,b,b,w)}}else return;const g=new(pu(d)?Mu:xu)(d,1);g.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Em(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,f){f!==0&&(i.drawElementsInstanced(n,p,r,d*o,f),e.update(p,n,f))}function u(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=p[m];e.update(g,n,1)}function h(d,p,f,_){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,f);let m=0;for(let M=0;M<f;M++)m+=p[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Am(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let N=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),f===!0&&(v=2),_===!0&&(v=3);let E=a.attributes.position.count*v,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const T=new Float32Array(E*w*4*h),b=new gu(T,E,w,h);b.type=Mn,b.needsUpdate=!0;const R=v*4;for(let x=0;x<h;x++){const y=g[x],z=m[x],I=M[x],G=E*w*4*x;for(let D=0;D<y.count;D++){const P=D*R;p===!0&&(s.fromBufferAttribute(y,D),T[G+P+0]=s.x,T[G+P+1]=s.y,T[G+P+2]=s.z,T[G+P+3]=0),f===!0&&(s.fromBufferAttribute(z,D),T[G+P+4]=s.x,T[G+P+5]=s.y,T[G+P+6]=s.z,T[G+P+7]=0),_===!0&&(s.fromBufferAttribute(I,D),T[G+P+8]=s.x,T[G+P+9]=s.y,T[G+P+10]=s.z,T[G+P+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:b,size:new Pt(E,w)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Tm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Au extends Oe{constructor(t,e,n,s,r,o,a,l,c,u=Wi){if(u!==Wi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=vi),n===void 0&&u===Ji&&(n=Zi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tu=new Oe,$l=new Au(1,1),wu=new gu,Cu=new dd,Ru=new Eu,ql=[],jl=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),ve(e,n)}}function Dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),ve(e,n)}}function Im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),ve(e,n)}}function Um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=fu,r=$l):r=Tu,e.setTexture2D(t||r,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cu,s)}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wu,s)}function Ym(i){switch(i){case 5126:return wm;case 35664:return Cm;case 35665:return Rm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Om;case 35669:case 35673:return Fm;case 5125:return Bm;case 36294:return zm;case 36295:return Hm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function $m(i,t){i.uniform1fv(this.addr,t)}function qm(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function jm(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Km(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Zm(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jm(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qm(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function tg(i,t){i.uniform1iv(this.addr,t)}function eg(i,t){i.uniform2iv(this.addr,t)}function ng(i,t){i.uniform3iv(this.addr,t)}function ig(i,t){i.uniform4iv(this.addr,t)}function sg(i,t){i.uniform1uiv(this.addr,t)}function rg(i,t){i.uniform2uiv(this.addr,t)}function og(i,t){i.uniform3uiv(this.addr,t)}function ag(i,t){i.uniform4uiv(this.addr,t)}function lg(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Tu,r[o])}function cg(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Cu,r[o])}function ug(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ru,r[o])}function hg(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wu,r[o])}function dg(i){switch(i){case 5126:return $m;case 35664:return qm;case 35665:return jm;case 35666:return Km;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return hg}}class fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ym(e.type)}}class pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dg(e.type)}}class mg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function gg(i,t,e){const n=i.name,s=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),o=xo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ql(e,c===void 0?new fg(a,i,t):new pg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new mg(a),Ql(e,h)),e=h}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);gg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _g=37297;let vg=0;function xg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Mg(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Sr&&e===yr?n="LinearDisplayP3ToLinearSRGB":t===yr&&e===Sr&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case Or:return[n,"LinearTransferOETF"];case ln:case Ya:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ec(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xg(i.getShaderSource(t),o)}else return s}function yg(i,t){const e=Mg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Sg(i,t){let e;switch(t){case Fh:e="Linear";break;case Bh:e="Reinhard";break;case zh:e="Cineon";break;case eu:e="ACESFilmic";break;case kh:e="AgX";break;case Vh:e="Neutral";break;case Hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zs=new U;function Eg(){te.getLuminanceCoefficients(Zs);const i=Zs.x.toFixed(4),t=Zs.y.toFixed(4),e=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vs(i){return i!==""}function nc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(wg,Rg)}const Cg=new Map;function Rg(i,t){let e=Wt[t];if(e===void 0){const n=Cg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pa(e)}const Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(i){return i.replace(Pg,Lg)}function Lg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function Ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tu:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Oh:t="ENVMAP_BLENDING_ADD";break}return t}function Og(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Dg(e),c=Ig(e),u=Ug(e),h=Ng(e),d=Og(e),p=bg(e),f=Ag(r),_=s.createProgram();let g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vs).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(g=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?Sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,yg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=Pa(o),o=nc(o,e),o=ic(o,e),a=Pa(a),a=nc(a,e),a=ic(a,e),o=sc(o),a=sc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+g+o,E=M+m+a,w=tc(s,s.VERTEX_SHADER,v),T=tc(s,s.FRAGMENT_SHADER,E);s.attachShader(_,w),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(y){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),I=s.getShaderInfoLog(w).trim(),G=s.getShaderInfoLog(T).trim();let D=!0,P=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const F=ec(s,w,"vertex"),O=ec(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+z+`
`+F+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||G==="")&&(P=!1);P&&(y.diagnostics={runnable:D,programLog:z,vertexShader:{log:I,prefix:g},fragmentShader:{log:G,prefix:m}})}s.deleteShader(w),s.deleteShader(T),R=new gr(s,_),N=Tg(s,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let N;this.getAttributes=function(){return N===void 0&&b(this),N};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,_g)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let Bg=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hg(t),e.set(t,n)),n}}class Hg{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}}function kg(i,t,e,n,s,r,o){const a=new _u,l=new zg,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,z,I,G){const D=I.fog,P=G.geometry,F=x.isMeshStandardMaterial?I.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||F),st=O&&O.mapping===Nr?O.image.height:null,rt=_[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const dt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,vt=dt!==void 0?dt.length:0;let lt=0;P.morphAttributes.position!==void 0&&(lt=1),P.morphAttributes.normal!==void 0&&(lt=2),P.morphAttributes.color!==void 0&&(lt=3);let W,Q,ht,ut;if(rt){const we=_n[rt];W=we.vertexShader,Q=we.fragmentShader}else W=x.vertexShader,Q=x.fragmentShader,l.update(x),ht=l.getVertexShaderID(x),ut=l.getFragmentShaderID(x);const Mt=i.getRenderTarget(),Et=G.isInstancedMesh===!0,Lt=G.isBatchedMesh===!0,kt=!!x.map,Bt=!!x.matcap,L=!!O,qt=!!x.aoMap,It=!!x.lightMap,Ot=!!x.bumpMap,ot=!!x.normalMap,Tt=!!x.displacementMap,ct=!!x.emissiveMap,C=!!x.metalnessMap,S=!!x.roughnessMap,X=x.anisotropy>0,Z=x.clearcoat>0,et=x.dispersion>0,J=x.iridescence>0,Y=x.sheen>0,q=x.transmission>0,tt=X&&!!x.anisotropyMap,Ct=Z&&!!x.clearcoatMap,it=Z&&!!x.clearcoatNormalMap,ft=Z&&!!x.clearcoatRoughnessMap,gt=J&&!!x.iridescenceMap,mt=J&&!!x.iridescenceThicknessMap,_t=Y&&!!x.sheenColorMap,zt=Y&&!!x.sheenRoughnessMap,Ft=!!x.specularMap,Zt=!!x.specularColorMap,H=!!x.specularIntensityMap,St=q&&!!x.transmissionMap,j=q&&!!x.thicknessMap,nt=!!x.gradientMap,yt=!!x.alphaMap,bt=x.alphaTest>0,$t=!!x.alphaHash,ue=!!x.extensions;let be=Kn;x.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(be=i.toneMapping);const jt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Q,defines:x.defines,customVertexShaderID:ht,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&G._colorsTexture!==null,instancing:Et,instancingColor:Et&&G.instanceColor!==null,instancingMorph:Et&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ei,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Bt,envMap:L,envMapMode:L&&O.mapping,envMapCubeUVHeight:st,aoMap:qt,lightMap:It,bumpMap:Ot,normalMap:ot,displacementMap:p&&Tt,emissiveMap:ct,normalMapObjectSpace:ot&&x.normalMapType===Yh,normalMapTangentSpace:ot&&x.normalMapType===du,metalnessMap:C,roughnessMap:S,anisotropy:X,anisotropyMap:tt,clearcoat:Z,clearcoatMap:Ct,clearcoatNormalMap:it,clearcoatRoughnessMap:ft,dispersion:et,iridescence:J,iridescenceMap:gt,iridescenceThicknessMap:mt,sheen:Y,sheenColorMap:_t,sheenRoughnessMap:zt,specularMap:Ft,specularColorMap:Zt,specularIntensityMap:H,transmission:q,transmissionMap:St,thicknessMap:j,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Gi&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:bt,alphaHash:$t,combine:x.combine,mapUv:kt&&g(x.map.channel),aoMapUv:qt&&g(x.aoMap.channel),lightMapUv:It&&g(x.lightMap.channel),bumpMapUv:Ot&&g(x.bumpMap.channel),normalMapUv:ot&&g(x.normalMap.channel),displacementMapUv:Tt&&g(x.displacementMap.channel),emissiveMapUv:ct&&g(x.emissiveMap.channel),metalnessMapUv:C&&g(x.metalnessMap.channel),roughnessMapUv:S&&g(x.roughnessMap.channel),anisotropyMapUv:tt&&g(x.anisotropyMap.channel),clearcoatMapUv:Ct&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:zt&&g(x.sheenRoughnessMap.channel),specularMapUv:Ft&&g(x.specularMap.channel),specularColorMapUv:Zt&&g(x.specularColorMap.channel),specularIntensityMapUv:H&&g(x.specularIntensityMap.channel),transmissionMapUv:St&&g(x.transmissionMap.channel),thicknessMapUv:j&&g(x.thicknessMap.channel),alphaMapUv:yt&&g(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ot||X),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!P.attributes.uv&&(kt||yt),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function M(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)y.push(z),y.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(v(y,x),E(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),x.push(a.mask)}function w(x){const y=_[x.type];let z;if(y){const I=_n[y];z=Ar.clone(I.uniforms)}else z=x.uniforms;return z}function T(x,y){let z;for(let I=0,G=u.length;I<G;I++){const D=u[I];if(D.cacheKey===y){z=D,++z.usedTimes;break}}return z===void 0&&(z=new Fg(i,y,x,r),u.push(z)),z}function b(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function R(x){l.remove(x)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:w,acquireProgram:T,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:N}}function Vg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ac(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,f,_,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:f,renderOrder:h.renderOrder,z:_,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=f,m.renderOrder=h.renderOrder,m.z=_,m.group=g),t++,m}function a(h,d,p,f,_,g){const m=o(h,d,p,f,_,g);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(h,d,p,f,_,g){const m=o(h,d,p,f,_,g);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||Gg),n.length>1&&n.sort(d||oc),s.length>1&&s.sort(d||oc)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Wg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ac,i.set(n,[o])):s>=r.length?(o=new ac,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $g=0;function qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jg(i){const t=new Xg,e=Yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new se,o=new se;function a(c){let u=0,h=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,f=0,_=0,g=0,m=0,M=0,v=0,E=0,w=0,T=0,b=0;c.sort(qg);for(let N=0,x=c.length;N<x;N++){const y=c[N],z=y.color,I=y.intensity,G=y.distance,D=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=z.r*I,h+=z.g*I,d+=z.b*I;else if(y.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(y.sh.coefficients[P],I);b++}else if(y.isDirectionalLight){const P=t.get(y);if(P.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const F=y.shadow,O=e.get(y);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=D,n.directionalShadowMatrix[p]=y.shadow.matrix,M++}n.directional[p]=P,p++}else if(y.isSpotLight){const P=t.get(y);P.position.setFromMatrixPosition(y.matrixWorld),P.color.copy(z).multiplyScalar(I),P.distance=G,P.coneCos=Math.cos(y.angle),P.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),P.decay=y.decay,n.spot[_]=P;const F=y.shadow;if(y.map&&(n.spotLightMap[w]=y.map,w++,F.updateMatrices(y),y.castShadow&&T++),n.spotLightMatrix[_]=F.matrix,y.castShadow){const O=e.get(y);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=D,E++}_++}else if(y.isRectAreaLight){const P=t.get(y);P.color.copy(z).multiplyScalar(I),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),n.rectArea[g]=P,g++}else if(y.isPointLight){const P=t.get(y);if(P.color.copy(y.color).multiplyScalar(y.intensity),P.distance=y.distance,P.decay=y.decay,y.castShadow){const F=y.shadow,O=e.get(y);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,n.pointShadow[f]=O,n.pointShadowMap[f]=D,n.pointShadowMatrix[f]=y.shadow.matrix,v++}n.point[f]=P,f++}else if(y.isHemisphereLight){const P=t.get(y);P.skyColor.copy(y.color).multiplyScalar(I),P.groundColor.copy(y.groundColor).multiplyScalar(I),n.hemi[m]=P,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==v||R.numSpotShadows!==E||R.numSpotMaps!==w||R.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=E+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,R.directionalLength=p,R.pointLength=f,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=v,R.numSpotShadows=E,R.numSpotMaps=w,R.numLightProbes=b,n.version=$g++)}function l(c,u){let h=0,d=0,p=0,f=0,_=0;const g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),h++}else if(v.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const E=n.rectArea[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),f++}else if(v.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function lc(i){const t=new jg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new lc(i),t.set(s,[a])):r>=o.length?(a=new lc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zg extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jg extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function e0(i,t,e){let n=new qa;const s=new Pt,r=new Pt,o=new ie,a=new Zg({depthPacking:Xh}),l=new Jg,c={},u=e.maxTextureSize,h={[Qn]:We,[We]:Qn,[Ln]:Ln},d=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:Qg,fragmentShader:t0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new Fe;f.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let m=this.type;this.render=function(T,b,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const N=i.getRenderTarget(),x=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Un),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=m!==Rn&&this.type===Rn,G=m===Rn&&this.type!==Rn;for(let D=0,P=T.length;D<P;D++){const F=T[D],O=F.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const st=O.getFrameExtents();if(s.multiply(st),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,O.mapSize.y=r.y)),O.map===null||I===!0||G===!0){const dt=this.type!==Rn?{minFilter:Ve,magFilter:Ve}:{};O.map!==null&&O.map.dispose(),O.map=new fn(s.x,s.y,dt),O.map.texture.name=F.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const rt=O.getViewportCount();for(let dt=0;dt<rt;dt++){const vt=O.getViewport(dt);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),z.viewport(o),O.updateMatrices(F,dt),n=O.getFrustum(),E(b,R,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===Rn&&M(O,R),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(N,x,y)};function M(T,b){const R=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,R,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,R,p,_,null)}function v(T,b,R,N){let x=null;const y=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)x=y;else if(x=R.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=x.uuid,I=b.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let D=G[I];D===void 0&&(D=x.clone(),G[I]=D,b.addEventListener("dispose",w)),x=D}if(x.visible=b.visible,x.wireframe=b.wireframe,N===Rn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=R}return x}function E(T,b,R,N,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Rn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const I=t.update(T),G=T.material;if(Array.isArray(G)){const D=I.groups;for(let P=0,F=D.length;P<F;P++){const O=D[P],st=G[O.materialIndex];if(st&&st.visible){const rt=v(T,st,N,x);T.onBeforeShadow(i,T,b,R,I,rt,O),i.renderBufferDirect(R,null,I,rt,T,O),T.onAfterShadow(i,T,b,R,I,rt,O)}}}else if(G.visible){const D=v(T,G,N,x);T.onBeforeShadow(i,T,b,R,I,D,null),i.renderBufferDirect(R,null,I,D,T,null),T.onAfterShadow(i,T,b,R,I,D,null)}}const z=T.children;for(let I=0,G=z.length;I<G;I++)E(z[I],b,R,N,x)}function w(T){T.target.removeEventListener("dispose",w);for(const R in c){const N=c[R],x=T.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}const n0={[Xo]:Yo,[$o]:Ko,[qo]:Zo,[qi]:jo,[Yo]:Xo,[Ko]:$o,[Zo]:qo,[jo]:qi};function i0(i){function t(){let H=!1;const St=new ie;let j=null;const nt=new ie(0,0,0,0);return{setMask:function(yt){j!==yt&&!H&&(i.colorMask(yt,yt,yt,yt),j=yt)},setLocked:function(yt){H=yt},setClear:function(yt,bt,$t,ue,be){be===!0&&(yt*=ue,bt*=ue,$t*=ue),St.set(yt,bt,$t,ue),nt.equals(St)===!1&&(i.clearColor(yt,bt,$t,ue),nt.copy(St))},reset:function(){H=!1,j=null,nt.set(-1,0,0,0)}}}function e(){let H=!1,St=!1,j=null,nt=null,yt=null;return{setReversed:function(bt){St=bt},setTest:function(bt){bt?ht(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(bt){j!==bt&&!H&&(i.depthMask(bt),j=bt)},setFunc:function(bt){if(St&&(bt=n0[bt]),nt!==bt){switch(bt){case Xo:i.depthFunc(i.NEVER);break;case Yo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=bt}},setLocked:function(bt){H=bt},setClear:function(bt){yt!==bt&&(i.clearDepth(bt),yt=bt)},reset:function(){H=!1,j=null,nt=null,yt=null}}}function n(){let H=!1,St=null,j=null,nt=null,yt=null,bt=null,$t=null,ue=null,be=null;return{setTest:function(jt){H||(jt?ht(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(jt){St!==jt&&!H&&(i.stencilMask(jt),St=jt)},setFunc:function(jt,we,Ce){(j!==jt||nt!==we||yt!==Ce)&&(i.stencilFunc(jt,we,Ce),j=jt,nt=we,yt=Ce)},setOp:function(jt,we,Ce){(bt!==jt||$t!==we||ue!==Ce)&&(i.stencilOp(jt,we,Ce),bt=jt,$t=we,ue=Ce)},setLocked:function(jt){H=jt},setClear:function(jt){be!==jt&&(i.clearStencil(jt),be=jt)},reset:function(){H=!1,St=null,j=null,nt=null,yt=null,bt=null,$t=null,ue=null,be=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,f=!1,_=null,g=null,m=null,M=null,v=null,E=null,w=null,T=new Gt(0,0,0),b=0,R=!1,N=null,x=null,y=null,z=null,I=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,P=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=P>=1):F.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=P>=2);let O=null,st={};const rt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),vt=new ie().fromArray(rt),lt=new ie().fromArray(dt);function W(H,St,j,nt){const yt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(H,bt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<j;$t++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(St+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return bt}const Q={};Q[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),r.setFunc(qi),It(!1),Ot(vl),ht(i.CULL_FACE),L(Un);function ht(H){c[H]!==!0&&(i.enable(H),c[H]=!0)}function ut(H){c[H]!==!1&&(i.disable(H),c[H]=!1)}function Mt(H,St){return u[H]!==St?(i.bindFramebuffer(H,St),u[H]=St,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Et(H,St){let j=d,nt=!1;if(H){j=h.get(St),j===void 0&&(j=[],h.set(St,j));const yt=H.textures;if(j.length!==yt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,$t=yt.length;bt<$t;bt++)j[bt]=i.COLOR_ATTACHMENT0+bt;j.length=yt.length,nt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,nt=!0);nt&&i.drawBuffers(j)}function Lt(H){return p!==H?(i.useProgram(H),p=H,!0):!1}const kt={[fi]:i.FUNC_ADD,[vh]:i.FUNC_SUBTRACT,[xh]:i.FUNC_REVERSE_SUBTRACT};kt[Mh]=i.MIN,kt[yh]=i.MAX;const Bt={[Sh]:i.ZERO,[Eh]:i.ONE,[bh]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Ph]:i.SRC_ALPHA_SATURATE,[Ch]:i.DST_COLOR,[Th]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Rh]:i.ONE_MINUS_DST_COLOR,[wh]:i.ONE_MINUS_DST_ALPHA,[Lh]:i.CONSTANT_COLOR,[Dh]:i.ONE_MINUS_CONSTANT_COLOR,[Ih]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(H,St,j,nt,yt,bt,$t,ue,be,jt){if(H===Un){f===!0&&(ut(i.BLEND),f=!1);return}if(f===!1&&(ht(i.BLEND),f=!0),H!==_h){if(H!==_||jt!==R){if((g!==fi||v!==fi)&&(i.blendEquation(i.FUNC_ADD),g=fi,v=fi),jt)switch(H){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,M=null,E=null,w=null,T.set(0,0,0),b=0,_=H,R=jt}return}yt=yt||St,bt=bt||j,$t=$t||nt,(St!==g||yt!==v)&&(i.blendEquationSeparate(kt[St],kt[yt]),g=St,v=yt),(j!==m||nt!==M||bt!==E||$t!==w)&&(i.blendFuncSeparate(Bt[j],Bt[nt],Bt[bt],Bt[$t]),m=j,M=nt,E=bt,w=$t),(ue.equals(T)===!1||be!==b)&&(i.blendColor(ue.r,ue.g,ue.b,be),T.copy(ue),b=be),_=H,R=!1}function qt(H,St){H.side===Ln?ut(i.CULL_FACE):ht(i.CULL_FACE);let j=H.side===We;St&&(j=!j),It(j),H.blending===Gi&&H.transparent===!1?L(Un):L(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),s.setMask(H.colorWrite);const nt=H.stencilWrite;o.setTest(nt),nt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(H){N!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),N=H)}function Ot(H){H!==mh?(ht(i.CULL_FACE),H!==x&&(H===vl?i.cullFace(i.BACK):H===gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),x=H}function ot(H){H!==y&&(D&&i.lineWidth(H),y=H)}function Tt(H,St,j){H?(ht(i.POLYGON_OFFSET_FILL),(z!==St||I!==j)&&(i.polygonOffset(St,j),z=St,I=j)):ut(i.POLYGON_OFFSET_FILL)}function ct(H){H?ht(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function C(H){H===void 0&&(H=i.TEXTURE0+G-1),O!==H&&(i.activeTexture(H),O=H)}function S(H,St,j){j===void 0&&(O===null?j=i.TEXTURE0+G-1:j=O);let nt=st[j];nt===void 0&&(nt={type:void 0,texture:void 0},st[j]=nt),(nt.type!==H||nt.texture!==St)&&(O!==j&&(i.activeTexture(j),O=j),i.bindTexture(H,St||Q[H]),nt.type=H,nt.texture=St)}function X(){const H=st[O];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(H){vt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),vt.copy(H))}function _t(H){lt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),lt.copy(H))}function zt(H,St){let j=l.get(St);j===void 0&&(j=new WeakMap,l.set(St,j));let nt=j.get(H);nt===void 0&&(nt=i.getUniformBlockIndex(St,H.name),j.set(H,nt))}function Ft(H,St){const nt=l.get(St).get(H);a.get(St)!==nt&&(i.uniformBlockBinding(St,nt,H.__bindingPointIndex),a.set(St,nt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},O=null,st={},u={},h=new WeakMap,d=[],p=null,f=!1,_=null,g=null,m=null,M=null,v=null,E=null,w=null,T=new Gt(0,0,0),b=0,R=!1,N=null,x=null,y=null,z=null,I=null,vt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ht,disable:ut,bindFramebuffer:Mt,drawBuffers:Et,useProgram:Lt,setBlending:L,setMaterial:qt,setFlipSided:It,setCullFace:Ot,setLineWidth:ot,setPolygonOffset:Tt,setScissorTest:ct,activeTexture:C,bindTexture:S,unbindTexture:X,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:ft,texImage3D:gt,updateUBOMapping:zt,uniformBlockBinding:Ft,texStorage2D:Ct,texStorage3D:it,texSubImage2D:J,texSubImage3D:Y,compressedTexSubImage2D:q,compressedTexSubImage3D:tt,scissor:mt,viewport:_t,reset:Zt}}function cc(i,t,e,n){const s=s0(n);switch(e){case ou:return i*t;case lu:return i*t;case cu:return i*t*2;case Va:return i*t/s.components*s.byteLength;case Ga:return i*t/s.components*s.byteLength;case uu:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case au:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case cr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(t,8)/4;case na:case sa:return Math.max(i,8)*Math.max(t,8)/2;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case Ea:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hu:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s0(i){switch(i){case Fn:case iu:return{byteLength:1,components:1};case ys:case su:case Nn:return{byteLength:2,components:1};case Ha:case ka:return{byteLength:2,components:4};case vi:case za:case Mn:return{byteLength:4,components:1};case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function r0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,S){return p?new OffscreenCanvas(C,S):br("canvas")}function _(C,S,X){let Z=1;const et=ct(C);if((et.width>X||et.height>X)&&(Z=X/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*et.width),Y=Math.floor(Z*et.height);h===void 0&&(h=f(J,Y));const q=S?f(J,Y):h;return q.width=J,q.height=Y,q.getContext("2d").drawImage(C,0,0,J,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Y+")."),q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function g(C){return C.generateMipmaps&&C.minFilter!==Ve&&C.minFilter!==cn}function m(C){i.generateMipmap(C)}function M(C,S,X,Z,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===i.RED&&(X===i.FLOAT&&(J=i.R32F),X===i.HALF_FLOAT&&(J=i.R16F),X===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.R8UI),X===i.UNSIGNED_SHORT&&(J=i.R16UI),X===i.UNSIGNED_INT&&(J=i.R32UI),X===i.BYTE&&(J=i.R8I),X===i.SHORT&&(J=i.R16I),X===i.INT&&(J=i.R32I)),S===i.RG&&(X===i.FLOAT&&(J=i.RG32F),X===i.HALF_FLOAT&&(J=i.RG16F),X===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RG8UI),X===i.UNSIGNED_SHORT&&(J=i.RG16UI),X===i.UNSIGNED_INT&&(J=i.RG32UI),X===i.BYTE&&(J=i.RG8I),X===i.SHORT&&(J=i.RG16I),X===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGB8UI),X===i.UNSIGNED_SHORT&&(J=i.RGB16UI),X===i.UNSIGNED_INT&&(J=i.RGB32UI),X===i.BYTE&&(J=i.RGB8I),X===i.SHORT&&(J=i.RGB16I),X===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),X===i.UNSIGNED_INT&&(J=i.RGBA32UI),X===i.BYTE&&(J=i.RGBA8I),X===i.SHORT&&(J=i.RGBA16I),X===i.INT&&(J=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){const Y=et?Mr:te.getTransfer(Z);X===i.FLOAT&&(J=i.RGBA32F),X===i.HALF_FLOAT&&(J=i.RGBA16F),X===i.UNSIGNED_BYTE&&(J=Y===oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(C,S){let X;return C?S===null||S===vi||S===Zi?X=i.DEPTH24_STENCIL8:S===Mn?X=i.DEPTH32F_STENCIL8:S===ys&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Zi?X=i.DEPTH_COMPONENT24:S===Mn?X=i.DEPTH_COMPONENT32F:S===ys&&(X=i.DEPTH_COMPONENT16),X}function E(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){const S=C.target;S.removeEventListener("dispose",w),b(S),S.isVideoTexture&&u.delete(S)}function T(C){const S=C.target;S.removeEventListener("dispose",T),N(S)}function b(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,Z=d.get(X);if(Z){const et=Z[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(C),Object.keys(Z).length===0&&d.delete(X)}n.remove(C)}function R(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const X=C.source,Z=d.get(X);delete Z[S.__cacheKey],o.memory.textures--}function N(C){const S=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let et=0;et<S.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=C.textures;for(let Z=0,et=X.length;Z<et;Z++){const J=n.get(X[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(X[Z])}n.remove(C)}let x=0;function y(){x=0}function z(){const C=x;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),x+=1,C}function I(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function G(C,S){const X=n.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(X,C,S);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function D(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){lt(X,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function P(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){lt(X,C,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function F(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){W(X,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const O={[ta]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},st={[Ve]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},rt={[$h]:i.NEVER,[Qh]:i.ALWAYS,[qh]:i.LESS,[fu]:i.LEQUAL,[jh]:i.EQUAL,[Jh]:i.GEQUAL,[Kh]:i.GREATER,[Zh]:i.NOTEQUAL};function dt(C,S){if(S.type===Mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Wr||S.magFilter===Ls||S.magFilter===_i||S.minFilter===cn||S.minFilter===Wr||S.minFilter===Ls||S.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,O[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,O[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,O[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ve||S.minFilter!==Ls&&S.minFilter!==_i||S.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function vt(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const J=I(S);if(J!==C.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),et[J].usedTimes++;const Y=et[C.__cacheKey];Y!==void 0&&(et[C.__cacheKey].usedTimes--,Y.usedTimes===0&&R(S)),C.__cacheKey=J,C.__webglTexture=et[J].texture}return X}function lt(C,S,X){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const et=vt(C,S),J=S.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+X);const Y=n.get(J);if(J.version!==Y.__version||et===!0){e.activeTexture(i.TEXTURE0+X);const q=te.getPrimaries(te.workingColorSpace),tt=S.colorSpace===qn?null:te.getPrimaries(S.colorSpace),Ct=S.colorSpace===qn||q===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let it=_(S.image,!1,s.maxTextureSize);it=Tt(S,it);const ft=r.convert(S.format,S.colorSpace),gt=r.convert(S.type);let mt=M(S.internalFormat,ft,gt,S.colorSpace,S.isVideoTexture);dt(Z,S);let _t;const zt=S.mipmaps,Ft=S.isVideoTexture!==!0,Zt=Y.__version===void 0||et===!0,H=J.dataReady,St=E(S,it);if(S.isDepthTexture)mt=v(S.format===Ji,S.type),Zt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,mt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,mt,it.width,it.height,0,ft,gt,null));else if(S.isDataTexture)if(zt.length>0){Ft&&Zt&&e.texStorage2D(i.TEXTURE_2D,St,mt,zt[0].width,zt[0].height);for(let j=0,nt=zt.length;j<nt;j++)_t=zt[j],Ft?H&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,_t.width,_t.height,ft,gt,_t.data):e.texImage2D(i.TEXTURE_2D,j,mt,_t.width,_t.height,0,ft,gt,_t.data);S.generateMipmaps=!1}else Ft?(Zt&&e.texStorage2D(i.TEXTURE_2D,St,mt,it.width,it.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ft,gt,it.data)):e.texImage2D(i.TEXTURE_2D,0,mt,it.width,it.height,0,ft,gt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,mt,zt[0].width,zt[0].height,it.depth);for(let j=0,nt=zt.length;j<nt;j++)if(_t=zt[j],S.format!==dn)if(ft!==null)if(Ft){if(H)if(S.layerUpdates.size>0){const yt=cc(_t.width,_t.height,S.format,S.type);for(const bt of S.layerUpdates){const $t=_t.data.subarray(bt*yt/_t.data.BYTES_PER_ELEMENT,(bt+1)*yt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,bt,_t.width,_t.height,1,ft,$t,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,it.depth,ft,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,mt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,_t.width,_t.height,it.depth,ft,gt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,mt,_t.width,_t.height,it.depth,0,ft,gt,_t.data)}else{Ft&&Zt&&e.texStorage2D(i.TEXTURE_2D,St,mt,zt[0].width,zt[0].height);for(let j=0,nt=zt.length;j<nt;j++)_t=zt[j],S.format!==dn?ft!==null?Ft?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,_t.width,_t.height,ft,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,j,mt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?H&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,_t.width,_t.height,ft,gt,_t.data):e.texImage2D(i.TEXTURE_2D,j,mt,_t.width,_t.height,0,ft,gt,_t.data)}else if(S.isDataArrayTexture)if(Ft){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,mt,it.width,it.height,it.depth),H)if(S.layerUpdates.size>0){const j=cc(it.width,it.height,S.format,S.type);for(const nt of S.layerUpdates){const yt=it.data.subarray(nt*j/it.data.BYTES_PER_ELEMENT,(nt+1)*j/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,it.width,it.height,1,ft,gt,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,gt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,it.width,it.height,it.depth,0,ft,gt,it.data);else if(S.isData3DTexture)Ft?(Zt&&e.texStorage3D(i.TEXTURE_3D,St,mt,it.width,it.height,it.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,gt,it.data)):e.texImage3D(i.TEXTURE_3D,0,mt,it.width,it.height,it.depth,0,ft,gt,it.data);else if(S.isFramebufferTexture){if(Zt)if(Ft)e.texStorage2D(i.TEXTURE_2D,St,mt,it.width,it.height);else{let j=it.width,nt=it.height;for(let yt=0;yt<St;yt++)e.texImage2D(i.TEXTURE_2D,yt,mt,j,nt,0,ft,gt,null),j>>=1,nt>>=1}}else if(zt.length>0){if(Ft&&Zt){const j=ct(zt[0]);e.texStorage2D(i.TEXTURE_2D,St,mt,j.width,j.height)}for(let j=0,nt=zt.length;j<nt;j++)_t=zt[j],Ft?H&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ft,gt,_t):e.texImage2D(i.TEXTURE_2D,j,mt,ft,gt,_t);S.generateMipmaps=!1}else if(Ft){if(Zt){const j=ct(it);e.texStorage2D(i.TEXTURE_2D,St,mt,j.width,j.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,gt,it)}else e.texImage2D(i.TEXTURE_2D,0,mt,ft,gt,it);g(S)&&m(Z),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function W(C,S,X){if(S.image.length!==6)return;const Z=vt(C,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const J=n.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+X);const Y=te.getPrimaries(te.workingColorSpace),q=S.colorSpace===qn?null:te.getPrimaries(S.colorSpace),tt=S.colorSpace===qn||Y===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const Ct=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let nt=0;nt<6;nt++)!Ct&&!it?ft[nt]=_(S.image[nt],!0,s.maxCubemapSize):ft[nt]=it?S.image[nt].image:S.image[nt],ft[nt]=Tt(S,ft[nt]);const gt=ft[0],mt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),zt=M(S.internalFormat,mt,_t,S.colorSpace),Ft=S.isVideoTexture!==!0,Zt=J.__version===void 0||Z===!0,H=et.dataReady;let St=E(S,gt);dt(i.TEXTURE_CUBE_MAP,S);let j;if(Ct){Ft&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,gt.width,gt.height);for(let nt=0;nt<6;nt++){j=ft[nt].mipmaps;for(let yt=0;yt<j.length;yt++){const bt=j[yt];S.format!==dn?mt!==null?Ft?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,0,0,bt.width,bt.height,mt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,zt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,0,0,bt.width,bt.height,mt,_t,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt,zt,bt.width,bt.height,0,mt,_t,bt.data)}}}else{if(j=S.mipmaps,Ft&&Zt){j.length>0&&St++;const nt=ct(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(it){Ft?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ft[nt].width,ft[nt].height,mt,_t,ft[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,zt,ft[nt].width,ft[nt].height,0,mt,_t,ft[nt].data);for(let yt=0;yt<j.length;yt++){const $t=j[yt].image[nt].image;Ft?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,0,0,$t.width,$t.height,mt,_t,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,zt,$t.width,$t.height,0,mt,_t,$t.data)}}else{Ft?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt,_t,ft[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,zt,mt,_t,ft[nt]);for(let yt=0;yt<j.length;yt++){const bt=j[yt];Ft?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,0,0,mt,_t,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,yt+1,zt,mt,_t,bt.image[nt])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),J.__version=et.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,X,Z,et,J){const Y=r.convert(X.format,X.colorSpace),q=r.convert(X.type),tt=M(X.internalFormat,Y,q,X.colorSpace);if(!n.get(S).__hasExternalTextures){const it=Math.max(1,S.width>>J),ft=Math.max(1,S.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,tt,it,ft,S.depth,0,Y,q,null):e.texImage2D(et,J,tt,it,ft,0,Y,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,n.get(X).__webglTexture,0,It(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,n.get(X).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(C,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const Z=S.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=v(S.stencilBuffer,et),Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=It(S);Ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,J,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,C)}else{const Z=S.textures;for(let et=0;et<Z.length;et++){const J=Z[et],Y=r.convert(J.format,J.colorSpace),q=r.convert(J.type),tt=M(J.internalFormat,Y,q,J.colorSpace),Ct=It(S);X&&Ot(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,tt,S.width,S.height):Ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,et=It(S);if(S.depthTexture.format===Wi)Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Ji)Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Mt(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Z}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ut(S.__webglFramebuffer,C)}else if(X){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[Z],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(C,S,X){const Z=n.get(C);S!==void 0&&Q(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Mt(C)}function Lt(C){const S=C.texture,X=n.get(C),Z=n.get(S);C.addEventListener("dispose",T);const et=C.textures,J=C.isWebGLCubeRenderTarget===!0,Y=et.length>1;if(Y||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let tt=0;tt<S.mipmaps.length;tt++)X.__webglFramebuffer[q][tt]=i.createFramebuffer()}else X.__webglFramebuffer[q]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)X.__webglFramebuffer[q]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Y)for(let q=0,tt=et.length;q<tt;q++){const Ct=n.get(et[q]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Ot(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<et.length;q++){const tt=et[q];X.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[q]);const Ct=r.convert(tt.format,tt.colorSpace),it=r.convert(tt.type),ft=M(tt.internalFormat,Ct,it,tt.colorSpace,C.isXRRenderTarget===!0),gt=It(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,ft,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,X.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),dt(i.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Q(X.__webglFramebuffer[q][tt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,tt);else Q(X.__webglFramebuffer[q],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);g(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Y){for(let q=0,tt=et.length;q<tt;q++){const Ct=et[q],it=n.get(Ct);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),dt(i.TEXTURE_2D,Ct),Q(X.__webglFramebuffer,C,Ct,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,0),g(Ct)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,Z.__webglTexture),dt(q,S),S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Q(X.__webglFramebuffer[tt],C,S,i.COLOR_ATTACHMENT0,q,tt);else Q(X.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,q,0);g(S)&&m(q),e.unbindTexture()}C.depthBuffer&&Mt(C)}function kt(C){const S=C.textures;for(let X=0,Z=S.length;X<Z;X++){const et=S[X];if(g(et)){const J=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Y=n.get(et).__webglTexture;e.bindTexture(J,Y),m(J),e.unbindTexture()}}}const Bt=[],L=[];function qt(C){if(C.samples>0){if(Ot(C)===!1){const S=C.textures,X=C.width,Z=C.height;let et=i.COLOR_BUFFER_BIT;const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=n.get(C),q=S.length>1;if(q)for(let tt=0;tt<S.length;tt++)e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let tt=0;tt<S.length;tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Y.__webglColorRenderbuffer[tt]);const Ct=n.get(S[tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,X,Z,0,0,X,Z,et,i.NEAREST),l===!0&&(Bt.length=0,L.length=0,Bt.push(i.COLOR_ATTACHMENT0+tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Bt.push(J),L.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let tt=0;tt<S.length;tt++){e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[tt]);const Ct=n.get(S[tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function It(C){return Math.min(s.maxSamples,C.samples)}function Ot(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ot(C){const S=o.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function Tt(C,S){const X=C.colorSpace,Z=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==ei&&X!==qn&&(te.getTransfer(X)===oe?(Z!==dn||et!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=y,this.setTexture2D=G,this.setTexture2DArray=D,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=Et,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ot}function o0(i,t){function e(n,s=qn){let r;const o=te.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===au)return i.RGB;if(n===dn)return i.RGBA;if(n===lu)return i.LUMINANCE;if(n===cu)return i.LUMINANCE_ALPHA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===uu)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===cr||n===ur||n===hr||n===dr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===aa)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===Ea||n===ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===Aa||n===Ta||n===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class a0 extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class In extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ge({vertexShader:c0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d0 extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,f=null;const _=new h0,g=e.getContextAttributes();let m=null,M=null;const v=[],E=[],w=new Pt;let T=null;const b=new ke;b.layers.enable(1),b.viewport=new ie;const R=new ke;R.layers.enable(2),R.viewport=new ie;const N=[b,R],x=new a0;x.layers.enable(1),x.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=v[W];return Q===void 0&&(Q=new Mo,v[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=v[W];return Q===void 0&&(Q=new Mo,v[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=v[W];return Q===void 0&&(Q=new Mo,v[W]=Q),Q.getHandSpace()};function I(W){const Q=E.indexOf(W.inputSource);if(Q===-1)return;const ht=v[Q];ht!==void 0&&(ht.update(W.inputSource,W.frame,c||o),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",D);for(let W=0;W<v.length;W++){const Q=E[W];Q!==null&&(E[W]=null,v[W].disconnect(Q))}y=null,z=null,_.reset(),t.setRenderTarget(m),p=null,d=null,h=null,s=null,M=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",G),s.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new fn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ht=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?Ji:Wi,ht=g.stencil?Zi:vi);const Mt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new fn(d.textureWidth,d.textureHeight,{format:dn,type:Fn,depthTexture:new Au(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function D(W){for(let Q=0;Q<W.removed.length;Q++){const ht=W.removed[Q],ut=E.indexOf(ht);ut>=0&&(E[ut]=null,v[ut].disconnect(ht))}for(let Q=0;Q<W.added.length;Q++){const ht=W.added[Q];let ut=E.indexOf(ht);if(ut===-1){for(let Et=0;Et<v.length;Et++)if(Et>=E.length){E.push(ht),ut=Et;break}else if(E[Et]===null){E[Et]=ht,ut=Et;break}if(ut===-1)break}const Mt=v[ut];Mt&&Mt.connect(ht)}}const P=new U,F=new U;function O(W,Q,ht){P.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(ht.matrixWorld);const ut=P.distanceTo(F),Mt=Q.projectionMatrix.elements,Et=ht.projectionMatrix.elements,Lt=Mt[14]/(Mt[10]-1),kt=Mt[14]/(Mt[10]+1),Bt=(Mt[9]+1)/Mt[5],L=(Mt[9]-1)/Mt[5],qt=(Mt[8]-1)/Mt[0],It=(Et[8]+1)/Et[0],Ot=Lt*qt,ot=Lt*It,Tt=ut/(-qt+It),ct=Tt*-qt;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ct),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Mt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const C=Lt+Tt,S=kt+Tt,X=Ot-ct,Z=ot+(ut-ct),et=Bt*kt/S*C,J=L*kt/S*C;W.projectionMatrix.makePerspective(X,Z,et,J,C,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function st(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let Q=W.near,ht=W.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),x.near=R.near=b.near=Q,x.far=R.far=b.far=ht,(y!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,z=x.far);const ut=W.parent,Mt=x.cameras;st(x,ut);for(let Et=0;Et<Mt.length;Et++)st(Mt[Et],ut);Mt.length===2?O(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),rt(W,x,ut)};function rt(W,Q,ht){ht===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ra*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let dt=null;function vt(W,Q){if(u=Q.getViewerPose(c||o),f=Q,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ut=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let Et=0;Et<ht.length;Et++){const Lt=ht[Et];let kt=null;if(p!==null)kt=p.getViewport(Lt);else{const L=h.getViewSubImage(d,Lt);kt=L.viewport,Et===0&&(t.setRenderTargetTextures(M,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let Bt=N[Et];Bt===void 0&&(Bt=new ke,Bt.layers.enable(Et),Bt.viewport=new ie,N[Et]=Bt),Bt.matrix.fromArray(Lt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Lt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(kt.x,kt.y,kt.width,kt.height),Et===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(Bt)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Et=h.getDepthInformation(ht[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,s.renderState)}}for(let ht=0;ht<v.length;ht++){const ut=E[ht],Mt=v[ht];ut!==null&&Mt!==void 0&&Mt.update(ut,Q,c||o)}dt&&dt(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),f=null}const lt=new bu;lt.setAnimationLoop(vt),this.setAnimationLoop=function(W){dt=W},this.dispose=function(){}}}const hi=new En,f0=new se;function p0(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,yu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===We&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===We&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,E=M.envMapRotation;v&&(g.envMap.value=v,hi.copy(E),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),g.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(hi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===We&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const E=v.program;n.uniformBlockBinding(M,E)}function c(M,v){let E=s[M.id];E===void 0&&(f(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",g));const w=v.program;n.updateUBOMapping(M,w);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function u(M){const v=h();M.__bindingPointIndex=v;const E=i.createBuffer(),w=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,E),E}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],E=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,b=E.length;T<b;T++){const R=Array.isArray(E[T])?E[T]:[E[T]];for(let N=0,x=R.length;N<x;N++){const y=R[N];if(p(y,T,N,w)===!0){const z=y.__offset,I=Array.isArray(y.value)?y.value:[y.value];let G=0;for(let D=0;D<I.length;D++){const P=I[D],F=_(P);typeof P=="number"||typeof P=="boolean"?(y.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,z+G,y.__data)):P.isMatrix3?(y.__data[0]=P.elements[0],y.__data[1]=P.elements[1],y.__data[2]=P.elements[2],y.__data[3]=0,y.__data[4]=P.elements[3],y.__data[5]=P.elements[4],y.__data[6]=P.elements[5],y.__data[7]=0,y.__data[8]=P.elements[6],y.__data[9]=P.elements[7],y.__data[10]=P.elements[8],y.__data[11]=0):(P.toArray(y.__data,G),G+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,E,w){const T=M.value,b=v+"_"+E;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const R=w[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return w[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function f(M){const v=M.uniforms;let E=0;const w=16;for(let b=0,R=v.length;b<R;b++){const N=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,y=N.length;x<y;x++){const z=N[x],I=Array.isArray(z.value)?z.value:[z.value];for(let G=0,D=I.length;G<D;G++){const P=I[G],F=_(P),O=E%w,st=O%F.boundary,rt=O+st;E+=st,rt!==0&&w-rt<F.storage&&(E+=w-rt),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=F.storage}}}const T=E%w;return T>0&&(E+=w-T),M.__size=E,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){const v=M.target;v.removeEventListener("dispose",g);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Pu{constructor(t={}){const{canvas:e=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),f=new Int32Array(4);let _=null,g=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Kn,this.toneMappingExposure=1;const v=this;let E=!1,w=0,T=0,b=null,R=-1,N=null;const x=new ie,y=new ie;let z=null;const I=new Gt(0);let G=0,D=e.width,P=e.height,F=1,O=null,st=null;const rt=new ie(0,0,D,P),dt=new ie(0,0,D,P);let vt=!1;const lt=new qa;let W=!1,Q=!1;const ht=new se,ut=new se,Mt=new U,Et=new ie,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Bt(){return b===null?F:1}let L=n;function qt(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),L===null){const k="webgl2";if(L=qt(k,A),L===null)throw qt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let It,Ot,ot,Tt,ct,C,S,X,Z,et,J,Y,q,tt,Ct,it,ft,gt,mt,_t,zt,Ft,Zt,H;function St(){It=new ym(L),It.init(),Ft=new o0(L,It),Ot=new mm(L,It,t,Ft),ot=new i0(L),Ot.reverseDepthBuffer&&ot.buffers.depth.setReversed(!0),Tt=new bm(L),ct=new Vg,C=new r0(L,It,ot,ct,Ot,Ft,Tt),S=new _m(v),X=new Mm(v),Z=new Pd(L),Zt=new fm(L,Z),et=new Sm(L,Z,Tt,Zt),J=new Tm(L,et,Z,Tt),mt=new Am(L,Ot,C),it=new gm(ct),Y=new kg(v,S,X,It,Ot,Zt,it),q=new p0(v,ct),tt=new Wg,Ct=new Kg(It),gt=new dm(v,S,X,ot,J,d,l),ft=new e0(v,J,Ot),H=new m0(L,Tt,Ot,ot),_t=new pm(L,It,Tt),zt=new Em(L,It,Tt),Tt.programs=Y.programs,v.capabilities=Ot,v.extensions=It,v.properties=ct,v.renderLists=tt,v.shadowMap=ft,v.state=ot,v.info=Tt}St();const j=new d0(v,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=It.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=It.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(D,P,!1))},this.getSize=function(A){return A.set(D,P)},this.setSize=function(A,k,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,P=k,e.width=Math.floor(A*F),e.height=Math.floor(k*F),$===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(D*F,P*F).floor()},this.setDrawingBufferSize=function(A,k,$){D=A,P=k,F=$,e.width=Math.floor(A*$),e.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,k,$,K){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,k,$,K),ot.viewport(x.copy(rt).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,k,$,K){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,k,$,K),ot.scissor(y.copy(dt).multiplyScalar(F).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(A){ot.setScissorTest(vt=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(A=!0,k=!0,$=!0){let K=0;if(A){let V=!1;if(b!==null){const pt=b.texture.format;V=pt===Xa||pt===Wa||pt===Ga}if(V){const pt=b.texture.type,At=pt===Fn||pt===vi||pt===ys||pt===Zi||pt===Ha||pt===ka,wt=gt.getClearColor(),Rt=gt.getClearAlpha(),Ht=wt.r,Vt=wt.g,Dt=wt.b;At?(p[0]=Ht,p[1]=Vt,p[2]=Dt,p[3]=Rt,L.clearBufferuiv(L.COLOR,0,p)):(f[0]=Ht,f[1]=Vt,f[2]=Dt,f[3]=Rt,L.clearBufferiv(L.COLOR,0,f))}else K|=L.COLOR_BUFFER_BIT}k&&(K|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),tt.dispose(),Ct.dispose(),ct.dispose(),S.dispose(),X.dispose(),J.dispose(),Zt.dispose(),H.dispose(),Y.dispose(),j.dispose(),j.removeEventListener("sessionstart",ii),j.removeEventListener("sessionend",hl),si.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Tt.autoReset,k=ft.enabled,$=ft.autoUpdate,K=ft.needsUpdate,V=ft.type;St(),Tt.autoReset=A,ft.enabled=k,ft.autoUpdate=$,ft.needsUpdate=K,ft.type=V}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const k=A.target;k.removeEventListener("dispose",$t),ue(k)}function ue(A){be(A),ct.remove(A)}function be(A){const k=ct.get(A).programs;k!==void 0&&(k.forEach(function($){Y.releaseProgram($)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,K,V,pt){k===null&&(k=Lt);const At=V.isMesh&&V.matrixWorld.determinant()<0,wt=ch(A,k,$,K,V);ot.setMaterial(K,At);let Rt=$.index,Ht=1;if(K.wireframe===!0){if(Rt=et.getWireframeAttribute($),Rt===void 0)return;Ht=2}const Vt=$.drawRange,Dt=$.attributes.position;let ee=Vt.start*Ht,re=(Vt.start+Vt.count)*Ht;pt!==null&&(ee=Math.max(ee,pt.start*Ht),re=Math.min(re,(pt.start+pt.count)*Ht)),Rt!==null?(ee=Math.max(ee,0),re=Math.min(re,Rt.count)):Dt!=null&&(ee=Math.max(ee,0),re=Math.min(re,Dt.count));const he=re-ee;if(he<0||he===1/0)return;Zt.setup(V,K,wt,$,Rt);let Xe,Jt=_t;if(Rt!==null&&(Xe=Z.get(Rt),Jt=zt,Jt.setIndex(Xe)),V.isMesh)K.wireframe===!0?(ot.setLineWidth(K.wireframeLinewidth*Bt()),Jt.setMode(L.LINES)):Jt.setMode(L.TRIANGLES);else if(V.isLine){let Ut=K.linewidth;Ut===void 0&&(Ut=1),ot.setLineWidth(Ut*Bt()),V.isLineSegments?Jt.setMode(L.LINES):V.isLineLoop?Jt.setMode(L.LINE_LOOP):Jt.setMode(L.LINE_STRIP)}else V.isPoints?Jt.setMode(L.POINTS):V.isSprite&&Jt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Jt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Jt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ut=V._multiDrawStarts,Ae=V._multiDrawCounts,Qt=V._multiDrawCount,nn=Rt?Z.get(Rt).bytesPerElement:1,bi=ct.get(K).currentProgram.getUniforms();for(let Ye=0;Ye<Qt;Ye++)bi.setValue(L,"_gl_DrawID",Ye),Jt.render(Ut[Ye]/nn,Ae[Ye])}else if(V.isInstancedMesh)Jt.renderInstances(ee,he,V.count);else if($.isInstancedBufferGeometry){const Ut=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,Ut);Jt.renderInstances(ee,he,Ae)}else Jt.render(ee,he)};function jt(A,k,$){A.transparent===!0&&A.side===Ln&&A.forceSinglePass===!1?(A.side=We,A.needsUpdate=!0,Ps(A,k,$),A.side=Qn,A.needsUpdate=!0,Ps(A,k,$),A.side=Ln):Ps(A,k,$)}this.compile=function(A,k,$=null){$===null&&($=A),g=Ct.get($),g.init(k),M.push(g),$.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),A!==$&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights();const K=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let At=0;At<pt.length;At++){const wt=pt[At];jt(wt,$,V),K.add(wt)}else jt(pt,$,V),K.add(pt)}),M.pop(),g=null,K},this.compileAsync=function(A,k,$=null){const K=this.compile(A,k,$);return new Promise(V=>{function pt(){if(K.forEach(function(At){ct.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){V(A);return}setTimeout(pt,10)}It.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let we=null;function Ce(A){we&&we(A)}function ii(){si.stop()}function hl(){si.start()}const si=new bu;si.setAnimationLoop(Ce),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(A){we=A,j.setAnimationLoop(A),A===null?si.stop():si.start()},j.addEventListener("sessionstart",ii),j.addEventListener("sessionend",hl),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,b),g=Ct.get(A,M.length),g.init(k),M.push(g),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),lt.setFromProjectionMatrix(ut),Q=this.localClippingEnabled,W=it.init(this.clippingPlanes,Q),_=tt.get(A,m.length),_.init(),m.push(_),j.enabled===!0&&j.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&Hr(pt,k,-1/0,v.sortObjects)}Hr(A,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(O,st),kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,kt&&gt.addToRenderList(_,A),this.info.render.frame++,W===!0&&it.beginShadows();const $=g.state.shadowsArray;ft.render($,A,k),W===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=_.opaque,V=_.transmissive;if(g.setupLights(),k.isArrayCamera){const pt=k.cameras;if(V.length>0)for(let At=0,wt=pt.length;At<wt;At++){const Rt=pt[At];fl(K,V,A,Rt)}kt&&gt.render(A);for(let At=0,wt=pt.length;At<wt;At++){const Rt=pt[At];dl(_,A,Rt,Rt.viewport)}}else V.length>0&&fl(K,V,A,k),kt&&gt.render(A),dl(_,A,k);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,k),Zt.resetDefaultState(),R=-1,N=null,M.pop(),M.length>0?(g=M[M.length-1],W===!0&&it.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Hr(A,k,$,K){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||lt.intersectsSprite(A)){K&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const At=J.update(A),wt=A.material;wt.visible&&_.push(A,At,wt,$,Et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||lt.intersectsObject(A))){const At=J.update(A),wt=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Et.copy(At.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){const Rt=At.groups;for(let Ht=0,Vt=Rt.length;Ht<Vt;Ht++){const Dt=Rt[Ht],ee=wt[Dt.materialIndex];ee&&ee.visible&&_.push(A,At,ee,$,Et.z,Dt)}}else wt.visible&&_.push(A,At,wt,$,Et.z,null)}}const pt=A.children;for(let At=0,wt=pt.length;At<wt;At++)Hr(pt[At],k,$,K)}function dl(A,k,$,K){const V=A.opaque,pt=A.transmissive,At=A.transparent;g.setupLightsView($),W===!0&&it.setGlobalState(v.clippingPlanes,$),K&&ot.viewport(x.copy(K)),V.length>0&&Rs(V,k,$),pt.length>0&&Rs(pt,k,$),At.length>0&&Rs(At,k,$),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function fl(A,k,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new fn(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Nn:Fn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const pt=g.state.transmissionRenderTarget[K.id],At=K.viewport||x;pt.setSize(At.z,At.w);const wt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(I),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),kt&&gt.render($);const Rt=v.toneMapping;v.toneMapping=Kn;const Ht=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),W===!0&&it.setGlobalState(v.clippingPlanes,K),Rs(A,$,K),C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Dt=0,ee=k.length;Dt<ee;Dt++){const re=k[Dt],he=re.object,Xe=re.geometry,Jt=re.material,Ut=re.group;if(Jt.side===Ln&&he.layers.test(K.layers)){const Ae=Jt.side;Jt.side=We,Jt.needsUpdate=!0,pl(he,$,K,Xe,Jt,Ut),Jt.side=Ae,Jt.needsUpdate=!0,Vt=!0}}Vt===!0&&(C.updateMultisampleRenderTarget(pt),C.updateRenderTargetMipmap(pt))}v.setRenderTarget(wt),v.setClearColor(I,G),Ht!==void 0&&(K.viewport=Ht),v.toneMapping=Rt}function Rs(A,k,$){const K=k.isScene===!0?k.overrideMaterial:null;for(let V=0,pt=A.length;V<pt;V++){const At=A[V],wt=At.object,Rt=At.geometry,Ht=K===null?At.material:K,Vt=At.group;wt.layers.test($.layers)&&pl(wt,k,$,Rt,Ht,Vt)}}function pl(A,k,$,K,V,pt){A.onBeforeRender(v,k,$,K,V,pt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,k,$,K,A,pt),V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=We,V.needsUpdate=!0,v.renderBufferDirect($,k,K,V,A,pt),V.side=Qn,V.needsUpdate=!0,v.renderBufferDirect($,k,K,V,A,pt),V.side=Ln):v.renderBufferDirect($,k,K,V,A,pt),A.onAfterRender(v,k,$,K,V,pt)}function Ps(A,k,$){k.isScene!==!0&&(k=Lt);const K=ct.get(A),V=g.state.lights,pt=g.state.shadowsArray,At=V.state.version,wt=Y.getParameters(A,V.state,pt,k,$),Rt=Y.getProgramCacheKey(wt);let Ht=K.programs;K.environment=A.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(A.isMeshStandardMaterial?X:S).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",$t),Ht=new Map,K.programs=Ht);let Vt=Ht.get(Rt);if(Vt!==void 0){if(K.currentProgram===Vt&&K.lightsStateVersion===At)return gl(A,wt),Vt}else wt.uniforms=Y.getUniforms(A),A.onBeforeCompile(wt,v),Vt=Y.acquireProgram(wt,Rt),Ht.set(Rt,Vt),K.uniforms=wt.uniforms;const Dt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Dt.clippingPlanes=it.uniform),gl(A,wt),K.needsLights=hh(A),K.lightsStateVersion=At,K.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.directionalShadowMap.value=V.state.directionalShadowMap,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotShadowMap.value=V.state.spotShadowMap,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMap.value=V.state.pointShadowMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Vt,K.uniformsList=null,Vt}function ml(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=gr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function gl(A,k){const $=ct.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function ch(A,k,$,K,V){k.isScene!==!0&&(k=Lt),C.resetTextureUnits();const pt=k.fog,At=K.isMeshStandardMaterial?k.environment:null,wt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ei,Rt=(K.isMeshStandardMaterial?X:S).get(K.envMap||At),Ht=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Dt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,re=!!$.morphAttributes.color;let he=Kn;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(he=v.toneMapping);const Xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Jt=Xe!==void 0?Xe.length:0,Ut=ct.get(K),Ae=g.state.lights;if(W===!0&&(Q===!0||A!==N)){const Ze=A===N&&K.id===R;it.setState(K,A,Ze)}let Qt=!1;K.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ae.state.version||Ut.outputColorSpace!==wt||V.isBatchedMesh&&Ut.batching===!1||!V.isBatchedMesh&&Ut.batching===!0||V.isBatchedMesh&&Ut.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ut.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ut.instancing===!1||!V.isInstancedMesh&&Ut.instancing===!0||V.isSkinnedMesh&&Ut.skinning===!1||!V.isSkinnedMesh&&Ut.skinning===!0||V.isInstancedMesh&&Ut.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ut.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ut.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ut.instancingMorph===!1&&V.morphTexture!==null||Ut.envMap!==Rt||K.fog===!0&&Ut.fog!==pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==it.numPlanes||Ut.numIntersection!==it.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Vt||Ut.morphTargets!==Dt||Ut.morphNormals!==ee||Ut.morphColors!==re||Ut.toneMapping!==he||Ut.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Ut.__version=K.version);let nn=Ut.currentProgram;Qt===!0&&(nn=Ps(K,k,V));let bi=!1,Ye=!1,kr=!1;const fe=nn.getUniforms(),Bn=Ut.uniforms;if(ot.useProgram(nn.program)&&(bi=!0,Ye=!0,kr=!0),K.id!==R&&(R=K.id,Ye=!0),bi||N!==A){Ot.reverseDepthBuffer?(ht.copy(A.projectionMatrix),rd(ht),od(ht),fe.setValue(L,"projectionMatrix",ht)):fe.setValue(L,"projectionMatrix",A.projectionMatrix),fe.setValue(L,"viewMatrix",A.matrixWorldInverse);const Ze=fe.map.cameraPosition;Ze!==void 0&&Ze.setValue(L,Mt.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&fe.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,Ye=!0,kr=!0)}if(V.isSkinnedMesh){fe.setOptional(L,V,"bindMatrix"),fe.setOptional(L,V,"bindMatrixInverse");const Ze=V.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),fe.setValue(L,"boneTexture",Ze.boneTexture,C))}V.isBatchedMesh&&(fe.setOptional(L,V,"batchingTexture"),fe.setValue(L,"batchingTexture",V._matricesTexture,C),fe.setOptional(L,V,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",V._indirectTexture,C),fe.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",V._colorsTexture,C));const Vr=$.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&mt.update(V,$,nn),(Ye||Ut.receiveShadow!==V.receiveShadow)&&(Ut.receiveShadow=V.receiveShadow,fe.setValue(L,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bn.envMap.value=Rt,Bn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(Bn.envMapIntensity.value=k.environmentIntensity),Ye&&(fe.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&uh(Bn,kr),pt&&K.fog===!0&&q.refreshFogUniforms(Bn,pt),q.refreshMaterialUniforms(Bn,K,F,P,g.state.transmissionRenderTarget[A.id]),gr.upload(L,ml(Ut),Bn,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gr.upload(L,ml(Ut),Bn,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&fe.setValue(L,"center",V.center),fe.setValue(L,"modelViewMatrix",V.modelViewMatrix),fe.setValue(L,"normalMatrix",V.normalMatrix),fe.setValue(L,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ze=K.uniformsGroups;for(let Gr=0,dh=Ze.length;Gr<dh;Gr++){const _l=Ze[Gr];H.update(_l,nn),H.bind(_l,nn)}}return nn}function uh(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function hh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,k,$){ct.get(A.texture).__webglTexture=k,ct.get(A.depthTexture).__webglTexture=$;const K=ct.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const $=ct.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){b=A,w=k,T=$;let K=!0,V=null,pt=!1,At=!1;if(A){const Rt=ct.get(A);if(Rt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Rt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Rt.__hasExternalTextures)C.rebindTextures(A,ct.get(A.texture).__webglTexture,ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Dt=A.depthTexture;if(Rt.__boundDepthTexture!==Dt){if(Dt!==null&&ct.has(Dt)&&(A.width!==Dt.image.width||A.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);const Vt=ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?V=Vt[k][$]:V=Vt[k],pt=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?V=ct.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[$]:V=Vt,x.copy(A.viewport),y.copy(A.scissor),z=A.scissorTest}else x.copy(rt).multiplyScalar(F).floor(),y.copy(dt).multiplyScalar(F).floor(),z=vt;if(ot.bindFramebuffer(L.FRAMEBUFFER,V)&&K&&ot.drawBuffers(A,V),ot.viewport(x),ot.scissor(y),ot.setScissorTest(z),pt){const Rt=ct.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,$)}else if(At){const Rt=ct.get(A.texture),Ht=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,$||0,Ht)}R=-1},this.readRenderTargetPixels=function(A,k,$,K,V,pt,At){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At]),wt){ot.bindFramebuffer(L.FRAMEBUFFER,wt);try{const Rt=A.texture,Ht=Rt.format,Vt=Rt.type;if(!Ot.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-K&&$>=0&&$<=A.height-V&&L.readPixels(k,$,K,V,Ft.convert(Ht),Ft.convert(Vt),pt)}finally{const Rt=b!==null?ct.get(b).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,k,$,K,V,pt,At){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&At!==void 0&&(wt=wt[At]),wt){const Rt=A.texture,Ht=Rt.format,Vt=Rt.type;if(!Ot.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-K&&$>=0&&$<=A.height-V){ot.bindFramebuffer(L.FRAMEBUFFER,wt);const Dt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(k,$,K,V,Ft.convert(Ht),Ft.convert(Vt),0);const ee=b!==null?ct.get(b).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,ee);const re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sd(L,re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Dt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.deleteBuffer(Dt),L.deleteSync(re),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,$=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-$),V=Math.floor(A.image.width*K),pt=Math.floor(A.image.height*K),At=k!==null?k.x:0,wt=k!==null?k.y:0;C.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,$,0,0,At,wt,V,pt),ot.unbindTexture()},this.copyTextureToTexture=function(A,k,$=null,K=null,V=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],k=arguments[2],V=arguments[3]||0,$=null);let pt,At,wt,Rt,Ht,Vt;$!==null?(pt=$.max.x-$.min.x,At=$.max.y-$.min.y,wt=$.min.x,Rt=$.min.y):(pt=A.image.width,At=A.image.height,wt=0,Rt=0),K!==null?(Ht=K.x,Vt=K.y):(Ht=0,Vt=0);const Dt=Ft.convert(k.format),ee=Ft.convert(k.type);C.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),he=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xe=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),Ut=L.getParameter(L.UNPACK_SKIP_IMAGES),Ae=A.isCompressedTexture?A.mipmaps[V]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,Ht,Vt,pt,At,Dt,ee,Ae.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,Ht,Vt,Ae.width,Ae.height,Dt,Ae.data):L.texSubImage2D(L.TEXTURE_2D,V,Ht,Vt,pt,At,Dt,ee,Ae),L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ut),V===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(A,k,$=null,K=null,V=0){A.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,A=arguments[2],k=arguments[3],V=arguments[4]||0);let pt,At,wt,Rt,Ht,Vt,Dt,ee,re;const he=A.isCompressedTexture?A.mipmaps[V]:A.image;$!==null?(pt=$.max.x-$.min.x,At=$.max.y-$.min.y,wt=$.max.z-$.min.z,Rt=$.min.x,Ht=$.min.y,Vt=$.min.z):(pt=he.width,At=he.height,wt=he.depth,Rt=0,Ht=0,Vt=0),K!==null?(Dt=K.x,ee=K.y,re=K.z):(Dt=0,ee=0,re=0);const Xe=Ft.convert(k.format),Jt=Ft.convert(k.type);let Ut;if(k.isData3DTexture)C.setTexture3D(k,0),Ut=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)C.setTexture2DArray(k,0),Ut=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Ae=L.getParameter(L.UNPACK_ROW_LENGTH),Qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),nn=L.getParameter(L.UNPACK_SKIP_PIXELS),bi=L.getParameter(L.UNPACK_SKIP_ROWS),Ye=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,he.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vt),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ut,V,Dt,ee,re,pt,At,wt,Xe,Jt,he.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,V,Dt,ee,re,pt,At,wt,Xe,he.data):L.texSubImage3D(Ut,V,Dt,ee,re,pt,At,wt,Xe,Jt,he),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,bi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye),V===0&&k.generateMipmaps&&L.generateMipmap(Ut),ot.unbindTexture()},this.initRenderTarget=function(A){ct.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ot.unbindTexture()},this.resetState=function(){w=0,T=0,b=null,ot.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ya?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Or?"display-p3":"srgb"}}class Za{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Za(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lu extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class g0 extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ve,u=Ve,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class La extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zi=new se,uc=new se,Js=[],hc=new yi,_0=new se,cs=new ae,us=new es;class Tr extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new La(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),hc.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(hc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),us.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),t.ray.intersectsSphere(us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),uc.multiplyMatrices(n,zi),cs.matrixWorld=uc,cs.raycast(t,Js);for(let o=0,a=Js.length;o<a;o++){const l=Js[o];l.instanceId=r,l.object=this,e.push(l)}Js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new La(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new g0(new Float32Array(s*this.count),s,this.count,Va,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Du extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wr=new U,Cr=new U,dc=new se,hs=new $a,Qs=new es,yo=new U,fc=new U;class v0 extends Ee{constructor(t=new Fe,e=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wr.fromBufferAttribute(e,s-1),Cr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wr.distanceTo(Cr);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;dc.copy(s).invert(),hs.copy(t.ray).applyMatrix4(dc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=p,g=f-1;_<g;_+=c){const m=u.getX(_),M=u.getX(_+1),v=tr(this,t,hs,l,m,M);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(f-1),g=u.getX(p),m=tr(this,t,hs,l,_,g);m&&e.push(m)}}else{const p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=p,g=f-1;_<g;_+=c){const m=tr(this,t,hs,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=tr(this,t,hs,l,f-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(wr.fromBufferAttribute(o,s),Cr.fromBufferAttribute(o,r),e.distanceSqToSegment(wr,Cr,yo,fc)>n)return;yo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yo);if(!(l<t.near||l>t.far))return{distance:l,point:fc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const pc=new U,mc=new U;class x0 extends v0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)pc.fromBufferAttribute(e,s),mc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pc.distanceTo(mc);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ti extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let f=0;const _=[],g=n/2;let m=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function M(){const E=new U,w=new U;let T=0;const b=(e-t)/n;for(let R=0;R<=r;R++){const N=[],x=R/r,y=x*(e-t)+t;for(let z=0;z<=s;z++){const I=z/s,G=I*l+a,D=Math.sin(G),P=Math.cos(G);w.x=y*D,w.y=-x*n+g,w.z=y*P,h.push(w.x,w.y,w.z),E.set(D,b,P).normalize(),d.push(E.x,E.y,E.z),p.push(I,1-x),N.push(f++)}_.push(N)}for(let R=0;R<s;R++)for(let N=0;N<r;N++){const x=_[N][R],y=_[N+1][R],z=_[N+1][R+1],I=_[N][R+1];t>0&&(u.push(x,y,I),T+=3),e>0&&(u.push(y,z,I),T+=3)}c.addGroup(m,T,0),m+=T}function v(E){const w=f,T=new Pt,b=new U;let R=0;const N=E===!0?t:e,x=E===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,g*x,0),d.push(0,x,0),p.push(.5,.5),f++;const y=f;for(let z=0;z<=s;z++){const G=z/s*l+a,D=Math.cos(G),P=Math.sin(G);b.x=N*P,b.y=g*x,b.z=N*D,h.push(b.x,b.y,b.z),d.push(0,x,0),T.x=D*.5+.5,T.y=P*.5*x+.5,p.push(T.x,T.y),f++}for(let z=0;z<s;z++){const I=w+z,G=y+z;E===!0?u.push(G,G+1,I):u.push(G+1,G,I),R+=3}c.addGroup(m,R,E===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ja extends ti{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ja(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qa extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new U,E=new U,w=new U;for(let T=0;T<e.length;T+=3)p(e[T+0],v),p(e[T+1],E),p(e[T+2],w),l(v,E,w,M)}function l(M,v,E,w){const T=w+1,b=[];for(let R=0;R<=T;R++){b[R]=[];const N=M.clone().lerp(E,R/T),x=v.clone().lerp(E,R/T),y=T-R;for(let z=0;z<=y;z++)z===0&&R===T?b[R][z]=N:b[R][z]=N.clone().lerp(x,z/y)}for(let R=0;R<T;R++)for(let N=0;N<2*(T-R)-1;N++){const x=Math.floor(N/2);N%2===0?(d(b[R][x+1]),d(b[R+1][x]),d(b[R][x])):(d(b[R][x+1]),d(b[R+1][x+1]),d(b[R+1][x]))}}function c(M){const v=new U;for(let E=0;E<r.length;E+=3)v.x=r[E+0],v.y=r[E+1],v.z=r[E+2],v.normalize().multiplyScalar(M),r[E+0]=v.x,r[E+1]=v.y,r[E+2]=v.z}function u(){const M=new U;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const E=g(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;o.push(E,1-w)}f(),h()}function h(){for(let M=0;M<o.length;M+=6){const v=o[M+0],E=o[M+2],w=o[M+4],T=Math.max(v,E,w),b=Math.min(v,E,w);T>.9&&b<.1&&(v<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){const E=M*3;v.x=t[E+0],v.y=t[E+1],v.z=t[E+2]}function f(){const M=new U,v=new U,E=new U,w=new U,T=new Pt,b=new Pt,R=new Pt;for(let N=0,x=0;N<r.length;N+=9,x+=6){M.set(r[N+0],r[N+1],r[N+2]),v.set(r[N+3],r[N+4],r[N+5]),E.set(r[N+6],r[N+7],r[N+8]),T.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),w.copy(M).add(v).add(E).divideScalar(3);const y=g(w);_(T,x+0,M,y),_(b,x+2,v,y),_(R,x+4,E,y)}}function _(M,v,E,w){w<0&&M.x===1&&(o[v]=M.x-1),E.x===0&&E.z===0&&(o[v]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.vertices,t.indices,t.radius,t.details)}}class tl extends Qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class Rr extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,d=new U,p=[],f=[],_=[],g=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let E=0;m===0&&o===0?E=.5/e:m===n&&l===Math.PI&&(E=-.5/e);for(let w=0;w<=e;w++){const T=w/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),f.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(T+E,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=u[m][M+1],E=u[m][M],w=u[m+1][M],T=u[m+1][M+1];(m!==0||o>0)&&p.push(v,E,T),(m!==n-1||l<Math.PI)&&p.push(E,w,T)}this.setIndex(p),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pr extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new U,h=new U,d=new U;for(let p=0;p<=n;p++)for(let f=0;f<=s;f++){const _=f/s*r,g=p/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(f/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=s;f++){const _=(s+1)*p+f-1,g=(s+1)*(p-1)+f-1,m=(s+1)*(p-1)+f,M=(s+1)*p+f;o.push(_,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class M0 extends Si{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Jn extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class el extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const So=new se,gc=new U,_c=new U;class Iu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qa,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vc=new se,ds=new U,Eo=new U;class y0 extends Iu{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(ds),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),s.makeTranslation(-ds.x,-ds.y,-ds.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc)}}class Uu extends el{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class S0 extends Iu{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new S0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nu extends el{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class E0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xc(){return performance.now()}class Mc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class b0 extends x0{constructor(t=10,e=10,n=4473924,s=8947848){n=new Gt(n),s=new Gt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,f=-a;d<=e;d++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);const _=d===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new Fe;u.setAttribute("position",new le(l,3)),u.setAttribute("color",new le(c,3));const h=new Du({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class A0 extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const yc={type:"change"},nl={type:"start"},Ou={type:"end"},er=new $a,Sc=new Yn,T0=Math.cos(70*nd.DEG2RAD),ge=new U,ze=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bo=1e-6;class w0 extends A0{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vi.ROTATE,MIDDLE:Vi.DOLLY,RIGHT:Vi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new xi,this._lastTargetPosition=new U,this._quat=new xi().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mc,this._sphericalDelta=new Mc,this._scale=1,this._panOffset=new U,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new U,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=R0.bind(this),this._onPointerDown=C0.bind(this),this._onPointerUp=P0.bind(this),this._onContextMenu=F0.bind(this),this._onMouseWheel=I0.bind(this),this._onKeyDown=U0.bind(this),this._onTouchStart=N0.bind(this),this._onTouchMove=O0.bind(this),this._onMouseDown=L0.bind(this),this._onMouseMove=D0.bind(this),this._interceptControlDown=B0.bind(this),this._interceptControlUp=z0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yc),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ze:n>Math.PI&&(n-=ze),s<-Math.PI?s+=ze:s>Math.PI&&(s-=ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(er.origin.copy(this.object.position),er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(er.direction))<T0?this.object.lookAt(this.target):(Sc.setFromNormalAndCoplanarPoint(this.object.up,this.target),er.intersectPlane(Sc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bo||this._lastTargetPosition.distanceToSquared(this.target)>bo?(this.dispatchEvent(yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function C0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function R0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function P0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ou),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function L0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case Vi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case Vi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(nl)}function D0(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function I0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(nl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ou))}function U0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function N0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(nl)}function O0(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function F0(i){this.enabled!==!1&&i.preventDefault()}function B0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function z0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H0=new ja(-1,1,1,-1,0,1);class k0 extends Fe{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const V0=new k0;class Bu{constructor(t){this._mesh=new ae(V0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class G0 extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ar.clone(t.uniforms),this.material=new Ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Bu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ec extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class W0 extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class X0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Pt);this._width=n.width,this._height=n.height,e=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new G0(Fu),this.copyPass.material.blending=Un,this.clock=new E0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ec!==void 0&&(o instanceof Ec?n=!0:o instanceof W0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y0 extends ws{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Gt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const $0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ts extends ws{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Pt(t.x,t.y):new Pt(256,256),this.clearColor=new Gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new fn(r,o,{type:Nn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new fn(r,o,{type:Nn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=$0;this.highPassUniforms=Ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Fu;this.copyUniforms=Ar.clone(u.uniforms),this.blendMaterial=new Ge({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Vo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Gt,this.oldClearAlpha=1,this.basic=new Fr,this.fsQuad=new Bu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Pt(.5,.5)},direction:{value:new Pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ts.BlurDirectionX=new Pt(1,0);ts.BlurDirectionY=new Pt(0,1);function q0(i){const t=new Lu;t.background=new Gt(197898),t.fog=new Za(197898,.018);const e=new ke(55,window.innerWidth/window.innerHeight,.1,200);e.position.set(0,6,26),e.lookAt(0,0,0);const n=new Pu({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Qc,n.toneMapping=eu,n.toneMappingExposure=1.1,n.outputColorSpace=ln,i.appendChild(n.domElement);const s=new b0(60,60,1732520,797501);s.position.y=-13,s.material.opacity=.35,s.material.transparent=!0,t.add(s);const r=new ae(new Ts(120,120),new M0({opacity:.45}));r.rotation.x=-Math.PI/2,r.position.y=-13,r.receiveShadow=!0,t.add(r);const o=new Nu(1849938,1.2);t.add(o);const a=new Uu(4973567,2.2,60);a.position.set(0,10,10),t.add(a);const l=new Da(16777215,1.4);l.position.set(14,22,10),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-22,l.shadow.camera.right=22,l.shadow.camera.top=22,l.shadow.camera.bottom=-22,l.shadow.camera.near=1,l.shadow.camera.far=60,l.shadow.bias=-.0015,t.add(l);const c=new w0(e,n.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.minDistance=6,c.maxDistance=80,c.target.set(0,0,0);const u=new X0(n);u.addPass(new Y0(t,e));const h=new ts(new Pt(window.innerWidth,window.innerHeight),.55,.4,.35);return u.addPass(h),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)}),{scene:t,camera:e,renderer:n,composer:u,controls:c}}const ni=5.5,vn=[4,2,4],j0=2.5,B=ni;function Le(i,t){return i+Math.random()*(t-i)}function Nt(i,t){const e=t.reduce((a,l)=>a+l,0),n=t.map(a=>a/e*i),s=n.map(a=>Math.floor(a)),r=i-s.reduce((a,l)=>a+l,0),o=n.map((a,l)=>({i:l,frac:a-s[l]})).sort((a,l)=>l.frac-a.frac);for(let a=0;a<r;a++)s[o[a%o.length].i]++;return s}function Se(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=r%6,a=Le(-1,1),l=Le(-1,1);let c=0,u=0,h=0;switch(o){case 0:c=i,u=a*t,h=l*e;break;case 1:c=-i,u=a*t,h=l*e;break;case 2:u=t,c=a*i,h=l*e;break;case 3:u=-t,c=a*i,h=l*e;break;case 4:h=e,c=a*i,u=l*t;break;default:h=-e,c=a*i,u=l*t;break}s[r*3]=c,s[r*3+1]=u,s[r*3+2]=h}return s}function Yt(i,t){const e=new Float32Array(t*3),n=Math.PI*(3-Math.sqrt(5));for(let s=0;s<t;s++){const r=t>1?1-s/(t-1)*2:0,o=Math.sqrt(Math.max(0,1-r*r)),a=n*s;e[s*3]=Math.cos(a)*o*i,e[s*3+1]=r*i,e[s*3+2]=Math.sin(a)*o*i}return e}function K0(i,t,e,n){const s=new Float32Array(t*3),r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<t;o++){const a=t>1?o/(t-1):0,l=n-a*(n-e),c=Math.sqrt(Math.max(0,1-l*l)),u=r*o;s[o*3]=Math.cos(u)*c*i,s[o*3+1]=l*i,s[o*3+2]=Math.sin(u)*c*i}return s}function Xn(i,t,e,n,s,r,o){const a=Math.sqrt(e*e+n*n+s*s)||1,l=e/a,c=n/a,u=s/a;for(let h=0;h<t;h++){const d=i[h*3],p=i[h*3+1],f=i[h*3+2],_=Math.sqrt(d*d+p*p+f*f)||1;(d*l+p*c+f*u)/_<r||(i[h*3]=d*o,i[h*3+1]=p*o,i[h*3+2]=f*o)}}function Ao(i,t,e){const n=new Float32Array(e*3);for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2;if(Math.random()<.15){const o=i*Math.sqrt(Math.random()),a=Math.random()<.5?t:-t;n[s*3]=Math.cos(r)*o,n[s*3+1]=a,n[s*3+2]=Math.sin(r)*o}else n[s*3]=Math.cos(r)*i,n[s*3+1]=Le(-t,t),n[s*3+2]=Math.sin(r)*i}return n}function ce(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2;if(Math.random()<.15){const a=Math.random()<.5,c=(a?i:t)*Math.sqrt(Math.random()),u=a?e:-e;s[r*3]=Math.cos(o)*c,s[r*3+1]=u,s[r*3+2]=Math.sin(o)*c}else{const a=Le(-e,e),l=(a+e)/(2*e||1),c=t+(i-t)*l;s[r*3]=Math.cos(o)*c,s[r*3+1]=a,s[r*3+2]=Math.sin(o)*c}}return s}function He(i,t,e,n){const s=e/2,[r,o,a,l]=Nt(n,[12,38,38,12]),c=at(Yt(t,r),0,-e,0),u=at(ce(i,t,s,o),0,-s,0),h=at(ce(t,i,s,a),0,s,0),d=at(Yt(t,l),0,e,0);return xe([c,u,h,d])}function yn(i,t,e){const n=new Float32Array(t*3);if(i.length<2||t<=0)return n;const s=i.length-1,r=[];for(let l=0;l<s;l++){const[c,u,h]=i[l],[d,p,f]=i[l+1];r.push(Math.hypot(d-c,p-u,f-h)||1e-6)}const o=Nt(t,r);let a=0;for(let l=0;l<s;l++){const[c,u,h]=i[l],[d,p,f]=i[l+1],_=o[l];for(let g=0;g<_;g++){const m=Math.random();n[a*3]=c+(d-c)*m+Le(-e,e),n[a*3+1]=u+(p-u)*m+Le(-e,e),n[a*3+2]=h+(f-h)*m+Le(-e,e),a++}}return n}function hn(i,t,e){const n=new Float32Array(i.length);n.set(i);for(let s=t;s<n.length;s+=3)n[s]*=e;return n}function at(i,t,e,n){const s=new Float32Array(i.length);for(let r=0;r<i.length;r+=3)s[r]=i[r]+t,s[r+1]=i[r+1]+e,s[r+2]=i[r+2]+n;return s}function Lr(i){const t=new Float32Array(i.length);for(let e=0;e<i.length;e+=3)t[e]=i[e+1],t[e+1]=-i[e],t[e+2]=i[e+2];return t}function xe(i){const t=i.reduce((s,r)=>s+r.length,0),e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function Cs(){const i=B*.5,t=B*.24,e=B*.16,n=e+i*.9,s=i*.78;return{headR:i,neckR:t,neckHalfH:e,headCenterY:n,skullR:s}}function Z0(i){const{headR:t,neckR:e,neckHalfH:n,headCenterY:s}=Cs(),r=t*.62,o=s-t*.55,a=t*.22,l=s-t*.05,c=t*.14,u=s-t*.05,[h,d,p,f,_]=Nt(i,[44,22,10,8,16]),[g,m]=Nt(p,[1,1]),M=at(hn(Yt(t,h),2,.86),0,s,0),v=at(hn(Yt(r,d),2,.8),0,o,t*.1),E=[at(hn(Yt(a,g),0,.35),-t*.92,l,0),at(hn(Yt(a,m),0,.35),t*.92,l,0)],w=at(hn(Yt(c,f),1,.7),0,u,t*.88),T=at(ce(e,e*1.15,n,_),0,0,0);return xe([M,v,...E,w,T])}function J0(i){const{headR:t,headCenterY:e}=Cs(),[n,s]=Nt(i,[88,12]),[r,o]=Nt(s,[1,1]),a=at(hn(K0(t*1.04,n,.34,1),2,.88),0,e,0),l=e+t*.18,c=t*.84,u=t*.16,h=[yn([[-t*.42,l,c],[-t*.42+u,l+t*.02,c]],r,t*.015),yn([[t*.42-u,l+t*.02,c],[t*.42,l,c]],o,t*.015)];return xe([a,...h])}function Q0(i){const{headR:t,headCenterY:e}=Cs(),n=t*.1,s=e+t*.08,r=t*.36,o=t*.82,[a,l]=Nt(i,[1,1]);return xe([at(Yt(n,a),-r,s,o),at(Yt(n,l),r,s,o)])}function t_(i){const{headR:t,headCenterY:e}=Cs(),n=e-t*.42,s=t*.85,r=t*.22;return yn([[-r,n,s],[0,n-t*.02,s*1.01],[r,n,s]],i,t*.03)}const Ia=[{name:"piel",generator:Z0,weight:.55,color:14394745},{name:"cabello",generator:J0,weight:.28,color:2824978},{name:"ojos",generator:Q0,weight:.07,color:4139546},{name:"labios",generator:t_,weight:.1,color:11620938}];function e_(i){const t=Nt(i,Ia.map(e=>e.weight));return xe(Ia.map((e,n)=>e.generator(t[n])))}function n_(i){const t=B*.62,e=B*.42,n=B*.55,s=B*.48,r=B*.26,o=B*.34,a=B*.14,l=0,c=l-r,u=l+n,h=u+n,d=t*.95,[p,f,_]=Nt(i,[55,30,15]),[g,m]=Nt(_,[1,1]),M=at(ce(t,e,n,p),0,u,0),v=at(Se(s,r,o,f),0,c,0),E=[at(Yt(a,g),-d,h,0),at(Yt(a,m),d,h,0)];return xe([M,v,...E])}function i_(i){const t=B*.22,e=B*.26,n=B*.19,s=B*.6,r=B*.16,o=B*.18,a=B*.12,l=B*.55,c=B*.15,u=B*.2,h=B*.06,d=B*.035,p=B*.15,f=0,_=f-s,g=f-s*2,m=g-l,M=g-l*2,v=M-u,w=M-u*2-p,[T,b,R,N,x,y]=Nt(i,[6,24,4,20,16,30]),z=Nt(y,[1,1,1,1,1]),I=at(Yt(t,T),0,f,0),G=at(ce(e,n,s,b),0,_,0),D=at(Yt(r,R),0,g,0),P=at(ce(o,a,l,N),0,m,0),F=at(Se(c,u,h,x),0,v,0),st=[-2,-1,0,1,2].map((rt,dt)=>at(ce(d,d*1.3,p,z[dt]),rt*c*.4,w,0));return Lr(xe([I,G,D,P,F,...st]))}function s_(i){const t=B*.24,e=B*.3,n=B*.2,s=B*.65,r=B*.18,o=B*.2,a=B*.13,l=B*.62,c=B*.16,u=B*.09,h=B*.36,d=B*.04,p=B*.09,f=0,_=f-s,g=f-s*2,m=g-l,v=g-l*2-u,[E,w,T,b,R,N]=Nt(i,[6,26,4,22,22,20]),x=Nt(N,[1,1,1,1,1]),y=at(Yt(t,E),0,f,0),z=at(ce(e,n,s,w),0,_,0),I=at(Yt(r,T),0,g,0),G=at(ce(o,a,l,b),0,m,0),D=at(Se(c,u,h,R),0,v,h*.5),F=[-.6,-.3,0,.3,.6].map((O,st)=>at(Se(d,d,p,x[st]),O*c,v,h+p));return xe([y,z,I,G,D,...F])}function r_(i){const t=B*.22,e=B*.18,n=B*.42,s=B*.5,r=B*.16,o=B*.07,a=B*.05,l=[.55,.72,.78,.7,.5],c=[-.85,-.45,0,.45,.85],u=0,h=u-e-s,d=h-s,[p,f,_]=Nt(i,[10,35,55]),g=Nt(_,[.9,1,1.1,1,.8]),m=at(ce(t,t*1.1,e,p),0,u,0),M=at(Se(n,s,r,f),0,h,0),v=c.map((E,w)=>{const T=B*l[w]*.5;return at(ce(o,a,T,g[w]),E*n,d-T,0)});return xe([m,M,...v])}function o_(i){const t=B*.24,e=B*.2,n=B*.34,s=B*.22,r=B*.75,o=B*.09,a=[.75,1,.95,.85,.7],l=[-.65,-.3,0,.3,.65],c=0,u=c-e-s,h=r*.3+r,[d,p,f]=Nt(i,[10,55,35]),_=Nt(f,[1,1,1,1,1]),g=at(ce(t,t*1.1,e,d),0,c,0),m=at(Se(n,s,r,p),0,u,r*.3),M=l.map((v,E)=>{const w=B*.16*a[E];return at(Se(o,o,w,_[E]),v*n,u,h+w)});return xe([g,m,...M])}function a_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=e%6,s=Le(-B,B),r=Le(-B,B);let o=0,a=0,l=0;switch(n){case 0:o=B,a=s,l=r;break;case 1:o=-B,a=s,l=r;break;case 2:a=B,o=s,l=r;break;case 3:a=-B,o=s,l=r;break;case 4:l=B,o=s,a=r;break;default:l=-B,o=s,a=r;break}t[e*3]=o,t[e*3+1]=a,t[e*3+2]=l}return t}function l_(i){const t=new Float32Array(i*3),e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n++){const s=i>1?1-n/(i-1)*2:0,r=Math.sqrt(Math.max(0,1-s*s)),o=e*n;t[n*3]=Math.cos(o)*r*B,t[n*3+1]=s*B,t[n*3+2]=Math.sin(o)*r*B}return t}function c_(i){const t=new Float32Array(i*3),e=[-B,-B,-B],n=[B,-B,-B],s=[B,-B,B],r=[-B,-B,B],o=[0,B,0],a=[[e,n,o],[n,s,o],[s,r,o],[r,e,o]],l=Math.round(i*.3);for(let c=0;c<i;c++){let u,h,d;if(c<l)u=Le(-B,B),h=-B,d=Le(-B,B);else{const[p,f,_]=a[(c-l)%4];let g=Math.random(),m=Math.random();g+m>1&&(g=1-g,m=1-m),u=p[0]+g*(f[0]-p[0])+m*(_[0]-p[0]),h=p[1]+g*(f[1]-p[1])+m*(_[1]-p[1]),d=p[2]+g*(f[2]-p[2])+m*(_[2]-p[2])}t[c*3]=u,t[c*3+1]=h,t[c*3+2]=d}return t}function u_(i){const t=new Float32Array(i*3),e=5,n=B,s=B*.42,r=Math.PI/e;for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,l=a%r/r,h=(Math.floor(a/r)%2===0?n+(s-n)*l:s+(n-s)*l)*Math.sqrt(Math.random());t[o*3]=Math.cos(a)*h,t[o*3+1]=Math.sin(a)*h,t[o*3+2]=Le(-B*.12,B*.12)}return t}function h_(i){const t=new Float32Array(i*3),e=B*.75,n=B*.28;for(let s=0;s<i;s++){const r=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;t[s*3]=(e+n*Math.cos(o))*Math.cos(r),t[s*3+1]=n*Math.sin(o),t[s*3+2]=(e+n*Math.cos(o))*Math.sin(r)}return t}function d_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random()),r=16*Math.pow(Math.sin(n),3),o=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);t[e*3]=r/16*B*s,t[e*3+1]=o/16*B*s,t[e*3+2]=Le(-B*.15,B*.15)}return t}function f_(i){const t=new Float32Array(i*3),e=B,n=B*.22;for(let s=0;s<i;s++){let r=0,o=0;for(let a=0;a<20&&(r=Le(-e,e),o=Le(-e,e),!(Math.abs(r)<=n||Math.abs(o)<=n));a++);t[s*3]=r,t[s*3+1]=o,t[s*3+2]=Le(-B*.15,B*.15)}return t}function p_(i){const t=B*.62,e=B*.14,n=B*.42,s=t*.5,r=B*.3,o=B*.14,a=.35,l=B*.34,c=B*.16,u=B*.32,h=B*.16,d=B*.1,p=B*.36,f=B*.05,_=B*.08,g=B*.4,m=B*.05,M=B*.018,v=B*.34,E=B*.018,w=B*.1,T=B*.045,b=B*.03,R=B*.04,N=B*.055,x=B*.22,y=B*.1,z=t,I=-t,[G,D,P,F,O,st,rt,dt,vt,lt,W]=Nt(i,[22,10,14,6,4,5,2,2,2,20,13]),[Q,ht]=Nt(rt,[1,1]),[ut,Mt]=Nt(dt,[1,1]),[Et,Lt]=Nt(vt,[1,1]),kt=Nt(lt,[1,1,1,1]),Bt=Se(t,e,n,G),L=at(Lr(hn(ce(o,r,s,D),0,a)),s,e+r*a*.6,0),qt=at(Se(l,c,u,P),-t*.12,e+c,0),It=at(Se(h,d,p,F),I+h*.6,e+d,0),Ot=at(Se(f,_,g,O),z+f*.7,-e*.3,0),ot=e+d*2+w*2+M,Tt=at(Se(m,M,v,st),I+h*.4,ot,0),ct=e+d*2,C=[at(Ao(E,w,Q),I+h*.4,ct+w,-v*.7),at(Ao(E,w,ht),I+h*.4,ct+w,v*.7)],S=[at(Se(T,b,R,ut),-t*.05,e+c*1.6,-u-R),at(Se(T,b,R,Mt),-t*.05,e+c*1.6,u+R)],X=[at(Yt(N,Et),z*.96,e*.4,-n*.7),at(Yt(N,Lt),z*.96,e*.4,n*.7)],Z=[[-t*.55,-n*.95],[t*.55,-n*.95],[-t*.55,n*.95],[t*.55,n*.95]],et=Z.map(([tt,Ct],it)=>at(Lr(Ao(x,y,kt[it])),tt,-e,Ct)),J=[{pts:[[0,e+r*a,0],[z,e+o*a,0]],weight:s*2},{pts:[[I*.9,e*.3,-n*.98],[z*.9,e*.55,-n*.98]],weight:t*1.8},{pts:[[I*.9,e*.3,n*.98],[z*.9,e*.55,n*.98]],weight:t*1.8},...Z.map(([tt,Ct])=>({pts:[[tt-x*1.3,e*.2,Ct],[tt,e*.75,Ct],[tt+x*1.3,e*.2,Ct]],weight:x*2.6}))],Y=Nt(W,J.map(tt=>tt.weight)),q=J.map((tt,Ct)=>yn(tt.pts,Y[Ct],B*.02));return xe([Bt,L,qt,It,Ot,Tt,...C,...S,...X,...et,...q])}function m_(i){return Se(B*.42,B*.85,B*.09,i)}function zu(){const i=B*.2,t=B*.09,e=B*.045,n=B*.34,s=B*.22,r=B*.28,o=B*.26,a=B*.14,l=B*.18,c=B*.07,u=B*.085,h=B*.06,d=B*.22,p=B*.06,f=B*.045,_=B*.2,g=B*.06,m=B*.14,M=B*.1,v=B*.28,E=B*.1,w=B*.07,T=B*.26,b=B*.06,R=B*.04,N=B*.14,x=0,y=x-a,z=x+r,I=z+r,G=I+e,D=G+e+i*.9,P=I,F=n*.95,O=F,st=P-d,rt=P-d*2,dt=rt-_,vt=rt-_*2,lt=vt-g*.8,W=o*.5,Q=x-a*2,ht=Q-v,ut=Q-v*2,Mt=ut-T,Et=ut-T*2,Lt=Et-R,kt=n*.85;return{headR:i,neckR:t,neckHalfH:e,chestTopR:n,chestBottomR:s,chestHalfH:r,pelvisHx:o,pelvisHy:a,pelvisHz:l,shoulderR:c,upperArmTopR:u,upperArmBottomR:h,upperArmHalfH:d,forearmTopR:p,forearmBottomR:f,forearmHalfH:_,handR:g,thighTopR:m,thighBottomR:M,thighHalfH:v,calfTopR:E,calfBottomR:w,calfHalfH:T,footHx:b,footHy:R,footHz:N,waistY:x,pelvisCenterY:y,chestCenterY:z,chestTopY:I,neckCenterY:G,headCenterY:D,shoulderY:P,shoulderX:F,armX:O,upperArmCenterY:st,elbowY:rt,forearmCenterY:dt,wristY:vt,handCenterY:lt,hipX:W,hipY:Q,thighCenterY:ht,kneeY:ut,calfCenterY:Mt,ankleY:Et,footCenterY:Lt,chestFrontZ:kt}}function g_(i){const{headR:t,neckR:e,neckHalfH:n,chestTopR:s,chestBottomR:r,chestHalfH:o,pelvisHx:a,pelvisHy:l,pelvisHz:c,shoulderR:u,upperArmTopR:h,upperArmBottomR:d,upperArmHalfH:p,forearmTopR:f,forearmBottomR:_,forearmHalfH:g,handR:m,thighTopR:M,thighBottomR:v,thighHalfH:E,calfTopR:w,calfBottomR:T,calfHalfH:b,footHx:R,footHy:N,footHz:x,chestCenterY:y,chestTopY:z,neckCenterY:I,headCenterY:G,shoulderY:D,shoulderX:P,armX:F,upperArmCenterY:O,forearmCenterY:st,handCenterY:rt,hipX:dt,thighCenterY:vt,calfCenterY:lt,footCenterY:W,chestFrontZ:Q,waistY:ht,pelvisCenterY:ut}=zu(),[Mt,Et,Lt,kt,Bt,L,qt,It,Ot,ot,Tt,ct]=Nt(i,[8,2,16,10,2,10,8,4,14,10,6,10]),[C,S]=Nt(Bt,[1,1]),[X,Z]=Nt(L,[1,1]),[et,J]=Nt(qt,[1,1]),[Y,q]=Nt(It,[1,1]),[tt,Ct]=Nt(Ot,[1,1]),[it,ft]=Nt(ot,[1,1]),[gt,mt]=Nt(Tt,[1,1]),_t=at(hn(Yt(t,Mt),2,.8),0,G,0),zt=at(ce(e,e*1.1,n,Et),0,I,0),Ft=at(ce(s,r,o,Lt),0,y,0),Zt=at(Se(a,l,c,kt),0,ut,0),H=[at(Yt(u,C),-P,D,0),at(Yt(u,S),P,D,0)],St=[at(ce(h,d,p,X),-F,O,0),at(ce(h,d,p,Z),F,O,0)],j=[at(ce(f,_,g,et),-F,st,0),at(ce(f,_,g,J),F,st,0)],nt=[at(hn(Yt(m,Y),2,.6),-F,rt,0),at(hn(Yt(m,q),2,.6),F,rt,0)],yt=[at(ce(M,v,E,tt),-dt,vt,0),at(ce(M,v,E,Ct),dt,vt,0)],bt=[at(ce(w,T,b,it),-dt,lt,0),at(ce(w,T,b,ft),dt,lt,0)],$t=[at(Se(R,N,x,gt),-dt,W,x*.5),at(Se(R,N,x,mt),dt,W,x*.5)],ue=[y+o*.5,y,y-o*.4],be=[{pts:[[-P*.7,D,Q*.6],[P*.7,D,Q*.6]],weight:P},...ue.map((Ce,ii)=>({pts:[[-s*(.75-ii*.08),Ce,Q],[s*(.75-ii*.08),Ce,Q]],weight:s})),{pts:[[0,z*.9,Q],[B*.02,y,Q*.95],[-B*.02,ht+o*.3,Q*.9],[0,ht,Q*.85]],weight:o*1.5}],jt=Nt(ct,be.map(Ce=>Ce.weight)),we=be.map((Ce,ii)=>yn(Ce.pts,jt[ii],B*.015));return xe([_t,zt,Ft,Zt,...H,...St,...j,...nt,...yt,...bt,...$t,...we])}function __(i){const t=zu(),e=t.headR*.75,n=t.neckR*.7,s=t.upperArmBottomR*.4,r=t.upperArmTopR*.55,o=t.upperArmHalfH*.75,a=t.forearmBottomR*.4,l=t.forearmTopR*.55,c=t.forearmHalfH*.75,u=t.thighBottomR*.4,h=t.thighTopR*.55,d=t.thighHalfH*.75,p=t.calfBottomR*.4,f=t.calfTopR*.55,_=t.calfHalfH*.75,g=t.handR*.5,m=t.footHy*.7,M=[t.chestTopY,t.chestCenterY,t.waistY,t.pelvisCenterY],v=[t.chestCenterY+t.chestHalfH*.4,t.chestCenterY,t.chestCenterY-t.chestHalfH*.4],[E,w,T,b,R,N,x,y,z]=Nt(i,[10,10,10,14,12,4,16,14,4]),I=Nt(w,M.map(()=>1)),G=Nt(T,v.map(()=>1)),[D,P]=Nt(b,[1,1]),[F,O]=Nt(R,[1,1]),[st,rt]=Nt(N,[1,1]),[dt,vt]=Nt(x,[1,1]),[lt,W]=Nt(y,[1,1]),[Q,ht]=Nt(z,[1,1]),ut=at(Yt(e,E),0,t.headCenterY,0),Mt=M.map((Ot,ot)=>at(Yt(n,I[ot]),0,Ot,0)),Et=v.map((Ot,ot)=>yn([[-1.87*.7,Ot,t.chestFrontZ*.9],[0,Ot,t.chestFrontZ],[t.chestTopR*.7,Ot,t.chestFrontZ*.9]],G[ot],B*.01)),Lt=[at(He(s,r,o,D),-1.7765,t.upperArmCenterY,0),at(He(s,r,o,P),t.armX,t.upperArmCenterY,0)],kt=[at(He(a,l,c,F),-1.7765,t.forearmCenterY,0),at(He(a,l,c,O),t.armX,t.forearmCenterY,0)],Bt=[at(Yt(g,st),-1.7765,t.handCenterY,0),at(Yt(g,rt),t.armX,t.handCenterY,0)],L=[at(He(u,h,d,dt),-.7150000000000001,t.thighCenterY,0),at(He(u,h,d,vt),t.hipX,t.thighCenterY,0)],qt=[at(He(p,f,_,lt),-.7150000000000001,t.calfCenterY,0),at(He(p,f,_,W),t.hipX,t.calfCenterY,0)],It=[at(Yt(m,Q),-.7150000000000001,t.footCenterY,0),at(Yt(m,ht),t.hipX,t.footCenterY,0)];return xe([ut,...Mt,...Et,...Lt,...kt,...Bt,...L,...qt,...It])}function v_(i){const{headCenterY:t,skullR:e}=Cs(),n=B*.1,s=e*.6,r=t-e*.55,[o,a,l,c]=Nt(i,[48,20,14,18]),u=hn(Yt(e,o),2,.88);Xn(u,o,-.42,.12,.9,.8,.6),Xn(u,o,.42,.12,.9,.8,.6),Xn(u,o,0,-.15,1,.94,.72),Xn(u,o,-.42,.32,.85,.9,1.15),Xn(u,o,.42,.32,.85,.9,1.15),Xn(u,o,-.55,-.05,.8,.88,1.12),Xn(u,o,.55,-.05,.8,.88,1.12),Xn(u,o,0,.05,1,.95,1.08);const h=at(u,0,t,0),d=r+s*.7,p=r+s*.1,f=r-s*.35,_=yn([[-s,d,0],[-s*.95,p,s*.35],[0,f,s*.78],[s*.95,p,s*.35],[s,d,0]],a,s*.1),g=r-s*.05,m=s*.65,[M,v]=Nt(l,[1,1]),E=[yn([[-s*.55,g+s*.18,m],[s*.55,g+s*.18,m]],M,s*.03),yn([[-s*.5,g-s*.1,m*.95],[s*.5,g-s*.1,m*.95]],v,s*.03)],w=at(Yt(n,c),0,0,0);return xe([h,_,...E,w])}function x_(i){const t=B*.62,e=B*.55,n=B*.26,s=0,r=s+e,o=r+e,a=s-n,l=t*.85,c=t*.95,u=B*.09,h=B*.12,d=[o,r,s,a],p=[r+e*.4,r,r-e*.4],[f,_,g]=Nt(i,[30,45,25]),m=Nt(f,d.map(()=>1)),M=Nt(_,p.map(()=>1)),[v,E]=Nt(g,[1,1]),w=d.map((R,N)=>at(Yt(u,m[N]),0,R,0)),T=p.map((R,N)=>yn([[-t*.7,R,l*.9],[0,R,l],[t*.7,R,l*.9]],M[N],B*.01)),b=[at(Yt(h,v),-c,o,0),at(Yt(h,E),c,o,0)];return xe([...w,...T,...b])}function M_(i){const t=B*.6,e=B*.55,n=B*.2,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,u=B*.08,h=B*.13,d=B*.06,p=B*.1,f=B*.09,[_,g,m]=Nt(i,[40,40,20]),M=at(He(u,h,t*.8,_),0,r,0),v=at(He(d,p,e*.8,g),0,a,0),E=at(Yt(f,m),0,c,0);return Lr(xe([M,v,E]))}function y_(i){const t=B*.65,e=B*.62,n=B*.09,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,u=B*.1,h=B*.16,d=B*.08,p=B*.12,f=B*.1,[_,g,m]=Nt(i,[42,40,18]),M=at(He(u,h,t*.8,_),0,r,0),v=at(He(d,p,e*.8,g),0,a,0),E=at(Yt(f,m),0,c,0);return xe([M,v,E])}function S_(i){const t=B*.18,e=B*.5,n=B*.42,s=[.55,.72,.78,.7,.5],r=[-.85,-.45,0,.45,.85],o=0,l=o-t-e-e,c=B*.08,u=B*.035,[h,d]=Nt(i,[15,85]),p=Nt(d,[.9,1,1.1,1,.8]),f=at(Yt(c,h),0,o,0),_=r.map((g,m)=>{const M=B*s[m]*.4;return at(He(u*.7,u,M,p[m]),g*n,l-M,0)});return xe([f,..._])}function E_(i){const t=B*.2,e=B*.22,n=B*.75,s=B*.34,r=[.75,1,.95,.85,.7],o=[-.65,-.3,0,.3,.65],a=0,l=a-t-e,c=n*.3+n,u=B*.1,h=B*.04,[d,p]=Nt(i,[20,80]),f=Nt(p,[1,1,1,1,1]),_=at(Yt(u,d),0,a,0),g=o.map((m,M)=>{const v=B*.16*r[M]*.7;return at(He(h*.7,h,v,f[M]),m*s,l,c*.6)});return xe([_,...g])}const Ss=new Map,Hu=new Map,Ua=new Map;function Te(i){Ss.set(i.name,i);for(const t of i.aliases)Hu.set(t,i.name);Ua.set(i.name,(Ua.get(i.name)??0)+1)}function b_(i){return Ua.get(i)??0}function il(i){return Ss.get(i)??null}Te({name:"cubo",aliases:["caja","dado"],generate:a_});Te({name:"esfera",aliases:["bola","globo","planeta"],generate:l_});Te({name:"piramide",aliases:["triangulo"],generate:c_});Te({name:"estrella",aliases:[],generate:u_});Te({name:"anillo",aliases:["dona","donut","rosquilla","toro"],generate:h_});Te({name:"corazon",aliases:["amor","love"],generate:d_});Te({name:"cruz",aliases:["plus","mas"],generate:f_});Te({name:"carro",aliases:["auto","coche","vehiculo"],generate:p_});Te({name:"telefono",aliases:["celular","movil","smartphone"],generate:m_});Te({name:"persona",aliases:["personaje","humano","gente"],generate:g_,bones:__});Te({name:"cabeza",aliases:[],generate:e_,bones:v_,colorParts:Ia});Te({name:"torso",aliases:["tronco"],generate:n_,bones:x_});Te({name:"brazo",aliases:["brazos"],generate:i_,bones:M_});Te({name:"pierna",aliases:["piernas"],generate:s_,bones:y_});Te({name:"mano",aliases:["manos"],generate:r_,bones:S_});Te({name:"pie",aliases:["pies"],generate:o_,bones:E_});const A_=new RegExp("[\\u0300-\\u036f]","g");function T_(i){return i.normalize("NFD").replace(A_,"").toLowerCase().trim()}function sl(i){const t=T_(i);if(Ss.has(t))return t;const e=Hu.get(t);return e&&Ss.has(e)?e:null}function w_(){return[...Ss.keys()]}const bc="escaneo";function C_(i,t){const e=Math.floor(i.length/3),n=ni*.02;return s=>{const r=new Float32Array(s*3),o=new Uint8Array(s*3);if(e===0)return{points:r,colors:o};for(let a=0;a<s;a++){const l=a>=e,c=l?Math.floor(Math.random()*e):a,u=l?(Math.random()*2-1)*n:0,h=l?(Math.random()*2-1)*n:0,d=l?(Math.random()*2-1)*n:0;r[a*3+0]=i[c*3+0]+u,r[a*3+1]=i[c*3+1]+h,r[a*3+2]=i[c*3+2]+d,t?(o[a*3+0]=t[c*3+0],o[a*3+1]=t[c*3+1],o[a*3+2]=t[c*3+2]):(o[a*3+0]=255,o[a*3+1]=255,o[a*3+2]=255)}return{points:r,colors:o}}}function rl(i,t=null){const e=C_(i,t);return Te({name:bc,aliases:[],generate:n=>e(n).points,...t?{generateWithColor:e}:{}}),bc}const ye={DETAIL:0,COLOR:1},R_=.75;function P_(i,t){const e=[];if(t<2)return e;const n=new Uint8Array(t),s=new Float32Array(t).fill(1/0),r=new Int32Array(t).fill(-1);n[0]=1;for(let o=1;o<t;o++){const a=i[o*3+0]-i[0],l=i[o*3+1]-i[1],c=i[o*3+2]-i[2];s[o]=a*a+l*l+c*c,r[o]=0}for(let o=1;o<t;o++){let a=-1,l=1/0;for(let d=0;d<t;d++)!n[d]&&s[d]<l&&(l=s[d],a=d);if(a===-1)break;n[a]=1,e.push([r[a],a]);const c=i[a*3+0],u=i[a*3+1],h=i[a*3+2];for(let d=0;d<t;d++){if(n[d])continue;const p=i[d*3+0]-c,f=i[d*3+1]-u,_=i[d*3+2]-h,g=p*p+f*f+_*_;g<s[d]&&(s[d]=g,r[d]=a)}}return e}const L_=2;function D_(i,t,e){const n=[],s=Math.min(L_,t-1);if(s<=0)return n;const r=new Int32Array(s),o=new Float32Array(s);for(let a=0;a<t;a++){const l=i[a*3+0],c=i[a*3+1],u=i[a*3+2];let h=0;for(let d=0;d<t;d++){if(d===a)continue;const p=i[d*3+0]-l,f=i[d*3+1]-c,_=i[d*3+2]-u,g=p*p+f*f+_*_;let m=h<s?h:s-1;if(h===s){if(g>=o[s-1])continue}else h++;for(;m>0&&o[m-1]>g;)o[m]=o[m-1],r[m]=r[m-1],m--;o[m]=g,r[m]=d}for(let d=0;d<h;d++){const p=r[d],f=a<p?`${a}-${p}`:`${p}-${a}`;e.has(f)||(e.add(f),n.push([a,p]))}}return n}function I_(i,t){if(t<2)return[];const e=P_(i,t),n=new Set;for(const[s,r]of e)n.add(s<r?`${s}-${r}`:`${r}-${s}`);return e.concat(D_(i,t,n))}function U_(i,t,e){const n=new Float32Array(e*3),s=new Float32Array(e*6);if(t.length===0)return{points:n,spans:s};for(let r=0;r<e;r++){const[o,a]=t[r%t.length],l=i[o*3+0],c=i[o*3+1],u=i[o*3+2],h=i[a*3+0],d=i[a*3+1],p=i[a*3+2];n[r*3+0]=(l+h)/2,n[r*3+1]=(c+d)/2,n[r*3+2]=(u+p)/2,s[r*6+0]=l,s[r*6+1]=c,s[r*6+2]=u,s[r*6+3]=h,s[r*6+4]=d,s[r*6+5]=p}return{points:n,spans:s}}const N_=4;function O_(i,t,e){if(e<=0||t===0)return new Float32Array(0);const n=Math.min(e,t),s=new Int32Array(n),r=new Float32Array(t).fill(1/0);let o=Math.floor(Math.random()*t);s[0]=o;for(let l=1;l<n;l++){const c=i[o*3+0],u=i[o*3+1],h=i[o*3+2];let d=-1,p=-1;for(let f=0;f<t;f++){const _=i[f*3+0]-c,g=i[f*3+1]-u,m=i[f*3+2]-h,M=_*_+g*g+m*m;M<r[f]&&(r[f]=M),r[f]>p&&(p=r[f],d=f)}o=d,s[l]=o}const a=new Float32Array(n*3);for(let l=0;l<n;l++){const c=s[l];a[l*3+0]=i[c*3+0],a[l*3+1]=i[c*3+1],a[l*3+2]=i[c*3+2]}return a}function F_(i,t){if(t<=0)return new Float32Array(0);const e=i(t*N_);return O_(e,e.length/3,t)}const B_=.12,z_=2e3;function H_(i,t,e=vn){const n=sl(i);if(!n)return null;const s=il(n);if(s.bones){const g=s.bones(t),m=new Float32Array(t*3);for(let M=0;M<t;M++)m[M*3+0]=g[M*3+0]+e[0],m[M*3+1]=g[M*3+1]+e[1],m[M*3+2]=g[M*3+2]+e[2];return{points:m,isBeam:new Uint8Array(t),relationSpans:new Float32Array(t*6)}}const r=s.generate,o=t>0?Math.min(t,z_,Math.max(4,Math.round(t*B_))):0,a=Math.max(0,t-o),l=F_(r,o),c=I_(l,o),{points:u,spans:h}=U_(l,c,a),d=new Float32Array(t*3),p=new Uint8Array(t),f=new Float32Array(t*6);let _=0;for(let g=0;g<o;g++)d[_*3+0]=l[g*3+0]+e[0],d[_*3+1]=l[g*3+1]+e[1],d[_*3+2]=l[g*3+2]+e[2],_++;for(let g=0;g<a;g++)d[_*3+0]=u[g*3+0]+e[0],d[_*3+1]=u[g*3+1]+e[1],d[_*3+2]=u[g*3+2]+e[2],p[_]=1,f[_*6+0]=h[g*6+0]+e[0],f[_*6+1]=h[g*6+1]+e[1],f[_*6+2]=h[g*6+2]+e[2],f[_*6+3]=h[g*6+3]+e[0],f[_*6+4]=h[g*6+4]+e[1],f[_*6+5]=h[g*6+5]+e[2],_++;return{points:d,isBeam:p,relationSpans:f}}const Ac=[{color:0,weight:1}];function k_(i,t,e=vn,n=Ac){const s=sl(i);if(!s)return null;const r=il(s),o=r.generate,a=r.colorParts,l=a?a.map(w=>({color:w.color,weight:w.weight})):n.length>0?n:Ac,c=t>0?Math.round(t*R_):0,u=Math.max(0,t-c),h=o(u),d=Nt(c,l.map(w=>w.weight)),p=r.generateWithColor,f=a?d.map((w,T)=>({points:a[T].generator(w),colors:null})):d.map(w=>p?p(w):{points:o(w),colors:null}),_=new Float32Array(t*3),g=new Uint8Array(t),m=new Uint8Array(t),M=p&&!a?new Uint8Array(t*3):null;let v=0;((w,T,b)=>{for(let R=0;R<T;R++)_[v*3+0]=w[R*3+0]+e[0],_[v*3+1]=w[R*3+1]+e[1],_[v*3+2]=w[R*3+2]+e[2],g[v]=b,v++})(h,u,ye.DETAIL);for(let w=0;w<f.length;w++){const{points:T,colors:b}=f[w],R=d[w];for(let N=0;N<R;N++)_[v*3+0]=T[N*3+0]+e[0],_[v*3+1]=T[N*3+1]+e[1],_[v*3+2]=T[N*3+2]+e[2],g[v]=ye.COLOR,m[v]=w,M&&b&&(M[v*3+0]=b[N*3+0],M[v*3+1]=b[N*3+1],M[v*3+2]=b[N*3+2]),v++}return{points:_,roles:g,colorWave:m,colorWaveCount:l.length,colorClusters:l,pointColors:M}}function V_(i,t){const e=new Float32Array(i*3);for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=j0*(.5+.5*Math.random());e[n*3]=t[0]+o*Math.sin(r)*Math.cos(s),e[n*3+1]=t[1]+o*Math.sin(r)*Math.sin(s),e[n*3+2]=t[2]+o*Math.cos(r)}return e}const ku=192;function G_(i,t,e=ku){if(i<=0||t<=0)return{width:0,height:0};const n=Math.max(i,t);if(n<=e)return{width:i,height:t};const s=e/n;return{width:Math.max(1,Math.round(i*s)),height:Math.max(1,Math.round(t*s))}}function W_(i,t,e){return(t*e+i)*4}function X_(i,t,e){return .2126*i+.7152*t+.0722*e}function Y_(i){const{pixels:t}=i;for(let e=3;e<t.length;e+=4)if(t[e]<250)return!0;return!1}function $_(i,t=ku){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const{width:o,height:a}=G_(s.naturalWidth,s.naturalHeight,t);if(o===0||a===0){n(new Error("La imagen no tiene dimensiones válidas"));return}const l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");if(!c){n(new Error("Canvas 2D no disponible"));return}c.drawImage(s,0,0,o,a),e({pixels:c.getImageData(0,0,o,a).data,width:o,height:a})}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la imagen"))},s.src=r})}function Vu(i,t){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const o=document.createElement("canvas");o.width=t,o.height=t;const a=o.getContext("2d");if(!a){n(new Error("Canvas 2D no disponible"));return}a.drawImage(s,0,0,t,t),e({pixels:a.getImageData(0,0,t,t).data,width:t,height:t})}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la imagen"))},s.src=r})}const Pn=8,To=256/Pn,q_=128,wo=235,Co=20,j_=32,xs=4,Tc=60,Es=4973567,Na=[{color:Es,weight:1}];function K_(i,t=xs){const e=Pn*Pn*Pn,n=new Uint32Array(e),s=new Float64Array(e),r=new Float64Array(e),o=new Float64Array(e);for(let p=0;p+3<i.length;p+=4){const f=i[p],_=i[p+1],g=i[p+2];if(i[p+3]<q_||f>wo&&_>wo&&g>wo||f<Co&&_<Co&&g<Co)continue;const M=Math.min(Pn-1,Math.floor(f/To)),v=Math.min(Pn-1,Math.floor(_/To)),E=Math.min(Pn-1,Math.floor(g/To)),w=(M*Pn+v)*Pn+E;n[w]++,s[w]+=f,r[w]+=_,o[w]+=g}const a=[];for(let p=0;p<e;p++)n[p]!==0&&a.push({count:n[p],r:s[p]/n[p],g:r[p]/n[p],b:o[p]/n[p]});if(a.length===0)return[{color:Es,weight:1}];a.sort((p,f)=>f.count-p.count);const l=[],c=new Uint8Array(a.length),u=Tc*Tc;for(let p=0;p<a.length;p++){if(c[p])continue;const f=a[p],_={count:f.count,sumR:f.r*f.count,sumG:f.g*f.count,sumB:f.b*f.count};c[p]=1;for(let g=p+1;g<a.length;g++){if(c[g])continue;const m=a[g],M=m.r-f.r,v=m.g-f.g,E=m.b-f.b;M*M+v*v+E*E>u||(c[g]=1,_.count+=m.count,_.sumR+=m.r*m.count,_.sumG+=m.g*m.count,_.sumB+=m.b*m.count)}l.push(_)}l.sort((p,f)=>f.count-p.count);const h=l.slice(0,Math.max(1,t)),d=h.reduce((p,f)=>p+f.count,0);return h.map(p=>{const f=Math.round(p.sumR/p.count),_=Math.round(p.sumG/p.count),g=Math.round(p.sumB/p.count);return{color:f<<16|_<<8|g,weight:p.count/d}})}async function Z_(i,t,e){try{const{pixels:n}=await Vu(i,j_);return e(n)}catch{return t}}function ol(i,t=xs){return Z_(i,Na,e=>K_(e,t))}const Kt={MICROBOT:0,NANOBOT:1,UNION:2,REPAIR:3,TRANSFORM:4,MATERIAL:5},J_=6,xn=[{type:Kt.MICROBOT,key:"microbot",name:"Microbot",role:"Estructura principal",fn:"Construye el exoesqueleto y la base geométrica",relativeSize:2.2,acceptsObjectMaterial:!1,implemented:!0},{type:Kt.NANOBOT,key:"nanobot",name:"Nanobot",role:"Detalle y precisión",fn:"Rellena superficies y sube la resolución de la figura",relativeSize:1,acceptsObjectMaterial:!0,implemented:!0},{type:Kt.UNION,key:"union",name:"Union Bot",role:"Conexión estructural",fn:"Une nodos del exoesqueleto y sostiene la estructura",relativeSize:2.6,acceptsObjectMaterial:!0,implemented:!0,note:"Sólo en formas con exoesqueleto de vigas (cubo, carro…). Las formas humanoides usan hueso macizo, sin vigas."},{type:Kt.REPAIR,key:"repair",name:"Repair Bot",role:"Mantenimiento",fn:"Detecta huecos en la figura y los rellena",relativeSize:1.8,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"La detección de huecos ya existe (cobertura por vóxeles); falta el despacho de agentes que los rellene."},{type:Kt.TRANSFORM,key:"transform",name:"Transform Bot",role:"Reconfiguración",fn:"Coordina el cambio de una forma a otra",relativeSize:3,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"El morph directo entre figuras ya funciona, pero lo ejecuta el enjambre entero, no agentes de este tipo."},{type:Kt.MATERIAL,key:"material",name:"Material Bot",role:"Material y recubrimiento",fn:"Aplica el color y el material del objeto sobre las demás capas",relativeSize:1.4,acceptsObjectMaterial:!0,implemented:!0}];function Gu(i){return xn[i]??xn[Kt.NANOBOT]}const wc={[Kt.MICROBOT]:{identityColor:3108816,identityEmissive:861520,emissiveIntensity:.35},[Kt.NANOBOT]:{identityColor:1871706,identityEmissive:670244,emissiveIntensity:.35},[Kt.UNION]:{identityColor:14263322,identityEmissive:4862981,emissiveIntensity:.4},[Kt.REPAIR]:{identityColor:13120559,identityEmissive:4526094,emissiveIntensity:.4},[Kt.TRANSFORM]:{identityColor:9127620,identityEmissive:3019332,emissiveIntensity:.4},[Kt.MATERIAL]:{identityColor:2078896,identityEmissive:671034,emissiveIntensity:.4}};function pn(i){return wc[i]??wc[Kt.NANOBOT]}const pe={FAR:0,MID:1,NEAR:2};function Ro(i,t,e){if(e===pe.FAR)return new Rr(i,6,4);if(e===pe.MID)return new Rr(i,8,6);const n=new ti(i,i,t,6,1,!1);n.rotateX(Math.PI/2);const s=new ti(i*1.12,i*1.12,t*.45,6,1,!1);return s.rotateX(Math.PI/2),Q_([n,s])}function Q_(i){const t=i.map(a=>{const l=a.index?a.toNonIndexed():a;return l!==a&&a.dispose(),l});let e=0;for(const a of t)e+=a.getAttribute("position").count;const n=new Float32Array(e*3),s=new Float32Array(e*3);let r=0;for(const a of t){const l=a.getAttribute("position"),c=a.getAttribute("normal");n.set(l.array,r*3),s.set(c.array,r*3),r+=l.count,a.dispose()}const o=new Fe;return o.setAttribute("position",new Ke(n,3)),o.setAttribute("normal",new Ke(s,3)),o}function Dr(i,t){const e=[Ro(i,t,pe.FAR),Ro(i,t,pe.MID),Ro(i,t,pe.NEAR)];return{byLevel:e,dispose(){for(const n of e)n.dispose()}}}const Cc=Symbol("instanceColorPatched"),fs=["#include <color_fragment>","#include <emissivemap_fragment>"],nr="#include <begin_vertex>",Yi="vTint";function tv(i){if(!i.includes(nr))throw new Error(`instance-color: el vertex de three no tiene "${nr}" (¿cambió de versión?)`);return`varying vec3 ${Yi};
`+i.replace(nr,[nr,`	${Yi} = vec3( 1.0 );`,"#ifdef USE_INSTANCING_COLOR",`	${Yi} = instanceColor;`,"#endif"].join(`
`))}function ev(i){for(const t of fs)if(!i.includes(t))throw new Error(`instance-color: el shader de three no tiene "${t}" (¿cambió de versión?)`);return`varying vec3 ${Yi};
`+i.replace(fs[0],`${fs[0]}
	diffuseColor.rgb *= ${Yi};`).replace(fs[1],`${fs[1]}
	totalEmissiveRadiance *= ${Yi};`)}function nv(i){const t=i;if(t[Cc])return;t[Cc]=!0;const e=i.onBeforeCompile.bind(i);i.onBeforeCompile=(n,s)=>{e(n,s),n.vertexShader=tv(n.vertexShader),n.fragmentShader=ev(n.fragmentShader)},i.customProgramCacheKey=()=>"instanceColor"}function iv(i){const t=new Float32Array(i*3).fill(1),e=new La(t,3);return e.setUsage(td),e}const sv=80,rv=4096,ov=.6*.6,av=1.2*1.2,Wu=pn(Kt.NANOBOT).identityColor,Xu=8257459,lv=5592405,cv=2763306,ir=[Dr(.55,.42),Dr(.6,.46)];function Rc(i){return i===ye.DETAIL?new Jn({color:Wu,emissive:Xu,emissiveIntensity:.9,roughness:.35,metalness:.1}):new Jn({color:Es,emissive:Es,emissiveIntensity:.85,roughness:.35,metalness:.1})}function uv(i){const t=new In;let e=pe.MID;const n=D=>ir[D].byLevel[e],s=ir.map((D,P)=>Rc(P)),r=[s[ye.COLOR]];for(let D=1;D<xs;D++)r.push(Rc(ye.COLOR));for(const D of r)nv(D);let o=0,a=[],l=[],c=[],u=[],h=[],d=null,p=[],f=new Uint8Array(0);function _(D,P,F){const O=new Tr(D,P,F);return O.frustumCulled=!1,O.count=0,O.castShadow=!1,O.receiveShadow=!0,t.add(O),O}function g(D){if(o>0&&D<=o)return;let P=Math.max(o,rv);for(;P<D;)P*=2;o=Math.min(P,i);for(const F of a)t.remove(F),F.dispose();for(let F=1;F<l.length;F++)t.remove(l[F]),l[F].dispose();a=ir.map((F,O)=>_(n(O),s[O],o)),l=[a[ye.COLOR]];for(let F=1;F<xs;F++)l.push(_(n(ye.COLOR),r[F],o));for(const F of l)F.instanceColor=iv(o);c=a.map(F=>F.instanceMatrix.array),u=l.map(F=>F.instanceMatrix.array),h=l.map(F=>F.instanceColor.array),f=new Uint8Array(o)}const m=new Array(ir.length).fill(0),M=new Array(xs).fill(0);function v(D){g(D);const P=Math.ceil(D/a.length);a.forEach((F,O)=>{const st=O*P,rt=Math.min(D,st+P);F.count=Math.max(0,rt-st)});for(let F=1;F<l.length;F++)l[F].count=0;f.fill(0)}function E(D,P,F,O,st,rt){D[P+0]=rt,D[P+1]=0,D[P+2]=0,D[P+3]=0,D[P+4]=0,D[P+5]=rt,D[P+6]=0,D[P+7]=0,D[P+8]=0,D[P+9]=0,D[P+10]=rt,D[P+11]=0,D[P+12]=F,D[P+13]=O,D[P+14]=st,D[P+15]=1}function w(D,P,F,O,st,rt,dt){if(!t.visible)return;const vt=Math.min(1,Math.cbrt(sv/P));m.fill(0),M.fill(0);for(let lt=0;lt<P;lt++){const W=F[lt];if(!st[W])continue;let Q,ht;if(W===ye.COLOR){const Tt=rt[lt];if(Tt>=dt)continue;const ct=Math.min(Tt,l.length-1);if(Q=u[ct],ht=M[ct]++,d){const C=h[ct];C[ht*3+0]=d[lt*3+0]/255,C[ht*3+1]=d[lt*3+1]/255,C[ht*3+2]=d[lt*3+2]/255}}else Q=c[W],ht=m[W]++;const ut=D[lt*3+0],Mt=D[lt*3+1],Et=D[lt*3+2],Lt=O[lt*3+0],kt=O[lt*3+1],Bt=O[lt*3+2],L=Lt!==0||kt!==0||Bt!==0;if(!L)f[lt]=0;else{const Tt=ut-Lt,ct=Mt-kt,C=Et-Bt,S=Tt*Tt+ct*ct+C*C;f[lt]?S>av&&(f[lt]=0):S<ov&&(f[lt]=1)}const qt=L&&f[lt]===1,It=qt?Lt:ut,Ot=qt?kt:Mt,ot=qt?Bt:Et;E(Q,ht*16,It,Ot,ot,vt)}for(let lt=0;lt<a.length;lt++){if(lt===ye.COLOR)continue;const W=a[lt];W.count=m[lt],W.instanceMatrix.clearUpdateRanges(),W.instanceMatrix.addUpdateRange(0,W.count*16),W.instanceMatrix.needsUpdate=!0}for(let lt=0;lt<l.length;lt++){const W=l[lt];W.count=M[lt],W.instanceMatrix.clearUpdateRanges(),W.instanceMatrix.addUpdateRange(0,W.count*16),W.instanceMatrix.needsUpdate=!0,d&&W.instanceColor&&(W.instanceColor.clearUpdateRanges(),W.instanceColor.addUpdateRange(0,W.count*3),W.instanceColor.needsUpdate=!0)}}function T(D){t.visible=D}function b(){l.forEach((D,P)=>{const F=D.material,O=d?16777215:R(P)??Es;F.color.setHex(O),F.emissive.setHex(O)})}function R(D){var P;return(P=p[D])==null?void 0:P.color}function N(D){p=D,b()}function x(D){if(d=D,b(),!D){for(const P of h)P.fill(1);for(const P of l)P.instanceColor&&(P.instanceColor.needsUpdate=!0)}}const y=[{role:ye.DETAIL,color:Wu,emissive:Xu}];function z(D){for(const{role:P,color:F,emissive:O}of y){const st=a[P].material;st.color.setHex(D?lv:F),st.emissive.setHex(D?cv:O)}}function I(D,P){const F=a[ye.DETAIL];F.visible=D.visible,F.position.y=D.offsetY;for(const O of l)O.visible=P.visible,O.position.y=P.offsetY;a[ye.COLOR].visible=P.visible,a[ye.COLOR].position.y=P.offsetY}function G(D){if(D!==e){e=D;for(let P=0;P<a.length;P++)a[P].geometry=n(P);for(let P=1;P<l.length;P++)l[P].geometry=n(ye.COLOR)}}return v(0),{group:t,setCount:v,updateFromPositions:w,setVisible:T,setColorClusters:N,setPointColors:x,setSkeletonGrayscale:z,setLodLevel:G,setLayerDisplay:I}}const Pc=.07,Lc=.03,hv=pn(Kt.MICROBOT).identityColor,dv=pn(Kt.MICROBOT).identityEmissive,fv=pn(Kt.UNION).identityColor,pv=pn(Kt.UNION).identityEmissive;function mv(i){const t=new In,e=Dr(Pc,Pc*.8).byLevel[pe.MID],n=new ti(Lc,Lc,1,5),s=new Jn({color:hv,emissive:dv,emissiveIntensity:.3,roughness:.55,metalness:.05}),r=new Jn({color:fv,emissive:pv,emissiveIntensity:.25,roughness:.6,metalness:.05}),o=new Tr(e,s,i),a=new Tr(n,r,i);o.frustumCulled=!1,a.frustumCulled=!1,o.count=0,a.count=0,t.add(o,a);const l=new U,c=new U,u=new U,h=new U,d=new se;function p(M){o.count=0,a.count=0}function f(M,v,E,w,T,b){M[v+0]=b,M[v+1]=0,M[v+2]=0,M[v+3]=0,M[v+4]=0,M[v+5]=b,M[v+6]=0,M[v+7]=0,M[v+8]=0,M[v+9]=0,M[v+10]=b,M[v+11]=0,M[v+12]=E,M[v+13]=w,M[v+14]=T,M[v+15]=1}function _(M,v,E,w){const T=o.instanceMatrix.array,b=a.instanceMatrix.array;let R=0,N=0;for(let x=0;x<v;x++){const y=M[x*3+0],z=M[x*3+1],I=M[x*3+2];if(!E[x]){f(T,R*16,y,z,I,1),R++;continue}const G=w[x*6+0],D=w[x*6+1],P=w[x*6+2],F=w[x*6+3],O=w[x*6+4],st=w[x*6+5];l.set(F-G,O-D,st-P);const rt=Math.max(l.length(),.001);l.multiplyScalar(1/rt),h.set(Math.abs(l.y)>.99?1:0,Math.abs(l.y)>.99?0:1,0),c.crossVectors(h,l).normalize(),u.crossVectors(l,c),d.makeBasis(c,l.multiplyScalar(rt),u),d.setPosition(G+(F-G)*.5,D+(O-D)*.5,P+(st-P)*.5),d.toArray(b,N*16),N++}o.count=R,a.count=N,o.instanceMatrix.clearUpdateRanges(),o.instanceMatrix.addUpdateRange(0,R*16),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.clearUpdateRanges(),a.instanceMatrix.addUpdateRange(0,N*16),a.instanceMatrix.needsUpdate=!0}function g(M){t.visible=M}function m(M,v){o.visible=M.visible,o.position.y=M.offsetY,a.visible=v.visible,a.position.y=v.offsetY}return{group:t,setCount:p,setVisible:g,updateFromPositions:_,setLayerDisplay:m}}var gv=(()=>{var i=import.meta.url;return function(t){t=t||{};var e=typeof t<"u"?t:{},n,s;e.ready=new Promise(function(Y,q){n=Y,s=q});var r=Object.assign({},e),o=!0,a="";function l(Y){return e.locateFile?e.locateFile(Y,a):a+Y}var c;typeof document<"u"&&document.currentScript&&(a=document.currentScript.src),i&&(a=i),a.indexOf("blob:")!==0?a=a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):a="",e.print||console.log.bind(console);var u=e.printErr||console.warn.bind(console);Object.assign(e,r),r=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;var h;e.wasmBinary&&(h=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&Q("no native wasm support detected");var d,p=!1;function f(Y){var q=e["_"+Y];return q}function _(Y,q,tt,Ct,it){var ft={string:function(j){var nt=0;if(j!=null&&j!==0){var yt=(j.length<<2)+1;nt=Z(yt),w(j,nt,yt)}return nt},array:function(j){var nt=Z(j.length);return T(j,nt),nt}};function gt(j){return q==="string"?v(j):q==="boolean"?!!j:j}var mt=f(Y),_t=[],zt=0;if(Ct)for(var Ft=0;Ft<Ct.length;Ft++){var Zt=ft[tt[Ft]];Zt?(zt===0&&(zt=S()),_t[Ft]=Zt(Ct[Ft])):_t[Ft]=Ct[Ft]}var H=mt.apply(null,_t);function St(j){return zt!==0&&X(zt),gt(j)}return H=St(H),H}function g(Y,q,tt,Ct){tt=tt||[];var it=tt.every(function(gt){return gt==="number"}),ft=q!=="string";return ft&&it&&!Ct?f(Y):function(){return _(Y,q,tt,arguments)}}var m=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function M(Y,q,tt){for(var Ct=q+tt,it=q;Y[it]&&!(it>=Ct);)++it;if(it-q>16&&Y.subarray&&m)return m.decode(Y.subarray(q,it));for(var ft="";q<it;){var gt=Y[q++];if(!(gt&128)){ft+=String.fromCharCode(gt);continue}var mt=Y[q++]&63;if((gt&224)==192){ft+=String.fromCharCode((gt&31)<<6|mt);continue}var _t=Y[q++]&63;if((gt&240)==224?gt=(gt&15)<<12|mt<<6|_t:gt=(gt&7)<<18|mt<<12|_t<<6|Y[q++]&63,gt<65536)ft+=String.fromCharCode(gt);else{var zt=gt-65536;ft+=String.fromCharCode(55296|zt>>10,56320|zt&1023)}}return ft}function v(Y,q){return Y?M(N,Y,q):""}function E(Y,q,tt,Ct){if(!(Ct>0))return 0;for(var it=tt,ft=tt+Ct-1,gt=0;gt<Y.length;++gt){var mt=Y.charCodeAt(gt);if(mt>=55296&&mt<=57343){var _t=Y.charCodeAt(++gt);mt=65536+((mt&1023)<<10)|_t&1023}if(mt<=127){if(tt>=ft)break;q[tt++]=mt}else if(mt<=2047){if(tt+1>=ft)break;q[tt++]=192|mt>>6,q[tt++]=128|mt&63}else if(mt<=65535){if(tt+2>=ft)break;q[tt++]=224|mt>>12,q[tt++]=128|mt>>6&63,q[tt++]=128|mt&63}else{if(tt+3>=ft)break;q[tt++]=240|mt>>18,q[tt++]=128|mt>>12&63,q[tt++]=128|mt>>6&63,q[tt++]=128|mt&63}}return q[tt]=0,tt-it}function w(Y,q,tt){return E(Y,N,q,tt)}function T(Y,q){R.set(Y,q)}var b,R,N;function x(Y){b=Y,e.HEAP8=R=new Int8Array(Y),e.HEAP16=new Int16Array(Y),e.HEAP32=new Int32Array(Y),e.HEAPU8=N=new Uint8Array(Y),e.HEAPU16=new Uint16Array(Y),e.HEAPU32=new Uint32Array(Y),e.HEAPF32=new Float32Array(Y),e.HEAPF64=new Float64Array(Y)}e.INITIAL_MEMORY;var y,z=[],I=[],G=[];function D(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)O(e.preRun.shift());Bt(z)}function P(){Bt(I)}function F(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)rt(e.postRun.shift());Bt(G)}function O(Y){z.unshift(Y)}function st(Y){I.unshift(Y)}function rt(Y){G.unshift(Y)}var dt=0,vt=null;function lt(Y){dt++,e.monitorRunDependencies&&e.monitorRunDependencies(dt)}function W(Y){if(dt--,e.monitorRunDependencies&&e.monitorRunDependencies(dt),dt==0&&vt){var q=vt;vt=null,q()}}e.preloadedImages={},e.preloadedAudios={};function Q(Y){e.onAbort&&e.onAbort(Y),Y="Aborted("+Y+")",u(Y),p=!0,Y+=". Build with -s ASSERTIONS=1 for more info.";var q=new WebAssembly.RuntimeError(Y);throw s(q),q}var ht="data:application/octet-stream;base64,";function ut(Y){return Y.startsWith(ht)}var Mt;e.locateFile?(Mt="boids.wasm",ut(Mt)||(Mt=l(Mt))):Mt=new URL("/Simulador-nanobots/wasm/boids.wasm",import.meta.url).toString();function Et(Y){try{if(Y==Mt&&h)return new Uint8Array(h);if(!c)throw"both async and sync fetching of the wasm failed"}catch(q){Q(q)}}function Lt(){return!h&&o&&typeof fetch=="function"?fetch(Mt,{credentials:"same-origin"}).then(function(Y){if(!Y.ok)throw"failed to load wasm binary file at '"+Mt+"'";return Y.arrayBuffer()}).catch(function(){return Et(Mt)}):Promise.resolve().then(function(){return Et(Mt)})}function kt(){var Y={a:C};function q(gt,mt){var _t=gt.exports;e.asm=_t,d=e.asm.d,x(d.buffer),y=e.asm.q,st(e.asm.e),W()}lt();function tt(gt){q(gt.instance)}function Ct(gt){return Lt().then(function(mt){return WebAssembly.instantiate(mt,Y)}).then(function(mt){return mt}).then(gt,function(mt){u("failed to asynchronously prepare wasm: "+mt),Q(mt)})}function it(){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!ut(Mt)&&typeof fetch=="function"?fetch(Mt,{credentials:"same-origin"}).then(function(gt){var mt=WebAssembly.instantiateStreaming(gt,Y);return mt.then(tt,function(_t){return u("wasm streaming compile failed: "+_t),u("falling back to ArrayBuffer instantiation"),Ct(tt)})}):Ct(tt)}if(e.instantiateWasm)try{var ft=e.instantiateWasm(Y,q);return ft}catch(gt){return u("Module.instantiateWasm callback failed with error: "+gt),!1}return it().catch(s),{}}function Bt(Y){for(;Y.length>0;){var q=Y.shift();if(typeof q=="function"){q(e);continue}var tt=q.func;typeof tt=="number"?q.arg===void 0?qt(tt)():qt(tt)(q.arg):tt(q.arg===void 0?null:q.arg)}}var L=[];function qt(Y){var q=L[Y];return q||(Y>=L.length&&(L.length=Y+1),L[Y]=q=y.get(Y)),q}function It(){Q("")}function Ot(Y,q,tt){N.copyWithin(Y,q,q+tt)}function ot(){return 2147483648}function Tt(Y){try{return d.grow(Y-b.byteLength+65535>>>16),x(d.buffer),1}catch{}}function ct(Y){var q=N.length;Y=Y>>>0;var tt=ot();if(Y>tt)return!1;let Ct=(_t,zt)=>_t+(zt-_t%zt)%zt;for(var it=1;it<=4;it*=2){var ft=q*(1+.2/it);ft=Math.min(ft,Y+100663296);var gt=Math.min(tt,Ct(Math.max(Y,ft),65536)),mt=Tt(gt);if(mt)return!0}return!1}var C={b:It,c:Ot,a:ct};kt(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.e).apply(null,arguments)},e._init=function(){return(e._init=e.asm.f).apply(null,arguments)},e._getPositionsPtr=function(){return(e._getPositionsPtr=e.asm.g).apply(null,arguments)},e._getCount=function(){return(e._getCount=e.asm.h).apply(null,arguments)},e._getTargetPositionsPtr=function(){return(e._getTargetPositionsPtr=e.asm.i).apply(null,arguments)},e._setParams=function(){return(e._setParams=e.asm.j).apply(null,arguments)},e._step=function(){return(e._step=e.asm.k).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.l).apply(null,arguments)},e._free=function(){return(e._free=e.asm.m).apply(null,arguments)};var S=e.stackSave=function(){return(S=e.stackSave=e.asm.n).apply(null,arguments)},X=e.stackRestore=function(){return(X=e.stackRestore=e.asm.o).apply(null,arguments)},Z=e.stackAlloc=function(){return(Z=e.stackAlloc=e.asm.p).apply(null,arguments)};e.ccall=_,e.cwrap=g;var et;vt=function Y(){et||J(),et||(vt=Y)};function J(Y){if(dt>0||(D(),dt>0))return;function q(){et||(et=!0,e.calledRun=!0,!p&&(P(),n(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),F()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),q()},1)):q()}if(e.run=J,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return J(),t.ready}})();class _v{constructor(){ri(this,"module",null);ri(this,"count",0);ri(this,"cachedPtr",-1);ri(this,"cachedView",null);ri(this,"cachedTargetPtr",-1);ri(this,"cachedTargetView",null)}async load(){this.module=await gv()}get mod(){if(!this.module)throw new Error("Swarm.load() debe completarse antes de usar el módulo Wasm");return this.module}init(t){this.count=t,this.cachedView=null,this.cachedTargetView=null,this.mod.ccall("init",null,["number"],[t])}setParams(t){this.mod.ccall("setParams",null,["number","number","number","number","number"],[t.cohesion,t.separation,t.alignment,t.maxSpeed,t.seekWeight])}step(t){this.mod.ccall("step",null,["number"],[t])}getPositions(){const t=this.mod.ccall("getPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedView||t!==this.cachedPtr||this.cachedView.buffer!==e)&&(this.cachedPtr=t,this.cachedView=new Float32Array(e,t,this.count*3)),this.cachedView}getTargetPositions(){const t=this.mod.ccall("getTargetPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedTargetView||t!==this.cachedTargetPtr||this.cachedTargetView.buffer!==e)&&(this.cachedTargetPtr=t,this.cachedTargetView=new Float32Array(e,t,this.count*3)),this.cachedTargetView}setAgentTargets(t){this.getTargetPositions().set(t.subarray(0,this.count*3))}getCount(){return this.count}}const vv=new U(-8,8,-8),Po=260,Lo=1.05,Dc=.11,xv=.9,Mv=3,ps=.85,yv=3.2,Sv=Math.PI*(3-Math.sqrt(5));function Ev(i=vv){const t=new In;t.position.copy(i);const e=pn(Kt.MATERIAL).identityColor,n=Dr(Dc,Dc*.8),s=new Jn({color:e,emissive:e,emissiveIntensity:ps,roughness:.35,metalness:.5}),r=new Tr(n.byLevel[pe.MID],s,Po);r.instanceMatrix.setUsage(Ca),r.castShadow=!0;const o=new Ee;for(let f=0;f<Po;f++){const _=1-f/(Po-1)*2,g=Math.sqrt(Math.max(0,1-_*_)),m=f*Sv;o.position.set(Math.cos(m)*g*Lo,_*Lo,Math.sin(m)*g*Lo),o.lookAt(o.position.clone().multiplyScalar(2)),o.updateMatrix(),r.setMatrixAt(f,o.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),t.add(r);const a=new Fr({color:e,wireframe:!0,transparent:!0,opacity:.22}),l=new ae(new tl(1.9,2),a);t.add(l);const c=new Uu(e,3,14);t.add(c);let u=-1;const h=new Gt(e);function d(f){s.color.copy(f),s.emissive.copy(f),a.color.copy(f),c.color.copy(f)}function p(f){if(l.rotateY(f*.3),l.rotateX(f*.15),r.rotateY(f*.12),u<0)return;u+=f;const _=Math.min(u/xv,1),g=Math.abs(Math.sin(_*Math.PI*Mv))*(1-_);s.emissiveIntensity=ps+(yv-ps)*g,c.intensity=3+5*g,_>=1&&(u=-1,s.emissiveIntensity=ps,c.intensity=3)}return{group:t,position:t.position,update:p,pulseColor(f){h.setHex(f),d(h),u=0},resetColor(){h.setHex(e),d(h),u=-1,s.emissiveIntensity=ps,c.intensity=3}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Sn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Sn.nextNameID=Sn.nextNameID||0,this.$name.id=`lil-gui-name-${++Sn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class bv extends Sn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Oa(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Av={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Oa,toHexString:Oa},bs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Tv={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=bs.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return bs.toHexString(s)}},wv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=bs.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return bs.toHexString(s)}},Cv=[Av,bs,Tv,wv];function Rv(i){return Cv.find(t=>t.match(i))}class Pv extends Sn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Rv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Oa(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Do extends Sn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Lv extends Sn{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,h;const d=5,p=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",_)},f=M=>{if(o){const v=M.clientX-a,E=M.clientY-l;Math.abs(E)>d?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=M.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(M),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,M,v,E,w)=>(m-M)/(v-M)*(w-E)+E,e=m=>{const M=this.$slider.getBoundingClientRect();let v=t(m,M.left,M.right,this._min,this._max);this._snapClampSetValue(v)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const M=m.touches[0].clientX-a,v=m.touches[0].clientY-l;Math.abs(M)>Math.abs(v)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),f=400;let _;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const v=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,f)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Dv extends Sn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Iv extends Sn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Uv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Nv(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ic=!1;class al{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Ic&&a&&(Nv(Uv),Ic=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Dv(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Lv(this,t,e,n,s,r);case"boolean":return new bv(this,t,e);case"string":return new Iv(this,t,e);case"function":return new Do(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Pv(this,t,e,n)}addFolder(t){const e=new al({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Do||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Do)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Ov=.82;function Fv(i,t){const{mask:e,width:n,height:s}=i;let r=0,o=0;for(let a=0;a<s;a++){const l=a*n;for(let c=0;c<n;c++){const u=e[l+c],h=Math.round(2*t-c),d=h>=0&&h<n?e[l+h]:0;(u||d)&&o++,u&&d&&r++}}return o===0?0:r/o}function Bv(i,t=Ov){if(!i.bbox||i.area===0)return{axisX:i.width/2,score:0,symmetric:!1};const{minX:e,maxX:n}=i.bbox,s=(e+n)/2,r=(n-e)/2,o=Math.max(1,r*.25);let a=s,l=0;const c=Math.floor((s-o)*2),u=Math.ceil((s+o)*2);for(let h=c;h<=u;h++){const d=h/2,p=Fv(i,d);p>l&&(l=p,a=d)}return{axisX:a,score:l,symmetric:l>=t}}const mi={OBSERVED:0,INTERPOLATED:1,INFERRED:2};function Fa(){return{points:new Float32Array(0),colors:new Uint8Array(0),origin:new Uint8Array(0),count:0}}function Uc(i){let t=0,e=0,n=0;for(let s=0;s<i.count;s++){const r=i.origin[s];r===mi.OBSERVED?t++:r===mi.INTERPOLATED?e++:n++}return{observed:t,interpolated:e,inferred:n,observedFraction:i.count===0?0:t/i.count}}const tn={EXTRUSION:"EXTRUSION",DEPTH:"DEPTH",DEPTH_SYMMETRY:"DEPTH_SYMMETRY"},zv={EXTRUSION:"Extrusión de silueta",DEPTH:"Profundidad estimada",DEPTH_SYMMETRY:"Profundidad + simetría"},Hv=.5,kv=.35,Vv=25e5,Gv=.9,Wv={cloud:Fa(),mode:tn.DEPTH,symmetry:null,confidence:0,sourceExtent:{width:0,height:0}};function Xv(i,t,e,n,s=1){const r=Math.min(t,e),o=i===tn.EXTRUSION?r*.6:i===tn.DEPTH_SYMMETRY?Math.min(1,r*(1+.25*n)):r,a=.5+.5*Math.min(1,Math.max(0,s)*2);return o*a}function Yv(i,t,e,n=tn.DEPTH,s={}){const r=t.bbox;if(!r||t.area===0)return{...Wv,mode:n};const o=s.half??ni,a=s.voxelRes??48,l=s.maxPoints??Vv,{width:c,height:u}=t;let h=null,d=t.mask,p=e.depth,f=n;if(n===tn.DEPTH_SYMMETRY)if(h=Bv(t),!h.symmetric)f=tn.DEPTH;else{d=new Uint8Array(c*u),p=new Float32Array(c*u);for(let vt=0;vt<u;vt++){const lt=vt*c;for(let W=0;W<c;W++){const Q=Math.round(2*h.axisX-W),ht=Q>=0&&Q<c?lt+Q:-1,ut=t.mask[lt+W],Mt=ht>=0?t.mask[ht]:0;d[lt+W]=ut||Mt?1:0;const Et=ut?e.depth[lt+W]:0,Lt=ht>=0&&Mt?e.depth[ht]:0;p[lt+W]=Math.max(Et,Lt)}}}const _=r.maxX-r.minX+1,g=r.maxY-r.minY+1,m=2*o/Math.max(_,g),M=(r.minX+r.maxX)/2,v=(r.minY+r.maxY)/2,w=(f===tn.EXTRUSION?kv:Hv)*Math.min(_,g)*m,T=2*o/a,b=m,R=T*Gv,N=b/R,x=N>=1?Math.ceil(N):1,y=N>=1?1:Math.max(1,Math.floor(1/N)),z=vt=>{const lt=f===tn.EXTRUSION?w:vt*w;return Math.max(2,Math.ceil(2*lt/T)+1)};let I=0;for(let vt=r.minY;vt<=r.maxY;vt+=y)for(let lt=r.minX;lt<=r.maxX;lt+=y){const W=vt*c+lt;d[W]&&(I+=z(p[W])*x*x)}const G=I>l?Math.max(1,Math.ceil(I/l)):1,D=[],P=[],F=[];for(let vt=r.minY;vt<=r.maxY;vt+=y)for(let lt=r.minX;lt<=r.maxX;lt+=y){const W=vt*c+lt;if(!d[W])continue;const Q=(lt-M)*m,ht=-(vt-v)*m,ut=f===tn.EXTRUSION?w:p[W]*w,Mt=!t.mask[W];let Et=lt;if(Mt&&h){const It=Math.round(2*h.axisX-lt);It>=0&&It<c&&t.mask[vt*c+It]&&(Et=It)}const Lt=W_(Et,vt,c),kt=i.pixels[Lt],Bt=i.pixels[Lt+1],L=i.pixels[Lt+2],qt=Math.max(2,Math.ceil(z(p[W])/G));for(let It=0;It<x;It++)for(let Ot=0;Ot<x;Ot++){const ot=x===1?0:(Ot/x-.5+.5/x)*b,Tt=x===1?0:(It/x-.5+.5/x)*b;for(let ct=0;ct<qt;ct++){const C=qt===1?0:ct/(qt-1);D.push(Q+ot,ht+Tt,-ut+2*ut*C),P.push(kt,Bt,L),F.push(Mt?mi.INFERRED:qt===1||ct===qt-1?mi.OBSERVED:ct===0?mi.INFERRED:mi.INTERPOLATED)}}}const O=D.length/3,st=Uint8Array.from(F);let rt=0;for(let vt=0;vt<O;vt++)st[vt]===mi.OBSERVED&&rt++;const dt=Xv(f,s.segmentationConfidence??1,e.confidence,(h==null?void 0:h.score)??0,O===0?0:rt/O);return{cloud:{points:Float32Array.from(D),colors:Uint8Array.from(P),origin:st,count:O},mode:f,symmetry:h,confidence:dt,sourceExtent:{width:_,height:g}}}const Yu=18,$v=128;function $u(i,t,e){let n=0,s=0,r=t,o=e,a=-1,l=-1;for(let c=0;c<e;c++)for(let u=0;u<t;u++)i[c*t+u]&&(n++,u<r&&(r=u),u>a&&(a=u),c<o&&(o=c),c>l&&(l=c),(u===0||c===0||u===t-1||c===e-1)&&s++);return{area:n,bbox:n>0?{minX:r,minY:o,maxX:a,maxY:l}:null,borderTouch:s}}function qv(i,t,e){if(t<2||e<2)return 0;let n=0,s=0,r=0,o=0,a=0,l=0,c=0;const u=f=>{const _=f*4,g=i[_],m=i[_+1],M=i[_+2];s+=g,r+=m,o+=M,a+=g*g,l+=m*m,c+=M*M,n++};for(let f=0;f<t;f++)u(f),u((e-1)*t+f);for(let f=1;f<e-1;f++)u(f*t),u(f*t+t-1);if(n===0)return 0;const h=Math.max(0,a/n-(s/n)**2),d=Math.max(0,l/n-(r/n)**2),p=Math.max(0,c/n-(o/n)**2);return Math.min(1,Math.sqrt((h+d+p)/3)/255)}function qu(i,t,e,n=Yu){const s=t*e,r=new Uint8Array(s),o=new Uint8Array(s),a=new Int32Array(s);let l=0;const c=f=>{a[l++]=f};for(let f=0;f<t;f++){const _=f,g=(e-1)*t+f;o[_]||(o[_]=1,r[_]=1,c(_)),o[g]||(o[g]=1,r[g]=1,c(g))}for(let f=0;f<e;f++){const _=f*t,g=f*t+t-1;o[_]||(o[_]=1,r[_]=1,c(_)),o[g]||(o[g]=1,r[g]=1,c(g))}const u=n*n;let h=0;for(;h<l;){const f=a[h++],_=f*4,g=i[_],m=i[_+1],M=i[_+2],v=f%t,E=(f-v)/t,w=T=>{if(o[T])return;o[T]=1;const b=T*4,R=i[b]-g,N=i[b+1]-m,x=i[b+2]-M;R*R+N*N+x*x<=u&&(r[T]=1,c(T))};v>0&&w(f-1),v<t-1&&w(f+1),E>0&&w(f-t),E<e-1&&w(f+t)}const d=new Uint8Array(s);for(let f=0;f<s;f++)d[f]=r[f]?0:1;const p=$u(d,t,e);return{mask:d,width:t,height:e,source:"flood",borderSpread:qv(i,t,e),...p}}function jv(i,t,e,n=$v){const s=t*e,r=new Uint8Array(s);for(let a=0;a<s;a++)r[a]=i[a*4+3]>=n?1:0;const o=$u(r,t,e);return{mask:r,width:t,height:e,source:"alpha",borderSpread:0,...o}}function ju(i,t=Yu){return Y_(i)?jv(i.pixels,i.width,i.height):qu(i.pixels,i.width,i.height,t)}const Ku=.65,Zu=.35,Kv=3;function Zv(i,t,e){const n=t*e,s=new Float32Array(n),r=t+e+1;for(let l=0;l<n;l++)s[l]=i[l]?r:0;const o=1,a=Math.SQRT2;for(let l=0;l<e;l++)for(let c=0;c<t;c++){const u=l*t+c;if(!i[u])continue;let h=s[u];c>0&&(h=Math.min(h,s[u-1]+o)),l>0&&(h=Math.min(h,s[u-t]+o)),c>0&&l>0&&(h=Math.min(h,s[u-t-1]+a)),c<t-1&&l>0&&(h=Math.min(h,s[u-t+1]+a)),s[u]=h}for(let l=e-1;l>=0;l--)for(let c=t-1;c>=0;c--){const u=l*t+c;if(!i[u])continue;let h=s[u];c<t-1&&(h=Math.min(h,s[u+1]+o)),l<e-1&&(h=Math.min(h,s[u+t]+o)),c<t-1&&l<e-1&&(h=Math.min(h,s[u+t+1]+a)),c>0&&l<e-1&&(h=Math.min(h,s[u+t-1]+a)),s[u]=h}return s}function Jv(i,t,e,n){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++){const a=o*t;for(let l=0;l<t;l++){let c=0,u=0;const h=Math.max(0,l-n),d=Math.min(t-1,l+n);for(let p=h;p<=d;p++)c+=i[a+p],u++;s[a+l]=c/u}}for(let o=0;o<t;o++)for(let a=0;a<e;a++){let l=0,c=0;const u=Math.max(0,a-n),h=Math.min(e-1,a+n);for(let d=u;d<=h;d++)l+=s[d*t+o],c++;r[a*t+o]=l/c}return r}function Qv(i,t){const s=Math.min(1,i/.12),r=Math.min(1,t*5),o=.18+(.55-.18)*s;return Math.max(.05,o*(1-.5*r))}function tx(i,t,e=Ku,n=Zu){const{width:s,height:r}=t,o=s*r,a=new Float32Array(o);if(t.area===0)return{depth:a,width:s,height:r,maxThickness:0,confidence:0};const l=Zv(t.mask,s,r);let c=0;for(let _=0;_<o;_++)l[_]>c&&(c=l[_]);if(c<=0)return{depth:a,width:s,height:r,maxThickness:0,confidence:.05};const u=new Float32Array(o);for(let _=0;_<o;_++){const g=_*4;u[_]=X_(i.pixels[g],i.pixels[g+1],i.pixels[g+2])/255}const h=Jv(u,s,r,Kv);let d=0;for(let _=0;_<o;_++){if(!t.mask[_])continue;const g=u[_]-h[_];d+=g*g}const p=Math.sqrt(d/t.area),f=p>1e-4?1/(p*3):0;for(let _=0;_<o;_++){if(!t.mask[_])continue;const g=Math.pow(l[_]/c,e),m=Math.max(-1,Math.min(1,(u[_]-h[_])*f)),M=g*(1+n*m);a[_]=Math.max(0,Math.min(1,M))}return{depth:a,width:s,height:r,maxThickness:c,confidence:Qv(p,t.borderSpread)}}const Ju={id:"inflate",name:"Inflado de silueta (local, sin IA)",external:!1,maxConfidence:.55,description:"Infla la silueta por distancia al contorno y corrige con el sombreado de la foto.",async estimate(i,t){return tx(i,t,Ku,Zu)}},ex={id:"flat",name:"Espesor constante (sin estimar)",external:!1,maxConfidence:.3,description:"No estima relieve: da el mismo espesor a todo el objeto.",async estimate(i,t){const e=new Float32Array(t.width*t.height);for(let n=0;n<e.length;n++)e[n]=t.mask[n]?1:0;return{depth:e,width:t.width,height:t.height,maxThickness:t.area>0?1:0,confidence:t.area>0?.3:0}}},Qu=[Ju,ex];let th=Ju;function $i(){return th}function nx(i){const t=Qu.find(e=>e.id===i);return t?(th=t,!0):!1}function ix(){return Qu}const sx=.02,rx=.92;function ox(i){const t=i.width*i.height;if(t===0||i.area===0)return{stage:"Segmentación",value:0,reason:"no se encontró ningún objeto"};const e=i.area/t;if(i.source==="alpha")return{stage:"Segmentación",value:.97,reason:"la imagen trae canal alpha: la máscara es exacta, no estimada"};if(e<sx)return{stage:"Segmentación",value:.15,reason:`el objeto ocupa sólo ${(e*100).toFixed(1)}% del encuadre`};if(e>rx)return{stage:"Segmentación",value:.2,reason:"casi todo el encuadre quedó como objeto: el fondo no se separó"};const n=Math.min(1,i.borderSpread*5);return{stage:"Segmentación",value:.92*(1-.7*n),reason:n>.3?"el borde del encuadre no es un fondo parejo: el objeto puede estar cortado":"fondo separado por continuidad de color"}}function ax(i){return{stage:"Profundidad",value:i,reason:"estimada por inflado de la silueta más la pista de sombreado — no es una medición"}}function lx(i,t){return{stage:"Reconstrucción 3D",value:i,reason:`modo ${t}`}}function cx(i){if(i.length===0)return 0;let t=1;for(const e of i)e.value<t&&(t=e.value);return t}const ux="Una sola imagen no contiene toda la información de profundidad. La geometría 3D es una estimación.",hx=.45;function dx(i){return i<hx?"Reconstrucción aproximada":"Reconstrucción estimada"}const fx={id:"local",name:"Local (sin IA, en el navegador)",external:!1,async segment(i){return ju(i)},async estimateDepth(i,t){return $i().estimate(i,t)}};let px=fx;function Nc(){return px}const Ei=48;function Ie(i,t,e,n){return(e*n+t)*n+i}function On(i,t,e){return((i+.5)/t-.5)*2*e}function en(i,t,e){const n=Math.floor((i/e+1)/2*t);return n<0||n>=t?-1:n}function ll(i=Ei,t=ni){const e=i*i*i;return{res:i,half:t,occupied:new Uint8Array(e),density:new Uint8Array(e)}}function Oc(i,t,e,n=Ei,s=ni){const r=ll(n,s);for(let o=0;o<t;o++){const a=en(i[o*3+0]-e[0],n,s);if(a<0)continue;const l=en(i[o*3+1]-e[1],n,s);if(l<0)continue;const c=en(i[o*3+2]-e[2],n,s);if(c<0)continue;const u=Ie(a,l,c,n);r.occupied[u]=1,r.density[u]<255&&r.density[u]++}return r}function mx(i,t,e,n,s=Ei,r=ni,o=null){const a=s*s*s,l=ll(s,r),c=new Uint8Array(a*3),u=o?new Uint8Array(a).fill(255):null,h=new Float64Array(a),d=new Float64Array(a),p=new Float64Array(a),f=new Uint32Array(a);for(let _=0;_<e;_++){const g=en(i[_*3+0]-n[0],s,r);if(g<0)continue;const m=en(i[_*3+1]-n[1],s,r);if(m<0)continue;const M=en(i[_*3+2]-n[2],s,r);if(M<0)continue;const v=Ie(g,m,M,s);l.occupied[v]=1,l.density[v]<255&&l.density[v]++,h[v]+=t[_*3+0],d[v]+=t[_*3+1],p[v]+=t[_*3+2],f[v]++,u&&o&&o[_]<u[v]&&(u[v]=o[_])}for(let _=0;_<a;_++)f[_]!==0&&(c[_*3+0]=Math.round(h[_]/f[_]),c[_*3+1]=Math.round(d[_]/f[_]),c[_*3+2]=Math.round(p[_]/f[_]));return u?{...l,color:c,origin:u}:{...l,color:c}}function Ir(i,t,e,n,s){return i[Ie(t,e,n,s)]?t===0||t===s-1||e===0||e===s-1||n===0||n===s-1?!0:!i[Ie(t-1,e,n,s)]||!i[Ie(t+1,e,n,s)]||!i[Ie(t,e-1,n,s)]||!i[Ie(t,e+1,n,s)]||!i[Ie(t,e,n-1,s)]||!i[Ie(t,e,n+1,s)]:!1}function gx(i){const{res:t,half:e,occupied:n}=i;let s=0;for(let a=0;a<t;a++)for(let l=0;l<t;l++)for(let c=0;c<t;c++)Ir(n,c,l,a,t)&&s++;const r=new Float32Array(s*3);let o=0;for(let a=0;a<t;a++)for(let l=0;l<t;l++)for(let c=0;c<t;c++)Ir(n,c,l,a,t)&&(r[o++]=On(c,t,e),r[o++]=On(l,t,e),r[o++]=On(a,t,e));return r}function _x(i){const{res:t,half:e,occupied:n,color:s,origin:r}=i;let o=0;for(let h=0;h<t;h++)for(let d=0;d<t;d++)for(let p=0;p<t;p++)Ir(n,p,d,h,t)&&o++;const a=new Float32Array(o*3),l=new Uint8Array(o*3),c=r?new Uint8Array(o):null;s||l.fill(255);let u=0;for(let h=0;h<t;h++)for(let d=0;d<t;d++)for(let p=0;p<t;p++){if(!Ir(n,p,d,h,t))continue;const f=Ie(p,d,h,t);a[u*3+0]=On(p,t,e),a[u*3+1]=On(d,t,e),a[u*3+2]=On(h,t,e),s&&(l[u*3+0]=s[f*3+0],l[u*3+1]=s[f*3+1],l[u*3+2]=s[f*3+2]),c&&r&&(c[u]=r[f]),u++}return{points:a,colors:l,origin:c,count:o}}function vx(i,t){if(i.res!==t.res)throw new Error(`validateCoverage: grillas de distinta resolución (${i.res} vs ${t.res})`);const e=[];let n=0,s=0;for(let r=0;r<i.occupied.length;r++)i.occupied[r]&&(n++,t.occupied[r]?s++:e.push(r));return{target:n,covered:s,coverage:n===0?1:s/n,missing:Int32Array.from(e)}}const xx=8;function eh(i){const{res:t,occupied:e}=i,n=t*t*t,s=new Uint8Array(n),r=new Int32Array(n),o=[];let a=0;for(let c=0;c<n;c++)e[c]&&a++;if(a===0)return{count:0,largest:0,occupied:0,cohesion:1,sizes:[]};for(let c=0;c<n;c++){if(!e[c]||s[c])continue;let u=0;r[u++]=c,s[c]=1;let h=0;for(;u>0;){const d=r[--u];h++;const p=d%t,f=(d-p)/t,_=f%t,g=(f-_)/t,m=(M,v,E)=>{if(M<0||v<0||E<0||M>=t||v>=t||E>=t)return;const w=Ie(M,v,E,t);s[w]||!e[w]||(s[w]=1,r[u++]=w)};m(p-1,_,g),m(p+1,_,g),m(p,_-1,g),m(p,_+1,g),m(p,_,g-1),m(p,_,g+1)}o.push(h)}o.sort((c,u)=>u-c);const l=o[0];return{count:o.length,largest:l,occupied:a,cohesion:l/a,sizes:o.slice(0,xx)}}const Mx=[48,64,96,128],yx={48:"Baja",64:"Media",96:"Alta",128:"Extrema"};function mn(){return typeof performance<"u"?performance.now():Date.now()}async function Fc(i,t={}){const e=t.mode??tn.DEPTH,n=t.voxelRes??64,s={};let r=mn();const o=ju(i);s.segmentacion=mn()-r;const a=ox(o);r=mn();const l=await $i().estimate(i,o);s.profundidad=mn()-r,r=mn();const c=Yv(i,o,l,e,{voxelRes:n,maxPoints:t.maxPoints,segmentationConfidence:a.value});s.reconstruccion=mn()-r;const u=[a,ax(l.confidence),lx(c.confidence,c.mode)];if(c.cloud.count===0)return{mask:o,depth:l,cloud:Fa(),stages:u,confidence:0,mode:c.mode,depthProviderId:$i().id,visionProviderId:Nc().id,stats:{cloudPoints:0,voxels:0,surfaceVoxels:0,voxelRes:n,components:0,cohesion:1,origins:Uc(Fa()),timings:s}};r=mn();const h=mx(c.cloud.points,c.cloud.colors,c.cloud.count,[0,0,0],n,void 0,c.cloud.origin);s.voxelizacion=mn()-r,r=mn();const d=_x(h),p=eh(h);s.validacion=mn()-r;let f=0;for(let g=0;g<h.occupied.length;g++)h.occupied[g]&&f++;const _={points:d.points,colors:d.colors,origin:d.origin??new Uint8Array(d.count).fill(2),count:d.count};return{mask:o,depth:l,cloud:_,stages:u,confidence:cx(u),mode:c.mode,depthProviderId:$i().id,visionProviderId:Nc().id,stats:{cloudPoints:c.cloud.count,voxels:f,surfaceVoxels:d.count,voxelRes:n,components:p.count,cohesion:p.cohesion,origins:Uc(_),timings:s}}}function Sx(i,t,e){return{source:{fileName:t,width:e.width,height:e.height,mode:i.mode,visionProvider:i.visionProviderId,depthProvider:i.depthProviderId},cloud:i.cloud,stages:i.stages,confidence:i.confidence,stats:i.stats}}let je=null,_r=!1,Ex=1,vr="inline";function bx(){return vr}function Ax(){if(_r)return null;if(je)return je;try{return je=new Worker(new URL("/Simulador-nanobots/assets/pipeline.worker-0mBm9kOk.js",import.meta.url),{type:"module"}),je.onerror=()=>{_r=!0,je==null||je.terminate(),je=null},je}catch{return _r=!0,null}}const Tx=2e4;async function wx(i,t){const e=Ax();if(!e)return vr="inline",Fc(i,t);const n=Ex++;try{const s=await new Promise((r,o)=>{const a=setTimeout(()=>{u(),o(new Error("el Worker no respondió a tiempo"))},Tx),l=d=>{d.data.id===n&&(u(),d.data.ok?r(d.data.core):o(new Error(d.data.error)))},c=()=>{u(),o(new Error("el Worker falló"))};function u(){clearTimeout(a),e.removeEventListener("message",l),e.removeEventListener("error",c)}e.addEventListener("message",l),e.addEventListener("error",c);const h={id:n,pixels:new Uint8ClampedArray(i.pixels),width:i.width,height:i.height,options:t,depthProviderId:$i().id};e.postMessage(h,[h.pixels.buffer])});return vr="worker",s}catch{return _r=!0,je==null||je.terminate(),je=null,vr="inline",Fc(i,t)}}const Bc=6e4,zc={imagen:"Imagen",mascara:"Máscara",profundidad:"Profundidad",procedencia:"Vista / inferida"},Io=240;function Cx(i){return i<1024?`${i} B`:i<1024*1024?`${(i/1024).toFixed(0)} KB`:`${(i/(1024*1024)).toFixed(1)} MB`}function sr(i){return`${Math.round(i*100)}%`}function Rx(i,t){const e=i.addFolder("Imagen → 3D");let n=null,s=null,r=null,o=null,a="imagen",l=!1;const c={modo:tn.DEPTH,resolucion:64,profundidad:$i().id},u=document.createElement("div");u.style.cssText="font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;",u.textContent=ux,e.domElement.appendChild(u);const h=document.createElement("canvas");h.width=Io,h.height=1,h.style.cssText=`display:block;width:${Io}px;margin:0 6px 4px;background:#05080c;border:1px solid #1d2a33;`,e.domElement.appendChild(h);const d=document.createElement("div");d.style.cssText="font-size:10px;color:#8fa3ad;padding:0 6px 4px;line-height:1.5;white-space:pre;",e.domElement.appendChild(d);const p=document.createElement("div");p.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";const f=document.createElement("div");f.style.cssText="font-size:10px;color:#9fb3bd;padding:2px 6px 6px;line-height:1.6;white-space:pre;";function _(){var z;const b=h.getContext("2d");if(!b||!s)return;const R=Io/s.width,N=Math.max(1,Math.round(s.height*R));h.height=N,h.style.height=`${N}px`;const x=b.createImageData(s.width,s.height);for(let I=0;I<s.width*s.height;I++){let G=0,D=0,P=0;if(a==="imagen"||!r)G=s.pixels[I*4],D=s.pixels[I*4+1],P=s.pixels[I*4+2];else if(a==="mascara"){const F=r.mask.mask[I]===1;G=F?60:8,D=F?220:12,P=F?180:18}else if(a==="profundidad"){const F=r.depth.depth[I];G=D=P=Math.round(F*255),r.mask.mask[I]||(G=8,D=12,P=18)}else{const F=r.mask.mask[I]===1;G=F?70:8,D=F?200:12,P=F?90:18}x.data[I*4]=G,x.data[I*4+1]=D,x.data[I*4+2]=P,x.data[I*4+3]=255}const y=document.createElement("canvas");y.width=s.width,y.height=s.height,(z=y.getContext("2d"))==null||z.putImageData(x,0,0),b.clearRect(0,0,h.width,h.height),b.imageSmoothingEnabled=!1,b.drawImage(y,0,0,h.width,h.height)}function g(){if(!n||!s){d.textContent="Sin imagen.";return}const b=n.type||"desconocido";d.textContent=`${n.name}
${Cx(n.size)} · ${b}
procesada a ${s.width}×${s.height}`}function m(){if(!o||!r){f.textContent="";return}const b=o.stats,R=b.origins,N=b.surfaceVoxels,x=t.readNanobotCount(),y=[];y.push(`${dx(o.confidence)} — confianza ${sr(o.confidence)}`);for(const I of o.stages)y.push(`  ${I.stage}: ${sr(I.value)} (${I.reason})`);y.push(""),y.push(`geometría vista: ${sr(R.observedFraction)} de la cáscara`),y.push(`  observada ${R.observed} · interpolada ${R.interpolated} · inferida ${R.inferred}`),y.push(""),y.push(`vóxeles: ${b.voxels} (${b.surfaceVoxels} de superficie, res ${b.voxelRes}³)`),y.push(`piezas: ${b.components}${b.components>1?` (cohesión ${sr(b.cohesion)})`:""}`),N>Bc?y.push(`⚠ la cáscara pide ${N} agentes y el techo son ${Bc}`):N>x&&y.push(`⚠ hacen falta ~${N} nanobots y hay ${x}: subí la cantidad`);const z=Object.entries(b.timings).map(([I,G])=>`${I} ${G.toFixed(0)}ms`).join(" · ");y.push(""),y.push(`${bx()==="worker"?"en Worker":"en línea (sin Worker)"} — ${z}`),f.textContent=y.join(`
`)}const M=document.createElement("input");M.type="file",M.accept="image/png,image/jpeg,image/webp,image/*",M.style.display="none",M.dataset.imageSlot="single",document.body.appendChild(M);async function v(b){if(!b.type.startsWith("image/")){p.textContent="Ese archivo no es una imagen.";return}n=b,r=null,o=null,a="imagen",p.textContent="Leyendo imagen...";try{s=await $_(b)}catch(R){s=null,p.textContent=R instanceof Error?R.message:"No se pudo leer la imagen.";return}g(),_(),m(),p.textContent="Lista. Elegí modo y resolución, y reconstruí."}M.addEventListener("change",()=>{var R;const b=(R=M.files)==null?void 0:R[0];b&&v(b)});const E=e.domElement;E.addEventListener("dragover",b=>{b.preventDefault(),E.style.outline="1px dashed #4be3ff"}),E.addEventListener("dragleave",()=>{E.style.outline=""}),E.addEventListener("drop",b=>{var N,x;b.preventDefault(),E.style.outline="";const R=(x=(N=b.dataTransfer)==null?void 0:N.files)==null?void 0:x[0];R&&v(R)}),window.addEventListener("paste",b=>{var N,x;const R=(x=(N=b.clipboardData)==null?void 0:N.files)==null?void 0:x[0];R&&R.type.startsWith("image/")&&v(R)}),e.add({fn:()=>M.click()},"fn").name("Subir imagen"),e.add(c,"modo",Object.fromEntries(Object.values(tn).map(b=>[zv[b],b]))).name("Modo"),e.add(c,"resolucion",Object.fromEntries(Mx.map(b=>[`${yx[b]} (${b}³)`,b]))).name("Resolución"),e.add(c,"profundidad",Object.fromEntries(ix().map(b=>[b.name,b.id]))).name("Profundidad").onChange(b=>nx(b));const w=e.add({etapa:a},"etapa",Object.fromEntries(Object.keys(zc).map(b=>[zc[b],b]))).name("Ver").onChange(b=>{a=b,_()}),T={reconstruir:async()=>{if(!l){if(!n||!s){p.textContent="Subí una imagen primero.";return}l=!0,p.textContent="Reconstruyendo...";try{if(r=await wx(s,{mode:c.modo,voxelRes:c.resolucion}),o=Sx(r,n.name,s),r.cloud.count===0){p.textContent="No se pudo separar ningún objeto — probá con un fondo más liso.",m();return}a="mascara",w.setValue("mascara"),_(),m(),p.textContent=`Listo: ${r.stats.surfaceVoxels} vóxeles de superficie.`}catch(b){p.textContent=b instanceof Error?b.message:"Falló la reconstrucción."}finally{l=!1}}},construir:async()=>{if(!l){if(!r||!n||r.cloud.count===0){p.textContent="Reconstruí primero.";return}l=!0;try{const b=rl(r.cloud.points,r.cloud.colors),R=await ol(n);p.textContent="Construyendo con el enjambre...",t.onFormShape(b,R)}finally{l=!1}}}};e.add(T,"reconstruir").name("Reconstruir"),e.add(T,"construir").name("Construir con nanobots"),e.domElement.appendChild(p),e.domElement.appendChild(f),g()}const Px=128;function Lx(i,t){const{mask:e}=qu(i,t,t);return{mask:e,size:t}}async function Dx(i,t){const{pixels:e}=await Vu(i,t);return e}async function rr(i,t=Px){const e=await Dx(i,t);return Lx(e,t)}function or(i,t,e,n){return e<0||e>=t||n<0||n>=t?!1:i[n*t+e]===1}function ar(i,t,e,n){const s=Math.floor((i/e+1)/2*n),r=Math.floor((-t/e+1)/2*n);return[s,r]}function Ix(i,t,e,n,s=Ei){const r=ni,o=ll(s,r);for(let a=0;a<s;a++){const l=On(a,s,r);for(let c=0;c<s;c++){const u=On(c,s,r);for(let h=0;h<s;h++){const d=On(h,s,r),[p,f]=ar(d,u,r,i.size);if(!or(i.mask,i.size,p,f))continue;const[_,g]=ar(-d,u,r,t.size);if(!or(t.mask,t.size,_,g))continue;const[m,M]=ar(l,u,r,e.size);if(!or(e.mask,e.size,m,M))continue;const[v,E]=ar(-l,u,r,n.size);or(n.mask,n.size,v,E)&&(o.occupied[Ie(h,c,a,s)]=1)}}}return o}function Ux(i,t,e,n,s=Ei){return gx(Ix(i,t,e,n,s))}async function Nx(i,t=Ei){const[e,n,s,r]=await Promise.all([rr(i.front),rr(i.back),rr(i.left),rr(i.right)]);return Ux(e,n,s,r,t)}const Ne={CORE:0,TRAVELING:1,ASSEMBLING:2,ATTACHED:3,RETURNING:4,IDLE:5},Hc=["núcleo","viajando","ensamblando","asentado","volviendo","reposo","reparando","error"],ms=new Uint8Array(0),Uo=new Float32Array(0);function Ox(){let i=0,t=ms,e=ms,n=ms,s=Uo,r=Uo,o=new Uint8Array(0),a=new Uint8Array(0),l=0;const c={get index(){return l},get role(){return t[l]??0},get colorWave(){return e[l]??0},get layer(){return n[l]??0},get state(){return o[l]??Ne.IDLE},get botType(){return a[l]??Kt.NANOBOT},get delayFraction(){return s[l]??0},get targetX(){return r[l*3+0]??0},get targetY(){return r[l*3+1]??0},get targetZ(){return r[l*3+2]??0}};function u(d){o.length>=d||(o=new Uint8Array(d))}function h(d){a.length>=d||(a=new Uint8Array(d))}return{get count(){return i},get role(){return t},get colorWave(){return e},get layer(){return n},get delayFraction(){return s},get target(){return r},get state(){return o},get botType(){return a},adoptFormation(d){i=d.count,t=d.role,e=d.colorWave,n=d.layer,s=d.delayFraction,r=d.target,u(i),o.fill(Ne.CORE,0,i),h(i),a.fill(Kt.NANOBOT,0,i)},reset(d,p,f){i=d,t=p,e=ms,n=ms,s=Uo,r=f,u(i),o.fill(Ne.IDLE,0,i),h(i),a.fill(Kt.NANOBOT,0,i)},fillState(d){u(i),o.fill(d,0,i)},assignTypesFromRoles(d){h(i);for(let p=0;p<i;p++)a[p]=t[p]===d?Kt.MATERIAL:Kt.NANOBOT},countByType(d){d.fill(0);for(let p=0;p<i;p++)d[a[p]]++;return d},countByState(d){d.fill(0);for(let p=0;p<i;p++)d[o[p]]++;return d},at(d){return l=d,c}}}function Fx(i,t){const e=new al({title:"Parámetros del enjambre"});e.addFolder("Microbots (exoesqueleto)").add(i,"microbotCount",0,6e4,100).name("Cantidad").onFinishChange(r=>t.onMicrobotCountChange(r)),e.add(i,"count",20,6e4,1).name("Nanobots").onFinishChange(r=>t.onCountChange(r)),e.add(i,"maxSpeed",.5,10,.1).name("Velocidad máx.").onChange(()=>t.onParamsChange(i)),e.add(i,"cohesion",0,3,.05).name("Cohesión").onChange(()=>t.onParamsChange(i)),e.add(i,"separation",0,3,.05).name("Separación").onChange(()=>t.onParamsChange(i)),e.add(i,"alignment",0,3,.05).name("Alineación").onChange(()=>t.onParamsChange(i));const s={guardar:()=>t.onSave({count:i.count,cohesion:i.cohesion,separation:i.separation,alignment:i.alignment,maxSpeed:i.maxSpeed}),cargar:()=>t.onLoad()};return e.add(s,"guardar").name("Guardar configuración"),e.add(s,"cargar").name("Cargar configuración"),Wx(e,t),Xx(e,t),Rx(e,{onFormShape:t.onFormShape,readNanobotCount:t.readNanobotCount??(()=>i.count)}),e}const zr=200;function Bx(i){const t=i.addFolder("Estado de los agentes"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin agentes",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<zr)return;n=o;const a=r();let l="";for(let u=0;u<Hc.length;u++)a[u]!==0&&(l+=`${Hc[u]}: ${a[u]}
`);const c=l===""?"sin agentes":l.trimEnd();c!==s&&(s=c,e.textContent=c)}}function zx(i){const t=i.addFolder("Cola de tareas"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin tareas",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<zr)return;n=o;const a=r().describe(),l=a.length?a.join(`
`):"sin tareas";l!==s&&(s=l,e.textContent=l)}}function Hx(i){const t=i.addFolder("Cobertura de la figura"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin figura",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<zr)return;n=o;const a=r(),l=a?`${Math.round(a.fraction*100)}% del volumen
${a.covered} de ${a.total} celdas`:"sin figura";l!==s&&(s=l,e.textContent=l)}}function kx(i){return`#${i.toString(16).padStart(6,"0")}`}function Vx(i){const t=i.addFolder("Tipos de bot"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.7",t.domElement.appendChild(e);const n=[];for(const o of xn){const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="6px";const l=document.createElement("span");l.style.width="9px",l.style.height="9px",l.style.borderRadius="2px",l.style.flex="0 0 auto",l.style.background=kx(pn(o.type).identityColor),a.appendChild(l);const c=document.createElement("span");c.textContent=o.name,c.style.flex="1 1 auto",c.style.opacity=o.implemented?"0.9":"0.5",c.title=`${o.role} — ${o.fn}`,a.appendChild(c);const u=document.createElement("span");u.style.opacity="0.75",u.textContent="0",a.appendChild(u),n.push(u),e.appendChild(a);const h=o.implemented?o.note:o.pendingReason;if(h){const d=document.createElement("div");d.textContent=h,d.style.fontSize="10px",d.style.opacity="0.45",d.style.margin="-2px 0 4px 15px",d.style.lineHeight="1.35",e.appendChild(d)}}let s=-1/0;const r=xn.map(()=>-1);return o=>{const a=performance.now();if(a-s<zr)return;s=a;const l=o();for(let c=0;c<xn.length;c++){const u=l[xn[c].type]??0;u!==r[c]&&(r[c]=u,n[c].textContent=xn[c].implemented?String(u):"sin agentes")}}}function Gx(i,t){const e=i.addFolder("Inspección"),n=document.createElement("div");n.style.cssText="font-size:10px;opacity:0.5;line-height:1.35;padding:4px 10px",n.textContent="El Zoom especial deja acercarse mucho más que el zoom normal, y ahí se distingue el hexágono y el tipo de cada bot.",e.domElement.appendChild(n);const s={zoom:()=>{const l=t.onToggleZoom();r.name(l?"Zoom especial: ACTIVO":"Zoom especial")},inspector:()=>{const l=t.onToggleInspector();o.name(l?"Inspección de bots: ABIERTA":"Inspección de bots")},capas:()=>{const l=t.onToggleLayers();a.name(l?"Ver capas: ABIERTO":"Ver capas")}},r=e.add(s,"zoom").name("Zoom especial"),o=e.add(s,"inspector").name("Inspección de bots"),a=e.add(s,"capas").name("Ver capas")}function Wx(i,t){const e=i.addFolder("Comandos"),n={objectName:""};let s=null;const r=document.createElement("input");r.type="file",r.accept="image/*",r.style.display="none",r.dataset.commandSlot="photo",document.body.appendChild(r);const o=document.createElement("img");o.style.cssText="width:100%;max-height:80px;object-fit:contain;display:none;margin:4px 0;border-radius:4px;";const a=document.createElement("div");a.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";let l=null;function c(){l&&(URL.revokeObjectURL(l),l=null)}o.addEventListener("load",c),o.addEventListener("error",c),r.addEventListener("change",()=>{var d;const h=(d=r.files)==null?void 0:d[0];h&&(c(),l=URL.createObjectURL(h),o.src=l,o.style.display="block",s=h,a.textContent=`Foto adjunta: ${h.name}`)}),e.add(n,"objectName").name("Objeto");const u={adjuntarFoto:()=>r.click(),formarObjeto:async()=>{if(!s){a.textContent="Subí una foto del objeto antes de formarlo.";return}const h=sl(n.objectName);if(!h){a.textContent=`Objeto no reconocido. Probá: ${w_().join(", ")}`;return}a.textContent=`Formando: ${h}`;const d=await ol(s);t.onFormShape(h,d)},volverAlNucleo:()=>{a.textContent="Volviendo al núcleo...",t.onReturnToCore()}};e.add(u,"adjuntarFoto").name("Adjuntar foto"),e.add(u,"formarObjeto").name("Formar objeto"),e.add(u,"volverAlNucleo").name("Volver al núcleo"),e.domElement.appendChild(o),e.domElement.appendChild(a)}const No={front:"Foto frontal",back:"Foto trasera",left:"Foto lateral izq.",right:"Foto lateral der."};function Xx(i,t){const e=i.addFolder("Escaneo 3D (4 fotos)"),n={},s=document.createElement("div");s.style.cssText="font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;",s.textContent="Consejo: mismo fondo liso y contrastante, objeto centrado y a la MISMA distancia/zoom en las 4 fotos (no recortar cada una por separado).",e.domElement.appendChild(s);const r=document.createElement("div");r.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";function o(u){const h=document.createElement("input");return h.type="file",h.accept="image/*",h.style.display="none",h.dataset.scanSlot=u,document.body.appendChild(h),h.addEventListener("change",()=>{var p;const d=(p=h.files)==null?void 0:p[0];d&&(n[u]=d,r.textContent=`${No[u]}: ${d.name}`)}),h}const a=["front","back","left","right"],l=Object.fromEntries(a.map(u=>[u,o(u)])),c={reconstruir:async()=>{const u=a.find(_=>!n[_]);if(u){r.textContent=`Falta adjuntar: ${No[u]}.`;return}r.textContent="Reconstruyendo en 3D...";const h=n,d=await Nx(h);if(d.length===0){r.textContent="No se pudo reconstruir nada — probá con fondo más liso/contrastante.";return}const p=rl(d),f=await ol(h.front);r.textContent="Formando: escaneo",t.onFormShape(p,f)}};for(const u of a)e.add({fn:()=>l[u].click()},"fn").name(No[u]);e.add(c,"reconstruir").name("Reconstruir en 3D"),e.domElement.appendChild(r)}const nh="nanobot-swarm-config";function Yx(){try{const i=localStorage.getItem(nh);return i?JSON.parse(i):null}catch{return null}}function $x(i){try{return localStorage.setItem(nh,JSON.stringify(i)),!0}catch{return!1}}async function kc(){try{const i=await fetch("/api/config");if(i.ok)return await i.json()}catch{}return Yx()}async function qx(i){try{if((await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)return!0}catch{}return $x(i)}const lr=240;function Vc(){const i=performance.memory;return i?i.usedJSHeapSize/(1024*1024):null}function jx(){const i=new Float64Array(lr),t=new Float64Array(lr);let e=0,n=0,s=0,r=0,o=0,a=0,l=0;const c={};return{sampleFrame(u){i[e]=u,e=(e+1)%lr,n<lr&&n++,s++},setAgentCounts(u,h){r=u,o=h},setRenderInfo(u,h){a=u,l=h},mark(u,h){c[u]=h},time(u,h){const d=performance.now();try{return h()}finally{c[u]=performance.now()-d}},snapshot(){if(n===0)return{frames:0,fps:0,frameMsAvg:0,frameMsP95:0,frameMsMax:0,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:Vc(),timings:{...c}};let u=0,h=0;for(let _=0;_<n;_++){const g=i[_];u+=g,g>h&&(h=g),t[_]=g}const d=t.subarray(0,n);d.sort();const p=u/n,f=Math.min(n-1,Math.floor(n*.95));return{frames:s,fps:p>0?1e3/p:0,frameMsAvg:p,frameMsP95:d[f],frameMsMax:h,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:Vc(),timings:{...c}}},reset(){e=0,n=0,s=0;for(const u of Object.keys(c))delete c[u]}}}const ih=Math.PI*(3-Math.sqrt(5));function Ms(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Kx(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=t[2]-i[2],r=Math.sqrt(e*e+n*n+s*s)||1,o=e/r,a=n/r,l=s/r,c=Math.abs(a)>.99?1:0,u=Math.abs(a)>.99?0:1;let h=u*l,d=-c*l,p=c*a-u*o;const f=Math.sqrt(h*h+d*d+p*p)||1;return h/=f,d/=f,p/=f,{ux:h,uy:d,uz:p,vx:a*p-l*d,vy:l*h-o*p,vz:o*d-a*h}}function xr(i,t,e,n,s,r){const o=n*Math.sin(i*Math.PI),a=i*e*Math.PI*2+t*ih,l=Math.cos(a)*o,c=Math.sin(a)*o;r[0]=s.ux*l+s.vx*c,r[1]=s.uy*l+s.vy*c,r[2]=s.uz*l+s.vz*c}const sh=1,rh=1,cl=sh+rh,Zx=.35,oh=cl*Zx,Gc=cl-oh,ul={travelDuration:sh,layerStaggerSpan:rh,layerDuration:cl,swirlTurns:2.5,swirlMaxRadius:4,packetDuration:oh,packetSwirlTurns:2,packetSwirlMaxRadius:1.2,burstTravelDuration:Gc/2,burstStaggerSpan:Gc/2};function Jx(i,t,e){return Math.min(Math.floor(i/e),t-1)}function Qx(i,t,e,n,s,r,o,a){const l=1+s,c=new Uint8Array(n),u=new Array(l).fill(0);let h=0,d=0,p=0,f=0;for(let m=0;m<n;m++){const M=i[m]===r?1+t[m]:0;c[m]=M,u[M]++,M===1&&(h+=e[m*3+0],d+=e[m*3+1],p+=e[m*3+2],f++)}const _=new Float32Array(n),g=new Array(l).fill(0);for(let m=0;m<n;m++){const M=c[m],v=u[M];_[m]=v>1?g[M]/(v-1):0,g[M]++}return{layerOf:c,delayFraction:_,layerCount:l,totalDuration:l*o,wave0Landing:f>0?[h/f,d/f,p/f]:[a[0],a[1],a[2]]}}const de=[0,0,0],tM=.85;function Wc(i,t){return i>=1?Ne.ATTACHED:i<=0?Ne.CORE:i>=tM&&t===Ne.TRAVELING?Ne.ASSEMBLING:t}function eM(i,t,e,n,s,r,o,a=ul,l,c=Ne.TRAVELING,u=null,h=!1){const{layerOf:d,delayFraction:p,layerCount:f,wave0Landing:_}=n;if(h){sM(i,t,e,n,s,r,o,a,l);return}const g=Jx(o,f,a.layerDuration),m=o-g*a.layerDuration,M=g===1;for(let v=0;v<e;v++){const E=d[v];if(E<g)i[v*3+0]=t[v*3+0],i[v*3+1]=t[v*3+1],i[v*3+2]=t[v*3+2],l&&(l[v]=Ne.ATTACHED);else if(E>g){const w=u?u[v*3+0]:s[0],T=u?u[v*3+1]:s[1],b=u?u[v*3+2]:s[2];i[v*3+0]=w,i[v*3+1]=T,i[v*3+2]=b,l&&(l[v]=Ne.CORE)}else if(!u&&M&&m<a.packetDuration){const w=Ms(Math.min(Math.max(m/a.packetDuration,0),1));xr(w,v,a.packetSwirlTurns,a.packetSwirlMaxRadius,r,de),i[v*3+0]=s[0]+(_[0]-s[0])*w+de[0],i[v*3+1]=s[1]+(_[1]-s[1])*w+de[1],i[v*3+2]=s[2]+(_[2]-s[2])*w+de[2],l&&(l[v]=c)}else if(!u&&M){const T=(m-a.packetDuration-p[v]*a.burstStaggerSpan)/a.burstTravelDuration,b=Ms(Math.min(Math.max(T,0),1));xr(b,v,a.swirlTurns,a.swirlMaxRadius,r,de),i[v*3+0]=_[0]+(t[v*3+0]-_[0])*b+de[0],i[v*3+1]=_[1]+(t[v*3+1]-_[1])*b+de[1],i[v*3+2]=_[2]+(t[v*3+2]-_[2])*b+de[2],l&&(l[v]=Wc(b,c))}else{const w=(m-p[v]*a.layerStaggerSpan)/a.travelDuration,T=Ms(Math.min(Math.max(w,0),1));xr(T,v,a.swirlTurns,a.swirlMaxRadius,r,de);const b=u?u[v*3+0]:s[0],R=u?u[v*3+1]:s[1],N=u?u[v*3+2]:s[2];i[v*3+0]=b+(t[v*3+0]-b)*T+de[0],i[v*3+1]=R+(t[v*3+1]-R)*T+de[1],i[v*3+2]=N+(t[v*3+2]-N)*T+de[2],l&&(l[v]=Wc(T,c))}}}const nM=3,iM=6;function sM(i,t,e,n,s,r,o,a,l){const{layerOf:c,delayFraction:u,layerCount:h}=n,d=h*a.layerDuration,p=d>0?1-Math.min(Math.max(o/d,0),1):1;for(let f=0;f<e;f++){const g=((h>1?(h-1-c[f])/(h-1):0)+u[f])*.5,m=Math.min(Math.max((p-g*.6)/.4,0),1),M=Ms(m);if(m<=0){i[f*3+0]=t[f*3+0],i[f*3+1]=t[f*3+1],i[f*3+2]=t[f*3+2],l&&(l[f]=Ne.ATTACHED);continue}const v=iM*Math.sin(M*Math.PI),E=M*nM*Math.PI*2+f*ih,w=Math.cos(E),T=Math.sin(E);i[f*3+0]=t[f*3+0]+(s[0]-t[f*3+0])*M+(r.ux*w+r.vx*T)*v,i[f*3+1]=t[f*3+1]+(s[1]-t[f*3+1])*M+(r.uy*w+r.vy*T)*v,i[f*3+2]=t[f*3+2]+(s[2]-t[f*3+2])*M+(r.uz*w+r.vz*T)*v,l&&(l[f]=M>=1?Ne.CORE:Ne.RETURNING)}}const rM=.15,oM=.1;function Ur(i,t,e=rM,n=oM){if(t<=1)return{start:0,end:1-n};const s=(1-n)/(t-(t-1)*e),r=i*s*(1-e);return{start:r,end:r+s}}function Xc(i,t){const e=t.end-t.start;return e<=0?i>=t.end?1:0:Ms(Math.min(Math.max((i-t.start)/e,0),1))}function aM(i,t,e,n,s,r,o,a,l,c,u,h=1){const d=Xc(l,Ur(0,h)),p=h>1?Xc(l,Ur(1,h)):d;for(let f=0;f<r;f++){const _=s[f]?p:d;xr(_,f,c,u,a,de),s[f]?(t[f*6+0]=o[0]+(n[f*6+0]-o[0])*_+de[0],t[f*6+1]=o[1]+(n[f*6+1]-o[1])*_+de[1],t[f*6+2]=o[2]+(n[f*6+2]-o[2])*_+de[2],t[f*6+3]=o[0]+(n[f*6+3]-o[0])*_+de[0],t[f*6+4]=o[1]+(n[f*6+4]-o[1])*_+de[1],t[f*6+5]=o[2]+(n[f*6+5]-o[2])*_+de[2]):(i[f*3+0]=o[0]+(e[f*3+0]-o[0])*_+de[0],i[f*3+1]=o[1]+(e[f*3+1]-o[1])*_+de[1],i[f*3+2]=o[2]+(e[f*3+2]-o[2])*_+de[2])}}const gn={CREATE_STRUCTURE:"CREATE_STRUCTURE",CONNECT_STRUCTURE:"CONNECT_STRUCTURE",FILL_STRUCTURE:"FILL_STRUCTURE",APPLY_COLOR:"APPLY_COLOR",RETURN_TO_CORE:"RETURN_TO_CORE"},Qe={PENDING:"pending",RUNNING:"running",DONE:"done",CANCELLED:"cancelled"},Yc={CREATE_STRUCTURE:"exoesqueleto",CONNECT_STRUCTURE:"uniones",FILL_STRUCTURE:"relleno",APPLY_COLOR:"color",RETURN_TO_CORE:"repliegue"};function lM(){let i=[],t=1,e=1,n=1,s=!1;function r(o,a,l,c,u=-1){return{id:t++,type:o,clock:a,t0:l,t1:c,wave:u,status:Qe.PENDING}}return{get tasks(){return i},get active(){for(const o of i)if(o.status===Qe.RUNNING)return o;return null},planStructure(o){if(s=!1,o.beamStart===null){i=[r(gn.CREATE_STRUCTURE,"microbot",0,o.exoDuration)];return}i=[r(gn.CREATE_STRUCTURE,"microbot",0,o.nodeEnd),r(gn.CONNECT_STRUCTURE,"microbot",o.beamStart,o.exoDuration)]},planLayers(o){e=Math.max(1,o.layerCount),n=o.layerDuration,s=!1,i=i.filter(a=>a.clock!=="nanobot"),i.push(r(gn.FILL_STRUCTURE,"nanobot",0,n));for(let a=0;a<e-1;a++)i.push(r(gn.APPLY_COLOR,"nanobot",(a+1)*n,(a+2)*n,a))},planReturn(){s=!0;for(const o of i)(o.status===Qe.PENDING||o.status===Qe.RUNNING)&&(o.status=Qe.CANCELLED);i.push(r(gn.RETURN_TO_CORE,"nanobot",0,e*n))},clear(){i=[],s=!1},sync(o,a){for(const l of i){if(l.status===Qe.CANCELLED)continue;const c=l.clock==="microbot"?o:a;if(l.type===gn.RETURN_TO_CORE){l.status=a<=0&&o<=0?Qe.DONE:Qe.RUNNING;continue}s||(c>=l.t1?l.status=Qe.DONE:c>=l.t0?l.status=Qe.RUNNING:l.status=Qe.PENDING)}},nanobotLayerIndex(o){const a=Math.floor(o/n);return Math.min(Math.max(a,0),e-1)},isStructureDone(){let o=!1;for(const a of i)if(!(a.type!==gn.CREATE_STRUCTURE&&a.type!==gn.CONNECT_STRUCTURE)&&(o=!0,a.status!==Qe.DONE))return!1;return o},describe(){return i.map(o=>`${o.type===gn.APPLY_COLOR?`${Yc[o.type]} ${o.wave+1}`:Yc[o.type]}: ${o.status}`)}}}const cM=3;function uM(i,t,e,n,s,r,o=Ei,a=ni){const l=new Float32Array(t*3),c=new Map,u=[];for(let f=0;f<n;f++){const _=en(e[f*3+0]-r[0],o,a),g=en(e[f*3+1]-r[1],o,a),m=en(e[f*3+2]-r[2],o,a);if(_<0||g<0||m<0){u.push(f);continue}const M=Ie(_,g,m,o),v=c.get(M);v?v.push(f):c.set(M,[f])}function h(f){const _=c.get(f);if(!_||_.length===0)return-1;const g=_.pop();return _.length===0&&c.delete(f),g}let d=0,p=0;for(let f=0;f<t;f++){const _=i[f*3+0],g=i[f*3+1],m=i[f*3+2],M=en(_-r[0],o,a),v=en(g-r[1],o,a),E=en(m-r[2],o,a);let w=-1;if(M>=0&&v>=0&&E>=0){w=h(Ie(M,v,E,o));for(let T=1;w<0&&T<=cM;T++)for(let b=-T;b<=T&&w<0;b++){const R=E+b;if(!(R<0||R>=o))for(let N=-T;N<=T&&w<0;N++){const x=v+N;if(!(x<0||x>=o))for(let y=-T;y<=T&&w<0;y++){if(Math.max(Math.abs(y),Math.abs(N),Math.abs(b))!==T)continue;const z=M+y;z<0||z>=o||(w=h(Ie(z,x,R,o)))}}}w>=0&&p++}if(w<0){for(;w<0&&d<u.length;)w=u[d++];if(w<0){const T=c.keys().next();T.done||(w=h(T.value))}}w<0?(l[f*3+0]=s[0],l[f*3+1]=s[1],l[f*3+2]=s[2]):(l[f*3+0]=e[w*3+0],l[f*3+1]=e[w*3+1],l[f*3+2]=e[w*3+2])}return{from:l,matchedNearby:p}}const gs=3.4,hM=2.2,dM=5,Oo=ul.layerDuration,$c=4e4,fM=[0,0,0],_s=new Map,pM=24,ah=.5,Fo=[!0,!0],qc=[!0,!1];function mM(i){const{swarm:t,swarmMesh:e,microbotMesh:n,settings:s,reactorCenter:r,swirlAxes:o}=i,a=i.now??(()=>performance.now());let l=null,c=Na,u=new Uint8Array(0),h=new Uint8Array(s.count).fill(ye.DETAIL),d=new Float32Array(s.count*3),p=null,f="idle",_=0,g=0,m={layerOf:new Uint8Array(0),delayFraction:new Float32Array(0),layerCount:1,totalDuration:Oo,wave0Landing:[...vn]};const M=new Float32Array(i.maxNanobots*3),v=Ox(),E=new Uint32Array(8),w=new Uint32Array(J_),T=lM();let b=null,R=null,N=-1,x=null,y="hidden",z=Math.min(s.microbotCount,i.maxMicrobots),I=null,G=0,D=0;const P=new Float32Array(i.maxMicrobots*3),F=new Float32Array(i.maxMicrobots*6);let O=null,st=null,rt=null;function dt(){const ot=H_(l??"",z,vn);I=ot;let Tt=0;if(ot)for(let ct=0;ct<z;ct++)ot.isBeam[ct]&&Tt++;G=Tt}function vt(){return G>0?2:1}function lt(ot){if(!I)return;const{points:Tt,relationSpans:ct,isBeam:C}=I;aM(P,F,Tt,ct,C,z,r,o,ot,hM,dM,vt()),n.updateFromPositions(P,z,C,F)}function W(){const ot=vt();T.planStructure({exoDuration:gs,nodeEnd:Ur(0,ot).end*gs,beamStart:ot>1?Ur(1,ot).start*gs:null})}function Q(ot,Tt=!1){p&&eM(M,p.points,g,m,r,o,ot,ul,v.state,Tt?Ne.RETURNING:Ne.TRAVELING,R,Tt)}function ht(){t.setParams({cohesion:s.cohesion,separation:s.separation,alignment:s.alignment,maxSpeed:s.maxSpeed,seekWeight:ah})}function ut(){t.setAgentTargets(V_(s.count,r)),h=new Uint8Array(s.count).fill(ye.DETAIL),d=new Float32Array(s.count*3),v.reset(s.count,h,d)}function Mt(ot,Tt,ct){const C=il(ot);if(!C)return null;const S=`${ot}#${b_(ot)}`;let X=_s.get(S);if(!X){if(X=Oc(C.generate($c),$c,fM),_s.size>=pM){const J=_s.keys().next();J.done||_s.delete(J.value)}_s.set(S,X)}const Z=Oc(Tt,ct,vn),et=vx(X,Z);return{fraction:et.coverage,covered:et.covered,total:et.target,missing:et.missing,components:eh(Z)}}function Et(ot,Tt){const ct=k_(ot,s.count,vn,Tt);ct&&(p=ct,h=ct.roles,d=ct.points,u=ct.colorWave,c=Tt,g=s.count,m=Qx(ct.roles,ct.colorWave,ct.points,s.count,ct.colorWaveCount,ye.COLOR,Oo,vn),v.adoptFormation({count:s.count,role:ct.roles,colorWave:ct.colorWave,layer:m.layerOf,delayFraction:m.delayFraction,target:ct.points}),R=x&&x.count>0?uM(ct.points,s.count,x.positions,x.count,r,vn).from:null,x=null,b=Mt(ot,ct.points,s.count),v.assignTypesFromRoles(ye.COLOR),T.planLayers({layerCount:m.layerCount,layerDuration:Oo}),e.setColorClusters(ct.colorClusters),e.setPointColors(ct.pointColors))}function Lt(){var ot;O=null,p=null,f="idle",_=0,ut(),e.setVisible(!1),e.setSkeletonGrayscale(!1),e.setPointColors(null),l=null,I=null,y="hidden",D=0,n.setVisible(!1),T.clear(),b=null,R=null,x=null,N=-1,(ot=i.reactor)==null||ot.resetColor(),ht()}function kt(ot,Tt){st=a(),x=l!==null&&p!==null?{positions:M.slice(0,g*3),count:g,roles:h,colorWave:u,revealed:m.layerCount-1}:null,O=null,p=null,f="idle",_=0,ut(),x||(e.setVisible(!1),e.setSkeletonGrayscale(!1)),l=ot,c=Tt??Na,O={shapeName:ot,colorClusters:c},dt(),y!=="retracting"&&(D=0),y="launching",n.setVisible(!0),W(),ht()}function Bt(){if(l===null){Lt();return}l=null,O=null,(y==="launching"||y==="settled")&&(y="retracting"),(f==="forming"||f==="settled")&&(f="retracting"),T.planReturn()}function L(ot){if(f==="retracting"){rt=ot;return}if(s.count=ot,t.init(ot),e.setCount(ot),l&&!O){const Tt=f==="settled";Et(l,c),Tt&&(f="settled",_=m.totalDuration,Q(_),e.setSkeletonGrayscale(m.layerCount>1),e.updateFromPositions(M,g,h,d,Fo,u,m.layerCount-1))}else ut()}function qt(ot){if(z=Math.min(ot,i.maxMicrobots),s.microbotCount=z,y!=="launching"&&y!=="settled")return;const Tt=vt();dt(),y==="launching"&&vt()!==Tt&&W(),y==="settled"&&lt(1)}function It(ot){var Tt,ct,C,S;if(y==="launching"||y==="retracting")if(D=Math.min(Math.max(D+(y==="launching"?1:-1)*ot,0),gs),lt(D/gs),T.sync(D,_),y==="launching"&&T.isStructureDone()){if(y="settled",O){const{shapeName:Z,colorClusters:et}=O;O=null,Et(Z,et),f="forming",_=0,e.setVisible(!0)}}else y==="retracting"&&D<=0&&(y="hidden",I=null,n.setVisible(!1));if(f==="forming"||f==="retracting"){_=Math.min(Math.max(_+(f==="forming"?1:-1)*ot,0),m.totalDuration),Q(_,f==="retracting"),T.sync(D,_);const Z=T.nanobotLayerIndex(_);if(Z!==N){N=Z;const et=Z-1,J=et>=0?(Tt=p==null?void 0:p.colorClusters)==null?void 0:Tt[et]:void 0;J&&((ct=i.reactor)==null||ct.pulseColor(J.color))}if(e.setSkeletonGrayscale(Z>=1),qc[1]=Z>=1,e.updateFromPositions(M,g,h,d,qc,u,Z),f==="forming"&&_>=m.totalDuration)f="settled",st!==null&&((C=i.onFormationSettled)==null||C.call(i,a()-st),st=null);else if(f==="retracting"&&_<=0){if(f="idle",p=null,b=null,R=null,x=null,N=-1,(S=i.reactor)==null||S.resetColor(),e.setVisible(!1),rt!==null){const et=rt;rt=null,L(et)}else ut();ht()}}else f==="idle"&&(t.step(ot),x?e.updateFromPositions(x.positions,x.count,x.roles,x.positions,Fo,x.colorWave,x.revealed):e.updateFromPositions(t.getPositions(),t.getCount(),h,d,Fo,u,0))}const Ot={get nanobotPhase(){return f},get microbotPhase(){return y},get nanobotElapsed(){return _},get microbotElapsed(){return D},get nanobotAnimCount(){return g},get microbotCount(){return z},get currentShapeName(){return l},get stateCounts(){return v.countByState(E)},get coverage(){return b},get typeCounts(){return v.countByType(w),y!=="hidden"&&I&&(w[Kt.MICROBOT]+=z-G,w[Kt.UNION]+=G),w},get forming(){return l!==null}};return L(s.count),Lt(),{state:Ot,agents:v,director:T,step:It,formShape:kt,returnToCore:Bt,setNanobotCount:L,setMicrobotCount:qt,applyParams:ht,renderPositions:M}}function gM(i,t={}){const e=t.maxDt??.05,n=t.now??(()=>performance.now()),s=t.schedule??(u=>requestAnimationFrame(u)),r=t.onError;let o=!1,a=0,l=0;function c(u){if(!(!o||u!==l))try{const h=n(),d=Math.min((h-a)/1e3,e);a=h,i(d)}catch(h){if(o=!1,r)r(h);else throw h}finally{o&&u===l&&s(()=>c(u))}}return{start(){if(o)return;o=!0,l++,a=n();const u=l;s(()=>c(u))},stop(){o=!1},get running(){return o}}}const $n={near:5,mid:34},lh=.12,Bo=$n.near*lh,zo=$n.mid*lh;function _M(i=pe.MID){let t=i;return{get level(){return t},update(e){let n;return t===pe.NEAR?n=e>$n.near+Bo?e>$n.mid+zo?pe.FAR:pe.MID:pe.NEAR:t===pe.FAR?n=e<$n.mid-zo?e<$n.near-Bo?pe.NEAR:pe.MID:pe.FAR:e<$n.near-Bo?n=pe.NEAR:e>$n.mid+zo?n=pe.FAR:n=pe.MID,n===t?!1:(t=n,!0)}}}const vM=.8,xM=32;function MM(i){const{camera:t,controls:e}=i;let n=!1,s=e.minDistance,r=t.fov;const o=e.target.clone();function a(){var u,h;if(n)return;n=!0,s=e.minDistance,r=t.fov,o.copy(e.target);const c=(u=i.focusTarget)==null?void 0:u.call(i);c&&e.target.set(c[0],c[1],c[2]),e.minDistance=vM,t.fov=xM,t.updateProjectionMatrix(),(h=i.onChange)==null||h.call(i,!0)}function l(){var c;n&&(n=!1,e.minDistance=s,e.target.copy(o),t.fov=r,t.updateProjectionMatrix(),(c=i.onChange)==null||c.call(i,!1))}return{get active(){return n},enter:a,exit:l,toggle(){return n?l():a(),n}}}function Ho(i,t,e=6){const n=new ti(i,i,t,e,1,!1);return n.rotateX(Math.PI/2),n}function yM(i){const t=new In,e=pn(i),n=new Jn({color:e.identityColor,emissive:e.identityEmissive,emissiveIntensity:.6,metalness:.65,roughness:.35}),s=new Jn({color:1711394,metalness:.8,roughness:.45}),r=new Jn({color:e.identityColor,emissive:e.identityColor,emissiveIntensity:1.4,metalness:.2,roughness:.3}),o=.55+Gu(i).relativeSize*.12,a=new ae(Ho(o,o*.52),s);t.add(a);const l=new ae(Ho(o*.78,o*.62),n);switch(t.add(l),i){case Kt.MICROBOT:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new Zn(o*.16,o*.16,o*.66),s);h.position.set(Math.cos(u)*o*.9,Math.sin(u)*o*.9,0),h.rotation.z=u,t.add(h)}break}case Kt.NANOBOT:{const c=new ae(Ho(o*.84,o*.16),r);t.add(c);break}case Kt.UNION:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new ti(o*.17,o*.11,o*.5,6),n);h.position.set(Math.cos(u)*o*1.08,Math.sin(u)*o*1.08,0),h.rotation.z=-u+Math.PI/2,t.add(h);const d=new ae(new Pr(o*.17,o*.045,6,12),r);d.position.copy(h.position),d.rotation.y=Math.PI/2,d.rotation.z=u,t.add(d)}break}case Kt.REPAIR:{const c=new Zn(o*.95,o*.26,o*.2),u=new ae(c,r);u.position.z=o*.34,t.add(u);const h=new ae(c,r);h.position.z=o*.34,h.rotation.z=Math.PI/2,t.add(h);for(const d of[-1,1]){const p=new ae(new Zn(o*.2,o*.42,o*.3),s);p.position.set(d*o*1,0,0),t.add(p)}break}case Kt.TRANSFORM:{for(let c=0;c<3;c++){const u=new ae(new Pr(o*(.95+c*.16),o*.06,6,18),c%2?r:n);u.rotation.x=c*Math.PI/5,u.rotation.y=c*Math.PI/3,t.add(u)}break}case Kt.MATERIAL:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new Ja(o*.13,o*.34,6),r);h.position.set(Math.cos(u)*o*.72,Math.sin(u)*o*.72,o*.4),h.rotation.x=Math.PI/2,t.add(h)}break}}return t}function SM(){const i=document.createElement("canvas"),t=new Pu({canvas:i,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Lu,n=new ke(38,1,.1,50);n.position.set(0,1.6,4.4),n.lookAt(0,0,0),e.add(new Nu(16777215,.55));const s=new Da(16777215,1.5);s.position.set(3,4,5),e.add(s);const r=new Da(8961023,.8);r.position.set(-4,-2,-3),e.add(r);const o=new In;e.add(o);let a=null;function l(){a&&(o.remove(a),a.traverse(c=>{const u=c;if(!u.isMesh)return;u.geometry.dispose();const h=u.material;Array.isArray(h)?h.forEach(d=>d.dispose()):h.dispose()}),a=null)}return{canvas:i,show(c){l(),a=yM(c),o.add(a)},render(c){o.rotation.y+=c*.6,t.render(e,n)},setSize(c,u){c<=0||u<=0||(t.setSize(c,u,!1),n.aspect=c/u,n.updateProjectionMatrix())},dispose(){l(),t.dispose()}}}const ko="no disponible en esta fase";function an(i,t,e=!1){const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.gap="10px",n.style.padding="2px 0";const s=document.createElement("span");s.textContent=i,s.style.opacity="0.55",s.style.flex="0 0 auto";const r=document.createElement("span");return r.textContent=t,r.style.textAlign="right",r.style.opacity=e?"0.4":"0.95",e&&(r.style.fontStyle="italic"),n.append(s,r),n}function EM(){const i=document.createElement("div");i.style.cssText=["position:fixed","left:12px","bottom:12px","width:300px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","backdrop-filter:blur(6px)"].join(";");const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.1)";const e=document.createElement("strong");e.textContent="Inspección de bots",e.style.flex="1 1 auto";const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:none;border:none;color:inherit;cursor:pointer;font-size:13px;opacity:0.6",t.append(e,n),i.appendChild(t);const s=document.createElement("div");s.style.cssText="display:flex;flex-wrap:wrap;gap:4px;padding:8px 10px",i.appendChild(s);const r=SM();r.canvas.style.cssText="width:100%;height:170px;display:block",i.appendChild(r.canvas);const o=document.createElement("div");o.style.cssText="padding:8px 10px 10px",i.appendChild(o);let a=xn[0].type,l=!1,c=null;const u=[];function h(){const f=Gu(a);o.textContent="";const _=document.createElement("div");_.textContent=f.name,_.style.cssText="font-size:14px;font-weight:600;margin-bottom:4px",_.style.color=`#${pn(f.type).identityColor.toString(16).padStart(6,"0")}`,o.appendChild(_),o.appendChild(an("Rol",f.role)),o.appendChild(an("Función",f.fn)),o.appendChild(an("Forma","Hexágono")),o.appendChild(an("Tamaño relativo",`${f.relativeSize.toFixed(1)}× Nanobot`)),o.appendChild(an("Color de identidad",`#${pn(f.type).identityColor.toString(16).padStart(6,"0")}`)),o.appendChild(an("Recibe material",f.acceptsObjectMaterial?"sí":"no — conserva su color estructural"));const g=c?c[f.type]??0:0;if(o.appendChild(f.implemented?an("En el enjambre",`${g} agentes`):an("En el enjambre","sin agentes",!0)),o.appendChild(an("Material aplicado",ko,!0)),o.appendChild(an("Energía",ko,!0)),o.appendChild(an("Conexiones",ko,!0)),!f.implemented&&f.pendingReason){const m=document.createElement("div");m.textContent=f.pendingReason,m.style.cssText="margin-top:6px;font-size:11px;opacity:0.45;line-height:1.4",o.appendChild(m)}}function d(f){a=f,u.forEach((_,g)=>{const m=xn[g].type===f;_.style.opacity=m?"1":"0.5",_.style.borderWidth=m?"2px":"1px"}),r.show(f),h()}for(const f of xn){const _=document.createElement("button");_.textContent=f.name.replace(" Bot","");const g=`#${pn(f.type).identityColor.toString(16).padStart(6,"0")}`;_.style.cssText=["flex:1 1 auto","min-width:74px","padding:3px 6px","cursor:pointer","background:rgba(255,255,255,0.05)",`border:1px solid ${g}`,"border-radius:4px",`color:${g}`,"font:11px system-ui,sans-serif"].join(";"),_.addEventListener("click",()=>d(f.type)),s.appendChild(_),u.push(_)}function p(f){l=f,i.style.display=f?"block":"none",f&&(r.setSize(i.clientWidth,170),d(a))}return n.addEventListener("click",()=>p(!1)),d(a),{element:i,get open(){return l},setOpen:p,render(f){l&&r.render(f)},setCounts(f){c=f},dispose(){r.dispose(),i.remove()}}}const jn={STRUCTURE:0,CONNECTION:1,DETAIL:2,MATERIAL:3},jc=[{layer:jn.STRUCTURE,name:"Estructura (Microbots)",hint:"Nodos del exoesqueleto"},{layer:jn.CONNECTION,name:"Conexiones (Union Bots)",hint:"Vigas que unen los nodos"},{layer:jn.DETAIL,name:"Detalle (Nanobots)",hint:"Relleno de superficie"},{layer:jn.MATERIAL,name:"Material (Material Bots)",hint:"Color y acabado del objeto"}];function bM(i){const t=jc.map(()=>!0);let e=0;const n=document.createElement("div");n.style.cssText=["position:fixed","left:12px","top:12px","width:250px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","padding:8px 10px","backdrop-filter:blur(6px)"].join(";");const s=document.createElement("strong");s.textContent="Capas de construcción",s.style.cssText="display:block;margin-bottom:6px",n.appendChild(s);const r={get visible(){return t},get explode(){return e}};for(const u of jc){const h=document.createElement("label");h.style.cssText="display:flex;align-items:center;gap:6px;padding:1px 0;cursor:pointer";const d=document.createElement("input");d.type="checkbox",d.checked=!0,d.addEventListener("change",()=>{t[u.layer]=d.checked,i.onChange(r)});const p=document.createElement("span");p.textContent=u.name,p.title=u.hint,h.append(d,p),n.appendChild(h)}const o=document.createElement("div");o.style.cssText="margin-top:8px;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px";const a=document.createElement("div");a.textContent="Ver capas (separar)",a.style.opacity="0.75";const l=document.createElement("input");l.type="range",l.min="0",l.max="12",l.step="0.5",l.value="0",l.style.width="100%",l.addEventListener("input",()=>{e=Number(l.value),i.onChange(r)});const c=document.createElement("div");return c.textContent="Sólo afecta cómo se dibuja: la simulación no cambia.",c.style.cssText="font-size:10px;opacity:0.45;line-height:1.35;margin-top:2px",o.append(a,l,c),n.appendChild(o),{element:n,state:r,setOpen(u){n.style.display=u?"block":"none"},dispose(){n.remove()}}}const Kc=6e4,Zc=6e4,AM={count:3e3,microbotCount:4e3,cohesion:.8,separation:1.5,alignment:.6,maxSpeed:4,seekWeight:ah};async function TM(){const i=document.getElementById("app"),{scene:t,camera:e,renderer:n,composer:s,controls:r}=q0(i),o=jx();window.__nanobotMetrics=o,window.__nanobotCamera={get:()=>({pos:e.position.toArray(),target:r.target.toArray(),distance:r.getDistance(),fov:e.fov,minDistance:r.minDistance})},window.__nanobotScan={form:(F,O,st)=>{const rt=rl(Float32Array.from(F),O?Uint8Array.from(O):null);return _.formShape(rt,st),rt}},n.info.autoReset=!1;const a=uv(Kc);t.add(a.group);const l=mv(Zc);l.setVisible(!1),t.add(l.group);const c=Ev();t.add(c.group);const u=c.position.toArray(),h=Kx(u,vn),d=new _v;await d.load();const p={...AM},f=await kc();f&&Object.assign(p,f);const _=mM({swarm:d,swarmMesh:a,microbotMesh:l,settings:p,reactorCenter:u,swirlAxes:h,maxNanobots:Kc,maxMicrobots:Zc,onFormationSettled:F=>o.mark("formacionMs",F),reactor:c}),g=Fx(p,{onCountChange:F=>_.setNanobotCount(F),onParamsChange:()=>_.applyParams(),onSave:async F=>{await qx(F)},onLoad:async()=>{const F=await kc();F&&(Object.assign(p,F),_.setNanobotCount(p.count),_.applyParams(),g.controllersRecursive().forEach(O=>O.updateDisplay()))},onFormShape:(F,O)=>_.formShape(F,O),readNanobotCount:()=>p.count,onReturnToCore:()=>_.returnToCore(),onMicrobotCountChange:F=>_.setMicrobotCount(F)}),m=Bx(g),M=()=>_.state.stateCounts,v=zx(g),E=()=>_.director,w=Hx(g),T=()=>_.state.coverage,b=Vx(g),R=()=>_.state.typeCounts,N=_M();a.setLodLevel(N.level);const x=EM();document.body.appendChild(x.element);const y={visible:[!0,!0,!0,!0],explode:0};function z(F){const O=F.explode;l.setLayerDisplay({visible:F.visible[jn.STRUCTURE],offsetY:-1.5*O},{visible:F.visible[jn.CONNECTION],offsetY:-.5*O}),a.setLayerDisplay({visible:F.visible[jn.DETAIL],offsetY:.5*O},{visible:F.visible[jn.MATERIAL],offsetY:1.5*O})}const I=bM({onChange:z});document.body.appendChild(I.element),z(y);const G=MM({camera:e,controls:r,focusTarget:()=>_.state.forming?vn:u,onChange:F=>{F?a.setLodLevel(pe.NEAR):a.setLodLevel(N.level)}});let D=!1;Gx(g,{onToggleZoom:()=>G.toggle(),onToggleInspector:()=>(x.setOpen(!x.open),x.open),onToggleLayers:()=>(D=!D,I.setOpen(D),D)}),gM(F=>{const O=performance.now();n.info.reset(),c.update(F),r.update(),N.update(r.getDistance())&&!G.active&&a.setLodLevel(N.level),_.step(F),s.render(),o.sampleFrame(performance.now()-O),o.setAgentCounts(_.state.nanobotPhase==="idle"?d.getCount():_.state.nanobotAnimCount,_.state.microbotPhase==="hidden"?0:_.state.microbotCount),o.setRenderInfo(n.info.render.calls,n.info.render.triangles),m(M),v(E),w(T),b(R),x.setCounts(_.state.typeCounts),x.render(F)},{onError:F=>console.error("Error en el loop de animación; se detiene el render:",F)}).start()}TM().catch(i=>{console.error("Error inicializando el simulador de nanobots:",i)});
