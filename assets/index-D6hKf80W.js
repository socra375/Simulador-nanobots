var Uh=Object.defineProperty;var Nh=(i,t,e)=>t in i?Uh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ai=(i,t,e)=>Nh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="169",$i={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oh=0,Cl=1,Fh=2,pu=1,mu=2,Ln=3,ei=0,Xe=1,Un=2,Fn=0,qi=1,Ko=2,Rl=3,Pl=4,Bh=5,mi=100,zh=101,Hh=102,kh=103,Vh=104,Gh=200,Wh=201,Xh=202,Yh=203,Zo=204,Jo=205,$h=206,qh=207,jh=208,Kh=209,Zh=210,Jh=211,Qh=212,td=213,ed=214,Qo=0,ta=1,ea=2,ts=3,na=4,ia=5,sa=6,ra=7,gu=0,nd=1,id=2,Jn=0,sd=1,rd=2,od=3,_u=4,ad=5,ld=6,cd=7,vu=300,es=301,ns=302,oa=303,aa=304,Hr=306,la=1e3,vi=1001,ca=1002,Ge=1003,ud=1004,Fs=1005,fn=1006,Kr=1007,xi=1008,zn=1009,xu=1010,Mu=1011,Ts=1012,qa=1013,Si=1014,Sn=1015,Bn=1016,ja=1017,Ka=1018,is=1020,yu=35902,Su=1021,Eu=1022,_n=1023,bu=1024,Au=1025,ji=1026,ss=1027,Za=1028,Ja=1029,Tu=1030,Qa=1031,tl=1033,fr=33776,pr=33777,mr=33778,gr=33779,ua=35840,ha=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37808,va=37809,xa=37810,Ma=37811,ya=37812,Sa=37813,Ea=37814,ba=37815,Aa=37816,Ta=37817,wa=37818,Ca=37819,Ra=37820,Pa=37821,_r=36492,La=36494,Ia=36495,wu=36283,Da=36284,Ua=36285,Na=36286,hd=3200,dd=3201,Cu=0,fd=1,Kn="",dn="srgb",ii="srgb-linear",el="display-p3",kr="display-p3-linear",Tr="linear",oe="srgb",wr="rec709",Cr="p3",Ci=7680,Ll=519,pd=512,md=513,gd=514,Ru=515,_d=516,vd=517,xd=518,Md=519,Oa=35044,yd=35048,Il="300 es",Nn=2e3,Rr=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,Fa=180/Math.PI;function Rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Sd(i,t){return(i%t+t)%t}function Zr(i,t,e){return(1-e)*i+e*t}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ed={DEG2RAD:vr};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],g=n[5],p=n[8],_=s[0],f=s[3],m=s[6],M=s[1],v=s[4],y=s[7],w=s[2],b=s[5],A=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*f+a*v+l*b,r[6]=o*m+a*y+l*A,r[1]=c*_+u*M+h*w,r[4]=c*f+u*v+h*b,r[7]=c*m+u*y+h*A,r[2]=d*_+g*M+p*w,r[5]=d*f+g*v+p*b,r[8]=d*m+g*y+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,g=c*r-o*l,p=e*h+n*d+s*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=g*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Yt;function Pu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){const i=Pr("canvas");return i.style.display="block",i}const Dl={};function xr(i){i in Dl||(Dl[i]=!0,console.warn(i))}function Ad(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Td(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ul=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nl=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),us={[ii]:{transfer:Tr,primaries:wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[dn]:{transfer:oe,primaries:wr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:Tr,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Nl),fromReference:i=>i.applyMatrix3(Ul)},[el]:{transfer:oe,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nl),fromReference:i=>i.applyMatrix3(Ul).convertLinearToSRGB()}},Cd=new Set([ii,kr]),te={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Cd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=us[t].toReference,s=us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return us[i].primaries},getTransfer:function(i){return i===Kn?Tr:us[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(us[t].luminanceCoefficients)}};function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Pr("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class Lu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;class Fe extends bi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=vi,s=vi,r=fn,o=xi,a=_n,l=zn,c=Fe.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Rs(),this.name="",this.source=new Lu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=vu;Fe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],p=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+f)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(g+1)/2,w=(m+1)/2,b=(u+d)/4,A=(h+_)/4,C=(p+f)/4;return v>y&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=A/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((f-p)*(f-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-p)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Id extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Id{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Iu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],g=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=p,t[e+3]=_;return}if(h!==_||l!==d||c!==g||u!==p){let f=1-a;const m=l*d+c*g+u*p+h*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const w=Math.sqrt(v),b=Math.atan2(w,m*M);f=Math.sin(f*b)/w,a=Math.sin(a*b)/w}const y=a*M;if(l=l*f+d*y,c=c*f+g*y,u=u*f+p*y,h=h*f+_*y,f===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],g=r[o+2],p=r[o+3];return t[e]=a*p+u*h+l*g-c*d,t[e+1]=l*p+u*d+c*h-a*g,t[e+2]=c*p+u*g+a*d-l*h,t[e+3]=u*p-a*h-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),g=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*g*p,this._y=c*g*h-d*u*p,this._z=c*u*p+d*g*h,this._w=c*u*h-d*g*p;break;case"YXZ":this._x=d*u*h+c*g*p,this._y=c*g*h-d*u*p,this._z=c*u*p-d*g*h,this._w=c*u*h+d*g*p;break;case"ZXY":this._x=d*u*h-c*g*p,this._y=c*g*h+d*u*p,this._z=c*u*p+d*g*h,this._w=c*u*h-d*g*p;break;case"ZYX":this._x=d*u*h-c*g*p,this._y=c*g*h+d*u*p,this._z=c*u*p-d*g*h,this._w=c*u*h+d*g*p;break;case"YZX":this._x=d*u*h+c*g*p,this._y=c*g*h+d*u*p,this._z=c*u*p-d*g*h,this._w=c*u*h-d*g*p;break;case"XZY":this._x=d*u*h-c*g*p,this._y=c*g*h-d*u*p,this._z=c*u*p+d*g*h,this._w=c*u*h+d*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new B,Ol=new Ei;class Ai{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),zs.subVectors(this.max,hs),Pi.subVectors(t.a,hs),Li.subVectors(t.b,hs),Ii.subVectors(t.c,hs),kn.subVectors(Li,Pi),Vn.subVectors(Ii,Li),li.subVectors(Pi,Ii);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-li.z,li.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,li.z,0,-li.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-li.y,li.x,0];return!no(e,Pi,Li,Ii,zs)||(e=[1,0,0,0,1,0,0,0,1],!no(e,Pi,Li,Ii,zs))?!1:(Hs.crossVectors(kn,Vn),e=[Hs.x,Hs.y,Hs.z],no(e,Pi,Li,Ii,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new B,new B,new B,new B,new B,new B,new B,new B],an=new B,Bs=new Ai,Pi=new B,Li=new B,Ii=new B,kn=new B,Vn=new B,li=new B,hs=new B,zs=new B,Hs=new B,ci=new B;function no(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ud=new Ai,ds=new B,io=new B;class as{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(io)),this.expandByPoint(ds.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new B,so=new B,ks=new B,Gn=new B,ro=new B,Vs=new B,oo=new B;class nl{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){so.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(so);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=Gn.dot(this.direction),l=-Gn.dot(ks),c=Gn.lengthSq(),u=Math.abs(1-o*o);let h,d,g,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(so).addScaledVector(ks,d),g}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){ro.subVectors(e,t),Vs.subVectors(n,t),oo.crossVectors(ro,Vs);let o=this.direction.dot(oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);const l=a*this.direction.dot(Vs.crossVectors(Gn,Vs));if(l<0)return null;const c=a*this.direction.dot(ro.cross(Gn));if(c<0||l+c>o)return null;const u=-a*Gn.dot(oo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,c,u,h,d,g,p,_,f){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,g,p,_,f)}set(t,e,n,s,r,o,a,l,c,u,h,d,g,p,_,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=g,m[7]=p,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,g=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=g+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+g*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,g=l*h,p=c*u,_=c*h;e[0]=d+_*a,e[4]=p*a-g,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=g*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,g=l*h,p=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=p+g*a,e[1]=g+p*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,g=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=p*c-g,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=g*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,g=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=p*h+g,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*h+p,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,g=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=g*h-p,e[2]=p*h-g,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Od)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Wn.crossVectors(n,qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Wn.crossVectors(n,qe)),Wn.normalize(),Gs.crossVectors(qe,Wn),s[0]=Wn.x,s[4]=Gs.x,s[8]=qe.x,s[1]=Wn.y,s[5]=Gs.y,s[9]=qe.y,s[2]=Wn.z,s[6]=Gs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],g=n[13],p=n[2],_=n[6],f=n[10],m=n[14],M=n[3],v=n[7],y=n[11],w=n[15],b=s[0],A=s[4],C=s[8],P=s[12],x=s[1],S=s[5],I=s[9],U=s[13],F=s[2],$=s[6],R=s[10],N=s[14],O=s[3],lt=s[7],K=s[11],st=s[15];return r[0]=o*b+a*x+l*F+c*O,r[4]=o*A+a*S+l*$+c*lt,r[8]=o*C+a*I+l*R+c*K,r[12]=o*P+a*U+l*N+c*st,r[1]=u*b+h*x+d*F+g*O,r[5]=u*A+h*S+d*$+g*lt,r[9]=u*C+h*I+d*R+g*K,r[13]=u*P+h*U+d*N+g*st,r[2]=p*b+_*x+f*F+m*O,r[6]=p*A+_*S+f*$+m*lt,r[10]=p*C+_*I+f*R+m*K,r[14]=p*P+_*U+f*N+m*st,r[3]=M*b+v*x+y*F+w*O,r[7]=M*A+v*S+y*$+w*lt,r[11]=M*C+v*I+y*R+w*K,r[15]=M*P+v*U+y*N+w*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],g=t[14],p=t[3],_=t[7],f=t[11],m=t[15];return p*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*g-n*l*g)+_*(+e*l*g-e*c*d+r*o*d-s*o*g+s*c*u-r*l*u)+f*(+e*c*h-e*a*g-r*o*h+n*o*g+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],g=t[11],p=t[12],_=t[13],f=t[14],m=t[15],M=h*f*c-_*d*c+_*l*g-a*f*g-h*l*m+a*d*m,v=p*d*c-u*f*c-p*l*g+o*f*g+u*l*m-o*d*m,y=u*_*c-p*h*c+p*a*g-o*_*g-u*a*m+o*h*m,w=p*h*l-u*_*l-p*a*d+o*_*d+u*a*f-o*h*f,b=e*M+n*v+s*y+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=M*A,t[1]=(_*d*r-h*f*r-_*s*g+n*f*g+h*s*m-n*d*m)*A,t[2]=(a*f*r-_*l*r+_*s*c-n*f*c-a*s*m+n*l*m)*A,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*g-n*l*g)*A,t[4]=v*A,t[5]=(u*f*r-p*d*r+p*s*g-e*f*g-u*s*m+e*d*m)*A,t[6]=(p*l*r-o*f*r-p*s*c+e*f*c+o*s*m-e*l*m)*A,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*g+e*l*g)*A,t[8]=y*A,t[9]=(p*h*r-u*_*r-p*n*g+e*_*g+u*n*m-e*h*m)*A,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*m+e*a*m)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*g-e*a*g)*A,t[12]=w*A,t[13]=(u*_*s-p*h*s+p*n*d-e*_*d-u*n*f+e*h*f)*A,t[14]=(p*a*s-o*_*s-p*n*l+e*_*l+o*n*f-e*a*f)*A,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,g=r*u,p=r*h,_=o*u,f=o*h,m=a*h,M=l*c,v=l*u,y=l*h,w=n.x,b=n.y,A=n.z;return s[0]=(1-(_+m))*w,s[1]=(g+y)*w,s[2]=(p-v)*w,s[3]=0,s[4]=(g-y)*b,s[5]=(1-(d+m))*b,s[6]=(f+M)*b,s[7]=0,s[8]=(p+v)*A,s[9]=(f-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const o=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,u=1/o,h=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let g,p;if(a===Nn)g=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Rr)g=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,g=(n+s)*u;let p,_;if(a===Nn)p=(o+r)*h,_=-2*h;else if(a===Rr)p=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new B,ln=new se,Nd=new B(0,0,0),Od=new B(1,1,1),Wn=new B,Gs=new B,qe=new B,Fl=new se,Bl=new Ei;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const zl=new B,Ui=new Ei,Cn=new se,Ws=new B,fs=new B,Bd=new B,zd=new Ei,Hl=new B(1,0,0),kl=new B(0,1,0),Vl=new B(0,0,1),Gl={type:"added"},Hd={type:"removed"},Ni={type:"childadded",child:null},ao={type:"childremoved",child:null};class Ee extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new B,e=new An,n=new Ei,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Yt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(fs,Ws,this.up):Cn.lookAt(Ws,fs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gl),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gl),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),g=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new B(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new B,Rn=new B,lo=new B,Pn=new B,Oi=new B,Fi=new B,Wl=new B,co=new B,uo=new B,ho=new B,fo=new ie,po=new ie,mo=new ie;class pn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Rn.subVectors(n,e),lo.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Rn),l=cn.dot(lo),c=Rn.dot(Rn),u=Rn.dot(lo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-g-p,p,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fo,r.x),o.addScaledVector(po,r.y),o.addScaledVector(mo,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Rn.subVectors(t,e),cn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,n),Fi.subVectors(r,n),co.subVectors(t,n);const l=Oi.dot(co),c=Fi.dot(co);if(l<=0&&c<=0)return e.copy(n);uo.subVectors(t,s);const u=Oi.dot(uo),h=Fi.dot(uo);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Oi,o);ho.subVectors(t,r);const g=Oi.dot(ho),p=Fi.dot(ho);if(p>=0&&g<=p)return e.copy(r);const _=g*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Fi,a);const f=u*p-g*h;if(f<=0&&h-u>=0&&g-p>=0)return Wl.subVectors(r,s),a=(h-u)/(h-u+(g-p)),e.copy(s).addScaledVector(Wl,a);const m=1/(f+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Sd(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=go(o,r,t+1/3),this.g=go(o,r,t),this.b=go(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return te.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ue(Pe.r*255,0,255))*65536+Math.round(Ue(Pe.g*255,0,255))*256+Math.round(Ue(Pe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=dn){te.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Xs);const n=Zr(Xn.h,Xs.h,e),s=Zr(Xn.s,Xs.s,e),r=Zr(Xn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Vt;Vt.NAMES=Uu;let kd=0;class Ti extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=qi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vr extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new B,Ys=new It;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}}class Nu extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ou extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const tn=new se,_o=new Ee,Bi=new B,je=new Ai,ps=new Ai,Me=new B;class Be extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?Ou:Nu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(je.min,ps.min),je.expandByPoint(Me),Me.addVectors(je.max,ps.max),je.expandByPoint(Me)):(je.expandByPoint(ps.min),je.expandByPoint(ps.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),Me.add(Bi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,d=new It,g=new It,p=new It,_=new B,f=new B;function m(C,P,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,P),p.fromBufferAttribute(r,x),u.sub(c),h.sub(c),g.sub(d),p.sub(d);const S=1/(g.x*p.y-p.x*g.y);isFinite(S)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-g.y).multiplyScalar(S),f.copy(h).multiplyScalar(g.x).addScaledVector(u,-p.x).multiplyScalar(S),a[C].add(_),a[P].add(_),a[x].add(_),l[C].add(f),l[P].add(f),l[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,P=M.length;C<P;++C){const x=M[C],S=x.start,I=x.count;for(let U=S,F=S+I;U<F;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new B,y=new B,w=new B,b=new B;function A(C){w.fromBufferAttribute(s,C),b.copy(w);const P=a[C];v.copy(P),v.sub(w.multiplyScalar(w.dot(P))).normalize(),y.crossVectors(b,P);const S=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,S)}for(let C=0,P=M.length;C<P;++C){const x=M[C],S=x.start,I=x.count;for(let U=S,F=S+I;U<F;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,g=t.count;d<g;d+=3){const p=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,p=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*u;for(let m=0;m<u;m++)d[p++]=c[g++]}return new Je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=t(d,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new se,ui=new nl,$s=new as,Yl=new B,qs=new B,js=new B,Ks=new B,vo=new B,Zs=new B,$l=new B,Js=new B;class ae extends Ee{constructor(t=new Be,e=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(vo.fromBufferAttribute(h,t),o?Zs.addScaledVector(vo,u):Zs.addScaledVector(vo.sub(e),u))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!($s.containsPoint(ui.origin)===!1&&(ui.intersectSphere($s,Yl)===null||ui.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const f=d[p],m=o[f.materialIndex],M=Math.max(f.start,g.start),v=Math.min(a.count,Math.min(f.start+f.count,g.start+g.count));for(let y=M,w=v;y<w;y+=3){const b=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);s=Qs(this,m,t,n,c,u,h,b,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let f=p,m=_;f<m;f+=3){const M=a.getX(f),v=a.getX(f+1),y=a.getX(f+2);s=Qs(this,o,t,n,c,u,h,M,v,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const f=d[p],m=o[f.materialIndex],M=Math.max(f.start,g.start),v=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let y=M,w=v;y<w;y+=3){const b=y,A=y+1,C=y+2;s=Qs(this,m,t,n,c,u,h,b,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let f=p,m=_;f<m;f+=3){const M=f,v=f+1,y=f+2;s=Qs(this,o,t,n,c,u,h,M,v,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Gd(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,js),i.getVertexPosition(c,Ks);const u=Gd(i,t,e,n,qs,js,Ks,$l);if(u){const h=new B;pn.getBarycoord($l,qs,js,Ks,h),s&&(u.uv=pn.getInterpolatedAttribute(s,a,l,c,h,new It)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,l,c,h,new It)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};pn.getNormal(qs,js,Ks,d.normal),u.face=d,u.barycoord=h}return u}class Qn extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function p(_,f,m,M,v,y,w,b,A,C,P){const x=y/A,S=w/C,I=y/2,U=w/2,F=b/2,$=A+1,R=C+1;let N=0,O=0;const lt=new B;for(let K=0;K<R;K++){const st=K*S-U;for(let gt=0;gt<$;gt++){const St=gt*x-I;lt[_]=St*M,lt[f]=st*v,lt[m]=F,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[f]=0,lt[m]=b>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(gt/A),h.push(1-K/C),N+=1}}for(let K=0;K<C;K++)for(let st=0;st<A;st++){const gt=d+st+$*K,St=d+st+$*(K+1),X=d+(st+1)+$*(K+1),Q=d+(st+1)+$*K;l.push(gt,St,Q),l.push(St,X,Q),O+=6}a.addGroup(g,O,P),g+=O,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function Wd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Lr={clone:rs,merge:De};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bu extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new B,ql=new It,jl=new It;class Ve extends Bu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,ql,jl),e.subVectors(jl,ql)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zi=-90,Hi=1;class $d extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(zi,Hi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(zi,Hi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(zi,Hi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(zi,Hi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(zi,Hi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(zi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,g),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class zu extends Fe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Fn});r.uniforms.tEquirect.value=e;const o=new ae(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=fn),new $d(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const xo=new B,jd=new B,Kd=new Yt;class qn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xo.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new as,tr=new B;class il{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],g=s[8],p=s[9],_=s[10],f=s[11],m=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,f-g,y-m).normalize(),n[1].setComponents(l+r,d+c,f+g,y+m).normalize(),n[2].setComponents(l+o,d+u,f+p,y+M).normalize(),n[3].setComponents(l-o,d-u,f-p,y-M).normalize(),n[4].setComponents(l-a,d-h,f-_,y-v).normalize(),e===Nn)n[5].setComponents(l+a,d+h,f+_,y+v).normalize();else if(e===Rr)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((g,p)=>g.start-p.start);let d=0;for(let g=1;g<h.length;g++){const p=h[d],_=h[g];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let g=0,p=h.length;g<p;g++){const _=h[g];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ps extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,g=[],p=[],_=[],f=[];for(let m=0;m<u;m++){const M=m*d-o;for(let v=0;v<c;v++){const y=v*h-r;p.push(y,-M,0),_.push(0,0,1),f.push(v/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,y=M+c*(m+1),w=M+1+c*(m+1),b=M+1+c*m;g.push(v,y,b),g.push(y,w,b)}this.setIndex(g),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,af=`#ifdef USE_BATCHING
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
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,df=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`
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
}`,Lf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
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
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
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
}`,Jf=`
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,xm=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,bm=`#define TOON
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
}`,Am=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Rm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Jd,alphahash_pars_fragment:Qd,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:sf,aomap_fragment:rf,aomap_pars_fragment:of,batching_pars_vertex:af,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:uf,bsdfs:hf,iridescence_fragment:df,bumpmap_pars_fragment:ff,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:vf,color_pars_fragment:xf,color_pars_vertex:Mf,color_vertex:yf,common:Sf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:bf,displacementmap_pars_vertex:Af,displacementmap_vertex:Tf,emissivemap_fragment:wf,emissivemap_pars_fragment:Cf,colorspace_fragment:Rf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:If,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Of,fog_pars_vertex:Ff,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:Yf,lights_toon_pars_fragment:$f,lights_phong_fragment:qf,lights_phong_pars_fragment:jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:up,morphinstance_vertex:hp,morphcolor_vertex:dp,morphnormal_vertex:fp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:xp,normal_vertex:Mp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Ap,opaque_fragment:Tp,packing:wp,premultiplied_alpha_fragment:Cp,project_vertex:Rp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Op,shadowmask_pars_fragment:Fp,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:Hp,skinnormal_vertex:kp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:Yp,transmission_pars_fragment:$p,uv_pars_fragment:qp,uv_pars_vertex:jp,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:um,linedashed_frag:hm,meshbasic_vert:dm,meshbasic_frag:fm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:xm,meshphong_vert:Mm,meshphong_frag:ym,meshphysical_vert:Sm,meshphysical_frag:Em,meshtoon_vert:bm,meshtoon_frag:Am,points_vert:Tm,points_frag:wm,shadow_vert:Cm,shadow_frag:Rm,sprite_vert:Pm,sprite_frag:Lm},_t={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Mn={basic:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:De([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:De([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:De([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:De([_t.points,_t.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:De([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:De([_t.common,_t.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:De([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:De([_t.sprite,_t.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:De([_t.common,_t.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:De([_t.lights,_t.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Mn.physical={uniforms:De([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const er={r:0,b:0,g:0},di=new An,Im=new se;function Dm(i,t,e,n,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,u,h=null,d=0,g=null;function p(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const y=p(M);y===null?m(a,l):y&&y.isColor&&(m(y,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,v){const y=p(v);y&&(y.isCubeTexture||y.mapping===Hr)?(u===void 0&&(u=new ae(new Qn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:rs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(v.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(di)),u.material.toneMapped=te.getTransfer(y.colorSpace)!==oe,(h!==y||d!==y.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,g=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ae(new Ps(2,2),new We({name:"BackgroundMaterial",uniforms:rs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,g=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(er,Fu(i)),n.buffers.color.setClear(er.r,er.g,er.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:f}}function Um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,S,I,U,F){let $=!1;const R=h(U,I,S);r!==R&&(r=R,c(r.object)),$=g(x,U,I,F),$&&p(x,U,I,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(x,S,I,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,S,I){const U=I.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let $=F[S.id];$===void 0&&($={},F[S.id]=$);let R=$[U];return R===void 0&&(R=d(l()),$[U]=R),R}function d(x){const S=[],I=[],U=[];for(let F=0;F<e;F++)S[F]=0,I[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:I,attributeDivisors:U,object:x,attributes:{},index:null}}function g(x,S,I,U){const F=r.attributes,$=S.attributes;let R=0;const N=I.getAttributes();for(const O in N)if(N[O].location>=0){const K=F[O];let st=$[O];if(st===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),K===void 0||K.attribute!==st||st&&K.data!==st.data)return!0;R++}return r.attributesNum!==R||r.index!==U}function p(x,S,I,U){const F={},$=S.attributes;let R=0;const N=I.getAttributes();for(const O in N)if(N[O].location>=0){let K=$[O];K===void 0&&(O==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),O==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const st={};st.attribute=K,K&&K.data&&(st.data=K.data),F[O]=st,R++}r.attributes=F,r.attributesNum=R,r.index=U}function _(){const x=r.newAttributes;for(let S=0,I=x.length;S<I;S++)x[S]=0}function f(x){m(x,0)}function m(x,S){const I=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;I[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),F[x]!==S&&(i.vertexAttribDivisor(x,S),F[x]=S)}function M(){const x=r.newAttributes,S=r.enabledAttributes;for(let I=0,U=S.length;I<U;I++)S[I]!==x[I]&&(i.disableVertexAttribArray(I),S[I]=0)}function v(x,S,I,U,F,$,R){R===!0?i.vertexAttribIPointer(x,S,I,F,$):i.vertexAttribPointer(x,S,I,U,F,$)}function y(x,S,I,U){_();const F=U.attributes,$=I.getAttributes(),R=S.defaultAttributeValues;for(const N in $){const O=$[N];if(O.location>=0){let lt=F[N];if(lt===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const K=lt.normalized,st=lt.itemSize,gt=t.get(lt);if(gt===void 0)continue;const St=gt.buffer,X=gt.type,Q=gt.bytesPerElement,ft=X===i.INT||X===i.UNSIGNED_INT||lt.gpuType===qa;if(lt.isInterleavedBufferAttribute){const ht=lt.data,mt=ht.stride,Et=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<O.locationSize;Ot++)m(O.location+Ot,ht.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<O.locationSize;Ot++)f(O.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ot=0;Ot<O.locationSize;Ot++)v(O.location+Ot,st/O.locationSize,X,K,mt*Q,(Et+st/O.locationSize*Ot)*Q,ft)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<O.locationSize;ht++)m(O.location+ht,lt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<O.locationSize;ht++)f(O.location+ht);i.bindBuffer(i.ARRAY_BUFFER,St);for(let ht=0;ht<O.locationSize;ht++)v(O.location+ht,st/O.locationSize,X,K,st*Q,st/O.locationSize*ht*Q,ft)}}else if(R!==void 0){const K=R[N];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(O.location,K);break;case 3:i.vertexAttrib3fv(O.location,K);break;case 4:i.vertexAttrib4fv(O.location,K);break;default:i.vertexAttrib1fv(O.location,K)}}}}M()}function w(){C();for(const x in n){const S=n[x];for(const I in S){const U=S[I];for(const F in U)u(U[F].object),delete U[F];delete S[I]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const S=n[x.id];for(const I in S){const U=S[I];for(const F in U)u(U[F].object),delete U[F];delete S[I]}delete n[x.id]}function A(x){for(const S in n){const I=n[S];if(I[x.id]===void 0)continue;const U=I[x.id];for(const F in U)u(U[F].object),delete U[F];delete I[x.id]}}function C(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let p=0;p<h;p++)g+=u[p];e.update(g,n,1)}function l(c,u,h,d){if(h===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];for(let _=0;_<d.length;_++)e.update(p,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Om(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Sn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:b}}function Fm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new qn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||s;return s=d,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,g){const p=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||r&&!f)r?u(null):c();else{const M=r?0:n,v=M*4;let y=m.clippingState||null;l.value=y,y=u(p,d,v,g);for(let w=0;w!==v;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,g,p){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,p!==!0||f===null){const m=g+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,y=g;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(f,y),f[y+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Bm(i){let t=new WeakMap;function e(o,a){return a===oa?o.mapping=es:a===aa&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===aa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class sl extends Bu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Kl=[.125,.215,.35,.446,.526,.582],gi=20,Mo=new sl,Zl=new Vt;let yo=null,So=0,Eo=0,bo=!1;const pi=(1+Math.sqrt(5))/2,ki=1/pi,Jl=[new B(-pi,ki,0),new B(pi,ki,0),new B(-ki,0,pi),new B(ki,0,pi),new B(0,pi,-ki),new B(0,pi,ki),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo,So,Eo),this._renderer.xr.enabled=bo,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Bn,format:_n,colorSpace:ii,depthBuffer:!1},s=tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Hm(r,t,e)}return s}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zl),u.toneMapping=Jn,u.autoClear=!1;const g=new Vr({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),p=new ae(new Qn,g);let _=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,_=!0):(g.color.copy(Zl),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;nr(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(s-r-1)%Jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*gi-1),_=r/p,f=isFinite(r)?1+Math.floor(u*_):gi;f>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gi}`);const m=[];let M=0;for(let A=0;A<gi;++A){const C=A/_,P=Math.exp(-C*C/2);m.push(P),A===0?M+=P:A<f&&(M+=2*P)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;const y=this._sizeLods[s],w=3*y*(s>v-Yi?s-v+Yi:0),b=4*(this._cubeSize-y);nr(e,w,b,3*y,2*y),l.setRenderTarget(e),l.render(h,Mo)}}function zm(i){const t=[],e=[],n=[];let s=i;const r=i-Yi+1+Kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Yi?l=Kl[o-i+Yi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,p=6,_=3,f=2,m=1,M=new Float32Array(_*p*g),v=new Float32Array(f*p*g),y=new Float32Array(m*p*g);for(let b=0;b<g;b++){const A=b%3*2/3-1,C=b>2?0:-1,P=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];M.set(P,_*p*b),v.set(d,f*p*b);const x=[b,b,b,b,b,b];y.set(x,m*p*b)}const w=new Be;w.setAttribute("position",new Je(M,_)),w.setAttribute("uv",new Je(v,f)),w.setAttribute("faceIndex",new Je(y,m)),t.push(w),s>Yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tc(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){const n=new Float32Array(gi),s=new B(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ec(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function nc(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function km(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===oa||l===aa,u=l===es||l===ns;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ql(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&s(g)?(e===null&&(e=new Ql(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let f=0,m=_.length;f<m;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const g=h.morphAttributes;for(const p in g){const _=g[p];for(let f=0,m=_.length;f<m;f++)t.update(_[f],i.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,p=h.attributes.position;let _=0;if(g!==null){const M=g.array;_=g.version;for(let v=0,y=M.length;v<y;v+=3){const w=M[v+0],b=M[v+1],A=M[v+2];d.push(w,b,b,A,A,w)}}else if(p!==void 0){const M=p.array;_=p.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const w=v+0,b=v+1,A=v+2;d.push(w,b,b,A,A,w)}}else return;const f=new(Pu(d)?Ou:Nu)(d,1);f.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,f)}function u(h){const d=r.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Wm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*o),e.update(g,n,1)}function c(d,g,p){p!==0&&(i.drawElementsInstanced(n,g,r,d*o,p),e.update(g,n,p))}function u(d,g,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,p);let f=0;for(let m=0;m<p;m++)f+=g[m];e.update(f,n,1)}function h(d,g,p,_){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/o,g[m],_[m]);else{f.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,_,0,p);let m=0;for(let M=0;M<p;M++)m+=g[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Xm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let P=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),p===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*w*4*h),A=new Iu(b,y,w,h);A.type=Sn,A.needsUpdate=!0;const C=v*4;for(let x=0;x<h;x++){const S=f[x],I=m[x],U=M[x],F=y*w*4*x;for(let $=0;$<S.count;$++){const R=$*C;g===!0&&(s.fromBufferAttribute(S,$),b[F+R+0]=s.x,b[F+R+1]=s.y,b[F+R+2]=s.z,b[F+R+3]=0),p===!0&&(s.fromBufferAttribute(I,$),b[F+R+4]=s.x,b[F+R+5]=s.y,b[F+R+6]=s.z,b[F+R+7]=0),_===!0&&(s.fromBufferAttribute(U,$),b[F+R+8]=s.x,b[F+R+9]=s.y,b[F+R+10]=s.z,b[F+R+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new It(y,w)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let _=0;_<c.length;_++)g+=c[_];const p=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $m(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ku extends Fe{constructor(t,e,n,s,r,o,a,l,c,u=ji){if(u!==ji&&u!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ji&&(n=Si),n===void 0&&u===ss&&(n=is),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vu=new Fe,ic=new ku(1,1),Gu=new Iu,Wu=new Dd,Xu=new zu,sc=[],rc=[],oc=new Float32Array(16),ac=new Float32Array(9),lc=new Float32Array(4);function ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sc[s];if(r===void 0&&(r=new Float32Array(s),sc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gr(i,t){let e=rc[t];e===void 0&&(e=new Int32Array(t),rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),ve(e,n)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ac.set(n),i.uniformMatrix3fv(this.addr,!1,ac),ve(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),ve(e,n)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=Ru,r=ic):r=Vu,e.setTexture2D(t||r,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wu,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xu,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gu,s)}function fg(i){switch(i){case 5126:return qm;case 35664:return jm;case 35665:return Km;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return dg}}function pg(i,t){i.uniform1fv(this.addr,t)}function mg(i,t){const e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function gg(i,t){const e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){const e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){const e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xg(i,t){const e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){const e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function bg(i,t){i.uniform4iv(this.addr,t)}function Ag(i,t){i.uniform1uiv(this.addr,t)}function Tg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Rg(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vu,r[o])}function Pg(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wu,r[o])}function Lg(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xu,r[o])}function Ig(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gu,r[o])}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return yg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return bg;case 5125:return Ag;case 36294:return Tg;case 36295:return wg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fg(e.type)}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dg(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function cc(i,t){i.seq.push(t),i.map[t.id]=t}function Fg(i,t,e){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cc(e,c===void 0?new Ug(a,i,t):new Ng(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Og(a),cc(e,h)),e=h}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bg=37297;let zg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function kg(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Cr&&e===wr?n="LinearDisplayP3ToLinearSRGB":t===wr&&e===Cr&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case kr:return[n,"LinearTransferOETF"];case dn:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(t),o)}else return s}function Vg(i,t){const e=kg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gg(i,t){let e;switch(t){case sd:e="Linear";break;case rd:e="Reinhard";break;case od:e="Cineon";break;case _u:e="ACESFilmic";break;case ld:e="AgX";break;case cd:e="Neutral";break;case ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new B;function Wg(){te.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function Yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(qg,Kg)}const jg=new Map;function Kg(i,t){let e=Xt[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(Zg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gu:t="ENVMAP_BLENDING_MULTIPLY";break;case nd:t="ENVMAP_BLENDING_MIX";break;case id:t="ENVMAP_BLENDING_ADD";break}return t}function i0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function s0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Qg(e),c=t0(e),u=e0(e),h=n0(e),d=i0(e),g=Xg(e),p=Yg(r),_=s.createProgram();let f,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(bs).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(bs).join(`
`),m.length>0&&(m+=`
`)):(f=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),m=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Ba(o),o=dc(o,e),o=fc(o,e),a=Ba(a),a=dc(a,e),a=fc(a,e),o=pc(o),a=pc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+f+o,y=M+m+a,w=uc(s,s.VERTEX_SHADER,v),b=uc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(S){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(w).trim(),F=s.getShaderInfoLog(b).trim();let $=!0,R=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,b);else{const N=hc(s,w,"vertex"),O=hc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+I+`
`+N+`
`+O)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||F==="")&&(R=!1);R&&(S.diagnostics={runnable:$,programLog:I,vertexShader:{log:U,prefix:f},fragmentShader:{log:F,prefix:m}})}s.deleteShader(w),s.deleteShader(b),C=new Mr(s,_),P=$g(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let P;this.getAttributes=function(){return P===void 0&&A(this),P};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Bg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let r0=0;class o0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a0(t),e.set(t,n)),n}}class a0{constructor(t){this.id=r0++,this.code=t,this.usedTimes=0}}function l0(i,t,e,n,s,r,o){const a=new Du,l=new o0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,g=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,I,U,F){const $=U.fog,R=F.geometry,N=x.isMeshStandardMaterial?U.environment:null,O=(x.isMeshStandardMaterial?e:t).get(x.envMap||N),lt=O&&O.mapping===Hr?O.image.height:null,K=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const st=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,gt=st!==void 0?st.length:0;let St=0;R.morphAttributes.position!==void 0&&(St=1),R.morphAttributes.normal!==void 0&&(St=2),R.morphAttributes.color!==void 0&&(St=3);let X,Q,ft,ht;if(K){const we=Mn[K];X=we.vertexShader,Q=we.fragmentShader}else X=x.vertexShader,Q=x.fragmentShader,l.update(x),ft=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const mt=i.getRenderTarget(),Et=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,kt=!!x.map,Ft=!!x.matcap,D=!!O,Kt=!!x.aoMap,Lt=!!x.lightMap,Bt=!!x.bumpMap,Ct=!!x.normalMap,Wt=!!x.displacementMap,Rt=!!x.emissiveMap,L=!!x.metalnessMap,E=!!x.roughnessMap,W=x.anisotropy>0,et=x.clearcoat>0,at=x.dispersion>0,nt=x.iridescence>0,Y=x.sheen>0,q=x.transmission>0,it=W&&!!x.anisotropyMap,Tt=et&&!!x.clearcoatMap,V=et&&!!x.clearcoatNormalMap,tt=et&&!!x.clearcoatRoughnessMap,ot=nt&&!!x.iridescenceMap,ct=nt&&!!x.iridescenceThicknessMap,dt=Y&&!!x.sheenColorMap,bt=Y&&!!x.sheenRoughnessMap,At=!!x.specularMap,Gt=!!x.specularColorMap,z=!!x.specularIntensityMap,xt=q&&!!x.transmissionMap,Z=q&&!!x.thicknessMap,rt=!!x.gradientMap,vt=!!x.alphaMap,Mt=x.alphaTest>0,jt=!!x.alphaHash,ue=!!x.extensions;let be=Jn;x.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(be=i.toneMapping);const Zt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:Q,defines:x.defines,customVertexShaderID:ft,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:Et,instancingColor:Et&&F.instanceColor!==null,instancingMorph:Et&&F.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ii,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:Ft,envMap:D,envMapMode:D&&O.mapping,envMapCubeUVHeight:lt,aoMap:Kt,lightMap:Lt,bumpMap:Bt,normalMap:Ct,displacementMap:g&&Wt,emissiveMap:Rt,normalMapObjectSpace:Ct&&x.normalMapType===fd,normalMapTangentSpace:Ct&&x.normalMapType===Cu,metalnessMap:L,roughnessMap:E,anisotropy:W,anisotropyMap:it,clearcoat:et,clearcoatMap:Tt,clearcoatNormalMap:V,clearcoatRoughnessMap:tt,dispersion:at,iridescence:nt,iridescenceMap:ot,iridescenceThicknessMap:ct,sheen:Y,sheenColorMap:dt,sheenRoughnessMap:bt,specularMap:At,specularColorMap:Gt,specularIntensityMap:z,transmission:q,transmissionMap:xt,thicknessMap:Z,gradientMap:rt,opaque:x.transparent===!1&&x.blending===qi&&x.alphaToCoverage===!1,alphaMap:vt,alphaTest:Mt,alphaHash:jt,combine:x.combine,mapUv:kt&&f(x.map.channel),aoMapUv:Kt&&f(x.aoMap.channel),lightMapUv:Lt&&f(x.lightMap.channel),bumpMapUv:Bt&&f(x.bumpMap.channel),normalMapUv:Ct&&f(x.normalMap.channel),displacementMapUv:Wt&&f(x.displacementMap.channel),emissiveMapUv:Rt&&f(x.emissiveMap.channel),metalnessMapUv:L&&f(x.metalnessMap.channel),roughnessMapUv:E&&f(x.roughnessMap.channel),anisotropyMapUv:it&&f(x.anisotropyMap.channel),clearcoatMapUv:Tt&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:V&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&f(x.sheenRoughnessMap.channel),specularMapUv:At&&f(x.specularMap.channel),specularColorMapUv:Gt&&f(x.specularColorMap.channel),specularIntensityMapUv:z&&f(x.specularIntensityMap.channel),transmissionMapUv:xt&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:vt&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ct||W),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!R.attributes.uv&&(kt||vt),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function M(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)S.push(I),S.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function w(x){const S=_[x.type];let I;if(S){const U=Mn[S];I=Lr.clone(U.uniforms)}else I=x.uniforms;return I}function b(x,S){let I;for(let U=0,F=u.length;U<F;U++){const $=u[U];if($.cacheKey===S){I=$,++I.usedTimes;break}}return I===void 0&&(I=new s0(i,S,x,r),u.push(I)),I}function A(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function C(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:w,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function c0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,g,p,_,f){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:g,groupOrder:p,renderOrder:h.renderOrder,z:_,group:f},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=g,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=f),t++,m}function a(h,d,g,p,_,f){const m=o(h,d,g,p,_,f);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):e.push(m)}function l(h,d,g,p,_,f){const m=o(h,d,g,p,_,f);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||u0),n.length>1&&n.sort(d||gc),s.length>1&&s.sort(d||gc)}function u(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function h0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _c,i.set(n,[o])):s>=r.length?(o=new _c,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Vt};break;case"SpotLight":e={position:new B,direction:new B,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function f0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let p0=0;function m0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g0(i){const t=new d0,e=f0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new se,o=new se;function a(c){let u=0,h=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,p=0,_=0,f=0,m=0,M=0,v=0,y=0,w=0,b=0,A=0;c.sort(m0);for(let P=0,x=c.length;P<x;P++){const S=c[P],I=S.color,U=S.intensity,F=S.distance,$=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(S.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(S.sh.coefficients[R],U);A++}else if(S.isDirectionalLight){const R=t.get(S);if(R.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const N=S.shadow,O=e.get(S);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=S.shadow.matrix,M++}n.directional[g]=R,g++}else if(S.isSpotLight){const R=t.get(S);R.position.setFromMatrixPosition(S.matrixWorld),R.color.copy(I).multiplyScalar(U),R.distance=F,R.coneCos=Math.cos(S.angle),R.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),R.decay=S.decay,n.spot[_]=R;const N=S.shadow;if(S.map&&(n.spotLightMap[w]=S.map,w++,N.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[_]=N.matrix,S.castShadow){const O=e.get(S);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=$,y++}_++}else if(S.isRectAreaLight){const R=t.get(S);R.color.copy(I).multiplyScalar(U),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=R,f++}else if(S.isPointLight){const R=t.get(S);if(R.color.copy(S.color).multiplyScalar(S.intensity),R.distance=S.distance,R.decay=S.decay,S.castShadow){const N=S.shadow,O=e.get(S);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=S.shadow.matrix,v++}n.point[p]=R,p++}else if(S.isHemisphereLight){const R=t.get(S);R.skyColor.copy(S.color).multiplyScalar(U),R.groundColor.copy(S.groundColor).multiplyScalar(U),n.hemi[m]=R,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==g||C.pointLength!==p||C.spotLength!==_||C.rectAreaLength!==f||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==A)&&(n.directional.length=g,n.spot.length=_,n.rectArea.length=f,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,C.directionalLength=g,C.pointLength=p,C.spotLength=_,C.rectAreaLength=f,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=A,n.version=p0++)}function l(c,u){let h=0,d=0,g=0,p=0,_=0;const f=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),h++}else if(v.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(v.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function vc(i){const t=new g0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new vc(i),t.set(s,[a])):r>=o.length?(a=new vc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class v0 extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x0 extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
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
}`;function S0(i,t,e){let n=new il;const s=new It,r=new It,o=new ie,a=new v0({depthPacking:dd}),l=new x0,c={},u=e.maxTextureSize,h={[ei]:Xe,[Xe]:ei,[Un]:Un},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:M0,fragmentShader:y0}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const p=new Be;p.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(p,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let m=this.type;this.render=function(b,A,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),x=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=m!==Ln&&this.type===Ln,F=m===Ln&&this.type!==Ln;for(let $=0,R=b.length;$<R;$++){const N=b[$],O=N.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const lt=O.getFrameExtents();if(s.multiply(lt),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,O.mapSize.y=r.y)),O.map===null||U===!0||F===!0){const st=this.type!==Ln?{minFilter:Ge,magFilter:Ge}:{};O.map!==null&&O.map.dispose(),O.map=new vn(s.x,s.y,st),O.map.texture.name=N.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const K=O.getViewportCount();for(let st=0;st<K;st++){const gt=O.getViewport(st);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),I.viewport(o),O.updateMatrices(N,st),n=O.getFrustum(),y(A,C,O.camera,N,this.type)}O.isPointLightShadow!==!0&&this.type===Ln&&M(O,C),O.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(P,x,S)};function M(b,A){const C=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,C,g,_,null)}function v(b,A,C,P){let x=null;const S=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)x=S;else if(x=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=x.uuid,U=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let $=F[U];$===void 0&&($=x.clone(),F[U]=$,A.addEventListener("dispose",w)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,P===Ln?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=C}return x}function y(b,A,C,P,x){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const U=t.update(b),F=b.material;if(Array.isArray(F)){const $=U.groups;for(let R=0,N=$.length;R<N;R++){const O=$[R],lt=F[O.materialIndex];if(lt&&lt.visible){const K=v(b,lt,P,x);b.onBeforeShadow(i,b,A,C,U,K,O),i.renderBufferDirect(C,null,U,K,b,O),b.onAfterShadow(i,b,A,C,U,K,O)}}}else if(F.visible){const $=v(b,F,P,x);b.onBeforeShadow(i,b,A,C,U,$,null),i.renderBufferDirect(C,null,U,$,b,null),b.onAfterShadow(i,b,A,C,U,$,null)}}const I=b.children;for(let U=0,F=I.length;U<F;U++)y(I[U],A,C,P,x)}function w(b){b.target.removeEventListener("dispose",w);for(const C in c){const P=c[C],x=b.target.uuid;x in P&&(P[x].dispose(),delete P[x])}}}const E0={[Qo]:ta,[ea]:sa,[na]:ra,[ts]:ia,[ta]:Qo,[sa]:ea,[ra]:na,[ia]:ts};function b0(i){function t(){let z=!1;const xt=new ie;let Z=null;const rt=new ie(0,0,0,0);return{setMask:function(vt){Z!==vt&&!z&&(i.colorMask(vt,vt,vt,vt),Z=vt)},setLocked:function(vt){z=vt},setClear:function(vt,Mt,jt,ue,be){be===!0&&(vt*=ue,Mt*=ue,jt*=ue),xt.set(vt,Mt,jt,ue),rt.equals(xt)===!1&&(i.clearColor(vt,Mt,jt,ue),rt.copy(xt))},reset:function(){z=!1,Z=null,rt.set(-1,0,0,0)}}}function e(){let z=!1,xt=!1,Z=null,rt=null,vt=null;return{setReversed:function(Mt){xt=Mt},setTest:function(Mt){Mt?ft(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!z&&(i.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(xt&&(Mt=E0[Mt]),rt!==Mt){switch(Mt){case Qo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Mt}},setLocked:function(Mt){z=Mt},setClear:function(Mt){vt!==Mt&&(i.clearDepth(Mt),vt=Mt)},reset:function(){z=!1,Z=null,rt=null,vt=null}}}function n(){let z=!1,xt=null,Z=null,rt=null,vt=null,Mt=null,jt=null,ue=null,be=null;return{setTest:function(Zt){z||(Zt?ft(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Zt){xt!==Zt&&!z&&(i.stencilMask(Zt),xt=Zt)},setFunc:function(Zt,we,Ce){(Z!==Zt||rt!==we||vt!==Ce)&&(i.stencilFunc(Zt,we,Ce),Z=Zt,rt=we,vt=Ce)},setOp:function(Zt,we,Ce){(Mt!==Zt||jt!==we||ue!==Ce)&&(i.stencilOp(Zt,we,Ce),Mt=Zt,jt=we,ue=Ce)},setLocked:function(Zt){z=Zt},setClear:function(Zt){be!==Zt&&(i.clearStencil(Zt),be=Zt)},reset:function(){z=!1,xt=null,Z=null,rt=null,vt=null,Mt=null,jt=null,ue=null,be=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],g=null,p=!1,_=null,f=null,m=null,M=null,v=null,y=null,w=null,b=new Vt(0,0,0),A=0,C=!1,P=null,x=null,S=null,I=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,R=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(N)[1]),$=R>=1):N.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),$=R>=2);let O=null,lt={};const K=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),gt=new ie().fromArray(K),St=new ie().fromArray(st);function X(z,xt,Z,rt){const vt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(z,Mt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<Z;jt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(xt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return Mt}const Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),r.setFunc(ts),Lt(!1),Bt(Cl),ft(i.CULL_FACE),D(Fn);function ft(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function ht(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function mt(z,xt){return u[z]!==xt?(i.bindFramebuffer(z,xt),u[z]=xt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Et(z,xt){let Z=d,rt=!1;if(z){Z=h.get(xt),Z===void 0&&(Z=[],h.set(xt,Z));const vt=z.textures;if(Z.length!==vt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,jt=vt.length;Mt<jt;Mt++)Z[Mt]=i.COLOR_ATTACHMENT0+Mt;Z.length=vt.length,rt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,rt=!0);rt&&i.drawBuffers(Z)}function Ot(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const kt={[mi]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};kt[kh]=i.MIN,kt[Vh]=i.MAX;const Ft={[Gh]:i.ZERO,[Wh]:i.ONE,[Xh]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function D(z,xt,Z,rt,vt,Mt,jt,ue,be,Zt){if(z===Fn){p===!0&&(ht(i.BLEND),p=!1);return}if(p===!1&&(ft(i.BLEND),p=!0),z!==Bh){if(z!==_||Zt!==C){if((f!==mi||v!==mi)&&(i.blendEquation(i.FUNC_ADD),f=mi,v=mi),Zt)switch(z){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,M=null,y=null,w=null,b.set(0,0,0),A=0,_=z,C=Zt}return}vt=vt||xt,Mt=Mt||Z,jt=jt||rt,(xt!==f||vt!==v)&&(i.blendEquationSeparate(kt[xt],kt[vt]),f=xt,v=vt),(Z!==m||rt!==M||Mt!==y||jt!==w)&&(i.blendFuncSeparate(Ft[Z],Ft[rt],Ft[Mt],Ft[jt]),m=Z,M=rt,y=Mt,w=jt),(ue.equals(b)===!1||be!==A)&&(i.blendColor(ue.r,ue.g,ue.b,be),b.copy(ue),A=be),_=z,C=!1}function Kt(z,xt){z.side===Un?ht(i.CULL_FACE):ft(i.CULL_FACE);let Z=z.side===Xe;xt&&(Z=!Z),Lt(Z),z.blending===qi&&z.transparent===!1?D(Fn):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const rt=z.stencilWrite;o.setTest(rt),rt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function Bt(z){z!==Oh?(ft(i.CULL_FACE),z!==x&&(z===Cl?i.cullFace(i.BACK):z===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),x=z}function Ct(z){z!==S&&($&&i.lineWidth(z),S=z)}function Wt(z,xt,Z){z?(ft(i.POLYGON_OFFSET_FILL),(I!==xt||U!==Z)&&(i.polygonOffset(xt,Z),I=xt,U=Z)):ht(i.POLYGON_OFFSET_FILL)}function Rt(z){z?ft(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function L(z){z===void 0&&(z=i.TEXTURE0+F-1),O!==z&&(i.activeTexture(z),O=z)}function E(z,xt,Z){Z===void 0&&(O===null?Z=i.TEXTURE0+F-1:Z=O);let rt=lt[Z];rt===void 0&&(rt={type:void 0,texture:void 0},lt[Z]=rt),(rt.type!==z||rt.texture!==xt)&&(O!==Z&&(i.activeTexture(Z),O=Z),i.bindTexture(z,xt||Q[z]),rt.type=z,rt.texture=xt)}function W(){const z=lt[O];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(z){gt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),gt.copy(z))}function dt(z){St.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),St.copy(z))}function bt(z,xt){let Z=l.get(xt);Z===void 0&&(Z=new WeakMap,l.set(xt,Z));let rt=Z.get(z);rt===void 0&&(rt=i.getUniformBlockIndex(xt,z.name),Z.set(z,rt))}function At(z,xt){const rt=l.get(xt).get(z);a.get(xt)!==rt&&(i.uniformBlockBinding(xt,rt,z.__bindingPointIndex),a.set(xt,rt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},O=null,lt={},u={},h=new WeakMap,d=[],g=null,p=!1,_=null,f=null,m=null,M=null,v=null,y=null,w=null,b=new Vt(0,0,0),A=0,C=!1,P=null,x=null,S=null,I=null,U=null,gt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ft,disable:ht,bindFramebuffer:mt,drawBuffers:Et,useProgram:Ot,setBlending:D,setMaterial:Kt,setFlipSided:Lt,setCullFace:Bt,setLineWidth:Ct,setPolygonOffset:Wt,setScissorTest:Rt,activeTexture:L,bindTexture:E,unbindTexture:W,compressedTexImage2D:et,compressedTexImage3D:at,texImage2D:tt,texImage3D:ot,updateUBOMapping:bt,uniformBlockBinding:At,texStorage2D:Tt,texStorage3D:V,texSubImage2D:nt,texSubImage3D:Y,compressedTexSubImage2D:q,compressedTexSubImage3D:it,scissor:ct,viewport:dt,reset:Gt}}function xc(i,t,e,n){const s=A0(n);switch(e){case Su:return i*t;case bu:return i*t;case Au:return i*t*2;case Za:return i*t/s.components*s.byteLength;case Ja:return i*t/s.components*s.byteLength;case Tu:return i*t*2/s.components*s.byteLength;case Qa:return i*t*2/s.components*s.byteLength;case Eu:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case tl:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case La:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wu:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ua:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A0(i){switch(i){case zn:case xu:return{byteLength:1,components:1};case Ts:case Mu:case Bn:return{byteLength:2,components:1};case ja:case Ka:return{byteLength:2,components:4};case Si:case qa:case Sn:return{byteLength:4,components:1};case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function T0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return g?new OffscreenCanvas(L,E):Pr("canvas")}function _(L,E,W){let et=1;const at=Rt(L);if((at.width>W||at.height>W)&&(et=W/Math.max(at.width,at.height)),et<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const nt=Math.floor(et*at.width),Y=Math.floor(et*at.height);h===void 0&&(h=p(nt,Y));const q=E?p(nt,Y):h;return q.width=nt,q.height=Y,q.getContext("2d").drawImage(L,0,0,nt,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+nt+"x"+Y+")."),q}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),L;return L}function f(L){return L.generateMipmaps&&L.minFilter!==Ge&&L.minFilter!==fn}function m(L){i.generateMipmap(L)}function M(L,E,W,et,at=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let nt=E;if(E===i.RED&&(W===i.FLOAT&&(nt=i.R32F),W===i.HALF_FLOAT&&(nt=i.R16F),W===i.UNSIGNED_BYTE&&(nt=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.R8UI),W===i.UNSIGNED_SHORT&&(nt=i.R16UI),W===i.UNSIGNED_INT&&(nt=i.R32UI),W===i.BYTE&&(nt=i.R8I),W===i.SHORT&&(nt=i.R16I),W===i.INT&&(nt=i.R32I)),E===i.RG&&(W===i.FLOAT&&(nt=i.RG32F),W===i.HALF_FLOAT&&(nt=i.RG16F),W===i.UNSIGNED_BYTE&&(nt=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RG8UI),W===i.UNSIGNED_SHORT&&(nt=i.RG16UI),W===i.UNSIGNED_INT&&(nt=i.RG32UI),W===i.BYTE&&(nt=i.RG8I),W===i.SHORT&&(nt=i.RG16I),W===i.INT&&(nt=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),W===i.UNSIGNED_INT&&(nt=i.RGB32UI),W===i.BYTE&&(nt=i.RGB8I),W===i.SHORT&&(nt=i.RGB16I),W===i.INT&&(nt=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),W===i.UNSIGNED_INT&&(nt=i.RGBA32UI),W===i.BYTE&&(nt=i.RGBA8I),W===i.SHORT&&(nt=i.RGBA16I),W===i.INT&&(nt=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),E===i.RGBA){const Y=at?Tr:te.getTransfer(et);W===i.FLOAT&&(nt=i.RGBA32F),W===i.HALF_FLOAT&&(nt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(nt=Y===oe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(L,E){let W;return L?E===null||E===Si||E===is?W=i.DEPTH24_STENCIL8:E===Sn?W=i.DEPTH32F_STENCIL8:E===Ts&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Si||E===is?W=i.DEPTH_COMPONENT24:E===Sn?W=i.DEPTH_COMPONENT32F:E===Ts&&(W=i.DEPTH_COMPONENT16),W}function y(L,E){return f(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ge&&L.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){const E=L.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&u.delete(E)}function b(L){const E=L.target;E.removeEventListener("dispose",b),P(E)}function A(L){const E=n.get(L);if(E.__webglInit===void 0)return;const W=L.source,et=d.get(W);if(et){const at=et[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(L),Object.keys(et).length===0&&d.delete(W)}n.remove(L)}function C(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const W=L.source,et=d.get(W);delete et[E.__cacheKey],o.memory.textures--}function P(L){const E=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let at=0;at<E.__webglFramebuffer[et].length;at++)i.deleteFramebuffer(E.__webglFramebuffer[et][at]);else i.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)i.deleteFramebuffer(E.__webglFramebuffer[et]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=L.textures;for(let et=0,at=W.length;et<at;et++){const nt=n.get(W[et]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(W[et])}n.remove(L)}let x=0;function S(){x=0}function I(){const L=x;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),x+=1,L}function U(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function F(L,E){const W=n.get(L);if(L.isVideoTexture&&Ct(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const et=L.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(W,L,E);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function $(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){St(W,L,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function R(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){St(W,L,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function N(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){X(W,L,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const O={[la]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},lt={[Ge]:i.NEAREST,[ud]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},K={[pd]:i.NEVER,[Md]:i.ALWAYS,[md]:i.LESS,[Ru]:i.LEQUAL,[gd]:i.EQUAL,[xd]:i.GEQUAL,[_d]:i.GREATER,[vd]:i.NOTEQUAL};function st(L,E){if(E.type===Sn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===Kr||E.magFilter===Fs||E.magFilter===xi||E.minFilter===fn||E.minFilter===Kr||E.minFilter===Fs||E.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,O[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,O[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,O[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,lt[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,lt[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ge||E.minFilter!==Fs&&E.minFilter!==xi||E.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function gt(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));const et=E.source;let at=d.get(et);at===void 0&&(at={},d.set(et,at));const nt=U(E);if(nt!==L.__cacheKey){at[nt]===void 0&&(at[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[nt].usedTimes++;const Y=at[L.__cacheKey];Y!==void 0&&(at[L.__cacheKey].usedTimes--,Y.usedTimes===0&&C(E)),L.__cacheKey=nt,L.__webglTexture=at[nt].texture}return W}function St(L,E,W){let et=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=i.TEXTURE_3D);const at=gt(L,E),nt=E.source;e.bindTexture(et,L.__webglTexture,i.TEXTURE0+W);const Y=n.get(nt);if(nt.version!==Y.__version||at===!0){e.activeTexture(i.TEXTURE0+W);const q=te.getPrimaries(te.workingColorSpace),it=E.colorSpace===Kn?null:te.getPrimaries(E.colorSpace),Tt=E.colorSpace===Kn||q===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let V=_(E.image,!1,s.maxTextureSize);V=Wt(E,V);const tt=r.convert(E.format,E.colorSpace),ot=r.convert(E.type);let ct=M(E.internalFormat,tt,ot,E.colorSpace,E.isVideoTexture);st(et,E);let dt;const bt=E.mipmaps,At=E.isVideoTexture!==!0,Gt=Y.__version===void 0||at===!0,z=nt.dataReady,xt=y(E,V);if(E.isDepthTexture)ct=v(E.format===ss,E.type),Gt&&(At?e.texStorage2D(i.TEXTURE_2D,1,ct,V.width,V.height):e.texImage2D(i.TEXTURE_2D,0,ct,V.width,V.height,0,tt,ot,null));else if(E.isDataTexture)if(bt.length>0){At&&Gt&&e.texStorage2D(i.TEXTURE_2D,xt,ct,bt[0].width,bt[0].height);for(let Z=0,rt=bt.length;Z<rt;Z++)dt=bt[Z],At?z&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,dt.width,dt.height,tt,ot,dt.data):e.texImage2D(i.TEXTURE_2D,Z,ct,dt.width,dt.height,0,tt,ot,dt.data);E.generateMipmaps=!1}else At?(Gt&&e.texStorage2D(i.TEXTURE_2D,xt,ct,V.width,V.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,tt,ot,V.data)):e.texImage2D(i.TEXTURE_2D,0,ct,V.width,V.height,0,tt,ot,V.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){At&&Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,ct,bt[0].width,bt[0].height,V.depth);for(let Z=0,rt=bt.length;Z<rt;Z++)if(dt=bt[Z],E.format!==_n)if(tt!==null)if(At){if(z)if(E.layerUpdates.size>0){const vt=xc(dt.width,dt.height,E.format,E.type);for(const Mt of E.layerUpdates){const jt=dt.data.subarray(Mt*vt/dt.data.BYTES_PER_ELEMENT,(Mt+1)*vt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Mt,dt.width,dt.height,1,tt,jt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,dt.width,dt.height,V.depth,tt,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ct,dt.width,dt.height,V.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,dt.width,dt.height,V.depth,tt,ot,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,ct,dt.width,dt.height,V.depth,0,tt,ot,dt.data)}else{At&&Gt&&e.texStorage2D(i.TEXTURE_2D,xt,ct,bt[0].width,bt[0].height);for(let Z=0,rt=bt.length;Z<rt;Z++)dt=bt[Z],E.format!==_n?tt!==null?At?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,dt.width,dt.height,tt,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,ct,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?z&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,dt.width,dt.height,tt,ot,dt.data):e.texImage2D(i.TEXTURE_2D,Z,ct,dt.width,dt.height,0,tt,ot,dt.data)}else if(E.isDataArrayTexture)if(At){if(Gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,ct,V.width,V.height,V.depth),z)if(E.layerUpdates.size>0){const Z=xc(V.width,V.height,E.format,E.type);for(const rt of E.layerUpdates){const vt=V.data.subarray(rt*Z/V.data.BYTES_PER_ELEMENT,(rt+1)*Z/V.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,V.width,V.height,1,tt,ot,vt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,tt,ot,V.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,V.width,V.height,V.depth,0,tt,ot,V.data);else if(E.isData3DTexture)At?(Gt&&e.texStorage3D(i.TEXTURE_3D,xt,ct,V.width,V.height,V.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,tt,ot,V.data)):e.texImage3D(i.TEXTURE_3D,0,ct,V.width,V.height,V.depth,0,tt,ot,V.data);else if(E.isFramebufferTexture){if(Gt)if(At)e.texStorage2D(i.TEXTURE_2D,xt,ct,V.width,V.height);else{let Z=V.width,rt=V.height;for(let vt=0;vt<xt;vt++)e.texImage2D(i.TEXTURE_2D,vt,ct,Z,rt,0,tt,ot,null),Z>>=1,rt>>=1}}else if(bt.length>0){if(At&&Gt){const Z=Rt(bt[0]);e.texStorage2D(i.TEXTURE_2D,xt,ct,Z.width,Z.height)}for(let Z=0,rt=bt.length;Z<rt;Z++)dt=bt[Z],At?z&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,tt,ot,dt):e.texImage2D(i.TEXTURE_2D,Z,ct,tt,ot,dt);E.generateMipmaps=!1}else if(At){if(Gt){const Z=Rt(V);e.texStorage2D(i.TEXTURE_2D,xt,ct,Z.width,Z.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,ot,V)}else e.texImage2D(i.TEXTURE_2D,0,ct,tt,ot,V);f(E)&&m(et),Y.__version=nt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function X(L,E,W){if(E.image.length!==6)return;const et=gt(L,E),at=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const nt=n.get(at);if(at.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+W);const Y=te.getPrimaries(te.workingColorSpace),q=E.colorSpace===Kn?null:te.getPrimaries(E.colorSpace),it=E.colorSpace===Kn||Y===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const Tt=E.isCompressedTexture||E.image[0].isCompressedTexture,V=E.image[0]&&E.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!Tt&&!V?tt[rt]=_(E.image[rt],!0,s.maxCubemapSize):tt[rt]=V?E.image[rt].image:E.image[rt],tt[rt]=Wt(E,tt[rt]);const ot=tt[0],ct=r.convert(E.format,E.colorSpace),dt=r.convert(E.type),bt=M(E.internalFormat,ct,dt,E.colorSpace),At=E.isVideoTexture!==!0,Gt=nt.__version===void 0||et===!0,z=at.dataReady;let xt=y(E,ot);st(i.TEXTURE_CUBE_MAP,E);let Z;if(Tt){At&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,bt,ot.width,ot.height);for(let rt=0;rt<6;rt++){Z=tt[rt].mipmaps;for(let vt=0;vt<Z.length;vt++){const Mt=Z[vt];E.format!==_n?ct!==null?At?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,0,0,Mt.width,Mt.height,ct,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,0,0,Mt.width,Mt.height,ct,dt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt,bt,Mt.width,Mt.height,0,ct,dt,Mt.data)}}}else{if(Z=E.mipmaps,At&&Gt){Z.length>0&&xt++;const rt=Rt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,bt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(V){At?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,ct,dt,tt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,bt,tt[rt].width,tt[rt].height,0,ct,dt,tt[rt].data);for(let vt=0;vt<Z.length;vt++){const jt=Z[vt].image[rt].image;At?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,0,0,jt.width,jt.height,ct,dt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,bt,jt.width,jt.height,0,ct,dt,jt.data)}}else{At?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ct,dt,tt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,bt,ct,dt,tt[rt]);for(let vt=0;vt<Z.length;vt++){const Mt=Z[vt];At?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,0,0,ct,dt,Mt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,vt+1,bt,ct,dt,Mt.image[rt])}}}f(E)&&m(i.TEXTURE_CUBE_MAP),nt.__version=at.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Q(L,E,W,et,at,nt){const Y=r.convert(W.format,W.colorSpace),q=r.convert(W.type),it=M(W.internalFormat,Y,q,W.colorSpace);if(!n.get(E).__hasExternalTextures){const V=Math.max(1,E.width>>nt),tt=Math.max(1,E.height>>nt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,it,V,tt,E.depth,0,Y,q,null):e.texImage2D(at,nt,it,V,tt,0,Y,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,at,n.get(W).__webglTexture,0,Lt(E)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,at,n.get(W).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(L,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const et=E.depthTexture,at=et&&et.isDepthTexture?et.type:null,nt=v(E.stencilBuffer,at),Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=Lt(E);Bt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,nt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,nt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,nt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,L)}else{const et=E.textures;for(let at=0;at<et.length;at++){const nt=et[at],Y=r.convert(nt.format,nt.colorSpace),q=r.convert(nt.type),it=M(nt.internalFormat,Y,q,nt.colorSpace),Tt=Lt(E);W&&Bt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,it,E.width,E.height):Bt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),F(E.depthTexture,0);const et=n.get(E.depthTexture).__webglTexture,at=Lt(E);if(E.depthTexture.format===ji)Bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(E.depthTexture.format===ss)Bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function mt(L){const E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const et=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),et){const at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,et.removeEventListener("dispose",at)};et.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=et}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ht(E.__webglFramebuffer,L)}else if(W){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]===void 0)E.__webglDepthbuffer[et]=i.createRenderbuffer(),ft(E.__webglDepthbuffer[et],L,!1);else{const at=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ft(E.__webglDepthbuffer,L,!1);else{const et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(L,E,W){const et=n.get(L);E!==void 0&&Q(et.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&mt(L)}function Ot(L){const E=L.texture,W=n.get(L),et=n.get(E);L.addEventListener("dispose",b);const at=L.textures,nt=L.isWebGLCubeRenderTarget===!0,Y=at.length>1;if(Y||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=E.version,o.memory.textures++),nt){W.__webglFramebuffer=[];for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[q]=[];for(let it=0;it<E.mipmaps.length;it++)W.__webglFramebuffer[q][it]=i.createFramebuffer()}else W.__webglFramebuffer[q]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let q=0;q<E.mipmaps.length;q++)W.__webglFramebuffer[q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Y)for(let q=0,it=at.length;q<it;q++){const Tt=n.get(at[q]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Bt(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let q=0;q<at.length;q++){const it=at[q];W.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);const Tt=r.convert(it.format,it.colorSpace),V=r.convert(it.type),tt=M(it.internalFormat,Tt,V,it.colorSpace,L.isXRRenderTarget===!0),ot=Lt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,tt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,W.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),st(i.TEXTURE_CUBE_MAP,E);for(let q=0;q<6;q++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)Q(W.__webglFramebuffer[q][it],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,it);else Q(W.__webglFramebuffer[q],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Y){for(let q=0,it=at.length;q<it;q++){const Tt=at[q],V=n.get(Tt);e.bindTexture(i.TEXTURE_2D,V.__webglTexture),st(i.TEXTURE_2D,Tt),Q(W.__webglFramebuffer,L,Tt,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,0),f(Tt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(q=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,et.__webglTexture),st(q,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)Q(W.__webglFramebuffer[it],L,E,i.COLOR_ATTACHMENT0,q,it);else Q(W.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,q,0);f(E)&&m(q),e.unbindTexture()}L.depthBuffer&&mt(L)}function kt(L){const E=L.textures;for(let W=0,et=E.length;W<et;W++){const at=E[W];if(f(at)){const nt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Y=n.get(at).__webglTexture;e.bindTexture(nt,Y),m(nt),e.unbindTexture()}}}const Ft=[],D=[];function Kt(L){if(L.samples>0){if(Bt(L)===!1){const E=L.textures,W=L.width,et=L.height;let at=i.COLOR_BUFFER_BIT;const nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=n.get(L),q=E.length>1;if(q)for(let it=0;it<E.length;it++)e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let it=0;it<E.length;it++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Y.__webglColorRenderbuffer[it]);const Tt=n.get(E[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,W,et,0,0,W,et,at,i.NEAREST),l===!0&&(Ft.length=0,D.length=0,Ft.push(i.COLOR_ATTACHMENT0+it),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ft.push(nt),D.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let it=0;it<E.length;it++){e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,Y.__webglColorRenderbuffer[it]);const Tt=n.get(E[it]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,Tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Lt(L){return Math.min(s.maxSamples,L.samples)}function Bt(L){const E=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ct(L){const E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Wt(L,E){const W=L.colorSpace,et=L.format,at=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==ii&&W!==Kn&&(te.getTransfer(W)===oe?(et!==_n||at!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=R,this.setTextureCube=N,this.rebindTextures=Et,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Bt}function w0(i,t){function e(n,s=Kn){let r;const o=te.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===Eu)return i.RGB;if(n===_n)return i.RGBA;if(n===bu)return i.LUMINANCE;if(n===Au)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Tu)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===ha||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Aa||n===Ta||n===wa||n===Ca||n===Ra||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===La||n===Ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Da||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class C0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class On extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R0={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,p=.005;c.inputState.pinching&&d>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new On;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const P0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L0=`
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

}`;class I0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:P0,fragmentShader:L0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D0 extends bi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,p=null;const _=new I0,f=e.getContextAttributes();let m=null,M=null;const v=[],y=[],w=new It;let b=null;const A=new Ve;A.layers.enable(1),A.viewport=new ie;const C=new Ve;C.layers.enable(2),C.viewport=new ie;const P=[A,C],x=new C0;x.layers.enable(1),x.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new To,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new To,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new To,v[X]=Q),Q.getHandSpace()};function U(X){const Q=y.indexOf(X.inputSource);if(Q===-1)return;const ft=v[Q];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||o),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){const Q=y[X];Q!==null&&(y[X]=null,v[X].disconnect(Q))}S=null,I=null,_.reset(),t.setRenderTarget(m),g=null,d=null,h=null,s=null,M=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",$),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const Q={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new vn(g.framebufferWidth,g.framebufferHeight,{format:_n,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,ft=null,ht=null;f.depth&&(ht=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?ss:ji,ft=f.stencil?is:Si);const mt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(mt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new vn(d.textureWidth,d.textureHeight,{format:_n,type:zn,depthTexture:new ku(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let Q=0;Q<X.removed.length;Q++){const ft=X.removed[Q],ht=y.indexOf(ft);ht>=0&&(y[ht]=null,v[ht].disconnect(ft))}for(let Q=0;Q<X.added.length;Q++){const ft=X.added[Q];let ht=y.indexOf(ft);if(ht===-1){for(let Et=0;Et<v.length;Et++)if(Et>=y.length){y.push(ft),ht=Et;break}else if(y[Et]===null){y[Et]=ft,ht=Et;break}if(ht===-1)break}const mt=v[ht];mt&&mt.connect(ft)}}const R=new B,N=new B;function O(X,Q,ft){R.setFromMatrixPosition(Q.matrixWorld),N.setFromMatrixPosition(ft.matrixWorld);const ht=R.distanceTo(N),mt=Q.projectionMatrix.elements,Et=ft.projectionMatrix.elements,Ot=mt[14]/(mt[10]-1),kt=mt[14]/(mt[10]+1),Ft=(mt[9]+1)/mt[5],D=(mt[9]-1)/mt[5],Kt=(mt[8]-1)/mt[0],Lt=(Et[8]+1)/Et[0],Bt=Ot*Kt,Ct=Ot*Lt,Wt=ht/(-Kt+Lt),Rt=Wt*-Kt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Rt),X.translateZ(Wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),mt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const L=Ot+Wt,E=kt+Wt,W=Bt-Rt,et=Ct+(ht-Rt),at=Ft*kt/E*L,nt=D*kt/E*L;X.projectionMatrix.makePerspective(W,et,at,nt,L,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function lt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,ft=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),x.near=C.near=A.near=Q,x.far=C.far=A.far=ft,(S!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,I=x.far);const ht=X.parent,mt=x.cameras;lt(x,ht);for(let Et=0;Et<mt.length;Et++)lt(mt[Et],ht);mt.length===2?O(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),K(X,x,ht)};function K(X,Q,ft){ft===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let st=null;function gt(X,Q){if(u=Q.getViewerPose(c||o),p=Q,u!==null){const ft=u.views;g!==null&&(t.setRenderTargetFramebuffer(M,g.framebuffer),t.setRenderTarget(M));let ht=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Et=0;Et<ft.length;Et++){const Ot=ft[Et];let kt=null;if(g!==null)kt=g.getViewport(Ot);else{const D=h.getViewSubImage(d,Ot);kt=D.viewport,Et===0&&(t.setRenderTargetTextures(M,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(M))}let Ft=P[Et];Ft===void 0&&(Ft=new Ve,Ft.layers.enable(Et),Ft.viewport=new ie,P[Et]=Ft),Ft.matrix.fromArray(Ot.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Ot.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(kt.x,kt.y,kt.width,kt.height),Et===0&&(x.matrix.copy(Ft.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Ft)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Et=h.getDepthInformation(ft[0]);Et&&Et.isValid&&Et.texture&&_.init(t,Et,s.renderState)}}for(let ft=0;ft<v.length;ft++){const ht=y[ft],mt=v[ft];ht!==null&&mt!==void 0&&mt.update(ht,Q,c||o)}st&&st(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const St=new Hu;St.setAnimationLoop(gt),this.setAnimationLoop=function(X){st=X},this.dispose=function(){}}}const fi=new An,U0=new se;function N0(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Fu(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,M,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&g(f,m,y)):m.isMeshMatcapMaterial?(r(f,m),p(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),_(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,M,v):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,y=M.envMapRotation;v&&(f.envMap.value=v,fi.copy(y),fi.x*=-1,fi.y*=-1,fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),f.envMapRotation.value.setFromMatrix4(U0.makeRotationFromEuler(fi)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=v*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function g(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const M=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(p(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",f));const w=v.program;n.updateUBOMapping(M,w);const b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function u(M){const v=h();M.__bindingPointIndex=v;const y=i.createBuffer(),w=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],y=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,A=y.length;b<A;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let P=0,x=C.length;P<x;P++){const S=C[P];if(g(S,b,P,w)===!0){const I=S.__offset,U=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let $=0;$<U.length;$++){const R=U[$],N=_(R);typeof R=="number"||typeof R=="boolean"?(S.__data[0]=R,i.bufferSubData(i.UNIFORM_BUFFER,I+F,S.__data)):R.isMatrix3?(S.__data[0]=R.elements[0],S.__data[1]=R.elements[1],S.__data[2]=R.elements[2],S.__data[3]=0,S.__data[4]=R.elements[3],S.__data[5]=R.elements[4],S.__data[6]=R.elements[5],S.__data[7]=0,S.__data[8]=R.elements[6],S.__data[9]=R.elements[7],S.__data[10]=R.elements[8],S.__data[11]=0):(R.toArray(S.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,v,y,w){const b=M.value,A=v+"_"+y;if(w[A]===void 0)return typeof b=="number"||typeof b=="boolean"?w[A]=b:w[A]=b.clone(),!0;{const C=w[A];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return w[A]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function p(M){const v=M.uniforms;let y=0;const w=16;for(let A=0,C=v.length;A<C;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,S=P.length;x<S;x++){const I=P[x],U=Array.isArray(I.value)?I.value:[I.value];for(let F=0,$=U.length;F<$;F++){const R=U[F],N=_(R),O=y%w,lt=O%N.boundary,K=O+lt;y+=lt,K!==0&&w-K<N.storage&&(y+=w-K),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=N.storage}}}const b=y%w;return b>0&&(y+=w-b),M.__size=y,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){const v=M.target;v.removeEventListener("dispose",f);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Yu{constructor(t={}){const{canvas:e=bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),p=new Int32Array(4);let _=null,f=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Jn,this.toneMappingExposure=1;const v=this;let y=!1,w=0,b=0,A=null,C=-1,P=null;const x=new ie,S=new ie;let I=null;const U=new Vt(0);let F=0,$=e.width,R=e.height,N=1,O=null,lt=null;const K=new ie(0,0,$,R),st=new ie(0,0,$,R);let gt=!1;const St=new il;let X=!1,Q=!1;const ft=new se,ht=new se,mt=new B,Et=new ie,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Ft(){return A===null?N:1}let D=n;function Kt(T,k){return e.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const k="webgl2";if(D=Kt(k,T),D===null)throw Kt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Lt,Bt,Ct,Wt,Rt,L,E,W,et,at,nt,Y,q,it,Tt,V,tt,ot,ct,dt,bt,At,Gt,z;function xt(){Lt=new Vm(D),Lt.init(),At=new w0(D,Lt),Bt=new Om(D,Lt,t,At),Ct=new b0(D),Bt.reverseDepthBuffer&&Ct.buffers.depth.setReversed(!0),Wt=new Xm(D),Rt=new c0,L=new T0(D,Lt,Ct,Rt,Bt,At,Wt),E=new Bm(v),W=new km(v),et=new Zd(D),Gt=new Um(D,et),at=new Gm(D,et,Wt,Gt),nt=new $m(D,at,et,Wt),ct=new Ym(D,Bt,L),V=new Fm(Rt),Y=new l0(v,E,W,Lt,Bt,Gt,V),q=new N0(v,Rt),it=new h0,Tt=new _0(Lt),ot=new Dm(v,E,W,Ct,nt,d,l),tt=new S0(v,nt,Bt),z=new O0(D,Wt,Bt,Ct),dt=new Nm(D,Lt,Wt),bt=new Wm(D,Lt,Wt),Wt.programs=Y.programs,v.capabilities=Bt,v.extensions=Lt,v.properties=Rt,v.renderLists=it,v.shadowMap=tt,v.state=Ct,v.info=Wt}xt();const Z=new D0(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize($,R,!1))},this.getSize=function(T){return T.set($,R)},this.setSize=function(T,k,j=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,R=k,e.width=Math.floor(T*N),e.height=Math.floor(k*N),j===!0&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set($*N,R*N).floor()},this.setDrawingBufferSize=function(T,k,j){$=T,R=k,N=j,e.width=Math.floor(T*j),e.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,k,j,J){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,k,j,J),Ct.viewport(x.copy(K).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(st)},this.setScissor=function(T,k,j,J){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,k,j,J),Ct.scissor(S.copy(st).multiplyScalar(N).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){Ct.setScissorTest(gt=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(T=!0,k=!0,j=!0){let J=0;if(T){let G=!1;if(A!==null){const pt=A.texture.format;G=pt===tl||pt===Qa||pt===Ja}if(G){const pt=A.texture.type,yt=pt===zn||pt===Si||pt===Ts||pt===is||pt===ja||pt===Ka,wt=ot.getClearColor(),Pt=ot.getClearAlpha(),zt=wt.r,Ht=wt.g,Dt=wt.b;yt?(g[0]=zt,g[1]=Ht,g[2]=Dt,g[3]=Pt,D.clearBufferuiv(D.COLOR,0,g)):(p[0]=zt,p[1]=Ht,p[2]=Dt,p[3]=Pt,D.clearBufferiv(D.COLOR,0,p))}else J|=D.COLOR_BUFFER_BIT}k&&(J|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),it.dispose(),Tt.dispose(),Rt.dispose(),E.dispose(),W.dispose(),nt.dispose(),Gt.dispose(),z.dispose(),Y.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ri),Z.removeEventListener("sessionend",yl),oi.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Wt.autoReset,k=tt.enabled,j=tt.autoUpdate,J=tt.needsUpdate,G=tt.type;xt(),Wt.autoReset=T,tt.enabled=k,tt.autoUpdate=j,tt.needsUpdate=J,tt.type=G}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function jt(T){const k=T.target;k.removeEventListener("dispose",jt),ue(k)}function ue(T){be(T),Rt.remove(T)}function be(T){const k=Rt.get(T).programs;k!==void 0&&(k.forEach(function(j){Y.releaseProgram(j)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,J,G,pt){k===null&&(k=Ot);const yt=G.isMesh&&G.matrixWorld.determinant()<0,wt=Ph(T,k,j,J,G);Ct.setMaterial(J,yt);let Pt=j.index,zt=1;if(J.wireframe===!0){if(Pt=at.getWireframeAttribute(j),Pt===void 0)return;zt=2}const Ht=j.drawRange,Dt=j.attributes.position;let ee=Ht.start*zt,re=(Ht.start+Ht.count)*zt;pt!==null&&(ee=Math.max(ee,pt.start*zt),re=Math.min(re,(pt.start+pt.count)*zt)),Pt!==null?(ee=Math.max(ee,0),re=Math.min(re,Pt.count)):Dt!=null&&(ee=Math.max(ee,0),re=Math.min(re,Dt.count));const he=re-ee;if(he<0||he===1/0)return;Gt.setup(G,J,wt,j,Pt);let Ye,Jt=dt;if(Pt!==null&&(Ye=et.get(Pt),Jt=bt,Jt.setIndex(Ye)),G.isMesh)J.wireframe===!0?(Ct.setLineWidth(J.wireframeLinewidth*Ft()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(G.isLine){let Ut=J.linewidth;Ut===void 0&&(Ut=1),Ct.setLineWidth(Ut*Ft()),G.isLineSegments?Jt.setMode(D.LINES):G.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else G.isPoints?Jt.setMode(D.POINTS):G.isSprite&&Jt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Jt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,Ae=G._multiDrawCounts,Qt=G._multiDrawCount,on=Pt?et.get(Pt).bytesPerElement:1,wi=Rt.get(J).currentProgram.getUniforms();for(let $e=0;$e<Qt;$e++)wi.setValue(D,"_gl_DrawID",$e),Jt.render(Ut[$e]/on,Ae[$e])}else if(G.isInstancedMesh)Jt.renderInstances(ee,he,G.count);else if(j.isInstancedBufferGeometry){const Ut=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ae=Math.min(j.instanceCount,Ut);Jt.renderInstances(ee,he,Ae)}else Jt.render(ee,he)};function Zt(T,k,j){T.transparent===!0&&T.side===Un&&T.forceSinglePass===!1?(T.side=Xe,T.needsUpdate=!0,Os(T,k,j),T.side=ei,T.needsUpdate=!0,Os(T,k,j),T.side=Un):Os(T,k,j)}this.compile=function(T,k,j=null){j===null&&(j=T),f=Tt.get(j),f.init(k),M.push(f),j.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const J=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pt=G.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const wt=pt[yt];Zt(wt,j,G),J.add(wt)}else Zt(pt,j,G),J.add(pt)}),M.pop(),f=null,J},this.compileAsync=function(T,k,j=null){const J=this.compile(T,k,j);return new Promise(G=>{function pt(){if(J.forEach(function(yt){Rt.get(yt).currentProgram.isReady()&&J.delete(yt)}),J.size===0){G(T);return}setTimeout(pt,10)}Lt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let we=null;function Ce(T){we&&we(T)}function ri(){oi.stop()}function yl(){oi.start()}const oi=new Hu;oi.setAnimationLoop(Ce),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(T){we=T,Z.setAnimationLoop(T),T===null?oi.stop():oi.start()},Z.addEventListener("sessionstart",ri),Z.addEventListener("sessionend",yl),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,A),f=Tt.get(T,M.length),f.init(k),M.push(f),ht.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),St.setFromProjectionMatrix(ht),Q=this.localClippingEnabled,X=V.init(this.clippingPlanes,Q),_=it.get(T,m.length),_.init(),m.push(_),Z.enabled===!0&&Z.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&Yr(pt,k,-1/0,v.sortObjects)}Yr(T,k,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(O,lt),kt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,kt&&ot.addToRenderList(_,T),this.info.render.frame++,X===!0&&V.beginShadows();const j=f.state.shadowsArray;tt.render(j,T,k),X===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=_.opaque,G=_.transmissive;if(f.setupLights(),k.isArrayCamera){const pt=k.cameras;if(G.length>0)for(let yt=0,wt=pt.length;yt<wt;yt++){const Pt=pt[yt];El(J,G,T,Pt)}kt&&ot.render(T);for(let yt=0,wt=pt.length;yt<wt;yt++){const Pt=pt[yt];Sl(_,T,Pt,Pt.viewport)}}else G.length>0&&El(J,G,T,k),kt&&ot.render(T),Sl(_,T,k);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,k),Gt.resetDefaultState(),C=-1,P=null,M.pop(),M.length>0?(f=M[M.length-1],X===!0&&V.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Yr(T,k,j,J){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||St.intersectsSprite(T)){J&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const yt=nt.update(T),wt=T.material;wt.visible&&_.push(T,yt,wt,j,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||St.intersectsObject(T))){const yt=nt.update(T),wt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Et.copy(yt.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){const Pt=yt.groups;for(let zt=0,Ht=Pt.length;zt<Ht;zt++){const Dt=Pt[zt],ee=wt[Dt.materialIndex];ee&&ee.visible&&_.push(T,yt,ee,j,Et.z,Dt)}}else wt.visible&&_.push(T,yt,wt,j,Et.z,null)}}const pt=T.children;for(let yt=0,wt=pt.length;yt<wt;yt++)Yr(pt[yt],k,j,J)}function Sl(T,k,j,J){const G=T.opaque,pt=T.transmissive,yt=T.transparent;f.setupLightsView(j),X===!0&&V.setGlobalState(v.clippingPlanes,j),J&&Ct.viewport(x.copy(J)),G.length>0&&Ns(G,k,j),pt.length>0&&Ns(pt,k,j),yt.length>0&&Ns(yt,k,j),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function El(T,k,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[J.id]===void 0&&(f.state.transmissionRenderTarget[J.id]=new vn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Bn:zn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const pt=f.state.transmissionRenderTarget[J.id],yt=J.viewport||x;pt.setSize(yt.z,yt.w);const wt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(U),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),kt&&ot.render(j);const Pt=v.toneMapping;v.toneMapping=Jn;const zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),f.setupLightsView(J),X===!0&&V.setGlobalState(v.clippingPlanes,J),Ns(T,j,J),L.updateMultisampleRenderTarget(pt),L.updateRenderTargetMipmap(pt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Dt=0,ee=k.length;Dt<ee;Dt++){const re=k[Dt],he=re.object,Ye=re.geometry,Jt=re.material,Ut=re.group;if(Jt.side===Un&&he.layers.test(J.layers)){const Ae=Jt.side;Jt.side=Xe,Jt.needsUpdate=!0,bl(he,j,J,Ye,Jt,Ut),Jt.side=Ae,Jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(L.updateMultisampleRenderTarget(pt),L.updateRenderTargetMipmap(pt))}v.setRenderTarget(wt),v.setClearColor(U,F),zt!==void 0&&(J.viewport=zt),v.toneMapping=Pt}function Ns(T,k,j){const J=k.isScene===!0?k.overrideMaterial:null;for(let G=0,pt=T.length;G<pt;G++){const yt=T[G],wt=yt.object,Pt=yt.geometry,zt=J===null?yt.material:J,Ht=yt.group;wt.layers.test(j.layers)&&bl(wt,k,j,Pt,zt,Ht)}}function bl(T,k,j,J,G,pt){T.onBeforeRender(v,k,j,J,G,pt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,k,j,J,T,pt),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=Xe,G.needsUpdate=!0,v.renderBufferDirect(j,k,J,G,T,pt),G.side=ei,G.needsUpdate=!0,v.renderBufferDirect(j,k,J,G,T,pt),G.side=Un):v.renderBufferDirect(j,k,J,G,T,pt),T.onAfterRender(v,k,j,J,G,pt)}function Os(T,k,j){k.isScene!==!0&&(k=Ot);const J=Rt.get(T),G=f.state.lights,pt=f.state.shadowsArray,yt=G.state.version,wt=Y.getParameters(T,G.state,pt,k,j),Pt=Y.getProgramCacheKey(wt);let zt=J.programs;J.environment=T.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(T.isMeshStandardMaterial?W:E).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",jt),zt=new Map,J.programs=zt);let Ht=zt.get(Pt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===yt)return Tl(T,wt),Ht}else wt.uniforms=Y.getUniforms(T),T.onBeforeCompile(wt,v),Ht=Y.acquireProgram(wt,Pt),zt.set(Pt,Ht),J.uniforms=wt.uniforms;const Dt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=V.uniform),Tl(T,wt),J.needsLights=Ih(T),J.lightsStateVersion=yt,J.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMap.value=G.state.directionalShadowMap,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotShadowMap.value=G.state.spotShadowMap,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMap.value=G.state.pointShadowMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function Al(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Tl(T,k){const j=Rt.get(T);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Ph(T,k,j,J,G){k.isScene!==!0&&(k=Ot),L.resetTextureUnits();const pt=k.fog,yt=J.isMeshStandardMaterial?k.environment:null,wt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ii,Pt=(J.isMeshStandardMaterial?W:E).get(J.envMap||yt),zt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ht=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Dt=!!j.morphAttributes.position,ee=!!j.morphAttributes.normal,re=!!j.morphAttributes.color;let he=Jn;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(he=v.toneMapping);const Ye=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Jt=Ye!==void 0?Ye.length:0,Ut=Rt.get(J),Ae=f.state.lights;if(X===!0&&(Q===!0||T!==P)){const Qe=T===P&&J.id===C;V.setState(J,T,Qe)}let Qt=!1;J.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ae.state.version||Ut.outputColorSpace!==wt||G.isBatchedMesh&&Ut.batching===!1||!G.isBatchedMesh&&Ut.batching===!0||G.isBatchedMesh&&Ut.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ut.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ut.instancing===!1||!G.isInstancedMesh&&Ut.instancing===!0||G.isSkinnedMesh&&Ut.skinning===!1||!G.isSkinnedMesh&&Ut.skinning===!0||G.isInstancedMesh&&Ut.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ut.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ut.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ut.instancingMorph===!1&&G.morphTexture!==null||Ut.envMap!==Pt||J.fog===!0&&Ut.fog!==pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==V.numPlanes||Ut.numIntersection!==V.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==Ht||Ut.morphTargets!==Dt||Ut.morphNormals!==ee||Ut.morphColors!==re||Ut.toneMapping!==he||Ut.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Ut.__version=J.version);let on=Ut.currentProgram;Qt===!0&&(on=Os(J,k,G));let wi=!1,$e=!1,$r=!1;const fe=on.getUniforms(),Hn=Ut.uniforms;if(Ct.useProgram(on.program)&&(wi=!0,$e=!0,$r=!0),J.id!==C&&(C=J.id,$e=!0),wi||P!==T){Bt.reverseDepthBuffer?(ft.copy(T.projectionMatrix),Td(ft),wd(ft),fe.setValue(D,"projectionMatrix",ft)):fe.setValue(D,"projectionMatrix",T.projectionMatrix),fe.setValue(D,"viewMatrix",T.matrixWorldInverse);const Qe=fe.map.cameraPosition;Qe!==void 0&&Qe.setValue(D,mt.setFromMatrixPosition(T.matrixWorld)),Bt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&fe.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),P!==T&&(P=T,$e=!0,$r=!0)}if(G.isSkinnedMesh){fe.setOptional(D,G,"bindMatrix"),fe.setOptional(D,G,"bindMatrixInverse");const Qe=G.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),fe.setValue(D,"boneTexture",Qe.boneTexture,L))}G.isBatchedMesh&&(fe.setOptional(D,G,"batchingTexture"),fe.setValue(D,"batchingTexture",G._matricesTexture,L),fe.setOptional(D,G,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",G._indirectTexture,L),fe.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",G._colorsTexture,L));const qr=j.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&ct.update(G,j,on),($e||Ut.receiveShadow!==G.receiveShadow)&&(Ut.receiveShadow=G.receiveShadow,fe.setValue(D,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Hn.envMap.value=Pt,Hn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(Hn.envMapIntensity.value=k.environmentIntensity),$e&&(fe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Lh(Hn,$r),pt&&J.fog===!0&&q.refreshFogUniforms(Hn,pt),q.refreshMaterialUniforms(Hn,J,N,R,f.state.transmissionRenderTarget[T.id]),Mr.upload(D,Al(Ut),Hn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Mr.upload(D,Al(Ut),Hn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&fe.setValue(D,"center",G.center),fe.setValue(D,"modelViewMatrix",G.modelViewMatrix),fe.setValue(D,"normalMatrix",G.normalMatrix),fe.setValue(D,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Qe=J.uniformsGroups;for(let jr=0,Dh=Qe.length;jr<Dh;jr++){const wl=Qe[jr];z.update(wl,on),z.bind(wl,on)}}return on}function Lh(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ih(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,k,j){Rt.get(T.texture).__webglTexture=k,Rt.get(T.depthTexture).__webglTexture=j;const J=Rt.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const j=Rt.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){A=T,w=k,b=j;let J=!0,G=null,pt=!1,yt=!1;if(T){const Pt=Rt.get(T);if(Pt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(Pt.__hasExternalTextures)L.rebindTextures(T,Rt.get(T.texture).__webglTexture,Rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Dt=T.depthTexture;if(Pt.__boundDepthTexture!==Dt){if(Dt!==null&&Rt.has(Dt)&&(T.width!==Dt.image.width||T.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(yt=!0);const Ht=Rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?G=Ht[k][j]:G=Ht[k],pt=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?G=Rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[j]:G=Ht,x.copy(T.viewport),S.copy(T.scissor),I=T.scissorTest}else x.copy(K).multiplyScalar(N).floor(),S.copy(st).multiplyScalar(N).floor(),I=gt;if(Ct.bindFramebuffer(D.FRAMEBUFFER,G)&&J&&Ct.drawBuffers(T,G),Ct.viewport(x),Ct.scissor(S),Ct.setScissorTest(I),pt){const Pt=Rt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,j)}else if(yt){const Pt=Rt.get(T.texture),zt=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.__webglTexture,j||0,zt)}C=-1},this.readRenderTargetPixels=function(T,k,j,J,G,pt,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){Ct.bindFramebuffer(D.FRAMEBUFFER,wt);try{const Pt=T.texture,zt=Pt.format,Ht=Pt.type;if(!Bt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-J&&j>=0&&j<=T.height-G&&D.readPixels(k,j,J,G,At.convert(zt),At.convert(Ht),pt)}finally{const Pt=A!==null?Rt.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(T,k,j,J,G,pt,yt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(wt=wt[yt]),wt){const Pt=T.texture,zt=Pt.format,Ht=Pt.type;if(!Bt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-J&&j>=0&&j<=T.height-G){Ct.bindFramebuffer(D.FRAMEBUFFER,wt);const Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(k,j,J,G,At.convert(zt),At.convert(Ht),0);const ee=A!==null?Rt.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(D.FRAMEBUFFER,ee);const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ad(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(Dt),D.deleteSync(re),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,j=0){T.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-j),G=Math.floor(T.image.width*J),pt=Math.floor(T.image.height*J),yt=k!==null?k.x:0,wt=k!==null?k.y:0;L.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,yt,wt,G,pt),Ct.unbindTexture()},this.copyTextureToTexture=function(T,k,j=null,J=null,G=0){T.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],k=arguments[2],G=arguments[3]||0,j=null);let pt,yt,wt,Pt,zt,Ht;j!==null?(pt=j.max.x-j.min.x,yt=j.max.y-j.min.y,wt=j.min.x,Pt=j.min.y):(pt=T.image.width,yt=T.image.height,wt=0,Pt=0),J!==null?(zt=J.x,Ht=J.y):(zt=0,Ht=0);const Dt=At.convert(k.format),ee=At.convert(k.type);L.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const re=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ye=D.getParameter(D.UNPACK_SKIP_PIXELS),Jt=D.getParameter(D.UNPACK_SKIP_ROWS),Ut=D.getParameter(D.UNPACK_SKIP_IMAGES),Ae=T.isCompressedTexture?T.mipmaps[G]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,zt,Ht,pt,yt,Dt,ee,Ae.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,zt,Ht,Ae.width,Ae.height,Dt,Ae.data):D.texSubImage2D(D.TEXTURE_2D,G,zt,Ht,pt,yt,Dt,ee,Ae),D.pixelStorei(D.UNPACK_ROW_LENGTH,re),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut),G===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j=null,J=null,G=0){T.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,T=arguments[2],k=arguments[3],G=arguments[4]||0);let pt,yt,wt,Pt,zt,Ht,Dt,ee,re;const he=T.isCompressedTexture?T.mipmaps[G]:T.image;j!==null?(pt=j.max.x-j.min.x,yt=j.max.y-j.min.y,wt=j.max.z-j.min.z,Pt=j.min.x,zt=j.min.y,Ht=j.min.z):(pt=he.width,yt=he.height,wt=he.depth,Pt=0,zt=0,Ht=0),J!==null?(Dt=J.x,ee=J.y,re=J.z):(Dt=0,ee=0,re=0);const Ye=At.convert(k.format),Jt=At.convert(k.type);let Ut;if(k.isData3DTexture)L.setTexture3D(k,0),Ut=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)L.setTexture2DArray(k,0),Ut=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ae=D.getParameter(D.UNPACK_ROW_LENGTH),Qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),wi=D.getParameter(D.UNPACK_SKIP_ROWS),$e=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ut,G,Dt,ee,re,pt,yt,wt,Ye,Jt,he.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,G,Dt,ee,re,pt,yt,wt,Ye,he.data):D.texSubImage3D(Ut,G,Dt,ee,re,pt,yt,wt,Ye,Jt,he),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ae),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,wi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$e),G===0&&k.generateMipmaps&&D.generateMipmap(Ut),Ct.unbindTexture()},this.initRenderTarget=function(T){Rt.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),Ct.unbindTexture()},this.resetState=function(){w=0,b=0,A=null,Ct.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===el?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===kr?"display-p3":"srgb"}}class ol{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new ol(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $u extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class F0 extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,u=Ge,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vi=new se,Mc=new se,sr=[],yc=new Ai,B0=new se,ms=new ae,gs=new as;class Ir extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,B0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),yc.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),gs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Mc.multiplyMatrices(n,Vi),ms.matrixWorld=Mc,ms.raycast(t,sr);for(let o=0,a=sr.length;o<a;o++){const l=sr[o];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new F0(new Float32Array(s*this.count),s,this.count,Za,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qu extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dr=new B,Ur=new B,Sc=new se,_s=new nl,rr=new as,wo=new B,Ec=new B;class z0 extends Ee{constructor(t=new Be,e=new qu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Dr.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dr.distanceTo(Ur);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Sc.copy(s).invert(),_s.copy(t.ray).applyMatrix4(Sc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const g=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=g,f=p-1;_<f;_+=c){const m=u.getX(_),M=u.getX(_+1),v=or(this,t,_s,l,m,M);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(p-1),f=u.getX(g),m=or(this,t,_s,l,_,f);m&&e.push(m)}}else{const g=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=g,f=p-1;_<f;_+=c){const m=or(this,t,_s,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=or(this,t,_s,l,p-1,g);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function or(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Dr.fromBufferAttribute(o,s),Ur.fromBufferAttribute(o,r),e.distanceSqToSegment(Dr,Ur,wo,Ec)>n)return;wo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wo);if(!(l<t.near||l>t.far))return{distance:l,point:Ec.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bc=new B,Ac=new B;class H0 extends z0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bc.fromBufferAttribute(e,s),Ac.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bc.distanceTo(Ac);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ni extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],g=[];let p=0;const _=[],f=n/2;let m=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(g,2));function M(){const y=new B,w=new B;let b=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const P=[],x=C/r,S=x*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,F=U*l+a,$=Math.sin(F),R=Math.cos(F);w.x=S*$,w.y=-x*n+f,w.z=S*R,h.push(w.x,w.y,w.z),y.set($,A,R).normalize(),d.push(y.x,y.y,y.z),g.push(U,1-x),P.push(p++)}_.push(P)}for(let C=0;C<s;C++)for(let P=0;P<r;P++){const x=_[P][C],S=_[P+1][C],I=_[P+1][C+1],U=_[P][C+1];t>0&&(u.push(x,S,U),b+=3),e>0&&(u.push(S,I,U),b+=3)}c.addGroup(m,b,0),m+=b}function v(y){const w=p,b=new It,A=new B;let C=0;const P=y===!0?t:e,x=y===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,f*x,0),d.push(0,x,0),g.push(.5,.5),p++;const S=p;for(let I=0;I<=s;I++){const F=I/s*l+a,$=Math.cos(F),R=Math.sin(F);A.x=P*R,A.y=f*x,A.z=P*$,h.push(A.x,A.y,A.z),d.push(0,x,0),b.x=$*.5+.5,b.y=R*.5*x+.5,g.push(b.x,b.y),p++}for(let I=0;I<s;I++){const U=w+I,F=S+I;y===!0?u.push(F,F+1,U):u.push(F+1,F,U),C+=3}c.addGroup(m,C,y===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class al extends ni{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new al(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new B,y=new B,w=new B;for(let b=0;b<e.length;b+=3)g(e[b+0],v),g(e[b+1],y),g(e[b+2],w),l(v,y,w,M)}function l(M,v,y,w){const b=w+1,A=[];for(let C=0;C<=b;C++){A[C]=[];const P=M.clone().lerp(y,C/b),x=v.clone().lerp(y,C/b),S=b-C;for(let I=0;I<=S;I++)I===0&&C===b?A[C][I]=P:A[C][I]=P.clone().lerp(x,I/S)}for(let C=0;C<b;C++)for(let P=0;P<2*(b-C)-1;P++){const x=Math.floor(P/2);P%2===0?(d(A[C][x+1]),d(A[C+1][x]),d(A[C][x])):(d(A[C][x+1]),d(A[C+1][x+1]),d(A[C+1][x]))}}function c(M){const v=new B;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function u(){const M=new B;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const y=f(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;o.push(y,1-w)}p(),h()}function h(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],w=o[M+4],b=Math.max(v,y,w),A=Math.min(v,y,w);b>.9&&A<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function g(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function p(){const M=new B,v=new B,y=new B,w=new B,b=new It,A=new It,C=new It;for(let P=0,x=0;P<r.length;P+=9,x+=6){M.set(r[P+0],r[P+1],r[P+2]),v.set(r[P+3],r[P+4],r[P+5]),y.set(r[P+6],r[P+7],r[P+8]),b.set(o[x+0],o[x+1]),A.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),w.copy(M).add(v).add(y).divideScalar(3);const S=f(w);_(b,x+0,M,S),_(A,x+2,v,S),_(C,x+4,y,S)}}function _(M,v,y,w){w<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=w/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.vertices,t.indices,t.radius,t.details)}}class cl extends ll{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cl(t.radius,t.detail)}}class Nr extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,d=new B,g=[],p=[],_=[],f=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let y=0;m===0&&o===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let w=0;w<=e;w++){const b=w/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(b+y,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=u[m][M+1],y=u[m][M],w=u[m+1][M],b=u[m+1][M+1];(m!==0||o>0)&&g.push(v,y,b),(m!==n-1||l<Math.PI)&&g.push(y,w,b)}this.setIndex(g),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Or extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new B,h=new B,d=new B;for(let g=0;g<=n;g++)for(let p=0;p<=s;p++){const _=p/s*r,f=g/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(_),h.y=(t+e*Math.cos(f))*Math.sin(_),h.z=e*Math.sin(f),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let p=1;p<=s;p++){const _=(s+1)*g+p-1,f=(s+1)*(g-1)+p-1,m=(s+1)*(g-1)+p,M=(s+1)*g+p;o.push(_,f,M),o.push(f,m,M)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Or(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class k0 extends Ti{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Vt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ti extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ul extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Co=new se,Tc=new B,wc=new B;class ju{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cc=new se,vs=new B,Ro=new B;class V0 extends ju{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),Ro.copy(n.position),Ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ro),n.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc)}}class Ku extends ul{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new V0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class G0 extends ju{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ha extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new G0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zu extends ul{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class W0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Rc(){return performance.now()}class Pc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class X0 extends H0{constructor(t=10,e=10,n=4473924,s=8947848){n=new Vt(n),s=new Vt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,g=0,p=-a;d<=e;d++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const _=d===r?n:s;_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3}const u=new Be;u.setAttribute("position",new le(l,3)),u.setAttribute("color",new le(c,3));const h=new qu({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Y0 extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);const Lc={type:"change"},hl={type:"start"},Ju={type:"end"},ar=new nl,Ic=new qn,$0=Math.cos(70*Ed.DEG2RAD),ge=new B,He=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Po=1e-6;class q0 extends Y0{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ei,this._lastTargetPosition=new B,this._quat=new Ei().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pc,this._sphericalDelta=new Pc,this._scale=1,this._panOffset=new B,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new B,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K0.bind(this),this._onPointerDown=j0.bind(this),this._onPointerUp=Z0.bind(this),this._onContextMenu=s_.bind(this),this._onMouseWheel=t_.bind(this),this._onKeyDown=e_.bind(this),this._onTouchStart=n_.bind(this),this._onTouchMove=i_.bind(this),this._onMouseDown=J0.bind(this),this._onMouseMove=Q0.bind(this),this._interceptControlDown=r_.bind(this),this._interceptControlUp=o_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lc),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=He:n>Math.PI&&(n-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ar.origin.copy(this.object.position),ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ar.direction))<$0?this.object.lookAt(this.target):(Ic.setFromNormalAndCoplanarPoint(this.object.up,this.target),ar.intersectPlane(Ic,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Po||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Po||this._lastTargetPosition.distanceToSquared(this.target)>Po?(this.dispatchEvent(Lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function j0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function K0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Z0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ju),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function J0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case $i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case $i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(hl)}function Q0(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function t_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(hl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ju))}function e_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function n_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(hl)}function i_(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function s_(i){this.enabled!==!1&&i.preventDefault()}function r_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const a_=new sl(-1,1,1,-1,0,1);class l_ extends Be{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const c_=new l_;class th{constructor(t){this._mesh=new ae(c_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,a_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class u_ extends Ls{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Lr.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new th(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dc extends Ls{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class h_ extends Ls{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class d_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new u_(Qu),this.copyPass.material.blending=Fn,this.clock=new W0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dc!==void 0&&(o instanceof Dc?n=!0:o instanceof h_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class f_ extends Ls{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const p_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class os extends Ls{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new vn(r,o,{type:Bn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new vn(r,o,{type:Bn});g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),o=Math.round(o/2)}const a=p_;this.highPassUniforms=Lr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new It(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Qu;this.copyUniforms=Lr.clone(u.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ko,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new Vr,this.fsQuad=new th(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}os.BlurDirectionX=new It(1,0);os.BlurDirectionY=new It(0,1);const $t={MICROBOT:0,NANOBOT:1,UNION:2,REPAIR:3,TRANSFORM:4,MATERIAL:5},m_=6,yn=[{type:$t.MICROBOT,key:"microbot",name:"Microbot",role:"Estructura principal",fn:"Construye el exoesqueleto y la base geométrica",relativeSize:2.2,acceptsObjectMaterial:!1,implemented:!0},{type:$t.NANOBOT,key:"nanobot",name:"Nanobot",role:"Detalle y precisión",fn:"Rellena superficies y sube la resolución de la figura",relativeSize:1,acceptsObjectMaterial:!0,implemented:!0},{type:$t.UNION,key:"union",name:"Union Bot",role:"Conexión estructural",fn:"Une nodos del exoesqueleto y sostiene la estructura",relativeSize:2.6,acceptsObjectMaterial:!0,implemented:!0,note:"Sólo en formas con exoesqueleto de vigas (cubo, carro…). Las formas humanoides usan hueso macizo, sin vigas."},{type:$t.REPAIR,key:"repair",name:"Repair Bot",role:"Mantenimiento",fn:"Detecta huecos en la figura y los rellena",relativeSize:1.8,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"La detección de huecos ya existe (cobertura por vóxeles); falta el despacho de agentes que los rellene."},{type:$t.TRANSFORM,key:"transform",name:"Transform Bot",role:"Reconfiguración",fn:"Coordina el cambio de una forma a otra",relativeSize:3,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"El morph directo entre figuras ya funciona, pero lo ejecuta el enjambre entero, no agentes de este tipo."},{type:$t.MATERIAL,key:"material",name:"Material Bot",role:"Material y recubrimiento",fn:"Aplica el color y el material del objeto sobre las demás capas",relativeSize:1.4,acceptsObjectMaterial:!0,implemented:!0}];function dl(i){return yn[i]??yn[$t.NANOBOT]}const g_=[{label:"Microbots",types:[$t.MICROBOT,$t.UNION]},{label:"Nanobots",types:[$t.NANOBOT,$t.MATERIAL]}];function __(i,t){return g_.map((e,n)=>{const s=e.types.map(r=>({name:dl(r).name,count:i[r]??0}));return{label:e.label,configured:t[n],onScreen:s.reduce((r,o)=>r+o.count,0),parts:s}})}function v_(i){const t=`${Uc(i.configured)} pedidos`;if(i.onScreen===0)return`${i.label}: ${t} · ninguno en escena`;const e=i.parts.map(n=>`${Uc(n.count)} ${n.name}`).join(" + ");return`${i.label}: ${t} = ${e}`}function Uc(i){return String(i).replace(/\B(?=(\d{3})+(?!\d))/g,".")}const Nc={[$t.MICROBOT]:{identityColor:3108816,identityEmissive:861520,emissiveIntensity:.35},[$t.NANOBOT]:{identityColor:1871706,identityEmissive:670244,emissiveIntensity:.35},[$t.UNION]:{identityColor:14263322,identityEmissive:4862981,emissiveIntensity:.4},[$t.REPAIR]:{identityColor:13120559,identityEmissive:4526094,emissiveIntensity:.4},[$t.TRANSFORM]:{identityColor:9127620,identityEmissive:3019332,emissiveIntensity:.4},[$t.MATERIAL]:{identityColor:2078896,identityEmissive:671034,emissiveIntensity:.4}};function rn(i){return Nc[i]??Nc[$t.NANOBOT]}const eh=.35,nh=.85;function x_(i){const t=new $u;t.background=new Vt(197898),t.fog=new ol(197898,.018);const e=new Ve(55,window.innerWidth/window.innerHeight,.1,200);e.position.set(0,6,26),e.lookAt(0,0,0);const n=new Yu({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=mu,n.toneMapping=_u,n.toneMappingExposure=1.1,n.outputColorSpace=dn,i.appendChild(n.domElement);const s=new X0(60,60,1732520,797501);s.position.y=-13,s.material.opacity=.35,s.material.transparent=!0,t.add(s);const r=new ae(new Ps(120,120),new k0({opacity:.45}));r.rotation.x=-Math.PI/2,r.position.y=-13,r.receiveShadow=!0,t.add(r);const o=new Zu(1849938,1.2);t.add(o);const a=new Ku(4973567,2.2,60);a.position.set(0,10,10),t.add(a);const l=new Ha(16777215,1.4);l.position.set(14,22,10),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-22,l.shadow.camera.right=22,l.shadow.camera.top=22,l.shadow.camera.bottom=-22,l.shadow.camera.near=1,l.shadow.camera.far=60,l.shadow.bias=-.0015,t.add(l);const c=new q0(e,n.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.minDistance=6,c.maxDistance=80,c.target.set(0,0,0);const u=new d_(n);u.addPass(new f_(t,e));const h=new os(new It(window.innerWidth,window.innerHeight),.55,.4,eh);return u.addPass(h),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)}),{scene:t,camera:e,renderer:n,composer:u,controls:c}}const si=5.5,nn=[4,2,4],M_=2.5,H=si;function Ie(i,t){return i+Math.random()*(t-i)}function Nt(i,t){const e=t.reduce((a,l)=>a+l,0),n=t.map(a=>a/e*i),s=n.map(a=>Math.floor(a)),r=i-s.reduce((a,l)=>a+l,0),o=n.map((a,l)=>({i:l,frac:a-s[l]})).sort((a,l)=>l.frac-a.frac);for(let a=0;a<r;a++)s[o[a%o.length].i]++;return s}function Se(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=r%6,a=Ie(-1,1),l=Ie(-1,1);let c=0,u=0,h=0;switch(o){case 0:c=i,u=a*t,h=l*e;break;case 1:c=-i,u=a*t,h=l*e;break;case 2:u=t,c=a*i,h=l*e;break;case 3:u=-t,c=a*i,h=l*e;break;case 4:h=e,c=a*i,u=l*t;break;default:h=-e,c=a*i,u=l*t;break}s[r*3]=c,s[r*3+1]=u,s[r*3+2]=h}return s}function qt(i,t){const e=new Float32Array(t*3),n=Math.PI*(3-Math.sqrt(5));for(let s=0;s<t;s++){const r=t>1?1-s/(t-1)*2:0,o=Math.sqrt(Math.max(0,1-r*r)),a=n*s;e[s*3]=Math.cos(a)*o*i,e[s*3+1]=r*i,e[s*3+2]=Math.sin(a)*o*i}return e}function y_(i,t,e,n){const s=new Float32Array(t*3),r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<t;o++){const a=t>1?o/(t-1):0,l=n-a*(n-e),c=Math.sqrt(Math.max(0,1-l*l)),u=r*o;s[o*3]=Math.cos(u)*c*i,s[o*3+1]=l*i,s[o*3+2]=Math.sin(u)*c*i}return s}function $n(i,t,e,n,s,r,o){const a=Math.sqrt(e*e+n*n+s*s)||1,l=e/a,c=n/a,u=s/a;for(let h=0;h<t;h++){const d=i[h*3],g=i[h*3+1],p=i[h*3+2],_=Math.sqrt(d*d+g*g+p*p)||1;(d*l+g*c+p*u)/_<r||(i[h*3]=d*o,i[h*3+1]=g*o,i[h*3+2]=p*o)}}function Lo(i,t,e){const n=new Float32Array(e*3);for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2;if(Math.random()<.15){const o=i*Math.sqrt(Math.random()),a=Math.random()<.5?t:-t;n[s*3]=Math.cos(r)*o,n[s*3+1]=a,n[s*3+2]=Math.sin(r)*o}else n[s*3]=Math.cos(r)*i,n[s*3+1]=Ie(-t,t),n[s*3+2]=Math.sin(r)*i}return n}function ce(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2;if(Math.random()<.15){const a=Math.random()<.5,c=(a?i:t)*Math.sqrt(Math.random()),u=a?e:-e;s[r*3]=Math.cos(o)*c,s[r*3+1]=u,s[r*3+2]=Math.sin(o)*c}else{const a=Ie(-e,e),l=(a+e)/(2*e||1),c=t+(i-t)*l;s[r*3]=Math.cos(o)*c,s[r*3+1]=a,s[r*3+2]=Math.sin(o)*c}}return s}function ke(i,t,e,n){const s=e/2,[r,o,a,l]=Nt(n,[12,38,38,12]),c=ut(qt(t,r),0,-e,0),u=ut(ce(i,t,s,o),0,-s,0),h=ut(ce(t,i,s,a),0,s,0),d=ut(qt(t,l),0,e,0);return xe([c,u,h,d])}function En(i,t,e){const n=new Float32Array(t*3);if(i.length<2||t<=0)return n;const s=i.length-1,r=[];for(let l=0;l<s;l++){const[c,u,h]=i[l],[d,g,p]=i[l+1];r.push(Math.hypot(d-c,g-u,p-h)||1e-6)}const o=Nt(t,r);let a=0;for(let l=0;l<s;l++){const[c,u,h]=i[l],[d,g,p]=i[l+1],_=o[l];for(let f=0;f<_;f++){const m=Math.random();n[a*3]=c+(d-c)*m+Ie(-e,e),n[a*3+1]=u+(g-u)*m+Ie(-e,e),n[a*3+2]=h+(p-h)*m+Ie(-e,e),a++}}return n}function mn(i,t,e){const n=new Float32Array(i.length);n.set(i);for(let s=t;s<n.length;s+=3)n[s]*=e;return n}function ut(i,t,e,n){const s=new Float32Array(i.length);for(let r=0;r<i.length;r+=3)s[r]=i[r]+t,s[r+1]=i[r+1]+e,s[r+2]=i[r+2]+n;return s}function Fr(i){const t=new Float32Array(i.length);for(let e=0;e<i.length;e+=3)t[e]=i[e+1],t[e+1]=-i[e],t[e+2]=i[e+2];return t}function xe(i){const t=i.reduce((s,r)=>s+r.length,0),e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function Is(){const i=H*.5,t=H*.24,e=H*.16,n=e+i*.9,s=i*.78;return{headR:i,neckR:t,neckHalfH:e,headCenterY:n,skullR:s}}function S_(i){const{headR:t,neckR:e,neckHalfH:n,headCenterY:s}=Is(),r=t*.62,o=s-t*.55,a=t*.22,l=s-t*.05,c=t*.14,u=s-t*.05,[h,d,g,p,_]=Nt(i,[44,22,10,8,16]),[f,m]=Nt(g,[1,1]),M=ut(mn(qt(t,h),2,.86),0,s,0),v=ut(mn(qt(r,d),2,.8),0,o,t*.1),y=[ut(mn(qt(a,f),0,.35),-t*.92,l,0),ut(mn(qt(a,m),0,.35),t*.92,l,0)],w=ut(mn(qt(c,p),1,.7),0,u,t*.88),b=ut(ce(e,e*1.15,n,_),0,0,0);return xe([M,v,...y,w,b])}function E_(i){const{headR:t,headCenterY:e}=Is(),[n,s]=Nt(i,[88,12]),[r,o]=Nt(s,[1,1]),a=ut(mn(y_(t*1.04,n,.34,1),2,.88),0,e,0),l=e+t*.18,c=t*.84,u=t*.16,h=[En([[-t*.42,l,c],[-t*.42+u,l+t*.02,c]],r,t*.015),En([[t*.42-u,l+t*.02,c],[t*.42,l,c]],o,t*.015)];return xe([a,...h])}function b_(i){const{headR:t,headCenterY:e}=Is(),n=t*.1,s=e+t*.08,r=t*.36,o=t*.82,[a,l]=Nt(i,[1,1]);return xe([ut(qt(n,a),-r,s,o),ut(qt(n,l),r,s,o)])}function A_(i){const{headR:t,headCenterY:e}=Is(),n=e-t*.42,s=t*.85,r=t*.22;return En([[-r,n,s],[0,n-t*.02,s*1.01],[r,n,s]],i,t*.03)}const ka=[{name:"piel",generator:S_,weight:.55,color:14394745},{name:"cabello",generator:E_,weight:.28,color:2824978},{name:"ojos",generator:b_,weight:.07,color:4139546},{name:"labios",generator:A_,weight:.1,color:11620938}];function T_(i){const t=Nt(i,ka.map(e=>e.weight));return xe(ka.map((e,n)=>e.generator(t[n])))}function w_(i){const t=H*.62,e=H*.42,n=H*.55,s=H*.48,r=H*.26,o=H*.34,a=H*.14,l=0,c=l-r,u=l+n,h=u+n,d=t*.95,[g,p,_]=Nt(i,[55,30,15]),[f,m]=Nt(_,[1,1]),M=ut(ce(t,e,n,g),0,u,0),v=ut(Se(s,r,o,p),0,c,0),y=[ut(qt(a,f),-d,h,0),ut(qt(a,m),d,h,0)];return xe([M,v,...y])}function C_(i){const t=H*.22,e=H*.26,n=H*.19,s=H*.6,r=H*.16,o=H*.18,a=H*.12,l=H*.55,c=H*.15,u=H*.2,h=H*.06,d=H*.035,g=H*.15,p=0,_=p-s,f=p-s*2,m=f-l,M=f-l*2,v=M-u,w=M-u*2-g,[b,A,C,P,x,S]=Nt(i,[6,24,4,20,16,30]),I=Nt(S,[1,1,1,1,1]),U=ut(qt(t,b),0,p,0),F=ut(ce(e,n,s,A),0,_,0),$=ut(qt(r,C),0,f,0),R=ut(ce(o,a,l,P),0,m,0),N=ut(Se(c,u,h,x),0,v,0),lt=[-2,-1,0,1,2].map((K,st)=>ut(ce(d,d*1.3,g,I[st]),K*c*.4,w,0));return Fr(xe([U,F,$,R,N,...lt]))}function R_(i){const t=H*.24,e=H*.3,n=H*.2,s=H*.65,r=H*.18,o=H*.2,a=H*.13,l=H*.62,c=H*.16,u=H*.09,h=H*.36,d=H*.04,g=H*.09,p=0,_=p-s,f=p-s*2,m=f-l,v=f-l*2-u,[y,w,b,A,C,P]=Nt(i,[6,26,4,22,22,20]),x=Nt(P,[1,1,1,1,1]),S=ut(qt(t,y),0,p,0),I=ut(ce(e,n,s,w),0,_,0),U=ut(qt(r,b),0,f,0),F=ut(ce(o,a,l,A),0,m,0),$=ut(Se(c,u,h,C),0,v,h*.5),N=[-.6,-.3,0,.3,.6].map((O,lt)=>ut(Se(d,d,g,x[lt]),O*c,v,h+g));return xe([S,I,U,F,$,...N])}function P_(i){const t=H*.22,e=H*.18,n=H*.42,s=H*.5,r=H*.16,o=H*.07,a=H*.05,l=[.55,.72,.78,.7,.5],c=[-.85,-.45,0,.45,.85],u=0,h=u-e-s,d=h-s,[g,p,_]=Nt(i,[10,35,55]),f=Nt(_,[.9,1,1.1,1,.8]),m=ut(ce(t,t*1.1,e,g),0,u,0),M=ut(Se(n,s,r,p),0,h,0),v=c.map((y,w)=>{const b=H*l[w]*.5;return ut(ce(o,a,b,f[w]),y*n,d-b,0)});return xe([m,M,...v])}function L_(i){const t=H*.24,e=H*.2,n=H*.34,s=H*.22,r=H*.75,o=H*.09,a=[.75,1,.95,.85,.7],l=[-.65,-.3,0,.3,.65],c=0,u=c-e-s,h=r*.3+r,[d,g,p]=Nt(i,[10,55,35]),_=Nt(p,[1,1,1,1,1]),f=ut(ce(t,t*1.1,e,d),0,c,0),m=ut(Se(n,s,r,g),0,u,r*.3),M=l.map((v,y)=>{const w=H*.16*a[y];return ut(Se(o,o,w,_[y]),v*n,u,h+w)});return xe([f,m,...M])}function I_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=e%6,s=Ie(-H,H),r=Ie(-H,H);let o=0,a=0,l=0;switch(n){case 0:o=H,a=s,l=r;break;case 1:o=-H,a=s,l=r;break;case 2:a=H,o=s,l=r;break;case 3:a=-H,o=s,l=r;break;case 4:l=H,o=s,a=r;break;default:l=-H,o=s,a=r;break}t[e*3]=o,t[e*3+1]=a,t[e*3+2]=l}return t}function D_(i){const t=new Float32Array(i*3),e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n++){const s=i>1?1-n/(i-1)*2:0,r=Math.sqrt(Math.max(0,1-s*s)),o=e*n;t[n*3]=Math.cos(o)*r*H,t[n*3+1]=s*H,t[n*3+2]=Math.sin(o)*r*H}return t}function U_(i){const t=new Float32Array(i*3),e=[-H,-H,-H],n=[H,-H,-H],s=[H,-H,H],r=[-H,-H,H],o=[0,H,0],a=[[e,n,o],[n,s,o],[s,r,o],[r,e,o]],l=Math.round(i*.3);for(let c=0;c<i;c++){let u,h,d;if(c<l)u=Ie(-H,H),h=-H,d=Ie(-H,H);else{const[g,p,_]=a[(c-l)%4];let f=Math.random(),m=Math.random();f+m>1&&(f=1-f,m=1-m),u=g[0]+f*(p[0]-g[0])+m*(_[0]-g[0]),h=g[1]+f*(p[1]-g[1])+m*(_[1]-g[1]),d=g[2]+f*(p[2]-g[2])+m*(_[2]-g[2])}t[c*3]=u,t[c*3+1]=h,t[c*3+2]=d}return t}function N_(i){const t=new Float32Array(i*3),e=5,n=H,s=H*.42,r=Math.PI/e;for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,l=a%r/r,h=(Math.floor(a/r)%2===0?n+(s-n)*l:s+(n-s)*l)*Math.sqrt(Math.random());t[o*3]=Math.cos(a)*h,t[o*3+1]=Math.sin(a)*h,t[o*3+2]=Ie(-H*.12,H*.12)}return t}function O_(i){const t=new Float32Array(i*3),e=H*.75,n=H*.28;for(let s=0;s<i;s++){const r=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;t[s*3]=(e+n*Math.cos(o))*Math.cos(r),t[s*3+1]=n*Math.sin(o),t[s*3+2]=(e+n*Math.cos(o))*Math.sin(r)}return t}function F_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random()),r=16*Math.pow(Math.sin(n),3),o=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);t[e*3]=r/16*H*s,t[e*3+1]=o/16*H*s,t[e*3+2]=Ie(-H*.15,H*.15)}return t}function B_(i){const t=new Float32Array(i*3),e=H,n=H*.22;for(let s=0;s<i;s++){let r=0,o=0;for(let a=0;a<20&&(r=Ie(-e,e),o=Ie(-e,e),!(Math.abs(r)<=n||Math.abs(o)<=n));a++);t[s*3]=r,t[s*3+1]=o,t[s*3+2]=Ie(-H*.15,H*.15)}return t}function z_(i){const t=H*.62,e=H*.14,n=H*.42,s=t*.5,r=H*.3,o=H*.14,a=.35,l=H*.34,c=H*.16,u=H*.32,h=H*.16,d=H*.1,g=H*.36,p=H*.05,_=H*.08,f=H*.4,m=H*.05,M=H*.018,v=H*.34,y=H*.018,w=H*.1,b=H*.045,A=H*.03,C=H*.04,P=H*.055,x=H*.22,S=H*.1,I=t,U=-t,[F,$,R,N,O,lt,K,st,gt,St,X]=Nt(i,[22,10,14,6,4,5,2,2,2,20,13]),[Q,ft]=Nt(K,[1,1]),[ht,mt]=Nt(st,[1,1]),[Et,Ot]=Nt(gt,[1,1]),kt=Nt(St,[1,1,1,1]),Ft=Se(t,e,n,F),D=ut(Fr(mn(ce(o,r,s,$),0,a)),s,e+r*a*.6,0),Kt=ut(Se(l,c,u,R),-t*.12,e+c,0),Lt=ut(Se(h,d,g,N),U+h*.6,e+d,0),Bt=ut(Se(p,_,f,O),I+p*.7,-e*.3,0),Ct=e+d*2+w*2+M,Wt=ut(Se(m,M,v,lt),U+h*.4,Ct,0),Rt=e+d*2,L=[ut(Lo(y,w,Q),U+h*.4,Rt+w,-v*.7),ut(Lo(y,w,ft),U+h*.4,Rt+w,v*.7)],E=[ut(Se(b,A,C,ht),-t*.05,e+c*1.6,-u-C),ut(Se(b,A,C,mt),-t*.05,e+c*1.6,u+C)],W=[ut(qt(P,Et),I*.96,e*.4,-n*.7),ut(qt(P,Ot),I*.96,e*.4,n*.7)],et=[[-t*.55,-n*.95],[t*.55,-n*.95],[-t*.55,n*.95],[t*.55,n*.95]],at=et.map(([it,Tt],V)=>ut(Fr(Lo(x,S,kt[V])),it,-e,Tt)),nt=[{pts:[[0,e+r*a,0],[I,e+o*a,0]],weight:s*2},{pts:[[U*.9,e*.3,-n*.98],[I*.9,e*.55,-n*.98]],weight:t*1.8},{pts:[[U*.9,e*.3,n*.98],[I*.9,e*.55,n*.98]],weight:t*1.8},...et.map(([it,Tt])=>({pts:[[it-x*1.3,e*.2,Tt],[it,e*.75,Tt],[it+x*1.3,e*.2,Tt]],weight:x*2.6}))],Y=Nt(X,nt.map(it=>it.weight)),q=nt.map((it,Tt)=>En(it.pts,Y[Tt],H*.02));return xe([Ft,D,Kt,Lt,Bt,Wt,...L,...E,...W,...at,...q])}function H_(i){return Se(H*.42,H*.85,H*.09,i)}function ih(){const i=H*.2,t=H*.09,e=H*.045,n=H*.34,s=H*.22,r=H*.28,o=H*.26,a=H*.14,l=H*.18,c=H*.07,u=H*.085,h=H*.06,d=H*.22,g=H*.06,p=H*.045,_=H*.2,f=H*.06,m=H*.14,M=H*.1,v=H*.28,y=H*.1,w=H*.07,b=H*.26,A=H*.06,C=H*.04,P=H*.14,x=0,S=x-a,I=x+r,U=I+r,F=U+e,$=F+e+i*.9,R=U,N=n*.95,O=N,lt=R-d,K=R-d*2,st=K-_,gt=K-_*2,St=gt-f*.8,X=o*.5,Q=x-a*2,ft=Q-v,ht=Q-v*2,mt=ht-b,Et=ht-b*2,Ot=Et-C,kt=n*.85;return{headR:i,neckR:t,neckHalfH:e,chestTopR:n,chestBottomR:s,chestHalfH:r,pelvisHx:o,pelvisHy:a,pelvisHz:l,shoulderR:c,upperArmTopR:u,upperArmBottomR:h,upperArmHalfH:d,forearmTopR:g,forearmBottomR:p,forearmHalfH:_,handR:f,thighTopR:m,thighBottomR:M,thighHalfH:v,calfTopR:y,calfBottomR:w,calfHalfH:b,footHx:A,footHy:C,footHz:P,waistY:x,pelvisCenterY:S,chestCenterY:I,chestTopY:U,neckCenterY:F,headCenterY:$,shoulderY:R,shoulderX:N,armX:O,upperArmCenterY:lt,elbowY:K,forearmCenterY:st,wristY:gt,handCenterY:St,hipX:X,hipY:Q,thighCenterY:ft,kneeY:ht,calfCenterY:mt,ankleY:Et,footCenterY:Ot,chestFrontZ:kt}}function k_(i){const{headR:t,neckR:e,neckHalfH:n,chestTopR:s,chestBottomR:r,chestHalfH:o,pelvisHx:a,pelvisHy:l,pelvisHz:c,shoulderR:u,upperArmTopR:h,upperArmBottomR:d,upperArmHalfH:g,forearmTopR:p,forearmBottomR:_,forearmHalfH:f,handR:m,thighTopR:M,thighBottomR:v,thighHalfH:y,calfTopR:w,calfBottomR:b,calfHalfH:A,footHx:C,footHy:P,footHz:x,chestCenterY:S,chestTopY:I,neckCenterY:U,headCenterY:F,shoulderY:$,shoulderX:R,armX:N,upperArmCenterY:O,forearmCenterY:lt,handCenterY:K,hipX:st,thighCenterY:gt,calfCenterY:St,footCenterY:X,chestFrontZ:Q,waistY:ft,pelvisCenterY:ht}=ih(),[mt,Et,Ot,kt,Ft,D,Kt,Lt,Bt,Ct,Wt,Rt]=Nt(i,[8,2,16,10,2,10,8,4,14,10,6,10]),[L,E]=Nt(Ft,[1,1]),[W,et]=Nt(D,[1,1]),[at,nt]=Nt(Kt,[1,1]),[Y,q]=Nt(Lt,[1,1]),[it,Tt]=Nt(Bt,[1,1]),[V,tt]=Nt(Ct,[1,1]),[ot,ct]=Nt(Wt,[1,1]),dt=ut(mn(qt(t,mt),2,.8),0,F,0),bt=ut(ce(e,e*1.1,n,Et),0,U,0),At=ut(ce(s,r,o,Ot),0,S,0),Gt=ut(Se(a,l,c,kt),0,ht,0),z=[ut(qt(u,L),-R,$,0),ut(qt(u,E),R,$,0)],xt=[ut(ce(h,d,g,W),-N,O,0),ut(ce(h,d,g,et),N,O,0)],Z=[ut(ce(p,_,f,at),-N,lt,0),ut(ce(p,_,f,nt),N,lt,0)],rt=[ut(mn(qt(m,Y),2,.6),-N,K,0),ut(mn(qt(m,q),2,.6),N,K,0)],vt=[ut(ce(M,v,y,it),-st,gt,0),ut(ce(M,v,y,Tt),st,gt,0)],Mt=[ut(ce(w,b,A,V),-st,St,0),ut(ce(w,b,A,tt),st,St,0)],jt=[ut(Se(C,P,x,ot),-st,X,x*.5),ut(Se(C,P,x,ct),st,X,x*.5)],ue=[S+o*.5,S,S-o*.4],be=[{pts:[[-R*.7,$,Q*.6],[R*.7,$,Q*.6]],weight:R},...ue.map((Ce,ri)=>({pts:[[-s*(.75-ri*.08),Ce,Q],[s*(.75-ri*.08),Ce,Q]],weight:s})),{pts:[[0,I*.9,Q],[H*.02,S,Q*.95],[-H*.02,ft+o*.3,Q*.9],[0,ft,Q*.85]],weight:o*1.5}],Zt=Nt(Rt,be.map(Ce=>Ce.weight)),we=be.map((Ce,ri)=>En(Ce.pts,Zt[ri],H*.015));return xe([dt,bt,At,Gt,...z,...xt,...Z,...rt,...vt,...Mt,...jt,...we])}function V_(i){const t=ih(),e=t.headR*.75,n=t.neckR*.7,s=t.upperArmBottomR*.4,r=t.upperArmTopR*.55,o=t.upperArmHalfH*.75,a=t.forearmBottomR*.4,l=t.forearmTopR*.55,c=t.forearmHalfH*.75,u=t.thighBottomR*.4,h=t.thighTopR*.55,d=t.thighHalfH*.75,g=t.calfBottomR*.4,p=t.calfTopR*.55,_=t.calfHalfH*.75,f=t.handR*.5,m=t.footHy*.7,M=[t.chestTopY,t.chestCenterY,t.waistY,t.pelvisCenterY],v=[t.chestCenterY+t.chestHalfH*.4,t.chestCenterY,t.chestCenterY-t.chestHalfH*.4],[y,w,b,A,C,P,x,S,I]=Nt(i,[10,10,10,14,12,4,16,14,4]),U=Nt(w,M.map(()=>1)),F=Nt(b,v.map(()=>1)),[$,R]=Nt(A,[1,1]),[N,O]=Nt(C,[1,1]),[lt,K]=Nt(P,[1,1]),[st,gt]=Nt(x,[1,1]),[St,X]=Nt(S,[1,1]),[Q,ft]=Nt(I,[1,1]),ht=ut(qt(e,y),0,t.headCenterY,0),mt=M.map((Bt,Ct)=>ut(qt(n,U[Ct]),0,Bt,0)),Et=v.map((Bt,Ct)=>En([[-1.87*.7,Bt,t.chestFrontZ*.9],[0,Bt,t.chestFrontZ],[t.chestTopR*.7,Bt,t.chestFrontZ*.9]],F[Ct],H*.01)),Ot=[ut(ke(s,r,o,$),-1.7765,t.upperArmCenterY,0),ut(ke(s,r,o,R),t.armX,t.upperArmCenterY,0)],kt=[ut(ke(a,l,c,N),-1.7765,t.forearmCenterY,0),ut(ke(a,l,c,O),t.armX,t.forearmCenterY,0)],Ft=[ut(qt(f,lt),-1.7765,t.handCenterY,0),ut(qt(f,K),t.armX,t.handCenterY,0)],D=[ut(ke(u,h,d,st),-.7150000000000001,t.thighCenterY,0),ut(ke(u,h,d,gt),t.hipX,t.thighCenterY,0)],Kt=[ut(ke(g,p,_,St),-.7150000000000001,t.calfCenterY,0),ut(ke(g,p,_,X),t.hipX,t.calfCenterY,0)],Lt=[ut(qt(m,Q),-.7150000000000001,t.footCenterY,0),ut(qt(m,ft),t.hipX,t.footCenterY,0)];return xe([ht,...mt,...Et,...Ot,...kt,...Ft,...D,...Kt,...Lt])}function G_(i){const{headCenterY:t,skullR:e}=Is(),n=H*.1,s=e*.6,r=t-e*.55,[o,a,l,c]=Nt(i,[48,20,14,18]),u=mn(qt(e,o),2,.88);$n(u,o,-.42,.12,.9,.8,.6),$n(u,o,.42,.12,.9,.8,.6),$n(u,o,0,-.15,1,.94,.72),$n(u,o,-.42,.32,.85,.9,1.15),$n(u,o,.42,.32,.85,.9,1.15),$n(u,o,-.55,-.05,.8,.88,1.12),$n(u,o,.55,-.05,.8,.88,1.12),$n(u,o,0,.05,1,.95,1.08);const h=ut(u,0,t,0),d=r+s*.7,g=r+s*.1,p=r-s*.35,_=En([[-s,d,0],[-s*.95,g,s*.35],[0,p,s*.78],[s*.95,g,s*.35],[s,d,0]],a,s*.1),f=r-s*.05,m=s*.65,[M,v]=Nt(l,[1,1]),y=[En([[-s*.55,f+s*.18,m],[s*.55,f+s*.18,m]],M,s*.03),En([[-s*.5,f-s*.1,m*.95],[s*.5,f-s*.1,m*.95]],v,s*.03)],w=ut(qt(n,c),0,0,0);return xe([h,_,...y,w])}function W_(i){const t=H*.62,e=H*.55,n=H*.26,s=0,r=s+e,o=r+e,a=s-n,l=t*.85,c=t*.95,u=H*.09,h=H*.12,d=[o,r,s,a],g=[r+e*.4,r,r-e*.4],[p,_,f]=Nt(i,[30,45,25]),m=Nt(p,d.map(()=>1)),M=Nt(_,g.map(()=>1)),[v,y]=Nt(f,[1,1]),w=d.map((C,P)=>ut(qt(u,m[P]),0,C,0)),b=g.map((C,P)=>En([[-t*.7,C,l*.9],[0,C,l],[t*.7,C,l*.9]],M[P],H*.01)),A=[ut(qt(h,v),-c,o,0),ut(qt(h,y),c,o,0)];return xe([...w,...b,...A])}function X_(i){const t=H*.6,e=H*.55,n=H*.2,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,u=H*.08,h=H*.13,d=H*.06,g=H*.1,p=H*.09,[_,f,m]=Nt(i,[40,40,20]),M=ut(ke(u,h,t*.8,_),0,r,0),v=ut(ke(d,g,e*.8,f),0,a,0),y=ut(qt(p,m),0,c,0);return Fr(xe([M,v,y]))}function Y_(i){const t=H*.65,e=H*.62,n=H*.09,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,u=H*.1,h=H*.16,d=H*.08,g=H*.12,p=H*.1,[_,f,m]=Nt(i,[42,40,18]),M=ut(ke(u,h,t*.8,_),0,r,0),v=ut(ke(d,g,e*.8,f),0,a,0),y=ut(qt(p,m),0,c,0);return xe([M,v,y])}function $_(i){const t=H*.18,e=H*.5,n=H*.42,s=[.55,.72,.78,.7,.5],r=[-.85,-.45,0,.45,.85],o=0,l=o-t-e-e,c=H*.08,u=H*.035,[h,d]=Nt(i,[15,85]),g=Nt(d,[.9,1,1.1,1,.8]),p=ut(qt(c,h),0,o,0),_=r.map((f,m)=>{const M=H*s[m]*.4;return ut(ke(u*.7,u,M,g[m]),f*n,l-M,0)});return xe([p,..._])}function q_(i){const t=H*.2,e=H*.22,n=H*.75,s=H*.34,r=[.75,1,.95,.85,.7],o=[-.65,-.3,0,.3,.65],a=0,l=a-t-e,c=n*.3+n,u=H*.1,h=H*.04,[d,g]=Nt(i,[20,80]),p=Nt(g,[1,1,1,1,1]),_=ut(qt(u,d),0,a,0),f=o.map((m,M)=>{const v=H*.16*r[M]*.7;return ut(ke(h*.7,h,v,p[M]),m*s,l,c*.6)});return xe([_,...f])}const ws=new Map,sh=new Map,Va=new Map;function Te(i){ws.set(i.name,i);for(const t of i.aliases)sh.set(t,i.name);Va.set(i.name,(Va.get(i.name)??0)+1)}function j_(i){return Va.get(i)??0}function fl(i){return ws.get(i)??null}Te({name:"cubo",aliases:["caja","dado"],generate:I_});Te({name:"esfera",aliases:["bola","globo","planeta"],generate:D_});Te({name:"piramide",aliases:["triangulo"],generate:U_});Te({name:"estrella",aliases:[],generate:N_});Te({name:"anillo",aliases:["dona","donut","rosquilla","toro"],generate:O_});Te({name:"corazon",aliases:["amor","love"],generate:F_});Te({name:"cruz",aliases:["plus","mas"],generate:B_});Te({name:"carro",aliases:["auto","coche","vehiculo"],generate:z_});Te({name:"telefono",aliases:["celular","movil","smartphone"],generate:H_});Te({name:"persona",aliases:["personaje","humano","gente"],generate:k_,bones:V_});Te({name:"cabeza",aliases:[],generate:T_,bones:G_,colorParts:ka});Te({name:"torso",aliases:["tronco"],generate:w_,bones:W_});Te({name:"brazo",aliases:["brazos"],generate:C_,bones:X_});Te({name:"pierna",aliases:["piernas"],generate:R_,bones:Y_});Te({name:"mano",aliases:["manos"],generate:P_,bones:$_});Te({name:"pie",aliases:["pies"],generate:L_,bones:q_});const K_=new RegExp("[\\u0300-\\u036f]","g");function Z_(i){return i.normalize("NFD").replace(K_,"").toLowerCase().trim()}function pl(i){const t=Z_(i);if(ws.has(t))return t;const e=sh.get(t);return e&&ws.has(e)?e:null}function J_(){return[...ws.keys()]}const Oc="escaneo";function Q_(i,t){const e=Math.floor(i.length/3),n=si*.02;return s=>{const r=new Float32Array(s*3),o=new Uint8Array(s*3);if(e===0)return{points:r,colors:o};for(let a=0;a<s;a++){const l=a>=e,c=l?Math.floor(Math.random()*e):a,u=l?(Math.random()*2-1)*n:0,h=l?(Math.random()*2-1)*n:0,d=l?(Math.random()*2-1)*n:0;r[a*3+0]=i[c*3+0]+u,r[a*3+1]=i[c*3+1]+h,r[a*3+2]=i[c*3+2]+d,t?(o[a*3+0]=t[c*3+0],o[a*3+1]=t[c*3+1],o[a*3+2]=t[c*3+2]):(o[a*3+0]=255,o[a*3+1]=255,o[a*3+2]=255)}return{points:r,colors:o}}}function rh(i,t=null){const e=Q_(i,t);return Te({name:Oc,aliases:[],generate:n=>e(n).points,...t?{generateWithColor:e}:{}}),Oc}const ye={DETAIL:0,COLOR:1},tv=.75;function ev(i,t){const e=[];if(t<2)return e;const n=new Uint8Array(t),s=new Float32Array(t).fill(1/0),r=new Int32Array(t).fill(-1);n[0]=1;for(let o=1;o<t;o++){const a=i[o*3+0]-i[0],l=i[o*3+1]-i[1],c=i[o*3+2]-i[2];s[o]=a*a+l*l+c*c,r[o]=0}for(let o=1;o<t;o++){let a=-1,l=1/0;for(let d=0;d<t;d++)!n[d]&&s[d]<l&&(l=s[d],a=d);if(a===-1)break;n[a]=1,e.push([r[a],a]);const c=i[a*3+0],u=i[a*3+1],h=i[a*3+2];for(let d=0;d<t;d++){if(n[d])continue;const g=i[d*3+0]-c,p=i[d*3+1]-u,_=i[d*3+2]-h,f=g*g+p*p+_*_;f<s[d]&&(s[d]=f,r[d]=a)}}return e}const nv=2;function iv(i,t,e){const n=[],s=Math.min(nv,t-1);if(s<=0)return n;const r=new Int32Array(s),o=new Float32Array(s);for(let a=0;a<t;a++){const l=i[a*3+0],c=i[a*3+1],u=i[a*3+2];let h=0;for(let d=0;d<t;d++){if(d===a)continue;const g=i[d*3+0]-l,p=i[d*3+1]-c,_=i[d*3+2]-u,f=g*g+p*p+_*_;let m=h<s?h:s-1;if(h===s){if(f>=o[s-1])continue}else h++;for(;m>0&&o[m-1]>f;)o[m]=o[m-1],r[m]=r[m-1],m--;o[m]=f,r[m]=d}for(let d=0;d<h;d++){const g=r[d],p=a<g?`${a}-${g}`:`${g}-${a}`;e.has(p)||(e.add(p),n.push([a,g]))}}return n}function sv(i,t){if(t<2)return[];const e=ev(i,t),n=new Set;for(const[s,r]of e)n.add(s<r?`${s}-${r}`:`${r}-${s}`);return e.concat(iv(i,t,n))}function rv(i,t,e){const n=new Float32Array(e*3),s=new Float32Array(e*6);if(t.length===0)return{points:n,spans:s};for(let r=0;r<e;r++){const[o,a]=t[r%t.length],l=i[o*3+0],c=i[o*3+1],u=i[o*3+2],h=i[a*3+0],d=i[a*3+1],g=i[a*3+2];n[r*3+0]=(l+h)/2,n[r*3+1]=(c+d)/2,n[r*3+2]=(u+g)/2,s[r*6+0]=l,s[r*6+1]=c,s[r*6+2]=u,s[r*6+3]=h,s[r*6+4]=d,s[r*6+5]=g}return{points:n,spans:s}}const ov=4;function av(i,t,e){if(e<=0||t===0)return new Float32Array(0);const n=Math.min(e,t),s=new Int32Array(n),r=new Float32Array(t).fill(1/0);let o=Math.floor(Math.random()*t);s[0]=o;for(let l=1;l<n;l++){const c=i[o*3+0],u=i[o*3+1],h=i[o*3+2];let d=-1,g=-1;for(let p=0;p<t;p++){const _=i[p*3+0]-c,f=i[p*3+1]-u,m=i[p*3+2]-h,M=_*_+f*f+m*m;M<r[p]&&(r[p]=M),r[p]>g&&(g=r[p],d=p)}o=d,s[l]=o}const a=new Float32Array(n*3);for(let l=0;l<n;l++){const c=s[l];a[l*3+0]=i[c*3+0],a[l*3+1]=i[c*3+1],a[l*3+2]=i[c*3+2]}return a}function lv(i,t){if(t<=0)return new Float32Array(0);const e=i(t*ov);return av(e,e.length/3,t)}const cv=.12,uv=2e3;function hv(i,t,e=nn){const n=pl(i);if(!n)return null;const s=fl(n);if(s.bones){const f=s.bones(t),m=new Float32Array(t*3);for(let M=0;M<t;M++)m[M*3+0]=f[M*3+0]+e[0],m[M*3+1]=f[M*3+1]+e[1],m[M*3+2]=f[M*3+2]+e[2];return{points:m,isBeam:new Uint8Array(t),relationSpans:new Float32Array(t*6)}}const r=s.generate,o=t>0?Math.min(t,uv,Math.max(4,Math.round(t*cv))):0,a=Math.max(0,t-o),l=lv(r,o),c=sv(l,o),{points:u,spans:h}=rv(l,c,a),d=new Float32Array(t*3),g=new Uint8Array(t),p=new Float32Array(t*6);let _=0;for(let f=0;f<o;f++)d[_*3+0]=l[f*3+0]+e[0],d[_*3+1]=l[f*3+1]+e[1],d[_*3+2]=l[f*3+2]+e[2],_++;for(let f=0;f<a;f++)d[_*3+0]=u[f*3+0]+e[0],d[_*3+1]=u[f*3+1]+e[1],d[_*3+2]=u[f*3+2]+e[2],g[_]=1,p[_*6+0]=h[f*6+0]+e[0],p[_*6+1]=h[f*6+1]+e[1],p[_*6+2]=h[f*6+2]+e[2],p[_*6+3]=h[f*6+3]+e[0],p[_*6+4]=h[f*6+4]+e[1],p[_*6+5]=h[f*6+5]+e[2],_++;return{points:d,isBeam:g,relationSpans:p}}const Fc=[{color:0,weight:1}];function dv(i,t,e=nn,n=Fc){const s=pl(i);if(!s)return null;const r=fl(s),o=r.generate,a=r.colorParts,l=a?a.map(v=>({color:v.color,weight:v.weight})):n.length>0?n:Fc,c=t>0?Math.round(t*tv):0,u=Math.max(0,t-c),h=o(u),{points:d,colors:g}=fv(c,o,r.generateWithColor,a),p=new Float32Array(t*3),_=new Uint8Array(t),f=g?new Uint8Array(t*3):null;let m=0;const M=(v,y,w,b)=>{for(let A=0;A<y;A++)p[m*3+0]=v[A*3+0]+e[0],p[m*3+1]=v[A*3+1]+e[1],p[m*3+2]=v[A*3+2]+e[2],_[m]=w,f&&b&&(f[m*3+0]=b[A*3+0],f[m*3+1]=b[A*3+1],f[m*3+2]=b[A*3+2]),m++};return M(h,u,ye.DETAIL,null),M(d,c,ye.COLOR,g),{points:p,roles:_,colorClusters:l,pointColors:f}}function fv(i,t,e,n){if(i===0)return{points:new Float32Array(0),colors:e||n?new Uint8Array(0):null};if(n&&n.length>0){const s=Nt(i,n.map(l=>l.weight)),r=new Float32Array(i*3),o=new Uint8Array(i*3);let a=0;for(let l=0;l<n.length;l++){const c=s[l],u=n[l].generator(c),h=n[l].color,d=h>>16&255,g=h>>8&255,p=h&255;for(let _=0;_<c;_++)r[a*3+0]=u[_*3+0],r[a*3+1]=u[_*3+1],r[a*3+2]=u[_*3+2],o[a*3+0]=d,o[a*3+1]=g,o[a*3+2]=p,a++}return{points:r,colors:o}}return e?e(i):{points:t(i),colors:null}}function pv(i,t){const e=new Float32Array(i*3);for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=M_*(.5+.5*Math.random());e[n*3]=t[0]+o*Math.sin(r)*Math.cos(s),e[n*3+1]=t[1]+o*Math.sin(r)*Math.sin(s),e[n*3+2]=t[2]+o*Math.cos(r)}return e}const pe={FAR:0,MID:1,NEAR:2};function Io(i,t,e){if(e===pe.FAR)return new Nr(i,6,4);if(e===pe.MID)return new Nr(i,8,6);const n=new ni(i,i,t,6,1,!1);n.rotateX(Math.PI/2);const s=new ni(i*1.12,i*1.12,t*.45,6,1,!1);return s.rotateX(Math.PI/2),mv([n,s])}function mv(i){const t=i.map(a=>{const l=a.index?a.toNonIndexed():a;return l!==a&&a.dispose(),l});let e=0;for(const a of t)e+=a.getAttribute("position").count;const n=new Float32Array(e*3),s=new Float32Array(e*3);let r=0;for(const a of t){const l=a.getAttribute("position"),c=a.getAttribute("normal");n.set(l.array,r*3),s.set(c.array,r*3),r+=l.count,a.dispose()}const o=new Be;return o.setAttribute("position",new Je(n,3)),o.setAttribute("normal",new Je(s,3)),o}function Br(i,t){const e=[Io(i,t,pe.FAR),Io(i,t,pe.MID),Io(i,t,pe.NEAR)];return{byLevel:e,dispose(){for(const n of e)n.dispose()}}}const Bc=Symbol("instanceColorPatched"),xs=["#include <color_fragment>","#include <emissivemap_fragment>"],lr="#include <begin_vertex>",Zi="vTint";function gv(i){if(!i.includes(lr))throw new Error(`instance-color: el vertex de three no tiene "${lr}" (¿cambió de versión?)`);return`varying vec3 ${Zi};
`+i.replace(lr,[lr,`	${Zi} = vec3( 1.0 );`,"#ifdef USE_INSTANCING_COLOR",`	${Zi} = instanceColor;`,"#endif"].join(`
`))}function _v(i){for(const t of xs)if(!i.includes(t))throw new Error(`instance-color: el shader de three no tiene "${t}" (¿cambió de versión?)`);return`varying vec3 ${Zi};
`+i.replace(xs[0],`${xs[0]}
	diffuseColor.rgb *= ${Zi};`).replace(xs[1],`${xs[1]}
	totalEmissiveRadiance *= ${Zi};`)}function vv(i){const t=i;if(t[Bc])return;t[Bc]=!0;const e=i.onBeforeCompile.bind(i);i.onBeforeCompile=(n,s)=>{e(n,s),n.vertexShader=gv(n.vertexShader),n.fragmentShader=_v(n.fragmentShader)},i.customProgramCacheKey=()=>"instanceColor"}function xv(i){const t=new Float32Array(i*3).fill(1),e=new za(t,3);return e.setUsage(yd),e}const Mv=80,yv=4096,Sv=.6*.6,Ev=1.2*1.2,oh=rn($t.NANOBOT).identityColor,ah=8257459,bv=5592405,Av=2763306,cr=[Br(.55,.42),Br(.6,.46)];function Tv(i){return i===ye.DETAIL?new ti({color:oh,emissive:ah,emissiveIntensity:.9,roughness:.35,metalness:.1}):new ti({color:16777215,emissive:16777215,emissiveIntensity:nh,roughness:.35,metalness:.1})}function wv(i){const t=new On;let e=pe.MID;const n=P=>cr[P].byLevel[e],s=cr.map((P,x)=>Tv(x));vv(s[ye.COLOR]);let r=0,o=[],a=[],l=new Float32Array(0),c=null,u=!0,h=!1,d=new Uint8Array(0);function g(P,x,S){const I=new Ir(P,x,S);return I.frustumCulled=!1,I.count=0,I.castShadow=!1,I.receiveShadow=!0,t.add(I),I}function p(P){if(r>0&&P<=r)return;let x=Math.max(r,yv);for(;x<P;)x*=2;r=Math.min(x,i);for(const I of o)t.remove(I),I.dispose();o=cr.map((I,U)=>g(n(U),s[U],r));const S=o[ye.COLOR];S.instanceColor=xv(r),a=o.map(I=>I.instanceMatrix.array),l=S.instanceColor.array,u=!0,d=new Uint8Array(r)}const _=new Array(cr.length).fill(0);function f(P){p(P);const x=Math.ceil(P/o.length);o.forEach((S,I)=>{const U=I*x,F=Math.min(P,U+x);S.count=Math.max(0,F-U)}),d.fill(0)}function m(P,x,S,I,U,F){P[x+0]=F,P[x+1]=0,P[x+2]=0,P[x+3]=0,P[x+4]=0,P[x+5]=F,P[x+6]=0,P[x+7]=0,P[x+8]=0,P[x+9]=0,P[x+10]=F,P[x+11]=0,P[x+12]=S,P[x+13]=I,P[x+14]=U,P[x+15]=1}function M(P,x,S,I,U){if(!t.visible)return;const F=Math.min(1,Math.cbrt(Mv/x));_.fill(0);const $=U[ye.COLOR],R=c!==null&&(u||$!==h);for(let N=0;N<x;N++){const O=S[N];if(!U[O])continue;const lt=a[O],K=_[O]++;O===ye.COLOR&&R&&c&&(l[K*3+0]=c[N*3+0],l[K*3+1]=c[N*3+1],l[K*3+2]=c[N*3+2]);const st=P[N*3+0],gt=P[N*3+1],St=P[N*3+2],X=I[N*3+0],Q=I[N*3+1],ft=I[N*3+2],ht=X!==0||Q!==0||ft!==0;if(!ht)d[N]=0;else{const Ft=st-X,D=gt-Q,Kt=St-ft,Lt=Ft*Ft+D*D+Kt*Kt;d[N]?Lt>Ev&&(d[N]=0):Lt<Sv&&(d[N]=1)}const mt=ht&&d[N]===1,Et=mt?X:st,Ot=mt?Q:gt,kt=mt?ft:St;m(lt,K*16,Et,Ot,kt,F)}R&&(u=!1,h=$);for(let N=0;N<o.length;N++){const O=o[N];O.count=_[N],O.instanceMatrix.clearUpdateRanges(),O.instanceMatrix.addUpdateRange(0,O.count*16),O.instanceMatrix.needsUpdate=!0,N===ye.COLOR&&R&&O.instanceColor&&(O.instanceColor.clearUpdateRanges(),O.instanceColor.addUpdateRange(0,O.count*3),O.instanceColor.needsUpdate=!0)}}function v(P){t.visible=P}function y(P){if(c=P,u=!0,P)return;l.fill(1);const x=o[ye.COLOR];x!=null&&x.instanceColor&&(x.instanceColor.needsUpdate=!0)}const w=[{role:ye.DETAIL,color:oh,emissive:ah}];function b(P){for(const{role:x,color:S,emissive:I}of w){const U=o[x].material;U.color.setHex(P?bv:S),U.emissive.setHex(P?Av:I)}}function A(P,x){const S=o[ye.DETAIL];S.visible=P.visible,S.position.y=P.offsetY;const I=o[ye.COLOR];I.visible=x.visible,I.position.y=x.offsetY}function C(P){if(P!==e){e=P;for(let x=0;x<o.length;x++)o[x].geometry=n(x)}}return f(0),{group:t,setCount:f,updateFromPositions:M,setVisible:v,setInstanceTint:y,setSkeletonGrayscale:b,setLodLevel:C,setLayerDisplay:A}}const zc=.07,Hc=.03,Cv=rn($t.MICROBOT).identityColor,Rv=rn($t.MICROBOT).identityEmissive,Pv=rn($t.UNION).identityColor,Lv=rn($t.UNION).identityEmissive;function Iv(i){const t=new On,e=Br(zc,zc*.8).byLevel[pe.MID],n=new ni(Hc,Hc,1,5),s=new ti({color:Cv,emissive:Rv,emissiveIntensity:.3,roughness:.55,metalness:.05}),r=new ti({color:Pv,emissive:Lv,emissiveIntensity:.25,roughness:.6,metalness:.05}),o=new Ir(e,s,i),a=new Ir(n,r,i);o.frustumCulled=!1,a.frustumCulled=!1,o.count=0,a.count=0,t.add(o,a);const l=new B,c=new B,u=new B,h=new B,d=new se;function g(M){o.count=0,a.count=0}function p(M,v,y,w,b,A){M[v+0]=A,M[v+1]=0,M[v+2]=0,M[v+3]=0,M[v+4]=0,M[v+5]=A,M[v+6]=0,M[v+7]=0,M[v+8]=0,M[v+9]=0,M[v+10]=A,M[v+11]=0,M[v+12]=y,M[v+13]=w,M[v+14]=b,M[v+15]=1}function _(M,v,y,w){const b=o.instanceMatrix.array,A=a.instanceMatrix.array;let C=0,P=0;for(let x=0;x<v;x++){const S=M[x*3+0],I=M[x*3+1],U=M[x*3+2];if(!y[x]){p(b,C*16,S,I,U,1),C++;continue}const F=w[x*6+0],$=w[x*6+1],R=w[x*6+2],N=w[x*6+3],O=w[x*6+4],lt=w[x*6+5];l.set(N-F,O-$,lt-R);const K=Math.max(l.length(),.001);l.multiplyScalar(1/K),h.set(Math.abs(l.y)>.99?1:0,Math.abs(l.y)>.99?0:1,0),c.crossVectors(h,l).normalize(),u.crossVectors(l,c),d.makeBasis(c,l.multiplyScalar(K),u),d.setPosition(F+(N-F)*.5,$+(O-$)*.5,R+(lt-R)*.5),d.toArray(A,P*16),P++}o.count=C,a.count=P,o.instanceMatrix.clearUpdateRanges(),o.instanceMatrix.addUpdateRange(0,C*16),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.clearUpdateRanges(),a.instanceMatrix.addUpdateRange(0,P*16),a.instanceMatrix.needsUpdate=!0}function f(M){t.visible=M}function m(M,v){o.visible=M.visible,o.position.y=M.offsetY,a.visible=v.visible,a.position.y=v.offsetY}return{group:t,setCount:g,setVisible:f,updateFromPositions:_,setLayerDisplay:m}}var Dv=(()=>{var i=import.meta.url;return function(t){t=t||{};var e=typeof t<"u"?t:{},n,s;e.ready=new Promise(function(Y,q){n=Y,s=q});var r=Object.assign({},e),o=!0,a="";function l(Y){return e.locateFile?e.locateFile(Y,a):a+Y}var c;typeof document<"u"&&document.currentScript&&(a=document.currentScript.src),i&&(a=i),a.indexOf("blob:")!==0?a=a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):a="",e.print||console.log.bind(console);var u=e.printErr||console.warn.bind(console);Object.assign(e,r),r=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;var h;e.wasmBinary&&(h=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&Q("no native wasm support detected");var d,g=!1;function p(Y){var q=e["_"+Y];return q}function _(Y,q,it,Tt,V){var tt={string:function(Z){var rt=0;if(Z!=null&&Z!==0){var vt=(Z.length<<2)+1;rt=et(vt),w(Z,rt,vt)}return rt},array:function(Z){var rt=et(Z.length);return b(Z,rt),rt}};function ot(Z){return q==="string"?v(Z):q==="boolean"?!!Z:Z}var ct=p(Y),dt=[],bt=0;if(Tt)for(var At=0;At<Tt.length;At++){var Gt=tt[it[At]];Gt?(bt===0&&(bt=E()),dt[At]=Gt(Tt[At])):dt[At]=Tt[At]}var z=ct.apply(null,dt);function xt(Z){return bt!==0&&W(bt),ot(Z)}return z=xt(z),z}function f(Y,q,it,Tt){it=it||[];var V=it.every(function(ot){return ot==="number"}),tt=q!=="string";return tt&&V&&!Tt?p(Y):function(){return _(Y,q,it,arguments)}}var m=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function M(Y,q,it){for(var Tt=q+it,V=q;Y[V]&&!(V>=Tt);)++V;if(V-q>16&&Y.subarray&&m)return m.decode(Y.subarray(q,V));for(var tt="";q<V;){var ot=Y[q++];if(!(ot&128)){tt+=String.fromCharCode(ot);continue}var ct=Y[q++]&63;if((ot&224)==192){tt+=String.fromCharCode((ot&31)<<6|ct);continue}var dt=Y[q++]&63;if((ot&240)==224?ot=(ot&15)<<12|ct<<6|dt:ot=(ot&7)<<18|ct<<12|dt<<6|Y[q++]&63,ot<65536)tt+=String.fromCharCode(ot);else{var bt=ot-65536;tt+=String.fromCharCode(55296|bt>>10,56320|bt&1023)}}return tt}function v(Y,q){return Y?M(P,Y,q):""}function y(Y,q,it,Tt){if(!(Tt>0))return 0;for(var V=it,tt=it+Tt-1,ot=0;ot<Y.length;++ot){var ct=Y.charCodeAt(ot);if(ct>=55296&&ct<=57343){var dt=Y.charCodeAt(++ot);ct=65536+((ct&1023)<<10)|dt&1023}if(ct<=127){if(it>=tt)break;q[it++]=ct}else if(ct<=2047){if(it+1>=tt)break;q[it++]=192|ct>>6,q[it++]=128|ct&63}else if(ct<=65535){if(it+2>=tt)break;q[it++]=224|ct>>12,q[it++]=128|ct>>6&63,q[it++]=128|ct&63}else{if(it+3>=tt)break;q[it++]=240|ct>>18,q[it++]=128|ct>>12&63,q[it++]=128|ct>>6&63,q[it++]=128|ct&63}}return q[it]=0,it-V}function w(Y,q,it){return y(Y,P,q,it)}function b(Y,q){C.set(Y,q)}var A,C,P;function x(Y){A=Y,e.HEAP8=C=new Int8Array(Y),e.HEAP16=new Int16Array(Y),e.HEAP32=new Int32Array(Y),e.HEAPU8=P=new Uint8Array(Y),e.HEAPU16=new Uint16Array(Y),e.HEAPU32=new Uint32Array(Y),e.HEAPF32=new Float32Array(Y),e.HEAPF64=new Float64Array(Y)}e.INITIAL_MEMORY;var S,I=[],U=[],F=[];function $(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)O(e.preRun.shift());Ft(I)}function R(){Ft(U)}function N(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)K(e.postRun.shift());Ft(F)}function O(Y){I.unshift(Y)}function lt(Y){U.unshift(Y)}function K(Y){F.unshift(Y)}var st=0,gt=null;function St(Y){st++,e.monitorRunDependencies&&e.monitorRunDependencies(st)}function X(Y){if(st--,e.monitorRunDependencies&&e.monitorRunDependencies(st),st==0&&gt){var q=gt;gt=null,q()}}e.preloadedImages={},e.preloadedAudios={};function Q(Y){e.onAbort&&e.onAbort(Y),Y="Aborted("+Y+")",u(Y),g=!0,Y+=". Build with -s ASSERTIONS=1 for more info.";var q=new WebAssembly.RuntimeError(Y);throw s(q),q}var ft="data:application/octet-stream;base64,";function ht(Y){return Y.startsWith(ft)}var mt;e.locateFile?(mt="boids.wasm",ht(mt)||(mt=l(mt))):mt=new URL("/Simulador-nanobots/wasm/boids.wasm",import.meta.url).toString();function Et(Y){try{if(Y==mt&&h)return new Uint8Array(h);if(!c)throw"both async and sync fetching of the wasm failed"}catch(q){Q(q)}}function Ot(){return!h&&o&&typeof fetch=="function"?fetch(mt,{credentials:"same-origin"}).then(function(Y){if(!Y.ok)throw"failed to load wasm binary file at '"+mt+"'";return Y.arrayBuffer()}).catch(function(){return Et(mt)}):Promise.resolve().then(function(){return Et(mt)})}function kt(){var Y={a:L};function q(ot,ct){var dt=ot.exports;e.asm=dt,d=e.asm.d,x(d.buffer),S=e.asm.q,lt(e.asm.e),X()}St();function it(ot){q(ot.instance)}function Tt(ot){return Ot().then(function(ct){return WebAssembly.instantiate(ct,Y)}).then(function(ct){return ct}).then(ot,function(ct){u("failed to asynchronously prepare wasm: "+ct),Q(ct)})}function V(){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!ht(mt)&&typeof fetch=="function"?fetch(mt,{credentials:"same-origin"}).then(function(ot){var ct=WebAssembly.instantiateStreaming(ot,Y);return ct.then(it,function(dt){return u("wasm streaming compile failed: "+dt),u("falling back to ArrayBuffer instantiation"),Tt(it)})}):Tt(it)}if(e.instantiateWasm)try{var tt=e.instantiateWasm(Y,q);return tt}catch(ot){return u("Module.instantiateWasm callback failed with error: "+ot),!1}return V().catch(s),{}}function Ft(Y){for(;Y.length>0;){var q=Y.shift();if(typeof q=="function"){q(e);continue}var it=q.func;typeof it=="number"?q.arg===void 0?Kt(it)():Kt(it)(q.arg):it(q.arg===void 0?null:q.arg)}}var D=[];function Kt(Y){var q=D[Y];return q||(Y>=D.length&&(D.length=Y+1),D[Y]=q=S.get(Y)),q}function Lt(){Q("")}function Bt(Y,q,it){P.copyWithin(Y,q,q+it)}function Ct(){return 2147483648}function Wt(Y){try{return d.grow(Y-A.byteLength+65535>>>16),x(d.buffer),1}catch{}}function Rt(Y){var q=P.length;Y=Y>>>0;var it=Ct();if(Y>it)return!1;let Tt=(dt,bt)=>dt+(bt-dt%bt)%bt;for(var V=1;V<=4;V*=2){var tt=q*(1+.2/V);tt=Math.min(tt,Y+100663296);var ot=Math.min(it,Tt(Math.max(Y,tt),65536)),ct=Wt(ot);if(ct)return!0}return!1}var L={b:Lt,c:Bt,a:Rt};kt(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.e).apply(null,arguments)},e._init=function(){return(e._init=e.asm.f).apply(null,arguments)},e._getPositionsPtr=function(){return(e._getPositionsPtr=e.asm.g).apply(null,arguments)},e._getCount=function(){return(e._getCount=e.asm.h).apply(null,arguments)},e._getTargetPositionsPtr=function(){return(e._getTargetPositionsPtr=e.asm.i).apply(null,arguments)},e._setParams=function(){return(e._setParams=e.asm.j).apply(null,arguments)},e._step=function(){return(e._step=e.asm.k).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.l).apply(null,arguments)},e._free=function(){return(e._free=e.asm.m).apply(null,arguments)};var E=e.stackSave=function(){return(E=e.stackSave=e.asm.n).apply(null,arguments)},W=e.stackRestore=function(){return(W=e.stackRestore=e.asm.o).apply(null,arguments)},et=e.stackAlloc=function(){return(et=e.stackAlloc=e.asm.p).apply(null,arguments)};e.ccall=_,e.cwrap=f;var at;gt=function Y(){at||nt(),at||(gt=Y)};function nt(Y){if(st>0||($(),st>0))return;function q(){at||(at=!0,e.calledRun=!0,!g&&(R(),n(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),N()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),q()},1)):q()}if(e.run=nt,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return nt(),t.ready}})();class Uv{constructor(){ai(this,"module",null);ai(this,"count",0);ai(this,"cachedPtr",-1);ai(this,"cachedView",null);ai(this,"cachedTargetPtr",-1);ai(this,"cachedTargetView",null)}async load(){this.module=await Dv()}get mod(){if(!this.module)throw new Error("Swarm.load() debe completarse antes de usar el módulo Wasm");return this.module}init(t){this.count=t,this.cachedView=null,this.cachedTargetView=null,this.mod.ccall("init",null,["number"],[t])}setParams(t){this.mod.ccall("setParams",null,["number","number","number","number","number"],[t.cohesion,t.separation,t.alignment,t.maxSpeed,t.seekWeight])}step(t){this.mod.ccall("step",null,["number"],[t])}getPositions(){const t=this.mod.ccall("getPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedView||t!==this.cachedPtr||this.cachedView.buffer!==e)&&(this.cachedPtr=t,this.cachedView=new Float32Array(e,t,this.count*3)),this.cachedView}getTargetPositions(){const t=this.mod.ccall("getTargetPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedTargetView||t!==this.cachedTargetPtr||this.cachedTargetView.buffer!==e)&&(this.cachedTargetPtr=t,this.cachedTargetView=new Float32Array(e,t,this.count*3)),this.cachedTargetView}setAgentTargets(t){this.getTargetPositions().set(t.subarray(0,this.count*3))}getCount(){return this.count}}const Nv=new B(-8,8,-8),Do=260,Uo=1.05,kc=.11,Ov=.9,Fv=3,Ms=.85,Bv=3.2,zv=Math.PI*(3-Math.sqrt(5));function Hv(i=Nv){const t=new On;t.position.copy(i);const e=rn($t.MATERIAL).identityColor,n=Br(kc,kc*.8),s=new ti({color:e,emissive:e,emissiveIntensity:Ms,roughness:.35,metalness:.5}),r=new Ir(n.byLevel[pe.MID],s,Do);r.instanceMatrix.setUsage(Oa),r.castShadow=!0;const o=new Ee;for(let p=0;p<Do;p++){const _=1-p/(Do-1)*2,f=Math.sqrt(Math.max(0,1-_*_)),m=p*zv;o.position.set(Math.cos(m)*f*Uo,_*Uo,Math.sin(m)*f*Uo),o.lookAt(o.position.clone().multiplyScalar(2)),o.updateMatrix(),r.setMatrixAt(p,o.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),t.add(r);const a=new Vr({color:e,wireframe:!0,transparent:!0,opacity:.22}),l=new ae(new cl(1.9,2),a);t.add(l);const c=new Ku(e,3,14);t.add(c);let u=-1;const h=new Vt(e);function d(p){s.color.copy(p),s.emissive.copy(p),a.color.copy(p),c.color.copy(p)}function g(p){if(l.rotateY(p*.3),l.rotateX(p*.15),r.rotateY(p*.12),u<0)return;u+=p;const _=Math.min(u/Ov,1),f=Math.abs(Math.sin(_*Math.PI*Fv))*(1-_);s.emissiveIntensity=Ms+(Bv-Ms)*f,c.intensity=3+5*f,_>=1&&(u=-1,s.emissiveIntensity=Ms,c.intensity=3)}return{group:t,position:t.position,update:g,pulseColor(p){h.setHex(p),d(h),u=0},resetColor(){h.setHex(e),d(h),u=-1,s.emissiveIntensity=Ms,c.intensity=3}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class bn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),bn.nextNameID=bn.nextNameID||0,this.$name.id=`lil-gui-name-${++bn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class kv extends bn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ga(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Vv={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ga,toHexString:Ga},Cs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Gv={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=Cs.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Cs.toHexString(s)}},Wv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Cs.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Cs.toHexString(s)}},Xv=[Vv,Cs,Gv,Wv];function Yv(i){return Xv.find(t=>t.match(i))}class $v extends bn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Yv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ga(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class No extends bn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class qv extends bn{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,h;const d=5,g=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",_)},p=M=>{if(o){const v=M.clientX-a,y=M.clientY-l;Math.abs(y)>d?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=M.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(M),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",g),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,M,v,y,w)=>(m-M)/(v-M)*(w-y)+y,e=m=>{const M=this.$slider.getBoundingClientRect();let v=t(m,M.left,M.right,this._min,this._max);this._snapClampSetValue(v)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const M=m.touches[0].clientX-a,v=m.touches[0].clientY-l;Math.abs(M)>Math.abs(v)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},g=this._callOnFinishChange.bind(this),p=400;let _;const f=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const v=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(g,p)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class jv extends bn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Kv extends bn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Zv=`.lil-gui {
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
}`;function Jv(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Vc=!1;class ml{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Vc&&a&&(Jv(Zv),Vc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new jv(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new qv(this,t,e,n,s,r);case"boolean":return new kv(this,t,e);case"string":return new Kv(this,t,e);case"function":return new No(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new $v(this,t,e,n)}addFolder(t){const e=new ml({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof No||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof No)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const lh=192;function Qv(i,t,e=lh){if(i<=0||t<=0)return{width:0,height:0};const n=Math.max(i,t);if(n<=e)return{width:i,height:t};const s=e/n;return{width:Math.max(1,Math.round(i*s)),height:Math.max(1,Math.round(t*s))}}function tx(i,t,e){return(t*e+i)*4}function ex(i,t,e){return .2126*i+.7152*t+.0722*e}function nx(i){const{pixels:t}=i;for(let e=3;e<t.length;e+=4)if(t[e]<250)return!0;return!1}function ix(i,t=lh){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const{width:o,height:a}=Qv(s.naturalWidth,s.naturalHeight,t);if(o===0||a===0){n(new Error("La imagen no tiene dimensiones válidas"));return}const l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");if(!c){n(new Error("Canvas 2D no disponible"));return}c.drawImage(s,0,0,o,a),e({pixels:c.getImageData(0,0,o,a).data,width:o,height:a})}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la imagen"))},s.src=r})}function sx(i,t){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const o=document.createElement("canvas");o.width=t,o.height=t;const a=o.getContext("2d");if(!a){n(new Error("Canvas 2D no disponible"));return}a.drawImage(s,0,0,t,t),e({pixels:a.getImageData(0,0,t,t).data,width:t,height:t})}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la imagen"))},s.src=r})}const In=8,Oo=256/In,rx=128,Fo=235,Bo=20,ox=32,Ds=4,ax=60,Mi=4973567,Wa=[{color:Mi,weight:1}];function lx(i,t=Ds){const e=In*In*In,n=new Uint32Array(e),s=new Float64Array(e),r=new Float64Array(e),o=new Float64Array(e);for(let l=0;l+3<i.length;l+=4){const c=i[l],u=i[l+1],h=i[l+2];if(i[l+3]<rx||c>Fo&&u>Fo&&h>Fo||c<Bo&&u<Bo&&h<Bo)continue;const g=Math.min(In-1,Math.floor(c/Oo)),p=Math.min(In-1,Math.floor(u/Oo)),_=Math.min(In-1,Math.floor(h/Oo)),f=(g*In+p)*In+_;n[f]++,s[f]+=c,r[f]+=u,o[f]+=h}const a=[];for(let l=0;l<e;l++)n[l]!==0&&a.push({count:n[l],r:s[l]/n[l],g:r[l]/n[l],b:o[l]/n[l]});return a.length===0?[{color:Mi,weight:1}]:ch(a,t)}function ch(i,t=Ds,e=ax){if(i.length===0)return[{color:Mi,weight:1}];const n=[...i].sort((c,u)=>u.count-c.count),s=[],r=new Uint8Array(n.length),o=e*e;for(let c=0;c<n.length;c++){if(r[c])continue;const u=n[c],h={count:u.count,sumR:u.r*u.count,sumG:u.g*u.count,sumB:u.b*u.count};r[c]=1;for(let d=c+1;d<n.length;d++){if(r[d])continue;const g=n[d],p=g.r-u.r,_=g.g-u.g,f=g.b-u.b;p*p+_*_+f*f>o||(r[d]=1,h.count+=g.count,h.sumR+=g.r*g.count,h.sumG+=g.g*g.count,h.sumB+=g.b*g.count)}s.push(h)}s.sort((c,u)=>u.count-c.count);const a=s.slice(0,Math.max(1,t)),l=a.reduce((c,u)=>c+u.count,0);return a.map(c=>{const u=Math.round(c.sumR/c.count),h=Math.round(c.sumG/c.count),d=Math.round(c.sumB/c.count);return{color:u<<16|h<<8|d,weight:c.count/l}})}async function cx(i,t,e){try{const{pixels:n}=await sx(i,ox);return e(n)}catch{return t}}function uh(i,t=Ds){return cx(i,Wa,e=>lx(e,t))}const ux=.82;function hx(i,t){const{mask:e,width:n,height:s}=i;let r=0,o=0;for(let a=0;a<s;a++){const l=a*n;for(let c=0;c<n;c++){const u=e[l+c],h=Math.round(2*t-c),d=h>=0&&h<n?e[l+h]:0;(u||d)&&o++,u&&d&&r++}}return o===0?0:r/o}function dx(i,t=ux){if(!i.bbox||i.area===0)return{axisX:i.width/2,score:0,symmetric:!1};const{minX:e,maxX:n}=i.bbox,s=(e+n)/2,r=(n-e)/2,o=Math.max(1,r*.25);let a=s,l=0;const c=Math.floor((s-o)*2),u=Math.ceil((s+o)*2);for(let h=c;h<=u;h++){const d=h/2,g=hx(i,d);g>l&&(l=g,a=d)}return{axisX:a,score:l,symmetric:l>=t}}const _i={OBSERVED:0,INTERPOLATED:1,INFERRED:2};function Xa(){return{points:new Float32Array(0),colors:new Uint8Array(0),origin:new Uint8Array(0),count:0}}function Gc(i){let t=0,e=0,n=0;for(let s=0;s<i.count;s++){const r=i.origin[s];r===_i.OBSERVED?t++:r===_i.INTERPOLATED?e++:n++}return{observed:t,interpolated:e,inferred:n,observedFraction:i.count===0?0:t/i.count}}const sn={EXTRUSION:"EXTRUSION",DEPTH:"DEPTH",DEPTH_SYMMETRY:"DEPTH_SYMMETRY"},fx={EXTRUSION:"Extrusión de silueta",DEPTH:"Profundidad estimada",DEPTH_SYMMETRY:"Profundidad + simetría"},px=.5,mx=.35,gx=25e5,_x=.9,vx={cloud:Xa(),mode:sn.DEPTH,symmetry:null,confidence:0,sourceExtent:{width:0,height:0}};function xx(i,t,e,n,s=1){const r=Math.min(t,e),o=i===sn.EXTRUSION?r*.6:i===sn.DEPTH_SYMMETRY?Math.min(1,r*(1+.25*n)):r,a=.5+.5*Math.min(1,Math.max(0,s)*2);return o*a}function Mx(i,t,e,n=sn.DEPTH,s={}){const r=t.bbox;if(!r||t.area===0)return{...vx,mode:n};const o=s.half??si,a=s.voxelRes??48,l=s.maxPoints??gx,{width:c,height:u}=t;let h=null,d=t.mask,g=e.depth,p=n;if(n===sn.DEPTH_SYMMETRY)if(h=dx(t),!h.symmetric)p=sn.DEPTH;else{d=new Uint8Array(c*u),g=new Float32Array(c*u);for(let gt=0;gt<u;gt++){const St=gt*c;for(let X=0;X<c;X++){const Q=Math.round(2*h.axisX-X),ft=Q>=0&&Q<c?St+Q:-1,ht=t.mask[St+X],mt=ft>=0?t.mask[ft]:0;d[St+X]=ht||mt?1:0;const Et=ht?e.depth[St+X]:0,Ot=ft>=0&&mt?e.depth[ft]:0;g[St+X]=Math.max(Et,Ot)}}}const _=r.maxX-r.minX+1,f=r.maxY-r.minY+1,m=2*o/Math.max(_,f),M=(r.minX+r.maxX)/2,v=(r.minY+r.maxY)/2,w=(p===sn.EXTRUSION?mx:px)*Math.min(_,f)*m,b=2*o/a,A=m,C=b*_x,P=A/C,x=P>=1?Math.ceil(P):1,S=P>=1?1:Math.max(1,Math.floor(1/P)),I=gt=>{const St=p===sn.EXTRUSION?w:gt*w;return Math.max(2,Math.ceil(2*St/b)+1)};let U=0;for(let gt=r.minY;gt<=r.maxY;gt+=S)for(let St=r.minX;St<=r.maxX;St+=S){const X=gt*c+St;d[X]&&(U+=I(g[X])*x*x)}const F=U>l?Math.max(1,Math.ceil(U/l)):1,$=[],R=[],N=[];for(let gt=r.minY;gt<=r.maxY;gt+=S)for(let St=r.minX;St<=r.maxX;St+=S){const X=gt*c+St;if(!d[X])continue;const Q=(St-M)*m,ft=-(gt-v)*m,ht=p===sn.EXTRUSION?w:g[X]*w,mt=!t.mask[X];let Et=St;if(mt&&h){const Lt=Math.round(2*h.axisX-St);Lt>=0&&Lt<c&&t.mask[gt*c+Lt]&&(Et=Lt)}const Ot=tx(Et,gt,c),kt=i.pixels[Ot],Ft=i.pixels[Ot+1],D=i.pixels[Ot+2],Kt=Math.max(2,Math.ceil(I(g[X])/F));for(let Lt=0;Lt<x;Lt++)for(let Bt=0;Bt<x;Bt++){const Ct=x===1?0:(Bt/x-.5+.5/x)*A,Wt=x===1?0:(Lt/x-.5+.5/x)*A;for(let Rt=0;Rt<Kt;Rt++){const L=Kt===1?0:Rt/(Kt-1);$.push(Q+Ct,ft+Wt,-ht+2*ht*L),R.push(kt,Ft,D),N.push(mt?_i.INFERRED:Kt===1||Rt===Kt-1?_i.OBSERVED:Rt===0?_i.INFERRED:_i.INTERPOLATED)}}}const O=$.length/3,lt=Uint8Array.from(N);let K=0;for(let gt=0;gt<O;gt++)lt[gt]===_i.OBSERVED&&K++;const st=xx(p,s.segmentationConfidence??1,e.confidence,(h==null?void 0:h.score)??0,O===0?0:K/O);return{cloud:{points:Float32Array.from($),colors:Uint8Array.from(R),origin:lt,count:O},mode:p,symmetry:h,confidence:st,sourceExtent:{width:_,height:f}}}const hh=18,yx=128,Sx=1;function gl(i,t,e){let n=0,s=0,r=t,o=e,a=-1,l=-1;for(let c=0;c<e;c++)for(let u=0;u<t;u++)i[c*t+u]&&(n++,u<r&&(r=u),u>a&&(a=u),c<o&&(o=c),c>l&&(l=c),(u===0||c===0||u===t-1||c===e-1)&&s++);return{area:n,bbox:n>0?{minX:r,minY:o,maxX:a,maxY:l}:null,borderTouch:s}}function Ex(i,t,e){if(t<2||e<2)return 0;let n=0,s=0,r=0,o=0,a=0,l=0,c=0;const u=p=>{const _=p*4,f=i[_],m=i[_+1],M=i[_+2];s+=f,r+=m,o+=M,a+=f*f,l+=m*m,c+=M*M,n++};for(let p=0;p<t;p++)u(p),u((e-1)*t+p);for(let p=1;p<e-1;p++)u(p*t),u(p*t+t-1);if(n===0)return 0;const h=Math.max(0,a/n-(s/n)**2),d=Math.max(0,l/n-(r/n)**2),g=Math.max(0,c/n-(o/n)**2);return Math.min(1,Math.sqrt((h+d+g)/3)/255)}function bx(i,t,e,n=hh){const s=t*e,r=new Uint8Array(s),o=new Uint8Array(s),a=new Int32Array(s);let l=0;const c=p=>{a[l++]=p};for(let p=0;p<t;p++){const _=p,f=(e-1)*t+p;o[_]||(o[_]=1,r[_]=1,c(_)),o[f]||(o[f]=1,r[f]=1,c(f))}for(let p=0;p<e;p++){const _=p*t,f=p*t+t-1;o[_]||(o[_]=1,r[_]=1,c(_)),o[f]||(o[f]=1,r[f]=1,c(f))}const u=n*n;let h=0;for(;h<l;){const p=a[h++],_=p*4,f=i[_],m=i[_+1],M=i[_+2],v=p%t,y=(p-v)/t,w=b=>{if(o[b])return;o[b]=1;const A=b*4,C=i[A]-f,P=i[A+1]-m,x=i[A+2]-M;C*C+P*P+x*x<=u&&(r[b]=1,c(b))};v>0&&w(p-1),v<t-1&&w(p+1),y>0&&w(p-t),y<e-1&&w(p+t)}const d=new Uint8Array(s);for(let p=0;p<s;p++)d[p]=r[p]?0:1;const g=gl(d,t,e);return{mask:d,width:t,height:e,source:"flood",borderSpread:Ex(i,t,e),discarded:0,...g}}function Ax(i,t,e,n=yx){const s=t*e,r=new Uint8Array(s);for(let a=0;a<s;a++)r[a]=i[a*4+3]>=n?1:0;const o=gl(r,t,e);return{mask:r,width:t,height:e,source:"alpha",borderSpread:0,discarded:0,...o}}const Tx=.5;function wx(i,t,e,n){let s=i;for(let r=0;r<n;r++){const o=new Uint8Array(s.length);for(let a=0;a<e;a++)for(let l=0;l<t;l++){const c=a*t+l;s[c]&&(l===0||a===0||l===t-1||a===e-1||!s[c-1]||!s[c+1]||!s[c-t]||!s[c+t]||(o[c]=1))}s=o}return s}function Cx(i,t,e){const n=t*e,s=new Int32Array(n).fill(-1),r=new Int32Array(n);let o=-1,a=0,l=0,c=0;for(let h=0;h<n;h++){if(!i[h]||s[h]>=0)continue;const d=c++;let g=0,p=0;r[p++]=h,s[h]=d;let _=0;for(;g<p;){const f=r[g++];_++;const m=f%t,M=(f-m)/t,v=y=>{!i[y]||s[y]>=0||(s[y]=d,r[p++]=y)};m>0&&v(f-1),m<t-1&&v(f+1),M>0&&v(f-t),M<e-1&&v(f+t)}l+=_,_>a&&(a=_,o=d)}if(o<0)return{mask:i,removed:0};const u=new Uint8Array(n);for(let h=0;h<n;h++)u[h]=s[h]===o?1:0;return{mask:u,removed:l-a}}function Rx(i,t=Sx){if(i.area===0)return i;let e=i.mask;if(t>0){const r=wx(e,i.width,i.height,t);let o=0;for(let a=0;a<r.length;a++)r[a]&&o++;o>=i.area*Tx&&(e=r)}const n=Cx(e,i.width,i.height),s=gl(n.mask,i.width,i.height);return{...i,mask:n.mask,...s,discarded:i.area-s.area}}function dh(i,t=hh){const e=nx(i)?Ax(i.pixels,i.width,i.height):bx(i.pixels,i.width,i.height,t);return Rx(e)}const fh=.65,ph=.35,Px=3;function Lx(i,t,e){const n=t*e,s=new Float32Array(n),r=t+e+1;for(let l=0;l<n;l++)s[l]=i[l]?r:0;const o=1,a=Math.SQRT2;for(let l=0;l<e;l++)for(let c=0;c<t;c++){const u=l*t+c;if(!i[u])continue;let h=s[u];c>0&&(h=Math.min(h,s[u-1]+o)),l>0&&(h=Math.min(h,s[u-t]+o)),c>0&&l>0&&(h=Math.min(h,s[u-t-1]+a)),c<t-1&&l>0&&(h=Math.min(h,s[u-t+1]+a)),s[u]=h}for(let l=e-1;l>=0;l--)for(let c=t-1;c>=0;c--){const u=l*t+c;if(!i[u])continue;let h=s[u];c<t-1&&(h=Math.min(h,s[u+1]+o)),l<e-1&&(h=Math.min(h,s[u+t]+o)),c<t-1&&l<e-1&&(h=Math.min(h,s[u+t+1]+a)),c>0&&l<e-1&&(h=Math.min(h,s[u+t-1]+a)),s[u]=h}return s}function Ix(i,t,e,n){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++){const a=o*t;for(let l=0;l<t;l++){let c=0,u=0;const h=Math.max(0,l-n),d=Math.min(t-1,l+n);for(let g=h;g<=d;g++)c+=i[a+g],u++;s[a+l]=c/u}}for(let o=0;o<t;o++)for(let a=0;a<e;a++){let l=0,c=0;const u=Math.max(0,a-n),h=Math.min(e-1,a+n);for(let d=u;d<=h;d++)l+=s[d*t+o],c++;r[a*t+o]=l/c}return r}function Dx(i,t){const s=Math.min(1,i/.12),r=Math.min(1,t*5),o=.18+(.55-.18)*s;return Math.max(.05,o*(1-.5*r))}function Ux(i,t,e=fh,n=ph){const{width:s,height:r}=t,o=s*r,a=new Float32Array(o);if(t.area===0)return{depth:a,width:s,height:r,maxThickness:0,confidence:0};const l=Lx(t.mask,s,r);let c=0;for(let _=0;_<o;_++)l[_]>c&&(c=l[_]);if(c<=0)return{depth:a,width:s,height:r,maxThickness:0,confidence:.05};const u=new Float32Array(o);for(let _=0;_<o;_++){const f=_*4;u[_]=ex(i.pixels[f],i.pixels[f+1],i.pixels[f+2])/255}const h=Ix(u,s,r,Px);let d=0;for(let _=0;_<o;_++){if(!t.mask[_])continue;const f=u[_]-h[_];d+=f*f}const g=Math.sqrt(d/t.area),p=g>1e-4?1/(g*3):0;for(let _=0;_<o;_++){if(!t.mask[_])continue;const f=Math.pow(l[_]/c,e),m=Math.max(-1,Math.min(1,(u[_]-h[_])*p)),M=f*(1+n*m);a[_]=Math.max(0,Math.min(1,M))}return{depth:a,width:s,height:r,maxThickness:c,confidence:Dx(g,t.borderSpread)}}const mh={id:"inflate",name:"Inflado de silueta (local, sin IA)",external:!1,maxConfidence:.55,description:"Infla la silueta por distancia al contorno y corrige con el sombreado de la foto.",async estimate(i,t){return Ux(i,t,fh,ph)}},Nx={id:"flat",name:"Espesor constante (sin estimar)",external:!1,maxConfidence:.3,description:"No estima relieve: da el mismo espesor a todo el objeto.",async estimate(i,t){const e=new Float32Array(t.width*t.height);for(let n=0;n<e.length;n++)e[n]=t.mask[n]?1:0;return{depth:e,width:t.width,height:t.height,maxThickness:t.area>0?1:0,confidence:t.area>0?.3:0}}},gh=[mh,Nx];let _h=mh;function Ji(){return _h}function Ox(i){const t=gh.find(e=>e.id===i);return t?(_h=t,!0):!1}function Fx(){return gh}const Bx=.02,zx=.92;function Hx(i){const t=i.width*i.height;if(t===0||i.area===0)return{stage:"Segmentación",value:0,reason:"no se encontró ningún objeto"};const e=i.area/t;if(i.source==="alpha")return{stage:"Segmentación",value:.97,reason:"la imagen trae canal alpha: la máscara es exacta, no estimada"};if(e<Bx)return{stage:"Segmentación",value:.15,reason:`el objeto ocupa sólo ${(e*100).toFixed(1)}% del encuadre`};if(e>zx)return{stage:"Segmentación",value:.2,reason:"casi todo el encuadre quedó como objeto: el fondo no se separó"};const n=Math.min(1,i.borderSpread*5);return{stage:"Segmentación",value:.92*(1-.7*n),reason:n>.3?"el borde del encuadre no es un fondo parejo: el objeto puede estar cortado":"fondo separado por continuidad de color"}}function kx(i){return{stage:"Profundidad",value:i,reason:"estimada por inflado de la silueta más la pista de sombreado — no es una medición"}}function Vx(i,t){return{stage:"Reconstrucción 3D",value:i,reason:`modo ${t}`}}function Gx(i){if(i.length===0)return 0;let t=1;for(const e of i)e.value<t&&(t=e.value);return t}const Wx="Una sola imagen no contiene toda la información de profundidad. La geometría 3D es una estimación.",Xx=.45;function Yx(i){return i<Xx?"Reconstrucción aproximada":"Reconstrucción estimada"}const $x={id:"local",name:"Local (sin IA, en el navegador)",external:!1,async segment(i){return dh(i)},async estimateDepth(i,t){return Ji().estimate(i,t)}};let qx=$x;function Wc(){return qx}const Wr=48;function Le(i,t,e,n){return(e*n+t)*n+i}function zo(i,t,e){return((i+.5)/t-.5)*2*e}function Ne(i,t,e){const n=Math.floor((i/e+1)/2*t);return n<0||n>=t?-1:n}function vh(i=Wr,t=si){const e=i*i*i;return{res:i,half:t,occupied:new Uint8Array(e),density:new Uint8Array(e)}}function Xc(i,t,e,n=Wr,s=si){const r=vh(n,s);for(let o=0;o<t;o++){const a=Ne(i[o*3+0]-e[0],n,s);if(a<0)continue;const l=Ne(i[o*3+1]-e[1],n,s);if(l<0)continue;const c=Ne(i[o*3+2]-e[2],n,s);if(c<0)continue;const u=Le(a,l,c,n);r.occupied[u]=1,r.density[u]<255&&r.density[u]++}return r}function jx(i,t,e,n,s=Wr,r=si,o=null){const a=s*s*s,l=vh(s,r),c=new Uint8Array(a*3),u=o?new Uint8Array(a).fill(255):null,h=new Float64Array(a),d=new Float64Array(a),g=new Float64Array(a),p=new Uint32Array(a);for(let _=0;_<e;_++){const f=Ne(i[_*3+0]-n[0],s,r);if(f<0)continue;const m=Ne(i[_*3+1]-n[1],s,r);if(m<0)continue;const M=Ne(i[_*3+2]-n[2],s,r);if(M<0)continue;const v=Le(f,m,M,s);l.occupied[v]=1,l.density[v]<255&&l.density[v]++,h[v]+=t[_*3+0],d[v]+=t[_*3+1],g[v]+=t[_*3+2],p[v]++,u&&o&&o[_]<u[v]&&(u[v]=o[_])}for(let _=0;_<a;_++)p[_]!==0&&(c[_*3+0]=Math.round(h[_]/p[_]),c[_*3+1]=Math.round(d[_]/p[_]),c[_*3+2]=Math.round(g[_]/p[_]));return u?{...l,color:c,origin:u}:{...l,color:c}}function Yc(i,t,e,n,s){return i[Le(t,e,n,s)]?t===0||t===s-1||e===0||e===s-1||n===0||n===s-1?!0:!i[Le(t-1,e,n,s)]||!i[Le(t+1,e,n,s)]||!i[Le(t,e-1,n,s)]||!i[Le(t,e+1,n,s)]||!i[Le(t,e,n-1,s)]||!i[Le(t,e,n+1,s)]:!1}function Kx(i){const{res:t,half:e,occupied:n,color:s,origin:r}=i;let o=0;for(let h=0;h<t;h++)for(let d=0;d<t;d++)for(let g=0;g<t;g++)Yc(n,g,d,h,t)&&o++;const a=new Float32Array(o*3),l=new Uint8Array(o*3),c=r?new Uint8Array(o):null;s||l.fill(255);let u=0;for(let h=0;h<t;h++)for(let d=0;d<t;d++)for(let g=0;g<t;g++){if(!Yc(n,g,d,h,t))continue;const p=Le(g,d,h,t);a[u*3+0]=zo(g,t,e),a[u*3+1]=zo(d,t,e),a[u*3+2]=zo(h,t,e),s&&(l[u*3+0]=s[p*3+0],l[u*3+1]=s[p*3+1],l[u*3+2]=s[p*3+2]),c&&r&&(c[u]=r[p]),u++}return{points:a,colors:l,origin:c,count:o}}function Zx(i,t){if(i.res!==t.res)throw new Error(`validateCoverage: grillas de distinta resolución (${i.res} vs ${t.res})`);const e=[];let n=0,s=0;for(let r=0;r<i.occupied.length;r++)i.occupied[r]&&(n++,t.occupied[r]?s++:e.push(r));return{target:n,covered:s,coverage:n===0?1:s/n,missing:Int32Array.from(e)}}const Jx=8;function xh(i){const{res:t,occupied:e}=i,n=t*t*t,s=new Uint8Array(n),r=new Int32Array(n),o=[];let a=0;for(let c=0;c<n;c++)e[c]&&a++;if(a===0)return{count:0,largest:0,occupied:0,cohesion:1,sizes:[]};for(let c=0;c<n;c++){if(!e[c]||s[c])continue;let u=0;r[u++]=c,s[c]=1;let h=0;for(;u>0;){const d=r[--u];h++;const g=d%t,p=(d-g)/t,_=p%t,f=(p-_)/t,m=(M,v,y)=>{if(M<0||v<0||y<0||M>=t||v>=t||y>=t)return;const w=Le(M,v,y,t);s[w]||!e[w]||(s[w]=1,r[u++]=w)};m(g-1,_,f),m(g+1,_,f),m(g,_-1,f),m(g,_+1,f),m(g,_,f-1),m(g,_,f+1)}o.push(h)}o.sort((c,u)=>u-c);const l=o[0];return{count:o.length,largest:l,occupied:a,cohesion:l/a,sizes:o.slice(0,Jx)}}const Qx=[48,64,96,128],tM={48:"Baja",64:"Media",96:"Alta",128:"Extrema"};function xn(){return typeof performance<"u"?performance.now():Date.now()}async function $c(i,t={}){const e=t.mode??sn.DEPTH,n=t.voxelRes??64,s={};let r=xn();const o=dh(i);s.segmentacion=xn()-r;const a=Hx(o);r=xn();const l=await Ji().estimate(i,o);s.profundidad=xn()-r,r=xn();const c=Mx(i,o,l,e,{voxelRes:n,maxPoints:t.maxPoints,segmentationConfidence:a.value});s.reconstruccion=xn()-r;const u=[a,kx(l.confidence),Vx(c.confidence,c.mode)];if(c.cloud.count===0)return{mask:o,depth:l,cloud:Xa(),stages:u,confidence:0,mode:c.mode,depthProviderId:Ji().id,visionProviderId:Wc().id,stats:{cloudPoints:0,voxels:0,surfaceVoxels:0,voxelRes:n,components:0,cohesion:1,origins:Gc(Xa()),timings:s}};r=xn();const h=jx(c.cloud.points,c.cloud.colors,c.cloud.count,[0,0,0],n,void 0,c.cloud.origin);s.voxelizacion=xn()-r,r=xn();const d=Kx(h),g=xh(h);s.validacion=xn()-r;let p=0;for(let f=0;f<h.occupied.length;f++)h.occupied[f]&&p++;const _={points:d.points,colors:d.colors,origin:d.origin??new Uint8Array(d.count).fill(2),count:d.count};return{mask:o,depth:l,cloud:_,stages:u,confidence:Gx(u),mode:c.mode,depthProviderId:Ji().id,visionProviderId:Wc().id,stats:{cloudPoints:c.cloud.count,voxels:p,surfaceVoxels:d.count,voxelRes:n,components:g.count,cohesion:g.cohesion,origins:Gc(_),timings:s}}}function eM(i,t,e){return{source:{fileName:t,width:e.width,height:e.height,mode:i.mode,visionProvider:i.visionProviderId,depthProvider:i.depthProviderId},cloud:i.cloud,stages:i.stages,confidence:i.confidence,stats:i.stats}}let Ke=null,yr=!1,nM=1,Sr="inline";function iM(){return Sr}function sM(){if(yr)return null;if(Ke)return Ke;try{return Ke=new Worker(new URL("/Simulador-nanobots/assets/pipeline.worker-BeAHz4Vh.js",import.meta.url),{type:"module"}),Ke.onerror=()=>{yr=!0,Ke==null||Ke.terminate(),Ke=null},Ke}catch{return yr=!0,null}}const rM=2e4;async function oM(i,t){const e=sM();if(!e)return Sr="inline",$c(i,t);const n=nM++;try{const s=await new Promise((r,o)=>{const a=setTimeout(()=>{u(),o(new Error("el Worker no respondió a tiempo"))},rM),l=d=>{d.data.id===n&&(u(),d.data.ok?r(d.data.core):o(new Error(d.data.error)))},c=()=>{u(),o(new Error("el Worker falló"))};function u(){clearTimeout(a),e.removeEventListener("message",l),e.removeEventListener("error",c)}e.addEventListener("message",l),e.addEventListener("error",c);const h={id:n,pixels:new Uint8ClampedArray(i.pixels),width:i.width,height:i.height,options:t,depthProviderId:Ji().id};e.postMessage(h,[h.pixels.buffer])});return Sr="worker",s}catch{return yr=!0,Ke==null||Ke.terminate(),Ke=null,Sr="inline",$c(i,t)}}const qc=6e4,jc={imagen:"Imagen",mascara:"Máscara",profundidad:"Profundidad",procedencia:"Vista / inferida"},Ho=240;function aM(i){return i<1024?`${i} B`:i<1024*1024?`${(i/1024).toFixed(0)} KB`:`${(i/(1024*1024)).toFixed(1)} MB`}function ur(i){return`${Math.round(i*100)}%`}function lM(i,t){const e=i.addFolder("Imagen → 3D");let n=null,s=null,r=null,o=null,a="imagen",l=!1;const c={modo:sn.DEPTH,resolucion:64,profundidad:Ji().id},u=document.createElement("div");u.style.cssText="font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;",u.textContent=Wx,e.domElement.appendChild(u);const h=document.createElement("canvas");h.width=Ho,h.height=1,h.style.cssText=`display:block;width:${Ho}px;margin:0 6px 4px;background:#05080c;border:1px solid #1d2a33;`,e.domElement.appendChild(h);const d=document.createElement("div");d.style.cssText="font-size:10px;color:#8fa3ad;padding:0 6px 4px;line-height:1.5;white-space:pre;",e.domElement.appendChild(d);const g=document.createElement("div");g.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";const p=document.createElement("div");p.style.cssText="font-size:10px;color:#9fb3bd;padding:2px 6px 6px;line-height:1.6;white-space:pre;";function _(){var U;const C=h.getContext("2d");if(!C||!s)return;const P=Ho/s.width,x=Math.max(1,Math.round(s.height*P));h.height=x,h.style.height=`${x}px`;const S=C.createImageData(s.width,s.height);for(let F=0;F<s.width*s.height;F++){let $=0,R=0,N=0;if(a==="imagen"||!r)$=s.pixels[F*4],R=s.pixels[F*4+1],N=s.pixels[F*4+2];else if(a==="mascara"){const O=r.mask.mask[F]===1;$=O?60:8,R=O?220:12,N=O?180:18}else if(a==="profundidad"){const O=r.depth.depth[F];$=R=N=Math.round(O*255),r.mask.mask[F]||($=8,R=12,N=18)}else{const O=r.mask.mask[F]===1;$=O?70:8,R=O?200:12,N=O?90:18}S.data[F*4]=$,S.data[F*4+1]=R,S.data[F*4+2]=N,S.data[F*4+3]=255}const I=document.createElement("canvas");I.width=s.width,I.height=s.height,(U=I.getContext("2d"))==null||U.putImageData(S,0,0),C.clearRect(0,0,h.width,h.height),C.imageSmoothingEnabled=!1,C.drawImage(I,0,0,h.width,h.height)}function f(){if(!n||!s){d.textContent="Sin imagen.";return}const C=n.type||"desconocido";d.textContent=`${n.name}
${aM(n.size)} · ${C}
procesada a ${s.width}×${s.height}`}function m(){if(!o||!r){p.textContent="";return}const C=o.stats,P=C.origins,x=C.surfaceVoxels,S=t.readNanobotCount(),I=[];I.push(`${Yx(o.confidence)} — confianza ${ur(o.confidence)}`);for(const F of o.stages)I.push(`  ${F.stage}: ${ur(F.value)} (${F.reason})`);I.push(""),I.push(`geometría vista: ${ur(P.observedFraction)} de la cáscara`),I.push(`  observada ${P.observed} · interpolada ${P.interpolated} · inferida ${P.inferred}`),I.push(""),I.push(`vóxeles: ${C.voxels} (${C.surfaceVoxels} de superficie, res ${C.voxelRes}³)`),I.push(`piezas: ${C.components}${C.components>1?` (cohesión ${ur(C.cohesion)})`:""}`),x>qc?I.push(`⚠ la cáscara pide ${x} agentes y el techo son ${qc}`):x>S&&I.push(`⚠ hacen falta ~${x} nanobots y hay ${S}: subí la cantidad`);const U=Object.entries(C.timings).map(([F,$])=>`${F} ${$.toFixed(0)}ms`).join(" · ");I.push(""),I.push(`${iM()==="worker"?"en Worker":"en línea (sin Worker)"} — ${U}`),p.textContent=I.join(`
`)}const M=document.createElement("input");M.type="file",M.accept="image/png,image/jpeg,image/webp,image/*",M.style.display="none",M.dataset.imageSlot="single",document.body.appendChild(M);async function v(C){if(!C.type.startsWith("image/")){g.textContent="Ese archivo no es una imagen.";return}n=C,r=null,o=null,a="imagen",g.textContent="Leyendo imagen...";try{s=await ix(C)}catch(P){s=null,g.textContent=P instanceof Error?P.message:"No se pudo leer la imagen.";return}f(),_(),m(),g.textContent="Lista. Elegí modo y resolución, y reconstruí."}M.addEventListener("change",()=>{var P;const C=(P=M.files)==null?void 0:P[0];C&&v(C)});const y=e.domElement;y.addEventListener("dragover",C=>{C.preventDefault(),y.style.outline="1px dashed #4be3ff"}),y.addEventListener("dragleave",()=>{y.style.outline=""}),y.addEventListener("drop",C=>{var x,S;C.preventDefault(),y.style.outline="";const P=(S=(x=C.dataTransfer)==null?void 0:x.files)==null?void 0:S[0];P&&v(P)}),window.addEventListener("paste",C=>{var x,S;const P=(S=(x=C.clipboardData)==null?void 0:x.files)==null?void 0:S[0];P&&P.type.startsWith("image/")&&v(P)}),e.add({fn:()=>M.click()},"fn").name("Subir imagen"),e.add(c,"modo",Object.fromEntries(Object.values(sn).map(C=>[fx[C],C]))).name("Modo"),e.add(c,"resolucion",Object.fromEntries(Qx.map(C=>[`${tM[C]} (${C}³)`,C]))).name("Resolución"),e.add(c,"profundidad",Object.fromEntries(Fx().map(C=>[C.name,C.id]))).name("Profundidad").onChange(C=>Ox(C));const w=e.add({etapa:a},"etapa",Object.fromEntries(Object.keys(jc).map(C=>[jc[C],C]))).name("Ver").onChange(C=>{a=C,_()}),b={reconstruir:async()=>{if(!l){if(!n||!s){g.textContent="Subí una imagen primero.";return}l=!0,g.textContent="Reconstruyendo...";try{if(r=await oM(s,{mode:c.modo,voxelRes:c.resolucion}),o=eM(r,n.name,s),r.cloud.count===0){g.textContent="No se pudo separar ningún objeto — probá con un fondo más liso.",m();return}a="mascara",w.setValue("mascara"),_(),m(),g.textContent=`${r.stats.surfaceVoxels} vóxeles — construyendo con el enjambre...`,await A()}catch(C){g.textContent=C instanceof Error?C.message:"Falló la reconstrucción."}finally{l=!1}}},reconstruir2:async()=>{if(!l){if(!r||!n||r.cloud.count===0){g.textContent="Reconstruí primero.";return}l=!0;try{await A()}finally{l=!1}}}};async function A(){if(!r||!n)return;const C=rh(r.cloud.points,r.cloud.colors),P=await uh(n);t.onFormShape(C,P),g.textContent=`Construyendo: ${r.stats.surfaceVoxels} vóxeles de superficie.`}e.add(b,"reconstruir").name("Reconstruir y construir"),e.add(b,"reconstruir2").name("Volver a construir"),e.domElement.appendChild(g),e.domElement.appendChild(p),f()}const Oe={CORE:0,TRAVELING:1,ASSEMBLING:2,ATTACHED:3,RETURNING:4,IDLE:5},Kc=["núcleo","viajando","ensamblando","asentado","volviendo","reposo","reparando","error"],ko=new Uint8Array(0),Zc=new Int16Array(0),Vo=new Float32Array(0);function cM(){let i=0,t=ko,e=Zc,n=ko,s=Vo,r=Vo,o=new Uint8Array(0),a=new Uint8Array(0),l=0;const c={get index(){return l},get role(){return t[l]??0},get region(){return e[l]??-1},get layer(){return n[l]??0},get state(){return o[l]??Oe.IDLE},get botType(){return a[l]??$t.NANOBOT},get delayFraction(){return s[l]??0},get targetX(){return r[l*3+0]??0},get targetY(){return r[l*3+1]??0},get targetZ(){return r[l*3+2]??0}};function u(d){o.length>=d||(o=new Uint8Array(d))}function h(d){a.length>=d||(a=new Uint8Array(d))}return{get count(){return i},get role(){return t},get region(){return e},get layer(){return n},get delayFraction(){return s},get target(){return r},get state(){return o},get botType(){return a},adoptFormation(d){i=d.count,t=d.role,e=d.region,n=d.layer,s=d.delayFraction,r=d.target,u(i),o.fill(Oe.CORE,0,i),h(i),a.fill($t.NANOBOT,0,i)},setRegions(d){e=d},reset(d,g,p){i=d,t=g,e=Zc,n=ko,s=Vo,r=p,u(i),o.fill(Oe.IDLE,0,i),h(i),a.fill($t.NANOBOT,0,i)},fillState(d){u(i),o.fill(d,0,i)},assignTypesFromRoles(d){h(i);for(let g=0;g<i;g++)a[g]=t[g]===d?$t.MATERIAL:$t.NANOBOT},countByType(d){d.fill(0);for(let g=0;g<i;g++)d[a[g]]++;return d},countByState(d){d.fill(0);for(let g=0;g<i;g++)d[o[g]]++;return d},at(d){return l=d,c}}}const Jc=.3,uM={metal:"Metales",mineral:"Minerales y piedras",organico:"Orgánicos",construccion:"Fabricados",elemento:"Elementos",ficcion:"Ficción"},_l=[{id:"oro",name:"Oro",color:13938487,glow:.85,variation:.06,family:"metal",aliases:["gold","dorado","aureo"]},{id:"plata",name:"Plata",color:12633288,glow:.8,variation:.05,family:"metal",aliases:["silver","plateado"]},{id:"cobre",name:"Cobre",color:12088115,glow:.7,variation:.08,family:"metal",aliases:["copper"]},{id:"bronce",name:"Bronce",color:10254908,glow:.65,variation:.08,family:"metal",aliases:["bronze","laton","latón"]},{id:"hierro",name:"Hierro",color:7039854,glow:.35,variation:.1,family:"metal",aliases:["iron","fierro"]},{id:"acero",name:"Acero",color:9212310,glow:.6,variation:.05,family:"metal",aliases:["steel","inoxidable","acero inoxidable"]},{id:"titanio",name:"Titanio",color:8226960,glow:.55,variation:.05,family:"metal",aliases:["titanium"]},{id:"aluminio",name:"Aluminio",color:11054515,glow:.6,variation:.04,family:"metal",aliases:["aluminum","aluminium"]},{id:"plomo",name:"Plomo",color:5857387,glow:.2,variation:.06,family:"metal",aliases:["lead"]},{id:"cromo",name:"Cromo",color:12568524,glow:.95,variation:.03,family:"metal",aliases:["chrome","cromado"]},{id:"oxido",name:"Óxido",color:9059102,glow:.2,variation:.16,family:"metal",aliases:["herrumbre","rust","oxidado","corroido","corroído"]},{id:"diamante",name:"Diamante",color:12117744,glow:.9,variation:.04,family:"mineral",aliases:["diamond","brillante"]},{id:"rubi",name:"Rubí",color:11538972,glow:.8,variation:.06,family:"mineral",aliases:["ruby"]},{id:"esmeralda",name:"Esmeralda",color:1015114,glow:.8,variation:.06,family:"mineral",aliases:["emerald"]},{id:"zafiro",name:"Zafiro",color:999336,glow:.8,variation:.06,family:"mineral",aliases:["sapphire"]},{id:"amatista",name:"Amatista",color:8080309,glow:.7,variation:.07,family:"mineral",aliases:["amethyst"]},{id:"ambar",name:"Ámbar",color:12614174,glow:.65,variation:.1,family:"mineral",aliases:["amber","resina"]},{id:"jade",name:"Jade",color:4033387,glow:.5,variation:.1,family:"mineral"},{id:"marmol",name:"Mármol",color:13617597,glow:.18,variation:.14,family:"mineral",aliases:["marble"]},{id:"granito",name:"Granito",color:7236199,glow:.15,variation:.18,family:"mineral",aliases:["granite"]},{id:"obsidiana",name:"Obsidiana",color:1512988,glow:.45,variation:.08,family:"mineral",aliases:["obsidian","vidrio volcanico"]},{id:"cuarzo",name:"Cuarzo",color:14208982,glow:.6,variation:.08,family:"mineral",aliases:["quartz","cristal de roca"]},{id:"perla",name:"Perla",color:14077378,glow:.4,variation:.07,family:"mineral",aliases:["pearl","nacar","nácar"]},{id:"carbon",name:"Carbón",color:2368554,glow:.1,variation:.14,family:"mineral",aliases:["coal","grafito","carbono"]},{id:"arena",name:"Arena",color:12756600,glow:.15,variation:.14,family:"mineral",aliases:["sand","arenisca"]},{id:"tierra",name:"Tierra",color:6046502,glow:.08,variation:.18,family:"mineral",aliases:["soil","barro","lodo"]},{id:"piel",name:"Piel",color:14197124,glow:.12,variation:.1,family:"organico",aliases:["skin","carne cutanea","epidermis","cutis"]},{id:"hueso",name:"Hueso",color:14603188,glow:.12,variation:.13,family:"organico",aliases:["bone","esqueleto","huesos","calcio"]},{id:"musculo",name:"Músculo",color:10365736,glow:.18,variation:.14,family:"organico",aliases:["muscle","carne","tejido muscular"]},{id:"sangre",name:"Sangre",color:7998482,glow:.3,variation:.1,family:"organico",aliases:["blood","hemoglobina"]},{id:"cartilago",name:"Cartílago",color:13157296,glow:.14,variation:.09,family:"organico",aliases:["cartilage","tendon","tendón","ligamento"]},{id:"esmalte",name:"Esmalte dental",color:14999759,glow:.3,variation:.06,family:"organico",aliases:["diente","dientes","tooth","enamel","marfil"]},{id:"cabello",name:"Cabello",color:3810328,glow:.12,variation:.14,family:"organico",aliases:["hair","pelo","pelaje"]},{id:"cuero",name:"Cuero",color:7029543,glow:.12,variation:.12,family:"organico",aliases:["leather","piel curtida"]},{id:"madera",name:"Madera",color:9067051,glow:.1,variation:.16,family:"organico",aliases:["wood","roble","pino","tronco"]},{id:"hoja",name:"Hoja / planta",color:4160809,glow:.2,variation:.14,family:"organico",aliases:["leaf","planta","vegetal","cesped","césped","musgo"]},{id:"coral",name:"Coral",color:13920079,glow:.35,variation:.12,family:"organico"},{id:"chocolate",name:"Chocolate",color:4860440,glow:.15,variation:.08,family:"organico",aliases:["cacao"]},{id:"vidrio",name:"Vidrio",color:10475230,glow:.55,variation:.05,family:"construccion",aliases:["glass","cristal"]},{id:"ceramica",name:"Cerámica",color:14273464,glow:.2,variation:.08,family:"construccion",aliases:["ceramic","porcelana","loza","barro cocido"]},{id:"plastico",name:"Plástico",color:14174271,glow:.3,variation:.03,family:"construccion",aliases:["plastic","polimero","polímero","acrilico","acrílico"]},{id:"caucho",name:"Caucho",color:2302759,glow:.05,variation:.05,family:"construccion",aliases:["goma","rubber","neumatico","neumático"]},{id:"hormigon",name:"Hormigón",color:10131345,glow:.1,variation:.12,family:"construccion",aliases:["concreto","cemento","concrete"]},{id:"ladrillo",name:"Ladrillo",color:10242607,glow:.12,variation:.14,family:"construccion",aliases:["brick","adobe"]},{id:"tela",name:"Tela",color:4153244,glow:.1,variation:.1,family:"construccion",aliases:["fabric","algodon","algodón","lana","seda","textil"]},{id:"papel",name:"Papel",color:13815230,glow:.12,variation:.08,family:"construccion",aliases:["paper","carton","cartón"]},{id:"fibra-carbono",name:"Fibra de carbono",color:2829875,glow:.35,variation:.06,family:"construccion",aliases:["carbon fiber","fibra"]},{id:"neon",name:"Neón",color:3139327,glow:1,variation:.04,family:"construccion",aliases:["neon","led","luz"]},{id:"agua",name:"Agua",color:3112885,glow:.5,variation:.08,family:"elemento",aliases:["water","liquido","líquido","mar"]},{id:"hielo",name:"Hielo",color:10474472,glow:.55,variation:.08,family:"elemento",aliases:["ice","escarcha","nieve","snow"]},{id:"lava",name:"Lava",color:14699024,glow:1,variation:.12,family:"elemento",aliases:["magma","roca fundida"]},{id:"fuego",name:"Fuego",color:15757336,glow:1,variation:.14,family:"elemento",aliases:["fire","llama","flama"]},{id:"humo",name:"Humo",color:5921376,glow:.2,variation:.12,family:"elemento",aliases:["smoke","niebla","ceniza"]},{id:"mercurio",name:"Mercurio",color:11449532,glow:.9,variation:.04,family:"elemento",aliases:["azogue","mercury"]},{id:"vibranium",name:"Vibranium",color:4872838,glow:.7,variation:.06,family:"ficcion",aliases:["vibranio"]},{id:"adamantium",name:"Adamantium",color:9410726,glow:.85,variation:.04,family:"ficcion",aliases:["adamantio","adamantina"]},{id:"mithril",name:"Mithril",color:13884904,glow:.8,variation:.04,family:"ficcion",aliases:["mitril","mitrilo"]},{id:"kriptonita",name:"Kriptonita",color:5036346,glow:1,variation:.08,family:"ficcion",aliases:["kryptonite","criptonita"]},{id:"uru",name:"Uru",color:7168599,glow:.6,variation:.08,family:"ficcion"},{id:"orichalcum",name:"Oricalco",color:13208622,glow:.85,variation:.07,family:"ficcion",aliases:["orichalcum","oricalco"]},{id:"eterio",name:"Eterio",color:10181862,glow:1,variation:.1,family:"ficcion",aliases:["ether","eter","éter","energia","energía","plasma"]},{id:"antimateria",name:"Antimateria",color:16723888,glow:1,variation:.06,family:"ficcion",aliases:["antimatter"]}],Er={LIBRARY:0,DERIVED:1};function vl(i){return i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9\s-]/g," ").replace(/[\s-]+/g," ").trim()}function Mh(i){return[i.id,i.name,...i.aliases??[]].map(vl)}const Ya=new Map;for(const i of _l)for(const t of Mh(i))Ya.has(t)||Ya.set(t,i);function hM(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t>>>0}function dM(i,t,e){const n=s=>{const r=(s+i*12)%12,o=t*Math.min(e,1-e),a=e-o*Math.max(-1,Math.min(r-3,9-r,1));return Math.round(Math.max(0,Math.min(1,a))*255)};return n(0)<<16|n(8)<<8|n(4)}function fM(i){const t=vl(i),e=hM(t),n=e%360/360,s=.45+(e>>>8&255)/255*.3,r=.42+(e>>>16&255)/255*.12;return{id:`derivado-${t.replace(/\s/g,"-")||"sin-nombre"}`,name:i.trim()||"material sin nombre",color:dM(n,s,r),glow:.55,variation:.08,family:"ficcion"}}function pM(i){const t=vl(i);if(!t)return null;const e=Ya.get(t);if(e)return{definition:e,origin:Er.LIBRARY,query:i};let n=null,s=0;for(const r of _l)for(const o of Mh(r))o.length<=s||(t.includes(o)||o.includes(t))&&(n=r,s=o.length);return n?{definition:n,origin:Er.LIBRARY,query:i}:{definition:fM(i),origin:Er.DERIVED,query:i}}function mM(i){return i.origin===Er.LIBRARY?"color de biblioteca":"no está en la biblioteca: color derivado del nombre"}function gM(){return["metal","mineral","organico","construccion","elemento","ficcion"].map(t=>({family:t,label:uM[t],names:_l.filter(e=>e.family===t).map(e=>e.name)}))}function _M(i,t){const e=new ml({title:"Parámetros del enjambre"});e.addFolder("Microbots (exoesqueleto)").add(i,"microbotCount",0,6e4,100).name("Cantidad").onFinishChange(r=>t.onMicrobotCountChange(r)),e.add(i,"count",20,6e4,1).name("Nanobots").onFinishChange(r=>t.onCountChange(r)),e.add(i,"maxSpeed",.5,10,.1).name("Velocidad máx.").onChange(()=>t.onParamsChange(i)),e.add(i,"cohesion",0,3,.05).name("Cohesión").onChange(()=>t.onParamsChange(i)),e.add(i,"separation",0,3,.05).name("Separación").onChange(()=>t.onParamsChange(i)),e.add(i,"alignment",0,3,.05).name("Alineación").onChange(()=>t.onParamsChange(i));const s={guardar:()=>t.onSave({count:i.count,cohesion:i.cohesion,separation:i.separation,alignment:i.alignment,maxSpeed:i.maxSpeed}),cargar:()=>t.onLoad()};return e.add(s,"guardar").name("Guardar configuración"),e.add(s,"cargar").name("Cargar configuración"),bM(e,t),lM(e,{onFormShape:t.onFormShape,readNanobotCount:t.readNanobotCount??(()=>i.count)}),e}const Us=200;function vM(i){const t=i.addFolder("Estado de los agentes"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin agentes",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<Us)return;n=o;const a=r();let l="";for(let u=0;u<Kc.length;u++)a[u]!==0&&(l+=`${Kc[u]}: ${a[u]}
`);const c=l===""?"sin agentes":l.trimEnd();c!==s&&(s=c,e.textContent=c)}}function xM(i){const t=i.addFolder("Cola de tareas"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin tareas",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<Us)return;n=o;const a=r().describe(),l=a.length?a.join(`
`):"sin tareas";l!==s&&(s=l,e.textContent=l)}}function MM(i){const t=i.addFolder("Cobertura de la figura"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin figura",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<Us)return;n=o;const a=r(),l=a?`${Math.round(a.fraction*100)}% del volumen
${a.covered} de ${a.total} celdas`:"sin figura";l!==s&&(s=l,e.textContent=l)}}function yM(i,t,e){const n=i.addFolder("Material y regiones"),s="— del objeto (foto) —",r=[s];for(const y of gM())r.push(...y.names);const o="El color sale de la foto: cada agente lleva el de su posición.",a={elegir:s,escribir:""},l=document.createElement("div");l.style.cssText="display:flex;align-items:center;gap:6px;padding:4px 10px 6px";const c=document.createElement("span");c.style.cssText="width:14px;height:14px;border-radius:3px;flex:0 0 auto;border:1px solid rgba(255,255,255,0.25);background:transparent";const u=document.createElement("span");u.style.cssText="font-size:10px;opacity:0.6;line-height:1.4",u.textContent=o,l.append(c,u);const h=y=>{if(y===null){u.textContent=o,c.style.background="transparent",e==null||e(null);return}const w=pM(y);w&&(u.textContent=`${w.definition.name} — ${mM(w)}`,c.style.background=br(w.definition.color),e==null||e(w.definition))},d=n.add(a,"elegir",r).name("Material"),g=n.add(a,"escribir").name("…o escribilo");d.onChange(y=>{a.escribir="",g.updateDisplay(),h(y===s?null:y)}),g.onFinishChange(y=>{const w=y.trim();a.elegir=s,d.updateDisplay(),h(w||null)}),n.domElement.appendChild(l);const p=document.createElement("div");p.style.padding="6px 10px 2px",p.style.fontSize="11px",p.style.lineHeight="1.6",p.style.whiteSpace="pre-wrap",p.style.opacity="0.85",p.textContent="sin figura",n.domElement.appendChild(p);const _=document.createElement("div");_.style.cssText="display:flex;flex-wrap:wrap;gap:4px;padding:2px 10px 8px",n.domElement.appendChild(_);const f={regiones:!1};n.add(f,"regiones").name("depurar regiones").onChange(y=>t(y));let m=-1/0,M="",v="";return y=>{const w=performance.now();if(w-m<Us)return;m=w;const b=y(),A=b?[`${b.regions} ${b.regions===1?"región":"regiones"} · ${b.slots} ${b.slots===1?"tanda":"tandas"}`,`${b.materialCount} Material Bots`,b.phase,b.sourceLabel].join(`
`):"sin figura";A!==M&&(M=A,p.textContent=A);const C=b?b.palette.join(","):"";if(C!==v){v=C,_.replaceChildren();for(const P of(b==null?void 0:b.palette)??[]){const x=document.createElement("span");x.title=br(P),x.style.cssText=`width:16px;height:16px;border-radius:3px;border:1px solid rgba(255,255,255,0.25);background:${br(P)}`,_.appendChild(x)}}}}function br(i){return`#${i.toString(16).padStart(6,"0")}`}function SM(i){const t=i.addFolder("Tipos de bot"),e=document.createElement("div");e.style.cssText="padding:6px 10px 2px;font-size:10px;line-height:1.6;opacity:0.6;white-space:pre-wrap",t.domElement.appendChild(e);const n=document.createElement("div");n.style.padding="6px 10px",n.style.fontSize="11px",n.style.lineHeight="1.7",t.domElement.appendChild(n);const s=[];for(const l of yn){const c=document.createElement("div");c.style.display="flex",c.style.alignItems="center",c.style.gap="6px";const u=document.createElement("span");u.style.width="9px",u.style.height="9px",u.style.borderRadius="2px",u.style.flex="0 0 auto",u.style.background=br(rn(l.type).identityColor),c.appendChild(u);const h=document.createElement("span");h.textContent=l.name,h.style.flex="1 1 auto",h.style.opacity=l.implemented?"0.9":"0.5",h.title=`${l.role} — ${l.fn}`,c.appendChild(h);const d=document.createElement("span");d.style.opacity="0.75",d.textContent="0",c.appendChild(d),s.push(d),n.appendChild(c);const g=l.implemented?l.note:l.pendingReason;if(g){const p=document.createElement("div");p.textContent=g,p.style.fontSize="10px",p.style.opacity="0.45",p.style.margin="-2px 0 4px 15px",p.style.lineHeight="1.35",n.appendChild(p)}}let r=-1/0;const o=yn.map(()=>-1);let a="";return(l,c)=>{const u=performance.now();if(u-r<Us)return;r=u;const h=l();for(let g=0;g<yn.length;g++){const p=h[yn[g].type]??0;p!==o[g]&&(o[g]=p,s[g].textContent=yn[g].implemented?String(p):"sin agentes")}const d=__(h,c()).map(v_).join(`
`);d!==a&&(a=d,e.textContent=d)}}function EM(i,t){const e=i.addFolder("Inspección"),n=document.createElement("div");n.style.cssText="font-size:10px;opacity:0.5;line-height:1.35;padding:4px 10px",n.textContent="El Zoom especial deja acercarse mucho más que el zoom normal, y ahí se distingue el hexágono y el tipo de cada bot.",e.domElement.appendChild(n);const s={zoom:()=>{const l=t.onToggleZoom();r.name(l?"Zoom especial: ACTIVO":"Zoom especial")},inspector:()=>{const l=t.onToggleInspector();o.name(l?"Inspección de bots: ABIERTA":"Inspección de bots")},capas:()=>{const l=t.onToggleLayers();a.name(l?"Ver capas: ABIERTO":"Ver capas")}},r=e.add(s,"zoom").name("Zoom especial"),o=e.add(s,"inspector").name("Inspección de bots"),a=e.add(s,"capas").name("Ver capas")}function bM(i,t){const e=i.addFolder("Comandos"),n={objectName:""};let s=null;const r=document.createElement("input");r.type="file",r.accept="image/*",r.style.display="none",r.dataset.commandSlot="photo",document.body.appendChild(r);const o=document.createElement("img");o.style.cssText="width:100%;max-height:80px;object-fit:contain;display:none;margin:4px 0;border-radius:4px;";const a=document.createElement("div");a.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";let l=null;function c(){l&&(URL.revokeObjectURL(l),l=null)}o.addEventListener("load",c),o.addEventListener("error",c),r.addEventListener("change",()=>{var d;const h=(d=r.files)==null?void 0:d[0];h&&(c(),l=URL.createObjectURL(h),o.src=l,o.style.display="block",s=h,a.textContent=`Foto adjunta: ${h.name}`)}),e.add(n,"objectName").name("Objeto");const u={adjuntarFoto:()=>r.click(),formarObjeto:async()=>{if(!s){a.textContent="Subí una foto del objeto antes de formarlo.";return}const h=pl(n.objectName);if(!h){a.textContent=`Objeto no reconocido. Probá: ${J_().join(", ")}`;return}a.textContent=`Formando: ${h}`;const d=await uh(s);t.onFormShape(h,d)},volverAlNucleo:()=>{a.textContent="Volviendo al núcleo...",t.onReturnToCore()}};e.add(u,"adjuntarFoto").name("Adjuntar foto"),e.add(u,"formarObjeto").name("Formar objeto"),e.add(u,"volverAlNucleo").name("Volver al núcleo"),e.domElement.appendChild(o),e.domElement.appendChild(a)}const Xr=Math.PI*(3-Math.sqrt(5));function Qi(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function AM(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=t[2]-i[2],r=Math.sqrt(e*e+n*n+s*s)||1,o=e/r,a=n/r,l=s/r,c=Math.abs(a)>.99?1:0,u=Math.abs(a)>.99?0:1;let h=u*l,d=-c*l,g=c*a-u*o;const p=Math.sqrt(h*h+d*d+g*g)||1;return h/=p,d/=p,g/=p,{ux:h,uy:d,uz:g,vx:a*g-l*d,vy:l*h-o*g,vz:o*d-a*h}}function Ar(i,t,e,n,s,r){const o=n*Math.sin(i*Math.PI),a=i*e*Math.PI*2+t*Xr,l=Math.cos(a)*o,c=Math.sin(a)*o;r[0]=s.ux*l+s.vx*c,r[1]=s.uy*l+s.vy*c,r[2]=s.uz*l+s.vz*c}const yh=1,Sh=1,xl=yh+Sh,TM=.35,Eh=xl*TM,Qc=xl-Eh,Ml={travelDuration:yh,layerStaggerSpan:Sh,layerDuration:xl,swirlTurns:2.5,swirlMaxRadius:4,packetDuration:Eh,packetSwirlTurns:2,packetSwirlMaxRadius:1.2,burstTravelDuration:Qc/2,burstStaggerSpan:Qc/2};function wM(i,t,e){return Math.min(Math.floor(i/e),t-1)}const CM=1.2;function bh(i,t,e,n,s){let r=0,o=-1/0,a=0,l=!1;for(let c=0;c<e;c++){if(i[c]!==n)continue;const u=t[c*3+1];u>o&&(o=u,r=t[c*3+0],a=t[c*3+2],l=!0)}return l?[r,o+CM,a]:[s[0],s[1],s[2]]}function RM(i,t,e,n,s,r,o,a=0){const c=new Uint8Array(e);for(let f=0;f<e;f++)c[f]=i[f]===n?1:0;const u=bh(i,t,e,n,r),h=new Float32Array(e),d=[1/0,1/0],g=[-1/0,-1/0];for(let f=0;f<e;f++){const m=c[f],M=m===1?u:o,v=t[f*3+0]-M[0],y=t[f*3+1]-M[1],w=t[f*3+2]-M[2];h[f]=Math.sqrt(v*v+y*y+w*w);const b=h[f];b<d[m]&&(d[m]=b),b>g[m]&&(g[m]=b)}const p=new Float32Array(e);for(let f=0;f<e;f++){const m=c[f],M=g[m]-d[m];p[f]=M>0?(h[f]-d[m])/M:0}const _=2*s;return{layerOf:c,delayFraction:p,layerCount:2,travelDuration:_,totalDuration:_+a,wave0Landing:u}}const de=[0,0,0],PM=.85;function tu(i,t){return i>=1?Oe.ATTACHED:i<=0?Oe.CORE:i>=PM&&t===Oe.TRAVELING?Oe.ASSEMBLING:t}function LM(i,t,e,n,s,r,o,a=Ml,l,c=Oe.TRAVELING,u=null,h=!1){const{layerOf:d,delayFraction:g,layerCount:p,wave0Landing:_}=n;if(h){UM(i,t,e,n,s,r,o,a,l);return}const f=wM(o,p,a.layerDuration),m=o-f*a.layerDuration,M=f===1;for(let v=0;v<e;v++){const y=d[v];if(y<f)i[v*3+0]=t[v*3+0],i[v*3+1]=t[v*3+1],i[v*3+2]=t[v*3+2],l&&(l[v]=Oe.ATTACHED);else if(y>f){const w=u?u[v*3+0]:s[0],b=u?u[v*3+1]:s[1],A=u?u[v*3+2]:s[2];i[v*3+0]=w,i[v*3+1]=b,i[v*3+2]=A,l&&(l[v]=Oe.CORE)}else if(!u&&M&&m<a.packetDuration){const w=Qi(Math.min(Math.max(m/a.packetDuration,0),1));Ar(w,v,a.packetSwirlTurns,a.packetSwirlMaxRadius,r,de),i[v*3+0]=s[0]+(_[0]-s[0])*w+de[0],i[v*3+1]=s[1]+(_[1]-s[1])*w+de[1],i[v*3+2]=s[2]+(_[2]-s[2])*w+de[2],l&&(l[v]=c)}else if(!u&&M){const b=(m-a.packetDuration-g[v]*a.burstStaggerSpan)/a.burstTravelDuration,A=Qi(Math.min(Math.max(b,0),1));Ar(A,v,a.swirlTurns,a.swirlMaxRadius,r,de),i[v*3+0]=_[0]+(t[v*3+0]-_[0])*A+de[0],i[v*3+1]=_[1]+(t[v*3+1]-_[1])*A+de[1],i[v*3+2]=_[2]+(t[v*3+2]-_[2])*A+de[2],l&&(l[v]=tu(A,c))}else{const w=(m-g[v]*a.layerStaggerSpan)/a.travelDuration,b=Qi(Math.min(Math.max(w,0),1));Ar(b,v,a.swirlTurns,a.swirlMaxRadius,r,de);const A=u?u[v*3+0]:s[0],C=u?u[v*3+1]:s[1],P=u?u[v*3+2]:s[2];i[v*3+0]=A+(t[v*3+0]-A)*b+de[0],i[v*3+1]=C+(t[v*3+1]-C)*b+de[1],i[v*3+2]=P+(t[v*3+2]-P)*b+de[2],l&&(l[v]=tu(b,c))}}}const IM=3,DM=6;function UM(i,t,e,n,s,r,o,a,l){const{layerOf:c,delayFraction:u,layerCount:h}=n,d=n.travelDuration||h*a.layerDuration,g=d>0?1-Math.min(Math.max(o/d,0),1):1;for(let p=0;p<e;p++){const f=((h>1?(h-1-c[p])/(h-1):0)+u[p])*.5,m=Math.min(Math.max((g-f*.6)/.4,0),1),M=Qi(m);if(m<=0){i[p*3+0]=t[p*3+0],i[p*3+1]=t[p*3+1],i[p*3+2]=t[p*3+2],l&&(l[p]=Oe.ATTACHED);continue}const v=DM*Math.sin(M*Math.PI),y=M*IM*Math.PI*2+p*Xr,w=Math.cos(y),b=Math.sin(y);i[p*3+0]=t[p*3+0]+(s[0]-t[p*3+0])*M+(r.ux*w+r.vx*b)*v,i[p*3+1]=t[p*3+1]+(s[1]-t[p*3+1])*M+(r.uy*w+r.vy*b)*v,i[p*3+2]=t[p*3+2]+(s[2]-t[p*3+2])*M+(r.uz*w+r.vz*b)*v,l&&(l[p]=M>=1?Oe.CORE:Oe.RETURNING)}}const NM=.15,OM=.1;function zr(i,t,e=NM,n=OM){if(t<=1)return{start:0,end:1-n};const s=(1-n)/(t-(t-1)*e),r=i*s*(1-e);return{start:r,end:r+s}}function eu(i,t){const e=t.end-t.start;return e<=0?i>=t.end?1:0:Qi(Math.min(Math.max((i-t.start)/e,0),1))}function FM(i,t,e,n,s,r,o,a,l,c,u,h=1){const d=eu(l,zr(0,h)),g=h>1?eu(l,zr(1,h)):d;for(let p=0;p<r;p++){const _=s[p]?g:d;Ar(_,p,c,u,a,de),s[p]?(t[p*6+0]=o[0]+(n[p*6+0]-o[0])*_+de[0],t[p*6+1]=o[1]+(n[p*6+1]-o[1])*_+de[1],t[p*6+2]=o[2]+(n[p*6+2]-o[2])*_+de[2],t[p*6+3]=o[0]+(n[p*6+3]-o[0])*_+de[0],t[p*6+4]=o[1]+(n[p*6+4]-o[1])*_+de[1],t[p*6+5]=o[2]+(n[p*6+5]-o[2])*_+de[2]):(i[p*3+0]=o[0]+(e[p*3+0]-o[0])*_+de[0],i[p*3+1]=o[1]+(e[p*3+1]-o[1])*_+de[1],i[p*3+2]=o[2]+(e[p*3+2]-o[2])*_+de[2])}}const BM=32,zM=8,HM=4;function Ah(i){const t=Math.round(Math.sqrt(i/(3*HM)));return Math.min(BM,Math.max(zM,t))}const Ze=-1;function kM(i){let t=0;for(let e=0;e<i.count;e++)i.member[e]&&t++;return t}function VM(i){const t=i.res??Ah(kM(i)),e=i.half??si,{points:n,count:s,member:r,material:o,materialCount:a,center:l}=i,c=t*t*t,u=new Int16Array(s).fill(Ze);if(s===0||a===0)return{region:u,regionCount:0,sizes:new Int32Array(0),regionMaterial:new Int16Array(0)};const h=new Uint16Array(c*a),d=new Int32Array(s).fill(-1);for(let v=0;v<s;v++){if(!r[v])continue;const y=o[v];if(y<0||y>=a)continue;const w=Ne(n[v*3+0]-l[0],t,e),b=Ne(n[v*3+1]-l[1],t,e),A=Ne(n[v*3+2]-l[2],t,e);if(w<0||b<0||A<0)continue;const C=Le(w,b,A,t);d[v]=C;const P=C*a+y;h[P]<65535&&h[P]++}const g=new Int16Array(c).fill(-1);for(let v=0;v<c;v++){const y=v*a;let w=-1,b=0;for(let A=0;A<a;A++)h[y+A]>b&&(b=h[y+A],w=A);g[v]=w}const p=new Int32Array(c).fill(-1),_=new Int32Array(c),f=[];for(let v=0;v<c;v++){if(g[v]<0||p[v]>=0)continue;const y=g[v],w=f.length;f.push(y);let b=0;for(_[b++]=v,p[v]=w;b>0;){const A=_[--b],C=A%t,P=(A-C)/t,x=P%t,S=(P-x)/t,I=(U,F,$)=>{if(U<0||F<0||$<0||U>=t||F>=t||$>=t)return;const R=Le(U,F,$,t);p[R]>=0||g[R]!==y||(p[R]=w,_[b++]=R)};I(C-1,x,S),I(C+1,x,S),I(C,x-1,S),I(C,x+1,S),I(C,x,S-1),I(C,x,S+1)}}const m=f.length,M=new Int32Array(m);for(let v=0;v<s;v++){const y=d[v];if(y<0)continue;const w=p[y];w<0||(u[v]=w,M[w]++)}return{region:u,regionCount:m,sizes:M,regionMaterial:Int16Array.from(f)}}const yi={OBSERVED:0,FALLBACK:1,CHOSEN:2},nu={[yi.OBSERVED]:"color por posición (de la imagen)",[yi.FALLBACK]:"paleta repartida en bandas (aproximado)",[yi.CHOSEN]:"material elegido"},GM=6,WM=.01,Th=.5,XM={count:0,color:new Uint8Array(0),region:new Int16Array(0),spread:new Float32Array(0),regions:[],palette:[Mi],slots:0,source:yi.FALLBACK,materialCount:0,glow:Th,chosen:null},Dn=8,Go=256/Dn;function YM(i,t,e,n=Ds){const s=Dn*Dn*Dn,r=new Uint32Array(s),o=new Float64Array(s),a=new Float64Array(s),l=new Float64Array(s);for(let u=0;u<t;u++){if(!e[u])continue;const h=i[u*3+0],d=i[u*3+1],g=i[u*3+2],p=Math.min(Dn-1,Math.floor(h/Go)),_=Math.min(Dn-1,Math.floor(d/Go)),f=Math.min(Dn-1,Math.floor(g/Go)),m=(p*Dn+_)*Dn+f;r[m]++,o[m]+=h,a[m]+=d,l[m]+=g}const c=[];for(let u=0;u<s;u++)r[u]!==0&&c.push({count:r[u],r:o[u]/r[u],g:a[u]/r[u],b:l[u]/r[u]});return ch(c,n)}function $M(i,t,e,n){let s=0,r=1/0;for(let o=0;o<n.length;o++){const a=n[o]>>16&255,l=n[o]>>8&255,c=n[o]&255,u=(i-a)*(i-a)+(t-l)*(t-l)+(e-c)*(e-c);u<r&&(r=u,s=o)}return s}const ys=256;function qM(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=0;for(let P=0;P<t;P++){if(!e[P])continue;h++;const x=i[P*3+0],S=i[P*3+1],I=i[P*3+2];x<r&&(r=x),x>l&&(l=x),S<o&&(o=S),S>c&&(c=S),I<a&&(a=I),I>u&&(u=I)}if(h===0)return;const d=l-r,g=c-o,p=u-a,_=g>=d&&g>=p?1:d>=p?0:2,f=_===0?r:_===1?o:a,m=(_===0?d:_===1?g:p)||1,M=new Int32Array(ys),v=new Int32Array(t);for(let P=0;P<t;P++){if(!e[P])continue;const x=i[P*3+_],S=Math.min(ys-1,Math.max(0,Math.floor((x-f)/m*ys)));v[P]=S,M[S]++}const y=n.reduce((P,x)=>P+x,0)||1,w=new Int16Array(ys);let b=0,A=0,C=n[0]/y*h;for(let P=0;P<ys;P++){for(;A<n.length-1&&Math.abs(b+M[P]-C)>Math.abs(b-C);)A++,C+=n[A]/y*h;w[P]=A,b+=M[P]}for(let P=0;P<t;P++)e[P]&&(s[P]=w[v[P]])}function jM(i){const{points:t,count:e,isMaterial:n,pointColors:s,clusters:r,center:o,propagationOrigin:a}=i,l=i.maxColors??Ds,c=i.maxSlots??GM;let u=0;for(let R=0;R<e;R++)n[R]&&u++;if(e===0||u===0)return{...XM,count:e};const h=i.chosen??null,d=s!==null,g=h!==null?yi.CHOSEN:d?yi.OBSERVED:yi.FALLBACK,p=h!==null?[{color:h.color,weight:1}]:d?YM(s,e,n,l):r.length>0?[...r].slice(0,l):[{color:Mi,weight:1}],_=p.map(R=>R.color),f=new Int16Array(e).fill(-1);if(h!==null)for(let R=0;R<e;R++)n[R]&&(f[R]=0);else if(d)for(let R=0;R<e;R++)n[R]&&(f[R]=$M(s[R*3],s[R*3+1],s[R*3+2],_));else qM(t,e,n,p.map(R=>R.weight),f);const m=VM({points:t,count:e,member:n,material:f,materialCount:_.length,center:o,res:i.res??Ah(u)}),M=ZM(t,e,m,u),v=new Int16Array(e).fill(Ze);for(let R=0;R<e;R++){const N=m.region[R];v[R]=N===Ze?Ze:M.map[N]}const y=M.count,w=new Float64Array(y*3),b=new Int32Array(y);for(let R=0;R<e;R++){const N=v[R];N!==Ze&&(w[N*3+0]+=t[R*3+0],w[N*3+1]+=t[R*3+1],w[N*3+2]+=t[R*3+2],b[N]++)}JM(t,e,n,v,w,b,y);const A=new Float64Array(y*3),C=new Float64Array(y).fill(1/0);for(let R=0;R<e;R++){const N=v[R];if(N===Ze)continue;const O=t[R*3+0]-a[0],lt=t[R*3+1]-a[1],K=t[R*3+2]-a[2],st=O*O+lt*lt+K*K;st<C[N]&&(C[N]=st,A[N*3+0]=t[R*3+0],A[N*3+1]=t[R*3+1],A[N*3+2]=t[R*3+2])}const P=new Float32Array(e),x=new Float64Array(y);for(let R=0;R<e;R++){const N=v[R];if(N===Ze)continue;const O=t[R*3+0]-A[N*3+0],lt=t[R*3+1]-A[N*3+1],K=t[R*3+2]-A[N*3+2],st=Math.sqrt(O*O+lt*lt+K*K);P[R]=st,st>x[N]&&(x[N]=st)}for(let R=0;R<e;R++){const N=v[R];N!==Ze&&(P[R]=x[N]>0?P[R]/x[N]:0)}const S=Array.from({length:y},(R,N)=>N).sort((R,N)=>{const O=iu(w,b,R,a),lt=iu(w,b,N,a);return O===lt?R-N:O-lt}),I=Math.max(1,Math.min(c,y)),U=new Int16Array(y);for(let R=0;R<y;R++)U[S[R]]=Math.min(I-1,Math.floor(R*I/y));const F=new Uint8Array(e*3);for(let R=0;R<e;R++){const N=v[R];if(N!==Ze)if(h!==null)KM(F,R,h.color,h.variation,R);else if(d)F[R*3+0]=s[R*3+0],F[R*3+1]=s[R*3+1],F[R*3+2]=s[R*3+2];else{const O=_[M.material[N]]??Mi;F[R*3+0]=O>>16&255,F[R*3+1]=O>>8&255,F[R*3+2]=O&255}}const $=[];for(let R=0;R<y;R++){const N=b[R]||1;$.push({id:R,materialId:M.material[R],color:_[M.material[R]]??Mi,count:b[R],centroid:[w[R*3]/N,w[R*3+1]/N,w[R*3+2]/N],seed:[A[R*3],A[R*3+1],A[R*3+2]],slot:U[R]})}return{count:e,color:F,region:v,spread:P,regions:$,palette:_,slots:I,source:g,materialCount:u,glow:(h==null?void 0:h.glow)??Th,chosen:h}}function KM(i,t,e,n,s){const r=n<=0?0:n>Jc?Jc:n,o=s*Xr/(Math.PI*2)%1,l=1+r*(o*2-1),c=(e>>16&255)*l,u=(e>>8&255)*l,h=(e&255)*l;i[t*3+0]=c<0?0:c>255?255:c,i[t*3+1]=u<0?0:u>255?255:u,i[t*3+2]=h<0?0:h>255?255:h}function iu(i,t,e,n){const s=t[e]||1,r=i[e*3+0]/s-n[0],o=i[e*3+1]/s-n[1],a=i[e*3+2]/s-n[2];return r*r+o*o+a*a}function ZM(i,t,e,n){const{regionCount:s,sizes:r,regionMaterial:o}=e;if(s===0)return{map:new Int16Array(0),material:new Int16Array(0),count:0};const a=new Float64Array(s*3),l=new Int32Array(s);for(let f=0;f<t;f++){const m=e.region[f];m!==Ze&&(a[m*3+0]+=i[f*3+0],a[m*3+1]+=i[f*3+1],a[m*3+2]+=i[f*3+2],l[m]++)}for(let f=0;f<s;f++){const m=l[f]||1;a[f*3+0]/=m,a[f*3+1]/=m,a[f*3+2]/=m}const c=Math.max(4,Math.floor(n*WM)),u=new Uint8Array(s);for(let f=0;f<s;f++)r[f]>=c&&(u[f]=1);const h=new Map;for(let f=0;f<s;f++){const m=o[f],M=h.get(m);(M===void 0||r[f]>r[M])&&h.set(m,f)}for(const[f,m]of h){let M=!1;for(let v=0;v<s;v++)if(o[v]===f&&u[v]){M=!0;break}M||(u[m]=1)}const d=new Int16Array(s);for(let f=0;f<s;f++){if(u[f]){d[f]=f;continue}let m=-1,M=1/0;for(let v=0;v<s;v++){if(!u[v]||o[v]!==o[f])continue;const y=a[v*3+0]-a[f*3+0],w=a[v*3+1]-a[f*3+1],b=a[v*3+2]-a[f*3+2],A=y*y+w*w+b*b;A<M&&(M=A,m=v)}d[f]=m>=0?m:f,m<0&&(u[f]=1)}const g=new Int16Array(s).fill(-1),p=[],_=new Int16Array(s).fill(-1);for(let f=0;f<s;f++)u[f]&&(_[f]=p.length,p.push(o[f]));for(let f=0;f<s;f++)g[f]=_[d[f]];return{map:g,material:Int16Array.from(p),count:p.length}}function JM(i,t,e,n,s,r,o){if(o!==0)for(let a=0;a<t;a++){if(!e[a]||n[a]!==Ze)continue;let l=0,c=1/0;for(let u=0;u<o;u++){const h=r[u]||1,d=s[u*3+0]/h-i[a*3+0],g=s[u*3+1]/h-i[a*3+1],p=s[u*3+2]/h-i[a*3+2],_=d*d+g*g+p*p;_<c&&(c=_,l=u)}n[a]=l,s[l*3+0]+=i[a*3+0],s[l*3+1]+=i[a*3+1],s[l*3+2]+=i[a*3+2],r[l]++}}const gn={SPREAD:0,SETTLE:1,ACTIVATION:2,FORMATION:3,COMPLETE:4},QM=["cubriendo superficie","asentado","activación","formando material","material completo"],ty=.45,ey=.9,Wo=.8,ny=.25,iy=.6,sy=2.5,ry=.55,oy=.35,su=.45,ay=.85,ly=1,cy=eh*ay/nh,uy=.2126,hy=.7152,dy=.0722;function fy(i,t,e){return uy*i+hy*t+dy*e}function py(i){const t=i<0?0:i>1?1:i;return cy*(1+ly*t)}function my(i,t,e,n=.5){const s=fy(i,t,e);if(s<=0)return 1;const r=py(n);return s>r?r/s:1}function ru(i,t){const e=Math.max(1,t),n=i+ty,s=n+ey,r=Wo*(1-ny);return{travelEnd:i,settleEnd:n,activationEnd:s,slots:e,slotDuration:Wo,slotStep:r,end:s+(e-1)*r+Wo}}function gy(i,t){const e=As(i,t);return e===gn.SPREAD||e===gn.SETTLE||e===gn.COMPLETE}function As(i,t){return i<t.travelEnd?gn.SPREAD:i<t.settleEnd?gn.SETTLE:i<t.activationEnd?gn.ACTIVATION:i<t.end?gn.FORMATION:gn.COMPLETE}function _y(i,t,e){const n=t.activationEnd+e*t.slotStep,s=(i-n)/t.slotDuration;return s<=0?0:s>=1?1:s}function vy(i,t,e,n){const s=_y(i,t,e);if(s<=0)return 0;if(s>=1)return 1;const r=iy,o=1-r,a=(s-n*r)/o;return Qi(a<=0?0:a>=1?1:a)}function xy(i,t,e){if(i<t.settleEnd||i>=t.activationEnd)return 1;const n=t.activationEnd-t.settleEnd,s=n>0?(i-t.settleEnd)/n:1,r=e*Xr/(Math.PI*2),o=Math.sin((s*sy+r)*Math.PI*2);return 1+ry*(o>0?o:0)*s}function My(i){return su+(1-su)*i}function yy(i){return i<=0||i>=1?1:1+oy*Math.sin(i*Math.PI)}const ou=[16726832,3458905,689407,16766474,16723349,3200456,11490014,16749824],Gi=[1,1,1];function Sy(i,t,e,n,s,r=!1){const{count:o,region:a,spread:l,color:c,regions:u,glow:h}=t,d=As(n,e);if(r){for(let p=0;p<o;p++){const _=a[p];if(_===Ze){i[p*3+0]=Gi[0],i[p*3+1]=Gi[1],i[p*3+2]=Gi[2];continue}const f=ou[_%ou.length];i[p*3+0]=(f>>16&255)/255,i[p*3+1]=(f>>8&255)/255,i[p*3+2]=(f&255)/255}return!1}const g=d===gn.ACTIVATION;for(let p=0;p<o;p++){const _=a[p];if(_===Ze){i[p*3+0]=Gi[0],i[p*3+1]=Gi[1],i[p*3+2]=Gi[2];continue}const f=vy(n,e,u[_].slot,l[p]),M=(g?xy(n,e,p):1)*(f>0&&f<1?yy(f):1)*My(f);let v=c[p*3+0]/255,y=c[p*3+1]/255,w=c[p*3+2]/255;const b=my(v,y,w,h);b!==1&&(v*=b,y*=b,w*=b),i[p*3+0]=(s[0]+(v-s[0])*f)*M,i[p*3+1]=(s[1]+(y-s[1])*f)*M,i[p*3+2]=(s[2]+(w-s[2])*f)*M}return d!==gn.COMPLETE}const wh="nanobot-swarm-config";function Ey(){try{const i=localStorage.getItem(wh);return i?JSON.parse(i):null}catch{return null}}function by(i){try{return localStorage.setItem(wh,JSON.stringify(i)),!0}catch{return!1}}async function au(){try{const i=await fetch("/api/config");if(i.ok)return await i.json()}catch{}return Ey()}async function Ay(i){try{if((await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)return!0}catch{}return by(i)}const hr=240;function lu(){const i=performance.memory;return i?i.usedJSHeapSize/(1024*1024):null}function Ty(){const i=new Float64Array(hr),t=new Float64Array(hr);let e=0,n=0,s=0,r=0,o=0,a=0,l=0;const c={};return{sampleFrame(u){i[e]=u,e=(e+1)%hr,n<hr&&n++,s++},setAgentCounts(u,h){r=u,o=h},setRenderInfo(u,h){a=u,l=h},mark(u,h){c[u]=h},time(u,h){const d=performance.now();try{return h()}finally{c[u]=performance.now()-d}},snapshot(){if(n===0)return{frames:0,fps:0,frameMsAvg:0,frameMsP95:0,frameMsMax:0,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:lu(),timings:{...c}};let u=0,h=0;for(let _=0;_<n;_++){const f=i[_];u+=f,f>h&&(h=f),t[_]=f}const d=t.subarray(0,n);d.sort();const g=u/n,p=Math.min(n-1,Math.floor(n*.95));return{frames:s,fps:g>0?1e3/g:0,frameMsAvg:g,frameMsP95:d[p],frameMsMax:h,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:lu(),timings:{...c}}},reset(){e=0,n=0,s=0;for(const u of Object.keys(c))delete c[u]}}}const un={CREATE_STRUCTURE:"CREATE_STRUCTURE",CONNECT_STRUCTURE:"CONNECT_STRUCTURE",FILL_STRUCTURE:"FILL_STRUCTURE",SPREAD_MATERIAL:"SPREAD_MATERIAL",APPLY_COLOR:"APPLY_COLOR",RETURN_TO_CORE:"RETURN_TO_CORE"},en={PENDING:"pending",RUNNING:"running",DONE:"done",CANCELLED:"cancelled"},cu={CREATE_STRUCTURE:"exoesqueleto",CONNECT_STRUCTURE:"uniones",FILL_STRUCTURE:"relleno",SPREAD_MATERIAL:"cobertura",APPLY_COLOR:"material",RETURN_TO_CORE:"repliegue"};function wy(){let i=[],t=1,e=1,n=1,s=1,r=!1;function o(a,l,c,u,h=-1){return{id:t++,type:a,clock:l,t0:c,t1:u,wave:h,status:en.PENDING}}return{get tasks(){return i},get active(){for(const a of i)if(a.status===en.RUNNING)return a;return null},planStructure(a){if(r=!1,a.beamStart===null){i=[o(un.CREATE_STRUCTURE,"microbot",0,a.exoDuration)];return}i=[o(un.CREATE_STRUCTURE,"microbot",0,a.nodeEnd),o(un.CONNECT_STRUCTURE,"microbot",a.beamStart,a.exoDuration)]},planLayers(a){e=Math.max(1,a.layerCount),n=a.layerDuration,r=!1,i=i.filter(u=>u.clock!=="nanobot"),i.push(o(un.FILL_STRUCTURE,"nanobot",0,n));const l=e*n,c=a.material;if(!c){s=l;return}i.push(o(un.SPREAD_MATERIAL,"nanobot",n,c.start));for(let u=0;u<c.slots;u++){const h=c.start+u*c.slotStep;i.push(o(un.APPLY_COLOR,"nanobot",h,h+c.slotDuration,u))}s=c.end},planReturn(){r=!0;for(const a of i)(a.status===en.PENDING||a.status===en.RUNNING)&&(a.status=en.CANCELLED);i.push(o(un.RETURN_TO_CORE,"nanobot",0,s))},clear(){i=[],r=!1},sync(a,l){for(const c of i){if(c.status===en.CANCELLED)continue;const u=c.clock==="microbot"?a:l;if(c.type===un.RETURN_TO_CORE){c.status=l<=0&&a<=0?en.DONE:en.RUNNING;continue}r||(u>=c.t1?c.status=en.DONE:u>=c.t0?c.status=en.RUNNING:c.status=en.PENDING)}},nanobotLayerIndex(a){const l=Math.floor(a/n);return Math.min(Math.max(l,0),e-1)},isStructureDone(){let a=!1;for(const l of i)if(!(l.type!==un.CREATE_STRUCTURE&&l.type!==un.CONNECT_STRUCTURE)&&(a=!0,l.status!==en.DONE))return!1;return a},describe(){return i.map(a=>`${a.type===un.APPLY_COLOR?`${cu[a.type]} ${a.wave+1}`:cu[a.type]}: ${a.status}`)}}}const Cy=3;function Ry(i,t,e,n,s,r,o=Wr,a=si){const l=new Float32Array(t*3),c=new Map,u=[];for(let p=0;p<n;p++){const _=Ne(e[p*3+0]-r[0],o,a),f=Ne(e[p*3+1]-r[1],o,a),m=Ne(e[p*3+2]-r[2],o,a);if(_<0||f<0||m<0){u.push(p);continue}const M=Le(_,f,m,o),v=c.get(M);v?v.push(p):c.set(M,[p])}function h(p){const _=c.get(p);if(!_||_.length===0)return-1;const f=_.pop();return _.length===0&&c.delete(p),f}let d=0,g=0;for(let p=0;p<t;p++){const _=i[p*3+0],f=i[p*3+1],m=i[p*3+2],M=Ne(_-r[0],o,a),v=Ne(f-r[1],o,a),y=Ne(m-r[2],o,a);let w=-1;if(M>=0&&v>=0&&y>=0){w=h(Le(M,v,y,o));for(let b=1;w<0&&b<=Cy;b++)for(let A=-b;A<=b&&w<0;A++){const C=y+A;if(!(C<0||C>=o))for(let P=-b;P<=b&&w<0;P++){const x=v+P;if(!(x<0||x>=o))for(let S=-b;S<=b&&w<0;S++){if(Math.max(Math.abs(S),Math.abs(P),Math.abs(A))!==b)continue;const I=M+S;I<0||I>=o||(w=h(Le(I,x,C,o)))}}}w>=0&&g++}if(w<0){for(;w<0&&d<u.length;)w=u[d++];if(w<0){const b=c.keys().next();b.done||(w=h(b.value))}}w<0?(l[p*3+0]=s[0],l[p*3+1]=s[1],l[p*3+2]=s[2]):(l[p*3+0]=e[w*3+0],l[p*3+1]=e[w*3+1],l[p*3+2]=e[w*3+2])}return{from:l,matchedNearby:g}}const Ss=3.4,Py=2.2,Ly=5,Wi=Ml.layerDuration,uu=4e4,Iy=[0,0,0],Es=new Map,Dy=24,Ch=.5,dr=[!0,!0],Xo=[!0,!1];function Uy(i,t){return t[0]=(i>>16&255)/255,t[1]=(i>>8&255)/255,t[2]=(i&255)/255,t}function Ny(i){const{swarm:t,swarmMesh:e,microbotMesh:n,settings:s,reactorCenter:r,swirlAxes:o}=i,a=i.now??(()=>performance.now());let l=null,c=Wa,u=new Uint8Array(s.count).fill(ye.DETAIL),h=new Float32Array(s.count*3),d=null,g="idle",p=0,_=0,f={layerOf:new Uint8Array(0),delayFraction:new Float32Array(0),layerCount:1,travelDuration:Wi,totalDuration:Wi,wave0Landing:[...nn]},m=null,M=null,v=ru(Wi*2,1);const y=new Float32Array(i.maxNanobots*3).fill(1);let w=!1,b=-1,A=-1;const C=[0,0,0],P=new Float32Array(i.maxNanobots*3),x=cM(),S=new Uint32Array(8),I=new Uint32Array(m_),U=wy();let F=null,$=null,R=null,N="hidden",O=Math.min(s.microbotCount,i.maxMicrobots),lt=null,K=0,st=0;const gt=new Float32Array(i.maxMicrobots*3),St=new Float32Array(i.maxMicrobots*6);let X=null,Q=null,ft=null;function ht(){const V=hv(l??"",O,nn);lt=V;let tt=0;if(V)for(let ot=0;ot<O;ot++)V.isBeam[ot]&&tt++;K=tt}function mt(){return K>0?2:1}function Et(V){if(!lt)return;const{points:tt,relationSpans:ot,isBeam:ct}=lt;FM(gt,St,tt,ot,ct,O,r,o,V,Py,Ly,mt()),n.updateFromPositions(gt,O,ct,St)}function Ot(){const V=mt();U.planStructure({exoDuration:Ss,nodeEnd:zr(0,V).end*Ss,beamStart:V>1?zr(1,V).start*Ss:null})}function kt(V,tt=!1){d&&LM(P,d.points,_,f,r,o,V,Ml,x.state,tt?Oe.RETURNING:Oe.TRAVELING,$,tt)}function Ft(){t.setParams({cohesion:s.cohesion,separation:s.separation,alignment:s.alignment,maxSpeed:s.maxSpeed,seekWeight:Ch})}function D(){t.setAgentTargets(pv(s.count,r)),u=new Uint8Array(s.count).fill(ye.DETAIL),h=new Float32Array(s.count*3),x.reset(s.count,u,h)}function Kt(V,tt,ot){const ct=fl(V);if(!ct)return null;const dt=`${V}#${j_(V)}`;let bt=Es.get(dt);if(!bt){if(bt=Xc(ct.generate(uu),uu,Iy),Es.size>=Dy){const z=Es.keys().next();z.done||Es.delete(z.value)}Es.set(dt,bt)}const At=Xc(tt,ot,nn),Gt=Zx(bt,At);return{fraction:Gt.coverage,covered:Gt.covered,total:Gt.target,missing:Gt.missing,components:xh(At)}}function Lt(V,tt){const ot=new Uint8Array(tt);for(let bt=0;bt<tt;bt++)ot[bt]=V.roles[bt]===ye.COLOR?1:0;const ct=bh(V.roles,V.points,tt,ye.COLOR,nn);m=jM({points:V.points,count:tt,isMaterial:ot,pointColors:V.pointColors,clusters:V.colorClusters,center:nn,propagationOrigin:ct,chosen:M});const dt=2*Wi;v=ru(dt,m.slots),f=RM(V.roles,V.points,tt,ye.COLOR,Wi,nn,r,v.end-dt)}function Bt(V,tt){x.adoptFormation({count:tt,role:V.roles,region:m.region,layer:f.layerOf,delayFraction:f.delayFraction,target:V.points})}function Ct(V,tt){const ot=dv(V,s.count,nn,tt);ot&&(d=ot,u=ot.roles,h=ot.points,c=tt,_=s.count,Lt(ot,s.count),Bt(ot,s.count),$=R&&R.count>0?Ry(ot.points,s.count,R.positions,R.count,r,nn).from:null,R=null,F=Kt(V,ot.points,s.count),x.assignTypesFromRoles(ye.COLOR),U.planLayers({layerCount:f.layerCount,layerDuration:Wi,material:{start:v.activationEnd,slots:v.slots,slotDuration:v.slotDuration,slotStep:v.slotStep,end:v.end}}),A=-1,b=-1,Wt(0),e.setInstanceTint(y))}function Wt(V){return m?(Uy(rn($t.MATERIAL).identityColor,C),b=As(V,v),Sy(y,m,v,V,C,w)):!1}function Rt(V){return m?gy(V,v)?As(V,v)===b?!1:(Wt(V),!0):Wt(V):!1}function L(){var V;X=null,d=null,g="idle",p=0,D(),e.setVisible(!1),e.setSkeletonGrayscale(!1),e.setInstanceTint(null),m=null,A=-1,l=null,lt=null,N="hidden",st=0,n.setVisible(!1),U.clear(),F=null,$=null,R=null,(V=i.reactor)==null||V.resetColor(),Ft()}function E(V,tt){Q=a(),R=l!==null&&d!==null?{positions:P.slice(0,_*3),count:_,roles:u}:null,X=null,d=null,g="idle",p=0,D(),R||(e.setVisible(!1),e.setSkeletonGrayscale(!1)),l=V,c=tt??Wa,X={shapeName:V,colorClusters:c},ht(),N!=="retracting"&&(st=0),N="launching",n.setVisible(!0),Ot(),Ft()}function W(){if(l===null){L();return}l=null,X=null,(N==="launching"||N==="settled")&&(N="retracting"),(g==="forming"||g==="settled")&&(g="retracting"),U.planReturn()}function et(V){if(g==="retracting"){ft=V;return}if(s.count=V,t.init(V),e.setCount(V),l&&!X){const tt=g==="settled";Ct(l,c),tt&&(g="settled",p=f.totalDuration,kt(p),e.setSkeletonGrayscale(!0),Wt(p),e.updateFromPositions(P,_,u,h,dr))}else D()}function at(V){if(O=Math.min(V,i.maxMicrobots),s.microbotCount=O,N!=="launching"&&N!=="settled")return;const tt=mt();ht(),N==="launching"&&mt()!==tt&&Ot(),N==="settled"&&Et(1)}function nt(V){if(!m||V<v.settleEnd)return-1;if(V<v.activationEnd)return 0;const tt=Math.floor((V-v.activationEnd)/v.slotStep);return Math.min(Math.max(tt,0),v.slots-1)+1}function Y(V){if(!m)return null;if(V===0)return m.palette[0]??null;let tt=null;for(const ot of m.regions)ot.slot===V-1&&(!tt||ot.count>tt.count)&&(tt={count:ot.count,color:ot.color});return tt?tt.color:null}function q(){!d||_===0||e.updateFromPositions(P,_,u,h,g==="settled"?dr:Xo)}function it(V){var tt,ot,ct;if(N==="launching"||N==="retracting")if(st=Math.min(Math.max(st+(N==="launching"?1:-1)*V,0),Ss),Et(st/Ss),U.sync(st,p),N==="launching"&&U.isStructureDone()){if(N="settled",X){const{shapeName:bt,colorClusters:At}=X;X=null,Ct(bt,At),g="forming",p=0,e.setVisible(!0)}}else N==="retracting"&&st<=0&&(N="hidden",lt=null,n.setVisible(!1));if(g==="forming"||g==="retracting"){p=Math.min(Math.max(p+(g==="forming"?1:-1)*V,0),f.totalDuration),kt(p,g==="retracting"),U.sync(st,p);const bt=U.nanobotLayerIndex(p),At=nt(p);if(At!==A){A=At;const Gt=At>=0?Y(At):null;Gt!==null&&((tt=i.reactor)==null||tt.pulseColor(Gt))}if(e.setSkeletonGrayscale(bt>=1),Xo[1]=bt>=1,Rt(p)&&e.setInstanceTint(y),e.updateFromPositions(P,_,u,h,Xo),g==="forming"&&p>=f.totalDuration)g="settled",Q!==null&&((ot=i.onFormationSettled)==null||ot.call(i,a()-Q),Q=null);else if(g==="retracting"&&p<=0){if(g="idle",d=null,F=null,$=null,R=null,m=null,A=-1,(ct=i.reactor)==null||ct.resetColor(),e.setInstanceTint(null),e.setVisible(!1),ft!==null){const Gt=ft;ft=null,et(Gt)}else D();Ft()}}else g==="idle"&&(t.step(V),R?e.updateFromPositions(R.positions,R.count,R.roles,R.positions,dr):e.updateFromPositions(t.getPositions(),t.getCount(),u,h,dr))}const Tt={get nanobotPhase(){return g},get microbotPhase(){return N},get nanobotElapsed(){return p},get microbotElapsed(){return st},get nanobotAnimCount(){return _},get microbotCount(){return O},get currentShapeName(){return l},get stateCounts(){return x.countByState(S)},get coverage(){return F},get materialMap(){return m},get materialPhase(){return m?As(p,v):gn.SPREAD},get typeCounts(){return x.countByType(I),N!=="hidden"&&lt&&(I[$t.MICROBOT]+=O-K,I[$t.UNION]+=K),I},get forming(){return l!==null}};return et(s.count),L(),{state:Tt,agents:x,director:U,step:it,formShape:E,returnToCore:W,setNanobotCount:et,setMicrobotCount:at,applyParams:Ft,setRegionDebug(V){V!==w&&(w=V,b=-1,Wt(p),e.setInstanceTint(m?y:null),q())},get regionDebug(){return w},get chosenMaterial(){return M},setMaterial(V){M=V,!(!d||_===0)&&(Lt(d,_),x.setRegions(m.region),b=-1,A=-1,g==="settled"&&(g="forming",p=v.travelEnd),Wt(p),e.setInstanceTint(y),q())},renderPositions:P}}function Oy(i,t={}){const e=t.maxDt??.05,n=t.now??(()=>performance.now()),s=t.schedule??(u=>requestAnimationFrame(u)),r=t.onError;let o=!1,a=0,l=0;function c(u){if(!(!o||u!==l))try{const h=n(),d=Math.min((h-a)/1e3,e);a=h,i(d)}catch(h){if(o=!1,r)r(h);else throw h}finally{o&&u===l&&s(()=>c(u))}}return{start(){if(o)return;o=!0,l++,a=n();const u=l;s(()=>c(u))},stop(){o=!1},get running(){return o}}}const jn={near:5,mid:34},Rh=.12,Yo=jn.near*Rh,$o=jn.mid*Rh;function Fy(i=pe.MID){let t=i;return{get level(){return t},update(e){let n;return t===pe.NEAR?n=e>jn.near+Yo?e>jn.mid+$o?pe.FAR:pe.MID:pe.NEAR:t===pe.FAR?n=e<jn.mid-$o?e<jn.near-Yo?pe.NEAR:pe.MID:pe.FAR:e<jn.near-Yo?n=pe.NEAR:e>jn.mid+$o?n=pe.FAR:n=pe.MID,n===t?!1:(t=n,!0)}}}const By=.8,zy=32;function Hy(i){const{camera:t,controls:e}=i;let n=!1,s=e.minDistance,r=t.fov;const o=e.target.clone();function a(){var u,h;if(n)return;n=!0,s=e.minDistance,r=t.fov,o.copy(e.target);const c=(u=i.focusTarget)==null?void 0:u.call(i);c&&e.target.set(c[0],c[1],c[2]),e.minDistance=By,t.fov=zy,t.updateProjectionMatrix(),(h=i.onChange)==null||h.call(i,!0)}function l(){var c;n&&(n=!1,e.minDistance=s,e.target.copy(o),t.fov=r,t.updateProjectionMatrix(),(c=i.onChange)==null||c.call(i,!1))}return{get active(){return n},enter:a,exit:l,toggle(){return n?l():a(),n}}}function qo(i,t,e=6){const n=new ni(i,i,t,e,1,!1);return n.rotateX(Math.PI/2),n}function ky(i){const t=new On,e=rn(i),n=new ti({color:e.identityColor,emissive:e.identityEmissive,emissiveIntensity:.6,metalness:.65,roughness:.35}),s=new ti({color:1711394,metalness:.8,roughness:.45}),r=new ti({color:e.identityColor,emissive:e.identityColor,emissiveIntensity:1.4,metalness:.2,roughness:.3}),o=.55+dl(i).relativeSize*.12,a=new ae(qo(o,o*.52),s);t.add(a);const l=new ae(qo(o*.78,o*.62),n);switch(t.add(l),i){case $t.MICROBOT:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new Qn(o*.16,o*.16,o*.66),s);h.position.set(Math.cos(u)*o*.9,Math.sin(u)*o*.9,0),h.rotation.z=u,t.add(h)}break}case $t.NANOBOT:{const c=new ae(qo(o*.84,o*.16),r);t.add(c);break}case $t.UNION:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new ni(o*.17,o*.11,o*.5,6),n);h.position.set(Math.cos(u)*o*1.08,Math.sin(u)*o*1.08,0),h.rotation.z=-u+Math.PI/2,t.add(h);const d=new ae(new Or(o*.17,o*.045,6,12),r);d.position.copy(h.position),d.rotation.y=Math.PI/2,d.rotation.z=u,t.add(d)}break}case $t.REPAIR:{const c=new Qn(o*.95,o*.26,o*.2),u=new ae(c,r);u.position.z=o*.34,t.add(u);const h=new ae(c,r);h.position.z=o*.34,h.rotation.z=Math.PI/2,t.add(h);for(const d of[-1,1]){const g=new ae(new Qn(o*.2,o*.42,o*.3),s);g.position.set(d*o*1,0,0),t.add(g)}break}case $t.TRANSFORM:{for(let c=0;c<3;c++){const u=new ae(new Or(o*(.95+c*.16),o*.06,6,18),c%2?r:n);u.rotation.x=c*Math.PI/5,u.rotation.y=c*Math.PI/3,t.add(u)}break}case $t.MATERIAL:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new al(o*.13,o*.34,6),r);h.position.set(Math.cos(u)*o*.72,Math.sin(u)*o*.72,o*.4),h.rotation.x=Math.PI/2,t.add(h)}break}}return t}function Vy(){const i=document.createElement("canvas"),t=new Yu({canvas:i,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new $u,n=new Ve(38,1,.1,50);n.position.set(0,1.6,4.4),n.lookAt(0,0,0),e.add(new Zu(16777215,.55));const s=new Ha(16777215,1.5);s.position.set(3,4,5),e.add(s);const r=new Ha(8961023,.8);r.position.set(-4,-2,-3),e.add(r);const o=new On;e.add(o);let a=null;function l(){a&&(o.remove(a),a.traverse(c=>{const u=c;if(!u.isMesh)return;u.geometry.dispose();const h=u.material;Array.isArray(h)?h.forEach(d=>d.dispose()):h.dispose()}),a=null)}return{canvas:i,show(c){l(),a=ky(c),o.add(a)},render(c){o.rotation.y+=c*.6,t.render(e,n)},setSize(c,u){c<=0||u<=0||(t.setSize(c,u,!1),n.aspect=c/u,n.updateProjectionMatrix())},dispose(){l(),t.dispose()}}}const jo="no disponible en esta fase";function hn(i,t,e=!1){const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.gap="10px",n.style.padding="2px 0";const s=document.createElement("span");s.textContent=i,s.style.opacity="0.55",s.style.flex="0 0 auto";const r=document.createElement("span");return r.textContent=t,r.style.textAlign="right",r.style.opacity=e?"0.4":"0.95",e&&(r.style.fontStyle="italic"),n.append(s,r),n}function Gy(){const i=document.createElement("div");i.style.cssText=["position:fixed","left:12px","bottom:12px","width:300px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","backdrop-filter:blur(6px)"].join(";");const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.1)";const e=document.createElement("strong");e.textContent="Inspección de bots",e.style.flex="1 1 auto";const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:none;border:none;color:inherit;cursor:pointer;font-size:13px;opacity:0.6",t.append(e,n),i.appendChild(t);const s=document.createElement("div");s.style.cssText="display:flex;flex-wrap:wrap;gap:4px;padding:8px 10px",i.appendChild(s);const r=Vy();r.canvas.style.cssText="width:100%;height:170px;display:block",i.appendChild(r.canvas);const o=document.createElement("div");o.style.cssText="padding:8px 10px 10px",i.appendChild(o);let a=yn[0].type,l=!1,c=null;const u=[];function h(){const p=dl(a);o.textContent="";const _=document.createElement("div");_.textContent=p.name,_.style.cssText="font-size:14px;font-weight:600;margin-bottom:4px",_.style.color=`#${rn(p.type).identityColor.toString(16).padStart(6,"0")}`,o.appendChild(_),o.appendChild(hn("Rol",p.role)),o.appendChild(hn("Función",p.fn)),o.appendChild(hn("Forma","Hexágono")),o.appendChild(hn("Tamaño relativo",`${p.relativeSize.toFixed(1)}× Nanobot`)),o.appendChild(hn("Color de identidad",`#${rn(p.type).identityColor.toString(16).padStart(6,"0")}`)),o.appendChild(hn("Recibe material",p.acceptsObjectMaterial?"sí":"no — conserva su color estructural"));const f=c?c[p.type]??0:0;if(o.appendChild(p.implemented?hn("En el enjambre",`${f} agentes`):hn("En el enjambre","sin agentes",!0)),o.appendChild(hn("Material aplicado",jo,!0)),o.appendChild(hn("Energía",jo,!0)),o.appendChild(hn("Conexiones",jo,!0)),!p.implemented&&p.pendingReason){const m=document.createElement("div");m.textContent=p.pendingReason,m.style.cssText="margin-top:6px;font-size:11px;opacity:0.45;line-height:1.4",o.appendChild(m)}}function d(p){a=p,u.forEach((_,f)=>{const m=yn[f].type===p;_.style.opacity=m?"1":"0.5",_.style.borderWidth=m?"2px":"1px"}),r.show(p),h()}for(const p of yn){const _=document.createElement("button");_.textContent=p.name.replace(" Bot","");const f=`#${rn(p.type).identityColor.toString(16).padStart(6,"0")}`;_.style.cssText=["flex:1 1 auto","min-width:74px","padding:3px 6px","cursor:pointer","background:rgba(255,255,255,0.05)",`border:1px solid ${f}`,"border-radius:4px",`color:${f}`,"font:11px system-ui,sans-serif"].join(";"),_.addEventListener("click",()=>d(p.type)),s.appendChild(_),u.push(_)}function g(p){l=p,i.style.display=p?"block":"none",p&&(r.setSize(i.clientWidth,170),d(a))}return n.addEventListener("click",()=>g(!1)),d(a),{element:i,get open(){return l},setOpen:g,render(p){l&&r.render(p)},setCounts(p){c=p},dispose(){r.dispose(),i.remove()}}}const Zn={STRUCTURE:0,CONNECTION:1,DETAIL:2,MATERIAL:3},hu=[{layer:Zn.STRUCTURE,name:"Estructura (Microbots)",hint:"Nodos del exoesqueleto"},{layer:Zn.CONNECTION,name:"Conexiones (Union Bots)",hint:"Vigas que unen los nodos"},{layer:Zn.DETAIL,name:"Detalle (Nanobots)",hint:"Relleno de superficie"},{layer:Zn.MATERIAL,name:"Material (Material Bots)",hint:"Color y acabado del objeto"}];function Wy(i){const t=hu.map(()=>!0);let e=0;const n=document.createElement("div");n.style.cssText=["position:fixed","left:12px","top:12px","width:250px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","padding:8px 10px","backdrop-filter:blur(6px)"].join(";");const s=document.createElement("strong");s.textContent="Capas de construcción",s.style.cssText="display:block;margin-bottom:6px",n.appendChild(s);const r={get visible(){return t},get explode(){return e}};for(const u of hu){const h=document.createElement("label");h.style.cssText="display:flex;align-items:center;gap:6px;padding:1px 0;cursor:pointer";const d=document.createElement("input");d.type="checkbox",d.checked=!0,d.addEventListener("change",()=>{t[u.layer]=d.checked,i.onChange(r)});const g=document.createElement("span");g.textContent=u.name,g.title=u.hint,h.append(d,g),n.appendChild(h)}const o=document.createElement("div");o.style.cssText="margin-top:8px;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px";const a=document.createElement("div");a.textContent="Ver capas (separar)",a.style.opacity="0.75";const l=document.createElement("input");l.type="range",l.min="0",l.max="12",l.step="0.5",l.value="0",l.style.width="100%",l.addEventListener("input",()=>{e=Number(l.value),i.onChange(r)});const c=document.createElement("div");return c.textContent="Sólo afecta cómo se dibuja: la simulación no cambia.",c.style.cssText="font-size:10px;opacity:0.45;line-height:1.35;margin-top:2px",o.append(a,l,c),n.appendChild(o),{element:n,state:r,setOpen(u){n.style.display=u?"block":"none"},dispose(){n.remove()}}}const du=6e4,fu=6e4,Xy={count:3e3,microbotCount:4e3,cohesion:.8,separation:1.5,alignment:.6,maxSpeed:4,seekWeight:Ch};async function Yy(){const i=document.getElementById("app"),{scene:t,camera:e,renderer:n,composer:s,controls:r}=x_(i),o=Ty();window.__nanobotMetrics=o,window.__nanobotCamera={get:()=>({pos:e.position.toArray(),target:r.target.toArray(),distance:r.getDistance(),fov:e.fov,minDistance:r.minDistance})},window.__nanobotScan={form:(K,st,gt)=>{const St=rh(Float32Array.from(K),st?Uint8Array.from(st):null);return _.formShape(St,gt),St}},n.info.autoReset=!1;const a=wv(du);t.add(a.group);const l=Iv(fu);l.setVisible(!1),t.add(l.group);const c=Hv();t.add(c.group);const u=c.position.toArray(),h=AM(u,nn),d=new Uv;await d.load();const g={...Xy},p=await au();p&&Object.assign(g,p);const _=Ny({swarm:d,swarmMesh:a,microbotMesh:l,settings:g,reactorCenter:u,swirlAxes:h,maxNanobots:du,maxMicrobots:fu,onFormationSettled:K=>o.mark("formacionMs",K),reactor:c}),f=_M(g,{onCountChange:K=>_.setNanobotCount(K),onParamsChange:()=>_.applyParams(),onSave:async K=>{await Ay(K)},onLoad:async()=>{const K=await au();K&&(Object.assign(g,K),_.setNanobotCount(g.count),_.applyParams(),f.controllersRecursive().forEach(st=>st.updateDisplay()))},onFormShape:(K,st)=>_.formShape(K,st),readNanobotCount:()=>g.count,onReturnToCore:()=>_.returnToCore(),onMicrobotCountChange:K=>_.setMicrobotCount(K)}),m=vM(f),M=()=>_.state.stateCounts,v=xM(f),y=()=>_.director,w=MM(f),b=()=>_.state.coverage,A=SM(f),C=()=>_.state.typeCounts,P=()=>[g.microbotCount,g.count],x=yM(f,K=>_.setRegionDebug(K),K=>_.setMaterial(K)),S=()=>{const K=_.state.materialMap;return K?{regions:K.regions.length,slots:K.slots,materialCount:K.materialCount,palette:K.palette,phase:QM[_.state.materialPhase],sourceLabel:K.chosen?`${nu[K.source]}: ${K.chosen.name}`:nu[K.source]}:null},I=Fy();a.setLodLevel(I.level);const U=Gy();document.body.appendChild(U.element);const F={visible:[!0,!0,!0,!0],explode:0};function $(K){const st=K.explode;l.setLayerDisplay({visible:K.visible[Zn.STRUCTURE],offsetY:-1.5*st},{visible:K.visible[Zn.CONNECTION],offsetY:-.5*st}),a.setLayerDisplay({visible:K.visible[Zn.DETAIL],offsetY:.5*st},{visible:K.visible[Zn.MATERIAL],offsetY:1.5*st})}const R=Wy({onChange:$});document.body.appendChild(R.element),$(F);const N=Hy({camera:e,controls:r,focusTarget:()=>_.state.forming?nn:u,onChange:K=>{K?a.setLodLevel(pe.NEAR):a.setLodLevel(I.level)}});let O=!1;EM(f,{onToggleZoom:()=>N.toggle(),onToggleInspector:()=>(U.setOpen(!U.open),U.open),onToggleLayers:()=>(O=!O,R.setOpen(O),O)}),Oy(K=>{const st=performance.now();n.info.reset(),c.update(K),r.update(),I.update(r.getDistance())&&!N.active&&a.setLodLevel(I.level),_.step(K),s.render(),o.sampleFrame(performance.now()-st),o.setAgentCounts(_.state.nanobotPhase==="idle"?d.getCount():_.state.nanobotAnimCount,_.state.microbotPhase==="hidden"?0:_.state.microbotCount),o.setRenderInfo(n.info.render.calls,n.info.render.triangles),m(M),v(y),w(b),A(C,P),x(S),U.setCounts(_.state.typeCounts),U.render(K)},{onError:K=>console.error("Error en el loop de animación; se detiene el render:",K)}).start()}Yy().catch(i=>{console.error("Error inicializando el simulador de nanobots:",i)});
