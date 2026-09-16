var Eh=Object.defineProperty;var bh=(i,t,e)=>t in i?Eh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var ai=(i,t,e)=>bh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="169",Yi={ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Sl=1,Th=2,ru=1,ou=2,Ln=3,ei=0,Xe=1,Un=2,Fn=0,$i=1,$o=2,El=3,bl=4,wh=5,mi=100,Ch=101,Rh=102,Ph=103,Lh=104,Ih=200,Dh=201,Uh=202,Nh=203,qo=204,jo=205,Oh=206,Fh=207,Bh=208,zh=209,Hh=210,kh=211,Vh=212,Gh=213,Wh=214,Ko=0,Zo=1,Jo=2,Qi=3,Qo=4,ta=5,ea=6,na=7,au=0,Xh=1,Yh=2,Jn=0,$h=1,qh=2,jh=3,lu=4,Kh=5,Zh=6,Jh=7,cu=300,ts=301,es=302,ia=303,sa=304,Br=306,ra=1e3,vi=1001,oa=1002,Ge=1003,Qh=1004,Fs=1005,fn=1006,$r=1007,xi=1008,zn=1009,uu=1010,hu=1011,As=1012,Xa=1013,yi=1014,Sn=1015,Bn=1016,Ya=1017,$a=1018,ns=1020,du=35902,fu=1021,pu=1022,_n=1023,mu=1024,gu=1025,qi=1026,is=1027,qa=1028,ja=1029,_u=1030,Ka=1031,Za=1033,fr=33776,pr=33777,mr=33778,gr=33779,aa=35840,la=35841,ca=35842,ua=35843,ha=36196,da=37492,fa=37496,pa=37808,ma=37809,ga=37810,_a=37811,va=37812,xa=37813,Ma=37814,ya=37815,Sa=37816,Ea=37817,ba=37818,Aa=37819,Ta=37820,wa=37821,_r=36492,Ca=36494,Ra=36495,vu=36283,Pa=36284,La=36285,Ia=36286,td=3200,ed=3201,xu=0,nd=1,Kn="",dn="srgb",ii="srgb-linear",Ja="display-p3",zr="display-p3-linear",br="linear",oe="srgb",Ar="rec709",Tr="p3",wi=7680,Al=519,id=512,sd=513,rd=514,Mu=515,od=516,ad=517,ld=518,cd=519,Da=35044,ud=35048,Tl="300 es",Nn=2e3,wr=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,Ua=180/Math.PI;function Rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function hd(i,t){return(i%t+t)%t}function qr(i,t,e){return(1-e)*i+e*t}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dd={DEG2RAD:vr};class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],f=s[3],m=s[6],M=s[1],v=s[4],S=s[7],C=s[2],b=s[5],T=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*f+a*v+l*b,r[6]=o*m+a*S+l*T,r[1]=c*_+u*M+h*C,r[4]=c*f+u*v+h*b,r[7]=c*m+u*S+h*T,r[2]=d*_+p*M+g*C,r[5]=d*f+p*v+g*b,r[8]=d*m+p*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Wt;function yu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=Cr("canvas");return i.style.display="block",i}const wl={};function xr(i){i in wl||(wl[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Cl=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rl=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[ii]:{transfer:br,primaries:Ar,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[dn]:{transfer:oe,primaries:Ar,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:br,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl)},[Ja]:{transfer:oe,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl).convertLinearToSRGB()}},_d=new Set([ii,zr]),te={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_d.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=cs[t].toReference,s=cs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return cs[i].primaries},getTransfer:function(i){return i===Kn?br:cs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(cs[t].luminanceCoefficients)}};function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class vd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Cr("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xd=0;class Su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zr(s[o].image)):r.push(Zr(s[o]))}else r=Zr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Md=0;class Fe extends Ei{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=vi,s=vi,r=fn,o=xi,a=_n,l=zn,c=Fe.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Rs(),this.name="",this.source=new Su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ra:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ra:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=cu;Fe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(p+1)/2,C=(m+1)/2,b=(u+d)/4,T=(h+_)/4,w=(g+f)/4;return v>S&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=T/n):S>C?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=w/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=w/r),this.set(n,s,r,e),this}let M=Math.sqrt((f-g)*(f-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eu extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sd extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let f=1-a;const m=l*d+c*p+u*g+h*_,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),b=Math.atan2(C,m*M);f=Math.sin(f*b)/C,a=Math.sin(a*b)/C}const S=a*M;if(l=l*f+d*S,c=c*f+p*S,u=u*f+g*S,h=h*f+_*S,f===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new F,Pl=new Si;class bi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),zs.subVectors(this.max,us),Ri.subVectors(t.a,us),Pi.subVectors(t.b,us),Li.subVectors(t.c,us),kn.subVectors(Pi,Ri),Vn.subVectors(Li,Pi),li.subVectors(Ri,Li);let e=[0,-kn.z,kn.y,0,-Vn.z,Vn.y,0,-li.z,li.y,kn.z,0,-kn.x,Vn.z,0,-Vn.x,li.z,0,-li.x,-kn.y,kn.x,0,-Vn.y,Vn.x,0,-li.y,li.x,0];return!Qr(e,Ri,Pi,Li,zs)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,Ri,Pi,Li,zs))?!1:(Hs.crossVectors(kn,Vn),e=[Hs.x,Hs.y,Hs.z],Qr(e,Ri,Pi,Li,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new F,new F,new F,new F,new F,new F,new F,new F],an=new F,Bs=new bi,Ri=new F,Pi=new F,Li=new F,kn=new F,Vn=new F,li=new F,us=new F,zs=new F,Hs=new F,ci=new F;function Qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ed=new bi,hs=new F,to=new F;class os{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(to)),this.expandByPoint(hs.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new F,eo=new F,ks=new F,Gn=new F,no=new F,Vs=new F,io=new F;class Qa{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ks),a=Gn.dot(this.direction),l=-Gn.dot(ks),c=Gn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(eo).addScaledVector(ks,d),p}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),Vs.subVectors(n,t),io.crossVectors(no,Vs);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);const l=a*this.direction.dot(Vs.crossVectors(Gn,Vs));if(l<0)return null;const c=a*this.direction.dot(no.cross(Gn));if(c<0||l+c>o)return null;const u=-a*Gn.dot(io);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,c,u,h,d,p,g,_,f){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,p,g,_,f)}set(t,e,n,s,r,o,a,l,c,u,h,d,p,g,_,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=_,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Ad)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Wn.crossVectors(n,qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Wn.crossVectors(n,qe)),Wn.normalize(),Gs.crossVectors(qe,Wn),s[0]=Wn.x,s[4]=Gs.x,s[8]=qe.x,s[1]=Wn.y,s[5]=Gs.y,s[9]=qe.y,s[2]=Wn.z,s[6]=Gs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],f=n[10],m=n[14],M=n[3],v=n[7],S=n[11],C=n[15],b=s[0],T=s[4],w=s[8],R=s[12],x=s[1],y=s[5],L=s[9],N=s[13],B=s[2],I=s[6],D=s[10],W=s[14],H=s[3],J=s[7],et=s[11],ht=s[15];return r[0]=o*b+a*x+l*B+c*H,r[4]=o*T+a*y+l*I+c*J,r[8]=o*w+a*L+l*D+c*et,r[12]=o*R+a*N+l*W+c*ht,r[1]=u*b+h*x+d*B+p*H,r[5]=u*T+h*y+d*I+p*J,r[9]=u*w+h*L+d*D+p*et,r[13]=u*R+h*N+d*W+p*ht,r[2]=g*b+_*x+f*B+m*H,r[6]=g*T+_*y+f*I+m*J,r[10]=g*w+_*L+f*D+m*et,r[14]=g*R+_*N+f*W+m*ht,r[3]=M*b+v*x+S*B+C*H,r[7]=M*T+v*y+S*I+C*J,r[11]=M*w+v*L+S*D+C*et,r[15]=M*R+v*N+S*W+C*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],f=t[11],m=t[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+f*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],f=t[14],m=t[15],M=h*f*c-_*d*c+_*l*p-a*f*p-h*l*m+a*d*m,v=g*d*c-u*f*c-g*l*p+o*f*p+u*l*m-o*d*m,S=u*_*c-g*h*c+g*a*p-o*_*p-u*a*m+o*h*m,C=g*h*l-u*_*l-g*a*d+o*_*d+u*a*f-o*h*f,b=e*M+n*v+s*S+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=M*T,t[1]=(_*d*r-h*f*r-_*s*p+n*f*p+h*s*m-n*d*m)*T,t[2]=(a*f*r-_*l*r+_*s*c-n*f*c-a*s*m+n*l*m)*T,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*T,t[4]=v*T,t[5]=(u*f*r-g*d*r+g*s*p-e*f*p-u*s*m+e*d*m)*T,t[6]=(g*l*r-o*f*r-g*s*c+e*f*c+o*s*m-e*l*m)*T,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*T,t[8]=S*T,t[9]=(g*h*r-u*_*r-g*n*p+e*_*p+u*n*m-e*h*m)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*T,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(u*_*s-g*h*s+g*n*d-e*_*d-u*n*f+e*h*f)*T,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*f-e*a*f)*T,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,_=o*u,f=o*h,m=a*h,M=l*c,v=l*u,S=l*h,C=n.x,b=n.y,T=n.z;return s[0]=(1-(_+m))*C,s[1]=(p+S)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(p-S)*b,s[5]=(1-(d+m))*b,s[6]=(f+M)*b,s[7]=0,s[8]=(g+v)*T,s[9]=(f-M)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const o=Ii.set(s[4],s[5],s[6]).length(),a=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,u=1/o,h=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Nn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Nn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Nn){const l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,p=(n+s)*u;let g,_;if(a===Nn)g=(o+r)*h,_=-2*h;else if(a===wr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new F,ln=new se,bd=new F(0,0,0),Ad=new F(1,1,1),Wn=new F,Gs=new F,qe=new F,Ll=new se,Il=new Si;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Td=0;const Dl=new F,Di=new Si,Cn=new se,Ws=new F,ds=new F,wd=new F,Cd=new Si,Ul=new F(1,0,0),Nl=new F(0,1,0),Ol=new F(0,0,1),Fl={type:"added"},Rd={type:"removed"},Ui={type:"childadded",child:null},so={type:"childremoved",child:null};class Ee extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new F,e=new An,n=new Si,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Wt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ds,Ws,this.up):Cn.lookAt(Ws,ds,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Cn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new F(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new F,Rn=new F,ro=new F,Pn=new F,Ni=new F,Oi=new F,Bl=new F,oo=new F,ao=new F,lo=new F,co=new ie,uo=new ie,ho=new ie;class pn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Rn.subVectors(n,e),ro.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(Rn),l=cn.dot(ro),c=Rn.dot(Rn),u=Rn.dot(ro),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return co.setScalar(0),uo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(t,e),uo.fromBufferAttribute(t,n),ho.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(ho,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Rn.subVectors(t,e),cn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ni.subVectors(s,n),Oi.subVectors(r,n),oo.subVectors(t,n);const l=Ni.dot(oo),c=Oi.dot(oo);if(l<=0&&c<=0)return e.copy(n);ao.subVectors(t,s);const u=Ni.dot(ao),h=Oi.dot(ao);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ni,o);lo.subVectors(t,r);const p=Ni.dot(lo),g=Oi.dot(lo);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Oi,a);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Bl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Bl,a);const m=1/(f+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(Ni,o).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=hd(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return te.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ue(Pe.r*255,0,255))*65536+Math.round(Ue(Pe.g*255,0,255))*256+Math.round(Ue(Pe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=dn){te.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Xs);const n=qr(Xn.h,Xs.h,e),s=qr(Xn.s,Xs.s,e),r=qr(Xn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Vt;Vt.NAMES=Au;let Pd=0;class Ai extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=$i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=jo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hr extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new F,Ys=new Pt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Da&&(t.usage=this.usage),t}}class Tu extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wu extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ld=0;const tn=new se,po=new Ee,Fi=new F,je=new bi,fs=new bi,Me=new F;class Be extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?wu:Tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(je.min,fs.min),je.expandByPoint(Me),Me.addVectors(je.max,fs.max),je.expandByPoint(Me)):(je.expandByPoint(fs.min),je.expandByPoint(fs.max))}je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),Me.add(Fi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new F,l[w]=new F;const c=new F,u=new F,h=new F,d=new Pt,p=new Pt,g=new Pt,_=new F,f=new F;function m(w,R,x){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const y=1/(p.x*g.y-g.x*p.y);isFinite(y)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(y),f.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(y),a[w].add(_),a[R].add(_),a[x].add(_),l[w].add(f),l[R].add(f),l[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let w=0,R=M.length;w<R;++w){const x=M[w],y=x.start,L=x.count;for(let N=y,B=y+L;N<B;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new F,S=new F,C=new F,b=new F;function T(w){C.fromBufferAttribute(s,w),b.copy(C);const R=a[w];v.copy(R),v.sub(C.multiplyScalar(C.dot(R))).normalize(),S.crossVectors(b,R);const y=S.dot(l[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,y)}for(let w=0,R=M.length;w<R;++w){const x=M[w],y=x.start,L=x.count;for(let N=y,B=y+L;N<B;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new Je(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new se,ui=new Qa,$s=new os,Hl=new F,qs=new F,js=new F,Ks=new F,mo=new F,Zs=new F,kl=new F,Js=new F;class ae extends Ee{constructor(t=new Be,e=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(mo.fromBufferAttribute(h,t),o?Zs.addScaledVector(mo,u):Zs.addScaledVector(mo.sub(e),u))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!($s.containsPoint(ui.origin)===!1&&(ui.intersectSphere($s,Hl)===null||ui.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(zl.copy(r).invert(),ui.copy(t.ray).applyMatrix4(zl),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=o[f.materialIndex],M=Math.max(f.start,p.start),v=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let S=M,C=v;S<C;S+=3){const b=a.getX(S),T=a.getX(S+1),w=a.getX(S+2);s=Qs(this,m,t,n,c,u,h,b,T,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const M=a.getX(f),v=a.getX(f+1),S=a.getX(f+2);s=Qs(this,o,t,n,c,u,h,M,v,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],m=o[f.materialIndex],M=Math.max(f.start,p.start),v=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let S=M,C=v;S<C;S+=3){const b=S,T=S+1,w=S+2;s=Qs(this,m,t,n,c,u,h,b,T,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=g,m=_;f<m;f+=3){const M=f,v=f+1,S=f+2;s=Qs(this,o,t,n,c,u,h,M,v,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Id(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,js),i.getVertexPosition(c,Ks);const u=Id(i,t,e,n,qs,js,Ks,kl);if(u){const h=new F;pn.getBarycoord(kl,qs,js,Ks,h),s&&(u.uv=pn.getInterpolatedAttribute(s,a,l,c,h,new Pt)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,l,c,h,new Pt)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};pn.getNormal(qs,js,Ks,d.normal),u.face=d,u.barycoord=h}return u}class Qn extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(h,2));function g(_,f,m,M,v,S,C,b,T,w,R){const x=S/T,y=C/w,L=S/2,N=C/2,B=b/2,I=T+1,D=w+1;let W=0,H=0;const J=new F;for(let et=0;et<D;et++){const ht=et*y-N;for(let gt=0;gt<I;gt++){const Mt=gt*x-L;J[_]=Mt*M,J[f]=ht*v,J[m]=B,c.push(J.x,J.y,J.z),J[_]=0,J[f]=0,J[m]=b>0?1:-1,u.push(J.x,J.y,J.z),h.push(gt/T),h.push(1-et/w),W+=1}}for(let et=0;et<w;et++)for(let ht=0;ht<T;ht++){const gt=d+ht+I*et,Mt=d+ht+I*(et+1),q=d+(ht+1)+I*(et+1),Q=d+(ht+1)+I*et;l.push(gt,Mt,Q),l.push(Mt,q,Q),H+=6}a.addGroup(p,H,R),p+=H,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Rr={clone:ss,merge:De};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ru extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new F,Vl=new Pt,Gl=new Pt;class Ve extends Ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Vl,Gl),e.subVectors(Gl,Vl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class Od extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Bi,zi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Bi,zi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Bi,zi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pu extends Fe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ts,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fd extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Fn});r.uniforms.tEquirect.value=e;const o=new ae(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=fn),new Od(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const go=new F,Bd=new F,zd=new Wt;class qn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new os,tr=new F;class tl{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],_=s[10],f=s[11],m=s[12],M=s[13],v=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,f-p,S-m).normalize(),n[1].setComponents(l+r,d+c,f+p,S+m).normalize(),n[2].setComponents(l+o,d+u,f+g,S+M).normalize(),n[3].setComponents(l-o,d-u,f-g,S-M).normalize(),n[4].setComponents(l-a,d-h,f-_,S-v).normalize(),e===Nn)n[5].setComponents(l+a,d+h,f+_,S+v).normalize();else if(e===wr)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(tr.x=s.normal.x>0?t.max.x:t.min.x,tr.y=s.normal.y>0?t.max.y:t.min.y,tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hd(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ps extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],_=[],f=[];for(let m=0;m<u;m++){const M=m*d-o;for(let v=0;v<c;v++){const S=v*h-r;g.push(S,-M,0),_.push(0,0,1),f.push(v/a),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,S=M+c*(m+1),C=M+1+c*(m+1),b=M+1+c*m;p.push(v,S,b),p.push(S,C,b)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.width,t.height,t.widthSegments,t.heightSegments)}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jd=`#ifdef USE_BATCHING
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
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`
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
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,kf=`
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,up=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,qp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,lm=`#define NORMAL
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
}`,cm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,dm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:kd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:Yd,aomap_fragment:$d,aomap_pars_fragment:qd,batching_pars_vertex:jd,batching_vertex:Kd,begin_vertex:Zd,beginnormal_vertex:Jd,bsdfs:Qd,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:lf,color_pars_vertex:cf,color_vertex:uf,common:hf,cube_uv_reflection_fragment:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:xf,envmap_fragment:Mf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Sf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Uf,envmap_vertex:bf,fog_vertex:Af,fog_pars_vertex:Tf,fog_fragment:wf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:If,lights_pars_begin:Df,lights_toon_fragment:Nf,lights_toon_pars_fragment:Of,lights_phong_fragment:Ff,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:Hf,lights_fragment_begin:kf,lights_fragment_maps:Vf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:$f,map_fragment:qf,map_pars_fragment:jf,map_particle_fragment:Kf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:up,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:vp,dithering_fragment:xp,dithering_pars_fragment:Mp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:bp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Tp,skinbase_vertex:wp,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Pp,specularmap_fragment:Lp,specularmap_pars_fragment:Ip,tonemapping_fragment:Dp,tonemapping_pars_fragment:Up,transmission_fragment:Np,transmission_pars_fragment:Op,uv_pars_fragment:Fp,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:Hp,background_vert:kp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:Yp,depth_vert:$p,depth_frag:qp,distanceRGBA_vert:jp,distanceRGBA_frag:Kp,equirect_vert:Zp,equirect_frag:Jp,linedashed_vert:Qp,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:um,meshphysical_vert:hm,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:vm,sprite_vert:xm,sprite_frag:Mm},vt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Mn={basic:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:De([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:De([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:De([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:De([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:De([vt.points,vt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:De([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:De([vt.common,vt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:De([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:De([vt.sprite,vt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:De([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:De([vt.lights,vt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Mn.physical={uniforms:De([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const er={r:0,b:0,g:0},di=new An,ym=new se;function Sm(i,t,e,n,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const S=g(M);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===Br)?(u===void 0&&(u=new ae(new Qn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:ss(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(v.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(di)),u.material.toneMapped=te.getTransfer(S.colorSpace)!==oe,(h!==S||d!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ae(new Ps(2,2),new We({name:"BackgroundMaterial",uniforms:ss(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(er,Cu(i)),n.buffers.color.setClear(er.r,er.g,er.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:f}}function Em(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,y,L,N,B){let I=!1;const D=h(N,L,y);r!==D&&(r=D,c(r.object)),I=p(x,N,L,B),I&&g(x,N,L,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,S(x,y,L,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,y,L){const N=L.wireframe===!0;let B=n[x.id];B===void 0&&(B={},n[x.id]=B);let I=B[y.id];I===void 0&&(I={},B[y.id]=I);let D=I[N];return D===void 0&&(D=d(l()),I[N]=D),D}function d(x){const y=[],L=[],N=[];for(let B=0;B<e;B++)y[B]=0,L[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,y,L,N){const B=r.attributes,I=y.attributes;let D=0;const W=L.getAttributes();for(const H in W)if(W[H].location>=0){const et=B[H];let ht=I[H];if(ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),et===void 0||et.attribute!==ht||ht&&et.data!==ht.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function g(x,y,L,N){const B={},I=y.attributes;let D=0;const W=L.getAttributes();for(const H in W)if(W[H].location>=0){let et=I[H];et===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(et=x.instanceColor));const ht={};ht.attribute=et,et&&et.data&&(ht.data=et.data),B[H]=ht,D++}r.attributes=B,r.attributesNum=D,r.index=N}function _(){const x=r.newAttributes;for(let y=0,L=x.length;y<L;y++)x[y]=0}function f(x){m(x,0)}function m(x,y){const L=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;L[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),B[x]!==y&&(i.vertexAttribDivisor(x,y),B[x]=y)}function M(){const x=r.newAttributes,y=r.enabledAttributes;for(let L=0,N=y.length;L<N;L++)y[L]!==x[L]&&(i.disableVertexAttribArray(L),y[L]=0)}function v(x,y,L,N,B,I,D){D===!0?i.vertexAttribIPointer(x,y,L,B,I):i.vertexAttribPointer(x,y,L,N,B,I)}function S(x,y,L,N){_();const B=N.attributes,I=L.getAttributes(),D=y.defaultAttributeValues;for(const W in I){const H=I[W];if(H.location>=0){let J=B[W];if(J===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const et=J.normalized,ht=J.itemSize,gt=t.get(J);if(gt===void 0)continue;const Mt=gt.buffer,q=gt.type,Q=gt.bytesPerElement,pt=q===i.INT||q===i.UNSIGNED_INT||J.gpuType===Xa;if(J.isInterleavedBufferAttribute){const dt=J.data,_t=dt.stride,bt=J.offset;if(dt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)m(H.location+Ut,dt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)f(H.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Ut=0;Ut<H.locationSize;Ut++)v(H.location+Ut,ht/H.locationSize,q,et,_t*Q,(bt+ht/H.locationSize*Ut)*Q,pt)}else{if(J.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt,J.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let dt=0;dt<H.locationSize;dt++)f(H.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let dt=0;dt<H.locationSize;dt++)v(H.location+dt,ht/H.locationSize,q,et,ht*Q,ht/H.locationSize*dt*Q,pt)}}else if(D!==void 0){const et=D[W];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}M()}function C(){w();for(const x in n){const y=n[x];for(const L in y){const N=y[L];for(const B in N)u(N[B].object),delete N[B];delete y[L]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const y=n[x.id];for(const L in y){const N=y[L];for(const B in N)u(N[B].object),delete N[B];delete y[L]}delete n[x.id]}function T(x){for(const y in n){const L=n[y];if(L[x.id]===void 0)continue;const N=L[x.id];for(const B in N)u(N[B].object),delete N[B];delete L[x.id]}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function bm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Am(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const w=T===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Sn&&!w)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,maxSamples:b}}function Tm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new qn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,f=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const M=r?0:n,v=M*4;let S=m.clippingState||null;l.value=S,S=u(g,d,v,p);for(let C=0;C!==v;++C)S[C]=e[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let f=null;if(_!==0){if(f=l.value,g!==!0||f===null){const m=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function wm(i){let t=new WeakMap;function e(o,a){return a===ia?o.mapping=ts:a===sa&&(o.mapping=es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ia||a===sa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class el extends Ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Wl=[.125,.215,.35,.446,.526,.582],gi=20,_o=new el,Xl=new Vt;let vo=null,xo=0,Mo=0,yo=!1;const pi=(1+Math.sqrt(5))/2,Hi=1/pi,Yl=[new F(-pi,Hi,0),new F(pi,Hi,0),new F(-Hi,0,pi),new F(Hi,0,pi),new F(0,pi,-Hi),new F(0,pi,Hi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vo,xo,Mo),this._renderer.xr.enabled=yo,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ts||t.mapping===es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Bn,format:_n,colorSpace:ii,depthBuffer:!1},s=ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Rm(r,t,e)}return s}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Xl),u.toneMapping=Jn,u.autoClear=!1;const p=new Hr({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new ae(new Qn,p);let _=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,_=!0):(p.color.copy(Xl),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;nr(s,M*v,m>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ts||t.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;nr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ae(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),_=r/g,f=isFinite(r)?1+Math.floor(u*_):gi;f>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gi}`);const m=[];let M=0;for(let T=0;T<gi;++T){const w=T/_,R=Math.exp(-w*w/2);m.push(R),T===0?M+=R:T<f&&(M+=2*R)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],C=3*S*(s>v-Xi?s-v+Xi:0),b=4*(this._cubeSize-S);nr(e,C,b,3*S,2*S),l.setRenderTarget(e),l.render(h,_o)}}function Cm(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+Wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Xi?l=Wl[o-i+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,f=2,m=1,M=new Float32Array(_*g*p),v=new Float32Array(f*g*p),S=new Float32Array(m*g*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,w=b>2?0:-1,R=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];M.set(R,_*g*b),v.set(d,f*g*b);const x=[b,b,b,b,b,b];S.set(x,m*g*b)}const C=new Be;C.setAttribute("position",new Je(M,_)),C.setAttribute("uv",new Je(v,f)),C.setAttribute("faceIndex",new Je(S,m)),t.push(C),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ql(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rm(i,t,e){const n=new Float32Array(gi),s=new F(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function jl(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Kl(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function Pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ia||l===sa,u=l===ts||l===es;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $l(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new $l(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Im(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let f=0,m=_.length;f<m;f++)t.remove(_[f])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let f=0,m=_.length;f<m;f++)t.update(_[f],i.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,S=M.length;v<S;v+=3){const C=M[v+0],b=M[v+1],T=M[v+2];d.push(C,b,b,T,T,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const C=v+0,b=v+1,T=v+2;d.push(C,b,b,T,T,C)}}else return;const f=new(yu(d)?wu:Tu)(d,1);f.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,f)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Dm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function h(d,p,g,_){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],_[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=p[M];for(let M=0;M<_.length;M++)e.update(m,n,_[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Um(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nm(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let R=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let S=a.attributes.position.count*v,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const b=new Float32Array(S*C*4*h),T=new Eu(b,S,C,h);T.type=Sn,T.needsUpdate=!0;const w=v*4;for(let x=0;x<h;x++){const y=f[x],L=m[x],N=M[x],B=S*C*4*x;for(let I=0;I<y.count;I++){const D=I*w;p===!0&&(s.fromBufferAttribute(y,I),b[B+D+0]=s.x,b[B+D+1]=s.y,b[B+D+2]=s.z,b[B+D+3]=0),g===!0&&(s.fromBufferAttribute(L,I),b[B+D+4]=s.x,b[B+D+5]=s.y,b[B+D+6]=s.z,b[B+D+7]=0),_===!0&&(s.fromBufferAttribute(N,I),b[B+D+8]=s.x,b[B+D+9]=s.y,b[B+D+10]=s.z,b[B+D+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Pt(S,C)},n.set(a,d),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Om(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Iu extends Fe{constructor(t,e,n,s,r,o,a,l,c,u=qi){if(u!==qi&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qi&&(n=yi),n===void 0&&u===is&&(n=ns),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Du=new Fe,Zl=new Iu(1,1),Uu=new Eu,Nu=new Sd,Ou=new Pu,Jl=[],Ql=[],tc=new Float32Array(16),ec=new Float32Array(9),nc=new Float32Array(4);function as(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kr(i,t){let e=Ql[t];e===void 0&&(e=new Int32Array(t),Ql[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;nc.set(n),i.uniformMatrix2fv(this.addr,!1,nc),ve(e,n)}}function Vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),ve(e,n)}}function Gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;tc.set(n),i.uniformMatrix4fv(this.addr,!1,tc),ve(e,n)}}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zl.compareFunction=Mu,r=Zl):r=Du,e.setTexture2D(t||r,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ou,s)}function eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uu,s)}function ng(i){switch(i){case 5126:return Fm;case 35664:return Bm;case 35665:return zm;case 35666:return Hm;case 35674:return km;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return qm;case 36294:return jm;case 36295:return Km;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(i,t){i.uniform1fv(this.addr,t)}function sg(i,t){const e=as(t,this.size,2);i.uniform2fv(this.addr,e)}function rg(i,t){const e=as(t,this.size,3);i.uniform3fv(this.addr,e)}function og(i,t){const e=as(t,this.size,4);i.uniform4fv(this.addr,e)}function ag(i,t){const e=as(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lg(i,t){const e=as(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cg(i,t){const e=as(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ug(i,t){i.uniform1iv(this.addr,t)}function hg(i,t){i.uniform2iv(this.addr,t)}function dg(i,t){i.uniform3iv(this.addr,t)}function fg(i,t){i.uniform4iv(this.addr,t)}function pg(i,t){i.uniform1uiv(this.addr,t)}function mg(i,t){i.uniform2uiv(this.addr,t)}function gg(i,t){i.uniform3uiv(this.addr,t)}function _g(i,t){i.uniform4uiv(this.addr,t)}function vg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Du,r[o])}function xg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nu,r[o])}function Mg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ou,r[o])}function yg(i,t,e){const n=this.cache,s=t.length,r=kr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uu,r[o])}function Sg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return yg}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}}class bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sg(e.type)}}class Ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function ic(i,t){i.seq.push(t),i.map[t.id]=t}function Tg(i,t,e){const n=i.name,s=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ic(e,c===void 0?new Eg(a,i,t):new bg(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ag(a),ic(e,h)),e=h}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function sc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const wg=37297;let Cg=0;function Rg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Pg(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Tr&&e===Ar?n="LinearDisplayP3ToLinearSRGB":t===Ar&&e===Tr&&(n="LinearSRGBToLinearDisplayP3"),i){case ii:case zr:return[n,"LinearTransferOETF"];case dn:case Ja:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rg(i.getShaderSource(t),o)}else return s}function Lg(i,t){const e=Pg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ig(i,t){let e;switch(t){case $h:e="Linear";break;case qh:e="Reinhard";break;case jh:e="Cineon";break;case lu:e="ACESFilmic";break;case Zh:e="AgX";break;case Jh:e="Neutral";break;case Kh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new F;function Dg(){te.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Es(i){return i!==""}function oc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(Fg,zg)}const Bg=new Map;function zg(i,t){let e=Gt[t];if(e===void 0){const n=Bg.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(Hg,kg)}function kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Vg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case es:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:t="ENVMAP_MODE_REFRACTION";break}return t}function Xg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case au:t="ENVMAP_BLENDING_MULTIPLY";break;case Xh:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function Yg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $g(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vg(e),c=Gg(e),u=Wg(e),h=Xg(e),d=Yg(e),p=Ug(e),g=Ng(r),_=s.createProgram();let f,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`)):(f=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),m=[cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=Na(o),o=oc(o,e),o=ac(o,e),a=Na(a),a=oc(a,e),a=ac(a,e),o=lc(o),a=lc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+f+o,S=M+m+a,C=sc(s,s.VERTEX_SHADER,v),b=sc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,C),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(y){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(b).trim();let I=!0,D=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,b);else{const W=rc(s,C,"vertex"),H=rc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+L+`
`+W+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||B==="")&&(D=!1);D&&(y.diagnostics={runnable:I,programLog:L,vertexShader:{log:N,prefix:f},fragmentShader:{log:B,prefix:m}})}s.deleteShader(C),s.deleteShader(b),w=new Mr(s,_),R=Og(s,_)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let R;this.getAttributes=function(){return R===void 0&&T(this),R};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,wg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let qg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Kg(t),e.set(t,n)),n}}class Kg{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}}function Zg(i,t,e,n,s,r,o){const a=new bu,l=new jg,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,L,N,B){const I=N.fog,D=B.geometry,W=x.isMeshStandardMaterial?N.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),J=H&&H.mapping===Br?H.image.height:null,et=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ht=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,gt=ht!==void 0?ht.length:0;let Mt=0;D.morphAttributes.position!==void 0&&(Mt=1),D.morphAttributes.normal!==void 0&&(Mt=2),D.morphAttributes.color!==void 0&&(Mt=3);let q,Q,pt,dt;if(et){const we=Mn[et];q=we.vertexShader,Q=we.fragmentShader}else q=x.vertexShader,Q=x.fragmentShader,l.update(x),pt=l.getVertexShaderID(x),dt=l.getFragmentShaderID(x);const _t=i.getRenderTarget(),bt=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,zt=!!x.map,Nt=!!x.matcap,U=!!H,qt=!!x.aoMap,Tt=!!x.lightMap,Bt=!!x.bumpMap,wt=!!x.normalMap,Yt=!!x.displacementMap,Ct=!!x.emissiveMap,P=!!x.metalnessMap,E=!!x.roughnessMap,X=x.anisotropy>0,nt=x.clearcoat>0,rt=x.dispersion>0,tt=x.iridescence>0,Y=x.sheen>0,O=x.transmission>0,$=X&&!!x.anisotropyMap,ut=nt&&!!x.clearcoatMap,it=nt&&!!x.clearcoatNormalMap,ct=nt&&!!x.clearcoatRoughnessMap,at=tt&&!!x.iridescenceMap,ot=tt&&!!x.iridescenceThicknessMap,ft=Y&&!!x.sheenColorMap,Ft=Y&&!!x.sheenRoughnessMap,Ot=!!x.specularMap,Zt=!!x.specularColorMap,k=!!x.specularIntensityMap,yt=O&&!!x.transmissionMap,K=O&&!!x.thicknessMap,st=!!x.gradientMap,xt=!!x.alphaMap,St=x.alphaTest>0,$t=!!x.alphaHash,ue=!!x.extensions;let be=Jn;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(be=i.toneMapping);const Kt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:Q,defines:x.defines,customVertexShaderID:pt,customFragmentShaderID:dt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:bt,instancingColor:bt&&B.instanceColor!==null,instancingMorph:bt&&B.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:ii,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:Nt,envMap:U,envMapMode:U&&H.mapping,envMapCubeUVHeight:J,aoMap:qt,lightMap:Tt,bumpMap:Bt,normalMap:wt,displacementMap:p&&Yt,emissiveMap:Ct,normalMapObjectSpace:wt&&x.normalMapType===nd,normalMapTangentSpace:wt&&x.normalMapType===xu,metalnessMap:P,roughnessMap:E,anisotropy:X,anisotropyMap:$,clearcoat:nt,clearcoatMap:ut,clearcoatNormalMap:it,clearcoatRoughnessMap:ct,dispersion:rt,iridescence:tt,iridescenceMap:at,iridescenceThicknessMap:ot,sheen:Y,sheenColorMap:ft,sheenRoughnessMap:Ft,specularMap:Ot,specularColorMap:Zt,specularIntensityMap:k,transmission:O,transmissionMap:yt,thicknessMap:K,gradientMap:st,opaque:x.transparent===!1&&x.blending===$i&&x.alphaToCoverage===!1,alphaMap:xt,alphaTest:St,alphaHash:$t,combine:x.combine,mapUv:zt&&f(x.map.channel),aoMapUv:qt&&f(x.aoMap.channel),lightMapUv:Tt&&f(x.lightMap.channel),bumpMapUv:Bt&&f(x.bumpMap.channel),normalMapUv:wt&&f(x.normalMap.channel),displacementMapUv:Yt&&f(x.displacementMap.channel),emissiveMapUv:Ct&&f(x.emissiveMap.channel),metalnessMapUv:P&&f(x.metalnessMap.channel),roughnessMapUv:E&&f(x.roughnessMap.channel),anisotropyMapUv:$&&f(x.anisotropyMap.channel),clearcoatMapUv:ut&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&f(x.sheenRoughnessMap.channel),specularMapUv:Ot&&f(x.specularMap.channel),specularColorMapUv:Zt&&f(x.specularColorMap.channel),specularIntensityMapUv:k&&f(x.specularIntensityMap.channel),transmissionMapUv:yt&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:xt&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(wt||X),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(zt||xt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Mt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function M(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(v(y,x),S(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const y=_[x.type];let L;if(y){const N=Mn[y];L=Rr.clone(N.uniforms)}else L=x.uniforms;return L}function b(x,y){let L;for(let N=0,B=u.length;N<B;N++){const I=u[N];if(I.cacheKey===y){L=I,++L.usedTimes;break}}return L===void 0&&(L=new $g(i,y,x,r),u.push(L)),L}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:C,acquireProgram:b,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:R}}function Jg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,_,f){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:f},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=f),t++,m}function a(h,d,p,g,_,f){const m=o(h,d,p,g,_,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(h,d,p,g,_,f){const m=o(h,d,p,g,_,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,d){e.length>1&&e.sort(h||Qg),n.length>1&&n.sort(d||uc),s.length>1&&s.sort(d||uc)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function t0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new hc,i.set(n,[o])):s>=r.length?(o=new hc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Vt};break;case"SpotLight":e={position:new F,direction:new F,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function n0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let i0=0;function s0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r0(i){const t=new e0,e=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new se,o=new se;function a(c){let u=0,h=0,d=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let p=0,g=0,_=0,f=0,m=0,M=0,v=0,S=0,C=0,b=0,T=0;c.sort(s0);for(let R=0,x=c.length;R<x;R++){const y=c[R],L=y.color,N=y.intensity,B=y.distance,I=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(y.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(y.sh.coefficients[D],N);T++}else if(y.isDirectionalLight){const D=t.get(y);if(D.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const W=y.shadow,H=e.get(y);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=I,n.directionalShadowMatrix[p]=y.shadow.matrix,M++}n.directional[p]=D,p++}else if(y.isSpotLight){const D=t.get(y);D.position.setFromMatrixPosition(y.matrixWorld),D.color.copy(L).multiplyScalar(N),D.distance=B,D.coneCos=Math.cos(y.angle),D.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),D.decay=y.decay,n.spot[_]=D;const W=y.shadow;if(y.map&&(n.spotLightMap[C]=y.map,C++,W.updateMatrices(y),y.castShadow&&b++),n.spotLightMatrix[_]=W.matrix,y.castShadow){const H=e.get(y);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=I,S++}_++}else if(y.isRectAreaLight){const D=t.get(y);D.color.copy(L).multiplyScalar(N),D.halfWidth.set(y.width*.5,0,0),D.halfHeight.set(0,y.height*.5,0),n.rectArea[f]=D,f++}else if(y.isPointLight){const D=t.get(y);if(D.color.copy(y.color).multiplyScalar(y.intensity),D.distance=y.distance,D.decay=y.decay,y.castShadow){const W=y.shadow,H=e.get(y);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=y.shadow.matrix,v++}n.point[g]=D,g++}else if(y.isHemisphereLight){const D=t.get(y);D.skyColor.copy(y.color).multiplyScalar(N),D.groundColor.copy(y.groundColor).multiplyScalar(N),n.hemi[m]=D,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==f||w.hemiLength!==m||w.numDirectionalShadows!==M||w.numPointShadows!==v||w.numSpotShadows!==S||w.numSpotMaps!==C||w.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,w.directionalLength=p,w.pointLength=g,w.spotLength=_,w.rectAreaLength=f,w.hemiLength=m,w.numDirectionalShadows=M,w.numPointShadows=v,w.numSpotShadows=S,w.numSpotMaps=C,w.numLightProbes=T,n.version=i0++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const f=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(v.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),p++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),o.identity(),r.copy(v.matrixWorld),r.premultiply(f),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),d++}else if(v.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function dc(i){const t=new r0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function o0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new dc(i),t.set(s,[a])):r>=o.length?(a=new dc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class a0 extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l0 extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
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
}`;function h0(i,t,e){let n=new tl;const s=new Pt,r=new Pt,o=new ie,a=new a0({depthPacking:ed}),l=new l0,c={},u=e.maxTextureSize,h={[ei]:Xe,[Xe]:ei,[Un]:Un},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:c0,fragmentShader:u0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let m=this.type;this.render=function(b,T,w){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const R=i.getRenderTarget(),x=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Fn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=m!==Ln&&this.type===Ln,B=m===Ln&&this.type!==Ln;for(let I=0,D=b.length;I<D;I++){const W=b[I],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||N===!0||B===!0){const ht=this.type!==Ln?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new vn(s.x,s.y,ht),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const et=H.getViewportCount();for(let ht=0;ht<et;ht++){const gt=H.getViewport(ht);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),L.viewport(o),H.updateMatrices(W,ht),n=H.getFrustum(),S(T,w,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&M(H,w),H.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(R,x,y)};function M(b,T){const w=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,w,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,w,p,_,null)}function v(b,T,w,R){let x=null;const y=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(y!==void 0)x=y;else if(x=w.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=x.uuid,N=T.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let I=B[N];I===void 0&&(I=x.clone(),B[N]=I,T.addEventListener("dispose",C)),x=I}if(x.visible=T.visible,x.wireframe=T.wireframe,R===Ln?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=i.properties.get(x);L.light=w}return x}function S(b,T,w,R,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const N=t.update(b),B=b.material;if(Array.isArray(B)){const I=N.groups;for(let D=0,W=I.length;D<W;D++){const H=I[D],J=B[H.materialIndex];if(J&&J.visible){const et=v(b,J,R,x);b.onBeforeShadow(i,b,T,w,N,et,H),i.renderBufferDirect(w,null,N,et,b,H),b.onAfterShadow(i,b,T,w,N,et,H)}}}else if(B.visible){const I=v(b,B,R,x);b.onBeforeShadow(i,b,T,w,N,I,null),i.renderBufferDirect(w,null,N,I,b,null),b.onAfterShadow(i,b,T,w,N,I,null)}}const L=b.children;for(let N=0,B=L.length;N<B;N++)S(L[N],T,w,R,x)}function C(b){b.target.removeEventListener("dispose",C);for(const w in c){const R=c[w],x=b.target.uuid;x in R&&(R[x].dispose(),delete R[x])}}}const d0={[Ko]:Zo,[Jo]:ea,[Qo]:na,[Qi]:ta,[Zo]:Ko,[ea]:Jo,[na]:Qo,[ta]:Qi};function f0(i){function t(){let k=!1;const yt=new ie;let K=null;const st=new ie(0,0,0,0);return{setMask:function(xt){K!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){k=xt},setClear:function(xt,St,$t,ue,be){be===!0&&(xt*=ue,St*=ue,$t*=ue),yt.set(xt,St,$t,ue),st.equals(yt)===!1&&(i.clearColor(xt,St,$t,ue),st.copy(yt))},reset:function(){k=!1,K=null,st.set(-1,0,0,0)}}}function e(){let k=!1,yt=!1,K=null,st=null,xt=null;return{setReversed:function(St){yt=St},setTest:function(St){St?pt(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(St){K!==St&&!k&&(i.depthMask(St),K=St)},setFunc:function(St){if(yt&&(St=d0[St]),st!==St){switch(St){case Ko:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case Jo:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=St}},setLocked:function(St){k=St},setClear:function(St){xt!==St&&(i.clearDepth(St),xt=St)},reset:function(){k=!1,K=null,st=null,xt=null}}}function n(){let k=!1,yt=null,K=null,st=null,xt=null,St=null,$t=null,ue=null,be=null;return{setTest:function(Kt){k||(Kt?pt(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Kt){yt!==Kt&&!k&&(i.stencilMask(Kt),yt=Kt)},setFunc:function(Kt,we,Ce){(K!==Kt||st!==we||xt!==Ce)&&(i.stencilFunc(Kt,we,Ce),K=Kt,st=we,xt=Ce)},setOp:function(Kt,we,Ce){(St!==Kt||$t!==we||ue!==Ce)&&(i.stencilOp(Kt,we,Ce),St=Kt,$t=we,ue=Ce)},setLocked:function(Kt){k=Kt},setClear:function(Kt){be!==Kt&&(i.clearStencil(Kt),be=Kt)},reset:function(){k=!1,yt=null,K=null,st=null,xt=null,St=null,$t=null,ue=null,be=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,g=!1,_=null,f=null,m=null,M=null,v=null,S=null,C=null,b=new Vt(0,0,0),T=0,w=!1,R=null,x=null,y=null,L=null,N=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,D=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=D>=1):W.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=D>=2);let H=null,J={};const et=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),gt=new ie().fromArray(et),Mt=new ie().fromArray(ht);function q(k,yt,K,st){const xt=new Uint8Array(4),St=i.createTexture();i.bindTexture(k,St),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<K;$t++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(yt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return St}const Q={};Q[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),r.setFunc(Qi),Tt(!1),Bt(Sl),pt(i.CULL_FACE),U(Fn);function pt(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function dt(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function _t(k,yt){return u[k]!==yt?(i.bindFramebuffer(k,yt),u[k]=yt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function bt(k,yt){let K=d,st=!1;if(k){K=h.get(yt),K===void 0&&(K=[],h.set(yt,K));const xt=k.textures;if(K.length!==xt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let St=0,$t=xt.length;St<$t;St++)K[St]=i.COLOR_ATTACHMENT0+St;K.length=xt.length,st=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,st=!0);st&&i.drawBuffers(K)}function Ut(k){return p!==k?(i.useProgram(k),p=k,!0):!1}const zt={[mi]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Rh]:i.FUNC_REVERSE_SUBTRACT};zt[Ph]=i.MIN,zt[Lh]=i.MAX;const Nt={[Ih]:i.ZERO,[Dh]:i.ONE,[Uh]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Nh]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[kh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Gh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function U(k,yt,K,st,xt,St,$t,ue,be,Kt){if(k===Fn){g===!0&&(dt(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),k!==wh){if(k!==_||Kt!==w){if((f!==mi||v!==mi)&&(i.blendEquation(i.FUNC_ADD),f=mi,v=mi),Kt)switch(k){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}m=null,M=null,S=null,C=null,b.set(0,0,0),T=0,_=k,w=Kt}return}xt=xt||yt,St=St||K,$t=$t||st,(yt!==f||xt!==v)&&(i.blendEquationSeparate(zt[yt],zt[xt]),f=yt,v=xt),(K!==m||st!==M||St!==S||$t!==C)&&(i.blendFuncSeparate(Nt[K],Nt[st],Nt[St],Nt[$t]),m=K,M=st,S=St,C=$t),(ue.equals(b)===!1||be!==T)&&(i.blendColor(ue.r,ue.g,ue.b,be),b.copy(ue),T=be),_=k,w=!1}function qt(k,yt){k.side===Un?dt(i.CULL_FACE):pt(i.CULL_FACE);let K=k.side===Xe;yt&&(K=!K),Tt(K),k.blending===$i&&k.transparent===!1?U(Fn):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);const st=k.stencilWrite;o.setTest(st),st&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(k){R!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),R=k)}function Bt(k){k!==Ah?(pt(i.CULL_FACE),k!==x&&(k===Sl?i.cullFace(i.BACK):k===Th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),x=k}function wt(k){k!==y&&(I&&i.lineWidth(k),y=k)}function Yt(k,yt,K){k?(pt(i.POLYGON_OFFSET_FILL),(L!==yt||N!==K)&&(i.polygonOffset(yt,K),L=yt,N=K)):dt(i.POLYGON_OFFSET_FILL)}function Ct(k){k?pt(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+B-1),H!==k&&(i.activeTexture(k),H=k)}function E(k,yt,K){K===void 0&&(H===null?K=i.TEXTURE0+B-1:K=H);let st=J[K];st===void 0&&(st={type:void 0,texture:void 0},J[K]=st),(st.type!==k||st.texture!==yt)&&(H!==K&&(i.activeTexture(K),H=K),i.bindTexture(k,yt||Q[k]),st.type=k,st.texture=yt)}function X(){const k=J[H];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function O(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(k){gt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function ft(k){Mt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Mt.copy(k))}function Ft(k,yt){let K=l.get(yt);K===void 0&&(K=new WeakMap,l.set(yt,K));let st=K.get(k);st===void 0&&(st=i.getUniformBlockIndex(yt,k.name),K.set(k,st))}function Ot(k,yt){const st=l.get(yt).get(k);a.get(yt)!==st&&(i.uniformBlockBinding(yt,st,k.__bindingPointIndex),a.set(yt,st))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,J={},u={},h=new WeakMap,d=[],p=null,g=!1,_=null,f=null,m=null,M=null,v=null,S=null,C=null,b=new Vt(0,0,0),T=0,w=!1,R=null,x=null,y=null,L=null,N=null,gt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pt,disable:dt,bindFramebuffer:_t,drawBuffers:bt,useProgram:Ut,setBlending:U,setMaterial:qt,setFlipSided:Tt,setCullFace:Bt,setLineWidth:wt,setPolygonOffset:Yt,setScissorTest:Ct,activeTexture:P,bindTexture:E,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:rt,texImage2D:ct,texImage3D:at,updateUBOMapping:Ft,uniformBlockBinding:Ot,texStorage2D:ut,texStorage3D:it,texSubImage2D:tt,texSubImage3D:Y,compressedTexSubImage2D:O,compressedTexSubImage3D:$,scissor:ot,viewport:ft,reset:Zt}}function fc(i,t,e,n){const s=p0(n);switch(e){case fu:return i*t;case mu:return i*t;case gu:return i*t*2;case qa:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case _u:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case pu:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Za:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:case ua:return Math.max(i,16)*Math.max(t,8)/4;case aa:case ca:return Math.max(i,8)*Math.max(t,8)/2;case ha:case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vu:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case La:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p0(i){switch(i){case zn:case uu:return{byteLength:1,components:1};case As:case hu:case Bn:return{byteLength:2,components:1};case Ya:case $a:return{byteLength:2,components:4};case yi:case Xa:case Sn:return{byteLength:4,components:1};case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function m0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):Cr("canvas")}function _(P,E,X){let nt=1;const rt=Ct(P);if((rt.width>X||rt.height>X)&&(nt=X/Math.max(rt.width,rt.height)),nt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const tt=Math.floor(nt*rt.width),Y=Math.floor(nt*rt.height);h===void 0&&(h=g(tt,Y));const O=E?g(tt,Y):h;return O.width=tt,O.height=Y,O.getContext("2d").drawImage(P,0,0,tt,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+Y+")."),O}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function f(P){return P.generateMipmaps&&P.minFilter!==Ge&&P.minFilter!==fn}function m(P){i.generateMipmap(P)}function M(P,E,X,nt,rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let tt=E;if(E===i.RED&&(X===i.FLOAT&&(tt=i.R32F),X===i.HALF_FLOAT&&(tt=i.R16F),X===i.UNSIGNED_BYTE&&(tt=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.R8UI),X===i.UNSIGNED_SHORT&&(tt=i.R16UI),X===i.UNSIGNED_INT&&(tt=i.R32UI),X===i.BYTE&&(tt=i.R8I),X===i.SHORT&&(tt=i.R16I),X===i.INT&&(tt=i.R32I)),E===i.RG&&(X===i.FLOAT&&(tt=i.RG32F),X===i.HALF_FLOAT&&(tt=i.RG16F),X===i.UNSIGNED_BYTE&&(tt=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RG8UI),X===i.UNSIGNED_SHORT&&(tt=i.RG16UI),X===i.UNSIGNED_INT&&(tt=i.RG32UI),X===i.BYTE&&(tt=i.RG8I),X===i.SHORT&&(tt=i.RG16I),X===i.INT&&(tt=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),X===i.UNSIGNED_INT&&(tt=i.RGB32UI),X===i.BYTE&&(tt=i.RGB8I),X===i.SHORT&&(tt=i.RGB16I),X===i.INT&&(tt=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),X===i.UNSIGNED_INT&&(tt=i.RGBA32UI),X===i.BYTE&&(tt=i.RGBA8I),X===i.SHORT&&(tt=i.RGBA16I),X===i.INT&&(tt=i.RGBA32I)),E===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),E===i.RGBA){const Y=rt?br:te.getTransfer(nt);X===i.FLOAT&&(tt=i.RGBA32F),X===i.HALF_FLOAT&&(tt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(tt=Y===oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(P,E){let X;return P?E===null||E===yi||E===ns?X=i.DEPTH24_STENCIL8:E===Sn?X=i.DEPTH32F_STENCIL8:E===As&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===yi||E===ns?X=i.DEPTH_COMPONENT24:E===Sn?X=i.DEPTH_COMPONENT32F:E===As&&(X=i.DEPTH_COMPONENT16),X}function S(P,E){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ge&&P.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),T(E),E.isVideoTexture&&u.delete(E)}function b(P){const E=P.target;E.removeEventListener("dispose",b),R(E)}function T(P){const E=n.get(P);if(E.__webglInit===void 0)return;const X=P.source,nt=d.get(X);if(nt){const rt=nt[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(P),Object.keys(nt).length===0&&d.delete(X)}n.remove(P)}function w(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const X=P.source,nt=d.get(X);delete nt[E.__cacheKey],o.memory.textures--}function R(P){const E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let rt=0;rt<E.__webglFramebuffer[nt].length;rt++)i.deleteFramebuffer(E.__webglFramebuffer[nt][rt]);else i.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)i.deleteFramebuffer(E.__webglFramebuffer[nt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=P.textures;for(let nt=0,rt=X.length;nt<rt;nt++){const tt=n.get(X[nt]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(X[nt])}n.remove(P)}let x=0;function y(){x=0}function L(){const P=x;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),x+=1,P}function N(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function B(P,E){const X=n.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(X,P,E);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function I(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Mt(X,P,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function D(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Mt(X,P,E);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function W(P,E){const X=n.get(P);if(P.version>0&&X.__version!==P.version){q(X,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const H={[ra]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},J={[Ge]:i.NEAREST,[Qh]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},et={[id]:i.NEVER,[cd]:i.ALWAYS,[sd]:i.LESS,[Mu]:i.LEQUAL,[rd]:i.EQUAL,[ld]:i.GEQUAL,[od]:i.GREATER,[ad]:i.NOTEQUAL};function ht(P,E){if(E.type===Sn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===$r||E.magFilter===Fs||E.magFilter===xi||E.minFilter===fn||E.minFilter===$r||E.minFilter===Fs||E.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,H[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,H[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,H[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,J[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,et[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ge||E.minFilter!==Fs&&E.minFilter!==xi||E.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function gt(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const nt=E.source;let rt=d.get(nt);rt===void 0&&(rt={},d.set(nt,rt));const tt=N(E);if(tt!==P.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),rt[tt].usedTimes++;const Y=rt[P.__cacheKey];Y!==void 0&&(rt[P.__cacheKey].usedTimes--,Y.usedTimes===0&&w(E)),P.__cacheKey=tt,P.__webglTexture=rt[tt].texture}return X}function Mt(P,E,X){let nt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=i.TEXTURE_3D);const rt=gt(P,E),tt=E.source;e.bindTexture(nt,P.__webglTexture,i.TEXTURE0+X);const Y=n.get(tt);if(tt.version!==Y.__version||rt===!0){e.activeTexture(i.TEXTURE0+X);const O=te.getPrimaries(te.workingColorSpace),$=E.colorSpace===Kn?null:te.getPrimaries(E.colorSpace),ut=E.colorSpace===Kn||O===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let it=_(E.image,!1,s.maxTextureSize);it=Yt(E,it);const ct=r.convert(E.format,E.colorSpace),at=r.convert(E.type);let ot=M(E.internalFormat,ct,at,E.colorSpace,E.isVideoTexture);ht(nt,E);let ft;const Ft=E.mipmaps,Ot=E.isVideoTexture!==!0,Zt=Y.__version===void 0||rt===!0,k=tt.dataReady,yt=S(E,it);if(E.isDepthTexture)ot=v(E.format===is,E.type),Zt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,ot,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,ot,it.width,it.height,0,ct,at,null));else if(E.isDataTexture)if(Ft.length>0){Ot&&Zt&&e.texStorage2D(i.TEXTURE_2D,yt,ot,Ft[0].width,Ft[0].height);for(let K=0,st=Ft.length;K<st;K++)ft=Ft[K],Ot?k&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,ct,at,ft.data):e.texImage2D(i.TEXTURE_2D,K,ot,ft.width,ft.height,0,ct,at,ft.data);E.generateMipmaps=!1}else Ot?(Zt&&e.texStorage2D(i.TEXTURE_2D,yt,ot,it.width,it.height),k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ct,at,it.data)):e.texImage2D(i.TEXTURE_2D,0,ot,it.width,it.height,0,ct,at,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,ot,Ft[0].width,Ft[0].height,it.depth);for(let K=0,st=Ft.length;K<st;K++)if(ft=Ft[K],E.format!==_n)if(ct!==null)if(Ot){if(k)if(E.layerUpdates.size>0){const xt=fc(ft.width,ft.height,E.format,E.type);for(const St of E.layerUpdates){const $t=ft.data.subarray(St*xt/ft.data.BYTES_PER_ELEMENT,(St+1)*xt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,St,ft.width,ft.height,1,ct,$t,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,it.depth,ct,ft.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ot,ft.width,ft.height,it.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,it.depth,ct,at,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,ot,ft.width,ft.height,it.depth,0,ct,at,ft.data)}else{Ot&&Zt&&e.texStorage2D(i.TEXTURE_2D,yt,ot,Ft[0].width,Ft[0].height);for(let K=0,st=Ft.length;K<st;K++)ft=Ft[K],E.format!==_n?ct!==null?Ot?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,ct,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,K,ot,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?k&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,ct,at,ft.data):e.texImage2D(i.TEXTURE_2D,K,ot,ft.width,ft.height,0,ct,at,ft.data)}else if(E.isDataArrayTexture)if(Ot){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,ot,it.width,it.height,it.depth),k)if(E.layerUpdates.size>0){const K=fc(it.width,it.height,E.format,E.type);for(const st of E.layerUpdates){const xt=it.data.subarray(st*K/it.data.BYTES_PER_ELEMENT,(st+1)*K/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,it.width,it.height,1,ct,at,xt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ct,at,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,it.width,it.height,it.depth,0,ct,at,it.data);else if(E.isData3DTexture)Ot?(Zt&&e.texStorage3D(i.TEXTURE_3D,yt,ot,it.width,it.height,it.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ct,at,it.data)):e.texImage3D(i.TEXTURE_3D,0,ot,it.width,it.height,it.depth,0,ct,at,it.data);else if(E.isFramebufferTexture){if(Zt)if(Ot)e.texStorage2D(i.TEXTURE_2D,yt,ot,it.width,it.height);else{let K=it.width,st=it.height;for(let xt=0;xt<yt;xt++)e.texImage2D(i.TEXTURE_2D,xt,ot,K,st,0,ct,at,null),K>>=1,st>>=1}}else if(Ft.length>0){if(Ot&&Zt){const K=Ct(Ft[0]);e.texStorage2D(i.TEXTURE_2D,yt,ot,K.width,K.height)}for(let K=0,st=Ft.length;K<st;K++)ft=Ft[K],Ot?k&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ct,at,ft):e.texImage2D(i.TEXTURE_2D,K,ot,ct,at,ft);E.generateMipmaps=!1}else if(Ot){if(Zt){const K=Ct(it);e.texStorage2D(i.TEXTURE_2D,yt,ot,K.width,K.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,at,it)}else e.texImage2D(i.TEXTURE_2D,0,ot,ct,at,it);f(E)&&m(nt),Y.__version=tt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,X){if(E.image.length!==6)return;const nt=gt(P,E),rt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const tt=n.get(rt);if(rt.version!==tt.__version||nt===!0){e.activeTexture(i.TEXTURE0+X);const Y=te.getPrimaries(te.workingColorSpace),O=E.colorSpace===Kn?null:te.getPrimaries(E.colorSpace),$=E.colorSpace===Kn||Y===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ut=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,ct=[];for(let st=0;st<6;st++)!ut&&!it?ct[st]=_(E.image[st],!0,s.maxCubemapSize):ct[st]=it?E.image[st].image:E.image[st],ct[st]=Yt(E,ct[st]);const at=ct[0],ot=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),Ft=M(E.internalFormat,ot,ft,E.colorSpace),Ot=E.isVideoTexture!==!0,Zt=tt.__version===void 0||nt===!0,k=rt.dataReady;let yt=S(E,at);ht(i.TEXTURE_CUBE_MAP,E);let K;if(ut){Ot&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ft,at.width,at.height);for(let st=0;st<6;st++){K=ct[st].mipmaps;for(let xt=0;xt<K.length;xt++){const St=K[xt];E.format!==_n?ot!==null?Ot?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt,0,0,St.width,St.height,ot,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt,0,0,St.width,St.height,ot,ft,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt,Ft,St.width,St.height,0,ot,ft,St.data)}}}else{if(K=E.mipmaps,Ot&&Zt){K.length>0&&yt++;const st=Ct(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ft,st.width,st.height)}for(let st=0;st<6;st++)if(it){Ot?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ct[st].width,ct[st].height,ot,ft,ct[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,ct[st].width,ct[st].height,0,ot,ft,ct[st].data);for(let xt=0;xt<K.length;xt++){const $t=K[xt].image[st].image;Ot?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt+1,0,0,$t.width,$t.height,ot,ft,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt+1,Ft,$t.width,$t.height,0,ot,ft,$t.data)}}else{Ot?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ot,ft,ct[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ft,ot,ft,ct[st]);for(let xt=0;xt<K.length;xt++){const St=K[xt];Ot?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt+1,0,0,ot,ft,St.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt+1,Ft,ot,ft,St.image[st])}}}f(E)&&m(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Q(P,E,X,nt,rt,tt){const Y=r.convert(X.format,X.colorSpace),O=r.convert(X.type),$=M(X.internalFormat,Y,O,X.colorSpace);if(!n.get(E).__hasExternalTextures){const it=Math.max(1,E.width>>tt),ct=Math.max(1,E.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,$,it,ct,E.depth,0,Y,O,null):e.texImage2D(rt,tt,$,it,ct,0,Y,O,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,rt,n.get(X).__webglTexture,0,Tt(E)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,rt,n.get(X).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(P,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const nt=E.depthTexture,rt=nt&&nt.isDepthTexture?nt.type:null,tt=v(E.stencilBuffer,rt),Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=Tt(E);Bt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,tt,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,tt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,tt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,P)}else{const nt=E.textures;for(let rt=0;rt<nt.length;rt++){const tt=nt[rt],Y=r.convert(tt.format,tt.colorSpace),O=r.convert(tt.type),$=M(tt.internalFormat,Y,O,tt.colorSpace),ut=Tt(E);X&&Bt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,E.width,E.height):Bt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,$,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const nt=n.get(E.depthTexture).__webglTexture,rt=Tt(E);if(E.depthTexture.format===qi)Bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(E.depthTexture.format===is)Bt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function _t(P){const E=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const nt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",rt)};nt.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=nt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");dt(E.__webglFramebuffer,P)}else if(X){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=i.createRenderbuffer(),pt(E.__webglDepthbuffer[nt],P,!1);else{const rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=E.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),pt(E.__webglDepthbuffer,P,!1);else{const nt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(P,E,X){const nt=n.get(P);E!==void 0&&Q(nt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&_t(P)}function Ut(P){const E=P.texture,X=n.get(P),nt=n.get(E);P.addEventListener("dispose",b);const rt=P.textures,tt=P.isWebGLCubeRenderTarget===!0,Y=rt.length>1;if(Y||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=E.version,o.memory.textures++),tt){X.__webglFramebuffer=[];for(let O=0;O<6;O++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[O]=[];for(let $=0;$<E.mipmaps.length;$++)X.__webglFramebuffer[O][$]=i.createFramebuffer()}else X.__webglFramebuffer[O]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let O=0;O<E.mipmaps.length;O++)X.__webglFramebuffer[O]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Y)for(let O=0,$=rt.length;O<$;O++){const ut=n.get(rt[O]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Bt(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let O=0;O<rt.length;O++){const $=rt[O];X.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[O]);const ut=r.convert($.format,$.colorSpace),it=r.convert($.type),ct=M($.internalFormat,ut,it,$.colorSpace,P.isXRRenderTarget===!0),at=Tt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,X.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ht(i.TEXTURE_CUBE_MAP,E);for(let O=0;O<6;O++)if(E.mipmaps&&E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)Q(X.__webglFramebuffer[O][$],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,$);else Q(X.__webglFramebuffer[O],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);f(E)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Y){for(let O=0,$=rt.length;O<$;O++){const ut=rt[O],it=n.get(ut);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),ht(i.TEXTURE_2D,ut),Q(X.__webglFramebuffer,P,ut,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,0),f(ut)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let O=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(O=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,nt.__webglTexture),ht(O,E),E.mipmaps&&E.mipmaps.length>0)for(let $=0;$<E.mipmaps.length;$++)Q(X.__webglFramebuffer[$],P,E,i.COLOR_ATTACHMENT0,O,$);else Q(X.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,O,0);f(E)&&m(O),e.unbindTexture()}P.depthBuffer&&_t(P)}function zt(P){const E=P.textures;for(let X=0,nt=E.length;X<nt;X++){const rt=E[X];if(f(rt)){const tt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Y=n.get(rt).__webglTexture;e.bindTexture(tt,Y),m(tt),e.unbindTexture()}}}const Nt=[],U=[];function qt(P){if(P.samples>0){if(Bt(P)===!1){const E=P.textures,X=P.width,nt=P.height;let rt=i.COLOR_BUFFER_BIT;const tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=n.get(P),O=E.length>1;if(O)for(let $=0;$<E.length;$++)e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let $=0;$<E.length;$++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Y.__webglColorRenderbuffer[$]);const ut=n.get(E[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,X,nt,0,0,X,nt,rt,i.NEAREST),l===!0&&(Nt.length=0,U.length=0,Nt.push(i.COLOR_ATTACHMENT0+$),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Nt.push(tt),U.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let $=0;$<E.length;$++){e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,Y.__webglColorRenderbuffer[$]);const ut=n.get(E[$]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Tt(P){return Math.min(s.maxSamples,P.samples)}function Bt(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function Yt(P,E){const X=P.colorSpace,nt=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==ii&&X!==Kn&&(te.getTransfer(X)===oe?(nt!==_n||rt!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Ct(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=B,this.setTexture2DArray=I,this.setTexture3D=D,this.setTextureCube=W,this.rebindTextures=bt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Bt}function g0(i,t){function e(n,s=Kn){let r;const o=te.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.BYTE;if(n===hu)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===pu)return i.RGB;if(n===_n)return i.RGBA;if(n===mu)return i.LUMINANCE;if(n===gu)return i.LUMINANCE_ALPHA;if(n===qi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===qa)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===_u)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Za)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===la||n===ca||n===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ha||n===da)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Aa||n===Ta||n===wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ma)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ta)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Ca||n===Ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vu||n===Pa||n===La||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class _0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class On extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),m=this._getHandJoint(c,_);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new On;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`;class y0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:x0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S0 extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new y0,f=e.getContextAttributes();let m=null,M=null;const v=[],S=[],C=new Pt;let b=null;const T=new Ve;T.layers.enable(1),T.viewport=new ie;const w=new Ve;w.layers.enable(2),w.viewport=new ie;const R=[T,w],x=new _0;x.layers.enable(1),x.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Eo,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Eo,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Eo,v[q]=Q),Q.getHandSpace()};function N(q){const Q=S.indexOf(q.inputSource);if(Q===-1)return;const pt=v[Q];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",I);for(let q=0;q<v.length;q++){const Q=S[q];Q!==null&&(S[q]=null,v[q].disconnect(Q))}y=null,L=null,_.reset(),t.setRenderTarget(m),p=null,d=null,h=null,s=null,M=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const Q={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new vn(p.framebufferWidth,p.framebufferHeight,{format:_n,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,pt=null,dt=null;f.depth&&(dt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?is:qi,pt=f.stencil?ns:yi);const _t={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new vn(d.textureWidth,d.textureHeight,{format:_n,type:zn,depthTexture:new Iu(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(q){for(let Q=0;Q<q.removed.length;Q++){const pt=q.removed[Q],dt=S.indexOf(pt);dt>=0&&(S[dt]=null,v[dt].disconnect(pt))}for(let Q=0;Q<q.added.length;Q++){const pt=q.added[Q];let dt=S.indexOf(pt);if(dt===-1){for(let bt=0;bt<v.length;bt++)if(bt>=S.length){S.push(pt),dt=bt;break}else if(S[bt]===null){S[bt]=pt,dt=bt;break}if(dt===-1)break}const _t=v[dt];_t&&_t.connect(pt)}}const D=new F,W=new F;function H(q,Q,pt){D.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(pt.matrixWorld);const dt=D.distanceTo(W),_t=Q.projectionMatrix.elements,bt=pt.projectionMatrix.elements,Ut=_t[14]/(_t[10]-1),zt=_t[14]/(_t[10]+1),Nt=(_t[9]+1)/_t[5],U=(_t[9]-1)/_t[5],qt=(_t[8]-1)/_t[0],Tt=(bt[8]+1)/bt[0],Bt=Ut*qt,wt=Ut*Tt,Yt=dt/(-qt+Tt),Ct=Yt*-qt;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_t[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const P=Ut+Yt,E=zt+Yt,X=Bt-Ct,nt=wt+(dt-Ct),rt=Nt*zt/E*P,tt=U*zt/E*P;q.projectionMatrix.makePerspective(X,nt,rt,tt,P,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function J(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,pt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),x.near=w.near=T.near=Q,x.far=w.far=T.far=pt,(y!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,L=x.far);const dt=q.parent,_t=x.cameras;J(x,dt);for(let bt=0;bt<_t.length;bt++)J(_t[bt],dt);_t.length===2?H(x,T,w):x.projectionMatrix.copy(T.projectionMatrix),et(q,x,dt)};function et(q,Q,pt){pt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ua*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ht=null;function gt(q,Q){if(u=Q.getViewerPose(c||o),g=Q,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let dt=!1;pt.length!==x.cameras.length&&(x.cameras.length=0,dt=!0);for(let bt=0;bt<pt.length;bt++){const Ut=pt[bt];let zt=null;if(p!==null)zt=p.getViewport(Ut);else{const U=h.getViewSubImage(d,Ut);zt=U.viewport,bt===0&&(t.setRenderTargetTextures(M,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(M))}let Nt=R[bt];Nt===void 0&&(Nt=new Ve,Nt.layers.enable(bt),Nt.viewport=new ie,R[bt]=Nt),Nt.matrix.fromArray(Ut.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ut.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(zt.x,zt.y,zt.width,zt.height),bt===0&&(x.matrix.copy(Nt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),dt===!0&&x.cameras.push(Nt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const bt=h.getDepthInformation(pt[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,s.renderState)}}for(let pt=0;pt<v.length;pt++){const dt=S[pt],_t=v[pt];dt!==null&&_t!==void 0&&_t.update(dt,Q,c||o)}ht&&ht(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Mt=new Lu;Mt.setAnimationLoop(gt),this.setAnimationLoop=function(q){ht=q},this.dispose=function(){}}}const fi=new An,E0=new se;function b0(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Cu(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,S)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),_(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&a(f,m)):m.isPointsMaterial?l(f,m,M,v):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,S=M.envMapRotation;v&&(f.envMap.value=v,fi.copy(S),fi.x*=-1,fi.y*=-1,fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),f.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(fi)),f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function a(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,v){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=v*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function _(f,m){const M=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=s[M.id];S===void 0&&(g(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",f));const C=v.program;n.updateUBOMapping(M,C);const b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function u(M){const v=h();M.__bindingPointIndex=v;const S=i.createBuffer(),C=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,T=S.length;b<T;b++){const w=Array.isArray(S[b])?S[b]:[S[b]];for(let R=0,x=w.length;R<x;R++){const y=w[R];if(p(y,b,R,C)===!0){const L=y.__offset,N=Array.isArray(y.value)?y.value:[y.value];let B=0;for(let I=0;I<N.length;I++){const D=N[I],W=_(D);typeof D=="number"||typeof D=="boolean"?(y.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,L+B,y.__data)):D.isMatrix3?(y.__data[0]=D.elements[0],y.__data[1]=D.elements[1],y.__data[2]=D.elements[2],y.__data[3]=0,y.__data[4]=D.elements[3],y.__data[5]=D.elements[4],y.__data[6]=D.elements[5],y.__data[7]=0,y.__data[8]=D.elements[6],y.__data[9]=D.elements[7],y.__data[10]=D.elements[8],y.__data[11]=0):(D.toArray(y.__data,B),B+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,v,S,C){const b=M.value,T=v+"_"+S;if(C[T]===void 0)return typeof b=="number"||typeof b=="boolean"?C[T]=b:C[T]=b.clone(),!0;{const w=C[T];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return C[T]=b,!0}else if(w.equals(b)===!1)return w.copy(b),!0}return!1}function g(M){const v=M.uniforms;let S=0;const C=16;for(let T=0,w=v.length;T<w;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,y=R.length;x<y;x++){const L=R[x],N=Array.isArray(L.value)?L.value:[L.value];for(let B=0,I=N.length;B<I;B++){const D=N[B],W=_(D),H=S%C,J=H%W.boundary,et=H+J;S+=J,et!==0&&C-et<W.storage&&(S+=C-et),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=W.storage}}}const b=S%C;return b>0&&(S+=C-b),M.__size=S,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function f(M){const v=M.target;v.removeEventListener("dispose",f);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Fu{constructor(t={}){const{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,f=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Jn,this.toneMappingExposure=1;const v=this;let S=!1,C=0,b=0,T=null,w=-1,R=null;const x=new ie,y=new ie;let L=null;const N=new Vt(0);let B=0,I=e.width,D=e.height,W=1,H=null,J=null;const et=new ie(0,0,I,D),ht=new ie(0,0,I,D);let gt=!1;const Mt=new tl;let q=!1,Q=!1;const pt=new se,dt=new se,_t=new F,bt=new ie,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function Nt(){return T===null?W:1}let U=n;function qt(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",St,!1),U===null){const V="webgl2";if(U=qt(V,A),U===null)throw qt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Tt,Bt,wt,Yt,Ct,P,E,X,nt,rt,tt,Y,O,$,ut,it,ct,at,ot,ft,Ft,Ot,Zt,k;function yt(){Tt=new Lm(U),Tt.init(),Ot=new g0(U,Tt),Bt=new Am(U,Tt,t,Ot),wt=new f0(U),Bt.reverseDepthBuffer&&wt.buffers.depth.setReversed(!0),Yt=new Um(U),Ct=new Jg,P=new m0(U,Tt,wt,Ct,Bt,Ot,Yt),E=new wm(v),X=new Pm(v),nt=new Hd(U),Zt=new Em(U,nt),rt=new Im(U,nt,Yt,Zt),tt=new Om(U,rt,nt,Yt),ot=new Nm(U,Bt,P),it=new Tm(Ct),Y=new Zg(v,E,X,Tt,Bt,Zt,it),O=new b0(v,Ct),$=new t0,ut=new o0(Tt),at=new Sm(v,E,X,wt,tt,d,l),ct=new h0(v,tt,Bt),k=new A0(U,Yt,Bt,wt),ft=new bm(U,Tt,Yt),Ft=new Dm(U,Tt,Yt),Yt.programs=Y.programs,v.capabilities=Bt,v.extensions=Tt,v.properties=Ct,v.renderLists=$,v.shadowMap=ct,v.state=wt,v.info=Yt}yt();const K=new S0(v,U);this.xr=K,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(I,D,!1))},this.getSize=function(A){return A.set(I,D)},this.setSize=function(A,V,j=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,D=V,e.width=Math.floor(A*W),e.height=Math.floor(V*W),j===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(I*W,D*W).floor()},this.setDrawingBufferSize=function(A,V,j){I=A,D=V,W=j,e.width=Math.floor(A*j),e.height=Math.floor(V*j),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,V,j,Z){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,V,j,Z),wt.viewport(x.copy(et).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(ht)},this.setScissor=function(A,V,j,Z){A.isVector4?ht.set(A.x,A.y,A.z,A.w):ht.set(A,V,j,Z),wt.scissor(y.copy(ht).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){wt.setScissorTest(gt=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(A=!0,V=!0,j=!0){let Z=0;if(A){let G=!1;if(T!==null){const mt=T.texture.format;G=mt===Za||mt===Ka||mt===ja}if(G){const mt=T.texture.type,Et=mt===zn||mt===yi||mt===As||mt===ns||mt===Ya||mt===$a,At=at.getClearColor(),Rt=at.getClearAlpha(),Ht=At.r,kt=At.g,Lt=At.b;Et?(p[0]=Ht,p[1]=kt,p[2]=Lt,p[3]=Rt,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Ht,g[1]=kt,g[2]=Lt,g[3]=Rt,U.clearBufferiv(U.COLOR,0,g))}else Z|=U.COLOR_BUFFER_BIT}V&&(Z|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),$.dispose(),ut.dispose(),Ct.dispose(),E.dispose(),X.dispose(),tt.dispose(),Zt.dispose(),k.dispose(),Y.dispose(),K.dispose(),K.removeEventListener("sessionstart",ri),K.removeEventListener("sessionend",ml),oi.stop()};function st(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Yt.autoReset,V=ct.enabled,j=ct.autoUpdate,Z=ct.needsUpdate,G=ct.type;yt(),Yt.autoReset=A,ct.enabled=V,ct.autoUpdate=j,ct.needsUpdate=Z,ct.type=G}function St(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const V=A.target;V.removeEventListener("dispose",$t),ue(V)}function ue(A){be(A),Ct.remove(A)}function be(A){const V=Ct.get(A).programs;V!==void 0&&(V.forEach(function(j){Y.releaseProgram(j)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,j,Z,G,mt){V===null&&(V=Ut);const Et=G.isMesh&&G.matrixWorld.determinant()<0,At=xh(A,V,j,Z,G);wt.setMaterial(Z,Et);let Rt=j.index,Ht=1;if(Z.wireframe===!0){if(Rt=rt.getWireframeAttribute(j),Rt===void 0)return;Ht=2}const kt=j.drawRange,Lt=j.attributes.position;let ee=kt.start*Ht,re=(kt.start+kt.count)*Ht;mt!==null&&(ee=Math.max(ee,mt.start*Ht),re=Math.min(re,(mt.start+mt.count)*Ht)),Rt!==null?(ee=Math.max(ee,0),re=Math.min(re,Rt.count)):Lt!=null&&(ee=Math.max(ee,0),re=Math.min(re,Lt.count));const he=re-ee;if(he<0||he===1/0)return;Zt.setup(G,Z,At,j,Rt);let Ye,Jt=ft;if(Rt!==null&&(Ye=nt.get(Rt),Jt=Ft,Jt.setIndex(Ye)),G.isMesh)Z.wireframe===!0?(wt.setLineWidth(Z.wireframeLinewidth*Nt()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(G.isLine){let It=Z.linewidth;It===void 0&&(It=1),wt.setLineWidth(It*Nt()),G.isLineSegments?Jt.setMode(U.LINES):G.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else G.isPoints?Jt.setMode(U.POINTS):G.isSprite&&Jt.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Jt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const It=G._multiDrawStarts,Ae=G._multiDrawCounts,Qt=G._multiDrawCount,on=Rt?nt.get(Rt).bytesPerElement:1,Ti=Ct.get(Z).currentProgram.getUniforms();for(let $e=0;$e<Qt;$e++)Ti.setValue(U,"_gl_DrawID",$e),Jt.render(It[$e]/on,Ae[$e])}else if(G.isInstancedMesh)Jt.renderInstances(ee,he,G.count);else if(j.isInstancedBufferGeometry){const It=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ae=Math.min(j.instanceCount,It);Jt.renderInstances(ee,he,Ae)}else Jt.render(ee,he)};function Kt(A,V,j){A.transparent===!0&&A.side===Un&&A.forceSinglePass===!1?(A.side=Xe,A.needsUpdate=!0,Os(A,V,j),A.side=ei,A.needsUpdate=!0,Os(A,V,j),A.side=Un):Os(A,V,j)}this.compile=function(A,V,j=null){j===null&&(j=A),f=ut.get(j),f.init(V),M.push(f),j.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const Z=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const mt=G.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const At=mt[Et];Kt(At,j,G),Z.add(At)}else Kt(mt,j,G),Z.add(mt)}),M.pop(),f=null,Z},this.compileAsync=function(A,V,j=null){const Z=this.compile(A,V,j);return new Promise(G=>{function mt(){if(Z.forEach(function(Et){Ct.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){G(A);return}setTimeout(mt,10)}Tt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let we=null;function Ce(A){we&&we(A)}function ri(){oi.stop()}function ml(){oi.start()}const oi=new Lu;oi.setAnimationLoop(Ce),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(A){we=A,K.setAnimationLoop(A),A===null?oi.stop():oi.start()},K.addEventListener("sessionstart",ri),K.addEventListener("sessionend",ml),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(V),V=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,T),f=ut.get(A,M.length),f.init(V),M.push(f),dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Mt.setFromProjectionMatrix(dt),Q=this.localClippingEnabled,q=it.init(this.clippingPlanes,Q),_=$.get(A,m.length),_.init(),m.push(_),K.enabled===!0&&K.isPresenting===!0){const mt=v.xr.getDepthSensingMesh();mt!==null&&Gr(mt,V,-1/0,v.sortObjects)}Gr(A,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,J),zt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,zt&&at.addToRenderList(_,A),this.info.render.frame++,q===!0&&it.beginShadows();const j=f.state.shadowsArray;ct.render(j,A,V),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,G=_.transmissive;if(f.setupLights(),V.isArrayCamera){const mt=V.cameras;if(G.length>0)for(let Et=0,At=mt.length;Et<At;Et++){const Rt=mt[Et];_l(Z,G,A,Rt)}zt&&at.render(A);for(let Et=0,At=mt.length;Et<At;Et++){const Rt=mt[Et];gl(_,A,Rt,Rt.viewport)}}else G.length>0&&_l(Z,G,A,V),zt&&at.render(A),gl(_,A,V);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,V),Zt.resetDefaultState(),w=-1,R=null,M.pop(),M.length>0?(f=M[M.length-1],q===!0&&it.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Gr(A,V,j,Z){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Mt.intersectsSprite(A)){Z&&bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const Et=tt.update(A),At=A.material;At.visible&&_.push(A,Et,At,j,bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Mt.intersectsObject(A))){const Et=tt.update(A),At=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),bt.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),bt.copy(Et.boundingSphere.center)),bt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(At)){const Rt=Et.groups;for(let Ht=0,kt=Rt.length;Ht<kt;Ht++){const Lt=Rt[Ht],ee=At[Lt.materialIndex];ee&&ee.visible&&_.push(A,Et,ee,j,bt.z,Lt)}}else At.visible&&_.push(A,Et,At,j,bt.z,null)}}const mt=A.children;for(let Et=0,At=mt.length;Et<At;Et++)Gr(mt[Et],V,j,Z)}function gl(A,V,j,Z){const G=A.opaque,mt=A.transmissive,Et=A.transparent;f.setupLightsView(j),q===!0&&it.setGlobalState(v.clippingPlanes,j),Z&&wt.viewport(x.copy(Z)),G.length>0&&Ns(G,V,j),mt.length>0&&Ns(mt,V,j),Et.length>0&&Ns(Et,V,j),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function _l(A,V,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new vn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?Bn:zn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const mt=f.state.transmissionRenderTarget[Z.id],Et=Z.viewport||x;mt.setSize(Et.z,Et.w);const At=v.getRenderTarget();v.setRenderTarget(mt),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),zt&&at.render(j);const Rt=v.toneMapping;v.toneMapping=Jn;const Ht=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),q===!0&&it.setGlobalState(v.clippingPlanes,Z),Ns(A,j,Z),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,ee=V.length;Lt<ee;Lt++){const re=V[Lt],he=re.object,Ye=re.geometry,Jt=re.material,It=re.group;if(Jt.side===Un&&he.layers.test(Z.layers)){const Ae=Jt.side;Jt.side=Xe,Jt.needsUpdate=!0,vl(he,j,Z,Ye,Jt,It),Jt.side=Ae,Jt.needsUpdate=!0,kt=!0}}kt===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}v.setRenderTarget(At),v.setClearColor(N,B),Ht!==void 0&&(Z.viewport=Ht),v.toneMapping=Rt}function Ns(A,V,j){const Z=V.isScene===!0?V.overrideMaterial:null;for(let G=0,mt=A.length;G<mt;G++){const Et=A[G],At=Et.object,Rt=Et.geometry,Ht=Z===null?Et.material:Z,kt=Et.group;At.layers.test(j.layers)&&vl(At,V,j,Rt,Ht,kt)}}function vl(A,V,j,Z,G,mt){A.onBeforeRender(v,V,j,Z,G,mt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,V,j,Z,A,mt),G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=Xe,G.needsUpdate=!0,v.renderBufferDirect(j,V,Z,G,A,mt),G.side=ei,G.needsUpdate=!0,v.renderBufferDirect(j,V,Z,G,A,mt),G.side=Un):v.renderBufferDirect(j,V,Z,G,A,mt),A.onAfterRender(v,V,j,Z,G,mt)}function Os(A,V,j){V.isScene!==!0&&(V=Ut);const Z=Ct.get(A),G=f.state.lights,mt=f.state.shadowsArray,Et=G.state.version,At=Y.getParameters(A,G.state,mt,V,j),Rt=Y.getProgramCacheKey(At);let Ht=Z.programs;Z.environment=A.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(A.isMeshStandardMaterial?X:E).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",$t),Ht=new Map,Z.programs=Ht);let kt=Ht.get(Rt);if(kt!==void 0){if(Z.currentProgram===kt&&Z.lightsStateVersion===Et)return Ml(A,At),kt}else At.uniforms=Y.getUniforms(A),A.onBeforeCompile(At,v),kt=Y.acquireProgram(At,Rt),Ht.set(Rt,kt),Z.uniforms=At.uniforms;const Lt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=it.uniform),Ml(A,At),Z.needsLights=yh(A),Z.lightsStateVersion=Et,Z.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.directionalShadowMap.value=G.state.directionalShadowMap,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotShadowMap.value=G.state.spotShadowMap,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMap.value=G.state.pointShadowMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=kt,Z.uniformsList=null,kt}function xl(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Mr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ml(A,V){const j=Ct.get(A);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function xh(A,V,j,Z,G){V.isScene!==!0&&(V=Ut),P.resetTextureUnits();const mt=V.fog,Et=Z.isMeshStandardMaterial?V.environment:null,At=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ii,Rt=(Z.isMeshStandardMaterial?X:E).get(Z.envMap||Et),Ht=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,kt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Lt=!!j.morphAttributes.position,ee=!!j.morphAttributes.normal,re=!!j.morphAttributes.color;let he=Jn;Z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(he=v.toneMapping);const Ye=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Jt=Ye!==void 0?Ye.length:0,It=Ct.get(Z),Ae=f.state.lights;if(q===!0&&(Q===!0||A!==R)){const Qe=A===R&&Z.id===w;it.setState(Z,A,Qe)}let Qt=!1;Z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ae.state.version||It.outputColorSpace!==At||G.isBatchedMesh&&It.batching===!1||!G.isBatchedMesh&&It.batching===!0||G.isBatchedMesh&&It.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&It.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&It.instancing===!1||!G.isInstancedMesh&&It.instancing===!0||G.isSkinnedMesh&&It.skinning===!1||!G.isSkinnedMesh&&It.skinning===!0||G.isInstancedMesh&&It.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&It.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&It.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&It.instancingMorph===!1&&G.morphTexture!==null||It.envMap!==Rt||Z.fog===!0&&It.fog!==mt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==it.numPlanes||It.numIntersection!==it.numIntersection)||It.vertexAlphas!==Ht||It.vertexTangents!==kt||It.morphTargets!==Lt||It.morphNormals!==ee||It.morphColors!==re||It.toneMapping!==he||It.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,It.__version=Z.version);let on=It.currentProgram;Qt===!0&&(on=Os(Z,V,G));let Ti=!1,$e=!1,Wr=!1;const fe=on.getUniforms(),Hn=It.uniforms;if(wt.useProgram(on.program)&&(Ti=!0,$e=!0,Wr=!0),Z.id!==w&&(w=Z.id,$e=!0),Ti||R!==A){Bt.reverseDepthBuffer?(pt.copy(A.projectionMatrix),md(pt),gd(pt),fe.setValue(U,"projectionMatrix",pt)):fe.setValue(U,"projectionMatrix",A.projectionMatrix),fe.setValue(U,"viewMatrix",A.matrixWorldInverse);const Qe=fe.map.cameraPosition;Qe!==void 0&&Qe.setValue(U,_t.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&fe.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,$e=!0,Wr=!0)}if(G.isSkinnedMesh){fe.setOptional(U,G,"bindMatrix"),fe.setOptional(U,G,"bindMatrixInverse");const Qe=G.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),fe.setValue(U,"boneTexture",Qe.boneTexture,P))}G.isBatchedMesh&&(fe.setOptional(U,G,"batchingTexture"),fe.setValue(U,"batchingTexture",G._matricesTexture,P),fe.setOptional(U,G,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",G._indirectTexture,P),fe.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",G._colorsTexture,P));const Xr=j.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&ot.update(G,j,on),($e||It.receiveShadow!==G.receiveShadow)&&(It.receiveShadow=G.receiveShadow,fe.setValue(U,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Hn.envMap.value=Rt,Hn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(Hn.envMapIntensity.value=V.environmentIntensity),$e&&(fe.setValue(U,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&Mh(Hn,Wr),mt&&Z.fog===!0&&O.refreshFogUniforms(Hn,mt),O.refreshMaterialUniforms(Hn,Z,W,D,f.state.transmissionRenderTarget[A.id]),Mr.upload(U,xl(It),Hn,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Mr.upload(U,xl(It),Hn,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&fe.setValue(U,"center",G.center),fe.setValue(U,"modelViewMatrix",G.modelViewMatrix),fe.setValue(U,"normalMatrix",G.normalMatrix),fe.setValue(U,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Qe=Z.uniformsGroups;for(let Yr=0,Sh=Qe.length;Yr<Sh;Yr++){const yl=Qe[Yr];k.update(yl,on),k.bind(yl,on)}}return on}function Mh(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function yh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,V,j){Ct.get(A.texture).__webglTexture=V,Ct.get(A.depthTexture).__webglTexture=j;const Z=Ct.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const j=Ct.get(A);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,j=0){T=A,C=V,b=j;let Z=!0,G=null,mt=!1,Et=!1;if(A){const Rt=Ct.get(A);if(Rt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(Rt.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Rt.__hasExternalTextures)P.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&Ct.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const kt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[V])?G=kt[V][j]:G=kt[V],mt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?G=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[j]:G=kt,x.copy(A.viewport),y.copy(A.scissor),L=A.scissorTest}else x.copy(et).multiplyScalar(W).floor(),y.copy(ht).multiplyScalar(W).floor(),L=gt;if(wt.bindFramebuffer(U.FRAMEBUFFER,G)&&Z&&wt.drawBuffers(A,G),wt.viewport(x),wt.scissor(y),wt.setScissorTest(L),mt){const Rt=Ct.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,j)}else if(Et){const Rt=Ct.get(A.texture),Ht=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.__webglTexture,j||0,Ht)}w=-1},this.readRenderTargetPixels=function(A,V,j,Z,G,mt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){wt.bindFramebuffer(U.FRAMEBUFFER,At);try{const Rt=A.texture,Ht=Rt.format,kt=Rt.type;if(!Bt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Z&&j>=0&&j<=A.height-G&&U.readPixels(V,j,Z,G,Ot.convert(Ht),Ot.convert(kt),mt)}finally{const Rt=T!==null?Ct.get(T).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,V,j,Z,G,mt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){const Rt=A.texture,Ht=Rt.format,kt=Rt.type;if(!Bt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-Z&&j>=0&&j<=A.height-G){wt.bindFramebuffer(U.FRAMEBUFFER,At);const Lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Lt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(V,j,Z,G,Ot.convert(Ht),Ot.convert(kt),0);const ee=T!==null?Ct.get(T).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,ee);const re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pd(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt),U.deleteBuffer(Lt),U.deleteSync(re),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,j=0){A.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-j),G=Math.floor(A.image.width*Z),mt=Math.floor(A.image.height*Z),Et=V!==null?V.x:0,At=V!==null?V.y:0;P.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Et,At,G,mt),wt.unbindTexture()},this.copyTextureToTexture=function(A,V,j=null,Z=null,G=0){A.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,j=null);let mt,Et,At,Rt,Ht,kt;j!==null?(mt=j.max.x-j.min.x,Et=j.max.y-j.min.y,At=j.min.x,Rt=j.min.y):(mt=A.image.width,Et=A.image.height,At=0,Rt=0),Z!==null?(Ht=Z.x,kt=Z.y):(Ht=0,kt=0);const Lt=Ot.convert(V.format),ee=Ot.convert(V.type);P.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const re=U.getParameter(U.UNPACK_ROW_LENGTH),he=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ye=U.getParameter(U.UNPACK_SKIP_PIXELS),Jt=U.getParameter(U.UNPACK_SKIP_ROWS),It=U.getParameter(U.UNPACK_SKIP_IMAGES),Ae=A.isCompressedTexture?A.mipmaps[G]:A.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,Rt),A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,Ht,kt,mt,Et,Lt,ee,Ae.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,Ht,kt,Ae.width,Ae.height,Lt,Ae.data):U.texSubImage2D(U.TEXTURE_2D,G,Ht,kt,mt,Et,Lt,ee,Ae),U.pixelStorei(U.UNPACK_ROW_LENGTH,re),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It),G===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,V,j=null,Z=null,G=0){A.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0);let mt,Et,At,Rt,Ht,kt,Lt,ee,re;const he=A.isCompressedTexture?A.mipmaps[G]:A.image;j!==null?(mt=j.max.x-j.min.x,Et=j.max.y-j.min.y,At=j.max.z-j.min.z,Rt=j.min.x,Ht=j.min.y,kt=j.min.z):(mt=he.width,Et=he.height,At=he.depth,Rt=0,Ht=0,kt=0),Z!==null?(Lt=Z.x,ee=Z.y,re=Z.z):(Lt=0,ee=0,re=0);const Ye=Ot.convert(V.format),Jt=Ot.convert(V.type);let It;if(V.isData3DTexture)P.setTexture3D(V,0),It=U.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)P.setTexture2DArray(V,0),It=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const Ae=U.getParameter(U.UNPACK_ROW_LENGTH),Qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),on=U.getParameter(U.UNPACK_SKIP_PIXELS),Ti=U.getParameter(U.UNPACK_SKIP_ROWS),$e=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kt),A.isDataTexture||A.isData3DTexture?U.texSubImage3D(It,G,Lt,ee,re,mt,Et,At,Ye,Jt,he.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(It,G,Lt,ee,re,mt,Et,At,Ye,he.data):U.texSubImage3D(It,G,Lt,ee,re,mt,Et,At,Ye,Jt,he),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ae),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,on),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ti),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e),G===0&&V.generateMipmaps&&U.generateMipmap(It),wt.unbindTexture()},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){C=0,b=0,T=null,wt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ja?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===zr?"display-p3":"srgb"}}class il{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Bu extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class T0 extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,u=Ge,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa extends Je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ki=new se,pc=new se,sr=[],mc=new bi,w0=new se,ps=new ae,ms=new os;class Pr extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,w0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),mc.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),ms.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),t.ray.intersectsSphere(ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),pc.multiplyMatrices(n,ki),ps.matrixWorld=pc,ps.raycast(t,sr);for(let o=0,a=sr.length;o<a;o++){const l=sr[o];l.instanceId=r,l.object=this,e.push(l)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new T0(new Float32Array(s*this.count),s,this.count,qa,Sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zu extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lr=new F,Ir=new F,gc=new se,gs=new Qa,rr=new os,bo=new F,_c=new F;class C0 extends Ee{constructor(t=new Be,e=new zu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lr.fromBufferAttribute(e,s-1),Ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lr.distanceTo(Ir);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;gc.copy(s).invert(),gs.copy(t.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,f=g-1;_<f;_+=c){const m=u.getX(_),M=u.getX(_+1),v=or(this,t,gs,l,m,M);v&&e.push(v)}if(this.isLineLoop){const _=u.getX(g-1),f=u.getX(p),m=or(this,t,gs,l,_,f);m&&e.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,f=g-1;_<f;_+=c){const m=or(this,t,gs,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=or(this,t,gs,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function or(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Lr.fromBufferAttribute(o,s),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Lr,Ir,bo,_c)>n)return;bo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(bo);if(!(l<t.near||l>t.far))return{distance:l,point:_c.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const vc=new F,xc=new F;class R0 extends C0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)vc.fromBufferAttribute(e,s),xc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vc.distanceTo(xc);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ni extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const _=[],f=n/2;let m=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2));function M(){const S=new F,C=new F;let b=0;const T=(e-t)/n;for(let w=0;w<=r;w++){const R=[],x=w/r,y=x*(e-t)+t;for(let L=0;L<=s;L++){const N=L/s,B=N*l+a,I=Math.sin(B),D=Math.cos(B);C.x=y*I,C.y=-x*n+f,C.z=y*D,h.push(C.x,C.y,C.z),S.set(I,T,D).normalize(),d.push(S.x,S.y,S.z),p.push(N,1-x),R.push(g++)}_.push(R)}for(let w=0;w<s;w++)for(let R=0;R<r;R++){const x=_[R][w],y=_[R+1][w],L=_[R+1][w+1],N=_[R][w+1];t>0&&(u.push(x,y,N),b+=3),e>0&&(u.push(y,L,N),b+=3)}c.addGroup(m,b,0),m+=b}function v(S){const C=g,b=new Pt,T=new F;let w=0;const R=S===!0?t:e,x=S===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,f*x,0),d.push(0,x,0),p.push(.5,.5),g++;const y=g;for(let L=0;L<=s;L++){const B=L/s*l+a,I=Math.cos(B),D=Math.sin(B);T.x=R*D,T.y=f*x,T.z=R*I,h.push(T.x,T.y,T.z),d.push(0,x,0),b.x=I*.5+.5,b.y=D*.5*x+.5,p.push(b.x,b.y),g++}for(let L=0;L<s;L++){const N=C+L,B=y+L;S===!0?u.push(B,B+1,N):u.push(B+1,B,N),w+=3}c.addGroup(m,w,S===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sl extends ni{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new sl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rl extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new F,S=new F,C=new F;for(let b=0;b<e.length;b+=3)p(e[b+0],v),p(e[b+1],S),p(e[b+2],C),l(v,S,C,M)}function l(M,v,S,C){const b=C+1,T=[];for(let w=0;w<=b;w++){T[w]=[];const R=M.clone().lerp(S,w/b),x=v.clone().lerp(S,w/b),y=b-w;for(let L=0;L<=y;L++)L===0&&w===b?T[w][L]=R:T[w][L]=R.clone().lerp(x,L/y)}for(let w=0;w<b;w++)for(let R=0;R<2*(b-w)-1;R++){const x=Math.floor(R/2);R%2===0?(d(T[w][x+1]),d(T[w+1][x]),d(T[w][x])):(d(T[w][x+1]),d(T[w+1][x+1]),d(T[w+1][x]))}}function c(M){const v=new F;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(M),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function u(){const M=new F;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const S=f(M)/2/Math.PI+.5,C=m(M)/Math.PI+.5;o.push(S,1-C)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const v=o[M+0],S=o[M+2],C=o[M+4],b=Math.max(v,S,C),T=Math.min(v,S,C);b>.9&&T<.1&&(v<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function p(M,v){const S=M*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const M=new F,v=new F,S=new F,C=new F,b=new Pt,T=new Pt,w=new Pt;for(let R=0,x=0;R<r.length;R+=9,x+=6){M.set(r[R+0],r[R+1],r[R+2]),v.set(r[R+3],r[R+4],r[R+5]),S.set(r[R+6],r[R+7],r[R+8]),b.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),w.set(o[x+4],o[x+5]),C.copy(M).add(v).add(S).divideScalar(3);const y=f(C);_(b,x+0,M,y),_(T,x+2,v,y),_(w,x+4,S,y)}}function _(M,v,S,C){C<0&&M.x===1&&(o[v]=M.x-1),S.x===0&&S.z===0&&(o[v]=C/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.vertices,t.indices,t.radius,t.details)}}class ol extends rl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ol(t.radius,t.detail)}}class Dr extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,d=new F,p=[],g=[],_=[],f=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let C=0;C<=e;C++){const b=C/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),f.push(b+S,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=u[m][M+1],S=u[m][M],C=u[m+1][M],b=u[m+1][M+1];(m!==0||o>0)&&p.push(v,S,b),(m!==n-1||l<Math.PI)&&p.push(S,C,b)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ur extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new F,h=new F,d=new F;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,f=p/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(_),h.y=(t+e*Math.cos(f))*Math.sin(_),h.z=e*Math.sin(f),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(_,f,M),o.push(f,m,M)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class P0 extends Ai{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Vt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class ti extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class al extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ao=new se,Mc=new F,yc=new F;class Hu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sc=new se,_s=new F,To=new F;class L0 extends Hu{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(t.matrixWorld),n.position.copy(_s),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}}class ku extends al{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new L0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class I0 extends Hu{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fa extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vu extends al{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class D0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ec(){return performance.now()}class bc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ue(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class U0 extends R0{constructor(t=10,e=10,n=4473924,s=8947848){n=new Vt(n),s=new Vt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new Be;u.setAttribute("position",new le(l,3)),u.setAttribute("color",new le(c,3));const h=new zu({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class N0 extends Ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const Ac={type:"change"},ll={type:"start"},Gu={type:"end"},ar=new Qa,Tc=new qn,O0=Math.cos(70*dd.DEG2RAD),ge=new F,He=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wo=1e-6;class F0 extends N0{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Si,this._lastTargetPosition=new F,this._quat=new Si().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bc,this._sphericalDelta=new bc,this._scale=1,this._panOffset=new F,this._rotateStart=new Pt,this._rotateEnd=new Pt,this._rotateDelta=new Pt,this._panStart=new Pt,this._panEnd=new Pt,this._panDelta=new Pt,this._dollyStart=new Pt,this._dollyEnd=new Pt,this._dollyDelta=new Pt,this._dollyDirection=new F,this._mouse=new Pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z0.bind(this),this._onPointerDown=B0.bind(this),this._onPointerUp=H0.bind(this),this._onContextMenu=$0.bind(this),this._onMouseWheel=G0.bind(this),this._onKeyDown=W0.bind(this),this._onTouchStart=X0.bind(this),this._onTouchMove=Y0.bind(this),this._onMouseDown=k0.bind(this),this._onMouseMove=V0.bind(this),this._interceptControlDown=q0.bind(this),this._interceptControlUp=j0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ac),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=He:n>Math.PI&&(n-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ar.origin.copy(this.object.position),ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ar.direction))<O0?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ar.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wo||this._lastTargetPosition.distanceToSquared(this.target)>wo?(this.dispatchEvent(Ac),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function B0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function z0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function H0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gu),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function k0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case Yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case Yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(ll)}function V0(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function G0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(ll),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gu))}function W0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function X0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(ll)}function Y0(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function $0(i){this.enabled!==!1&&i.preventDefault()}function q0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function j0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ls{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K0=new el(-1,1,1,-1,0,1);class Z0 extends Be{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const J0=new Z0;class Xu{constructor(t){this._mesh=new ae(J0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,K0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Q0 extends Ls{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rr.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wc extends Ls{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class t_ extends Ls{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class e_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Pt);this._width=n.width,this._height=n.height,e=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Q0(Wu),this.copyPass.material.blending=Fn,this.clock=new D0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wc!==void 0&&(o instanceof wc?n=!0:o instanceof t_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class n_ extends Ls{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const i_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class rs extends Ls{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Pt(t.x,t.y):new Pt(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(r,o,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new vn(r,o,{type:Bn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new vn(r,o,{type:Bn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=i_;this.highPassUniforms=Rr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Wu;this.copyUniforms=Rr.clone(u.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:$o,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new Hr,this.fsQuad=new Xu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=rs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=rs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Pt(.5,.5)},direction:{value:new Pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}rs.BlurDirectionX=new Pt(1,0);rs.BlurDirectionY=new Pt(0,1);function s_(i){const t=new Bu;t.background=new Vt(197898),t.fog=new il(197898,.018);const e=new Ve(55,window.innerWidth/window.innerHeight,.1,200);e.position.set(0,6,26),e.lookAt(0,0,0);const n=new Fu({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=ou,n.toneMapping=lu,n.toneMappingExposure=1.1,n.outputColorSpace=dn,i.appendChild(n.domElement);const s=new U0(60,60,1732520,797501);s.position.y=-13,s.material.opacity=.35,s.material.transparent=!0,t.add(s);const r=new ae(new Ps(120,120),new P0({opacity:.45}));r.rotation.x=-Math.PI/2,r.position.y=-13,r.receiveShadow=!0,t.add(r);const o=new Vu(1849938,1.2);t.add(o);const a=new ku(4973567,2.2,60);a.position.set(0,10,10),t.add(a);const l=new Fa(16777215,1.4);l.position.set(14,22,10),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-22,l.shadow.camera.right=22,l.shadow.camera.top=22,l.shadow.camera.bottom=-22,l.shadow.camera.near=1,l.shadow.camera.far=60,l.shadow.bias=-.0015,t.add(l);const c=new F0(e,n.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.minDistance=6,c.maxDistance=80,c.target.set(0,0,0);const u=new e_(n);u.addPass(new n_(t,e));const h=new rs(new Pt(window.innerWidth,window.innerHeight),.55,.4,.35);return u.addPass(h),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)}),{scene:t,camera:e,renderer:n,composer:u,controls:c}}const si=5.5,nn=[4,2,4],r_=2.5,z=si;function Ie(i,t){return i+Math.random()*(t-i)}function Dt(i,t){const e=t.reduce((a,l)=>a+l,0),n=t.map(a=>a/e*i),s=n.map(a=>Math.floor(a)),r=i-s.reduce((a,l)=>a+l,0),o=n.map((a,l)=>({i:l,frac:a-s[l]})).sort((a,l)=>l.frac-a.frac);for(let a=0;a<r;a++)s[o[a%o.length].i]++;return s}function Se(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=r%6,a=Ie(-1,1),l=Ie(-1,1);let c=0,u=0,h=0;switch(o){case 0:c=i,u=a*t,h=l*e;break;case 1:c=-i,u=a*t,h=l*e;break;case 2:u=t,c=a*i,h=l*e;break;case 3:u=-t,c=a*i,h=l*e;break;case 4:h=e,c=a*i,u=l*t;break;default:h=-e,c=a*i,u=l*t;break}s[r*3]=c,s[r*3+1]=u,s[r*3+2]=h}return s}function Xt(i,t){const e=new Float32Array(t*3),n=Math.PI*(3-Math.sqrt(5));for(let s=0;s<t;s++){const r=t>1?1-s/(t-1)*2:0,o=Math.sqrt(Math.max(0,1-r*r)),a=n*s;e[s*3]=Math.cos(a)*o*i,e[s*3+1]=r*i,e[s*3+2]=Math.sin(a)*o*i}return e}function o_(i,t,e,n){const s=new Float32Array(t*3),r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<t;o++){const a=t>1?o/(t-1):0,l=n-a*(n-e),c=Math.sqrt(Math.max(0,1-l*l)),u=r*o;s[o*3]=Math.cos(u)*c*i,s[o*3+1]=l*i,s[o*3+2]=Math.sin(u)*c*i}return s}function $n(i,t,e,n,s,r,o){const a=Math.sqrt(e*e+n*n+s*s)||1,l=e/a,c=n/a,u=s/a;for(let h=0;h<t;h++){const d=i[h*3],p=i[h*3+1],g=i[h*3+2],_=Math.sqrt(d*d+p*p+g*g)||1;(d*l+p*c+g*u)/_<r||(i[h*3]=d*o,i[h*3+1]=p*o,i[h*3+2]=g*o)}}function Co(i,t,e){const n=new Float32Array(e*3);for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2;if(Math.random()<.15){const o=i*Math.sqrt(Math.random()),a=Math.random()<.5?t:-t;n[s*3]=Math.cos(r)*o,n[s*3+1]=a,n[s*3+2]=Math.sin(r)*o}else n[s*3]=Math.cos(r)*i,n[s*3+1]=Ie(-t,t),n[s*3+2]=Math.sin(r)*i}return n}function ce(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2;if(Math.random()<.15){const a=Math.random()<.5,c=(a?i:t)*Math.sqrt(Math.random()),u=a?e:-e;s[r*3]=Math.cos(o)*c,s[r*3+1]=u,s[r*3+2]=Math.sin(o)*c}else{const a=Ie(-e,e),l=(a+e)/(2*e||1),c=t+(i-t)*l;s[r*3]=Math.cos(o)*c,s[r*3+1]=a,s[r*3+2]=Math.sin(o)*c}}return s}function ke(i,t,e,n){const s=e/2,[r,o,a,l]=Dt(n,[12,38,38,12]),c=lt(Xt(t,r),0,-e,0),u=lt(ce(i,t,s,o),0,-s,0),h=lt(ce(t,i,s,a),0,s,0),d=lt(Xt(t,l),0,e,0);return xe([c,u,h,d])}function En(i,t,e){const n=new Float32Array(t*3);if(i.length<2||t<=0)return n;const s=i.length-1,r=[];for(let l=0;l<s;l++){const[c,u,h]=i[l],[d,p,g]=i[l+1];r.push(Math.hypot(d-c,p-u,g-h)||1e-6)}const o=Dt(t,r);let a=0;for(let l=0;l<s;l++){const[c,u,h]=i[l],[d,p,g]=i[l+1],_=o[l];for(let f=0;f<_;f++){const m=Math.random();n[a*3]=c+(d-c)*m+Ie(-e,e),n[a*3+1]=u+(p-u)*m+Ie(-e,e),n[a*3+2]=h+(g-h)*m+Ie(-e,e),a++}}return n}function mn(i,t,e){const n=new Float32Array(i.length);n.set(i);for(let s=t;s<n.length;s+=3)n[s]*=e;return n}function lt(i,t,e,n){const s=new Float32Array(i.length);for(let r=0;r<i.length;r+=3)s[r]=i[r]+t,s[r+1]=i[r+1]+e,s[r+2]=i[r+2]+n;return s}function Nr(i){const t=new Float32Array(i.length);for(let e=0;e<i.length;e+=3)t[e]=i[e+1],t[e+1]=-i[e],t[e+2]=i[e+2];return t}function xe(i){const t=i.reduce((s,r)=>s+r.length,0),e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function Is(){const i=z*.5,t=z*.24,e=z*.16,n=e+i*.9,s=i*.78;return{headR:i,neckR:t,neckHalfH:e,headCenterY:n,skullR:s}}function a_(i){const{headR:t,neckR:e,neckHalfH:n,headCenterY:s}=Is(),r=t*.62,o=s-t*.55,a=t*.22,l=s-t*.05,c=t*.14,u=s-t*.05,[h,d,p,g,_]=Dt(i,[44,22,10,8,16]),[f,m]=Dt(p,[1,1]),M=lt(mn(Xt(t,h),2,.86),0,s,0),v=lt(mn(Xt(r,d),2,.8),0,o,t*.1),S=[lt(mn(Xt(a,f),0,.35),-t*.92,l,0),lt(mn(Xt(a,m),0,.35),t*.92,l,0)],C=lt(mn(Xt(c,g),1,.7),0,u,t*.88),b=lt(ce(e,e*1.15,n,_),0,0,0);return xe([M,v,...S,C,b])}function l_(i){const{headR:t,headCenterY:e}=Is(),[n,s]=Dt(i,[88,12]),[r,o]=Dt(s,[1,1]),a=lt(mn(o_(t*1.04,n,.34,1),2,.88),0,e,0),l=e+t*.18,c=t*.84,u=t*.16,h=[En([[-t*.42,l,c],[-t*.42+u,l+t*.02,c]],r,t*.015),En([[t*.42-u,l+t*.02,c],[t*.42,l,c]],o,t*.015)];return xe([a,...h])}function c_(i){const{headR:t,headCenterY:e}=Is(),n=t*.1,s=e+t*.08,r=t*.36,o=t*.82,[a,l]=Dt(i,[1,1]);return xe([lt(Xt(n,a),-r,s,o),lt(Xt(n,l),r,s,o)])}function u_(i){const{headR:t,headCenterY:e}=Is(),n=e-t*.42,s=t*.85,r=t*.22;return En([[-r,n,s],[0,n-t*.02,s*1.01],[r,n,s]],i,t*.03)}const Ba=[{name:"piel",generator:a_,weight:.55,color:14394745},{name:"cabello",generator:l_,weight:.28,color:2824978},{name:"ojos",generator:c_,weight:.07,color:4139546},{name:"labios",generator:u_,weight:.1,color:11620938}];function h_(i){const t=Dt(i,Ba.map(e=>e.weight));return xe(Ba.map((e,n)=>e.generator(t[n])))}function d_(i){const t=z*.62,e=z*.42,n=z*.55,s=z*.48,r=z*.26,o=z*.34,a=z*.14,l=0,c=l-r,u=l+n,h=u+n,d=t*.95,[p,g,_]=Dt(i,[55,30,15]),[f,m]=Dt(_,[1,1]),M=lt(ce(t,e,n,p),0,u,0),v=lt(Se(s,r,o,g),0,c,0),S=[lt(Xt(a,f),-d,h,0),lt(Xt(a,m),d,h,0)];return xe([M,v,...S])}function f_(i){const t=z*.22,e=z*.26,n=z*.19,s=z*.6,r=z*.16,o=z*.18,a=z*.12,l=z*.55,c=z*.15,u=z*.2,h=z*.06,d=z*.035,p=z*.15,g=0,_=g-s,f=g-s*2,m=f-l,M=f-l*2,v=M-u,C=M-u*2-p,[b,T,w,R,x,y]=Dt(i,[6,24,4,20,16,30]),L=Dt(y,[1,1,1,1,1]),N=lt(Xt(t,b),0,g,0),B=lt(ce(e,n,s,T),0,_,0),I=lt(Xt(r,w),0,f,0),D=lt(ce(o,a,l,R),0,m,0),W=lt(Se(c,u,h,x),0,v,0),J=[-2,-1,0,1,2].map((et,ht)=>lt(ce(d,d*1.3,p,L[ht]),et*c*.4,C,0));return Nr(xe([N,B,I,D,W,...J]))}function p_(i){const t=z*.24,e=z*.3,n=z*.2,s=z*.65,r=z*.18,o=z*.2,a=z*.13,l=z*.62,c=z*.16,u=z*.09,h=z*.36,d=z*.04,p=z*.09,g=0,_=g-s,f=g-s*2,m=f-l,v=f-l*2-u,[S,C,b,T,w,R]=Dt(i,[6,26,4,22,22,20]),x=Dt(R,[1,1,1,1,1]),y=lt(Xt(t,S),0,g,0),L=lt(ce(e,n,s,C),0,_,0),N=lt(Xt(r,b),0,f,0),B=lt(ce(o,a,l,T),0,m,0),I=lt(Se(c,u,h,w),0,v,h*.5),W=[-.6,-.3,0,.3,.6].map((H,J)=>lt(Se(d,d,p,x[J]),H*c,v,h+p));return xe([y,L,N,B,I,...W])}function m_(i){const t=z*.22,e=z*.18,n=z*.42,s=z*.5,r=z*.16,o=z*.07,a=z*.05,l=[.55,.72,.78,.7,.5],c=[-.85,-.45,0,.45,.85],u=0,h=u-e-s,d=h-s,[p,g,_]=Dt(i,[10,35,55]),f=Dt(_,[.9,1,1.1,1,.8]),m=lt(ce(t,t*1.1,e,p),0,u,0),M=lt(Se(n,s,r,g),0,h,0),v=c.map((S,C)=>{const b=z*l[C]*.5;return lt(ce(o,a,b,f[C]),S*n,d-b,0)});return xe([m,M,...v])}function g_(i){const t=z*.24,e=z*.2,n=z*.34,s=z*.22,r=z*.75,o=z*.09,a=[.75,1,.95,.85,.7],l=[-.65,-.3,0,.3,.65],c=0,u=c-e-s,h=r*.3+r,[d,p,g]=Dt(i,[10,55,35]),_=Dt(g,[1,1,1,1,1]),f=lt(ce(t,t*1.1,e,d),0,c,0),m=lt(Se(n,s,r,p),0,u,r*.3),M=l.map((v,S)=>{const C=z*.16*a[S];return lt(Se(o,o,C,_[S]),v*n,u,h+C)});return xe([f,m,...M])}function __(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=e%6,s=Ie(-z,z),r=Ie(-z,z);let o=0,a=0,l=0;switch(n){case 0:o=z,a=s,l=r;break;case 1:o=-z,a=s,l=r;break;case 2:a=z,o=s,l=r;break;case 3:a=-z,o=s,l=r;break;case 4:l=z,o=s,a=r;break;default:l=-z,o=s,a=r;break}t[e*3]=o,t[e*3+1]=a,t[e*3+2]=l}return t}function v_(i){const t=new Float32Array(i*3),e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n++){const s=i>1?1-n/(i-1)*2:0,r=Math.sqrt(Math.max(0,1-s*s)),o=e*n;t[n*3]=Math.cos(o)*r*z,t[n*3+1]=s*z,t[n*3+2]=Math.sin(o)*r*z}return t}function x_(i){const t=new Float32Array(i*3),e=[-z,-z,-z],n=[z,-z,-z],s=[z,-z,z],r=[-z,-z,z],o=[0,z,0],a=[[e,n,o],[n,s,o],[s,r,o],[r,e,o]],l=Math.round(i*.3);for(let c=0;c<i;c++){let u,h,d;if(c<l)u=Ie(-z,z),h=-z,d=Ie(-z,z);else{const[p,g,_]=a[(c-l)%4];let f=Math.random(),m=Math.random();f+m>1&&(f=1-f,m=1-m),u=p[0]+f*(g[0]-p[0])+m*(_[0]-p[0]),h=p[1]+f*(g[1]-p[1])+m*(_[1]-p[1]),d=p[2]+f*(g[2]-p[2])+m*(_[2]-p[2])}t[c*3]=u,t[c*3+1]=h,t[c*3+2]=d}return t}function M_(i){const t=new Float32Array(i*3),e=5,n=z,s=z*.42,r=Math.PI/e;for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,l=a%r/r,h=(Math.floor(a/r)%2===0?n+(s-n)*l:s+(n-s)*l)*Math.sqrt(Math.random());t[o*3]=Math.cos(a)*h,t[o*3+1]=Math.sin(a)*h,t[o*3+2]=Ie(-z*.12,z*.12)}return t}function y_(i){const t=new Float32Array(i*3),e=z*.75,n=z*.28;for(let s=0;s<i;s++){const r=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;t[s*3]=(e+n*Math.cos(o))*Math.cos(r),t[s*3+1]=n*Math.sin(o),t[s*3+2]=(e+n*Math.cos(o))*Math.sin(r)}return t}function S_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random()),r=16*Math.pow(Math.sin(n),3),o=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);t[e*3]=r/16*z*s,t[e*3+1]=o/16*z*s,t[e*3+2]=Ie(-z*.15,z*.15)}return t}function E_(i){const t=new Float32Array(i*3),e=z,n=z*.22;for(let s=0;s<i;s++){let r=0,o=0;for(let a=0;a<20&&(r=Ie(-e,e),o=Ie(-e,e),!(Math.abs(r)<=n||Math.abs(o)<=n));a++);t[s*3]=r,t[s*3+1]=o,t[s*3+2]=Ie(-z*.15,z*.15)}return t}function b_(i){const t=z*.62,e=z*.14,n=z*.42,s=t*.5,r=z*.3,o=z*.14,a=.35,l=z*.34,c=z*.16,u=z*.32,h=z*.16,d=z*.1,p=z*.36,g=z*.05,_=z*.08,f=z*.4,m=z*.05,M=z*.018,v=z*.34,S=z*.018,C=z*.1,b=z*.045,T=z*.03,w=z*.04,R=z*.055,x=z*.22,y=z*.1,L=t,N=-t,[B,I,D,W,H,J,et,ht,gt,Mt,q]=Dt(i,[22,10,14,6,4,5,2,2,2,20,13]),[Q,pt]=Dt(et,[1,1]),[dt,_t]=Dt(ht,[1,1]),[bt,Ut]=Dt(gt,[1,1]),zt=Dt(Mt,[1,1,1,1]),Nt=Se(t,e,n,B),U=lt(Nr(mn(ce(o,r,s,I),0,a)),s,e+r*a*.6,0),qt=lt(Se(l,c,u,D),-t*.12,e+c,0),Tt=lt(Se(h,d,p,W),N+h*.6,e+d,0),Bt=lt(Se(g,_,f,H),L+g*.7,-e*.3,0),wt=e+d*2+C*2+M,Yt=lt(Se(m,M,v,J),N+h*.4,wt,0),Ct=e+d*2,P=[lt(Co(S,C,Q),N+h*.4,Ct+C,-v*.7),lt(Co(S,C,pt),N+h*.4,Ct+C,v*.7)],E=[lt(Se(b,T,w,dt),-t*.05,e+c*1.6,-u-w),lt(Se(b,T,w,_t),-t*.05,e+c*1.6,u+w)],X=[lt(Xt(R,bt),L*.96,e*.4,-n*.7),lt(Xt(R,Ut),L*.96,e*.4,n*.7)],nt=[[-t*.55,-n*.95],[t*.55,-n*.95],[-t*.55,n*.95],[t*.55,n*.95]],rt=nt.map(([$,ut],it)=>lt(Nr(Co(x,y,zt[it])),$,-e,ut)),tt=[{pts:[[0,e+r*a,0],[L,e+o*a,0]],weight:s*2},{pts:[[N*.9,e*.3,-n*.98],[L*.9,e*.55,-n*.98]],weight:t*1.8},{pts:[[N*.9,e*.3,n*.98],[L*.9,e*.55,n*.98]],weight:t*1.8},...nt.map(([$,ut])=>({pts:[[$-x*1.3,e*.2,ut],[$,e*.75,ut],[$+x*1.3,e*.2,ut]],weight:x*2.6}))],Y=Dt(q,tt.map($=>$.weight)),O=tt.map(($,ut)=>En($.pts,Y[ut],z*.02));return xe([Nt,U,qt,Tt,Bt,Yt,...P,...E,...X,...rt,...O])}function A_(i){return Se(z*.42,z*.85,z*.09,i)}function Yu(){const i=z*.2,t=z*.09,e=z*.045,n=z*.34,s=z*.22,r=z*.28,o=z*.26,a=z*.14,l=z*.18,c=z*.07,u=z*.085,h=z*.06,d=z*.22,p=z*.06,g=z*.045,_=z*.2,f=z*.06,m=z*.14,M=z*.1,v=z*.28,S=z*.1,C=z*.07,b=z*.26,T=z*.06,w=z*.04,R=z*.14,x=0,y=x-a,L=x+r,N=L+r,B=N+e,I=B+e+i*.9,D=N,W=n*.95,H=W,J=D-d,et=D-d*2,ht=et-_,gt=et-_*2,Mt=gt-f*.8,q=o*.5,Q=x-a*2,pt=Q-v,dt=Q-v*2,_t=dt-b,bt=dt-b*2,Ut=bt-w,zt=n*.85;return{headR:i,neckR:t,neckHalfH:e,chestTopR:n,chestBottomR:s,chestHalfH:r,pelvisHx:o,pelvisHy:a,pelvisHz:l,shoulderR:c,upperArmTopR:u,upperArmBottomR:h,upperArmHalfH:d,forearmTopR:p,forearmBottomR:g,forearmHalfH:_,handR:f,thighTopR:m,thighBottomR:M,thighHalfH:v,calfTopR:S,calfBottomR:C,calfHalfH:b,footHx:T,footHy:w,footHz:R,waistY:x,pelvisCenterY:y,chestCenterY:L,chestTopY:N,neckCenterY:B,headCenterY:I,shoulderY:D,shoulderX:W,armX:H,upperArmCenterY:J,elbowY:et,forearmCenterY:ht,wristY:gt,handCenterY:Mt,hipX:q,hipY:Q,thighCenterY:pt,kneeY:dt,calfCenterY:_t,ankleY:bt,footCenterY:Ut,chestFrontZ:zt}}function T_(i){const{headR:t,neckR:e,neckHalfH:n,chestTopR:s,chestBottomR:r,chestHalfH:o,pelvisHx:a,pelvisHy:l,pelvisHz:c,shoulderR:u,upperArmTopR:h,upperArmBottomR:d,upperArmHalfH:p,forearmTopR:g,forearmBottomR:_,forearmHalfH:f,handR:m,thighTopR:M,thighBottomR:v,thighHalfH:S,calfTopR:C,calfBottomR:b,calfHalfH:T,footHx:w,footHy:R,footHz:x,chestCenterY:y,chestTopY:L,neckCenterY:N,headCenterY:B,shoulderY:I,shoulderX:D,armX:W,upperArmCenterY:H,forearmCenterY:J,handCenterY:et,hipX:ht,thighCenterY:gt,calfCenterY:Mt,footCenterY:q,chestFrontZ:Q,waistY:pt,pelvisCenterY:dt}=Yu(),[_t,bt,Ut,zt,Nt,U,qt,Tt,Bt,wt,Yt,Ct]=Dt(i,[8,2,16,10,2,10,8,4,14,10,6,10]),[P,E]=Dt(Nt,[1,1]),[X,nt]=Dt(U,[1,1]),[rt,tt]=Dt(qt,[1,1]),[Y,O]=Dt(Tt,[1,1]),[$,ut]=Dt(Bt,[1,1]),[it,ct]=Dt(wt,[1,1]),[at,ot]=Dt(Yt,[1,1]),ft=lt(mn(Xt(t,_t),2,.8),0,B,0),Ft=lt(ce(e,e*1.1,n,bt),0,N,0),Ot=lt(ce(s,r,o,Ut),0,y,0),Zt=lt(Se(a,l,c,zt),0,dt,0),k=[lt(Xt(u,P),-D,I,0),lt(Xt(u,E),D,I,0)],yt=[lt(ce(h,d,p,X),-W,H,0),lt(ce(h,d,p,nt),W,H,0)],K=[lt(ce(g,_,f,rt),-W,J,0),lt(ce(g,_,f,tt),W,J,0)],st=[lt(mn(Xt(m,Y),2,.6),-W,et,0),lt(mn(Xt(m,O),2,.6),W,et,0)],xt=[lt(ce(M,v,S,$),-ht,gt,0),lt(ce(M,v,S,ut),ht,gt,0)],St=[lt(ce(C,b,T,it),-ht,Mt,0),lt(ce(C,b,T,ct),ht,Mt,0)],$t=[lt(Se(w,R,x,at),-ht,q,x*.5),lt(Se(w,R,x,ot),ht,q,x*.5)],ue=[y+o*.5,y,y-o*.4],be=[{pts:[[-D*.7,I,Q*.6],[D*.7,I,Q*.6]],weight:D},...ue.map((Ce,ri)=>({pts:[[-s*(.75-ri*.08),Ce,Q],[s*(.75-ri*.08),Ce,Q]],weight:s})),{pts:[[0,L*.9,Q],[z*.02,y,Q*.95],[-z*.02,pt+o*.3,Q*.9],[0,pt,Q*.85]],weight:o*1.5}],Kt=Dt(Ct,be.map(Ce=>Ce.weight)),we=be.map((Ce,ri)=>En(Ce.pts,Kt[ri],z*.015));return xe([ft,Ft,Ot,Zt,...k,...yt,...K,...st,...xt,...St,...$t,...we])}function w_(i){const t=Yu(),e=t.headR*.75,n=t.neckR*.7,s=t.upperArmBottomR*.4,r=t.upperArmTopR*.55,o=t.upperArmHalfH*.75,a=t.forearmBottomR*.4,l=t.forearmTopR*.55,c=t.forearmHalfH*.75,u=t.thighBottomR*.4,h=t.thighTopR*.55,d=t.thighHalfH*.75,p=t.calfBottomR*.4,g=t.calfTopR*.55,_=t.calfHalfH*.75,f=t.handR*.5,m=t.footHy*.7,M=[t.chestTopY,t.chestCenterY,t.waistY,t.pelvisCenterY],v=[t.chestCenterY+t.chestHalfH*.4,t.chestCenterY,t.chestCenterY-t.chestHalfH*.4],[S,C,b,T,w,R,x,y,L]=Dt(i,[10,10,10,14,12,4,16,14,4]),N=Dt(C,M.map(()=>1)),B=Dt(b,v.map(()=>1)),[I,D]=Dt(T,[1,1]),[W,H]=Dt(w,[1,1]),[J,et]=Dt(R,[1,1]),[ht,gt]=Dt(x,[1,1]),[Mt,q]=Dt(y,[1,1]),[Q,pt]=Dt(L,[1,1]),dt=lt(Xt(e,S),0,t.headCenterY,0),_t=M.map((Bt,wt)=>lt(Xt(n,N[wt]),0,Bt,0)),bt=v.map((Bt,wt)=>En([[-1.87*.7,Bt,t.chestFrontZ*.9],[0,Bt,t.chestFrontZ],[t.chestTopR*.7,Bt,t.chestFrontZ*.9]],B[wt],z*.01)),Ut=[lt(ke(s,r,o,I),-1.7765,t.upperArmCenterY,0),lt(ke(s,r,o,D),t.armX,t.upperArmCenterY,0)],zt=[lt(ke(a,l,c,W),-1.7765,t.forearmCenterY,0),lt(ke(a,l,c,H),t.armX,t.forearmCenterY,0)],Nt=[lt(Xt(f,J),-1.7765,t.handCenterY,0),lt(Xt(f,et),t.armX,t.handCenterY,0)],U=[lt(ke(u,h,d,ht),-.7150000000000001,t.thighCenterY,0),lt(ke(u,h,d,gt),t.hipX,t.thighCenterY,0)],qt=[lt(ke(p,g,_,Mt),-.7150000000000001,t.calfCenterY,0),lt(ke(p,g,_,q),t.hipX,t.calfCenterY,0)],Tt=[lt(Xt(m,Q),-.7150000000000001,t.footCenterY,0),lt(Xt(m,pt),t.hipX,t.footCenterY,0)];return xe([dt,..._t,...bt,...Ut,...zt,...Nt,...U,...qt,...Tt])}function C_(i){const{headCenterY:t,skullR:e}=Is(),n=z*.1,s=e*.6,r=t-e*.55,[o,a,l,c]=Dt(i,[48,20,14,18]),u=mn(Xt(e,o),2,.88);$n(u,o,-.42,.12,.9,.8,.6),$n(u,o,.42,.12,.9,.8,.6),$n(u,o,0,-.15,1,.94,.72),$n(u,o,-.42,.32,.85,.9,1.15),$n(u,o,.42,.32,.85,.9,1.15),$n(u,o,-.55,-.05,.8,.88,1.12),$n(u,o,.55,-.05,.8,.88,1.12),$n(u,o,0,.05,1,.95,1.08);const h=lt(u,0,t,0),d=r+s*.7,p=r+s*.1,g=r-s*.35,_=En([[-s,d,0],[-s*.95,p,s*.35],[0,g,s*.78],[s*.95,p,s*.35],[s,d,0]],a,s*.1),f=r-s*.05,m=s*.65,[M,v]=Dt(l,[1,1]),S=[En([[-s*.55,f+s*.18,m],[s*.55,f+s*.18,m]],M,s*.03),En([[-s*.5,f-s*.1,m*.95],[s*.5,f-s*.1,m*.95]],v,s*.03)],C=lt(Xt(n,c),0,0,0);return xe([h,_,...S,C])}function R_(i){const t=z*.62,e=z*.55,n=z*.26,s=0,r=s+e,o=r+e,a=s-n,l=t*.85,c=t*.95,u=z*.09,h=z*.12,d=[o,r,s,a],p=[r+e*.4,r,r-e*.4],[g,_,f]=Dt(i,[30,45,25]),m=Dt(g,d.map(()=>1)),M=Dt(_,p.map(()=>1)),[v,S]=Dt(f,[1,1]),C=d.map((w,R)=>lt(Xt(u,m[R]),0,w,0)),b=p.map((w,R)=>En([[-t*.7,w,l*.9],[0,w,l],[t*.7,w,l*.9]],M[R],z*.01)),T=[lt(Xt(h,v),-c,o,0),lt(Xt(h,S),c,o,0)];return xe([...C,...b,...T])}function P_(i){const t=z*.6,e=z*.55,n=z*.2,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,u=z*.08,h=z*.13,d=z*.06,p=z*.1,g=z*.09,[_,f,m]=Dt(i,[40,40,20]),M=lt(ke(u,h,t*.8,_),0,r,0),v=lt(ke(d,p,e*.8,f),0,a,0),S=lt(Xt(g,m),0,c,0);return Nr(xe([M,v,S]))}function L_(i){const t=z*.65,e=z*.62,n=z*.09,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,u=z*.1,h=z*.16,d=z*.08,p=z*.12,g=z*.1,[_,f,m]=Dt(i,[42,40,18]),M=lt(ke(u,h,t*.8,_),0,r,0),v=lt(ke(d,p,e*.8,f),0,a,0),S=lt(Xt(g,m),0,c,0);return xe([M,v,S])}function I_(i){const t=z*.18,e=z*.5,n=z*.42,s=[.55,.72,.78,.7,.5],r=[-.85,-.45,0,.45,.85],o=0,l=o-t-e-e,c=z*.08,u=z*.035,[h,d]=Dt(i,[15,85]),p=Dt(d,[.9,1,1.1,1,.8]),g=lt(Xt(c,h),0,o,0),_=r.map((f,m)=>{const M=z*s[m]*.4;return lt(ke(u*.7,u,M,p[m]),f*n,l-M,0)});return xe([g,..._])}function D_(i){const t=z*.2,e=z*.22,n=z*.75,s=z*.34,r=[.75,1,.95,.85,.7],o=[-.65,-.3,0,.3,.65],a=0,l=a-t-e,c=n*.3+n,u=z*.1,h=z*.04,[d,p]=Dt(i,[20,80]),g=Dt(p,[1,1,1,1,1]),_=lt(Xt(u,d),0,a,0),f=o.map((m,M)=>{const v=z*.16*r[M]*.7;return lt(ke(h*.7,h,v,g[M]),m*s,l,c*.6)});return xe([_,...f])}const Ts=new Map,$u=new Map,za=new Map;function Te(i){Ts.set(i.name,i);for(const t of i.aliases)$u.set(t,i.name);za.set(i.name,(za.get(i.name)??0)+1)}function U_(i){return za.get(i)??0}function cl(i){return Ts.get(i)??null}Te({name:"cubo",aliases:["caja","dado"],generate:__});Te({name:"esfera",aliases:["bola","globo","planeta"],generate:v_});Te({name:"piramide",aliases:["triangulo"],generate:x_});Te({name:"estrella",aliases:[],generate:M_});Te({name:"anillo",aliases:["dona","donut","rosquilla","toro"],generate:y_});Te({name:"corazon",aliases:["amor","love"],generate:S_});Te({name:"cruz",aliases:["plus","mas"],generate:E_});Te({name:"carro",aliases:["auto","coche","vehiculo"],generate:b_});Te({name:"telefono",aliases:["celular","movil","smartphone"],generate:A_});Te({name:"persona",aliases:["personaje","humano","gente"],generate:T_,bones:w_});Te({name:"cabeza",aliases:[],generate:h_,bones:C_,colorParts:Ba});Te({name:"torso",aliases:["tronco"],generate:d_,bones:R_});Te({name:"brazo",aliases:["brazos"],generate:f_,bones:P_});Te({name:"pierna",aliases:["piernas"],generate:p_,bones:L_});Te({name:"mano",aliases:["manos"],generate:m_,bones:I_});Te({name:"pie",aliases:["pies"],generate:g_,bones:D_});const N_=new RegExp("[\\u0300-\\u036f]","g");function O_(i){return i.normalize("NFD").replace(N_,"").toLowerCase().trim()}function ul(i){const t=O_(i);if(Ts.has(t))return t;const e=$u.get(t);return e&&Ts.has(e)?e:null}function F_(){return[...Ts.keys()]}const Cc="escaneo";function B_(i,t){const e=Math.floor(i.length/3),n=si*.02;return s=>{const r=new Float32Array(s*3),o=new Uint8Array(s*3);if(e===0)return{points:r,colors:o};for(let a=0;a<s;a++){const l=a>=e,c=l?Math.floor(Math.random()*e):a,u=l?(Math.random()*2-1)*n:0,h=l?(Math.random()*2-1)*n:0,d=l?(Math.random()*2-1)*n:0;r[a*3+0]=i[c*3+0]+u,r[a*3+1]=i[c*3+1]+h,r[a*3+2]=i[c*3+2]+d,t?(o[a*3+0]=t[c*3+0],o[a*3+1]=t[c*3+1],o[a*3+2]=t[c*3+2]):(o[a*3+0]=255,o[a*3+1]=255,o[a*3+2]=255)}return{points:r,colors:o}}}function qu(i,t=null){const e=B_(i,t);return Te({name:Cc,aliases:[],generate:n=>e(n).points,...t?{generateWithColor:e}:{}}),Cc}const ye={DETAIL:0,COLOR:1},z_=.75;function H_(i,t){const e=[];if(t<2)return e;const n=new Uint8Array(t),s=new Float32Array(t).fill(1/0),r=new Int32Array(t).fill(-1);n[0]=1;for(let o=1;o<t;o++){const a=i[o*3+0]-i[0],l=i[o*3+1]-i[1],c=i[o*3+2]-i[2];s[o]=a*a+l*l+c*c,r[o]=0}for(let o=1;o<t;o++){let a=-1,l=1/0;for(let d=0;d<t;d++)!n[d]&&s[d]<l&&(l=s[d],a=d);if(a===-1)break;n[a]=1,e.push([r[a],a]);const c=i[a*3+0],u=i[a*3+1],h=i[a*3+2];for(let d=0;d<t;d++){if(n[d])continue;const p=i[d*3+0]-c,g=i[d*3+1]-u,_=i[d*3+2]-h,f=p*p+g*g+_*_;f<s[d]&&(s[d]=f,r[d]=a)}}return e}const k_=2;function V_(i,t,e){const n=[],s=Math.min(k_,t-1);if(s<=0)return n;const r=new Int32Array(s),o=new Float32Array(s);for(let a=0;a<t;a++){const l=i[a*3+0],c=i[a*3+1],u=i[a*3+2];let h=0;for(let d=0;d<t;d++){if(d===a)continue;const p=i[d*3+0]-l,g=i[d*3+1]-c,_=i[d*3+2]-u,f=p*p+g*g+_*_;let m=h<s?h:s-1;if(h===s){if(f>=o[s-1])continue}else h++;for(;m>0&&o[m-1]>f;)o[m]=o[m-1],r[m]=r[m-1],m--;o[m]=f,r[m]=d}for(let d=0;d<h;d++){const p=r[d],g=a<p?`${a}-${p}`:`${p}-${a}`;e.has(g)||(e.add(g),n.push([a,p]))}}return n}function G_(i,t){if(t<2)return[];const e=H_(i,t),n=new Set;for(const[s,r]of e)n.add(s<r?`${s}-${r}`:`${r}-${s}`);return e.concat(V_(i,t,n))}function W_(i,t,e){const n=new Float32Array(e*3),s=new Float32Array(e*6);if(t.length===0)return{points:n,spans:s};for(let r=0;r<e;r++){const[o,a]=t[r%t.length],l=i[o*3+0],c=i[o*3+1],u=i[o*3+2],h=i[a*3+0],d=i[a*3+1],p=i[a*3+2];n[r*3+0]=(l+h)/2,n[r*3+1]=(c+d)/2,n[r*3+2]=(u+p)/2,s[r*6+0]=l,s[r*6+1]=c,s[r*6+2]=u,s[r*6+3]=h,s[r*6+4]=d,s[r*6+5]=p}return{points:n,spans:s}}const X_=4;function Y_(i,t,e){if(e<=0||t===0)return new Float32Array(0);const n=Math.min(e,t),s=new Int32Array(n),r=new Float32Array(t).fill(1/0);let o=Math.floor(Math.random()*t);s[0]=o;for(let l=1;l<n;l++){const c=i[o*3+0],u=i[o*3+1],h=i[o*3+2];let d=-1,p=-1;for(let g=0;g<t;g++){const _=i[g*3+0]-c,f=i[g*3+1]-u,m=i[g*3+2]-h,M=_*_+f*f+m*m;M<r[g]&&(r[g]=M),r[g]>p&&(p=r[g],d=g)}o=d,s[l]=o}const a=new Float32Array(n*3);for(let l=0;l<n;l++){const c=s[l];a[l*3+0]=i[c*3+0],a[l*3+1]=i[c*3+1],a[l*3+2]=i[c*3+2]}return a}function $_(i,t){if(t<=0)return new Float32Array(0);const e=i(t*X_);return Y_(e,e.length/3,t)}const q_=.12,j_=2e3;function K_(i,t,e=nn){const n=ul(i);if(!n)return null;const s=cl(n);if(s.bones){const f=s.bones(t),m=new Float32Array(t*3);for(let M=0;M<t;M++)m[M*3+0]=f[M*3+0]+e[0],m[M*3+1]=f[M*3+1]+e[1],m[M*3+2]=f[M*3+2]+e[2];return{points:m,isBeam:new Uint8Array(t),relationSpans:new Float32Array(t*6)}}const r=s.generate,o=t>0?Math.min(t,j_,Math.max(4,Math.round(t*q_))):0,a=Math.max(0,t-o),l=$_(r,o),c=G_(l,o),{points:u,spans:h}=W_(l,c,a),d=new Float32Array(t*3),p=new Uint8Array(t),g=new Float32Array(t*6);let _=0;for(let f=0;f<o;f++)d[_*3+0]=l[f*3+0]+e[0],d[_*3+1]=l[f*3+1]+e[1],d[_*3+2]=l[f*3+2]+e[2],_++;for(let f=0;f<a;f++)d[_*3+0]=u[f*3+0]+e[0],d[_*3+1]=u[f*3+1]+e[1],d[_*3+2]=u[f*3+2]+e[2],p[_]=1,g[_*6+0]=h[f*6+0]+e[0],g[_*6+1]=h[f*6+1]+e[1],g[_*6+2]=h[f*6+2]+e[2],g[_*6+3]=h[f*6+3]+e[0],g[_*6+4]=h[f*6+4]+e[1],g[_*6+5]=h[f*6+5]+e[2],_++;return{points:d,isBeam:p,relationSpans:g}}const Rc=[{color:0,weight:1}];function Z_(i,t,e=nn,n=Rc){const s=ul(i);if(!s)return null;const r=cl(s),o=r.generate,a=r.colorParts,l=a?a.map(v=>({color:v.color,weight:v.weight})):n.length>0?n:Rc,c=t>0?Math.round(t*z_):0,u=Math.max(0,t-c),h=o(u),{points:d,colors:p}=J_(c,o,r.generateWithColor,a),g=new Float32Array(t*3),_=new Uint8Array(t),f=p?new Uint8Array(t*3):null;let m=0;const M=(v,S,C,b)=>{for(let T=0;T<S;T++)g[m*3+0]=v[T*3+0]+e[0],g[m*3+1]=v[T*3+1]+e[1],g[m*3+2]=v[T*3+2]+e[2],_[m]=C,f&&b&&(f[m*3+0]=b[T*3+0],f[m*3+1]=b[T*3+1],f[m*3+2]=b[T*3+2]),m++};return M(h,u,ye.DETAIL,null),M(d,c,ye.COLOR,p),{points:g,roles:_,colorClusters:l,pointColors:f}}function J_(i,t,e,n){if(i===0)return{points:new Float32Array(0),colors:e||n?new Uint8Array(0):null};if(n&&n.length>0){const s=Dt(i,n.map(l=>l.weight)),r=new Float32Array(i*3),o=new Uint8Array(i*3);let a=0;for(let l=0;l<n.length;l++){const c=s[l],u=n[l].generator(c),h=n[l].color,d=h>>16&255,p=h>>8&255,g=h&255;for(let _=0;_<c;_++)r[a*3+0]=u[_*3+0],r[a*3+1]=u[_*3+1],r[a*3+2]=u[_*3+2],o[a*3+0]=d,o[a*3+1]=p,o[a*3+2]=g,a++}return{points:r,colors:o}}return e?e(i):{points:t(i),colors:null}}function Q_(i,t){const e=new Float32Array(i*3);for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=r_*(.5+.5*Math.random());e[n*3]=t[0]+o*Math.sin(r)*Math.cos(s),e[n*3+1]=t[1]+o*Math.sin(r)*Math.sin(s),e[n*3+2]=t[2]+o*Math.cos(r)}return e}const jt={MICROBOT:0,NANOBOT:1,UNION:2,REPAIR:3,TRANSFORM:4,MATERIAL:5},tv=6,yn=[{type:jt.MICROBOT,key:"microbot",name:"Microbot",role:"Estructura principal",fn:"Construye el exoesqueleto y la base geométrica",relativeSize:2.2,acceptsObjectMaterial:!1,implemented:!0},{type:jt.NANOBOT,key:"nanobot",name:"Nanobot",role:"Detalle y precisión",fn:"Rellena superficies y sube la resolución de la figura",relativeSize:1,acceptsObjectMaterial:!0,implemented:!0},{type:jt.UNION,key:"union",name:"Union Bot",role:"Conexión estructural",fn:"Une nodos del exoesqueleto y sostiene la estructura",relativeSize:2.6,acceptsObjectMaterial:!0,implemented:!0,note:"Sólo en formas con exoesqueleto de vigas (cubo, carro…). Las formas humanoides usan hueso macizo, sin vigas."},{type:jt.REPAIR,key:"repair",name:"Repair Bot",role:"Mantenimiento",fn:"Detecta huecos en la figura y los rellena",relativeSize:1.8,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"La detección de huecos ya existe (cobertura por vóxeles); falta el despacho de agentes que los rellene."},{type:jt.TRANSFORM,key:"transform",name:"Transform Bot",role:"Reconfiguración",fn:"Coordina el cambio de una forma a otra",relativeSize:3,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"El morph directo entre figuras ya funciona, pero lo ejecuta el enjambre entero, no agentes de este tipo."},{type:jt.MATERIAL,key:"material",name:"Material Bot",role:"Material y recubrimiento",fn:"Aplica el color y el material del objeto sobre las demás capas",relativeSize:1.4,acceptsObjectMaterial:!0,implemented:!0}];function ju(i){return yn[i]??yn[jt.NANOBOT]}const Pc={[jt.MICROBOT]:{identityColor:3108816,identityEmissive:861520,emissiveIntensity:.35},[jt.NANOBOT]:{identityColor:1871706,identityEmissive:670244,emissiveIntensity:.35},[jt.UNION]:{identityColor:14263322,identityEmissive:4862981,emissiveIntensity:.4},[jt.REPAIR]:{identityColor:13120559,identityEmissive:4526094,emissiveIntensity:.4},[jt.TRANSFORM]:{identityColor:9127620,identityEmissive:3019332,emissiveIntensity:.4},[jt.MATERIAL]:{identityColor:2078896,identityEmissive:671034,emissiveIntensity:.4}};function rn(i){return Pc[i]??Pc[jt.NANOBOT]}const pe={FAR:0,MID:1,NEAR:2};function Ro(i,t,e){if(e===pe.FAR)return new Dr(i,6,4);if(e===pe.MID)return new Dr(i,8,6);const n=new ni(i,i,t,6,1,!1);n.rotateX(Math.PI/2);const s=new ni(i*1.12,i*1.12,t*.45,6,1,!1);return s.rotateX(Math.PI/2),ev([n,s])}function ev(i){const t=i.map(a=>{const l=a.index?a.toNonIndexed():a;return l!==a&&a.dispose(),l});let e=0;for(const a of t)e+=a.getAttribute("position").count;const n=new Float32Array(e*3),s=new Float32Array(e*3);let r=0;for(const a of t){const l=a.getAttribute("position"),c=a.getAttribute("normal");n.set(l.array,r*3),s.set(c.array,r*3),r+=l.count,a.dispose()}const o=new Be;return o.setAttribute("position",new Je(n,3)),o.setAttribute("normal",new Je(s,3)),o}function Or(i,t){const e=[Ro(i,t,pe.FAR),Ro(i,t,pe.MID),Ro(i,t,pe.NEAR)];return{byLevel:e,dispose(){for(const n of e)n.dispose()}}}const Lc=Symbol("instanceColorPatched"),vs=["#include <color_fragment>","#include <emissivemap_fragment>"],lr="#include <begin_vertex>",Ki="vTint";function nv(i){if(!i.includes(lr))throw new Error(`instance-color: el vertex de three no tiene "${lr}" (¿cambió de versión?)`);return`varying vec3 ${Ki};
`+i.replace(lr,[lr,`	${Ki} = vec3( 1.0 );`,"#ifdef USE_INSTANCING_COLOR",`	${Ki} = instanceColor;`,"#endif"].join(`
`))}function iv(i){for(const t of vs)if(!i.includes(t))throw new Error(`instance-color: el shader de three no tiene "${t}" (¿cambió de versión?)`);return`varying vec3 ${Ki};
`+i.replace(vs[0],`${vs[0]}
	diffuseColor.rgb *= ${Ki};`).replace(vs[1],`${vs[1]}
	totalEmissiveRadiance *= ${Ki};`)}function sv(i){const t=i;if(t[Lc])return;t[Lc]=!0;const e=i.onBeforeCompile.bind(i);i.onBeforeCompile=(n,s)=>{e(n,s),n.vertexShader=nv(n.vertexShader),n.fragmentShader=iv(n.fragmentShader)},i.customProgramCacheKey=()=>"instanceColor"}function rv(i){const t=new Float32Array(i*3).fill(1),e=new Oa(t,3);return e.setUsage(ud),e}const ov=80,av=4096,lv=.6*.6,cv=1.2*1.2,Ku=rn(jt.NANOBOT).identityColor,Zu=8257459,uv=5592405,hv=2763306,cr=[Or(.55,.42),Or(.6,.46)];function dv(i){return i===ye.DETAIL?new ti({color:Ku,emissive:Zu,emissiveIntensity:.9,roughness:.35,metalness:.1}):new ti({color:16777215,emissive:16777215,emissiveIntensity:.85,roughness:.35,metalness:.1})}function fv(i){const t=new On;let e=pe.MID;const n=R=>cr[R].byLevel[e],s=cr.map((R,x)=>dv(x));sv(s[ye.COLOR]);let r=0,o=[],a=[],l=new Float32Array(0),c=null,u=!0,h=!1,d=new Uint8Array(0);function p(R,x,y){const L=new Pr(R,x,y);return L.frustumCulled=!1,L.count=0,L.castShadow=!1,L.receiveShadow=!0,t.add(L),L}function g(R){if(r>0&&R<=r)return;let x=Math.max(r,av);for(;x<R;)x*=2;r=Math.min(x,i);for(const L of o)t.remove(L),L.dispose();o=cr.map((L,N)=>p(n(N),s[N],r));const y=o[ye.COLOR];y.instanceColor=rv(r),a=o.map(L=>L.instanceMatrix.array),l=y.instanceColor.array,u=!0,d=new Uint8Array(r)}const _=new Array(cr.length).fill(0);function f(R){g(R);const x=Math.ceil(R/o.length);o.forEach((y,L)=>{const N=L*x,B=Math.min(R,N+x);y.count=Math.max(0,B-N)}),d.fill(0)}function m(R,x,y,L,N,B){R[x+0]=B,R[x+1]=0,R[x+2]=0,R[x+3]=0,R[x+4]=0,R[x+5]=B,R[x+6]=0,R[x+7]=0,R[x+8]=0,R[x+9]=0,R[x+10]=B,R[x+11]=0,R[x+12]=y,R[x+13]=L,R[x+14]=N,R[x+15]=1}function M(R,x,y,L,N){if(!t.visible)return;const B=Math.min(1,Math.cbrt(ov/x));_.fill(0);const I=N[ye.COLOR],D=c!==null&&(u||I!==h);for(let W=0;W<x;W++){const H=y[W];if(!N[H])continue;const J=a[H],et=_[H]++;H===ye.COLOR&&D&&c&&(l[et*3+0]=c[W*3+0],l[et*3+1]=c[W*3+1],l[et*3+2]=c[W*3+2]);const ht=R[W*3+0],gt=R[W*3+1],Mt=R[W*3+2],q=L[W*3+0],Q=L[W*3+1],pt=L[W*3+2],dt=q!==0||Q!==0||pt!==0;if(!dt)d[W]=0;else{const Nt=ht-q,U=gt-Q,qt=Mt-pt,Tt=Nt*Nt+U*U+qt*qt;d[W]?Tt>cv&&(d[W]=0):Tt<lv&&(d[W]=1)}const _t=dt&&d[W]===1,bt=_t?q:ht,Ut=_t?Q:gt,zt=_t?pt:Mt;m(J,et*16,bt,Ut,zt,B)}D&&(u=!1,h=I);for(let W=0;W<o.length;W++){const H=o[W];H.count=_[W],H.instanceMatrix.clearUpdateRanges(),H.instanceMatrix.addUpdateRange(0,H.count*16),H.instanceMatrix.needsUpdate=!0,W===ye.COLOR&&D&&H.instanceColor&&(H.instanceColor.clearUpdateRanges(),H.instanceColor.addUpdateRange(0,H.count*3),H.instanceColor.needsUpdate=!0)}}function v(R){t.visible=R}function S(R){if(c=R,u=!0,R)return;l.fill(1);const x=o[ye.COLOR];x!=null&&x.instanceColor&&(x.instanceColor.needsUpdate=!0)}const C=[{role:ye.DETAIL,color:Ku,emissive:Zu}];function b(R){for(const{role:x,color:y,emissive:L}of C){const N=o[x].material;N.color.setHex(R?uv:y),N.emissive.setHex(R?hv:L)}}function T(R,x){const y=o[ye.DETAIL];y.visible=R.visible,y.position.y=R.offsetY;const L=o[ye.COLOR];L.visible=x.visible,L.position.y=x.offsetY}function w(R){if(R!==e){e=R;for(let x=0;x<o.length;x++)o[x].geometry=n(x)}}return f(0),{group:t,setCount:f,updateFromPositions:M,setVisible:v,setInstanceTint:S,setSkeletonGrayscale:b,setLodLevel:w,setLayerDisplay:T}}const Ic=.07,Dc=.03,pv=rn(jt.MICROBOT).identityColor,mv=rn(jt.MICROBOT).identityEmissive,gv=rn(jt.UNION).identityColor,_v=rn(jt.UNION).identityEmissive;function vv(i){const t=new On,e=Or(Ic,Ic*.8).byLevel[pe.MID],n=new ni(Dc,Dc,1,5),s=new ti({color:pv,emissive:mv,emissiveIntensity:.3,roughness:.55,metalness:.05}),r=new ti({color:gv,emissive:_v,emissiveIntensity:.25,roughness:.6,metalness:.05}),o=new Pr(e,s,i),a=new Pr(n,r,i);o.frustumCulled=!1,a.frustumCulled=!1,o.count=0,a.count=0,t.add(o,a);const l=new F,c=new F,u=new F,h=new F,d=new se;function p(M){o.count=0,a.count=0}function g(M,v,S,C,b,T){M[v+0]=T,M[v+1]=0,M[v+2]=0,M[v+3]=0,M[v+4]=0,M[v+5]=T,M[v+6]=0,M[v+7]=0,M[v+8]=0,M[v+9]=0,M[v+10]=T,M[v+11]=0,M[v+12]=S,M[v+13]=C,M[v+14]=b,M[v+15]=1}function _(M,v,S,C){const b=o.instanceMatrix.array,T=a.instanceMatrix.array;let w=0,R=0;for(let x=0;x<v;x++){const y=M[x*3+0],L=M[x*3+1],N=M[x*3+2];if(!S[x]){g(b,w*16,y,L,N,1),w++;continue}const B=C[x*6+0],I=C[x*6+1],D=C[x*6+2],W=C[x*6+3],H=C[x*6+4],J=C[x*6+5];l.set(W-B,H-I,J-D);const et=Math.max(l.length(),.001);l.multiplyScalar(1/et),h.set(Math.abs(l.y)>.99?1:0,Math.abs(l.y)>.99?0:1,0),c.crossVectors(h,l).normalize(),u.crossVectors(l,c),d.makeBasis(c,l.multiplyScalar(et),u),d.setPosition(B+(W-B)*.5,I+(H-I)*.5,D+(J-D)*.5),d.toArray(T,R*16),R++}o.count=w,a.count=R,o.instanceMatrix.clearUpdateRanges(),o.instanceMatrix.addUpdateRange(0,w*16),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.clearUpdateRanges(),a.instanceMatrix.addUpdateRange(0,R*16),a.instanceMatrix.needsUpdate=!0}function f(M){t.visible=M}function m(M,v){o.visible=M.visible,o.position.y=M.offsetY,a.visible=v.visible,a.position.y=v.offsetY}return{group:t,setCount:p,setVisible:f,updateFromPositions:_,setLayerDisplay:m}}var xv=(()=>{var i=import.meta.url;return function(t){t=t||{};var e=typeof t<"u"?t:{},n,s;e.ready=new Promise(function(Y,O){n=Y,s=O});var r=Object.assign({},e),o=!0,a="";function l(Y){return e.locateFile?e.locateFile(Y,a):a+Y}var c;typeof document<"u"&&document.currentScript&&(a=document.currentScript.src),i&&(a=i),a.indexOf("blob:")!==0?a=a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):a="",e.print||console.log.bind(console);var u=e.printErr||console.warn.bind(console);Object.assign(e,r),r=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;var h;e.wasmBinary&&(h=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&Q("no native wasm support detected");var d,p=!1;function g(Y){var O=e["_"+Y];return O}function _(Y,O,$,ut,it){var ct={string:function(K){var st=0;if(K!=null&&K!==0){var xt=(K.length<<2)+1;st=nt(xt),C(K,st,xt)}return st},array:function(K){var st=nt(K.length);return b(K,st),st}};function at(K){return O==="string"?v(K):O==="boolean"?!!K:K}var ot=g(Y),ft=[],Ft=0;if(ut)for(var Ot=0;Ot<ut.length;Ot++){var Zt=ct[$[Ot]];Zt?(Ft===0&&(Ft=E()),ft[Ot]=Zt(ut[Ot])):ft[Ot]=ut[Ot]}var k=ot.apply(null,ft);function yt(K){return Ft!==0&&X(Ft),at(K)}return k=yt(k),k}function f(Y,O,$,ut){$=$||[];var it=$.every(function(at){return at==="number"}),ct=O!=="string";return ct&&it&&!ut?g(Y):function(){return _(Y,O,$,arguments)}}var m=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function M(Y,O,$){for(var ut=O+$,it=O;Y[it]&&!(it>=ut);)++it;if(it-O>16&&Y.subarray&&m)return m.decode(Y.subarray(O,it));for(var ct="";O<it;){var at=Y[O++];if(!(at&128)){ct+=String.fromCharCode(at);continue}var ot=Y[O++]&63;if((at&224)==192){ct+=String.fromCharCode((at&31)<<6|ot);continue}var ft=Y[O++]&63;if((at&240)==224?at=(at&15)<<12|ot<<6|ft:at=(at&7)<<18|ot<<12|ft<<6|Y[O++]&63,at<65536)ct+=String.fromCharCode(at);else{var Ft=at-65536;ct+=String.fromCharCode(55296|Ft>>10,56320|Ft&1023)}}return ct}function v(Y,O){return Y?M(R,Y,O):""}function S(Y,O,$,ut){if(!(ut>0))return 0;for(var it=$,ct=$+ut-1,at=0;at<Y.length;++at){var ot=Y.charCodeAt(at);if(ot>=55296&&ot<=57343){var ft=Y.charCodeAt(++at);ot=65536+((ot&1023)<<10)|ft&1023}if(ot<=127){if($>=ct)break;O[$++]=ot}else if(ot<=2047){if($+1>=ct)break;O[$++]=192|ot>>6,O[$++]=128|ot&63}else if(ot<=65535){if($+2>=ct)break;O[$++]=224|ot>>12,O[$++]=128|ot>>6&63,O[$++]=128|ot&63}else{if($+3>=ct)break;O[$++]=240|ot>>18,O[$++]=128|ot>>12&63,O[$++]=128|ot>>6&63,O[$++]=128|ot&63}}return O[$]=0,$-it}function C(Y,O,$){return S(Y,R,O,$)}function b(Y,O){w.set(Y,O)}var T,w,R;function x(Y){T=Y,e.HEAP8=w=new Int8Array(Y),e.HEAP16=new Int16Array(Y),e.HEAP32=new Int32Array(Y),e.HEAPU8=R=new Uint8Array(Y),e.HEAPU16=new Uint16Array(Y),e.HEAPU32=new Uint32Array(Y),e.HEAPF32=new Float32Array(Y),e.HEAPF64=new Float64Array(Y)}e.INITIAL_MEMORY;var y,L=[],N=[],B=[];function I(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)H(e.preRun.shift());Nt(L)}function D(){Nt(N)}function W(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)et(e.postRun.shift());Nt(B)}function H(Y){L.unshift(Y)}function J(Y){N.unshift(Y)}function et(Y){B.unshift(Y)}var ht=0,gt=null;function Mt(Y){ht++,e.monitorRunDependencies&&e.monitorRunDependencies(ht)}function q(Y){if(ht--,e.monitorRunDependencies&&e.monitorRunDependencies(ht),ht==0&&gt){var O=gt;gt=null,O()}}e.preloadedImages={},e.preloadedAudios={};function Q(Y){e.onAbort&&e.onAbort(Y),Y="Aborted("+Y+")",u(Y),p=!0,Y+=". Build with -s ASSERTIONS=1 for more info.";var O=new WebAssembly.RuntimeError(Y);throw s(O),O}var pt="data:application/octet-stream;base64,";function dt(Y){return Y.startsWith(pt)}var _t;e.locateFile?(_t="boids.wasm",dt(_t)||(_t=l(_t))):_t=new URL("/Simulador-nanobots/wasm/boids.wasm",import.meta.url).toString();function bt(Y){try{if(Y==_t&&h)return new Uint8Array(h);if(!c)throw"both async and sync fetching of the wasm failed"}catch(O){Q(O)}}function Ut(){return!h&&o&&typeof fetch=="function"?fetch(_t,{credentials:"same-origin"}).then(function(Y){if(!Y.ok)throw"failed to load wasm binary file at '"+_t+"'";return Y.arrayBuffer()}).catch(function(){return bt(_t)}):Promise.resolve().then(function(){return bt(_t)})}function zt(){var Y={a:P};function O(at,ot){var ft=at.exports;e.asm=ft,d=e.asm.d,x(d.buffer),y=e.asm.q,J(e.asm.e),q()}Mt();function $(at){O(at.instance)}function ut(at){return Ut().then(function(ot){return WebAssembly.instantiate(ot,Y)}).then(function(ot){return ot}).then(at,function(ot){u("failed to asynchronously prepare wasm: "+ot),Q(ot)})}function it(){return!h&&typeof WebAssembly.instantiateStreaming=="function"&&!dt(_t)&&typeof fetch=="function"?fetch(_t,{credentials:"same-origin"}).then(function(at){var ot=WebAssembly.instantiateStreaming(at,Y);return ot.then($,function(ft){return u("wasm streaming compile failed: "+ft),u("falling back to ArrayBuffer instantiation"),ut($)})}):ut($)}if(e.instantiateWasm)try{var ct=e.instantiateWasm(Y,O);return ct}catch(at){return u("Module.instantiateWasm callback failed with error: "+at),!1}return it().catch(s),{}}function Nt(Y){for(;Y.length>0;){var O=Y.shift();if(typeof O=="function"){O(e);continue}var $=O.func;typeof $=="number"?O.arg===void 0?qt($)():qt($)(O.arg):$(O.arg===void 0?null:O.arg)}}var U=[];function qt(Y){var O=U[Y];return O||(Y>=U.length&&(U.length=Y+1),U[Y]=O=y.get(Y)),O}function Tt(){Q("")}function Bt(Y,O,$){R.copyWithin(Y,O,O+$)}function wt(){return 2147483648}function Yt(Y){try{return d.grow(Y-T.byteLength+65535>>>16),x(d.buffer),1}catch{}}function Ct(Y){var O=R.length;Y=Y>>>0;var $=wt();if(Y>$)return!1;let ut=(ft,Ft)=>ft+(Ft-ft%Ft)%Ft;for(var it=1;it<=4;it*=2){var ct=O*(1+.2/it);ct=Math.min(ct,Y+100663296);var at=Math.min($,ut(Math.max(Y,ct),65536)),ot=Yt(at);if(ot)return!0}return!1}var P={b:Tt,c:Bt,a:Ct};zt(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.e).apply(null,arguments)},e._init=function(){return(e._init=e.asm.f).apply(null,arguments)},e._getPositionsPtr=function(){return(e._getPositionsPtr=e.asm.g).apply(null,arguments)},e._getCount=function(){return(e._getCount=e.asm.h).apply(null,arguments)},e._getTargetPositionsPtr=function(){return(e._getTargetPositionsPtr=e.asm.i).apply(null,arguments)},e._setParams=function(){return(e._setParams=e.asm.j).apply(null,arguments)},e._step=function(){return(e._step=e.asm.k).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.l).apply(null,arguments)},e._free=function(){return(e._free=e.asm.m).apply(null,arguments)};var E=e.stackSave=function(){return(E=e.stackSave=e.asm.n).apply(null,arguments)},X=e.stackRestore=function(){return(X=e.stackRestore=e.asm.o).apply(null,arguments)},nt=e.stackAlloc=function(){return(nt=e.stackAlloc=e.asm.p).apply(null,arguments)};e.ccall=_,e.cwrap=f;var rt;gt=function Y(){rt||tt(),rt||(gt=Y)};function tt(Y){if(ht>0||(I(),ht>0))return;function O(){rt||(rt=!0,e.calledRun=!0,!p&&(D(),n(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),W()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),O()},1)):O()}if(e.run=tt,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return tt(),t.ready}})();class Mv{constructor(){ai(this,"module",null);ai(this,"count",0);ai(this,"cachedPtr",-1);ai(this,"cachedView",null);ai(this,"cachedTargetPtr",-1);ai(this,"cachedTargetView",null)}async load(){this.module=await xv()}get mod(){if(!this.module)throw new Error("Swarm.load() debe completarse antes de usar el módulo Wasm");return this.module}init(t){this.count=t,this.cachedView=null,this.cachedTargetView=null,this.mod.ccall("init",null,["number"],[t])}setParams(t){this.mod.ccall("setParams",null,["number","number","number","number","number"],[t.cohesion,t.separation,t.alignment,t.maxSpeed,t.seekWeight])}step(t){this.mod.ccall("step",null,["number"],[t])}getPositions(){const t=this.mod.ccall("getPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedView||t!==this.cachedPtr||this.cachedView.buffer!==e)&&(this.cachedPtr=t,this.cachedView=new Float32Array(e,t,this.count*3)),this.cachedView}getTargetPositions(){const t=this.mod.ccall("getTargetPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedTargetView||t!==this.cachedTargetPtr||this.cachedTargetView.buffer!==e)&&(this.cachedTargetPtr=t,this.cachedTargetView=new Float32Array(e,t,this.count*3)),this.cachedTargetView}setAgentTargets(t){this.getTargetPositions().set(t.subarray(0,this.count*3))}getCount(){return this.count}}const yv=new F(-8,8,-8),Po=260,Lo=1.05,Uc=.11,Sv=.9,Ev=3,xs=.85,bv=3.2,Av=Math.PI*(3-Math.sqrt(5));function Tv(i=yv){const t=new On;t.position.copy(i);const e=rn(jt.MATERIAL).identityColor,n=Or(Uc,Uc*.8),s=new ti({color:e,emissive:e,emissiveIntensity:xs,roughness:.35,metalness:.5}),r=new Pr(n.byLevel[pe.MID],s,Po);r.instanceMatrix.setUsage(Da),r.castShadow=!0;const o=new Ee;for(let g=0;g<Po;g++){const _=1-g/(Po-1)*2,f=Math.sqrt(Math.max(0,1-_*_)),m=g*Av;o.position.set(Math.cos(m)*f*Lo,_*Lo,Math.sin(m)*f*Lo),o.lookAt(o.position.clone().multiplyScalar(2)),o.updateMatrix(),r.setMatrixAt(g,o.matrix)}r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),t.add(r);const a=new Hr({color:e,wireframe:!0,transparent:!0,opacity:.22}),l=new ae(new ol(1.9,2),a);t.add(l);const c=new ku(e,3,14);t.add(c);let u=-1;const h=new Vt(e);function d(g){s.color.copy(g),s.emissive.copy(g),a.color.copy(g),c.color.copy(g)}function p(g){if(l.rotateY(g*.3),l.rotateX(g*.15),r.rotateY(g*.12),u<0)return;u+=g;const _=Math.min(u/Sv,1),f=Math.abs(Math.sin(_*Math.PI*Ev))*(1-_);s.emissiveIntensity=xs+(bv-xs)*f,c.intensity=3+5*f,_>=1&&(u=-1,s.emissiveIntensity=xs,c.intensity=3)}return{group:t,position:t.position,update:p,pulseColor(g){h.setHex(g),d(h),u=0},resetColor(){h.setHex(e),d(h),u=-1,s.emissiveIntensity=xs,c.intensity=3}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class bn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),bn.nextNameID=bn.nextNameID||0,this.$name.id=`lil-gui-name-${++bn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class wv extends bn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ha(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Cv={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ha,toHexString:Ha},ws={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Rv={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=ws.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return ws.toHexString(s)}},Pv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=ws.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return ws.toHexString(s)}},Lv=[Cv,ws,Rv,Pv];function Iv(i){return Lv.find(t=>t.match(i))}class Dv extends bn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Iv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ha(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Io extends bn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Uv extends bn{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let M=parseFloat(this.$input.value);isNaN(M)||(this._stepExplicit&&(M=this._snap(M)),this.setValue(this._clamp(M)))},n=M=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+M),this.$input.value=this.getValue())},s=M=>{M.key==="Enter"&&this.$input.blur(),M.code==="ArrowUp"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M))),M.code==="ArrowDown"&&(M.preventDefault(),n(this._step*this._arrowKeyMultiplier(M)*-1))},r=M=>{this._inputFocused&&(M.preventDefault(),n(this._step*this._normalizeMouseWheel(M)))};let o=!1,a,l,c,u,h;const d=5,p=M=>{a=M.clientX,l=c=M.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=M=>{if(o){const v=M.clientX-a,S=M.clientY-l;Math.abs(S)>d?(M.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>d&&_()}if(!o){const v=M.clientY-c;h-=v*this._step*this._arrowKeyMultiplier(M),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=M.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},f=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,M,v,S,C)=>(m-M)/(v-M)*(C-S)+S,e=m=>{const M=this.$slider.getBoundingClientRect();let v=t(m,M.left,M.right,this._min,this._max);this._snapClampSetValue(v)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},u=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=m=>{if(o){const M=m.touches[0].clientX-a,v=m.touches[0].clientY-l;Math.abs(M)>Math.abs(v)?c(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let _;const f=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const v=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Nv extends bn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Ov extends bn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Fv=`.lil-gui {
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
}`;function Bv(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Nc=!1;class hl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Nc&&a&&(Bv(Fv),Nc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Nv(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Uv(this,t,e,n,s,r);case"boolean":return new wv(this,t,e);case"string":return new Ov(this,t,e);case"function":return new Io(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Dv(this,t,e,n)}addFolder(t){const e=new hl({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Io||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Io)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Ju=192;function zv(i,t,e=Ju){if(i<=0||t<=0)return{width:0,height:0};const n=Math.max(i,t);if(n<=e)return{width:i,height:t};const s=e/n;return{width:Math.max(1,Math.round(i*s)),height:Math.max(1,Math.round(t*s))}}function Hv(i,t,e){return(t*e+i)*4}function kv(i,t,e){return .2126*i+.7152*t+.0722*e}function Vv(i){const{pixels:t}=i;for(let e=3;e<t.length;e+=4)if(t[e]<250)return!0;return!1}function Gv(i,t=Ju){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const{width:o,height:a}=zv(s.naturalWidth,s.naturalHeight,t);if(o===0||a===0){n(new Error("La imagen no tiene dimensiones válidas"));return}const l=document.createElement("canvas");l.width=o,l.height=a;const c=l.getContext("2d");if(!c){n(new Error("Canvas 2D no disponible"));return}c.drawImage(s,0,0,o,a),e({pixels:c.getImageData(0,0,o,a).data,width:o,height:a})}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la imagen"))},s.src=r})}function Wv(i,t){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const o=document.createElement("canvas");o.width=t,o.height=t;const a=o.getContext("2d");if(!a){n(new Error("Canvas 2D no disponible"));return}a.drawImage(s,0,0,t,t),e({pixels:a.getImageData(0,0,t,t).data,width:t,height:t})}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la imagen"))},s.src=r})}const In=8,Do=256/In,Xv=128,Uo=235,No=20,Yv=32,Ds=4,$v=60,Mi=4973567,ka=[{color:Mi,weight:1}];function qv(i,t=Ds){const e=In*In*In,n=new Uint32Array(e),s=new Float64Array(e),r=new Float64Array(e),o=new Float64Array(e);for(let l=0;l+3<i.length;l+=4){const c=i[l],u=i[l+1],h=i[l+2];if(i[l+3]<Xv||c>Uo&&u>Uo&&h>Uo||c<No&&u<No&&h<No)continue;const p=Math.min(In-1,Math.floor(c/Do)),g=Math.min(In-1,Math.floor(u/Do)),_=Math.min(In-1,Math.floor(h/Do)),f=(p*In+g)*In+_;n[f]++,s[f]+=c,r[f]+=u,o[f]+=h}const a=[];for(let l=0;l<e;l++)n[l]!==0&&a.push({count:n[l],r:s[l]/n[l],g:r[l]/n[l],b:o[l]/n[l]});return a.length===0?[{color:Mi,weight:1}]:Qu(a,t)}function Qu(i,t=Ds,e=$v){if(i.length===0)return[{color:Mi,weight:1}];const n=[...i].sort((c,u)=>u.count-c.count),s=[],r=new Uint8Array(n.length),o=e*e;for(let c=0;c<n.length;c++){if(r[c])continue;const u=n[c],h={count:u.count,sumR:u.r*u.count,sumG:u.g*u.count,sumB:u.b*u.count};r[c]=1;for(let d=c+1;d<n.length;d++){if(r[d])continue;const p=n[d],g=p.r-u.r,_=p.g-u.g,f=p.b-u.b;g*g+_*_+f*f>o||(r[d]=1,h.count+=p.count,h.sumR+=p.r*p.count,h.sumG+=p.g*p.count,h.sumB+=p.b*p.count)}s.push(h)}s.sort((c,u)=>u.count-c.count);const a=s.slice(0,Math.max(1,t)),l=a.reduce((c,u)=>c+u.count,0);return a.map(c=>{const u=Math.round(c.sumR/c.count),h=Math.round(c.sumG/c.count),d=Math.round(c.sumB/c.count);return{color:u<<16|h<<8|d,weight:c.count/l}})}async function jv(i,t,e){try{const{pixels:n}=await Wv(i,Yv);return e(n)}catch{return t}}function th(i,t=Ds){return jv(i,ka,e=>qv(e,t))}const Kv=.82;function Zv(i,t){const{mask:e,width:n,height:s}=i;let r=0,o=0;for(let a=0;a<s;a++){const l=a*n;for(let c=0;c<n;c++){const u=e[l+c],h=Math.round(2*t-c),d=h>=0&&h<n?e[l+h]:0;(u||d)&&o++,u&&d&&r++}}return o===0?0:r/o}function Jv(i,t=Kv){if(!i.bbox||i.area===0)return{axisX:i.width/2,score:0,symmetric:!1};const{minX:e,maxX:n}=i.bbox,s=(e+n)/2,r=(n-e)/2,o=Math.max(1,r*.25);let a=s,l=0;const c=Math.floor((s-o)*2),u=Math.ceil((s+o)*2);for(let h=c;h<=u;h++){const d=h/2,p=Zv(i,d);p>l&&(l=p,a=d)}return{axisX:a,score:l,symmetric:l>=t}}const _i={OBSERVED:0,INTERPOLATED:1,INFERRED:2};function Va(){return{points:new Float32Array(0),colors:new Uint8Array(0),origin:new Uint8Array(0),count:0}}function Oc(i){let t=0,e=0,n=0;for(let s=0;s<i.count;s++){const r=i.origin[s];r===_i.OBSERVED?t++:r===_i.INTERPOLATED?e++:n++}return{observed:t,interpolated:e,inferred:n,observedFraction:i.count===0?0:t/i.count}}const sn={EXTRUSION:"EXTRUSION",DEPTH:"DEPTH",DEPTH_SYMMETRY:"DEPTH_SYMMETRY"},Qv={EXTRUSION:"Extrusión de silueta",DEPTH:"Profundidad estimada",DEPTH_SYMMETRY:"Profundidad + simetría"},tx=.5,ex=.35,nx=25e5,ix=.9,sx={cloud:Va(),mode:sn.DEPTH,symmetry:null,confidence:0,sourceExtent:{width:0,height:0}};function rx(i,t,e,n,s=1){const r=Math.min(t,e),o=i===sn.EXTRUSION?r*.6:i===sn.DEPTH_SYMMETRY?Math.min(1,r*(1+.25*n)):r,a=.5+.5*Math.min(1,Math.max(0,s)*2);return o*a}function ox(i,t,e,n=sn.DEPTH,s={}){const r=t.bbox;if(!r||t.area===0)return{...sx,mode:n};const o=s.half??si,a=s.voxelRes??48,l=s.maxPoints??nx,{width:c,height:u}=t;let h=null,d=t.mask,p=e.depth,g=n;if(n===sn.DEPTH_SYMMETRY)if(h=Jv(t),!h.symmetric)g=sn.DEPTH;else{d=new Uint8Array(c*u),p=new Float32Array(c*u);for(let gt=0;gt<u;gt++){const Mt=gt*c;for(let q=0;q<c;q++){const Q=Math.round(2*h.axisX-q),pt=Q>=0&&Q<c?Mt+Q:-1,dt=t.mask[Mt+q],_t=pt>=0?t.mask[pt]:0;d[Mt+q]=dt||_t?1:0;const bt=dt?e.depth[Mt+q]:0,Ut=pt>=0&&_t?e.depth[pt]:0;p[Mt+q]=Math.max(bt,Ut)}}}const _=r.maxX-r.minX+1,f=r.maxY-r.minY+1,m=2*o/Math.max(_,f),M=(r.minX+r.maxX)/2,v=(r.minY+r.maxY)/2,C=(g===sn.EXTRUSION?ex:tx)*Math.min(_,f)*m,b=2*o/a,T=m,w=b*ix,R=T/w,x=R>=1?Math.ceil(R):1,y=R>=1?1:Math.max(1,Math.floor(1/R)),L=gt=>{const Mt=g===sn.EXTRUSION?C:gt*C;return Math.max(2,Math.ceil(2*Mt/b)+1)};let N=0;for(let gt=r.minY;gt<=r.maxY;gt+=y)for(let Mt=r.minX;Mt<=r.maxX;Mt+=y){const q=gt*c+Mt;d[q]&&(N+=L(p[q])*x*x)}const B=N>l?Math.max(1,Math.ceil(N/l)):1,I=[],D=[],W=[];for(let gt=r.minY;gt<=r.maxY;gt+=y)for(let Mt=r.minX;Mt<=r.maxX;Mt+=y){const q=gt*c+Mt;if(!d[q])continue;const Q=(Mt-M)*m,pt=-(gt-v)*m,dt=g===sn.EXTRUSION?C:p[q]*C,_t=!t.mask[q];let bt=Mt;if(_t&&h){const Tt=Math.round(2*h.axisX-Mt);Tt>=0&&Tt<c&&t.mask[gt*c+Tt]&&(bt=Tt)}const Ut=Hv(bt,gt,c),zt=i.pixels[Ut],Nt=i.pixels[Ut+1],U=i.pixels[Ut+2],qt=Math.max(2,Math.ceil(L(p[q])/B));for(let Tt=0;Tt<x;Tt++)for(let Bt=0;Bt<x;Bt++){const wt=x===1?0:(Bt/x-.5+.5/x)*T,Yt=x===1?0:(Tt/x-.5+.5/x)*T;for(let Ct=0;Ct<qt;Ct++){const P=qt===1?0:Ct/(qt-1);I.push(Q+wt,pt+Yt,-dt+2*dt*P),D.push(zt,Nt,U),W.push(_t?_i.INFERRED:qt===1||Ct===qt-1?_i.OBSERVED:Ct===0?_i.INFERRED:_i.INTERPOLATED)}}}const H=I.length/3,J=Uint8Array.from(W);let et=0;for(let gt=0;gt<H;gt++)J[gt]===_i.OBSERVED&&et++;const ht=rx(g,s.segmentationConfidence??1,e.confidence,(h==null?void 0:h.score)??0,H===0?0:et/H);return{cloud:{points:Float32Array.from(I),colors:Uint8Array.from(D),origin:J,count:H},mode:g,symmetry:h,confidence:ht,sourceExtent:{width:_,height:f}}}const eh=18,ax=128;function nh(i,t,e){let n=0,s=0,r=t,o=e,a=-1,l=-1;for(let c=0;c<e;c++)for(let u=0;u<t;u++)i[c*t+u]&&(n++,u<r&&(r=u),u>a&&(a=u),c<o&&(o=c),c>l&&(l=c),(u===0||c===0||u===t-1||c===e-1)&&s++);return{area:n,bbox:n>0?{minX:r,minY:o,maxX:a,maxY:l}:null,borderTouch:s}}function lx(i,t,e){if(t<2||e<2)return 0;let n=0,s=0,r=0,o=0,a=0,l=0,c=0;const u=g=>{const _=g*4,f=i[_],m=i[_+1],M=i[_+2];s+=f,r+=m,o+=M,a+=f*f,l+=m*m,c+=M*M,n++};for(let g=0;g<t;g++)u(g),u((e-1)*t+g);for(let g=1;g<e-1;g++)u(g*t),u(g*t+t-1);if(n===0)return 0;const h=Math.max(0,a/n-(s/n)**2),d=Math.max(0,l/n-(r/n)**2),p=Math.max(0,c/n-(o/n)**2);return Math.min(1,Math.sqrt((h+d+p)/3)/255)}function cx(i,t,e,n=eh){const s=t*e,r=new Uint8Array(s),o=new Uint8Array(s),a=new Int32Array(s);let l=0;const c=g=>{a[l++]=g};for(let g=0;g<t;g++){const _=g,f=(e-1)*t+g;o[_]||(o[_]=1,r[_]=1,c(_)),o[f]||(o[f]=1,r[f]=1,c(f))}for(let g=0;g<e;g++){const _=g*t,f=g*t+t-1;o[_]||(o[_]=1,r[_]=1,c(_)),o[f]||(o[f]=1,r[f]=1,c(f))}const u=n*n;let h=0;for(;h<l;){const g=a[h++],_=g*4,f=i[_],m=i[_+1],M=i[_+2],v=g%t,S=(g-v)/t,C=b=>{if(o[b])return;o[b]=1;const T=b*4,w=i[T]-f,R=i[T+1]-m,x=i[T+2]-M;w*w+R*R+x*x<=u&&(r[b]=1,c(b))};v>0&&C(g-1),v<t-1&&C(g+1),S>0&&C(g-t),S<e-1&&C(g+t)}const d=new Uint8Array(s);for(let g=0;g<s;g++)d[g]=r[g]?0:1;const p=nh(d,t,e);return{mask:d,width:t,height:e,source:"flood",borderSpread:lx(i,t,e),...p}}function ux(i,t,e,n=ax){const s=t*e,r=new Uint8Array(s);for(let a=0;a<s;a++)r[a]=i[a*4+3]>=n?1:0;const o=nh(r,t,e);return{mask:r,width:t,height:e,source:"alpha",borderSpread:0,...o}}function ih(i,t=eh){return Vv(i)?ux(i.pixels,i.width,i.height):cx(i.pixels,i.width,i.height,t)}const sh=.65,rh=.35,hx=3;function dx(i,t,e){const n=t*e,s=new Float32Array(n),r=t+e+1;for(let l=0;l<n;l++)s[l]=i[l]?r:0;const o=1,a=Math.SQRT2;for(let l=0;l<e;l++)for(let c=0;c<t;c++){const u=l*t+c;if(!i[u])continue;let h=s[u];c>0&&(h=Math.min(h,s[u-1]+o)),l>0&&(h=Math.min(h,s[u-t]+o)),c>0&&l>0&&(h=Math.min(h,s[u-t-1]+a)),c<t-1&&l>0&&(h=Math.min(h,s[u-t+1]+a)),s[u]=h}for(let l=e-1;l>=0;l--)for(let c=t-1;c>=0;c--){const u=l*t+c;if(!i[u])continue;let h=s[u];c<t-1&&(h=Math.min(h,s[u+1]+o)),l<e-1&&(h=Math.min(h,s[u+t]+o)),c<t-1&&l<e-1&&(h=Math.min(h,s[u+t+1]+a)),c>0&&l<e-1&&(h=Math.min(h,s[u+t-1]+a)),s[u]=h}return s}function fx(i,t,e,n){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++){const a=o*t;for(let l=0;l<t;l++){let c=0,u=0;const h=Math.max(0,l-n),d=Math.min(t-1,l+n);for(let p=h;p<=d;p++)c+=i[a+p],u++;s[a+l]=c/u}}for(let o=0;o<t;o++)for(let a=0;a<e;a++){let l=0,c=0;const u=Math.max(0,a-n),h=Math.min(e-1,a+n);for(let d=u;d<=h;d++)l+=s[d*t+o],c++;r[a*t+o]=l/c}return r}function px(i,t){const s=Math.min(1,i/.12),r=Math.min(1,t*5),o=.18+(.55-.18)*s;return Math.max(.05,o*(1-.5*r))}function mx(i,t,e=sh,n=rh){const{width:s,height:r}=t,o=s*r,a=new Float32Array(o);if(t.area===0)return{depth:a,width:s,height:r,maxThickness:0,confidence:0};const l=dx(t.mask,s,r);let c=0;for(let _=0;_<o;_++)l[_]>c&&(c=l[_]);if(c<=0)return{depth:a,width:s,height:r,maxThickness:0,confidence:.05};const u=new Float32Array(o);for(let _=0;_<o;_++){const f=_*4;u[_]=kv(i.pixels[f],i.pixels[f+1],i.pixels[f+2])/255}const h=fx(u,s,r,hx);let d=0;for(let _=0;_<o;_++){if(!t.mask[_])continue;const f=u[_]-h[_];d+=f*f}const p=Math.sqrt(d/t.area),g=p>1e-4?1/(p*3):0;for(let _=0;_<o;_++){if(!t.mask[_])continue;const f=Math.pow(l[_]/c,e),m=Math.max(-1,Math.min(1,(u[_]-h[_])*g)),M=f*(1+n*m);a[_]=Math.max(0,Math.min(1,M))}return{depth:a,width:s,height:r,maxThickness:c,confidence:px(p,t.borderSpread)}}const oh={id:"inflate",name:"Inflado de silueta (local, sin IA)",external:!1,maxConfidence:.55,description:"Infla la silueta por distancia al contorno y corrige con el sombreado de la foto.",async estimate(i,t){return mx(i,t,sh,rh)}},gx={id:"flat",name:"Espesor constante (sin estimar)",external:!1,maxConfidence:.3,description:"No estima relieve: da el mismo espesor a todo el objeto.",async estimate(i,t){const e=new Float32Array(t.width*t.height);for(let n=0;n<e.length;n++)e[n]=t.mask[n]?1:0;return{depth:e,width:t.width,height:t.height,maxThickness:t.area>0?1:0,confidence:t.area>0?.3:0}}},ah=[oh,gx];let lh=oh;function Zi(){return lh}function _x(i){const t=ah.find(e=>e.id===i);return t?(lh=t,!0):!1}function vx(){return ah}const xx=.02,Mx=.92;function yx(i){const t=i.width*i.height;if(t===0||i.area===0)return{stage:"Segmentación",value:0,reason:"no se encontró ningún objeto"};const e=i.area/t;if(i.source==="alpha")return{stage:"Segmentación",value:.97,reason:"la imagen trae canal alpha: la máscara es exacta, no estimada"};if(e<xx)return{stage:"Segmentación",value:.15,reason:`el objeto ocupa sólo ${(e*100).toFixed(1)}% del encuadre`};if(e>Mx)return{stage:"Segmentación",value:.2,reason:"casi todo el encuadre quedó como objeto: el fondo no se separó"};const n=Math.min(1,i.borderSpread*5);return{stage:"Segmentación",value:.92*(1-.7*n),reason:n>.3?"el borde del encuadre no es un fondo parejo: el objeto puede estar cortado":"fondo separado por continuidad de color"}}function Sx(i){return{stage:"Profundidad",value:i,reason:"estimada por inflado de la silueta más la pista de sombreado — no es una medición"}}function Ex(i,t){return{stage:"Reconstrucción 3D",value:i,reason:`modo ${t}`}}function bx(i){if(i.length===0)return 0;let t=1;for(const e of i)e.value<t&&(t=e.value);return t}const Ax="Una sola imagen no contiene toda la información de profundidad. La geometría 3D es una estimación.",Tx=.45;function wx(i){return i<Tx?"Reconstrucción aproximada":"Reconstrucción estimada"}const Cx={id:"local",name:"Local (sin IA, en el navegador)",external:!1,async segment(i){return ih(i)},async estimateDepth(i,t){return Zi().estimate(i,t)}};let Rx=Cx;function Fc(){return Rx}const Vr=48;function Le(i,t,e,n){return(e*n+t)*n+i}function Oo(i,t,e){return((i+.5)/t-.5)*2*e}function Ne(i,t,e){const n=Math.floor((i/e+1)/2*t);return n<0||n>=t?-1:n}function ch(i=Vr,t=si){const e=i*i*i;return{res:i,half:t,occupied:new Uint8Array(e),density:new Uint8Array(e)}}function Bc(i,t,e,n=Vr,s=si){const r=ch(n,s);for(let o=0;o<t;o++){const a=Ne(i[o*3+0]-e[0],n,s);if(a<0)continue;const l=Ne(i[o*3+1]-e[1],n,s);if(l<0)continue;const c=Ne(i[o*3+2]-e[2],n,s);if(c<0)continue;const u=Le(a,l,c,n);r.occupied[u]=1,r.density[u]<255&&r.density[u]++}return r}function Px(i,t,e,n,s=Vr,r=si,o=null){const a=s*s*s,l=ch(s,r),c=new Uint8Array(a*3),u=o?new Uint8Array(a).fill(255):null,h=new Float64Array(a),d=new Float64Array(a),p=new Float64Array(a),g=new Uint32Array(a);for(let _=0;_<e;_++){const f=Ne(i[_*3+0]-n[0],s,r);if(f<0)continue;const m=Ne(i[_*3+1]-n[1],s,r);if(m<0)continue;const M=Ne(i[_*3+2]-n[2],s,r);if(M<0)continue;const v=Le(f,m,M,s);l.occupied[v]=1,l.density[v]<255&&l.density[v]++,h[v]+=t[_*3+0],d[v]+=t[_*3+1],p[v]+=t[_*3+2],g[v]++,u&&o&&o[_]<u[v]&&(u[v]=o[_])}for(let _=0;_<a;_++)g[_]!==0&&(c[_*3+0]=Math.round(h[_]/g[_]),c[_*3+1]=Math.round(d[_]/g[_]),c[_*3+2]=Math.round(p[_]/g[_]));return u?{...l,color:c,origin:u}:{...l,color:c}}function zc(i,t,e,n,s){return i[Le(t,e,n,s)]?t===0||t===s-1||e===0||e===s-1||n===0||n===s-1?!0:!i[Le(t-1,e,n,s)]||!i[Le(t+1,e,n,s)]||!i[Le(t,e-1,n,s)]||!i[Le(t,e+1,n,s)]||!i[Le(t,e,n-1,s)]||!i[Le(t,e,n+1,s)]:!1}function Lx(i){const{res:t,half:e,occupied:n,color:s,origin:r}=i;let o=0;for(let h=0;h<t;h++)for(let d=0;d<t;d++)for(let p=0;p<t;p++)zc(n,p,d,h,t)&&o++;const a=new Float32Array(o*3),l=new Uint8Array(o*3),c=r?new Uint8Array(o):null;s||l.fill(255);let u=0;for(let h=0;h<t;h++)for(let d=0;d<t;d++)for(let p=0;p<t;p++){if(!zc(n,p,d,h,t))continue;const g=Le(p,d,h,t);a[u*3+0]=Oo(p,t,e),a[u*3+1]=Oo(d,t,e),a[u*3+2]=Oo(h,t,e),s&&(l[u*3+0]=s[g*3+0],l[u*3+1]=s[g*3+1],l[u*3+2]=s[g*3+2]),c&&r&&(c[u]=r[g]),u++}return{points:a,colors:l,origin:c,count:o}}function Ix(i,t){if(i.res!==t.res)throw new Error(`validateCoverage: grillas de distinta resolución (${i.res} vs ${t.res})`);const e=[];let n=0,s=0;for(let r=0;r<i.occupied.length;r++)i.occupied[r]&&(n++,t.occupied[r]?s++:e.push(r));return{target:n,covered:s,coverage:n===0?1:s/n,missing:Int32Array.from(e)}}const Dx=8;function uh(i){const{res:t,occupied:e}=i,n=t*t*t,s=new Uint8Array(n),r=new Int32Array(n),o=[];let a=0;for(let c=0;c<n;c++)e[c]&&a++;if(a===0)return{count:0,largest:0,occupied:0,cohesion:1,sizes:[]};for(let c=0;c<n;c++){if(!e[c]||s[c])continue;let u=0;r[u++]=c,s[c]=1;let h=0;for(;u>0;){const d=r[--u];h++;const p=d%t,g=(d-p)/t,_=g%t,f=(g-_)/t,m=(M,v,S)=>{if(M<0||v<0||S<0||M>=t||v>=t||S>=t)return;const C=Le(M,v,S,t);s[C]||!e[C]||(s[C]=1,r[u++]=C)};m(p-1,_,f),m(p+1,_,f),m(p,_-1,f),m(p,_+1,f),m(p,_,f-1),m(p,_,f+1)}o.push(h)}o.sort((c,u)=>u-c);const l=o[0];return{count:o.length,largest:l,occupied:a,cohesion:l/a,sizes:o.slice(0,Dx)}}const Ux=[48,64,96,128],Nx={48:"Baja",64:"Media",96:"Alta",128:"Extrema"};function xn(){return typeof performance<"u"?performance.now():Date.now()}async function Hc(i,t={}){const e=t.mode??sn.DEPTH,n=t.voxelRes??64,s={};let r=xn();const o=ih(i);s.segmentacion=xn()-r;const a=yx(o);r=xn();const l=await Zi().estimate(i,o);s.profundidad=xn()-r,r=xn();const c=ox(i,o,l,e,{voxelRes:n,maxPoints:t.maxPoints,segmentationConfidence:a.value});s.reconstruccion=xn()-r;const u=[a,Sx(l.confidence),Ex(c.confidence,c.mode)];if(c.cloud.count===0)return{mask:o,depth:l,cloud:Va(),stages:u,confidence:0,mode:c.mode,depthProviderId:Zi().id,visionProviderId:Fc().id,stats:{cloudPoints:0,voxels:0,surfaceVoxels:0,voxelRes:n,components:0,cohesion:1,origins:Oc(Va()),timings:s}};r=xn();const h=Px(c.cloud.points,c.cloud.colors,c.cloud.count,[0,0,0],n,void 0,c.cloud.origin);s.voxelizacion=xn()-r,r=xn();const d=Lx(h),p=uh(h);s.validacion=xn()-r;let g=0;for(let f=0;f<h.occupied.length;f++)h.occupied[f]&&g++;const _={points:d.points,colors:d.colors,origin:d.origin??new Uint8Array(d.count).fill(2),count:d.count};return{mask:o,depth:l,cloud:_,stages:u,confidence:bx(u),mode:c.mode,depthProviderId:Zi().id,visionProviderId:Fc().id,stats:{cloudPoints:c.cloud.count,voxels:g,surfaceVoxels:d.count,voxelRes:n,components:p.count,cohesion:p.cohesion,origins:Oc(_),timings:s}}}function Ox(i,t,e){return{source:{fileName:t,width:e.width,height:e.height,mode:i.mode,visionProvider:i.visionProviderId,depthProvider:i.depthProviderId},cloud:i.cloud,stages:i.stages,confidence:i.confidence,stats:i.stats}}let Ke=null,yr=!1,Fx=1,Sr="inline";function Bx(){return Sr}function zx(){if(yr)return null;if(Ke)return Ke;try{return Ke=new Worker(new URL("/Simulador-nanobots/assets/pipeline.worker-0mBm9kOk.js",import.meta.url),{type:"module"}),Ke.onerror=()=>{yr=!0,Ke==null||Ke.terminate(),Ke=null},Ke}catch{return yr=!0,null}}const Hx=2e4;async function kx(i,t){const e=zx();if(!e)return Sr="inline",Hc(i,t);const n=Fx++;try{const s=await new Promise((r,o)=>{const a=setTimeout(()=>{u(),o(new Error("el Worker no respondió a tiempo"))},Hx),l=d=>{d.data.id===n&&(u(),d.data.ok?r(d.data.core):o(new Error(d.data.error)))},c=()=>{u(),o(new Error("el Worker falló"))};function u(){clearTimeout(a),e.removeEventListener("message",l),e.removeEventListener("error",c)}e.addEventListener("message",l),e.addEventListener("error",c);const h={id:n,pixels:new Uint8ClampedArray(i.pixels),width:i.width,height:i.height,options:t,depthProviderId:Zi().id};e.postMessage(h,[h.pixels.buffer])});return Sr="worker",s}catch{return yr=!0,Ke==null||Ke.terminate(),Ke=null,Sr="inline",Hc(i,t)}}const kc=6e4,Vc={imagen:"Imagen",mascara:"Máscara",profundidad:"Profundidad",procedencia:"Vista / inferida"},Fo=240;function Vx(i){return i<1024?`${i} B`:i<1024*1024?`${(i/1024).toFixed(0)} KB`:`${(i/(1024*1024)).toFixed(1)} MB`}function ur(i){return`${Math.round(i*100)}%`}function Gx(i,t){const e=i.addFolder("Imagen → 3D");let n=null,s=null,r=null,o=null,a="imagen",l=!1;const c={modo:sn.DEPTH,resolucion:64,profundidad:Zi().id},u=document.createElement("div");u.style.cssText="font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;",u.textContent=Ax,e.domElement.appendChild(u);const h=document.createElement("canvas");h.width=Fo,h.height=1,h.style.cssText=`display:block;width:${Fo}px;margin:0 6px 4px;background:#05080c;border:1px solid #1d2a33;`,e.domElement.appendChild(h);const d=document.createElement("div");d.style.cssText="font-size:10px;color:#8fa3ad;padding:0 6px 4px;line-height:1.5;white-space:pre;",e.domElement.appendChild(d);const p=document.createElement("div");p.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";const g=document.createElement("div");g.style.cssText="font-size:10px;color:#9fb3bd;padding:2px 6px 6px;line-height:1.6;white-space:pre;";function _(){var N;const w=h.getContext("2d");if(!w||!s)return;const R=Fo/s.width,x=Math.max(1,Math.round(s.height*R));h.height=x,h.style.height=`${x}px`;const y=w.createImageData(s.width,s.height);for(let B=0;B<s.width*s.height;B++){let I=0,D=0,W=0;if(a==="imagen"||!r)I=s.pixels[B*4],D=s.pixels[B*4+1],W=s.pixels[B*4+2];else if(a==="mascara"){const H=r.mask.mask[B]===1;I=H?60:8,D=H?220:12,W=H?180:18}else if(a==="profundidad"){const H=r.depth.depth[B];I=D=W=Math.round(H*255),r.mask.mask[B]||(I=8,D=12,W=18)}else{const H=r.mask.mask[B]===1;I=H?70:8,D=H?200:12,W=H?90:18}y.data[B*4]=I,y.data[B*4+1]=D,y.data[B*4+2]=W,y.data[B*4+3]=255}const L=document.createElement("canvas");L.width=s.width,L.height=s.height,(N=L.getContext("2d"))==null||N.putImageData(y,0,0),w.clearRect(0,0,h.width,h.height),w.imageSmoothingEnabled=!1,w.drawImage(L,0,0,h.width,h.height)}function f(){if(!n||!s){d.textContent="Sin imagen.";return}const w=n.type||"desconocido";d.textContent=`${n.name}
${Vx(n.size)} · ${w}
procesada a ${s.width}×${s.height}`}function m(){if(!o||!r){g.textContent="";return}const w=o.stats,R=w.origins,x=w.surfaceVoxels,y=t.readNanobotCount(),L=[];L.push(`${wx(o.confidence)} — confianza ${ur(o.confidence)}`);for(const B of o.stages)L.push(`  ${B.stage}: ${ur(B.value)} (${B.reason})`);L.push(""),L.push(`geometría vista: ${ur(R.observedFraction)} de la cáscara`),L.push(`  observada ${R.observed} · interpolada ${R.interpolated} · inferida ${R.inferred}`),L.push(""),L.push(`vóxeles: ${w.voxels} (${w.surfaceVoxels} de superficie, res ${w.voxelRes}³)`),L.push(`piezas: ${w.components}${w.components>1?` (cohesión ${ur(w.cohesion)})`:""}`),x>kc?L.push(`⚠ la cáscara pide ${x} agentes y el techo son ${kc}`):x>y&&L.push(`⚠ hacen falta ~${x} nanobots y hay ${y}: subí la cantidad`);const N=Object.entries(w.timings).map(([B,I])=>`${B} ${I.toFixed(0)}ms`).join(" · ");L.push(""),L.push(`${Bx()==="worker"?"en Worker":"en línea (sin Worker)"} — ${N}`),g.textContent=L.join(`
`)}const M=document.createElement("input");M.type="file",M.accept="image/png,image/jpeg,image/webp,image/*",M.style.display="none",M.dataset.imageSlot="single",document.body.appendChild(M);async function v(w){if(!w.type.startsWith("image/")){p.textContent="Ese archivo no es una imagen.";return}n=w,r=null,o=null,a="imagen",p.textContent="Leyendo imagen...";try{s=await Gv(w)}catch(R){s=null,p.textContent=R instanceof Error?R.message:"No se pudo leer la imagen.";return}f(),_(),m(),p.textContent="Lista. Elegí modo y resolución, y reconstruí."}M.addEventListener("change",()=>{var R;const w=(R=M.files)==null?void 0:R[0];w&&v(w)});const S=e.domElement;S.addEventListener("dragover",w=>{w.preventDefault(),S.style.outline="1px dashed #4be3ff"}),S.addEventListener("dragleave",()=>{S.style.outline=""}),S.addEventListener("drop",w=>{var x,y;w.preventDefault(),S.style.outline="";const R=(y=(x=w.dataTransfer)==null?void 0:x.files)==null?void 0:y[0];R&&v(R)}),window.addEventListener("paste",w=>{var x,y;const R=(y=(x=w.clipboardData)==null?void 0:x.files)==null?void 0:y[0];R&&R.type.startsWith("image/")&&v(R)}),e.add({fn:()=>M.click()},"fn").name("Subir imagen"),e.add(c,"modo",Object.fromEntries(Object.values(sn).map(w=>[Qv[w],w]))).name("Modo"),e.add(c,"resolucion",Object.fromEntries(Ux.map(w=>[`${Nx[w]} (${w}³)`,w]))).name("Resolución"),e.add(c,"profundidad",Object.fromEntries(vx().map(w=>[w.name,w.id]))).name("Profundidad").onChange(w=>_x(w));const C=e.add({etapa:a},"etapa",Object.fromEntries(Object.keys(Vc).map(w=>[Vc[w],w]))).name("Ver").onChange(w=>{a=w,_()}),b={reconstruir:async()=>{if(!l){if(!n||!s){p.textContent="Subí una imagen primero.";return}l=!0,p.textContent="Reconstruyendo...";try{if(r=await kx(s,{mode:c.modo,voxelRes:c.resolucion}),o=Ox(r,n.name,s),r.cloud.count===0){p.textContent="No se pudo separar ningún objeto — probá con un fondo más liso.",m();return}a="mascara",C.setValue("mascara"),_(),m(),p.textContent=`${r.stats.surfaceVoxels} vóxeles — construyendo con el enjambre...`,await T()}catch(w){p.textContent=w instanceof Error?w.message:"Falló la reconstrucción."}finally{l=!1}}},reconstruir2:async()=>{if(!l){if(!r||!n||r.cloud.count===0){p.textContent="Reconstruí primero.";return}l=!0;try{await T()}finally{l=!1}}}};async function T(){if(!r||!n)return;const w=qu(r.cloud.points,r.cloud.colors),R=await th(n);t.onFormShape(w,R),p.textContent=`Construyendo: ${r.stats.surfaceVoxels} vóxeles de superficie.`}e.add(b,"reconstruir").name("Reconstruir y construir"),e.add(b,"reconstruir2").name("Volver a construir"),e.domElement.appendChild(p),e.domElement.appendChild(g),f()}const Oe={CORE:0,TRAVELING:1,ASSEMBLING:2,ATTACHED:3,RETURNING:4,IDLE:5},Gc=["núcleo","viajando","ensamblando","asentado","volviendo","reposo","reparando","error"],Bo=new Uint8Array(0),Wc=new Int16Array(0),zo=new Float32Array(0);function Wx(){let i=0,t=Bo,e=Wc,n=Bo,s=zo,r=zo,o=new Uint8Array(0),a=new Uint8Array(0),l=0;const c={get index(){return l},get role(){return t[l]??0},get region(){return e[l]??-1},get layer(){return n[l]??0},get state(){return o[l]??Oe.IDLE},get botType(){return a[l]??jt.NANOBOT},get delayFraction(){return s[l]??0},get targetX(){return r[l*3+0]??0},get targetY(){return r[l*3+1]??0},get targetZ(){return r[l*3+2]??0}};function u(d){o.length>=d||(o=new Uint8Array(d))}function h(d){a.length>=d||(a=new Uint8Array(d))}return{get count(){return i},get role(){return t},get region(){return e},get layer(){return n},get delayFraction(){return s},get target(){return r},get state(){return o},get botType(){return a},adoptFormation(d){i=d.count,t=d.role,e=d.region,n=d.layer,s=d.delayFraction,r=d.target,u(i),o.fill(Oe.CORE,0,i),h(i),a.fill(jt.NANOBOT,0,i)},reset(d,p,g){i=d,t=p,e=Wc,n=Bo,s=zo,r=g,u(i),o.fill(Oe.IDLE,0,i),h(i),a.fill(jt.NANOBOT,0,i)},fillState(d){u(i),o.fill(d,0,i)},assignTypesFromRoles(d){h(i);for(let p=0;p<i;p++)a[p]=t[p]===d?jt.MATERIAL:jt.NANOBOT},countByType(d){d.fill(0);for(let p=0;p<i;p++)d[a[p]]++;return d},countByState(d){d.fill(0);for(let p=0;p<i;p++)d[o[p]]++;return d},at(d){return l=d,c}}}function Xx(i,t){const e=new hl({title:"Parámetros del enjambre"});e.addFolder("Microbots (exoesqueleto)").add(i,"microbotCount",0,6e4,100).name("Cantidad").onFinishChange(r=>t.onMicrobotCountChange(r)),e.add(i,"count",20,6e4,1).name("Nanobots").onFinishChange(r=>t.onCountChange(r)),e.add(i,"maxSpeed",.5,10,.1).name("Velocidad máx.").onChange(()=>t.onParamsChange(i)),e.add(i,"cohesion",0,3,.05).name("Cohesión").onChange(()=>t.onParamsChange(i)),e.add(i,"separation",0,3,.05).name("Separación").onChange(()=>t.onParamsChange(i)),e.add(i,"alignment",0,3,.05).name("Alineación").onChange(()=>t.onParamsChange(i));const s={guardar:()=>t.onSave({count:i.count,cohesion:i.cohesion,separation:i.separation,alignment:i.alignment,maxSpeed:i.maxSpeed}),cargar:()=>t.onLoad()};return e.add(s,"guardar").name("Guardar configuración"),e.add(s,"cargar").name("Cargar configuración"),Jx(e,t),Gx(e,{onFormShape:t.onFormShape,readNanobotCount:t.readNanobotCount??(()=>i.count)}),e}const Us=200;function Yx(i){const t=i.addFolder("Estado de los agentes"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin agentes",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<Us)return;n=o;const a=r();let l="";for(let u=0;u<Gc.length;u++)a[u]!==0&&(l+=`${Gc[u]}: ${a[u]}
`);const c=l===""?"sin agentes":l.trimEnd();c!==s&&(s=c,e.textContent=c)}}function $x(i){const t=i.addFolder("Cola de tareas"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin tareas",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<Us)return;n=o;const a=r().describe(),l=a.length?a.join(`
`):"sin tareas";l!==s&&(s=l,e.textContent=l)}}function qx(i){const t=i.addFolder("Cobertura de la figura"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin figura",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<Us)return;n=o;const a=r(),l=a?`${Math.round(a.fraction*100)}% del volumen
${a.covered} de ${a.total} celdas`:"sin figura";l!==s&&(s=l,e.textContent=l)}}function jx(i,t){const e=i.addFolder("Material y regiones"),n=document.createElement("div");n.style.padding="6px 10px 2px",n.style.fontSize="11px",n.style.lineHeight="1.6",n.style.whiteSpace="pre-wrap",n.style.opacity="0.85",n.textContent="sin figura",e.domElement.appendChild(n);const s=document.createElement("div");s.style.cssText="display:flex;flex-wrap:wrap;gap:4px;padding:2px 10px 8px",e.domElement.appendChild(s);const r={regiones:!1};e.add(r,"regiones").name("depurar regiones").onChange(c=>t(c));let o=-1/0,a="",l="";return c=>{const u=performance.now();if(u-o<Us)return;o=u;const h=c(),d=h?[`${h.regions} ${h.regions===1?"región":"regiones"} · ${h.slots} ${h.slots===1?"tanda":"tandas"}`,`${h.materialCount} Material Bots`,h.phase,h.sourceLabel].join(`
`):"sin figura";d!==a&&(a=d,n.textContent=d);const p=h?h.palette.join(","):"";if(p!==l){l=p,s.replaceChildren();for(const g of(h==null?void 0:h.palette)??[]){const _=document.createElement("span");_.title=Ga(g),_.style.cssText=`width:16px;height:16px;border-radius:3px;border:1px solid rgba(255,255,255,0.25);background:${Ga(g)}`,s.appendChild(_)}}}}function Ga(i){return`#${i.toString(16).padStart(6,"0")}`}function Kx(i){const t=i.addFolder("Tipos de bot"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.7",t.domElement.appendChild(e);const n=[];for(const o of yn){const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="6px";const l=document.createElement("span");l.style.width="9px",l.style.height="9px",l.style.borderRadius="2px",l.style.flex="0 0 auto",l.style.background=Ga(rn(o.type).identityColor),a.appendChild(l);const c=document.createElement("span");c.textContent=o.name,c.style.flex="1 1 auto",c.style.opacity=o.implemented?"0.9":"0.5",c.title=`${o.role} — ${o.fn}`,a.appendChild(c);const u=document.createElement("span");u.style.opacity="0.75",u.textContent="0",a.appendChild(u),n.push(u),e.appendChild(a);const h=o.implemented?o.note:o.pendingReason;if(h){const d=document.createElement("div");d.textContent=h,d.style.fontSize="10px",d.style.opacity="0.45",d.style.margin="-2px 0 4px 15px",d.style.lineHeight="1.35",e.appendChild(d)}}let s=-1/0;const r=yn.map(()=>-1);return o=>{const a=performance.now();if(a-s<Us)return;s=a;const l=o();for(let c=0;c<yn.length;c++){const u=l[yn[c].type]??0;u!==r[c]&&(r[c]=u,n[c].textContent=yn[c].implemented?String(u):"sin agentes")}}}function Zx(i,t){const e=i.addFolder("Inspección"),n=document.createElement("div");n.style.cssText="font-size:10px;opacity:0.5;line-height:1.35;padding:4px 10px",n.textContent="El Zoom especial deja acercarse mucho más que el zoom normal, y ahí se distingue el hexágono y el tipo de cada bot.",e.domElement.appendChild(n);const s={zoom:()=>{const l=t.onToggleZoom();r.name(l?"Zoom especial: ACTIVO":"Zoom especial")},inspector:()=>{const l=t.onToggleInspector();o.name(l?"Inspección de bots: ABIERTA":"Inspección de bots")},capas:()=>{const l=t.onToggleLayers();a.name(l?"Ver capas: ABIERTO":"Ver capas")}},r=e.add(s,"zoom").name("Zoom especial"),o=e.add(s,"inspector").name("Inspección de bots"),a=e.add(s,"capas").name("Ver capas")}function Jx(i,t){const e=i.addFolder("Comandos"),n={objectName:""};let s=null;const r=document.createElement("input");r.type="file",r.accept="image/*",r.style.display="none",r.dataset.commandSlot="photo",document.body.appendChild(r);const o=document.createElement("img");o.style.cssText="width:100%;max-height:80px;object-fit:contain;display:none;margin:4px 0;border-radius:4px;";const a=document.createElement("div");a.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";let l=null;function c(){l&&(URL.revokeObjectURL(l),l=null)}o.addEventListener("load",c),o.addEventListener("error",c),r.addEventListener("change",()=>{var d;const h=(d=r.files)==null?void 0:d[0];h&&(c(),l=URL.createObjectURL(h),o.src=l,o.style.display="block",s=h,a.textContent=`Foto adjunta: ${h.name}`)}),e.add(n,"objectName").name("Objeto");const u={adjuntarFoto:()=>r.click(),formarObjeto:async()=>{if(!s){a.textContent="Subí una foto del objeto antes de formarlo.";return}const h=ul(n.objectName);if(!h){a.textContent=`Objeto no reconocido. Probá: ${F_().join(", ")}`;return}a.textContent=`Formando: ${h}`;const d=await th(s);t.onFormShape(h,d)},volverAlNucleo:()=>{a.textContent="Volviendo al núcleo...",t.onReturnToCore()}};e.add(u,"adjuntarFoto").name("Adjuntar foto"),e.add(u,"formarObjeto").name("Formar objeto"),e.add(u,"volverAlNucleo").name("Volver al núcleo"),e.domElement.appendChild(o),e.domElement.appendChild(a)}const dl=Math.PI*(3-Math.sqrt(5));function Ji(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function Qx(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=t[2]-i[2],r=Math.sqrt(e*e+n*n+s*s)||1,o=e/r,a=n/r,l=s/r,c=Math.abs(a)>.99?1:0,u=Math.abs(a)>.99?0:1;let h=u*l,d=-c*l,p=c*a-u*o;const g=Math.sqrt(h*h+d*d+p*p)||1;return h/=g,d/=g,p/=g,{ux:h,uy:d,uz:p,vx:a*p-l*d,vy:l*h-o*p,vz:o*d-a*h}}function Er(i,t,e,n,s,r){const o=n*Math.sin(i*Math.PI),a=i*e*Math.PI*2+t*dl,l=Math.cos(a)*o,c=Math.sin(a)*o;r[0]=s.ux*l+s.vx*c,r[1]=s.uy*l+s.vy*c,r[2]=s.uz*l+s.vz*c}const hh=1,dh=1,fl=hh+dh,tM=.35,fh=fl*tM,Xc=fl-fh,pl={travelDuration:hh,layerStaggerSpan:dh,layerDuration:fl,swirlTurns:2.5,swirlMaxRadius:4,packetDuration:fh,packetSwirlTurns:2,packetSwirlMaxRadius:1.2,burstTravelDuration:Xc/2,burstStaggerSpan:Xc/2};function eM(i,t,e){return Math.min(Math.floor(i/e),t-1)}const nM=1.2;function ph(i,t,e,n,s){let r=0,o=-1/0,a=0,l=!1;for(let c=0;c<e;c++){if(i[c]!==n)continue;const u=t[c*3+1];u>o&&(o=u,r=t[c*3+0],a=t[c*3+2],l=!0)}return l?[r,o+nM,a]:[s[0],s[1],s[2]]}function iM(i,t,e,n,s,r,o,a=0){const c=new Uint8Array(e);for(let f=0;f<e;f++)c[f]=i[f]===n?1:0;const u=ph(i,t,e,n,r),h=new Float32Array(e),d=[1/0,1/0],p=[-1/0,-1/0];for(let f=0;f<e;f++){const m=c[f],M=m===1?u:o,v=t[f*3+0]-M[0],S=t[f*3+1]-M[1],C=t[f*3+2]-M[2];h[f]=Math.sqrt(v*v+S*S+C*C);const b=h[f];b<d[m]&&(d[m]=b),b>p[m]&&(p[m]=b)}const g=new Float32Array(e);for(let f=0;f<e;f++){const m=c[f],M=p[m]-d[m];g[f]=M>0?(h[f]-d[m])/M:0}const _=2*s;return{layerOf:c,delayFraction:g,layerCount:2,travelDuration:_,totalDuration:_+a,wave0Landing:u}}const de=[0,0,0],sM=.85;function Yc(i,t){return i>=1?Oe.ATTACHED:i<=0?Oe.CORE:i>=sM&&t===Oe.TRAVELING?Oe.ASSEMBLING:t}function rM(i,t,e,n,s,r,o,a=pl,l,c=Oe.TRAVELING,u=null,h=!1){const{layerOf:d,delayFraction:p,layerCount:g,wave0Landing:_}=n;if(h){lM(i,t,e,n,s,r,o,a,l);return}const f=eM(o,g,a.layerDuration),m=o-f*a.layerDuration,M=f===1;for(let v=0;v<e;v++){const S=d[v];if(S<f)i[v*3+0]=t[v*3+0],i[v*3+1]=t[v*3+1],i[v*3+2]=t[v*3+2],l&&(l[v]=Oe.ATTACHED);else if(S>f){const C=u?u[v*3+0]:s[0],b=u?u[v*3+1]:s[1],T=u?u[v*3+2]:s[2];i[v*3+0]=C,i[v*3+1]=b,i[v*3+2]=T,l&&(l[v]=Oe.CORE)}else if(!u&&M&&m<a.packetDuration){const C=Ji(Math.min(Math.max(m/a.packetDuration,0),1));Er(C,v,a.packetSwirlTurns,a.packetSwirlMaxRadius,r,de),i[v*3+0]=s[0]+(_[0]-s[0])*C+de[0],i[v*3+1]=s[1]+(_[1]-s[1])*C+de[1],i[v*3+2]=s[2]+(_[2]-s[2])*C+de[2],l&&(l[v]=c)}else if(!u&&M){const b=(m-a.packetDuration-p[v]*a.burstStaggerSpan)/a.burstTravelDuration,T=Ji(Math.min(Math.max(b,0),1));Er(T,v,a.swirlTurns,a.swirlMaxRadius,r,de),i[v*3+0]=_[0]+(t[v*3+0]-_[0])*T+de[0],i[v*3+1]=_[1]+(t[v*3+1]-_[1])*T+de[1],i[v*3+2]=_[2]+(t[v*3+2]-_[2])*T+de[2],l&&(l[v]=Yc(T,c))}else{const C=(m-p[v]*a.layerStaggerSpan)/a.travelDuration,b=Ji(Math.min(Math.max(C,0),1));Er(b,v,a.swirlTurns,a.swirlMaxRadius,r,de);const T=u?u[v*3+0]:s[0],w=u?u[v*3+1]:s[1],R=u?u[v*3+2]:s[2];i[v*3+0]=T+(t[v*3+0]-T)*b+de[0],i[v*3+1]=w+(t[v*3+1]-w)*b+de[1],i[v*3+2]=R+(t[v*3+2]-R)*b+de[2],l&&(l[v]=Yc(b,c))}}}const oM=3,aM=6;function lM(i,t,e,n,s,r,o,a,l){const{layerOf:c,delayFraction:u,layerCount:h}=n,d=n.travelDuration||h*a.layerDuration,p=d>0?1-Math.min(Math.max(o/d,0),1):1;for(let g=0;g<e;g++){const f=((h>1?(h-1-c[g])/(h-1):0)+u[g])*.5,m=Math.min(Math.max((p-f*.6)/.4,0),1),M=Ji(m);if(m<=0){i[g*3+0]=t[g*3+0],i[g*3+1]=t[g*3+1],i[g*3+2]=t[g*3+2],l&&(l[g]=Oe.ATTACHED);continue}const v=aM*Math.sin(M*Math.PI),S=M*oM*Math.PI*2+g*dl,C=Math.cos(S),b=Math.sin(S);i[g*3+0]=t[g*3+0]+(s[0]-t[g*3+0])*M+(r.ux*C+r.vx*b)*v,i[g*3+1]=t[g*3+1]+(s[1]-t[g*3+1])*M+(r.uy*C+r.vy*b)*v,i[g*3+2]=t[g*3+2]+(s[2]-t[g*3+2])*M+(r.uz*C+r.vz*b)*v,l&&(l[g]=M>=1?Oe.CORE:Oe.RETURNING)}}const cM=.15,uM=.1;function Fr(i,t,e=cM,n=uM){if(t<=1)return{start:0,end:1-n};const s=(1-n)/(t-(t-1)*e),r=i*s*(1-e);return{start:r,end:r+s}}function $c(i,t){const e=t.end-t.start;return e<=0?i>=t.end?1:0:Ji(Math.min(Math.max((i-t.start)/e,0),1))}function hM(i,t,e,n,s,r,o,a,l,c,u,h=1){const d=$c(l,Fr(0,h)),p=h>1?$c(l,Fr(1,h)):d;for(let g=0;g<r;g++){const _=s[g]?p:d;Er(_,g,c,u,a,de),s[g]?(t[g*6+0]=o[0]+(n[g*6+0]-o[0])*_+de[0],t[g*6+1]=o[1]+(n[g*6+1]-o[1])*_+de[1],t[g*6+2]=o[2]+(n[g*6+2]-o[2])*_+de[2],t[g*6+3]=o[0]+(n[g*6+3]-o[0])*_+de[0],t[g*6+4]=o[1]+(n[g*6+4]-o[1])*_+de[1],t[g*6+5]=o[2]+(n[g*6+5]-o[2])*_+de[2]):(i[g*3+0]=o[0]+(e[g*3+0]-o[0])*_+de[0],i[g*3+1]=o[1]+(e[g*3+1]-o[1])*_+de[1],i[g*3+2]=o[2]+(e[g*3+2]-o[2])*_+de[2])}}const dM=32,fM=8,pM=4;function mh(i){const t=Math.round(Math.sqrt(i/(3*pM)));return Math.min(dM,Math.max(fM,t))}const Ze=-1;function mM(i){let t=0;for(let e=0;e<i.count;e++)i.member[e]&&t++;return t}function gM(i){const t=i.res??mh(mM(i)),e=i.half??si,{points:n,count:s,member:r,material:o,materialCount:a,center:l}=i,c=t*t*t,u=new Int16Array(s).fill(Ze);if(s===0||a===0)return{region:u,regionCount:0,sizes:new Int32Array(0),regionMaterial:new Int16Array(0)};const h=new Uint16Array(c*a),d=new Int32Array(s).fill(-1);for(let v=0;v<s;v++){if(!r[v])continue;const S=o[v];if(S<0||S>=a)continue;const C=Ne(n[v*3+0]-l[0],t,e),b=Ne(n[v*3+1]-l[1],t,e),T=Ne(n[v*3+2]-l[2],t,e);if(C<0||b<0||T<0)continue;const w=Le(C,b,T,t);d[v]=w;const R=w*a+S;h[R]<65535&&h[R]++}const p=new Int16Array(c).fill(-1);for(let v=0;v<c;v++){const S=v*a;let C=-1,b=0;for(let T=0;T<a;T++)h[S+T]>b&&(b=h[S+T],C=T);p[v]=C}const g=new Int32Array(c).fill(-1),_=new Int32Array(c),f=[];for(let v=0;v<c;v++){if(p[v]<0||g[v]>=0)continue;const S=p[v],C=f.length;f.push(S);let b=0;for(_[b++]=v,g[v]=C;b>0;){const T=_[--b],w=T%t,R=(T-w)/t,x=R%t,y=(R-x)/t,L=(N,B,I)=>{if(N<0||B<0||I<0||N>=t||B>=t||I>=t)return;const D=Le(N,B,I,t);g[D]>=0||p[D]!==S||(g[D]=C,_[b++]=D)};L(w-1,x,y),L(w+1,x,y),L(w,x-1,y),L(w,x+1,y),L(w,x,y-1),L(w,x,y+1)}}const m=f.length,M=new Int32Array(m);for(let v=0;v<s;v++){const S=d[v];if(S<0)continue;const C=g[S];C<0||(u[v]=C,M[C]++)}return{region:u,regionCount:m,sizes:M,regionMaterial:Int16Array.from(f)}}const Cs={OBSERVED:0,FALLBACK:1},_M={[Cs.OBSERVED]:"color por posición (de la imagen)",[Cs.FALLBACK]:"paleta repartida en bandas (aproximado)"},vM=6,xM=.01,MM={count:0,color:new Uint8Array(0),region:new Int16Array(0),spread:new Float32Array(0),regions:[],palette:[Mi],slots:0,source:Cs.FALLBACK,materialCount:0},Dn=8,Ho=256/Dn;function yM(i,t,e,n=Ds){const s=Dn*Dn*Dn,r=new Uint32Array(s),o=new Float64Array(s),a=new Float64Array(s),l=new Float64Array(s);for(let u=0;u<t;u++){if(!e[u])continue;const h=i[u*3+0],d=i[u*3+1],p=i[u*3+2],g=Math.min(Dn-1,Math.floor(h/Ho)),_=Math.min(Dn-1,Math.floor(d/Ho)),f=Math.min(Dn-1,Math.floor(p/Ho)),m=(g*Dn+_)*Dn+f;r[m]++,o[m]+=h,a[m]+=d,l[m]+=p}const c=[];for(let u=0;u<s;u++)r[u]!==0&&c.push({count:r[u],r:o[u]/r[u],g:a[u]/r[u],b:l[u]/r[u]});return Qu(c,n)}function SM(i,t,e,n){let s=0,r=1/0;for(let o=0;o<n.length;o++){const a=n[o]>>16&255,l=n[o]>>8&255,c=n[o]&255,u=(i-a)*(i-a)+(t-l)*(t-l)+(e-c)*(e-c);u<r&&(r=u,s=o)}return s}const Ms=256;function EM(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=0;for(let R=0;R<t;R++){if(!e[R])continue;h++;const x=i[R*3+0],y=i[R*3+1],L=i[R*3+2];x<r&&(r=x),x>l&&(l=x),y<o&&(o=y),y>c&&(c=y),L<a&&(a=L),L>u&&(u=L)}if(h===0)return;const d=l-r,p=c-o,g=u-a,_=p>=d&&p>=g?1:d>=g?0:2,f=_===0?r:_===1?o:a,m=(_===0?d:_===1?p:g)||1,M=new Int32Array(Ms),v=new Int32Array(t);for(let R=0;R<t;R++){if(!e[R])continue;const x=i[R*3+_],y=Math.min(Ms-1,Math.max(0,Math.floor((x-f)/m*Ms)));v[R]=y,M[y]++}const S=n.reduce((R,x)=>R+x,0)||1,C=new Int16Array(Ms);let b=0,T=0,w=n[0]/S*h;for(let R=0;R<Ms;R++){for(;T<n.length-1&&Math.abs(b+M[R]-w)>Math.abs(b-w);)T++,w+=n[T]/S*h;C[R]=T,b+=M[R]}for(let R=0;R<t;R++)e[R]&&(s[R]=C[v[R]])}function bM(i){const{points:t,count:e,isMaterial:n,pointColors:s,clusters:r,center:o,propagationOrigin:a}=i,l=i.maxColors??Ds,c=i.maxSlots??vM;let u=0;for(let I=0;I<e;I++)n[I]&&u++;if(e===0||u===0)return{...MM,count:e};const h=s!==null,d=h?Cs.OBSERVED:Cs.FALLBACK,p=h?yM(s,e,n,l):r.length>0?[...r].slice(0,l):[{color:Mi,weight:1}],g=p.map(I=>I.color),_=new Int16Array(e).fill(-1);if(h)for(let I=0;I<e;I++)n[I]&&(_[I]=SM(s[I*3],s[I*3+1],s[I*3+2],g));else EM(t,e,n,p.map(I=>I.weight),_);const f=gM({points:t,count:e,member:n,material:_,materialCount:g.length,center:o,res:i.res??mh(u)}),m=AM(t,e,f,u),M=new Int16Array(e).fill(Ze);for(let I=0;I<e;I++){const D=f.region[I];M[I]=D===Ze?Ze:m.map[D]}const v=m.count,S=new Float64Array(v*3),C=new Int32Array(v);for(let I=0;I<e;I++){const D=M[I];D!==Ze&&(S[D*3+0]+=t[I*3+0],S[D*3+1]+=t[I*3+1],S[D*3+2]+=t[I*3+2],C[D]++)}TM(t,e,n,M,S,C,v);const b=new Float64Array(v*3),T=new Float64Array(v).fill(1/0);for(let I=0;I<e;I++){const D=M[I];if(D===Ze)continue;const W=t[I*3+0]-a[0],H=t[I*3+1]-a[1],J=t[I*3+2]-a[2],et=W*W+H*H+J*J;et<T[D]&&(T[D]=et,b[D*3+0]=t[I*3+0],b[D*3+1]=t[I*3+1],b[D*3+2]=t[I*3+2])}const w=new Float32Array(e),R=new Float64Array(v);for(let I=0;I<e;I++){const D=M[I];if(D===Ze)continue;const W=t[I*3+0]-b[D*3+0],H=t[I*3+1]-b[D*3+1],J=t[I*3+2]-b[D*3+2],et=Math.sqrt(W*W+H*H+J*J);w[I]=et,et>R[D]&&(R[D]=et)}for(let I=0;I<e;I++){const D=M[I];D!==Ze&&(w[I]=R[D]>0?w[I]/R[D]:0)}const x=Array.from({length:v},(I,D)=>D).sort((I,D)=>{const W=qc(S,C,I,a),H=qc(S,C,D,a);return W===H?I-D:W-H}),y=Math.max(1,Math.min(c,v)),L=new Int16Array(v);for(let I=0;I<v;I++)L[x[I]]=Math.min(y-1,Math.floor(I*y/v));const N=new Uint8Array(e*3);for(let I=0;I<e;I++){const D=M[I];if(D!==Ze)if(h)N[I*3+0]=s[I*3+0],N[I*3+1]=s[I*3+1],N[I*3+2]=s[I*3+2];else{const W=g[m.material[D]]??Mi;N[I*3+0]=W>>16&255,N[I*3+1]=W>>8&255,N[I*3+2]=W&255}}const B=[];for(let I=0;I<v;I++){const D=C[I]||1;B.push({id:I,materialId:m.material[I],color:g[m.material[I]]??Mi,count:C[I],centroid:[S[I*3]/D,S[I*3+1]/D,S[I*3+2]/D],seed:[b[I*3],b[I*3+1],b[I*3+2]],slot:L[I]})}return{count:e,color:N,region:M,spread:w,regions:B,palette:g,slots:y,source:d,materialCount:u}}function qc(i,t,e,n){const s=t[e]||1,r=i[e*3+0]/s-n[0],o=i[e*3+1]/s-n[1],a=i[e*3+2]/s-n[2];return r*r+o*o+a*a}function AM(i,t,e,n){const{regionCount:s,sizes:r,regionMaterial:o}=e;if(s===0)return{map:new Int16Array(0),material:new Int16Array(0),count:0};const a=new Float64Array(s*3),l=new Int32Array(s);for(let f=0;f<t;f++){const m=e.region[f];m!==Ze&&(a[m*3+0]+=i[f*3+0],a[m*3+1]+=i[f*3+1],a[m*3+2]+=i[f*3+2],l[m]++)}for(let f=0;f<s;f++){const m=l[f]||1;a[f*3+0]/=m,a[f*3+1]/=m,a[f*3+2]/=m}const c=Math.max(4,Math.floor(n*xM)),u=new Uint8Array(s);for(let f=0;f<s;f++)r[f]>=c&&(u[f]=1);const h=new Map;for(let f=0;f<s;f++){const m=o[f],M=h.get(m);(M===void 0||r[f]>r[M])&&h.set(m,f)}for(const[f,m]of h){let M=!1;for(let v=0;v<s;v++)if(o[v]===f&&u[v]){M=!0;break}M||(u[m]=1)}const d=new Int16Array(s);for(let f=0;f<s;f++){if(u[f]){d[f]=f;continue}let m=-1,M=1/0;for(let v=0;v<s;v++){if(!u[v]||o[v]!==o[f])continue;const S=a[v*3+0]-a[f*3+0],C=a[v*3+1]-a[f*3+1],b=a[v*3+2]-a[f*3+2],T=S*S+C*C+b*b;T<M&&(M=T,m=v)}d[f]=m>=0?m:f,m<0&&(u[f]=1)}const p=new Int16Array(s).fill(-1),g=[],_=new Int16Array(s).fill(-1);for(let f=0;f<s;f++)u[f]&&(_[f]=g.length,g.push(o[f]));for(let f=0;f<s;f++)p[f]=_[d[f]];return{map:p,material:Int16Array.from(g),count:g.length}}function TM(i,t,e,n,s,r,o){if(o!==0)for(let a=0;a<t;a++){if(!e[a]||n[a]!==Ze)continue;let l=0,c=1/0;for(let u=0;u<o;u++){const h=r[u]||1,d=s[u*3+0]/h-i[a*3+0],p=s[u*3+1]/h-i[a*3+1],g=s[u*3+2]/h-i[a*3+2],_=d*d+p*p+g*g;_<c&&(c=_,l=u)}n[a]=l,s[l*3+0]+=i[a*3+0],s[l*3+1]+=i[a*3+1],s[l*3+2]+=i[a*3+2],r[l]++}}const gn={SPREAD:0,SETTLE:1,ACTIVATION:2,FORMATION:3,COMPLETE:4},wM=["cubriendo superficie","asentado","activación","formando material","material completo"],CM=.45,RM=.9,ko=.8,PM=.25,LM=.6,IM=2.5,DM=.55,UM=.35,jc=.45;function Kc(i,t){const e=Math.max(1,t),n=i+CM,s=n+RM,r=ko*(1-PM);return{travelEnd:i,settleEnd:n,activationEnd:s,slots:e,slotDuration:ko,slotStep:r,end:s+(e-1)*r+ko}}function NM(i,t){const e=bs(i,t);return e===gn.SPREAD||e===gn.SETTLE||e===gn.COMPLETE}function bs(i,t){return i<t.travelEnd?gn.SPREAD:i<t.settleEnd?gn.SETTLE:i<t.activationEnd?gn.ACTIVATION:i<t.end?gn.FORMATION:gn.COMPLETE}function OM(i,t,e){const n=t.activationEnd+e*t.slotStep,s=(i-n)/t.slotDuration;return s<=0?0:s>=1?1:s}function FM(i,t,e,n){const s=OM(i,t,e);if(s<=0)return 0;if(s>=1)return 1;const r=LM,o=1-r,a=(s-n*r)/o;return Ji(a<=0?0:a>=1?1:a)}function BM(i,t,e){if(i<t.settleEnd||i>=t.activationEnd)return 1;const n=t.activationEnd-t.settleEnd,s=n>0?(i-t.settleEnd)/n:1,r=e*dl/(Math.PI*2),o=Math.sin((s*IM+r)*Math.PI*2);return 1+DM*(o>0?o:0)*s}function zM(i){return jc+(1-jc)*i}function HM(i){return i<=0||i>=1?1:1+UM*Math.sin(i*Math.PI)}const Zc=[16726832,3458905,689407,16766474,16723349,3200456,11490014,16749824],Vi=[1,1,1];function kM(i,t,e,n,s,r=!1){const{count:o,region:a,spread:l,color:c,regions:u}=t,h=bs(n,e);if(r){for(let p=0;p<o;p++){const g=a[p];if(g===Ze){i[p*3+0]=Vi[0],i[p*3+1]=Vi[1],i[p*3+2]=Vi[2];continue}const _=Zc[g%Zc.length];i[p*3+0]=(_>>16&255)/255,i[p*3+1]=(_>>8&255)/255,i[p*3+2]=(_&255)/255}return!1}const d=h===gn.ACTIVATION;for(let p=0;p<o;p++){const g=a[p];if(g===Ze){i[p*3+0]=Vi[0],i[p*3+1]=Vi[1],i[p*3+2]=Vi[2];continue}const _=FM(n,e,u[g].slot,l[p]),m=(d?BM(n,e,p):1)*(_>0&&_<1?HM(_):1)*zM(_),M=c[p*3+0]/255,v=c[p*3+1]/255,S=c[p*3+2]/255;i[p*3+0]=(s[0]+(M-s[0])*_)*m,i[p*3+1]=(s[1]+(v-s[1])*_)*m,i[p*3+2]=(s[2]+(S-s[2])*_)*m}return h!==gn.COMPLETE}const gh="nanobot-swarm-config";function VM(){try{const i=localStorage.getItem(gh);return i?JSON.parse(i):null}catch{return null}}function GM(i){try{return localStorage.setItem(gh,JSON.stringify(i)),!0}catch{return!1}}async function Jc(){try{const i=await fetch("/api/config");if(i.ok)return await i.json()}catch{}return VM()}async function WM(i){try{if((await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)return!0}catch{}return GM(i)}const hr=240;function Qc(){const i=performance.memory;return i?i.usedJSHeapSize/(1024*1024):null}function XM(){const i=new Float64Array(hr),t=new Float64Array(hr);let e=0,n=0,s=0,r=0,o=0,a=0,l=0;const c={};return{sampleFrame(u){i[e]=u,e=(e+1)%hr,n<hr&&n++,s++},setAgentCounts(u,h){r=u,o=h},setRenderInfo(u,h){a=u,l=h},mark(u,h){c[u]=h},time(u,h){const d=performance.now();try{return h()}finally{c[u]=performance.now()-d}},snapshot(){if(n===0)return{frames:0,fps:0,frameMsAvg:0,frameMsP95:0,frameMsMax:0,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:Qc(),timings:{...c}};let u=0,h=0;for(let _=0;_<n;_++){const f=i[_];u+=f,f>h&&(h=f),t[_]=f}const d=t.subarray(0,n);d.sort();const p=u/n,g=Math.min(n-1,Math.floor(n*.95));return{frames:s,fps:p>0?1e3/p:0,frameMsAvg:p,frameMsP95:d[g],frameMsMax:h,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:Qc(),timings:{...c}}},reset(){e=0,n=0,s=0;for(const u of Object.keys(c))delete c[u]}}}const un={CREATE_STRUCTURE:"CREATE_STRUCTURE",CONNECT_STRUCTURE:"CONNECT_STRUCTURE",FILL_STRUCTURE:"FILL_STRUCTURE",SPREAD_MATERIAL:"SPREAD_MATERIAL",APPLY_COLOR:"APPLY_COLOR",RETURN_TO_CORE:"RETURN_TO_CORE"},en={PENDING:"pending",RUNNING:"running",DONE:"done",CANCELLED:"cancelled"},tu={CREATE_STRUCTURE:"exoesqueleto",CONNECT_STRUCTURE:"uniones",FILL_STRUCTURE:"relleno",SPREAD_MATERIAL:"cobertura",APPLY_COLOR:"material",RETURN_TO_CORE:"repliegue"};function YM(){let i=[],t=1,e=1,n=1,s=1,r=!1;function o(a,l,c,u,h=-1){return{id:t++,type:a,clock:l,t0:c,t1:u,wave:h,status:en.PENDING}}return{get tasks(){return i},get active(){for(const a of i)if(a.status===en.RUNNING)return a;return null},planStructure(a){if(r=!1,a.beamStart===null){i=[o(un.CREATE_STRUCTURE,"microbot",0,a.exoDuration)];return}i=[o(un.CREATE_STRUCTURE,"microbot",0,a.nodeEnd),o(un.CONNECT_STRUCTURE,"microbot",a.beamStart,a.exoDuration)]},planLayers(a){e=Math.max(1,a.layerCount),n=a.layerDuration,r=!1,i=i.filter(u=>u.clock!=="nanobot"),i.push(o(un.FILL_STRUCTURE,"nanobot",0,n));const l=e*n,c=a.material;if(!c){s=l;return}i.push(o(un.SPREAD_MATERIAL,"nanobot",n,c.start));for(let u=0;u<c.slots;u++){const h=c.start+u*c.slotStep;i.push(o(un.APPLY_COLOR,"nanobot",h,h+c.slotDuration,u))}s=c.end},planReturn(){r=!0;for(const a of i)(a.status===en.PENDING||a.status===en.RUNNING)&&(a.status=en.CANCELLED);i.push(o(un.RETURN_TO_CORE,"nanobot",0,s))},clear(){i=[],r=!1},sync(a,l){for(const c of i){if(c.status===en.CANCELLED)continue;const u=c.clock==="microbot"?a:l;if(c.type===un.RETURN_TO_CORE){c.status=l<=0&&a<=0?en.DONE:en.RUNNING;continue}r||(u>=c.t1?c.status=en.DONE:u>=c.t0?c.status=en.RUNNING:c.status=en.PENDING)}},nanobotLayerIndex(a){const l=Math.floor(a/n);return Math.min(Math.max(l,0),e-1)},isStructureDone(){let a=!1;for(const l of i)if(!(l.type!==un.CREATE_STRUCTURE&&l.type!==un.CONNECT_STRUCTURE)&&(a=!0,l.status!==en.DONE))return!1;return a},describe(){return i.map(a=>`${a.type===un.APPLY_COLOR?`${tu[a.type]} ${a.wave+1}`:tu[a.type]}: ${a.status}`)}}}const $M=3;function qM(i,t,e,n,s,r,o=Vr,a=si){const l=new Float32Array(t*3),c=new Map,u=[];for(let g=0;g<n;g++){const _=Ne(e[g*3+0]-r[0],o,a),f=Ne(e[g*3+1]-r[1],o,a),m=Ne(e[g*3+2]-r[2],o,a);if(_<0||f<0||m<0){u.push(g);continue}const M=Le(_,f,m,o),v=c.get(M);v?v.push(g):c.set(M,[g])}function h(g){const _=c.get(g);if(!_||_.length===0)return-1;const f=_.pop();return _.length===0&&c.delete(g),f}let d=0,p=0;for(let g=0;g<t;g++){const _=i[g*3+0],f=i[g*3+1],m=i[g*3+2],M=Ne(_-r[0],o,a),v=Ne(f-r[1],o,a),S=Ne(m-r[2],o,a);let C=-1;if(M>=0&&v>=0&&S>=0){C=h(Le(M,v,S,o));for(let b=1;C<0&&b<=$M;b++)for(let T=-b;T<=b&&C<0;T++){const w=S+T;if(!(w<0||w>=o))for(let R=-b;R<=b&&C<0;R++){const x=v+R;if(!(x<0||x>=o))for(let y=-b;y<=b&&C<0;y++){if(Math.max(Math.abs(y),Math.abs(R),Math.abs(T))!==b)continue;const L=M+y;L<0||L>=o||(C=h(Le(L,x,w,o)))}}}C>=0&&p++}if(C<0){for(;C<0&&d<u.length;)C=u[d++];if(C<0){const b=c.keys().next();b.done||(C=h(b.value))}}C<0?(l[g*3+0]=s[0],l[g*3+1]=s[1],l[g*3+2]=s[2]):(l[g*3+0]=e[C*3+0],l[g*3+1]=e[C*3+1],l[g*3+2]=e[C*3+2])}return{from:l,matchedNearby:p}}const ys=3.4,jM=2.2,KM=5,Gi=pl.layerDuration,eu=4e4,ZM=[0,0,0],Ss=new Map,JM=24,_h=.5,dr=[!0,!0],Vo=[!0,!1];function QM(i,t){return t[0]=(i>>16&255)/255,t[1]=(i>>8&255)/255,t[2]=(i&255)/255,t}function ty(i){const{swarm:t,swarmMesh:e,microbotMesh:n,settings:s,reactorCenter:r,swirlAxes:o}=i,a=i.now??(()=>performance.now());let l=null,c=ka,u=new Uint8Array(s.count).fill(ye.DETAIL),h=new Float32Array(s.count*3),d=null,p="idle",g=0,_=0,f={layerOf:new Uint8Array(0),delayFraction:new Float32Array(0),layerCount:1,travelDuration:Gi,totalDuration:Gi,wave0Landing:[...nn]},m=null,M=Kc(Gi*2,1);const v=new Float32Array(i.maxNanobots*3).fill(1);let S=!1,C=-1,b=-1;const T=[0,0,0],w=new Float32Array(i.maxNanobots*3),R=Wx(),x=new Uint32Array(8),y=new Uint32Array(tv),L=YM();let N=null,B=null,I=null,D="hidden",W=Math.min(s.microbotCount,i.maxMicrobots),H=null,J=0,et=0;const ht=new Float32Array(i.maxMicrobots*3),gt=new Float32Array(i.maxMicrobots*6);let Mt=null,q=null,Q=null;function pt(){const O=K_(l??"",W,nn);H=O;let $=0;if(O)for(let ut=0;ut<W;ut++)O.isBeam[ut]&&$++;J=$}function dt(){return J>0?2:1}function _t(O){if(!H)return;const{points:$,relationSpans:ut,isBeam:it}=H;hM(ht,gt,$,ut,it,W,r,o,O,jM,KM,dt()),n.updateFromPositions(ht,W,it,gt)}function bt(){const O=dt();L.planStructure({exoDuration:ys,nodeEnd:Fr(0,O).end*ys,beamStart:O>1?Fr(1,O).start*ys:null})}function Ut(O,$=!1){d&&rM(w,d.points,_,f,r,o,O,pl,R.state,$?Oe.RETURNING:Oe.TRAVELING,B,$)}function zt(){t.setParams({cohesion:s.cohesion,separation:s.separation,alignment:s.alignment,maxSpeed:s.maxSpeed,seekWeight:_h})}function Nt(){t.setAgentTargets(Q_(s.count,r)),u=new Uint8Array(s.count).fill(ye.DETAIL),h=new Float32Array(s.count*3),R.reset(s.count,u,h)}function U(O,$,ut){const it=cl(O);if(!it)return null;const ct=`${O}#${U_(O)}`;let at=Ss.get(ct);if(!at){if(at=Bc(it.generate(eu),eu,ZM),Ss.size>=JM){const Ft=Ss.keys().next();Ft.done||Ss.delete(Ft.value)}Ss.set(ct,at)}const ot=Bc($,ut,nn),ft=Ix(at,ot);return{fraction:ft.coverage,covered:ft.covered,total:ft.target,missing:ft.missing,components:uh(ot)}}function qt(O,$){const ut=Z_(O,s.count,nn,$);if(!ut)return;d=ut,u=ut.roles,h=ut.points,c=$,_=s.count;const it=new Uint8Array(s.count);for(let ot=0;ot<s.count;ot++)it[ot]=ut.roles[ot]===ye.COLOR?1:0;const ct=ph(ut.roles,ut.points,s.count,ye.COLOR,nn);m=bM({points:ut.points,count:s.count,isMaterial:it,pointColors:ut.pointColors,clusters:ut.colorClusters,center:nn,propagationOrigin:ct});const at=2*Gi;M=Kc(at,m.slots),f=iM(ut.roles,ut.points,s.count,ye.COLOR,Gi,nn,r,M.end-at),R.adoptFormation({count:s.count,role:ut.roles,region:m.region,layer:f.layerOf,delayFraction:f.delayFraction,target:ut.points}),B=I&&I.count>0?qM(ut.points,s.count,I.positions,I.count,r,nn).from:null,I=null,N=U(O,ut.points,s.count),R.assignTypesFromRoles(ye.COLOR),L.planLayers({layerCount:f.layerCount,layerDuration:Gi,material:{start:M.activationEnd,slots:M.slots,slotDuration:M.slotDuration,slotStep:M.slotStep,end:M.end}}),b=-1,C=-1,Tt(0),e.setInstanceTint(v)}function Tt(O){return m?(QM(rn(jt.MATERIAL).identityColor,T),C=bs(O,M),kM(v,m,M,O,T,S)):!1}function Bt(O){return m?NM(O,M)?bs(O,M)===C?!1:(Tt(O),!0):Tt(O):!1}function wt(){var O;Mt=null,d=null,p="idle",g=0,Nt(),e.setVisible(!1),e.setSkeletonGrayscale(!1),e.setInstanceTint(null),m=null,b=-1,l=null,H=null,D="hidden",et=0,n.setVisible(!1),L.clear(),N=null,B=null,I=null,(O=i.reactor)==null||O.resetColor(),zt()}function Yt(O,$){q=a(),I=l!==null&&d!==null?{positions:w.slice(0,_*3),count:_,roles:u}:null,Mt=null,d=null,p="idle",g=0,Nt(),I||(e.setVisible(!1),e.setSkeletonGrayscale(!1)),l=O,c=$??ka,Mt={shapeName:O,colorClusters:c},pt(),D!=="retracting"&&(et=0),D="launching",n.setVisible(!0),bt(),zt()}function Ct(){if(l===null){wt();return}l=null,Mt=null,(D==="launching"||D==="settled")&&(D="retracting"),(p==="forming"||p==="settled")&&(p="retracting"),L.planReturn()}function P(O){if(p==="retracting"){Q=O;return}if(s.count=O,t.init(O),e.setCount(O),l&&!Mt){const $=p==="settled";qt(l,c),$&&(p="settled",g=f.totalDuration,Ut(g),e.setSkeletonGrayscale(!0),Tt(g),e.updateFromPositions(w,_,u,h,dr))}else Nt()}function E(O){if(W=Math.min(O,i.maxMicrobots),s.microbotCount=W,D!=="launching"&&D!=="settled")return;const $=dt();pt(),D==="launching"&&dt()!==$&&bt(),D==="settled"&&_t(1)}function X(O){if(!m||O<M.settleEnd)return-1;if(O<M.activationEnd)return 0;const $=Math.floor((O-M.activationEnd)/M.slotStep);return Math.min(Math.max($,0),M.slots-1)+1}function nt(O){if(!m)return null;if(O===0)return m.palette[0]??null;let $=null;for(const ut of m.regions)ut.slot===O-1&&(!$||ut.count>$.count)&&($={count:ut.count,color:ut.color});return $?$.color:null}function rt(){!d||_===0||e.updateFromPositions(w,_,u,h,p==="settled"?dr:Vo)}function tt(O){var $,ut,it;if(D==="launching"||D==="retracting")if(et=Math.min(Math.max(et+(D==="launching"?1:-1)*O,0),ys),_t(et/ys),L.sync(et,g),D==="launching"&&L.isStructureDone()){if(D="settled",Mt){const{shapeName:at,colorClusters:ot}=Mt;Mt=null,qt(at,ot),p="forming",g=0,e.setVisible(!0)}}else D==="retracting"&&et<=0&&(D="hidden",H=null,n.setVisible(!1));if(p==="forming"||p==="retracting"){g=Math.min(Math.max(g+(p==="forming"?1:-1)*O,0),f.totalDuration),Ut(g,p==="retracting"),L.sync(et,g);const at=L.nanobotLayerIndex(g),ot=X(g);if(ot!==b){b=ot;const ft=ot>=0?nt(ot):null;ft!==null&&(($=i.reactor)==null||$.pulseColor(ft))}if(e.setSkeletonGrayscale(at>=1),Vo[1]=at>=1,Bt(g)&&e.setInstanceTint(v),e.updateFromPositions(w,_,u,h,Vo),p==="forming"&&g>=f.totalDuration)p="settled",q!==null&&((ut=i.onFormationSettled)==null||ut.call(i,a()-q),q=null);else if(p==="retracting"&&g<=0){if(p="idle",d=null,N=null,B=null,I=null,m=null,b=-1,(it=i.reactor)==null||it.resetColor(),e.setInstanceTint(null),e.setVisible(!1),Q!==null){const ft=Q;Q=null,P(ft)}else Nt();zt()}}else p==="idle"&&(t.step(O),I?e.updateFromPositions(I.positions,I.count,I.roles,I.positions,dr):e.updateFromPositions(t.getPositions(),t.getCount(),u,h,dr))}const Y={get nanobotPhase(){return p},get microbotPhase(){return D},get nanobotElapsed(){return g},get microbotElapsed(){return et},get nanobotAnimCount(){return _},get microbotCount(){return W},get currentShapeName(){return l},get stateCounts(){return R.countByState(x)},get coverage(){return N},get materialMap(){return m},get materialPhase(){return m?bs(g,M):gn.SPREAD},get typeCounts(){return R.countByType(y),D!=="hidden"&&H&&(y[jt.MICROBOT]+=W-J,y[jt.UNION]+=J),y},get forming(){return l!==null}};return P(s.count),wt(),{state:Y,agents:R,director:L,step:tt,formShape:Yt,returnToCore:Ct,setNanobotCount:P,setMicrobotCount:E,applyParams:zt,setRegionDebug(O){O!==S&&(S=O,C=-1,Tt(g),e.setInstanceTint(m?v:null),rt())},get regionDebug(){return S},renderPositions:w}}function ey(i,t={}){const e=t.maxDt??.05,n=t.now??(()=>performance.now()),s=t.schedule??(u=>requestAnimationFrame(u)),r=t.onError;let o=!1,a=0,l=0;function c(u){if(!(!o||u!==l))try{const h=n(),d=Math.min((h-a)/1e3,e);a=h,i(d)}catch(h){if(o=!1,r)r(h);else throw h}finally{o&&u===l&&s(()=>c(u))}}return{start(){if(o)return;o=!0,l++,a=n();const u=l;s(()=>c(u))},stop(){o=!1},get running(){return o}}}const jn={near:5,mid:34},vh=.12,Go=jn.near*vh,Wo=jn.mid*vh;function ny(i=pe.MID){let t=i;return{get level(){return t},update(e){let n;return t===pe.NEAR?n=e>jn.near+Go?e>jn.mid+Wo?pe.FAR:pe.MID:pe.NEAR:t===pe.FAR?n=e<jn.mid-Wo?e<jn.near-Go?pe.NEAR:pe.MID:pe.FAR:e<jn.near-Go?n=pe.NEAR:e>jn.mid+Wo?n=pe.FAR:n=pe.MID,n===t?!1:(t=n,!0)}}}const iy=.8,sy=32;function ry(i){const{camera:t,controls:e}=i;let n=!1,s=e.minDistance,r=t.fov;const o=e.target.clone();function a(){var u,h;if(n)return;n=!0,s=e.minDistance,r=t.fov,o.copy(e.target);const c=(u=i.focusTarget)==null?void 0:u.call(i);c&&e.target.set(c[0],c[1],c[2]),e.minDistance=iy,t.fov=sy,t.updateProjectionMatrix(),(h=i.onChange)==null||h.call(i,!0)}function l(){var c;n&&(n=!1,e.minDistance=s,e.target.copy(o),t.fov=r,t.updateProjectionMatrix(),(c=i.onChange)==null||c.call(i,!1))}return{get active(){return n},enter:a,exit:l,toggle(){return n?l():a(),n}}}function Xo(i,t,e=6){const n=new ni(i,i,t,e,1,!1);return n.rotateX(Math.PI/2),n}function oy(i){const t=new On,e=rn(i),n=new ti({color:e.identityColor,emissive:e.identityEmissive,emissiveIntensity:.6,metalness:.65,roughness:.35}),s=new ti({color:1711394,metalness:.8,roughness:.45}),r=new ti({color:e.identityColor,emissive:e.identityColor,emissiveIntensity:1.4,metalness:.2,roughness:.3}),o=.55+ju(i).relativeSize*.12,a=new ae(Xo(o,o*.52),s);t.add(a);const l=new ae(Xo(o*.78,o*.62),n);switch(t.add(l),i){case jt.MICROBOT:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new Qn(o*.16,o*.16,o*.66),s);h.position.set(Math.cos(u)*o*.9,Math.sin(u)*o*.9,0),h.rotation.z=u,t.add(h)}break}case jt.NANOBOT:{const c=new ae(Xo(o*.84,o*.16),r);t.add(c);break}case jt.UNION:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new ni(o*.17,o*.11,o*.5,6),n);h.position.set(Math.cos(u)*o*1.08,Math.sin(u)*o*1.08,0),h.rotation.z=-u+Math.PI/2,t.add(h);const d=new ae(new Ur(o*.17,o*.045,6,12),r);d.position.copy(h.position),d.rotation.y=Math.PI/2,d.rotation.z=u,t.add(d)}break}case jt.REPAIR:{const c=new Qn(o*.95,o*.26,o*.2),u=new ae(c,r);u.position.z=o*.34,t.add(u);const h=new ae(c,r);h.position.z=o*.34,h.rotation.z=Math.PI/2,t.add(h);for(const d of[-1,1]){const p=new ae(new Qn(o*.2,o*.42,o*.3),s);p.position.set(d*o*1,0,0),t.add(p)}break}case jt.TRANSFORM:{for(let c=0;c<3;c++){const u=new ae(new Ur(o*(.95+c*.16),o*.06,6,18),c%2?r:n);u.rotation.x=c*Math.PI/5,u.rotation.y=c*Math.PI/3,t.add(u)}break}case jt.MATERIAL:{for(let c=0;c<6;c++){const u=c/6*Math.PI*2,h=new ae(new sl(o*.13,o*.34,6),r);h.position.set(Math.cos(u)*o*.72,Math.sin(u)*o*.72,o*.4),h.rotation.x=Math.PI/2,t.add(h)}break}}return t}function ay(){const i=document.createElement("canvas"),t=new Fu({canvas:i,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Bu,n=new Ve(38,1,.1,50);n.position.set(0,1.6,4.4),n.lookAt(0,0,0),e.add(new Vu(16777215,.55));const s=new Fa(16777215,1.5);s.position.set(3,4,5),e.add(s);const r=new Fa(8961023,.8);r.position.set(-4,-2,-3),e.add(r);const o=new On;e.add(o);let a=null;function l(){a&&(o.remove(a),a.traverse(c=>{const u=c;if(!u.isMesh)return;u.geometry.dispose();const h=u.material;Array.isArray(h)?h.forEach(d=>d.dispose()):h.dispose()}),a=null)}return{canvas:i,show(c){l(),a=oy(c),o.add(a)},render(c){o.rotation.y+=c*.6,t.render(e,n)},setSize(c,u){c<=0||u<=0||(t.setSize(c,u,!1),n.aspect=c/u,n.updateProjectionMatrix())},dispose(){l(),t.dispose()}}}const Yo="no disponible en esta fase";function hn(i,t,e=!1){const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.gap="10px",n.style.padding="2px 0";const s=document.createElement("span");s.textContent=i,s.style.opacity="0.55",s.style.flex="0 0 auto";const r=document.createElement("span");return r.textContent=t,r.style.textAlign="right",r.style.opacity=e?"0.4":"0.95",e&&(r.style.fontStyle="italic"),n.append(s,r),n}function ly(){const i=document.createElement("div");i.style.cssText=["position:fixed","left:12px","bottom:12px","width:300px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","backdrop-filter:blur(6px)"].join(";");const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.1)";const e=document.createElement("strong");e.textContent="Inspección de bots",e.style.flex="1 1 auto";const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:none;border:none;color:inherit;cursor:pointer;font-size:13px;opacity:0.6",t.append(e,n),i.appendChild(t);const s=document.createElement("div");s.style.cssText="display:flex;flex-wrap:wrap;gap:4px;padding:8px 10px",i.appendChild(s);const r=ay();r.canvas.style.cssText="width:100%;height:170px;display:block",i.appendChild(r.canvas);const o=document.createElement("div");o.style.cssText="padding:8px 10px 10px",i.appendChild(o);let a=yn[0].type,l=!1,c=null;const u=[];function h(){const g=ju(a);o.textContent="";const _=document.createElement("div");_.textContent=g.name,_.style.cssText="font-size:14px;font-weight:600;margin-bottom:4px",_.style.color=`#${rn(g.type).identityColor.toString(16).padStart(6,"0")}`,o.appendChild(_),o.appendChild(hn("Rol",g.role)),o.appendChild(hn("Función",g.fn)),o.appendChild(hn("Forma","Hexágono")),o.appendChild(hn("Tamaño relativo",`${g.relativeSize.toFixed(1)}× Nanobot`)),o.appendChild(hn("Color de identidad",`#${rn(g.type).identityColor.toString(16).padStart(6,"0")}`)),o.appendChild(hn("Recibe material",g.acceptsObjectMaterial?"sí":"no — conserva su color estructural"));const f=c?c[g.type]??0:0;if(o.appendChild(g.implemented?hn("En el enjambre",`${f} agentes`):hn("En el enjambre","sin agentes",!0)),o.appendChild(hn("Material aplicado",Yo,!0)),o.appendChild(hn("Energía",Yo,!0)),o.appendChild(hn("Conexiones",Yo,!0)),!g.implemented&&g.pendingReason){const m=document.createElement("div");m.textContent=g.pendingReason,m.style.cssText="margin-top:6px;font-size:11px;opacity:0.45;line-height:1.4",o.appendChild(m)}}function d(g){a=g,u.forEach((_,f)=>{const m=yn[f].type===g;_.style.opacity=m?"1":"0.5",_.style.borderWidth=m?"2px":"1px"}),r.show(g),h()}for(const g of yn){const _=document.createElement("button");_.textContent=g.name.replace(" Bot","");const f=`#${rn(g.type).identityColor.toString(16).padStart(6,"0")}`;_.style.cssText=["flex:1 1 auto","min-width:74px","padding:3px 6px","cursor:pointer","background:rgba(255,255,255,0.05)",`border:1px solid ${f}`,"border-radius:4px",`color:${f}`,"font:11px system-ui,sans-serif"].join(";"),_.addEventListener("click",()=>d(g.type)),s.appendChild(_),u.push(_)}function p(g){l=g,i.style.display=g?"block":"none",g&&(r.setSize(i.clientWidth,170),d(a))}return n.addEventListener("click",()=>p(!1)),d(a),{element:i,get open(){return l},setOpen:p,render(g){l&&r.render(g)},setCounts(g){c=g},dispose(){r.dispose(),i.remove()}}}const Zn={STRUCTURE:0,CONNECTION:1,DETAIL:2,MATERIAL:3},nu=[{layer:Zn.STRUCTURE,name:"Estructura (Microbots)",hint:"Nodos del exoesqueleto"},{layer:Zn.CONNECTION,name:"Conexiones (Union Bots)",hint:"Vigas que unen los nodos"},{layer:Zn.DETAIL,name:"Detalle (Nanobots)",hint:"Relleno de superficie"},{layer:Zn.MATERIAL,name:"Material (Material Bots)",hint:"Color y acabado del objeto"}];function cy(i){const t=nu.map(()=>!0);let e=0;const n=document.createElement("div");n.style.cssText=["position:fixed","left:12px","top:12px","width:250px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","padding:8px 10px","backdrop-filter:blur(6px)"].join(";");const s=document.createElement("strong");s.textContent="Capas de construcción",s.style.cssText="display:block;margin-bottom:6px",n.appendChild(s);const r={get visible(){return t},get explode(){return e}};for(const u of nu){const h=document.createElement("label");h.style.cssText="display:flex;align-items:center;gap:6px;padding:1px 0;cursor:pointer";const d=document.createElement("input");d.type="checkbox",d.checked=!0,d.addEventListener("change",()=>{t[u.layer]=d.checked,i.onChange(r)});const p=document.createElement("span");p.textContent=u.name,p.title=u.hint,h.append(d,p),n.appendChild(h)}const o=document.createElement("div");o.style.cssText="margin-top:8px;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px";const a=document.createElement("div");a.textContent="Ver capas (separar)",a.style.opacity="0.75";const l=document.createElement("input");l.type="range",l.min="0",l.max="12",l.step="0.5",l.value="0",l.style.width="100%",l.addEventListener("input",()=>{e=Number(l.value),i.onChange(r)});const c=document.createElement("div");return c.textContent="Sólo afecta cómo se dibuja: la simulación no cambia.",c.style.cssText="font-size:10px;opacity:0.45;line-height:1.35;margin-top:2px",o.append(a,l,c),n.appendChild(o),{element:n,state:r,setOpen(u){n.style.display=u?"block":"none"},dispose(){n.remove()}}}const iu=6e4,su=6e4,uy={count:3e3,microbotCount:4e3,cohesion:.8,separation:1.5,alignment:.6,maxSpeed:4,seekWeight:_h};async function hy(){const i=document.getElementById("app"),{scene:t,camera:e,renderer:n,composer:s,controls:r}=s_(i),o=XM();window.__nanobotMetrics=o,window.__nanobotCamera={get:()=>({pos:e.position.toArray(),target:r.target.toArray(),distance:r.getDistance(),fov:e.fov,minDistance:r.minDistance})},window.__nanobotScan={form:(J,et,ht)=>{const gt=qu(Float32Array.from(J),et?Uint8Array.from(et):null);return _.formShape(gt,ht),gt}},n.info.autoReset=!1;const a=fv(iu);t.add(a.group);const l=vv(su);l.setVisible(!1),t.add(l.group);const c=Tv();t.add(c.group);const u=c.position.toArray(),h=Qx(u,nn),d=new Mv;await d.load();const p={...uy},g=await Jc();g&&Object.assign(p,g);const _=ty({swarm:d,swarmMesh:a,microbotMesh:l,settings:p,reactorCenter:u,swirlAxes:h,maxNanobots:iu,maxMicrobots:su,onFormationSettled:J=>o.mark("formacionMs",J),reactor:c}),f=Xx(p,{onCountChange:J=>_.setNanobotCount(J),onParamsChange:()=>_.applyParams(),onSave:async J=>{await WM(J)},onLoad:async()=>{const J=await Jc();J&&(Object.assign(p,J),_.setNanobotCount(p.count),_.applyParams(),f.controllersRecursive().forEach(et=>et.updateDisplay()))},onFormShape:(J,et)=>_.formShape(J,et),readNanobotCount:()=>p.count,onReturnToCore:()=>_.returnToCore(),onMicrobotCountChange:J=>_.setMicrobotCount(J)}),m=Yx(f),M=()=>_.state.stateCounts,v=$x(f),S=()=>_.director,C=qx(f),b=()=>_.state.coverage,T=Kx(f),w=()=>_.state.typeCounts,R=jx(f,J=>_.setRegionDebug(J)),x=()=>{const J=_.state.materialMap;return J?{regions:J.regions.length,slots:J.slots,materialCount:J.materialCount,palette:J.palette,phase:wM[_.state.materialPhase],sourceLabel:_M[J.source]}:null},y=ny();a.setLodLevel(y.level);const L=ly();document.body.appendChild(L.element);const N={visible:[!0,!0,!0,!0],explode:0};function B(J){const et=J.explode;l.setLayerDisplay({visible:J.visible[Zn.STRUCTURE],offsetY:-1.5*et},{visible:J.visible[Zn.CONNECTION],offsetY:-.5*et}),a.setLayerDisplay({visible:J.visible[Zn.DETAIL],offsetY:.5*et},{visible:J.visible[Zn.MATERIAL],offsetY:1.5*et})}const I=cy({onChange:B});document.body.appendChild(I.element),B(N);const D=ry({camera:e,controls:r,focusTarget:()=>_.state.forming?nn:u,onChange:J=>{J?a.setLodLevel(pe.NEAR):a.setLodLevel(y.level)}});let W=!1;Zx(f,{onToggleZoom:()=>D.toggle(),onToggleInspector:()=>(L.setOpen(!L.open),L.open),onToggleLayers:()=>(W=!W,I.setOpen(W),W)}),ey(J=>{const et=performance.now();n.info.reset(),c.update(J),r.update(),y.update(r.getDistance())&&!D.active&&a.setLodLevel(y.level),_.step(J),s.render(),o.sampleFrame(performance.now()-et),o.setAgentCounts(_.state.nanobotPhase==="idle"?d.getCount():_.state.nanobotAnimCount,_.state.microbotPhase==="hidden"?0:_.state.microbotCount),o.setRenderInfo(n.info.render.calls,n.info.render.triangles),m(M),v(S),C(b),T(w),R(x),L.setCounts(_.state.typeCounts),L.render(J)},{onError:J=>console.error("Error en el loop de animación; se detiene el render:",J)}).start()}hy().catch(i=>{console.error("Error inicializando el simulador de nanobots:",i)});
