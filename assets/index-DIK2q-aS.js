var wh=Object.defineProperty;var Ch=(i,t,e)=>t in i?wh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Jn=(i,t,e)=>Ch(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="169",Oi={ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rh=0,qa=1,Ph=2,bc=1,Ac=2,En=3,$n=0,ke=1,Tn=2,Rn=0,Bi=1,Eo=2,ja=3,Ka=4,Lh=5,ai=100,Dh=101,Ih=102,Uh=103,Nh=104,Fh=200,Oh=201,Bh=202,zh=203,bo=204,Ao=205,Hh=206,kh=207,Vh=208,Gh=209,Wh=210,Xh=211,Yh=212,$h=213,qh=214,To=0,wo=1,Co=2,Vi=3,Ro=4,Po=5,Lo=6,Do=7,Tc=0,jh=1,Kh=2,Wn=0,Zh=1,Jh=2,Qh=3,wc=4,tu=5,eu=6,nu=7,Cc=300,Gi=301,Wi=302,Io=303,Uo=304,xr=306,No=1e3,ci=1001,Fo=1002,ze=1003,iu=1004,Ss=1005,on=1006,Rr=1007,hi=1008,Ln=1009,Rc=1010,Pc=1011,ds=1012,xa=1013,ui=1014,fn=1015,Pn=1016,Ma=1017,ya=1018,Xi=1020,Lc=35902,Dc=1021,Ic=1022,cn=1023,Uc=1024,Nc=1025,zi=1026,Yi=1027,Sa=1028,Ea=1029,Fc=1030,ba=1031,Aa=1033,Js=33776,Qs=33777,tr=33778,er=33779,Oo=35840,Bo=35841,zo=35842,Ho=35843,ko=36196,Vo=37492,Go=37496,Wo=37808,Xo=37809,Yo=37810,$o=37811,qo=37812,jo=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,ta=37818,ea=37819,na=37820,ia=37821,nr=36492,sa=36494,ra=36495,Oc=36283,oa=36284,aa=36285,la=36286,su=3200,ru=3201,Bc=0,ou=1,kn="",rn="srgb",jn="srgb-linear",Ta="display-p3",Mr="display-p3-linear",lr="linear",ae="srgb",cr="rec709",hr="p3",_i=7680,Za=519,au=512,lu=513,cu=514,zc=515,hu=516,uu=517,du=518,fu=519,Ja=35044,Qa="300 es",wn=2e3,ur=2001;class fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,ca=180/Math.PI;function gs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function pu(i,t){return(i%t+t)%t}function Pr(i,t,e){return(1-e)*i+e*t}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mu={DEG2RAD:ir};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],x=s[1],M=s[4],S=s[7],R=s[2],A=s[5],T=s[8];return r[0]=o*v+a*x+l*R,r[3]=o*m+a*M+l*A,r[6]=o*f+a*S+l*T,r[1]=c*v+h*x+u*R,r[4]=c*m+h*M+u*A,r[7]=c*f+h*S+u*T,r[2]=d*v+p*x+g*R,r[5]=d*m+p*M+g*A,r[8]=d*f+p*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Xt;function Hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gu(){const i=dr("canvas");return i.style.display="block",i}const tl={};function sr(i){i in tl||(tl[i]=!0,console.warn(i))}function _u(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function vu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const el=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ts={[jn]:{transfer:lr,primaries:cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[rn]:{transfer:ae,primaries:cr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mr]:{transfer:lr,primaries:hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(nl),fromReference:i=>i.applyMatrix3(el)},[Ta]:{transfer:ae,primaries:hr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(nl),fromReference:i=>i.applyMatrix3(el).convertLinearToSRGB()}},Mu=new Set([jn,Mr]),te={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Mu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ts[t].toReference,s=ts[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ts[i].primaries},getTransfer:function(i){return i===kn?lr:ts[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ts[t].luminanceCoefficients)}};function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class yu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=dr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Su=0;class kc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ir(s[o].image)):r.push(Ir(s[o]))}else r=Ir(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;class Ue extends fi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=ci,s=ci,r=on,o=hi,a=cn,l=Ln,c=Ue.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=gs(),this.name="",this.source=new kc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Cc;Ue.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(p+1)/2,R=(f+1)/2,A=(h+d)/4,T=(u+v)/4,P=(g+m)/4;return M>S&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=T/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bu extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ue(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends bu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,x=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,f*x);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*x;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+v*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new I,il=new di;class pi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),bs.subVectors(this.max,es),xi.subVectors(t.a,es),Mi.subVectors(t.b,es),yi.subVectors(t.c,es),In.subVectors(Mi,xi),Un.subVectors(yi,Mi),Qn.subVectors(xi,yi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Qn.z,Qn.y,In.z,0,-In.x,Un.z,0,-Un.x,Qn.z,0,-Qn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Qn.y,Qn.x,0];return!Nr(e,xi,Mi,yi,bs)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,xi,Mi,yi,bs))?!1:(As.crossVectors(In,Un),e=[As.x,As.y,As.z],Nr(e,xi,Mi,yi,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new I,new I,new I,new I,new I,new I,new I,new I],tn=new I,Es=new pi,xi=new I,Mi=new I,yi=new I,In=new I,Un=new I,Qn=new I,es=new I,bs=new I,As=new I,ti=new I;function Nr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Tu=new pi,ns=new I,Fr=new I;class ji{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(Fr)),this.expandByPoint(ns.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new I,Or=new I,Ts=new I,Nn=new I,Br=new I,ws=new I,zr=new I;class wa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Or.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Or);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ts),a=Nn.dot(this.direction),l=-Nn.dot(Ts),c=Nn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Or).addScaledVector(Ts,d),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),s=xn.dot(xn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,s,r){Br.subVectors(e,t),ws.subVectors(n,t),zr.crossVectors(Br,ws);let o=this.direction.dot(zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(ws.crossVectors(Nn,ws));if(l<0)return null;const c=a*this.direction.dot(Br.cross(Nn));if(c<0||l+c>o)return null;const h=-a*Nn.dot(zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Cu)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Fn.crossVectors(n,Xe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Fn.crossVectors(n,Xe)),Fn.normalize(),Cs.crossVectors(Xe,Fn),s[0]=Fn.x,s[4]=Cs.x,s[8]=Xe.x,s[1]=Fn.y,s[5]=Cs.y,s[9]=Xe.y,s[2]=Fn.z,s[6]=Cs.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],x=n[3],M=n[7],S=n[11],R=n[15],A=s[0],T=s[4],P=s[8],L=s[12],_=s[1],y=s[5],D=s[9],F=s[13],V=s[2],K=s[6],H=s[10],k=s[14],B=s[3],rt=s[7],ot=s[11],at=s[15];return r[0]=o*A+a*_+l*V+c*B,r[4]=o*T+a*y+l*K+c*rt,r[8]=o*P+a*D+l*H+c*ot,r[12]=o*L+a*F+l*k+c*at,r[1]=h*A+u*_+d*V+p*B,r[5]=h*T+u*y+d*K+p*rt,r[9]=h*P+u*D+d*H+p*ot,r[13]=h*L+u*F+d*k+p*at,r[2]=g*A+v*_+m*V+f*B,r[6]=g*T+v*y+m*K+f*rt,r[10]=g*P+v*D+m*H+f*ot,r[14]=g*L+v*F+m*k+f*at,r[3]=x*A+M*_+S*V+R*B,r[7]=x*T+M*y+S*K+R*rt,r[11]=x*P+M*D+S*H+R*ot,r[15]=x*L+M*F+S*k+R*at,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],x=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,M=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,R=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,A=e*x+n*M+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*T,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*f+n*l*f)*T,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*T,t[4]=M*T,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*T,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*T,t[8]=S*T,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*T,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=R*T,t[13]=(h*v*s-g*u*s+g*n*d-e*v*d-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,x=l*c,M=l*h,S=l*u,R=n.x,A=n.y,T=n.z;return s[0]=(1-(v+f))*R,s[1]=(p+S)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(d+f))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(g+M)*T,s[9]=(m-x)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),a=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const c=1/r,h=1/o,u=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ur)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,v;if(a===wn)g=(o+r)*u,v=-2*u;else if(a===ur)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new I,en=new se,wu=new I(0,0,0),Cu=new I(1,1,1),Fn=new I,Cs=new I,Xe=new I,sl=new se,rl=new di;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ru=0;const ol=new I,Ei=new di,Mn=new se,Rs=new I,is=new I,Pu=new I,Lu=new di,al=new I(1,0,0),ll=new I(0,1,0),cl=new I(0,0,1),hl={type:"added"},Du={type:"removed"},bi={type:"childadded",child:null},Hr={type:"childremoved",child:null};class Ae extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new _n,n=new di,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Xt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rs.copy(t):Rs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(is,Rs,this.up):Mn.lookAt(Rs,is,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Du),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new I,yn=new I,kr=new I,Sn=new I,Ai=new I,Ti=new I,ul=new I,Vr=new I,Gr=new I,Wr=new I,Xr=new ie,Yr=new ie,$r=new ie;class an{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),yn.subVectors(n,e),kr.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(yn),l=nn.dot(kr),c=yn.dot(yn),h=yn.dot(kr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xr.setScalar(0),Yr.setScalar(0),$r.setScalar(0),Xr.fromBufferAttribute(t,e),Yr.fromBufferAttribute(t,n),$r.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xr,r.x),o.addScaledVector(Yr,r.y),o.addScaledVector($r,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),yn.subVectors(t,e),nn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),nn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ai.subVectors(s,n),Ti.subVectors(r,n),Vr.subVectors(t,n);const l=Ai.dot(Vr),c=Ti.dot(Vr);if(l<=0&&c<=0)return e.copy(n);Gr.subVectors(t,s);const h=Ai.dot(Gr),u=Ti.dot(Gr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ai,o);Wr.subVectors(t,r);const p=Ai.dot(Wr),g=Ti.dot(Wr);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ti,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ul.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ul,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(Ai,o).addScaledVector(Ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=pu(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qr(o,r,t+1/3),this.g=qr(o,r,t),this.b=qr(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return te.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ie(Pe.r*255,0,255))*65536+Math.round(Ie(Pe.g*255,0,255))*256+Math.round(Ie(Pe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=rn){te.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ps);const n=Pr(On.h,Ps.h,e),s=Pr(On.s,Ps.s,e),r=Pr(On.l,Ps.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Gt;Gt.NAMES=Wc;let Iu=0;class mi extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Bi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=Ao,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,Ls=new wt;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class Xc extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uu=0;const je=new se,jr=new Ae,wi=new I,Ye=new pi,ss=new pi,Me=new I;class Ve extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Yc:Xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ye.min,ss.min),Ye.expandByPoint(Me),Me.addVectors(Ye.max,ss.max),Ye.expandByPoint(Me)):(Ye.expandByPoint(ss.min),Ye.expandByPoint(ss.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(t,c),Me.add(wi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,d=new wt,p=new wt,g=new wt,v=new I,m=new I;function f(P,L,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,L),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const y=1/(p.x*g.y-g.x*p.y);isFinite(y)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(y),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(y),a[P].add(v),a[L].add(v),a[_].add(v),l[P].add(m),l[L].add(m),l[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,L=x.length;P<L;++P){const _=x[P],y=_.start,D=_.count;for(let F=y,V=y+D;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new I,S=new I,R=new I,A=new I;function T(P){R.fromBufferAttribute(s,P),A.copy(R);const L=a[P];M.copy(L),M.sub(R.multiplyScalar(R.dot(L))).normalize(),S.crossVectors(A,L);const y=S.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,y)}for(let P=0,L=x.length;P<L;++P){const _=x[P],y=_.start,D=_.count;for(let F=y,V=y+D;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new $e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new se,ei=new wa,Ds=new ji,fl=new I,Is=new I,Us=new I,Ns=new I,Kr=new I,Fs=new I,pl=new I,Os=new I;class re extends Ae{constructor(t=new Ve,e=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Kr.fromBufferAttribute(u,t),o?Fs.addScaledVector(Kr,h):Fs.addScaledVector(Kr.sub(e),h))}e.add(Fs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Ds.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Ds,fl)===null||ei.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=M;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);s=Bs(this,f,t,n,c,h,u,A,T,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=Bs(this,o,t,n,c,h,u,x,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,R=M;S<R;S+=3){const A=S,T=S+1,P=S+2;s=Bs(this,f,t,n,c,h,u,A,T,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const x=m,M=m+1,S=m+2;s=Bs(this,o,t,n,c,h,u,x,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nu(i,t,e,n,s,r,o,a){let l;if(t.side===ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$n,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Is),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);const h=Nu(i,t,e,n,Is,Us,Ns,pl);if(h){const u=new I;an.getBarycoord(pl,Is,Us,Ns,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,l,c,u,new wt)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new wt)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};an.getNormal(Is,Us,Ns,d.normal),h.face=d,h.barycoord=u}return h}class Xn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(v,m,f,x,M,S,R,A,T,P,L){const _=S/T,y=R/P,D=S/2,F=R/2,V=A/2,K=T+1,H=P+1;let k=0,B=0;const rt=new I;for(let ot=0;ot<H;ot++){const at=ot*y-F;for(let Pt=0;Pt<K;Pt++){const Ft=Pt*_-D;rt[v]=Ft*x,rt[m]=at*M,rt[f]=V,c.push(rt.x,rt.y,rt.z),rt[v]=0,rt[m]=0,rt[f]=A>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Pt/T),u.push(1-ot/P),k+=1}}for(let ot=0;ot<P;ot++)for(let at=0;at<T;at++){const Pt=d+at+K*ot,Ft=d+at+K*(ot+1),j=d+(at+1)+K*(ot+1),tt=d+(at+1)+K*ot;l.push(Pt,Ft,tt),l.push(Ft,j,tt),B+=6}a.addGroup(p,B,L),p+=B,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const s in n)t[s]=n[s]}return t}function Fu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const fr={clone:$i,merge:De};var Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new I,ml=new wt,gl=new wt;class Be extends qc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ci=-90,Ri=1;class zu extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Ci,Ri,t,e);s.layers=this.layers,this.add(s);const r=new Be(Ci,Ri,t,e);r.layers=this.layers,this.add(r);const o=new Be(Ci,Ri,t,e);o.layers=this.layers,this.add(o);const a=new Be(Ci,Ri,t,e);a.layers=this.layers,this.add(a);const l=new Be(Ci,Ri,t,e);l.layers=this.layers,this.add(l);const c=new Be(Ci,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Ue{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hu extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new He({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Rn});r.uniforms.tEquirect.value=e;const o=new re(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=on),new zu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Zr=new I,ku=new I,Vu=new Xt;class Hn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Zr.subVectors(n,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vu.getNormalMatrix(t),s=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new ji,zs=new I;class Ca{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],x=s[13],M=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+h,m+g,S+x).normalize(),n[3].setComponents(l-o,d-h,m-g,S-x).normalize(),n[4].setComponents(l-a,d-u,m-v,S-M).normalize(),e===wn)n[5].setComponents(l+a,d+u,m+v,S+M).normalize();else if(e===ur)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(zs.x=s.normal.x>0?t.max.x:t.min.x,zs.y=s.normal.y>0?t.max.y:t.min.y,zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gu(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class _s extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let M=0;M<c;M++){const S=M*u-r;g.push(S,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const M=x+c*f,S=x+c*(f+1),R=x+1+c*(f+1),A=x+1+c*f;p.push(M,S,A),p.push(S,R,A)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,Yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
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
#endif`,Qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Md="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
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
}`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
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
}`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
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
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
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
#endif`,Vd=`struct PhysicalMaterial {
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
}`,Gd=`
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qd=`#if defined( USE_POINTS_UV )
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
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
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
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rf=`float getShadowMask() {
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
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,Df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
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
}`,Zf=`#if DEPTH_PACKING == 3200
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
}`,Jf=`#define DISTANCE
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
}`,Qf=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 diffuse;
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
}`,op=`#define LAMBERT
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
}`,ap=`#define LAMBERT
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
}`,lp=`#define MATCAP
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
}`,cp=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,up=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,fp=`#define PHONG
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
}`,pp=`#define STANDARD
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
}`,mp=`#define STANDARD
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
}`,gp=`#define TOON
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
}`,_p=`#define TOON
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
}`,vp=`uniform float size;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,yp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:Yu,alphamap_pars_fragment:$u,alphatest_fragment:qu,alphatest_pars_fragment:ju,aomap_fragment:Ku,aomap_pars_fragment:Zu,batching_pars_vertex:Ju,batching_vertex:Qu,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:od,clipping_planes_pars_vertex:ad,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:vd,emissivemap_pars_fragment:xd,colorspace_fragment:Md,colorspace_pars_fragment:yd,envmap_fragment:Sd,envmap_common_pars_fragment:Ed,envmap_pars_fragment:bd,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Fd,envmap_vertex:Td,fog_vertex:wd,fog_pars_vertex:Cd,fog_fragment:Rd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Ld,lightmap_pars_fragment:Dd,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:Hd,lights_physical_fragment:kd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Gd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:Yd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:jd,map_fragment:Kd,map_pars_fragment:Zd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:of,morphtarget_vertex:af,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:xf,premultiplied_alpha_fragment:Mf,project_vertex:yf,dithering_fragment:Sf,dithering_pars_fragment:Ef,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:wf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:Df,skinnormal_vertex:If,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:Hf,uv_pars_vertex:kf,uv_vertex:Vf,worldpos_vertex:Gf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:Yf,backgroundCube_frag:$f,cube_vert:qf,cube_frag:jf,depth_vert:Kf,depth_frag:Zf,distanceRGBA_vert:Jf,distanceRGBA_frag:Qf,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:op,meshlambert_frag:ap,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:vp,points_frag:xp,shadow_vert:Mp,shadow_frag:yp,sprite_vert:Sp,sprite_frag:Ep},mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},un={basic:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:De([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:De([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:De([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:De([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:De([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:De([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:De([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:De([mt.lights,mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};un.physical={uniforms:De([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Hs={r:0,b:0,g:0},ii=new _n,bp=new se;function Ap(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function v(x){let M=!1;const S=g(x);S===null?f(a,l):S&&S.isColor&&(f(S,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===xr)?(h===void 0&&(h=new re(new Xn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:$i(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(M.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(ii)),h.material.toneMapped=te.getTransfer(S.colorSpace)!==ae,(u!==S||d!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new re(new _s(2,2),new He({name:"BackgroundMaterial",uniforms:$i(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,M){x.getRGB(Hs,$c(i)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:v,addToRenderList:m}}function Tp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(_,y,D,F,V){let K=!1;const H=u(F,D,y);r!==H&&(r=H,c(r.object)),K=p(_,F,D,V),K&&g(_,F,D,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(_,y,D,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,y,D){const F=D.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let K=V[y.id];K===void 0&&(K={},V[y.id]=K);let H=K[F];return H===void 0&&(H=d(l()),K[F]=H),H}function d(_){const y=[],D=[],F=[];for(let V=0;V<e;V++)y[V]=0,D[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:D,attributeDivisors:F,object:_,attributes:{},index:null}}function p(_,y,D,F){const V=r.attributes,K=y.attributes;let H=0;const k=D.getAttributes();for(const B in k)if(k[B].location>=0){const ot=V[B];let at=K[B];if(at===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),ot===void 0||ot.attribute!==at||at&&ot.data!==at.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(_,y,D,F){const V={},K=y.attributes;let H=0;const k=D.getAttributes();for(const B in k)if(k[B].location>=0){let ot=K[B];ot===void 0&&(B==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),B==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));const at={};at.attribute=ot,ot&&ot.data&&(at.data=ot.data),V[B]=at,H++}r.attributes=V,r.attributesNum=H,r.index=F}function v(){const _=r.newAttributes;for(let y=0,D=_.length;y<D;y++)_[y]=0}function m(_){f(_,0)}function f(_,y){const D=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;D[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),V[_]!==y&&(i.vertexAttribDivisor(_,y),V[_]=y)}function x(){const _=r.newAttributes,y=r.enabledAttributes;for(let D=0,F=y.length;D<F;D++)y[D]!==_[D]&&(i.disableVertexAttribArray(D),y[D]=0)}function M(_,y,D,F,V,K,H){H===!0?i.vertexAttribIPointer(_,y,D,V,K):i.vertexAttribPointer(_,y,D,F,V,K)}function S(_,y,D,F){v();const V=F.attributes,K=D.getAttributes(),H=y.defaultAttributeValues;for(const k in K){const B=K[k];if(B.location>=0){let rt=V[k];if(rt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor)),rt!==void 0){const ot=rt.normalized,at=rt.itemSize,Pt=t.get(rt);if(Pt===void 0)continue;const Ft=Pt.buffer,j=Pt.type,tt=Pt.bytesPerElement,pt=j===i.INT||j===i.UNSIGNED_INT||rt.gpuType===xa;if(rt.isInterleavedBufferAttribute){const ut=rt.data,vt=ut.stride,St=rt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<B.locationSize;Bt++)f(B.location+Bt,ut.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<B.locationSize;Bt++)m(B.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Bt=0;Bt<B.locationSize;Bt++)M(B.location+Bt,at/B.locationSize,j,ot,vt*tt,(St+at/B.locationSize*Bt)*tt,pt)}else{if(rt.isInstancedBufferAttribute){for(let ut=0;ut<B.locationSize;ut++)f(B.location+ut,rt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<B.locationSize;ut++)m(B.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let ut=0;ut<B.locationSize;ut++)M(B.location+ut,at/B.locationSize,j,ot,at*tt,at/B.locationSize*ut*tt,pt)}}else if(H!==void 0){const ot=H[k];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(B.location,ot);break;case 3:i.vertexAttrib3fv(B.location,ot);break;case 4:i.vertexAttrib4fv(B.location,ot);break;default:i.vertexAttrib1fv(B.location,ot)}}}}x()}function R(){P();for(const _ in n){const y=n[_];for(const D in y){const F=y[D];for(const V in F)h(F[V].object),delete F[V];delete y[D]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const D in y){const F=y[D];for(const V in F)h(F[V].object),delete F[V];delete y[D]}delete n[_.id]}function T(_){for(const y in n){const D=n[y];if(D[_.id]===void 0)continue;const F=D[_.id];for(const V in F)h(F[V].object),delete F[V];delete D[_.id]}}function P(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function wp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ln&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function Rp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,M=x*4;let S=f.clippingState||null;l.value=S,S=h(g,d,M,p);for(let R=0;R!==M;++R)S[R]=e[R];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=p;M!==v;++M,S+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Pp(i){let t=new WeakMap;function e(o,a){return a===Io?o.mapping=Gi:a===Uo&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===Uo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ra extends qc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,_l=[.125,.215,.35,.446,.526,.582],li=20,Jr=new Ra,vl=new Gt;let Qr=null,to=0,eo=0,no=!1;const oi=(1+Math.sqrt(5))/2,Pi=1/oi,xl=[new I(-oi,Pi,0),new I(oi,Pi,0),new I(-Pi,0,oi),new I(Pi,0,oi),new I(0,oi,-Pi),new I(0,oi,Pi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qr=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Pn,format:cn,colorSpace:jn,depthBuffer:!1},s=yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(r)),this._blurMaterial=Dp(r,t,e)}return s}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,s){const a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(vl),h.toneMapping=Wn,h.autoClear=!1;const p=new yr({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new re(new Xn,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(vl),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const M=this._cubeSize;ks(s,x*M,f>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new re(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const f=[];let x=0;for(let T=0;T<li;++T){const P=T/v,L=Math.exp(-P*P/2);f.push(L),T===0?x+=L:T<m&&(x+=2*L)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[s],R=3*S*(s>M-Fi?s-M+Fi:0),A=4*(this._cubeSize-S);ks(e,R,A,3*S,2*S),l.setRenderTarget(e),l.render(u,Jr)}}function Lp(i){const t=[],e=[],n=[];let s=i;const r=i-Fi+1+_l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Fi?l=_l[o-i+Fi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,x=new Float32Array(v*g*p),M=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,L=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(L,v*g*A),M.set(d,m*g*A);const _=[A,A,A,A,A,A];S.set(_,f*g*A)}const R=new Ve;R.setAttribute("position",new $e(x,v)),R.setAttribute("uv",new $e(M,m)),R.setAttribute("faceIndex",new $e(S,f)),t.push(R),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yl(i,t,e){const n=new hn(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dp(i,t,e){const n=new Float32Array(li),s=new I(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Sl(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function El(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function Ip(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Io||l===Uo,h=l===Gi||l===Wi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ml(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ml(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Up(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Np(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let M=0,S=x.length;M<S;M+=3){const R=x[M+0],A=x[M+1],T=x[M+2];d.push(R,A,A,T,T,R)}}else if(g!==void 0){const x=g.array;v=g.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const R=M+0,A=M+1,T=M+2;d.push(R,A,A,T,T,R)}}else return;const m=new(Hc(d)?Yc:Xc)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x];for(let x=0;x<v.length;x++)e.update(f,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Op(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bp(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let L=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let S=a.attributes.position.count*M,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*R*4*u),T=new Vc(A,S,R,u);T.type=fn,T.needsUpdate=!0;const P=M*4;for(let _=0;_<u;_++){const y=m[_],D=f[_],F=x[_],V=S*R*4*_;for(let K=0;K<y.count;K++){const H=K*P;p===!0&&(s.fromBufferAttribute(y,K),A[V+H+0]=s.x,A[V+H+1]=s.y,A[V+H+2]=s.z,A[V+H+3]=0),g===!0&&(s.fromBufferAttribute(D,K),A[V+H+4]=s.x,A[V+H+5]=s.y,A[V+H+6]=s.z,A[V+H+7]=0),v===!0&&(s.fromBufferAttribute(F,K),A[V+H+8]=s.x,A[V+H+9]=s.y,A[V+H+10]=s.z,A[V+H+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new wt(S,R)},n.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Zc extends Ue{constructor(t,e,n,s,r,o,a,l,c,h=zi){if(h!==zi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=ui),n===void 0&&h===Yi&&(n=Xi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jc=new Ue,bl=new Zc(1,1),Qc=new Vc,th=new Au,eh=new jc,Al=[],Tl=[],wl=new Float32Array(16),Cl=new Float32Array(9),Rl=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Al[s];if(r===void 0&&(r=new Float32Array(s),Al[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sr(i,t){let e=Tl[t];e===void 0&&(e=new Int32Array(t),Tl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),ve(e,n)}}function Xp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Cl.set(n),i.uniformMatrix3fv(this.addr,!1,Cl),ve(e,n)}}function Yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),ve(e,n)}}function $p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function Zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bl.compareFunction=zc,r=bl):r=Jc,e.setTexture2D(t||r,s)}function nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||th,s)}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||eh,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qc,s)}function rm(i){switch(i){case 5126:return Hp;case 35664:return kp;case 35665:return Vp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return $p;case 35667:case 35671:return qp;case 35668:case 35672:return jp;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return Jp;case 36295:return Qp;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}function om(i,t){i.uniform1fv(this.addr,t)}function am(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function lm(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function cm(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function hm(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function um(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dm(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fm(i,t){i.uniform1iv(this.addr,t)}function pm(i,t){i.uniform2iv(this.addr,t)}function mm(i,t){i.uniform3iv(this.addr,t)}function gm(i,t){i.uniform4iv(this.addr,t)}function _m(i,t){i.uniform1uiv(this.addr,t)}function vm(i,t){i.uniform2uiv(this.addr,t)}function xm(i,t){i.uniform3uiv(this.addr,t)}function Mm(i,t){i.uniform4uiv(this.addr,t)}function ym(i,t,e){const n=this.cache,s=t.length,r=Sr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jc,r[o])}function Sm(i,t,e){const n=this.cache,s=t.length,r=Sr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||th,r[o])}function Em(i,t,e){const n=this.cache,s=t.length,r=Sr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||eh,r[o])}function bm(i,t,e){const n=this.cache,s=t.length,r=Sr(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qc,r[o])}function Am(i){switch(i){case 5126:return om;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return vm;case 36295:return xm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return bm}}class Tm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rm(e.type)}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Am(e.type)}}class Cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Pl(i,t){i.seq.push(t),i.map[t.id]=t}function Rm(i,t,e){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),o=io.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pl(e,c===void 0?new Tm(a,i,t):new wm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cm(a),Pl(e,u)),e=u}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Pm=37297;let Lm=0;function Dm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Im(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===hr&&e===cr?n="LinearDisplayP3ToLinearSRGB":t===cr&&e===hr&&(n="LinearSRGBToLinearDisplayP3"),i){case jn:case Mr:return[n,"LinearTransferOETF"];case rn:case Ta:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dm(i.getShaderSource(t),o)}else return s}function Um(i,t){const e=Im(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Nm(i,t){let e;switch(t){case Zh:e="Linear";break;case Jh:e="Reinhard";break;case Qh:e="Cineon";break;case wc:e="ACESFilmic";break;case eu:e="AgX";break;case nu:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new I;function Fm(){te.getLuminanceCoefficients(Vs);const i=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Om(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function hs(i){return i!==""}function Il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(i){return i.replace(Hm,Vm)}const km=new Map;function Vm(i,t){let e=Wt[t];if(e===void 0){const n=km.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ha(e)}const Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(Gm,Wm)}function Wm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Xm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $m(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function qm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tc:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function jm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Km(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Xm(e),c=Ym(e),h=$m(e),u=qm(e),d=jm(e),p=Om(e),g=Bm(r),v=s.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hs).join(`
`),f.length>0&&(f+=`
`)):(m=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),f=[Fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Nm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Um("linearToOutputTexel",e.outputColorSpace),Fm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=ha(o),o=Il(o,e),o=Ul(o,e),a=ha(a),a=Il(a,e),a=Ul(a,e),o=Nl(o),a=Nl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+o,S=x+f+a,R=Ll(s,s.VERTEX_SHADER,M),A=Ll(s,s.FRAGMENT_SHADER,S);s.attachShader(v,R),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(y){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(A).trim();let K=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,A);else{const k=Dl(s,R,"vertex"),B=Dl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+D+`
`+k+`
`+B)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||V==="")&&(H=!1);H&&(y.diagnostics={runnable:K,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(R),s.deleteShader(A),P=new rr(s,v),L=zm(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let L;this.getAttributes=function(){return L===void 0&&T(this),L};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Pm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let Zm=0;class Jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qm(t),e.set(t,n)),n}}class Qm{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}}function tg(i,t,e,n,s,r,o){const a=new Gc,l=new Jm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,y,D,F,V){const K=F.fog,H=V.geometry,k=_.isMeshStandardMaterial?F.environment:null,B=(_.isMeshStandardMaterial?e:t).get(_.envMap||k),rt=B&&B.mapping===xr?B.image.height:null,ot=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const at=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Pt=at!==void 0?at.length:0;let Ft=0;H.morphAttributes.position!==void 0&&(Ft=1),H.morphAttributes.normal!==void 0&&(Ft=2),H.morphAttributes.color!==void 0&&(Ft=3);let j,tt,pt,ut;if(ot){const we=un[ot];j=we.vertexShader,tt=we.fragmentShader}else j=_.vertexShader,tt=_.fragmentShader,l.update(_),pt=l.getVertexShaderID(_),ut=l.getFragmentShaderID(_);const vt=i.getRenderTarget(),St=V.isInstancedMesh===!0,Bt=V.isBatchedMesh===!0,Vt=!!_.map,Nt=!!_.matcap,C=!!B,kt=!!_.aoMap,yt=!!_.lightMap,Ct=!!_.bumpMap,Et=!!_.normalMap,$t=!!_.displacementMap,It=!!_.emissiveMap,w=!!_.metalnessMap,E=!!_.roughnessMap,G=_.anisotropy>0,Q=_.clearcoat>0,it=_.dispersion>0,Z=_.iridescence>0,W=_.sheen>0,Y=_.transmission>0,J=G&&!!_.anisotropyMap,At=Q&&!!_.clearcoatMap,nt=Q&&!!_.clearcoatNormalMap,lt=Q&&!!_.clearcoatRoughnessMap,dt=Z&&!!_.iridescenceMap,ht=Z&&!!_.iridescenceThicknessMap,ft=W&&!!_.sheenColorMap,Ot=W&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,Zt=!!_.specularColorMap,N=!!_.specularIntensityMap,_t=Y&&!!_.transmissionMap,$=Y&&!!_.thicknessMap,et=!!_.gradientMap,gt=!!_.alphaMap,xt=_.alphaTest>0,qt=!!_.alphaHash,ce=!!_.extensions;let Ee=Wn;_.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const jt={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:j,fragmentShader:tt,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:ut,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Bt,batchingColor:Bt&&V._colorsTexture!==null,instancing:St,instancingColor:St&&V.instanceColor!==null,instancingMorph:St&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:jn,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:Nt,envMap:C,envMapMode:C&&B.mapping,envMapCubeUVHeight:rt,aoMap:kt,lightMap:yt,bumpMap:Ct,normalMap:Et,displacementMap:p&&$t,emissiveMap:It,normalMapObjectSpace:Et&&_.normalMapType===ou,normalMapTangentSpace:Et&&_.normalMapType===Bc,metalnessMap:w,roughnessMap:E,anisotropy:G,anisotropyMap:J,clearcoat:Q,clearcoatMap:At,clearcoatNormalMap:nt,clearcoatRoughnessMap:lt,dispersion:it,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:ht,sheen:W,sheenColorMap:ft,sheenRoughnessMap:Ot,specularMap:Ut,specularColorMap:Zt,specularIntensityMap:N,transmission:Y,transmissionMap:_t,thicknessMap:$,gradientMap:et,opaque:_.transparent===!1&&_.blending===Bi&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:xt,alphaHash:qt,combine:_.combine,mapUv:Vt&&m(_.map.channel),aoMapUv:kt&&m(_.aoMap.channel),lightMapUv:yt&&m(_.lightMap.channel),bumpMapUv:Ct&&m(_.bumpMap.channel),normalMapUv:Et&&m(_.normalMap.channel),displacementMapUv:$t&&m(_.displacementMap.channel),emissiveMapUv:It&&m(_.emissiveMap.channel),metalnessMapUv:w&&m(_.metalnessMap.channel),roughnessMapUv:E&&m(_.roughnessMap.channel),anisotropyMapUv:J&&m(_.anisotropyMap.channel),clearcoatMapUv:At&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:nt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&m(_.sheenRoughnessMap.channel),specularMapUv:Ut&&m(_.specularMap.channel),specularColorMapUv:Zt&&m(_.specularColorMap.channel),specularIntensityMapUv:N&&m(_.specularIntensityMap.channel),transmissionMapUv:_t&&m(_.transmissionMap.channel),thicknessMapUv:$&&m(_.thicknessMap.channel),alphaMapUv:gt&&m(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Et||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!H.attributes.uv&&(Vt||gt),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)y.push(D),y.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(M(y,_),S(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function M(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function S(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function R(_){const y=v[_.type];let D;if(y){const F=un[y];D=fr.clone(F.uniforms)}else D=_.uniforms;return D}function A(_,y){let D;for(let F=0,V=h.length;F<V;F++){const K=h[F];if(K.cacheKey===y){D=K,++D.usedTimes;break}}return D===void 0&&(D=new Km(i,y,_,r),h.push(D)),D}function T(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function P(_){l.remove(_)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:R,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:L}}function eg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ol(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||ng),n.length>1&&n.sort(d||Ol),s.length>1&&s.sort(d||Ol)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ig(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Bl,i.set(n,[o])):s>=r.length?(o=new Bl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let og=0;function ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){const t=new sg,e=rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new se,o=new se;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,x=0,M=0,S=0,R=0,A=0,T=0;c.sort(ag);for(let L=0,_=c.length;L<_;L++){const y=c[L],D=y.color,F=y.intensity,V=y.distance,K=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(y.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(y.sh.coefficients[H],F);T++}else if(y.isDirectionalLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const k=y.shadow,B=e.get(y);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=y.shadow.matrix,x++}n.directional[p]=H,p++}else if(y.isSpotLight){const H=t.get(y);H.position.setFromMatrixPosition(y.matrixWorld),H.color.copy(D).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(y.angle),H.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),H.decay=y.decay,n.spot[v]=H;const k=y.shadow;if(y.map&&(n.spotLightMap[R]=y.map,R++,k.updateMatrices(y),y.castShadow&&A++),n.spotLightMatrix[v]=k.matrix,y.castShadow){const B=e.get(y);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=K,S++}v++}else if(y.isRectAreaLight){const H=t.get(y);H.color.copy(D).multiplyScalar(F),H.halfWidth.set(y.width*.5,0,0),H.halfHeight.set(0,y.height*.5,0),n.rectArea[m]=H,m++}else if(y.isPointLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),H.distance=y.distance,H.decay=y.decay,y.castShadow){const k=y.shadow,B=e.get(y);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=y.shadow.matrix,M++}n.point[g]=H,g++}else if(y.isHemisphereLight){const H=t.get(y);H.skyColor.copy(y.color).multiplyScalar(F),H.groundColor.copy(y.groundColor).multiplyScalar(F),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=T,n.version=og++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const M=c[f];if(M.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function zl(i){const t=new lg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zl(i),t.set(s,[a])):r>=o.length?(a=new zl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hg extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ug extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function pg(i,t,e){let n=new Ca;const s=new wt,r=new wt,o=new ie,a=new hg({depthPacking:ru}),l=new ug,c={},h=e.maxTextureSize,u={[$n]:ke,[ke]:$n,[Tn]:Tn},d=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let f=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const L=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Rn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=f!==En&&this.type===En,V=f===En&&this.type!==En;for(let K=0,H=A.length;K<H;K++){const k=A[K],B=k.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const rt=B.getFrameExtents();if(s.multiply(rt),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,B.mapSize.y=r.y)),B.map===null||F===!0||V===!0){const at=this.type!==En?{minFilter:ze,magFilter:ze}:{};B.map!==null&&B.map.dispose(),B.map=new hn(s.x,s.y,at),B.map.texture.name=k.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ot=B.getViewportCount();for(let at=0;at<ot;at++){const Pt=B.getViewport(at);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),D.viewport(o),B.updateMatrices(k,at),n=B.getFrustum(),S(T,P,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===En&&x(B,P),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(L,_,y)};function x(A,T){const P=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,p,v,null)}function M(A,T,P,L){let _=null;const y=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(y!==void 0)_=y;else if(_=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=_.uuid,F=T.uuid;let V=c[D];V===void 0&&(V={},c[D]=V);let K=V[F];K===void 0&&(K=_.clone(),V[F]=K,T.addEventListener("dispose",R)),_=K}if(_.visible=T.visible,_.wireframe=T.wireframe,L===En?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=P}return _}function S(A,T,P,L,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=t.update(A),V=A.material;if(Array.isArray(V)){const K=F.groups;for(let H=0,k=K.length;H<k;H++){const B=K[H],rt=V[B.materialIndex];if(rt&&rt.visible){const ot=M(A,rt,L,_);A.onBeforeShadow(i,A,T,P,F,ot,B),i.renderBufferDirect(P,null,F,ot,A,B),A.onAfterShadow(i,A,T,P,F,ot,B)}}}else if(V.visible){const K=M(A,V,L,_);A.onBeforeShadow(i,A,T,P,F,K,null),i.renderBufferDirect(P,null,F,K,A,null),A.onAfterShadow(i,A,T,P,F,K,null)}}const D=A.children;for(let F=0,V=D.length;F<V;F++)S(D[F],T,P,L,_)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const L=c[P],_=A.target.uuid;_ in L&&(L[_].dispose(),delete L[_])}}}const mg={[To]:wo,[Co]:Lo,[Ro]:Do,[Vi]:Po,[wo]:To,[Lo]:Co,[Do]:Ro,[Po]:Vi};function gg(i){function t(){let N=!1;const _t=new ie;let $=null;const et=new ie(0,0,0,0);return{setMask:function(gt){$!==gt&&!N&&(i.colorMask(gt,gt,gt,gt),$=gt)},setLocked:function(gt){N=gt},setClear:function(gt,xt,qt,ce,Ee){Ee===!0&&(gt*=ce,xt*=ce,qt*=ce),_t.set(gt,xt,qt,ce),et.equals(_t)===!1&&(i.clearColor(gt,xt,qt,ce),et.copy(_t))},reset:function(){N=!1,$=null,et.set(-1,0,0,0)}}}function e(){let N=!1,_t=!1,$=null,et=null,gt=null;return{setReversed:function(xt){_t=xt},setTest:function(xt){xt?pt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(xt){$!==xt&&!N&&(i.depthMask(xt),$=xt)},setFunc:function(xt){if(_t&&(xt=mg[xt]),et!==xt){switch(xt){case To:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=xt}},setLocked:function(xt){N=xt},setClear:function(xt){gt!==xt&&(i.clearDepth(xt),gt=xt)},reset:function(){N=!1,$=null,et=null,gt=null}}}function n(){let N=!1,_t=null,$=null,et=null,gt=null,xt=null,qt=null,ce=null,Ee=null;return{setTest:function(jt){N||(jt?pt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(jt){_t!==jt&&!N&&(i.stencilMask(jt),_t=jt)},setFunc:function(jt,we,Ce){($!==jt||et!==we||gt!==Ce)&&(i.stencilFunc(jt,we,Ce),$=jt,et=we,gt=Ce)},setOp:function(jt,we,Ce){(xt!==jt||qt!==we||ce!==Ce)&&(i.stencilOp(jt,we,Ce),xt=jt,qt=we,ce=Ce)},setLocked:function(jt){N=jt},setClear:function(jt){Ee!==jt&&(i.clearStencil(jt),Ee=jt)},reset:function(){N=!1,_t=null,$=null,et=null,gt=null,xt=null,qt=null,ce=null,Ee=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,M=null,S=null,R=null,A=new Gt(0,0,0),T=0,P=!1,L=null,_=null,y=null,D=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),K=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),K=H>=2);let B=null,rt={};const ot=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Pt=new ie().fromArray(ot),Ft=new ie().fromArray(at);function j(N,_t,$,et){const gt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(N,xt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<$;qt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(_t+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return xt}const tt={};tt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pt(i.DEPTH_TEST),r.setFunc(Vi),yt(!1),Ct(qa),pt(i.CULL_FACE),C(Rn);function pt(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function ut(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function vt(N,_t){return h[N]!==_t?(i.bindFramebuffer(N,_t),h[N]=_t,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function St(N,_t){let $=d,et=!1;if(N){$=u.get(_t),$===void 0&&($=[],u.set(_t,$));const gt=N.textures;if($.length!==gt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,qt=gt.length;xt<qt;xt++)$[xt]=i.COLOR_ATTACHMENT0+xt;$.length=gt.length,et=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,et=!0);et&&i.drawBuffers($)}function Bt(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const Vt={[ai]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};Vt[Uh]=i.MIN,Vt[Nh]=i.MAX;const Nt={[Fh]:i.ZERO,[Oh]:i.ONE,[Bh]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[Wh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[Hh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[Ao]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Xh]:i.CONSTANT_COLOR,[Yh]:i.ONE_MINUS_CONSTANT_COLOR,[$h]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function C(N,_t,$,et,gt,xt,qt,ce,Ee,jt){if(N===Rn){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(pt(i.BLEND),g=!0),N!==Lh){if(N!==v||jt!==P){if((m!==ai||M!==ai)&&(i.blendEquation(i.FUNC_ADD),m=ai,M=ai),jt)switch(N){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}f=null,x=null,S=null,R=null,A.set(0,0,0),T=0,v=N,P=jt}return}gt=gt||_t,xt=xt||$,qt=qt||et,(_t!==m||gt!==M)&&(i.blendEquationSeparate(Vt[_t],Vt[gt]),m=_t,M=gt),($!==f||et!==x||xt!==S||qt!==R)&&(i.blendFuncSeparate(Nt[$],Nt[et],Nt[xt],Nt[qt]),f=$,x=et,S=xt,R=qt),(ce.equals(A)===!1||Ee!==T)&&(i.blendColor(ce.r,ce.g,ce.b,Ee),A.copy(ce),T=Ee),v=N,P=!1}function kt(N,_t){N.side===Tn?ut(i.CULL_FACE):pt(i.CULL_FACE);let $=N.side===ke;_t&&($=!$),yt($),N.blending===Bi&&N.transparent===!1?C(Rn):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const et=N.stencilWrite;o.setTest(et),et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),$t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function Ct(N){N!==Rh?(pt(i.CULL_FACE),N!==_&&(N===qa?i.cullFace(i.BACK):N===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),_=N}function Et(N){N!==y&&(K&&i.lineWidth(N),y=N)}function $t(N,_t,$){N?(pt(i.POLYGON_OFFSET_FILL),(D!==_t||F!==$)&&(i.polygonOffset(_t,$),D=_t,F=$)):ut(i.POLYGON_OFFSET_FILL)}function It(N){N?pt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+V-1),B!==N&&(i.activeTexture(N),B=N)}function E(N,_t,$){$===void 0&&(B===null?$=i.TEXTURE0+V-1:$=B);let et=rt[$];et===void 0&&(et={type:void 0,texture:void 0},rt[$]=et),(et.type!==N||et.texture!==_t)&&(B!==$&&(i.activeTexture($),B=$),i.bindTexture(N,_t||tt[N]),et.type=N,et.texture=_t)}function G(){const N=rt[B];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(N){Pt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Pt.copy(N))}function ft(N){Ft.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ft.copy(N))}function Ot(N,_t){let $=l.get(_t);$===void 0&&($=new WeakMap,l.set(_t,$));let et=$.get(N);et===void 0&&(et=i.getUniformBlockIndex(_t,N.name),$.set(N,et))}function Ut(N,_t){const et=l.get(_t).get(N);a.get(_t)!==et&&(i.uniformBlockBinding(_t,et,N.__bindingPointIndex),a.set(_t,et))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},B=null,rt={},h={},u=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,x=null,M=null,S=null,R=null,A=new Gt(0,0,0),T=0,P=!1,L=null,_=null,y=null,D=null,F=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Ft.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pt,disable:ut,bindFramebuffer:vt,drawBuffers:St,useProgram:Bt,setBlending:C,setMaterial:kt,setFlipSided:yt,setCullFace:Ct,setLineWidth:Et,setPolygonOffset:$t,setScissorTest:It,activeTexture:w,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:it,texImage2D:lt,texImage3D:dt,updateUBOMapping:Ot,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:nt,texSubImage2D:Z,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:ht,viewport:ft,reset:Zt}}function Hl(i,t,e,n){const s=_g(n);switch(e){case Dc:return i*t;case Uc:return i*t;case Nc:return i*t*2;case Sa:return i*t/s.components*s.byteLength;case Ea:return i*t/s.components*s.byteLength;case Fc:return i*t*2/s.components*s.byteLength;case ba:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Aa:return i*t*4/s.components*s.byteLength;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case Ho:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case zo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nr:case sa:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oc:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case aa:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case Ln:case Rc:return{byteLength:1,components:1};case ds:case Pc:case Pn:return{byteLength:2,components:1};case Ma:case ya:return{byteLength:2,components:4};case ui:case xa:case fn:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return p?new OffscreenCanvas(w,E):dr("canvas")}function v(w,E,G){let Q=1;const it=It(w);if((it.width>G||it.height>G)&&(Q=G/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(Q*it.width),W=Math.floor(Q*it.height);u===void 0&&(u=g(Z,W));const Y=E?g(Z,W):u;return Y.width=Z,Y.height=W,Y.getContext("2d").drawImage(w,0,0,Z,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+W+")."),Y}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==ze&&w.minFilter!==on}function f(w){i.generateMipmap(w)}function x(w,E,G,Q,it=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=E;if(E===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),E===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),E===i.RGBA){const W=it?lr:te.getTransfer(Q);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=W===ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(w,E){let G;return w?E===null||E===ui||E===Xi?G=i.DEPTH24_STENCIL8:E===fn?G=i.DEPTH32F_STENCIL8:E===ds&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ui||E===Xi?G=i.DEPTH_COMPONENT24:E===fn?G=i.DEPTH_COMPONENT32F:E===ds&&(G=i.DEPTH_COMPONENT16),G}function S(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ze&&w.minFilter!==on?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function R(w){const E=w.target;E.removeEventListener("dispose",R),T(E),E.isVideoTexture&&h.delete(E)}function A(w){const E=w.target;E.removeEventListener("dispose",A),L(E)}function T(w){const E=n.get(w);if(E.__webglInit===void 0)return;const G=w.source,Q=d.get(G);if(Q){const it=Q[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&P(w),Object.keys(Q).length===0&&d.delete(G)}n.remove(w)}function P(w){const E=n.get(w);i.deleteTexture(E.__webglTexture);const G=w.source,Q=d.get(G);delete Q[E.__cacheKey],o.memory.textures--}function L(w){const E=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let it=0;it<E.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=w.textures;for(let Q=0,it=G.length;Q<it;Q++){const Z=n.get(G[Q]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(w)}let _=0;function y(){_=0}function D(){const w=_;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),_+=1,w}function F(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function V(w,E){const G=n.get(w);if(w.isVideoTexture&&Et(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(G,w,E);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function K(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Ft(G,w,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function H(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Ft(G,w,E);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function k(w,E){const G=n.get(w);if(w.version>0&&G.__version!==w.version){j(G,w,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const B={[No]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Fo]:i.MIRRORED_REPEAT},rt={[ze]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ot={[au]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[zc]:i.LEQUAL,[cu]:i.EQUAL,[du]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function at(w,E){if(E.type===fn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===on||E.magFilter===Rr||E.magFilter===Ss||E.magFilter===hi||E.minFilter===on||E.minFilter===Rr||E.minFilter===Ss||E.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,B[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,B[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,B[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,rt[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ot[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ze||E.minFilter!==Ss&&E.minFilter!==hi||E.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Pt(w,E){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",R));const Q=E.source;let it=d.get(Q);it===void 0&&(it={},d.set(Q,it));const Z=F(E);if(Z!==w.__cacheKey){it[Z]===void 0&&(it[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),it[Z].usedTimes++;const W=it[w.__cacheKey];W!==void 0&&(it[w.__cacheKey].usedTimes--,W.usedTimes===0&&P(E)),w.__cacheKey=Z,w.__webglTexture=it[Z].texture}return G}function Ft(w,E,G){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);const it=Pt(w,E),Z=E.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+G);const W=n.get(Z);if(Z.version!==W.__version||it===!0){e.activeTexture(i.TEXTURE0+G);const Y=te.getPrimaries(te.workingColorSpace),J=E.colorSpace===kn?null:te.getPrimaries(E.colorSpace),At=E.colorSpace===kn||Y===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let nt=v(E.image,!1,s.maxTextureSize);nt=$t(E,nt);const lt=r.convert(E.format,E.colorSpace),dt=r.convert(E.type);let ht=x(E.internalFormat,lt,dt,E.colorSpace,E.isVideoTexture);at(Q,E);let ft;const Ot=E.mipmaps,Ut=E.isVideoTexture!==!0,Zt=W.__version===void 0||it===!0,N=Z.dataReady,_t=S(E,nt);if(E.isDepthTexture)ht=M(E.format===Yi,E.type),Zt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,ht,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,ht,nt.width,nt.height,0,lt,dt,null));else if(E.isDataTexture)if(Ot.length>0){Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,ht,Ot[0].width,Ot[0].height);for(let $=0,et=Ot.length;$<et;$++)ft=Ot[$],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ft.width,ft.height,lt,dt,ft.data):e.texImage2D(i.TEXTURE_2D,$,ht,ft.width,ft.height,0,lt,dt,ft.data);E.generateMipmaps=!1}else Ut?(Zt&&e.texStorage2D(i.TEXTURE_2D,_t,ht,nt.width,nt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,lt,dt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,ht,nt.width,nt.height,0,lt,dt,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,ht,Ot[0].width,Ot[0].height,nt.depth);for(let $=0,et=Ot.length;$<et;$++)if(ft=Ot[$],E.format!==cn)if(lt!==null)if(Ut){if(N)if(E.layerUpdates.size>0){const gt=Hl(ft.width,ft.height,E.format,E.type);for(const xt of E.layerUpdates){const qt=ft.data.subarray(xt*gt/ft.data.BYTES_PER_ELEMENT,(xt+1)*gt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,xt,ft.width,ft.height,1,lt,qt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ft.width,ft.height,nt.depth,lt,ft.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ht,ft.width,ft.height,nt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ft.width,ft.height,nt.depth,lt,dt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ht,ft.width,ft.height,nt.depth,0,lt,dt,ft.data)}else{Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,_t,ht,Ot[0].width,Ot[0].height);for(let $=0,et=Ot.length;$<et;$++)ft=Ot[$],E.format!==cn?lt!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ft.width,ft.height,lt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ht,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ft.width,ft.height,lt,dt,ft.data):e.texImage2D(i.TEXTURE_2D,$,ht,ft.width,ft.height,0,lt,dt,ft.data)}else if(E.isDataArrayTexture)if(Ut){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,ht,nt.width,nt.height,nt.depth),N)if(E.layerUpdates.size>0){const $=Hl(nt.width,nt.height,E.format,E.type);for(const et of E.layerUpdates){const gt=nt.data.subarray(et*$/nt.data.BYTES_PER_ELEMENT,(et+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,nt.width,nt.height,1,lt,dt,gt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,lt,dt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,nt.width,nt.height,nt.depth,0,lt,dt,nt.data);else if(E.isData3DTexture)Ut?(Zt&&e.texStorage3D(i.TEXTURE_3D,_t,ht,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,lt,dt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,ht,nt.width,nt.height,nt.depth,0,lt,dt,nt.data);else if(E.isFramebufferTexture){if(Zt)if(Ut)e.texStorage2D(i.TEXTURE_2D,_t,ht,nt.width,nt.height);else{let $=nt.width,et=nt.height;for(let gt=0;gt<_t;gt++)e.texImage2D(i.TEXTURE_2D,gt,ht,$,et,0,lt,dt,null),$>>=1,et>>=1}}else if(Ot.length>0){if(Ut&&Zt){const $=It(Ot[0]);e.texStorage2D(i.TEXTURE_2D,_t,ht,$.width,$.height)}for(let $=0,et=Ot.length;$<et;$++)ft=Ot[$],Ut?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,lt,dt,ft):e.texImage2D(i.TEXTURE_2D,$,ht,lt,dt,ft);E.generateMipmaps=!1}else if(Ut){if(Zt){const $=It(nt);e.texStorage2D(i.TEXTURE_2D,_t,ht,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,dt,nt)}else e.texImage2D(i.TEXTURE_2D,0,ht,lt,dt,nt);m(E)&&f(Q),W.__version=Z.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function j(w,E,G){if(E.image.length!==6)return;const Q=Pt(w,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const Z=n.get(it);if(it.version!==Z.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);const W=te.getPrimaries(te.workingColorSpace),Y=E.colorSpace===kn?null:te.getPrimaries(E.colorSpace),J=E.colorSpace===kn||W===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,lt=[];for(let et=0;et<6;et++)!At&&!nt?lt[et]=v(E.image[et],!0,s.maxCubemapSize):lt[et]=nt?E.image[et].image:E.image[et],lt[et]=$t(E,lt[et]);const dt=lt[0],ht=r.convert(E.format,E.colorSpace),ft=r.convert(E.type),Ot=x(E.internalFormat,ht,ft,E.colorSpace),Ut=E.isVideoTexture!==!0,Zt=Z.__version===void 0||Q===!0,N=it.dataReady;let _t=S(E,dt);at(i.TEXTURE_CUBE_MAP,E);let $;if(At){Ut&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Ot,dt.width,dt.height);for(let et=0;et<6;et++){$=lt[et].mipmaps;for(let gt=0;gt<$.length;gt++){const xt=$[gt];E.format!==cn?ht!==null?Ut?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,xt.width,xt.height,ht,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,0,0,xt.width,xt.height,ht,ft,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt,Ot,xt.width,xt.height,0,ht,ft,xt.data)}}}else{if($=E.mipmaps,Ut&&Zt){$.length>0&&_t++;const et=It(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Ot,et.width,et.height)}for(let et=0;et<6;et++)if(nt){Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,lt[et].width,lt[et].height,ht,ft,lt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ot,lt[et].width,lt[et].height,0,ht,ft,lt[et].data);for(let gt=0;gt<$.length;gt++){const qt=$[gt].image[et].image;Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,qt.width,qt.height,ht,ft,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Ot,qt.width,qt.height,0,ht,ft,qt.data)}}else{Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ht,ft,lt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ot,ht,ft,lt[et]);for(let gt=0;gt<$.length;gt++){const xt=$[gt];Ut?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,0,0,ht,ft,xt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt+1,Ot,ht,ft,xt.image[et])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),Z.__version=it.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function tt(w,E,G,Q,it,Z){const W=r.convert(G.format,G.colorSpace),Y=r.convert(G.type),J=x(G.internalFormat,W,Y,G.colorSpace);if(!n.get(E).__hasExternalTextures){const nt=Math.max(1,E.width>>Z),lt=Math.max(1,E.height>>Z);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,J,nt,lt,E.depth,0,W,Y,null):e.texImage2D(it,Z,J,nt,lt,0,W,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ct(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,n.get(G).__webglTexture,0,yt(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,n.get(G).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(w,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer){const Q=E.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,Z=M(E.stencilBuffer,it),W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=yt(E);Ct(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,Z,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,w)}else{const Q=E.textures;for(let it=0;it<Q.length;it++){const Z=Q[it],W=r.convert(Z.format,Z.colorSpace),Y=r.convert(Z.type),J=x(Z.internalFormat,W,Y,Z.colorSpace),At=yt(E);G&&Ct(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,J,E.width,E.height):Ct(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,J,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,J,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const Q=n.get(E.depthTexture).__webglTexture,it=yt(E);if(E.depthTexture.format===zi)Ct(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(E.depthTexture.format===Yi)Ct(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function vt(w){const E=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=Q}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ut(E.__webglFramebuffer,w)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),pt(E.__webglDepthbuffer[Q],w,!1);else{const it=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),pt(E.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(w,E,G){const Q=n.get(w);E!==void 0&&tt(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&vt(w)}function Bt(w){const E=w.texture,G=n.get(w),Q=n.get(E);w.addEventListener("dispose",A);const it=w.textures,Z=w.isWebGLCubeRenderTarget===!0,W=it.length>1;if(W||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let J=0;J<E.mipmaps.length;J++)G.__webglFramebuffer[Y][J]=i.createFramebuffer()}else G.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)G.__webglFramebuffer[Y]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(W)for(let Y=0,J=it.length;Y<J;Y++){const At=n.get(it[Y]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ct(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<it.length;Y++){const J=it[Y];G.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);const At=r.convert(J.format,J.colorSpace),nt=r.convert(J.type),lt=x(J.internalFormat,At,nt,J.colorSpace,w.isXRRenderTarget===!0),dt=yt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,lt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),at(i.TEXTURE_CUBE_MAP,E);for(let Y=0;Y<6;Y++)if(E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)tt(G.__webglFramebuffer[Y][J],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else tt(G.__webglFramebuffer[Y],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(W){for(let Y=0,J=it.length;Y<J;Y++){const At=it[Y],nt=n.get(At);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),at(i.TEXTURE_2D,At),tt(G.__webglFramebuffer,w,At,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),m(At)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,Q.__webglTexture),at(Y,E),E.mipmaps&&E.mipmaps.length>0)for(let J=0;J<E.mipmaps.length;J++)tt(G.__webglFramebuffer[J],w,E,i.COLOR_ATTACHMENT0,Y,J);else tt(G.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,Y,0);m(E)&&f(Y),e.unbindTexture()}w.depthBuffer&&vt(w)}function Vt(w){const E=w.textures;for(let G=0,Q=E.length;G<Q;G++){const it=E[G];if(m(it)){const Z=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,W=n.get(it).__webglTexture;e.bindTexture(Z,W),f(Z),e.unbindTexture()}}}const Nt=[],C=[];function kt(w){if(w.samples>0){if(Ct(w)===!1){const E=w.textures,G=w.width,Q=w.height;let it=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(w),Y=E.length>1;if(Y)for(let J=0;J<E.length;J++)e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let J=0;J<E.length;J++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[J]);const At=n.get(E[J]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,G,Q,0,0,G,Q,it,i.NEAREST),l===!0&&(Nt.length=0,C.length=0,Nt.push(i.COLOR_ATTACHMENT0+J),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Nt.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let J=0;J<E.length;J++){e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,W.__webglColorRenderbuffer[J]);const At=n.get(E[J]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const E=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function yt(w){return Math.min(s.maxSamples,w.samples)}function Ct(w){const E=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(w){const E=o.render.frame;h.get(w)!==E&&(h.set(w,E),w.update())}function $t(w,E){const G=w.colorSpace,Q=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==jn&&G!==kn&&(te.getTransfer(G)===ae?(Q!==cn||it!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=y,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=St,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ct}function xg(i,t){function e(n,s=kn){let r;const o=te.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===cn)return i.RGBA;if(n===Uc)return i.LUMINANCE;if(n===Nc)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Sa)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===Fc)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===Aa)return i.RGBA_INTEGER;if(n===Js||n===Qs||n===tr||n===er)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Vo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===Yo||n===$o||n===qo||n===jo||n===Ko||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ta)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nr||n===sa||n===ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===oa||n===aa||n===la)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Mg extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Cn extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yg={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
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

}`;class bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:Sg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ag extends fi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=new bg,m=e.getContextAttributes();let f=null,x=null;const M=[],S=[],R=new wt;let A=null;const T=new Be;T.layers.enable(1),T.viewport=new ie;const P=new Be;P.layers.enable(2),P.viewport=new ie;const L=[T,P],_=new Mg;_.layers.enable(1),_.layers.enable(2);let y=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=M[j];return tt===void 0&&(tt=new so,M[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=M[j];return tt===void 0&&(tt=new so,M[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=M[j];return tt===void 0&&(tt=new so,M[j]=tt),tt.getHandSpace()};function F(j){const tt=S.indexOf(j.inputSource);if(tt===-1)return;const pt=M[tt];pt!==void 0&&(pt.update(j.inputSource,j.frame,c||o),pt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let j=0;j<M.length;j++){const tt=S[j];tt!==null&&(S[j]=null,M[j].disconnect(tt))}y=null,D=null,v.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new hn(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,pt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Yi:zi,pt=m.stencil?Xi:ui);const vt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new hn(d.textureWidth,d.textureHeight,{format:cn,type:Ln,depthTexture:new Zc(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(j){for(let tt=0;tt<j.removed.length;tt++){const pt=j.removed[tt],ut=S.indexOf(pt);ut>=0&&(S[ut]=null,M[ut].disconnect(pt))}for(let tt=0;tt<j.added.length;tt++){const pt=j.added[tt];let ut=S.indexOf(pt);if(ut===-1){for(let St=0;St<M.length;St++)if(St>=S.length){S.push(pt),ut=St;break}else if(S[St]===null){S[St]=pt,ut=St;break}if(ut===-1)break}const vt=M[ut];vt&&vt.connect(pt)}}const H=new I,k=new I;function B(j,tt,pt){H.setFromMatrixPosition(tt.matrixWorld),k.setFromMatrixPosition(pt.matrixWorld);const ut=H.distanceTo(k),vt=tt.projectionMatrix.elements,St=pt.projectionMatrix.elements,Bt=vt[14]/(vt[10]-1),Vt=vt[14]/(vt[10]+1),Nt=(vt[9]+1)/vt[5],C=(vt[9]-1)/vt[5],kt=(vt[8]-1)/vt[0],yt=(St[8]+1)/St[0],Ct=Bt*kt,Et=Bt*yt,$t=ut/(-kt+yt),It=$t*-kt;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(It),j.translateZ($t),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),vt[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const w=Bt+$t,E=Vt+$t,G=Ct-It,Q=Et+(ut-It),it=Nt*Vt/E*w,Z=C*Vt/E*w;j.projectionMatrix.makePerspective(G,Q,it,Z,w,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let tt=j.near,pt=j.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(pt=v.depthFar)),_.near=P.near=T.near=tt,_.far=P.far=T.far=pt,(y!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,D=_.far);const ut=j.parent,vt=_.cameras;rt(_,ut);for(let St=0;St<vt.length;St++)rt(vt[St],ut);vt.length===2?B(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),ot(j,_,ut)};function ot(j,tt,pt){pt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(pt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ca*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let at=null;function Pt(j,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ut=!1;pt.length!==_.cameras.length&&(_.cameras.length=0,ut=!0);for(let St=0;St<pt.length;St++){const Bt=pt[St];let Vt=null;if(p!==null)Vt=p.getViewport(Bt);else{const C=u.getViewSubImage(d,Bt);Vt=C.viewport,St===0&&(t.setRenderTargetTextures(x,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(x))}let Nt=L[St];Nt===void 0&&(Nt=new Be,Nt.layers.enable(St),Nt.viewport=new ie,L[St]=Nt),Nt.matrix.fromArray(Bt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Bt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),St===0&&(_.matrix.copy(Nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ut===!0&&_.cameras.push(Nt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const St=u.getDepthInformation(pt[0]);St&&St.isValid&&St.texture&&v.init(t,St,s.renderState)}}for(let pt=0;pt<M.length;pt++){const ut=S[pt],vt=M[pt];ut!==null&&vt!==void 0&&vt.update(ut,tt,c||o)}at&&at(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Ft=new Kc;Ft.setAnimationLoop(Pt),this.setAnimationLoop=function(j){at=j},this.dispose=function(){}}}const si=new _n,Tg=new se;function wg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$c(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),M=x.envMap,S=x.envMapRotation;M&&(m.envMap.value=M,si.copy(S),si.x*=-1,si.y*=-1,si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(si)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(x,R);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const M=u();x.__bindingPointIndex=M;const S=i.createBuffer(),R=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let L=0,_=P.length;L<_;L++){const y=P[L];if(p(y,A,L,R)===!0){const D=y.__offset,F=Array.isArray(y.value)?y.value:[y.value];let V=0;for(let K=0;K<F.length;K++){const H=F[K],k=v(H);typeof H=="number"||typeof H=="boolean"?(y.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,D+V,y.__data)):H.isMatrix3?(y.__data[0]=H.elements[0],y.__data[1]=H.elements[1],y.__data[2]=H.elements[2],y.__data[3]=0,y.__data[4]=H.elements[3],y.__data[5]=H.elements[4],y.__data[6]=H.elements[5],y.__data[7]=0,y.__data[8]=H.elements[6],y.__data[9]=H.elements[7],y.__data[10]=H.elements[8],y.__data[11]=0):(H.toArray(y.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,S,R){const A=x.value,T=M+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const P=R[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const M=x.uniforms;let S=0;const R=16;for(let T=0,P=M.length;T<P;T++){const L=Array.isArray(M[T])?M[T]:[M[T]];for(let _=0,y=L.length;_<y;_++){const D=L[_],F=Array.isArray(D.value)?D.value:[D.value];for(let V=0,K=F.length;V<K;V++){const H=F[V],k=v(H),B=S%R,rt=B%k.boundary,ot=B+rt;S+=rt,ot!==0&&R-ot<k.storage&&(S+=R-ot),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=k.storage}}}const A=S%R;return A>0&&(S+=R-A),x.__size=S,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class nh{constructor(t={}){const{canvas:e=gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Wn,this.toneMappingExposure=1;const M=this;let S=!1,R=0,A=0,T=null,P=-1,L=null;const _=new ie,y=new ie;let D=null;const F=new Gt(0);let V=0,K=e.width,H=e.height,k=1,B=null,rt=null;const ot=new ie(0,0,K,H),at=new ie(0,0,K,H);let Pt=!1;const Ft=new Ca;let j=!1,tt=!1;const pt=new se,ut=new se,vt=new I,St=new ie,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Nt(){return T===null?k:1}let C=n;function kt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${va}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),C===null){const O="webgl2";if(C=kt(O,b),C===null)throw kt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let yt,Ct,Et,$t,It,w,E,G,Q,it,Z,W,Y,J,At,nt,lt,dt,ht,ft,Ot,Ut,Zt,N;function _t(){yt=new Up(C),yt.init(),Ut=new xg(C,yt),Ct=new Cp(C,yt,t,Ut),Et=new gg(C),Ct.reverseDepthBuffer&&Et.buffers.depth.setReversed(!0),$t=new Op(C),It=new eg,w=new vg(C,yt,Et,It,Ct,Ut,$t),E=new Pp(M),G=new Ip(M),Q=new Gu(C),Zt=new Tp(C,Q),it=new Np(C,Q,$t,Zt),Z=new zp(C,it,Q,$t),ht=new Bp(C,Ct,w),nt=new Rp(It),W=new tg(M,E,G,yt,Ct,Zt,nt),Y=new wg(M,It),J=new ig,At=new cg(yt),dt=new Ap(M,E,G,Et,Z,d,l),lt=new pg(M,Z,Ct),N=new Cg(C,$t,Ct,Et),ft=new wp(C,yt,$t),Ot=new Fp(C,yt,$t),$t.programs=W.programs,M.capabilities=Ct,M.extensions=yt,M.properties=It,M.renderLists=J,M.shadowMap=lt,M.state=Et,M.info=$t}_t();const $=new Ag(M,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(K,H,!1))},this.getSize=function(b){return b.set(K,H)},this.setSize=function(b,O,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,H=O,e.width=Math.floor(b*k),e.height=Math.floor(O*k),X===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(K*k,H*k).floor()},this.setDrawingBufferSize=function(b,O,X){K=b,H=O,k=X,e.width=Math.floor(b*X),e.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(ot)},this.setViewport=function(b,O,X,q){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,O,X,q),Et.viewport(_.copy(ot).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,O,X,q){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,O,X,q),Et.scissor(y.copy(at).multiplyScalar(k).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(b){Et.setScissorTest(Pt=b)},this.setOpaqueSort=function(b){B=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor.apply(dt,arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha.apply(dt,arguments)},this.clear=function(b=!0,O=!0,X=!0){let q=0;if(b){let z=!1;if(T!==null){const ct=T.texture.format;z=ct===Aa||ct===ba||ct===Ea}if(z){const ct=T.texture.type,Mt=ct===Ln||ct===ui||ct===ds||ct===Xi||ct===Ma||ct===ya,bt=dt.getClearColor(),Tt=dt.getClearAlpha(),zt=bt.r,Ht=bt.g,Rt=bt.b;Mt?(p[0]=zt,p[1]=Ht,p[2]=Rt,p[3]=Tt,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=zt,g[1]=Ht,g[2]=Rt,g[3]=Tt,C.clearBufferiv(C.COLOR,0,g))}else q|=C.COLOR_BUFFER_BIT}O&&(q|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),J.dispose(),At.dispose(),It.dispose(),E.dispose(),G.dispose(),Z.dispose(),Zt.dispose(),N.dispose(),W.dispose(),$.dispose(),$.removeEventListener("sessionstart",Kn),$.removeEventListener("sessionend",ka),Zn.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=$t.autoReset,O=lt.enabled,X=lt.autoUpdate,q=lt.needsUpdate,z=lt.type;_t(),$t.autoReset=b,lt.enabled=O,lt.autoUpdate=X,lt.needsUpdate=q,lt.type=z}function xt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qt(b){const O=b.target;O.removeEventListener("dispose",qt),ce(O)}function ce(b){Ee(b),It.remove(b)}function Ee(b){const O=It.get(b).programs;O!==void 0&&(O.forEach(function(X){W.releaseProgram(X)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,q,z,ct){O===null&&(O=Bt);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,bt=Eh(b,O,X,q,z);Et.setMaterial(q,Mt);let Tt=X.index,zt=1;if(q.wireframe===!0){if(Tt=it.getWireframeAttribute(X),Tt===void 0)return;zt=2}const Ht=X.drawRange,Rt=X.attributes.position;let ee=Ht.start*zt,oe=(Ht.start+Ht.count)*zt;ct!==null&&(ee=Math.max(ee,ct.start*zt),oe=Math.min(oe,(ct.start+ct.count)*zt)),Tt!==null?(ee=Math.max(ee,0),oe=Math.min(oe,Tt.count)):Rt!=null&&(ee=Math.max(ee,0),oe=Math.min(oe,Rt.count));const he=oe-ee;if(he<0||he===1/0)return;Zt.setup(z,q,bt,X,Tt);let Ge,Jt=ft;if(Tt!==null&&(Ge=Q.get(Tt),Jt=Ot,Jt.setIndex(Ge)),z.isMesh)q.wireframe===!0?(Et.setLineWidth(q.wireframeLinewidth*Nt()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(z.isLine){let Lt=q.linewidth;Lt===void 0&&(Lt=1),Et.setLineWidth(Lt*Nt()),z.isLineSegments?Jt.setMode(C.LINES):z.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else z.isPoints?Jt.setMode(C.POINTS):z.isSprite&&Jt.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Jt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,be=z._multiDrawCounts,Qt=z._multiDrawCount,Qe=Tt?Q.get(Tt).bytesPerElement:1,gi=It.get(q).currentProgram.getUniforms();for(let We=0;We<Qt;We++)gi.setValue(C,"_gl_DrawID",We),Jt.render(Lt[We]/Qe,be[We])}else if(z.isInstancedMesh)Jt.renderInstances(ee,he,z.count);else if(X.isInstancedBufferGeometry){const Lt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,Lt);Jt.renderInstances(ee,he,be)}else Jt.render(ee,he)};function jt(b,O,X){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=ke,b.needsUpdate=!0,ys(b,O,X),b.side=$n,b.needsUpdate=!0,ys(b,O,X),b.side=Tn):ys(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),m=At.get(X),m.init(O),x.push(m),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),b!==X&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const q=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ct=z.material;if(ct)if(Array.isArray(ct))for(let Mt=0;Mt<ct.length;Mt++){const bt=ct[Mt];jt(bt,X,z),q.add(bt)}else jt(ct,X,z),q.add(ct)}),x.pop(),m=null,q},this.compileAsync=function(b,O,X=null){const q=this.compile(b,O,X);return new Promise(z=>{function ct(){if(q.forEach(function(Mt){It.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){z(b);return}setTimeout(ct,10)}yt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let we=null;function Ce(b){we&&we(b)}function Kn(){Zn.stop()}function ka(){Zn.start()}const Zn=new Kc;Zn.setAnimationLoop(Ce),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(b){we=b,$.setAnimationLoop(b),b===null?Zn.stop():Zn.start()},$.addEventListener("sessionstart",Kn),$.addEventListener("sessionend",ka),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,T),m=At.get(b,x.length),m.init(O),x.push(m),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ft.setFromProjectionMatrix(ut),tt=this.localClippingEnabled,j=nt.init(this.clippingPlanes,tt),v=J.get(b,f.length),v.init(),f.push(v),$.enabled===!0&&$.isPresenting===!0){const ct=M.xr.getDepthSensingMesh();ct!==null&&Ar(ct,O,-1/0,M.sortObjects)}Ar(b,O,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(B,rt),Vt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Vt&&dt.addToRenderList(v,b),this.info.render.frame++,j===!0&&nt.beginShadows();const X=m.state.shadowsArray;lt.render(X,b,O),j===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,z=v.transmissive;if(m.setupLights(),O.isArrayCamera){const ct=O.cameras;if(z.length>0)for(let Mt=0,bt=ct.length;Mt<bt;Mt++){const Tt=ct[Mt];Ga(q,z,b,Tt)}Vt&&dt.render(b);for(let Mt=0,bt=ct.length;Mt<bt;Mt++){const Tt=ct[Mt];Va(v,b,Tt,Tt.viewport)}}else z.length>0&&Ga(q,z,b,O),Vt&&dt.render(b),Va(v,b,O);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(M,b,O),Zt.resetDefaultState(),P=-1,L=null,x.pop(),x.length>0?(m=x[x.length-1],j===!0&&nt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ar(b,O,X,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ft.intersectsSprite(b)){q&&St.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const Mt=Z.update(b),bt=b.material;bt.visible&&v.push(b,Mt,bt,X,St.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ft.intersectsObject(b))){const Mt=Z.update(b),bt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),St.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),St.copy(Mt.boundingSphere.center)),St.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(bt)){const Tt=Mt.groups;for(let zt=0,Ht=Tt.length;zt<Ht;zt++){const Rt=Tt[zt],ee=bt[Rt.materialIndex];ee&&ee.visible&&v.push(b,Mt,ee,X,St.z,Rt)}}else bt.visible&&v.push(b,Mt,bt,X,St.z,null)}}const ct=b.children;for(let Mt=0,bt=ct.length;Mt<bt;Mt++)Ar(ct[Mt],O,X,q)}function Va(b,O,X,q){const z=b.opaque,ct=b.transmissive,Mt=b.transparent;m.setupLightsView(X),j===!0&&nt.setGlobalState(M.clippingPlanes,X),q&&Et.viewport(_.copy(q)),z.length>0&&Ms(z,O,X),ct.length>0&&Ms(ct,O,X),Mt.length>0&&Ms(Mt,O,X),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ga(b,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new hn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Pn:Ln,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ct=m.state.transmissionRenderTarget[q.id],Mt=q.viewport||_;ct.setSize(Mt.z,Mt.w);const bt=M.getRenderTarget();M.setRenderTarget(ct),M.getClearColor(F),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Vt&&dt.render(X);const Tt=M.toneMapping;M.toneMapping=Wn;const zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),j===!0&&nt.setGlobalState(M.clippingPlanes,q),Ms(b,X,q),w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Rt=0,ee=O.length;Rt<ee;Rt++){const oe=O[Rt],he=oe.object,Ge=oe.geometry,Jt=oe.material,Lt=oe.group;if(Jt.side===Tn&&he.layers.test(q.layers)){const be=Jt.side;Jt.side=ke,Jt.needsUpdate=!0,Wa(he,X,q,Ge,Jt,Lt),Jt.side=be,Jt.needsUpdate=!0,Ht=!0}}Ht===!0&&(w.updateMultisampleRenderTarget(ct),w.updateRenderTargetMipmap(ct))}M.setRenderTarget(bt),M.setClearColor(F,V),zt!==void 0&&(q.viewport=zt),M.toneMapping=Tt}function Ms(b,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ct=b.length;z<ct;z++){const Mt=b[z],bt=Mt.object,Tt=Mt.geometry,zt=q===null?Mt.material:q,Ht=Mt.group;bt.layers.test(X.layers)&&Wa(bt,O,X,Tt,zt,Ht)}}function Wa(b,O,X,q,z,ct){b.onBeforeRender(M,O,X,q,z,ct),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(M,O,X,q,b,ct),z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1?(z.side=ke,z.needsUpdate=!0,M.renderBufferDirect(X,O,q,z,b,ct),z.side=$n,z.needsUpdate=!0,M.renderBufferDirect(X,O,q,z,b,ct),z.side=Tn):M.renderBufferDirect(X,O,q,z,b,ct),b.onAfterRender(M,O,X,q,z,ct)}function ys(b,O,X){O.isScene!==!0&&(O=Bt);const q=It.get(b),z=m.state.lights,ct=m.state.shadowsArray,Mt=z.state.version,bt=W.getParameters(b,z.state,ct,O,X),Tt=W.getProgramCacheKey(bt);let zt=q.programs;q.environment=b.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(b.isMeshStandardMaterial?G:E).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",qt),zt=new Map,q.programs=zt);let Ht=zt.get(Tt);if(Ht!==void 0){if(q.currentProgram===Ht&&q.lightsStateVersion===Mt)return Ya(b,bt),Ht}else bt.uniforms=W.getUniforms(b),b.onBeforeCompile(bt,M),Ht=W.acquireProgram(bt,Tt),zt.set(Tt,Ht),q.uniforms=bt.uniforms;const Rt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=nt.uniform),Ya(b,bt),q.needsLights=Ah(b),q.lightsStateVersion=Mt,q.needsLights&&(Rt.ambientLightColor.value=z.state.ambient,Rt.lightProbe.value=z.state.probe,Rt.directionalLights.value=z.state.directional,Rt.directionalLightShadows.value=z.state.directionalShadow,Rt.spotLights.value=z.state.spot,Rt.spotLightShadows.value=z.state.spotShadow,Rt.rectAreaLights.value=z.state.rectArea,Rt.ltc_1.value=z.state.rectAreaLTC1,Rt.ltc_2.value=z.state.rectAreaLTC2,Rt.pointLights.value=z.state.point,Rt.pointLightShadows.value=z.state.pointShadow,Rt.hemisphereLights.value=z.state.hemi,Rt.directionalShadowMap.value=z.state.directionalShadowMap,Rt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Rt.spotShadowMap.value=z.state.spotShadowMap,Rt.spotLightMatrix.value=z.state.spotLightMatrix,Rt.spotLightMap.value=z.state.spotLightMap,Rt.pointShadowMap.value=z.state.pointShadowMap,Rt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ht,q.uniformsList=null,Ht}function Xa(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=rr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ya(b,O){const X=It.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Eh(b,O,X,q,z){O.isScene!==!0&&(O=Bt),w.resetTextureUnits();const ct=O.fog,Mt=q.isMeshStandardMaterial?O.environment:null,bt=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jn,Tt=(q.isMeshStandardMaterial?G:E).get(q.envMap||Mt),zt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Rt=!!X.morphAttributes.position,ee=!!X.morphAttributes.normal,oe=!!X.morphAttributes.color;let he=Wn;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(he=M.toneMapping);const Ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Jt=Ge!==void 0?Ge.length:0,Lt=It.get(q),be=m.state.lights;if(j===!0&&(tt===!0||b!==L)){const qe=b===L&&q.id===P;nt.setState(q,b,qe)}let Qt=!1;q.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==be.state.version||Lt.outputColorSpace!==bt||z.isBatchedMesh&&Lt.batching===!1||!z.isBatchedMesh&&Lt.batching===!0||z.isBatchedMesh&&Lt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Lt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Lt.instancing===!1||!z.isInstancedMesh&&Lt.instancing===!0||z.isSkinnedMesh&&Lt.skinning===!1||!z.isSkinnedMesh&&Lt.skinning===!0||z.isInstancedMesh&&Lt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Lt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Lt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Lt.instancingMorph===!1&&z.morphTexture!==null||Lt.envMap!==Tt||q.fog===!0&&Lt.fog!==ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==nt.numPlanes||Lt.numIntersection!==nt.numIntersection)||Lt.vertexAlphas!==zt||Lt.vertexTangents!==Ht||Lt.morphTargets!==Rt||Lt.morphNormals!==ee||Lt.morphColors!==oe||Lt.toneMapping!==he||Lt.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Lt.__version=q.version);let Qe=Lt.currentProgram;Qt===!0&&(Qe=ys(q,O,z));let gi=!1,We=!1,Tr=!1;const fe=Qe.getUniforms(),Dn=Lt.uniforms;if(Et.useProgram(Qe.program)&&(gi=!0,We=!0,Tr=!0),q.id!==P&&(P=q.id,We=!0),gi||L!==b){Ct.reverseDepthBuffer?(pt.copy(b.projectionMatrix),vu(pt),xu(pt),fe.setValue(C,"projectionMatrix",pt)):fe.setValue(C,"projectionMatrix",b.projectionMatrix),fe.setValue(C,"viewMatrix",b.matrixWorldInverse);const qe=fe.map.cameraPosition;qe!==void 0&&qe.setValue(C,vt.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&fe.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&fe.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,We=!0,Tr=!0)}if(z.isSkinnedMesh){fe.setOptional(C,z,"bindMatrix"),fe.setOptional(C,z,"bindMatrixInverse");const qe=z.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),fe.setValue(C,"boneTexture",qe.boneTexture,w))}z.isBatchedMesh&&(fe.setOptional(C,z,"batchingTexture"),fe.setValue(C,"batchingTexture",z._matricesTexture,w),fe.setOptional(C,z,"batchingIdTexture"),fe.setValue(C,"batchingIdTexture",z._indirectTexture,w),fe.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(C,"batchingColorTexture",z._colorsTexture,w));const wr=X.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&ht.update(z,X,Qe),(We||Lt.receiveShadow!==z.receiveShadow)&&(Lt.receiveShadow=z.receiveShadow,fe.setValue(C,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Dn.envMap.value=Tt,Dn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Dn.envMapIntensity.value=O.environmentIntensity),We&&(fe.setValue(C,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&bh(Dn,Tr),ct&&q.fog===!0&&Y.refreshFogUniforms(Dn,ct),Y.refreshMaterialUniforms(Dn,q,k,H,m.state.transmissionRenderTarget[b.id]),rr.upload(C,Xa(Lt),Dn,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(rr.upload(C,Xa(Lt),Dn,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&fe.setValue(C,"center",z.center),fe.setValue(C,"modelViewMatrix",z.modelViewMatrix),fe.setValue(C,"normalMatrix",z.normalMatrix),fe.setValue(C,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const qe=q.uniformsGroups;for(let Cr=0,Th=qe.length;Cr<Th;Cr++){const $a=qe[Cr];N.update($a,Qe),N.bind($a,Qe)}}return Qe}function bh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ah(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,X){It.get(b.texture).__webglTexture=O,It.get(b.depthTexture).__webglTexture=X;const q=It.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const X=It.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){T=b,R=O,A=X;let q=!0,z=null,ct=!1,Mt=!1;if(b){const Tt=It.get(b);if(Tt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Tt.__hasExternalTextures)w.rebindTextures(b,It.get(b.texture).__webglTexture,It.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Rt=b.depthTexture;if(Tt.__boundDepthTexture!==Rt){if(Rt!==null&&It.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Ht=It.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?z=Ht[O][X]:z=Ht[O],ct=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?z=It.get(b).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[X]:z=Ht,_.copy(b.viewport),y.copy(b.scissor),D=b.scissorTest}else _.copy(ot).multiplyScalar(k).floor(),y.copy(at).multiplyScalar(k).floor(),D=Pt;if(Et.bindFramebuffer(C.FRAMEBUFFER,z)&&q&&Et.drawBuffers(b,z),Et.viewport(_),Et.scissor(y),Et.setScissorTest(D),ct){const Tt=It.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,X)}else if(Mt){const Tt=It.get(b.texture),zt=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Tt.__webglTexture,X||0,zt)}P=-1},this.readRenderTargetPixels=function(b,O,X,q,z,ct,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Et.bindFramebuffer(C.FRAMEBUFFER,bt);try{const Tt=b.texture,zt=Tt.format,Ht=Tt.type;if(!Ct.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&X>=0&&X<=b.height-z&&C.readPixels(O,X,q,z,Ut.convert(zt),Ut.convert(Ht),ct)}finally{const Tt=T!==null?It.get(T).__webglFramebuffer:null;Et.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,q,z,ct,Mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=It.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Tt=b.texture,zt=Tt.format,Ht=Tt.type;if(!Ct.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-q&&X>=0&&X<=b.height-z){Et.bindFramebuffer(C.FRAMEBUFFER,bt);const Rt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Rt),C.bufferData(C.PIXEL_PACK_BUFFER,ct.byteLength,C.STREAM_READ),C.readPixels(O,X,q,z,Ut.convert(zt),Ut.convert(Ht),0);const ee=T!==null?It.get(T).__webglFramebuffer:null;Et.bindFramebuffer(C.FRAMEBUFFER,ee);const oe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await _u(C,oe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Rt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ct),C.deleteBuffer(Rt),C.deleteSync(oe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,X=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(b.image.width*q),ct=Math.floor(b.image.height*q),Mt=O!==null?O.x:0,bt=O!==null?O.y:0;w.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Mt,bt,z,ct),Et.unbindTexture()},this.copyTextureToTexture=function(b,O,X=null,q=null,z=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,X=null);let ct,Mt,bt,Tt,zt,Ht;X!==null?(ct=X.max.x-X.min.x,Mt=X.max.y-X.min.y,bt=X.min.x,Tt=X.min.y):(ct=b.image.width,Mt=b.image.height,bt=0,Tt=0),q!==null?(zt=q.x,Ht=q.y):(zt=0,Ht=0);const Rt=Ut.convert(O.format),ee=Ut.convert(O.type);w.setTexture2D(O,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const oe=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ge=C.getParameter(C.UNPACK_SKIP_PIXELS),Jt=C.getParameter(C.UNPACK_SKIP_ROWS),Lt=C.getParameter(C.UNPACK_SKIP_IMAGES),be=b.isCompressedTexture?b.mipmaps[z]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,be.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,be.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Tt),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,zt,Ht,ct,Mt,Rt,ee,be.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,zt,Ht,be.width,be.height,Rt,be.data):C.texSubImage2D(C.TEXTURE_2D,z,zt,Ht,ct,Mt,Rt,ee,be),C.pixelStorei(C.UNPACK_ROW_LENGTH,oe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Lt),z===0&&O.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(b,O,X=null,q=null,z=0){b.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0);let ct,Mt,bt,Tt,zt,Ht,Rt,ee,oe;const he=b.isCompressedTexture?b.mipmaps[z]:b.image;X!==null?(ct=X.max.x-X.min.x,Mt=X.max.y-X.min.y,bt=X.max.z-X.min.z,Tt=X.min.x,zt=X.min.y,Ht=X.min.z):(ct=he.width,Mt=he.height,bt=he.depth,Tt=0,zt=0,Ht=0),q!==null?(Rt=q.x,ee=q.y,oe=q.z):(Rt=0,ee=0,oe=0);const Ge=Ut.convert(O.format),Jt=Ut.convert(O.type);let Lt;if(O.isData3DTexture)w.setTexture3D(O,0),Lt=C.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)w.setTexture2DArray(O,0),Lt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const be=C.getParameter(C.UNPACK_ROW_LENGTH),Qt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qe=C.getParameter(C.UNPACK_SKIP_PIXELS),gi=C.getParameter(C.UNPACK_SKIP_ROWS),We=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,he.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ht),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Lt,z,Rt,ee,oe,ct,Mt,bt,Ge,Jt,he.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Lt,z,Rt,ee,oe,ct,Mt,bt,Ge,he.data):C.texSubImage3D(Lt,z,Rt,ee,oe,ct,Mt,bt,Ge,Jt,he),C.pixelStorei(C.UNPACK_ROW_LENGTH,be),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,gi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We),z===0&&O.generateMipmaps&&C.generateMipmap(Lt),Et.unbindTexture()},this.initRenderTarget=function(b){It.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Et.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Et.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ta?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Mr?"display-p3":"srgb"}}class La{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new La(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ih extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rg extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ze,h=ze,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Li=new se,Vl=new se,Gs=[],Gl=new pi,Pg=new se,rs=new re,os=new ji;class ua extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),Gl.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(Gl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),os.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),t.ray.intersectsSphere(os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),Vl.multiplyMatrices(n,Li),rs.matrixWorld=Vl,rs.raycast(t,Gs);for(let o=0,a=Gs.length;o<a;o++){const l=Gs[o];l.instanceId=r,l.object=this,e.push(l)}Gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rg(new Float32Array(s*this.count),s,this.count,Sa,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sh extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pr=new I,mr=new I,Wl=new se,as=new wa,Ws=new ji,ro=new I,Xl=new I;class Lg extends Ae{constructor(t=new Ve,e=new sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)pr.fromBufferAttribute(e,s-1),mr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=pr.distanceTo(mr);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,t.ray.intersectsSphere(Ws)===!1)return;Wl.copy(s).invert(),as.copy(t.ray).applyMatrix4(Wl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=h.getX(v),x=h.getX(v+1),M=Xs(this,t,as,l,f,x);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=Xs(this,t,as,l,v,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=Xs(this,t,as,l,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Xs(this,t,as,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(pr.fromBufferAttribute(o,s),mr.fromBufferAttribute(o,r),e.distanceSqToSegment(pr,mr,ro,Xl)>n)return;ro.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ro);if(!(l<t.near||l>t.far))return{distance:l,point:Xl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Yl=new I,$l=new I;class Dg extends Lg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yl.fromBufferAttribute(e,s),$l.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yl.distanceTo($l);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qn extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function x(){const S=new I,R=new I;let A=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const L=[],_=P/r,y=_*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,V=F*l+a,K=Math.sin(V),H=Math.cos(V);R.x=y*K,R.y=-_*n+m,R.z=y*H,u.push(R.x,R.y,R.z),S.set(K,T,H).normalize(),d.push(S.x,S.y,S.z),p.push(F,1-_),L.push(g++)}v.push(L)}for(let P=0;P<s;P++)for(let L=0;L<r;L++){const _=v[L][P],y=v[L+1][P],D=v[L+1][P+1],F=v[L][P+1];t>0&&(h.push(_,y,F),A+=3),e>0&&(h.push(y,D,F),A+=3)}c.addGroup(f,A,0),f+=A}function M(S){const R=g,A=new wt,T=new I;let P=0;const L=S===!0?t:e,_=S===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const y=g;for(let D=0;D<=s;D++){const V=D/s*l+a,K=Math.cos(V),H=Math.sin(V);T.x=L*H,T.y=m*_,T.z=L*K,u.push(T.x,T.y,T.z),d.push(0,_,0),A.x=K*.5+.5,A.y=H*.5*_+.5,p.push(A.x,A.y),g++}for(let D=0;D<s;D++){const F=R+D,V=y+D;S===!0?h.push(V,V+1,F):h.push(V+1,V,F),P+=3}c.addGroup(f,P,S===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Da extends qn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Da(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Er extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new I,S=new I,R=new I;for(let A=0;A<e.length;A+=3)p(e[A+0],M),p(e[A+1],S),p(e[A+2],R),l(M,S,R,x)}function l(x,M,S,R){const A=R+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const L=x.clone().lerp(S,P/A),_=M.clone().lerp(S,P/A),y=A-P;for(let D=0;D<=y;D++)D===0&&P===A?T[P][D]=L:T[P][D]=L.clone().lerp(_,D/y)}for(let P=0;P<A;P++)for(let L=0;L<2*(A-P)-1;L++){const _=Math.floor(L/2);L%2===0?(d(T[P][_+1]),d(T[P+1][_]),d(T[P][_])):(d(T[P][_+1]),d(T[P+1][_+1]),d(T[P+1][_]))}}function c(x){const M=new I;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(x),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function h(){const x=new I;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const S=m(x)/2/Math.PI+.5,R=f(x)/Math.PI+.5;o.push(S,1-R)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const M=o[x+0],S=o[x+2],R=o[x+4],A=Math.max(M,S,R),T=Math.min(M,S,R);A>.9&&T<.1&&(M<.2&&(o[x+0]+=1),S<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,M){const S=x*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function g(){const x=new I,M=new I,S=new I,R=new I,A=new wt,T=new wt,P=new wt;for(let L=0,_=0;L<r.length;L+=9,_+=6){x.set(r[L+0],r[L+1],r[L+2]),M.set(r[L+3],r[L+4],r[L+5]),S.set(r[L+6],r[L+7],r[L+8]),A.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),R.copy(x).add(M).add(S).divideScalar(3);const y=m(R);v(A,_+0,x,y),v(T,_+2,M,y),v(P,_+4,S,y)}}function v(x,M,S,R){R<0&&x.x===1&&(o[M]=x.x-1),S.x===0&&S.z===0&&(o[M]=R/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.vertices,t.indices,t.radius,t.details)}}class gr extends Er{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gr(t.radius,t.detail)}}class Ia extends Er{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ia(t.radius,t.detail)}}class _r extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(v,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ig extends mi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Yn extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ua extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const oo=new se,ql=new I,jl=new I;class rh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(ql),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kl=new se,ls=new I,ao=new I;class Ug extends rh{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),ao.copy(n.position),ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ao),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl)}}class oh extends Ua{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ng extends rh{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class da extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Ng}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ah extends Ua{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zl(){return performance.now()}class Jl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Og extends Dg{constructor(t=10,e=10,n=4473924,s=8947848){n=new Gt(n),s=new Gt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=d===r?n:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Ve;h.setAttribute("position",new de(l,3)),h.setAttribute("color",new de(c,3));const u=new sh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bg extends fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);const Ql={type:"change"},Na={type:"start"},lh={type:"end"},Ys=new wa,tc=new Hn,zg=Math.cos(70*mu.DEG2RAD),ge=new I,Fe=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lo=1e-6;class Hg extends Bg{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new di,this._lastTargetPosition=new I,this._quat=new di().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jl,this._sphericalDelta=new Jl,this._scale=1,this._panOffset=new I,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new I,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vg.bind(this),this._onPointerDown=kg.bind(this),this._onPointerUp=Gg.bind(this),this._onContextMenu=Kg.bind(this),this._onMouseWheel=Yg.bind(this),this._onKeyDown=$g.bind(this),this._onTouchStart=qg.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=Wg.bind(this),this._onMouseMove=Xg.bind(this),this._interceptControlDown=Zg.bind(this),this._interceptControlUp=Jg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ql),this.update(),this.state=ne.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Fe:n>Math.PI&&(n-=Fe),s<-Math.PI?s+=Fe:s>Math.PI&&(s-=Fe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ge.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ys.origin.copy(this.object.position),Ys.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ys.direction))<zg?this.object.lookAt(this.target):(tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ys.intersectPlane(tc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>lo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lo||this._lastTargetPosition.distanceToSquared(this.target)>lo?(this.dispatchEvent(Ql),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fe/60*this.autoRotateSpeed*t:Fe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Fe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Fe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Vg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lh),this.state=ne.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Wg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ne.DOLLY;break;case Oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}break;case Oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Na)}function Xg(i){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Yg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(i.preventDefault(),this.dispatchEvent(Na),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lh))}function $g(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function qg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ne.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ne.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(Na)}function jg(i){switch(this._trackPointer(i),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ne.NONE}}function Kg(i){this.enabled!==!1&&i.preventDefault()}function Zg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ch={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qg=new Ra(-1,1,1,-1,0,1);class t_ extends Ve{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const e_=new t_;class hh{constructor(t){this._mesh=new re(e_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Qg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class n_ extends vs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fr.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new hh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ec extends vs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class i_ extends vs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class s_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new wt);this._width=n.width,this._height=n.height,e=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n_(ch),this.copyPass.material.blending=Rn,this.clock=new Fg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ec!==void 0&&(o instanceof ec?n=!0:o instanceof i_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class r_ extends vs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Gt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const o_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qi extends vs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Gt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new hn(r,o,{type:Pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new hn(r,o,{type:Pn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=o_;this.highPassUniforms=fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new wt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ch;this.copyUniforms=fr.clone(h.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Eo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Gt,this.oldClearAlpha=1,this.basic=new yr,this.fsQuad=new hh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new wt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qi.BlurDirectionX=new wt(1,0);qi.BlurDirectionY=new wt(0,1);function a_(i){const t=new ih;t.background=new Gt(197898),t.fog=new La(197898,.018);const e=new Be(55,window.innerWidth/window.innerHeight,.1,200);e.position.set(0,6,26),e.lookAt(0,0,0);const n=new nh({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Ac,n.toneMapping=wc,n.toneMappingExposure=1.1,n.outputColorSpace=rn,i.appendChild(n.domElement);const s=new Og(60,60,1732520,797501);s.position.y=-13,s.material.opacity=.35,s.material.transparent=!0,t.add(s);const r=new re(new _s(120,120),new Ig({opacity:.45}));r.rotation.x=-Math.PI/2,r.position.y=-13,r.receiveShadow=!0,t.add(r);const o=new ah(1849938,1.2);t.add(o);const a=new oh(4973567,2.2,60);a.position.set(0,10,10),t.add(a);const l=new da(16777215,1.4);l.position.set(14,22,10),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-22,l.shadow.camera.right=22,l.shadow.camera.top=22,l.shadow.camera.bottom=-22,l.shadow.camera.near=1,l.shadow.camera.far=60,l.shadow.bias=-.0015,t.add(l);const c=new Hg(e,n.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.minDistance=6,c.maxDistance=80,c.target.set(0,0,0);const h=new s_(n);h.addPass(new r_(t,e));const u=new qi(new wt(window.innerWidth,window.innerHeight),.55,.4,.35);return h.addPass(u),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),h.setSize(window.innerWidth,window.innerHeight)}),{scene:t,camera:e,renderer:n,composer:h,controls:c}}const Zi=5.5,Vn=[4,2,4],l_=2.5,U=Zi;function Le(i,t){return i+Math.random()*(t-i)}function Dt(i,t){const e=t.reduce((a,l)=>a+l,0),n=t.map(a=>a/e*i),s=n.map(a=>Math.floor(a)),r=i-s.reduce((a,l)=>a+l,0),o=n.map((a,l)=>({i:l,frac:a-s[l]})).sort((a,l)=>l.frac-a.frac);for(let a=0;a<r;a++)s[o[a%o.length].i]++;return s}function Se(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=r%6,a=Le(-1,1),l=Le(-1,1);let c=0,h=0,u=0;switch(o){case 0:c=i,h=a*t,u=l*e;break;case 1:c=-i,h=a*t,u=l*e;break;case 2:h=t,c=a*i,u=l*e;break;case 3:h=-t,c=a*i,u=l*e;break;case 4:u=e,c=a*i,h=l*t;break;default:u=-e,c=a*i,h=l*t;break}s[r*3]=c,s[r*3+1]=h,s[r*3+2]=u}return s}function Yt(i,t){const e=new Float32Array(t*3),n=Math.PI*(3-Math.sqrt(5));for(let s=0;s<t;s++){const r=t>1?1-s/(t-1)*2:0,o=Math.sqrt(Math.max(0,1-r*r)),a=n*s;e[s*3]=Math.cos(a)*o*i,e[s*3+1]=r*i,e[s*3+2]=Math.sin(a)*o*i}return e}function c_(i,t,e,n){const s=new Float32Array(t*3),r=Math.PI*(3-Math.sqrt(5));for(let o=0;o<t;o++){const a=t>1?o/(t-1):0,l=n-a*(n-e),c=Math.sqrt(Math.max(0,1-l*l)),h=r*o;s[o*3]=Math.cos(h)*c*i,s[o*3+1]=l*i,s[o*3+2]=Math.sin(h)*c*i}return s}function zn(i,t,e,n,s,r,o){const a=Math.sqrt(e*e+n*n+s*s)||1,l=e/a,c=n/a,h=s/a;for(let u=0;u<t;u++){const d=i[u*3],p=i[u*3+1],g=i[u*3+2],v=Math.sqrt(d*d+p*p+g*g)||1;(d*l+p*c+g*h)/v<r||(i[u*3]=d*o,i[u*3+1]=p*o,i[u*3+2]=g*o)}}function co(i,t,e){const n=new Float32Array(e*3);for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2;if(Math.random()<.15){const o=i*Math.sqrt(Math.random()),a=Math.random()<.5?t:-t;n[s*3]=Math.cos(r)*o,n[s*3+1]=a,n[s*3+2]=Math.sin(r)*o}else n[s*3]=Math.cos(r)*i,n[s*3+1]=Le(-t,t),n[s*3+2]=Math.sin(r)*i}return n}function le(i,t,e,n){const s=new Float32Array(n*3);for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2;if(Math.random()<.15){const a=Math.random()<.5,c=(a?i:t)*Math.sqrt(Math.random()),h=a?e:-e;s[r*3]=Math.cos(o)*c,s[r*3+1]=h,s[r*3+2]=Math.sin(o)*c}else{const a=Le(-e,e),l=(a+e)/(2*e||1),c=t+(i-t)*l;s[r*3]=Math.cos(o)*c,s[r*3+1]=a,s[r*3+2]=Math.sin(o)*c}}return s}function Oe(i,t,e,n){const s=e/2,[r,o,a,l]=Dt(n,[12,38,38,12]),c=st(Yt(t,r),0,-e,0),h=st(le(i,t,s,o),0,-s,0),u=st(le(t,i,s,a),0,s,0),d=st(Yt(t,l),0,e,0);return xe([c,h,u,d])}function pn(i,t,e){const n=new Float32Array(t*3);if(i.length<2||t<=0)return n;const s=i.length-1,r=[];for(let l=0;l<s;l++){const[c,h,u]=i[l],[d,p,g]=i[l+1];r.push(Math.hypot(d-c,p-h,g-u)||1e-6)}const o=Dt(t,r);let a=0;for(let l=0;l<s;l++){const[c,h,u]=i[l],[d,p,g]=i[l+1],v=o[l];for(let m=0;m<v;m++){const f=Math.random();n[a*3]=c+(d-c)*f+Le(-e,e),n[a*3+1]=h+(p-h)*f+Le(-e,e),n[a*3+2]=u+(g-u)*f+Le(-e,e),a++}}return n}function ln(i,t,e){const n=new Float32Array(i.length);n.set(i);for(let s=t;s<n.length;s+=3)n[s]*=e;return n}function st(i,t,e,n){const s=new Float32Array(i.length);for(let r=0;r<i.length;r+=3)s[r]=i[r]+t,s[r+1]=i[r+1]+e,s[r+2]=i[r+2]+n;return s}function vr(i){const t=new Float32Array(i.length);for(let e=0;e<i.length;e+=3)t[e]=i[e+1],t[e+1]=-i[e],t[e+2]=i[e+2];return t}function xe(i){const t=i.reduce((s,r)=>s+r.length,0),e=new Float32Array(t);let n=0;for(const s of i)e.set(s,n),n+=s.length;return e}function xs(){const i=U*.5,t=U*.24,e=U*.16,n=e+i*.9,s=i*.78;return{headR:i,neckR:t,neckHalfH:e,headCenterY:n,skullR:s}}function h_(i){const{headR:t,neckR:e,neckHalfH:n,headCenterY:s}=xs(),r=t*.62,o=s-t*.55,a=t*.22,l=s-t*.05,c=t*.14,h=s-t*.05,[u,d,p,g,v]=Dt(i,[44,22,10,8,16]),[m,f]=Dt(p,[1,1]),x=st(ln(Yt(t,u),2,.86),0,s,0),M=st(ln(Yt(r,d),2,.8),0,o,t*.1),S=[st(ln(Yt(a,m),0,.35),-t*.92,l,0),st(ln(Yt(a,f),0,.35),t*.92,l,0)],R=st(ln(Yt(c,g),1,.7),0,h,t*.88),A=st(le(e,e*1.15,n,v),0,0,0);return xe([x,M,...S,R,A])}function u_(i){const{headR:t,headCenterY:e}=xs(),[n,s]=Dt(i,[88,12]),[r,o]=Dt(s,[1,1]),a=st(ln(c_(t*1.04,n,.34,1),2,.88),0,e,0),l=e+t*.18,c=t*.84,h=t*.16,u=[pn([[-t*.42,l,c],[-t*.42+h,l+t*.02,c]],r,t*.015),pn([[t*.42-h,l+t*.02,c],[t*.42,l,c]],o,t*.015)];return xe([a,...u])}function d_(i){const{headR:t,headCenterY:e}=xs(),n=t*.1,s=e+t*.08,r=t*.36,o=t*.82,[a,l]=Dt(i,[1,1]);return xe([st(Yt(n,a),-r,s,o),st(Yt(n,l),r,s,o)])}function f_(i){const{headR:t,headCenterY:e}=xs(),n=e-t*.42,s=t*.85,r=t*.22;return pn([[-r,n,s],[0,n-t*.02,s*1.01],[r,n,s]],i,t*.03)}const fa=[{name:"piel",generator:h_,weight:.55,color:14394745},{name:"cabello",generator:u_,weight:.28,color:2824978},{name:"ojos",generator:d_,weight:.07,color:4139546},{name:"labios",generator:f_,weight:.1,color:11620938}];function p_(i){const t=Dt(i,fa.map(e=>e.weight));return xe(fa.map((e,n)=>e.generator(t[n])))}function m_(i){const t=U*.62,e=U*.42,n=U*.55,s=U*.48,r=U*.26,o=U*.34,a=U*.14,l=0,c=l-r,h=l+n,u=h+n,d=t*.95,[p,g,v]=Dt(i,[55,30,15]),[m,f]=Dt(v,[1,1]),x=st(le(t,e,n,p),0,h,0),M=st(Se(s,r,o,g),0,c,0),S=[st(Yt(a,m),-d,u,0),st(Yt(a,f),d,u,0)];return xe([x,M,...S])}function g_(i){const t=U*.22,e=U*.26,n=U*.19,s=U*.6,r=U*.16,o=U*.18,a=U*.12,l=U*.55,c=U*.15,h=U*.2,u=U*.06,d=U*.035,p=U*.15,g=0,v=g-s,m=g-s*2,f=m-l,x=m-l*2,M=x-h,R=x-h*2-p,[A,T,P,L,_,y]=Dt(i,[6,24,4,20,16,30]),D=Dt(y,[1,1,1,1,1]),F=st(Yt(t,A),0,g,0),V=st(le(e,n,s,T),0,v,0),K=st(Yt(r,P),0,m,0),H=st(le(o,a,l,L),0,f,0),k=st(Se(c,h,u,_),0,M,0),rt=[-2,-1,0,1,2].map((ot,at)=>st(le(d,d*1.3,p,D[at]),ot*c*.4,R,0));return vr(xe([F,V,K,H,k,...rt]))}function __(i){const t=U*.24,e=U*.3,n=U*.2,s=U*.65,r=U*.18,o=U*.2,a=U*.13,l=U*.62,c=U*.16,h=U*.09,u=U*.36,d=U*.04,p=U*.09,g=0,v=g-s,m=g-s*2,f=m-l,M=m-l*2-h,[S,R,A,T,P,L]=Dt(i,[6,26,4,22,22,20]),_=Dt(L,[1,1,1,1,1]),y=st(Yt(t,S),0,g,0),D=st(le(e,n,s,R),0,v,0),F=st(Yt(r,A),0,m,0),V=st(le(o,a,l,T),0,f,0),K=st(Se(c,h,u,P),0,M,u*.5),k=[-.6,-.3,0,.3,.6].map((B,rt)=>st(Se(d,d,p,_[rt]),B*c,M,u+p));return xe([y,D,F,V,K,...k])}function v_(i){const t=U*.22,e=U*.18,n=U*.42,s=U*.5,r=U*.16,o=U*.07,a=U*.05,l=[.55,.72,.78,.7,.5],c=[-.85,-.45,0,.45,.85],h=0,u=h-e-s,d=u-s,[p,g,v]=Dt(i,[10,35,55]),m=Dt(v,[.9,1,1.1,1,.8]),f=st(le(t,t*1.1,e,p),0,h,0),x=st(Se(n,s,r,g),0,u,0),M=c.map((S,R)=>{const A=U*l[R]*.5;return st(le(o,a,A,m[R]),S*n,d-A,0)});return xe([f,x,...M])}function x_(i){const t=U*.24,e=U*.2,n=U*.34,s=U*.22,r=U*.75,o=U*.09,a=[.75,1,.95,.85,.7],l=[-.65,-.3,0,.3,.65],c=0,h=c-e-s,u=r*.3+r,[d,p,g]=Dt(i,[10,55,35]),v=Dt(g,[1,1,1,1,1]),m=st(le(t,t*1.1,e,d),0,c,0),f=st(Se(n,s,r,p),0,h,r*.3),x=l.map((M,S)=>{const R=U*.16*a[S];return st(Se(o,o,R,v[S]),M*n,h,u+R)});return xe([m,f,...x])}function M_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=e%6,s=Le(-U,U),r=Le(-U,U);let o=0,a=0,l=0;switch(n){case 0:o=U,a=s,l=r;break;case 1:o=-U,a=s,l=r;break;case 2:a=U,o=s,l=r;break;case 3:a=-U,o=s,l=r;break;case 4:l=U,o=s,a=r;break;default:l=-U,o=s,a=r;break}t[e*3]=o,t[e*3+1]=a,t[e*3+2]=l}return t}function y_(i){const t=new Float32Array(i*3),e=Math.PI*(3-Math.sqrt(5));for(let n=0;n<i;n++){const s=i>1?1-n/(i-1)*2:0,r=Math.sqrt(Math.max(0,1-s*s)),o=e*n;t[n*3]=Math.cos(o)*r*U,t[n*3+1]=s*U,t[n*3+2]=Math.sin(o)*r*U}return t}function S_(i){const t=new Float32Array(i*3),e=[-U,-U,-U],n=[U,-U,-U],s=[U,-U,U],r=[-U,-U,U],o=[0,U,0],a=[[e,n,o],[n,s,o],[s,r,o],[r,e,o]],l=Math.round(i*.3);for(let c=0;c<i;c++){let h,u,d;if(c<l)h=Le(-U,U),u=-U,d=Le(-U,U);else{const[p,g,v]=a[(c-l)%4];let m=Math.random(),f=Math.random();m+f>1&&(m=1-m,f=1-f),h=p[0]+m*(g[0]-p[0])+f*(v[0]-p[0]),u=p[1]+m*(g[1]-p[1])+f*(v[1]-p[1]),d=p[2]+m*(g[2]-p[2])+f*(v[2]-p[2])}t[c*3]=h,t[c*3+1]=u,t[c*3+2]=d}return t}function E_(i){const t=new Float32Array(i*3),e=5,n=U,s=U*.42,r=Math.PI/e;for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,l=a%r/r,u=(Math.floor(a/r)%2===0?n+(s-n)*l:s+(n-s)*l)*Math.sqrt(Math.random());t[o*3]=Math.cos(a)*u,t[o*3+1]=Math.sin(a)*u,t[o*3+2]=Le(-U*.12,U*.12)}return t}function b_(i){const t=new Float32Array(i*3),e=U*.75,n=U*.28;for(let s=0;s<i;s++){const r=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;t[s*3]=(e+n*Math.cos(o))*Math.cos(r),t[s*3+1]=n*Math.sin(o),t[s*3+2]=(e+n*Math.cos(o))*Math.sin(r)}return t}function A_(i){const t=new Float32Array(i*3);for(let e=0;e<i;e++){const n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random()),r=16*Math.pow(Math.sin(n),3),o=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);t[e*3]=r/16*U*s,t[e*3+1]=o/16*U*s,t[e*3+2]=Le(-U*.15,U*.15)}return t}function T_(i){const t=new Float32Array(i*3),e=U,n=U*.22;for(let s=0;s<i;s++){let r=0,o=0;for(let a=0;a<20&&(r=Le(-e,e),o=Le(-e,e),!(Math.abs(r)<=n||Math.abs(o)<=n));a++);t[s*3]=r,t[s*3+1]=o,t[s*3+2]=Le(-U*.15,U*.15)}return t}function w_(i){const t=U*.62,e=U*.14,n=U*.42,s=t*.5,r=U*.3,o=U*.14,a=.35,l=U*.34,c=U*.16,h=U*.32,u=U*.16,d=U*.1,p=U*.36,g=U*.05,v=U*.08,m=U*.4,f=U*.05,x=U*.018,M=U*.34,S=U*.018,R=U*.1,A=U*.045,T=U*.03,P=U*.04,L=U*.055,_=U*.22,y=U*.1,D=t,F=-t,[V,K,H,k,B,rt,ot,at,Pt,Ft,j]=Dt(i,[22,10,14,6,4,5,2,2,2,20,13]),[tt,pt]=Dt(ot,[1,1]),[ut,vt]=Dt(at,[1,1]),[St,Bt]=Dt(Pt,[1,1]),Vt=Dt(Ft,[1,1,1,1]),Nt=Se(t,e,n,V),C=st(vr(ln(le(o,r,s,K),0,a)),s,e+r*a*.6,0),kt=st(Se(l,c,h,H),-t*.12,e+c,0),yt=st(Se(u,d,p,k),F+u*.6,e+d,0),Ct=st(Se(g,v,m,B),D+g*.7,-e*.3,0),Et=e+d*2+R*2+x,$t=st(Se(f,x,M,rt),F+u*.4,Et,0),It=e+d*2,w=[st(co(S,R,tt),F+u*.4,It+R,-M*.7),st(co(S,R,pt),F+u*.4,It+R,M*.7)],E=[st(Se(A,T,P,ut),-t*.05,e+c*1.6,-h-P),st(Se(A,T,P,vt),-t*.05,e+c*1.6,h+P)],G=[st(Yt(L,St),D*.96,e*.4,-n*.7),st(Yt(L,Bt),D*.96,e*.4,n*.7)],Q=[[-t*.55,-n*.95],[t*.55,-n*.95],[-t*.55,n*.95],[t*.55,n*.95]],it=Q.map(([J,At],nt)=>st(vr(co(_,y,Vt[nt])),J,-e,At)),Z=[{pts:[[0,e+r*a,0],[D,e+o*a,0]],weight:s*2},{pts:[[F*.9,e*.3,-n*.98],[D*.9,e*.55,-n*.98]],weight:t*1.8},{pts:[[F*.9,e*.3,n*.98],[D*.9,e*.55,n*.98]],weight:t*1.8},...Q.map(([J,At])=>({pts:[[J-_*1.3,e*.2,At],[J,e*.75,At],[J+_*1.3,e*.2,At]],weight:_*2.6}))],W=Dt(j,Z.map(J=>J.weight)),Y=Z.map((J,At)=>pn(J.pts,W[At],U*.02));return xe([Nt,C,kt,yt,Ct,$t,...w,...E,...G,...it,...Y])}function C_(i){return Se(U*.42,U*.85,U*.09,i)}function uh(){const i=U*.2,t=U*.09,e=U*.045,n=U*.34,s=U*.22,r=U*.28,o=U*.26,a=U*.14,l=U*.18,c=U*.07,h=U*.085,u=U*.06,d=U*.22,p=U*.06,g=U*.045,v=U*.2,m=U*.06,f=U*.14,x=U*.1,M=U*.28,S=U*.1,R=U*.07,A=U*.26,T=U*.06,P=U*.04,L=U*.14,_=0,y=_-a,D=_+r,F=D+r,V=F+e,K=V+e+i*.9,H=F,k=n*.95,B=k,rt=H-d,ot=H-d*2,at=ot-v,Pt=ot-v*2,Ft=Pt-m*.8,j=o*.5,tt=_-a*2,pt=tt-M,ut=tt-M*2,vt=ut-A,St=ut-A*2,Bt=St-P,Vt=n*.85;return{headR:i,neckR:t,neckHalfH:e,chestTopR:n,chestBottomR:s,chestHalfH:r,pelvisHx:o,pelvisHy:a,pelvisHz:l,shoulderR:c,upperArmTopR:h,upperArmBottomR:u,upperArmHalfH:d,forearmTopR:p,forearmBottomR:g,forearmHalfH:v,handR:m,thighTopR:f,thighBottomR:x,thighHalfH:M,calfTopR:S,calfBottomR:R,calfHalfH:A,footHx:T,footHy:P,footHz:L,waistY:_,pelvisCenterY:y,chestCenterY:D,chestTopY:F,neckCenterY:V,headCenterY:K,shoulderY:H,shoulderX:k,armX:B,upperArmCenterY:rt,elbowY:ot,forearmCenterY:at,wristY:Pt,handCenterY:Ft,hipX:j,hipY:tt,thighCenterY:pt,kneeY:ut,calfCenterY:vt,ankleY:St,footCenterY:Bt,chestFrontZ:Vt}}function R_(i){const{headR:t,neckR:e,neckHalfH:n,chestTopR:s,chestBottomR:r,chestHalfH:o,pelvisHx:a,pelvisHy:l,pelvisHz:c,shoulderR:h,upperArmTopR:u,upperArmBottomR:d,upperArmHalfH:p,forearmTopR:g,forearmBottomR:v,forearmHalfH:m,handR:f,thighTopR:x,thighBottomR:M,thighHalfH:S,calfTopR:R,calfBottomR:A,calfHalfH:T,footHx:P,footHy:L,footHz:_,chestCenterY:y,chestTopY:D,neckCenterY:F,headCenterY:V,shoulderY:K,shoulderX:H,armX:k,upperArmCenterY:B,forearmCenterY:rt,handCenterY:ot,hipX:at,thighCenterY:Pt,calfCenterY:Ft,footCenterY:j,chestFrontZ:tt,waistY:pt,pelvisCenterY:ut}=uh(),[vt,St,Bt,Vt,Nt,C,kt,yt,Ct,Et,$t,It]=Dt(i,[8,2,16,10,2,10,8,4,14,10,6,10]),[w,E]=Dt(Nt,[1,1]),[G,Q]=Dt(C,[1,1]),[it,Z]=Dt(kt,[1,1]),[W,Y]=Dt(yt,[1,1]),[J,At]=Dt(Ct,[1,1]),[nt,lt]=Dt(Et,[1,1]),[dt,ht]=Dt($t,[1,1]),ft=st(ln(Yt(t,vt),2,.8),0,V,0),Ot=st(le(e,e*1.1,n,St),0,F,0),Ut=st(le(s,r,o,Bt),0,y,0),Zt=st(Se(a,l,c,Vt),0,ut,0),N=[st(Yt(h,w),-H,K,0),st(Yt(h,E),H,K,0)],_t=[st(le(u,d,p,G),-k,B,0),st(le(u,d,p,Q),k,B,0)],$=[st(le(g,v,m,it),-k,rt,0),st(le(g,v,m,Z),k,rt,0)],et=[st(ln(Yt(f,W),2,.6),-k,ot,0),st(ln(Yt(f,Y),2,.6),k,ot,0)],gt=[st(le(x,M,S,J),-at,Pt,0),st(le(x,M,S,At),at,Pt,0)],xt=[st(le(R,A,T,nt),-at,Ft,0),st(le(R,A,T,lt),at,Ft,0)],qt=[st(Se(P,L,_,dt),-at,j,_*.5),st(Se(P,L,_,ht),at,j,_*.5)],ce=[y+o*.5,y,y-o*.4],Ee=[{pts:[[-H*.7,K,tt*.6],[H*.7,K,tt*.6]],weight:H},...ce.map((Ce,Kn)=>({pts:[[-s*(.75-Kn*.08),Ce,tt],[s*(.75-Kn*.08),Ce,tt]],weight:s})),{pts:[[0,D*.9,tt],[U*.02,y,tt*.95],[-U*.02,pt+o*.3,tt*.9],[0,pt,tt*.85]],weight:o*1.5}],jt=Dt(It,Ee.map(Ce=>Ce.weight)),we=Ee.map((Ce,Kn)=>pn(Ce.pts,jt[Kn],U*.015));return xe([ft,Ot,Ut,Zt,...N,..._t,...$,...et,...gt,...xt,...qt,...we])}function P_(i){const t=uh(),e=t.headR*.75,n=t.neckR*.7,s=t.upperArmBottomR*.4,r=t.upperArmTopR*.55,o=t.upperArmHalfH*.75,a=t.forearmBottomR*.4,l=t.forearmTopR*.55,c=t.forearmHalfH*.75,h=t.thighBottomR*.4,u=t.thighTopR*.55,d=t.thighHalfH*.75,p=t.calfBottomR*.4,g=t.calfTopR*.55,v=t.calfHalfH*.75,m=t.handR*.5,f=t.footHy*.7,x=[t.chestTopY,t.chestCenterY,t.waistY,t.pelvisCenterY],M=[t.chestCenterY+t.chestHalfH*.4,t.chestCenterY,t.chestCenterY-t.chestHalfH*.4],[S,R,A,T,P,L,_,y,D]=Dt(i,[10,10,10,14,12,4,16,14,4]),F=Dt(R,x.map(()=>1)),V=Dt(A,M.map(()=>1)),[K,H]=Dt(T,[1,1]),[k,B]=Dt(P,[1,1]),[rt,ot]=Dt(L,[1,1]),[at,Pt]=Dt(_,[1,1]),[Ft,j]=Dt(y,[1,1]),[tt,pt]=Dt(D,[1,1]),ut=st(Yt(e,S),0,t.headCenterY,0),vt=x.map((Ct,Et)=>st(Yt(n,F[Et]),0,Ct,0)),St=M.map((Ct,Et)=>pn([[-1.87*.7,Ct,t.chestFrontZ*.9],[0,Ct,t.chestFrontZ],[t.chestTopR*.7,Ct,t.chestFrontZ*.9]],V[Et],U*.01)),Bt=[st(Oe(s,r,o,K),-1.7765,t.upperArmCenterY,0),st(Oe(s,r,o,H),t.armX,t.upperArmCenterY,0)],Vt=[st(Oe(a,l,c,k),-1.7765,t.forearmCenterY,0),st(Oe(a,l,c,B),t.armX,t.forearmCenterY,0)],Nt=[st(Yt(m,rt),-1.7765,t.handCenterY,0),st(Yt(m,ot),t.armX,t.handCenterY,0)],C=[st(Oe(h,u,d,at),-.7150000000000001,t.thighCenterY,0),st(Oe(h,u,d,Pt),t.hipX,t.thighCenterY,0)],kt=[st(Oe(p,g,v,Ft),-.7150000000000001,t.calfCenterY,0),st(Oe(p,g,v,j),t.hipX,t.calfCenterY,0)],yt=[st(Yt(f,tt),-.7150000000000001,t.footCenterY,0),st(Yt(f,pt),t.hipX,t.footCenterY,0)];return xe([ut,...vt,...St,...Bt,...Vt,...Nt,...C,...kt,...yt])}function L_(i){const{headCenterY:t,skullR:e}=xs(),n=U*.1,s=e*.6,r=t-e*.55,[o,a,l,c]=Dt(i,[48,20,14,18]),h=ln(Yt(e,o),2,.88);zn(h,o,-.42,.12,.9,.8,.6),zn(h,o,.42,.12,.9,.8,.6),zn(h,o,0,-.15,1,.94,.72),zn(h,o,-.42,.32,.85,.9,1.15),zn(h,o,.42,.32,.85,.9,1.15),zn(h,o,-.55,-.05,.8,.88,1.12),zn(h,o,.55,-.05,.8,.88,1.12),zn(h,o,0,.05,1,.95,1.08);const u=st(h,0,t,0),d=r+s*.7,p=r+s*.1,g=r-s*.35,v=pn([[-s,d,0],[-s*.95,p,s*.35],[0,g,s*.78],[s*.95,p,s*.35],[s,d,0]],a,s*.1),m=r-s*.05,f=s*.65,[x,M]=Dt(l,[1,1]),S=[pn([[-s*.55,m+s*.18,f],[s*.55,m+s*.18,f]],x,s*.03),pn([[-s*.5,m-s*.1,f*.95],[s*.5,m-s*.1,f*.95]],M,s*.03)],R=st(Yt(n,c),0,0,0);return xe([u,v,...S,R])}function D_(i){const t=U*.62,e=U*.55,n=U*.26,s=0,r=s+e,o=r+e,a=s-n,l=t*.85,c=t*.95,h=U*.09,u=U*.12,d=[o,r,s,a],p=[r+e*.4,r,r-e*.4],[g,v,m]=Dt(i,[30,45,25]),f=Dt(g,d.map(()=>1)),x=Dt(v,p.map(()=>1)),[M,S]=Dt(m,[1,1]),R=d.map((P,L)=>st(Yt(h,f[L]),0,P,0)),A=p.map((P,L)=>pn([[-t*.7,P,l*.9],[0,P,l],[t*.7,P,l*.9]],x[L],U*.01)),T=[st(Yt(u,M),-c,o,0),st(Yt(u,S),c,o,0)];return xe([...R,...A,...T])}function I_(i){const t=U*.6,e=U*.55,n=U*.2,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,h=U*.08,u=U*.13,d=U*.06,p=U*.1,g=U*.09,[v,m,f]=Dt(i,[40,40,20]),x=st(Oe(h,u,t*.8,v),0,r,0),M=st(Oe(d,p,e*.8,m),0,a,0),S=st(Yt(g,f),0,c,0);return vr(xe([x,M,S]))}function U_(i){const t=U*.65,e=U*.62,n=U*.09,s=0,r=s-t,o=s-t*2,a=o-e,c=o-e*2-n,h=U*.1,u=U*.16,d=U*.08,p=U*.12,g=U*.1,[v,m,f]=Dt(i,[42,40,18]),x=st(Oe(h,u,t*.8,v),0,r,0),M=st(Oe(d,p,e*.8,m),0,a,0),S=st(Yt(g,f),0,c,0);return xe([x,M,S])}function N_(i){const t=U*.18,e=U*.5,n=U*.42,s=[.55,.72,.78,.7,.5],r=[-.85,-.45,0,.45,.85],o=0,l=o-t-e-e,c=U*.08,h=U*.035,[u,d]=Dt(i,[15,85]),p=Dt(d,[.9,1,1.1,1,.8]),g=st(Yt(c,u),0,o,0),v=r.map((m,f)=>{const x=U*s[f]*.4;return st(Oe(h*.7,h,x,p[f]),m*n,l-x,0)});return xe([g,...v])}function F_(i){const t=U*.2,e=U*.22,n=U*.75,s=U*.34,r=[.75,1,.95,.85,.7],o=[-.65,-.3,0,.3,.65],a=0,l=a-t-e,c=n*.3+n,h=U*.1,u=U*.04,[d,p]=Dt(i,[20,80]),g=Dt(p,[1,1,1,1,1]),v=st(Yt(h,d),0,a,0),m=o.map((f,x)=>{const M=U*.16*r[x]*.7;return st(Oe(u*.7,u,M,g[x]),f*s,l,c*.6)});return xe([v,...m])}const fs=new Map,dh=new Map,pa=new Map;function Te(i){fs.set(i.name,i);for(const t of i.aliases)dh.set(t,i.name);pa.set(i.name,(pa.get(i.name)??0)+1)}function O_(i){return pa.get(i)??0}function Fa(i){return fs.get(i)??null}Te({name:"cubo",aliases:["caja","dado"],generate:M_});Te({name:"esfera",aliases:["bola","globo","planeta"],generate:y_});Te({name:"piramide",aliases:["triangulo"],generate:S_});Te({name:"estrella",aliases:[],generate:E_});Te({name:"anillo",aliases:["dona","donut","rosquilla","toro"],generate:b_});Te({name:"corazon",aliases:["amor","love"],generate:A_});Te({name:"cruz",aliases:["plus","mas"],generate:T_});Te({name:"carro",aliases:["auto","coche","vehiculo"],generate:w_});Te({name:"telefono",aliases:["celular","movil","smartphone"],generate:C_});Te({name:"persona",aliases:["personaje","humano","gente"],generate:R_,bones:P_});Te({name:"cabeza",aliases:[],generate:p_,bones:L_,colorParts:fa});Te({name:"torso",aliases:["tronco"],generate:m_,bones:D_});Te({name:"brazo",aliases:["brazos"],generate:g_,bones:I_});Te({name:"pierna",aliases:["piernas"],generate:__,bones:U_});Te({name:"mano",aliases:["manos"],generate:v_,bones:N_});Te({name:"pie",aliases:["pies"],generate:x_,bones:F_});const B_=new RegExp("[\\u0300-\\u036f]","g");function z_(i){return i.normalize("NFD").replace(B_,"").toLowerCase().trim()}function Oa(i){const t=z_(i);if(fs.has(t))return t;const e=dh.get(t);return e&&fs.has(e)?e:null}function H_(){return[...fs.keys()]}const nc="escaneo";function k_(i){const t=Math.floor(i.length/3),e=Zi*.02;return n=>{const s=new Float32Array(n*3);if(t===0)return s;for(let r=0;r<n;r++){const o=r>=t,a=o?Math.floor(Math.random()*t):r,l=o?(Math.random()*2-1)*e:0,c=o?(Math.random()*2-1)*e:0,h=o?(Math.random()*2-1)*e:0;s[r*3+0]=i[a*3+0]+l,s[r*3+1]=i[a*3+1]+c,s[r*3+2]=i[a*3+2]+h}return s}}function V_(i){return Te({name:nc,aliases:[],generate:k_(i)}),nc}const ye={DETAIL:0,COLOR:1},G_=.75;function W_(i,t){const e=[];if(t<2)return e;const n=new Uint8Array(t),s=new Float32Array(t).fill(1/0),r=new Int32Array(t).fill(-1);n[0]=1;for(let o=1;o<t;o++){const a=i[o*3+0]-i[0],l=i[o*3+1]-i[1],c=i[o*3+2]-i[2];s[o]=a*a+l*l+c*c,r[o]=0}for(let o=1;o<t;o++){let a=-1,l=1/0;for(let d=0;d<t;d++)!n[d]&&s[d]<l&&(l=s[d],a=d);if(a===-1)break;n[a]=1,e.push([r[a],a]);const c=i[a*3+0],h=i[a*3+1],u=i[a*3+2];for(let d=0;d<t;d++){if(n[d])continue;const p=i[d*3+0]-c,g=i[d*3+1]-h,v=i[d*3+2]-u,m=p*p+g*g+v*v;m<s[d]&&(s[d]=m,r[d]=a)}}return e}const X_=2;function Y_(i,t,e){const n=[],s=Math.min(X_,t-1);if(s<=0)return n;const r=new Int32Array(s),o=new Float32Array(s);for(let a=0;a<t;a++){const l=i[a*3+0],c=i[a*3+1],h=i[a*3+2];let u=0;for(let d=0;d<t;d++){if(d===a)continue;const p=i[d*3+0]-l,g=i[d*3+1]-c,v=i[d*3+2]-h,m=p*p+g*g+v*v;let f=u<s?u:s-1;if(u===s){if(m>=o[s-1])continue}else u++;for(;f>0&&o[f-1]>m;)o[f]=o[f-1],r[f]=r[f-1],f--;o[f]=m,r[f]=d}for(let d=0;d<u;d++){const p=r[d],g=a<p?`${a}-${p}`:`${p}-${a}`;e.has(g)||(e.add(g),n.push([a,p]))}}return n}function $_(i,t){if(t<2)return[];const e=W_(i,t),n=new Set;for(const[s,r]of e)n.add(s<r?`${s}-${r}`:`${r}-${s}`);return e.concat(Y_(i,t,n))}function q_(i,t,e){const n=new Float32Array(e*3),s=new Float32Array(e*6);if(t.length===0)return{points:n,spans:s};for(let r=0;r<e;r++){const[o,a]=t[r%t.length],l=i[o*3+0],c=i[o*3+1],h=i[o*3+2],u=i[a*3+0],d=i[a*3+1],p=i[a*3+2];n[r*3+0]=(l+u)/2,n[r*3+1]=(c+d)/2,n[r*3+2]=(h+p)/2,s[r*6+0]=l,s[r*6+1]=c,s[r*6+2]=h,s[r*6+3]=u,s[r*6+4]=d,s[r*6+5]=p}return{points:n,spans:s}}const j_=4;function K_(i,t,e){if(e<=0||t===0)return new Float32Array(0);const n=Math.min(e,t),s=new Int32Array(n),r=new Float32Array(t).fill(1/0);let o=Math.floor(Math.random()*t);s[0]=o;for(let l=1;l<n;l++){const c=i[o*3+0],h=i[o*3+1],u=i[o*3+2];let d=-1,p=-1;for(let g=0;g<t;g++){const v=i[g*3+0]-c,m=i[g*3+1]-h,f=i[g*3+2]-u,x=v*v+m*m+f*f;x<r[g]&&(r[g]=x),r[g]>p&&(p=r[g],d=g)}o=d,s[l]=o}const a=new Float32Array(n*3);for(let l=0;l<n;l++){const c=s[l];a[l*3+0]=i[c*3+0],a[l*3+1]=i[c*3+1],a[l*3+2]=i[c*3+2]}return a}function Z_(i,t){if(t<=0)return new Float32Array(0);const e=i(t*j_);return K_(e,e.length/3,t)}const J_=.12,Q_=2e3;function t0(i,t,e=Vn){const n=Oa(i);if(!n)return null;const s=Fa(n);if(s.bones){const m=s.bones(t),f=new Float32Array(t*3);for(let x=0;x<t;x++)f[x*3+0]=m[x*3+0]+e[0],f[x*3+1]=m[x*3+1]+e[1],f[x*3+2]=m[x*3+2]+e[2];return{points:f,isBeam:new Uint8Array(t),relationSpans:new Float32Array(t*6)}}const r=s.generate,o=t>0?Math.min(t,Q_,Math.max(4,Math.round(t*J_))):0,a=Math.max(0,t-o),l=Z_(r,o),c=$_(l,o),{points:h,spans:u}=q_(l,c,a),d=new Float32Array(t*3),p=new Uint8Array(t),g=new Float32Array(t*6);let v=0;for(let m=0;m<o;m++)d[v*3+0]=l[m*3+0]+e[0],d[v*3+1]=l[m*3+1]+e[1],d[v*3+2]=l[m*3+2]+e[2],v++;for(let m=0;m<a;m++)d[v*3+0]=h[m*3+0]+e[0],d[v*3+1]=h[m*3+1]+e[1],d[v*3+2]=h[m*3+2]+e[2],p[v]=1,g[v*6+0]=u[m*6+0]+e[0],g[v*6+1]=u[m*6+1]+e[1],g[v*6+2]=u[m*6+2]+e[2],g[v*6+3]=u[m*6+3]+e[0],g[v*6+4]=u[m*6+4]+e[1],g[v*6+5]=u[m*6+5]+e[2],v++;return{points:d,isBeam:p,relationSpans:g}}const ic=[{color:0,weight:1}];function e0(i,t,e=Vn,n=ic){const s=Oa(i);if(!s)return null;const r=Fa(s),o=r.generate,a=r.colorParts,l=a?a.map(M=>({color:M.color,weight:M.weight})):n.length>0?n:ic,c=t>0?Math.round(t*G_):0,h=Math.max(0,t-c),u=o(h),d=Dt(c,l.map(M=>M.weight)),p=a?d.map((M,S)=>a[S].generator(M)):d.map(M=>o(M)),g=new Float32Array(t*3),v=new Uint8Array(t),m=new Uint8Array(t);let f=0;((M,S,R)=>{for(let A=0;A<S;A++)g[f*3+0]=M[A*3+0]+e[0],g[f*3+1]=M[A*3+1]+e[1],g[f*3+2]=M[A*3+2]+e[2],v[f]=R,f++})(u,h,ye.DETAIL);for(let M=0;M<p.length;M++){const S=p[M],R=d[M];for(let A=0;A<R;A++)g[f*3+0]=S[A*3+0]+e[0],g[f*3+1]=S[A*3+1]+e[1],g[f*3+2]=S[A*3+2]+e[2],v[f]=ye.COLOR,m[f]=M,f++}return{points:g,roles:v,colorWave:m,colorWaveCount:l.length,colorClusters:l}}function n0(i,t){const e=new Float32Array(i*3);for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),o=l_*(.5+.5*Math.random());e[n*3]=t[0]+o*Math.sin(r)*Math.cos(s),e[n*3+1]=t[1]+o*Math.sin(r)*Math.sin(s),e[n*3+2]=t[2]+o*Math.cos(r)}return e}const bn=8,ho=256/bn,i0=128,uo=235,fo=20,Di=32,us=4,sc=60,ps=4973567,ma=[{color:ps,weight:1}];function s0(i,t=us){const e=bn*bn*bn,n=new Uint32Array(e),s=new Float64Array(e),r=new Float64Array(e),o=new Float64Array(e);for(let p=0;p+3<i.length;p+=4){const g=i[p],v=i[p+1],m=i[p+2];if(i[p+3]<i0||g>uo&&v>uo&&m>uo||g<fo&&v<fo&&m<fo)continue;const x=Math.min(bn-1,Math.floor(g/ho)),M=Math.min(bn-1,Math.floor(v/ho)),S=Math.min(bn-1,Math.floor(m/ho)),R=(x*bn+M)*bn+S;n[R]++,s[R]+=g,r[R]+=v,o[R]+=m}const a=[];for(let p=0;p<e;p++)n[p]!==0&&a.push({count:n[p],r:s[p]/n[p],g:r[p]/n[p],b:o[p]/n[p]});if(a.length===0)return[{color:ps,weight:1}];a.sort((p,g)=>g.count-p.count);const l=[],c=new Uint8Array(a.length),h=sc*sc;for(let p=0;p<a.length;p++){if(c[p])continue;const g=a[p],v={count:g.count,sumR:g.r*g.count,sumG:g.g*g.count,sumB:g.b*g.count};c[p]=1;for(let m=p+1;m<a.length;m++){if(c[m])continue;const f=a[m],x=f.r-g.r,M=f.g-g.g,S=f.b-g.b;x*x+M*M+S*S>h||(c[m]=1,v.count+=f.count,v.sumR+=f.r*f.count,v.sumG+=f.g*f.count,v.sumB+=f.b*f.count)}l.push(v)}l.sort((p,g)=>g.count-p.count);const u=l.slice(0,Math.max(1,t)),d=u.reduce((p,g)=>p+g.count,0);return u.map(p=>{const g=Math.round(p.sumR/p.count),v=Math.round(p.sumG/p.count),m=Math.round(p.sumB/p.count);return{color:g<<16|v<<8|m,weight:p.count/d}})}function r0(i,t,e){return new Promise(n=>{const s=new Image,r=URL.createObjectURL(i),o=()=>URL.revokeObjectURL(r);s.onload=()=>{try{const a=document.createElement("canvas");a.width=Di,a.height=Di;const l=a.getContext("2d");if(!l){n(t);return}l.drawImage(s,0,0,Di,Di);const{data:c}=l.getImageData(0,0,Di,Di);n(e(c))}catch{n(t)}finally{o()}},s.onerror=()=>{o(),n(t)},s.src=r})}function fh(i,t=us){return r0(i,ma,e=>s0(e,t))}const Kt={MICROBOT:0,NANOBOT:1,UNION:2,REPAIR:3,TRANSFORM:4,MATERIAL:5},o0=6,dn=[{type:Kt.MICROBOT,key:"microbot",name:"Microbot",role:"Estructura principal",fn:"Construye el exoesqueleto y la base geométrica",relativeSize:2.2,acceptsObjectMaterial:!1,implemented:!0},{type:Kt.NANOBOT,key:"nanobot",name:"Nanobot",role:"Detalle y precisión",fn:"Rellena superficies y sube la resolución de la figura",relativeSize:1,acceptsObjectMaterial:!0,implemented:!0},{type:Kt.UNION,key:"union",name:"Union Bot",role:"Conexión estructural",fn:"Une nodos del exoesqueleto y sostiene la estructura",relativeSize:2.6,acceptsObjectMaterial:!0,implemented:!0,note:"Sólo en formas con exoesqueleto de vigas (cubo, carro…). Las formas humanoides usan hueso macizo, sin vigas."},{type:Kt.REPAIR,key:"repair",name:"Repair Bot",role:"Mantenimiento",fn:"Detecta huecos en la figura y los rellena",relativeSize:1.8,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"La detección de huecos ya existe (cobertura por vóxeles); falta el despacho de agentes que los rellene."},{type:Kt.TRANSFORM,key:"transform",name:"Transform Bot",role:"Reconfiguración",fn:"Coordina el cambio de una forma a otra",relativeSize:3,acceptsObjectMaterial:!0,implemented:!1,pendingReason:"El morph directo entre figuras ya funciona, pero lo ejecuta el enjambre entero, no agentes de este tipo."},{type:Kt.MATERIAL,key:"material",name:"Material Bot",role:"Material y recubrimiento",fn:"Aplica el color y el material del objeto sobre las demás capas",relativeSize:1.4,acceptsObjectMaterial:!0,implemented:!0}];function ph(i){return dn[i]??dn[Kt.NANOBOT]}const rc={[Kt.MICROBOT]:{identityColor:3108816,identityEmissive:861520,emissiveIntensity:.35},[Kt.NANOBOT]:{identityColor:1871706,identityEmissive:670244,emissiveIntensity:.35},[Kt.UNION]:{identityColor:14263322,identityEmissive:4862981,emissiveIntensity:.4},[Kt.REPAIR]:{identityColor:13120559,identityEmissive:4526094,emissiveIntensity:.4},[Kt.TRANSFORM]:{identityColor:9127620,identityEmissive:3019332,emissiveIntensity:.4},[Kt.MATERIAL]:{identityColor:2078896,identityEmissive:671034,emissiveIntensity:.4}};function mn(i){return rc[i]??rc[Kt.NANOBOT]}const me={FAR:0,MID:1,NEAR:2};function po(i,t,e){if(e===me.FAR)return new Ia(i);const n=new qn(i,i,t,6,1,!1);if(n.rotateX(Math.PI/2),e===me.MID)return n;const s=new qn(i*1.12,i*1.12,t*.45,6,1,!1);return s.rotateX(Math.PI/2),a0([n,s])}function a0(i){const t=i.map(a=>{const l=a.index?a.toNonIndexed():a;return l!==a&&a.dispose(),l});let e=0;for(const a of t)e+=a.getAttribute("position").count;const n=new Float32Array(e*3),s=new Float32Array(e*3);let r=0;for(const a of t){const l=a.getAttribute("position"),c=a.getAttribute("normal");n.set(l.array,r*3),s.set(c.array,r*3),r+=l.count,a.dispose()}const o=new Ve;return o.setAttribute("position",new $e(n,3)),o.setAttribute("normal",new $e(s,3)),o}function ga(i,t){const e=[po(i,t,me.FAR),po(i,t,me.MID),po(i,t,me.NEAR)];return{byLevel:e,dispose(){for(const n of e)n.dispose()}}}const l0=80,c0=4096,h0=.6*.6,u0=1.2*1.2,mh=mn(Kt.NANOBOT).identityColor,gh=8257459,d0=5592405,f0=2763306,$s=[ga(.55,.42),ga(.6,.46)];function oc(i){return i===ye.DETAIL?new Yn({color:mh,emissive:gh,emissiveIntensity:.9,roughness:.35,metalness:.1}):new Yn({color:ps,emissive:ps,emissiveIntensity:.85,roughness:.35,metalness:.1})}function p0(i){const t=new Cn;let e=me.MID;const n=L=>$s[L].byLevel[e],s=$s.map((L,_)=>oc(_)),r=[s[ye.COLOR]];for(let L=1;L<us;L++)r.push(oc(ye.COLOR));let o=0,a=[],l=[],c=[],h=[],u=new Uint8Array(0);function d(L,_,y){const D=new ua(L,_,y);return D.count=0,D.castShadow=!1,D.receiveShadow=!0,t.add(D),D}function p(L){if(o>0&&L<=o)return;let _=Math.max(o,c0);for(;_<L;)_*=2;o=Math.min(_,i);for(const y of a)t.remove(y),y.dispose();for(let y=1;y<l.length;y++)t.remove(l[y]),l[y].dispose();a=$s.map((y,D)=>d(n(D),s[D],o)),l=[a[ye.COLOR]];for(let y=1;y<us;y++)l.push(d(n(ye.COLOR),r[y],o));c=a.map(y=>y.instanceMatrix.array),h=l.map(y=>y.instanceMatrix.array),u=new Uint8Array(o)}const g=new Array($s.length).fill(0),v=new Array(us).fill(0);function m(L){p(L);const _=Math.ceil(L/a.length);a.forEach((y,D)=>{const F=D*_,V=Math.min(L,F+_);y.count=Math.max(0,V-F)});for(let y=1;y<l.length;y++)l[y].count=0;u.fill(0)}function f(L,_,y,D,F,V){L[_+0]=V,L[_+1]=0,L[_+2]=0,L[_+3]=0,L[_+4]=0,L[_+5]=V,L[_+6]=0,L[_+7]=0,L[_+8]=0,L[_+9]=0,L[_+10]=V,L[_+11]=0,L[_+12]=y,L[_+13]=D,L[_+14]=F,L[_+15]=1}function x(L,_,y,D,F,V,K){if(!t.visible)return;const H=Math.min(1,Math.cbrt(l0/_));g.fill(0),v.fill(0);for(let k=0;k<_;k++){const B=y[k];if(!F[B])continue;let rt,ot;if(B===ye.COLOR){const Nt=V[k];if(Nt>=K)continue;const C=Math.min(Nt,l.length-1);rt=h[C],ot=v[C]++}else rt=c[B],ot=g[B]++;const at=L[k*3+0],Pt=L[k*3+1],Ft=L[k*3+2],j=D[k*3+0],tt=D[k*3+1],pt=D[k*3+2],ut=j!==0||tt!==0||pt!==0;if(!ut)u[k]=0;else{const Nt=at-j,C=Pt-tt,kt=Ft-pt,yt=Nt*Nt+C*C+kt*kt;u[k]?yt>u0&&(u[k]=0):yt<h0&&(u[k]=1)}const vt=ut&&u[k]===1,St=vt?j:at,Bt=vt?tt:Pt,Vt=vt?pt:Ft;f(rt,ot*16,St,Bt,Vt,H)}for(let k=0;k<a.length;k++){if(k===ye.COLOR)continue;const B=a[k];B.count=g[k],B.instanceMatrix.clearUpdateRanges(),B.instanceMatrix.addUpdateRange(0,B.count*16),B.instanceMatrix.needsUpdate=!0}for(let k=0;k<l.length;k++){const B=l[k];B.count=v[k],B.instanceMatrix.clearUpdateRanges(),B.instanceMatrix.addUpdateRange(0,B.count*16),B.instanceMatrix.needsUpdate=!0}}function M(L){t.visible=L}function S(L){l.forEach((_,y)=>{var V;const D=((V=L[y])==null?void 0:V.color)??ps,F=_.material;F.color.setHex(D),F.emissive.setHex(D)})}const R=[{role:ye.DETAIL,color:mh,emissive:gh}];function A(L){for(const{role:_,color:y,emissive:D}of R){const F=a[_].material;F.color.setHex(L?d0:y),F.emissive.setHex(L?f0:D)}}function T(L,_){const y=a[ye.DETAIL];y.visible=L.visible,y.position.y=L.offsetY;for(const D of l)D.visible=_.visible,D.position.y=_.offsetY;a[ye.COLOR].visible=_.visible,a[ye.COLOR].position.y=_.offsetY}function P(L){if(L!==e){e=L;for(let _=0;_<a.length;_++)a[_].geometry=n(_);for(let _=1;_<l.length;_++)l[_].geometry=n(ye.COLOR)}}return m(0),{group:t,setCount:m,updateFromPositions:x,setVisible:M,setColorClusters:S,setSkeletonGrayscale:A,setLodLevel:P,setLayerDisplay:T}}const ac=.07,lc=.03,m0=mn(Kt.MICROBOT).identityColor,g0=mn(Kt.MICROBOT).identityEmissive,_0=mn(Kt.UNION).identityColor,v0=mn(Kt.UNION).identityEmissive;function x0(i){const t=new Cn,e=ga(ac,ac*.8).byLevel[me.MID],n=new qn(lc,lc,1,5),s=new Yn({color:m0,emissive:g0,emissiveIntensity:.3,roughness:.55,metalness:.05}),r=new Yn({color:_0,emissive:v0,emissiveIntensity:.25,roughness:.6,metalness:.05}),o=new ua(e,s,i),a=new ua(n,r,i);o.count=0,a.count=0,t.add(o,a);const l=new I,c=new I,h=new I,u=new I,d=new se;function p(x){o.count=0,a.count=0}function g(x,M,S,R,A,T){x[M+0]=T,x[M+1]=0,x[M+2]=0,x[M+3]=0,x[M+4]=0,x[M+5]=T,x[M+6]=0,x[M+7]=0,x[M+8]=0,x[M+9]=0,x[M+10]=T,x[M+11]=0,x[M+12]=S,x[M+13]=R,x[M+14]=A,x[M+15]=1}function v(x,M,S,R){const A=o.instanceMatrix.array,T=a.instanceMatrix.array;let P=0,L=0;for(let _=0;_<M;_++){const y=x[_*3+0],D=x[_*3+1],F=x[_*3+2];if(!S[_]){g(A,P*16,y,D,F,1),P++;continue}const V=R[_*6+0],K=R[_*6+1],H=R[_*6+2],k=R[_*6+3],B=R[_*6+4],rt=R[_*6+5];l.set(k-V,B-K,rt-H);const ot=Math.max(l.length(),.001);l.multiplyScalar(1/ot),u.set(Math.abs(l.y)>.99?1:0,Math.abs(l.y)>.99?0:1,0),c.crossVectors(u,l).normalize(),h.crossVectors(l,c),d.makeBasis(c,l.multiplyScalar(ot),h),d.setPosition(V+(k-V)*.5,K+(B-K)*.5,H+(rt-H)*.5),d.toArray(T,L*16),L++}o.count=P,a.count=L,o.instanceMatrix.clearUpdateRanges(),o.instanceMatrix.addUpdateRange(0,P*16),o.instanceMatrix.needsUpdate=!0,a.instanceMatrix.clearUpdateRanges(),a.instanceMatrix.addUpdateRange(0,L*16),a.instanceMatrix.needsUpdate=!0}function m(x){t.visible=x}function f(x,M){o.visible=x.visible,o.position.y=x.offsetY,a.visible=M.visible,a.position.y=M.offsetY}return{group:t,setCount:p,setVisible:m,updateFromPositions:v,setLayerDisplay:f}}var M0=(()=>{var i=import.meta.url;return function(t){t=t||{};var e=typeof t<"u"?t:{},n,s;e.ready=new Promise(function(W,Y){n=W,s=Y});var r=Object.assign({},e),o=!0,a="";function l(W){return e.locateFile?e.locateFile(W,a):a+W}var c;typeof document<"u"&&document.currentScript&&(a=document.currentScript.src),i&&(a=i),a.indexOf("blob:")!==0?a=a.substr(0,a.replace(/[?#].*/,"").lastIndexOf("/")+1):a="",e.print||console.log.bind(console);var h=e.printErr||console.warn.bind(console);Object.assign(e,r),r=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;var u;e.wasmBinary&&(u=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&tt("no native wasm support detected");var d,p=!1;function g(W){var Y=e["_"+W];return Y}function v(W,Y,J,At,nt){var lt={string:function($){var et=0;if($!=null&&$!==0){var gt=($.length<<2)+1;et=Q(gt),R($,et,gt)}return et},array:function($){var et=Q($.length);return A($,et),et}};function dt($){return Y==="string"?M($):Y==="boolean"?!!$:$}var ht=g(W),ft=[],Ot=0;if(At)for(var Ut=0;Ut<At.length;Ut++){var Zt=lt[J[Ut]];Zt?(Ot===0&&(Ot=E()),ft[Ut]=Zt(At[Ut])):ft[Ut]=At[Ut]}var N=ht.apply(null,ft);function _t($){return Ot!==0&&G(Ot),dt($)}return N=_t(N),N}function m(W,Y,J,At){J=J||[];var nt=J.every(function(dt){return dt==="number"}),lt=Y!=="string";return lt&&nt&&!At?g(W):function(){return v(W,Y,J,arguments)}}var f=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function x(W,Y,J){for(var At=Y+J,nt=Y;W[nt]&&!(nt>=At);)++nt;if(nt-Y>16&&W.subarray&&f)return f.decode(W.subarray(Y,nt));for(var lt="";Y<nt;){var dt=W[Y++];if(!(dt&128)){lt+=String.fromCharCode(dt);continue}var ht=W[Y++]&63;if((dt&224)==192){lt+=String.fromCharCode((dt&31)<<6|ht);continue}var ft=W[Y++]&63;if((dt&240)==224?dt=(dt&15)<<12|ht<<6|ft:dt=(dt&7)<<18|ht<<12|ft<<6|W[Y++]&63,dt<65536)lt+=String.fromCharCode(dt);else{var Ot=dt-65536;lt+=String.fromCharCode(55296|Ot>>10,56320|Ot&1023)}}return lt}function M(W,Y){return W?x(L,W,Y):""}function S(W,Y,J,At){if(!(At>0))return 0;for(var nt=J,lt=J+At-1,dt=0;dt<W.length;++dt){var ht=W.charCodeAt(dt);if(ht>=55296&&ht<=57343){var ft=W.charCodeAt(++dt);ht=65536+((ht&1023)<<10)|ft&1023}if(ht<=127){if(J>=lt)break;Y[J++]=ht}else if(ht<=2047){if(J+1>=lt)break;Y[J++]=192|ht>>6,Y[J++]=128|ht&63}else if(ht<=65535){if(J+2>=lt)break;Y[J++]=224|ht>>12,Y[J++]=128|ht>>6&63,Y[J++]=128|ht&63}else{if(J+3>=lt)break;Y[J++]=240|ht>>18,Y[J++]=128|ht>>12&63,Y[J++]=128|ht>>6&63,Y[J++]=128|ht&63}}return Y[J]=0,J-nt}function R(W,Y,J){return S(W,L,Y,J)}function A(W,Y){P.set(W,Y)}var T,P,L;function _(W){T=W,e.HEAP8=P=new Int8Array(W),e.HEAP16=new Int16Array(W),e.HEAP32=new Int32Array(W),e.HEAPU8=L=new Uint8Array(W),e.HEAPU16=new Uint16Array(W),e.HEAPU32=new Uint32Array(W),e.HEAPF32=new Float32Array(W),e.HEAPF64=new Float64Array(W)}e.INITIAL_MEMORY;var y,D=[],F=[],V=[];function K(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)B(e.preRun.shift());Nt(D)}function H(){Nt(F)}function k(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ot(e.postRun.shift());Nt(V)}function B(W){D.unshift(W)}function rt(W){F.unshift(W)}function ot(W){V.unshift(W)}var at=0,Pt=null;function Ft(W){at++,e.monitorRunDependencies&&e.monitorRunDependencies(at)}function j(W){if(at--,e.monitorRunDependencies&&e.monitorRunDependencies(at),at==0&&Pt){var Y=Pt;Pt=null,Y()}}e.preloadedImages={},e.preloadedAudios={};function tt(W){e.onAbort&&e.onAbort(W),W="Aborted("+W+")",h(W),p=!0,W+=". Build with -s ASSERTIONS=1 for more info.";var Y=new WebAssembly.RuntimeError(W);throw s(Y),Y}var pt="data:application/octet-stream;base64,";function ut(W){return W.startsWith(pt)}var vt;e.locateFile?(vt="boids.wasm",ut(vt)||(vt=l(vt))):vt=new URL("/Simulador-nanobots/wasm/boids.wasm",import.meta.url).toString();function St(W){try{if(W==vt&&u)return new Uint8Array(u);if(!c)throw"both async and sync fetching of the wasm failed"}catch(Y){tt(Y)}}function Bt(){return!u&&o&&typeof fetch=="function"?fetch(vt,{credentials:"same-origin"}).then(function(W){if(!W.ok)throw"failed to load wasm binary file at '"+vt+"'";return W.arrayBuffer()}).catch(function(){return St(vt)}):Promise.resolve().then(function(){return St(vt)})}function Vt(){var W={a:w};function Y(dt,ht){var ft=dt.exports;e.asm=ft,d=e.asm.d,_(d.buffer),y=e.asm.q,rt(e.asm.e),j()}Ft();function J(dt){Y(dt.instance)}function At(dt){return Bt().then(function(ht){return WebAssembly.instantiate(ht,W)}).then(function(ht){return ht}).then(dt,function(ht){h("failed to asynchronously prepare wasm: "+ht),tt(ht)})}function nt(){return!u&&typeof WebAssembly.instantiateStreaming=="function"&&!ut(vt)&&typeof fetch=="function"?fetch(vt,{credentials:"same-origin"}).then(function(dt){var ht=WebAssembly.instantiateStreaming(dt,W);return ht.then(J,function(ft){return h("wasm streaming compile failed: "+ft),h("falling back to ArrayBuffer instantiation"),At(J)})}):At(J)}if(e.instantiateWasm)try{var lt=e.instantiateWasm(W,Y);return lt}catch(dt){return h("Module.instantiateWasm callback failed with error: "+dt),!1}return nt().catch(s),{}}function Nt(W){for(;W.length>0;){var Y=W.shift();if(typeof Y=="function"){Y(e);continue}var J=Y.func;typeof J=="number"?Y.arg===void 0?kt(J)():kt(J)(Y.arg):J(Y.arg===void 0?null:Y.arg)}}var C=[];function kt(W){var Y=C[W];return Y||(W>=C.length&&(C.length=W+1),C[W]=Y=y.get(W)),Y}function yt(){tt("")}function Ct(W,Y,J){L.copyWithin(W,Y,Y+J)}function Et(){return 2147483648}function $t(W){try{return d.grow(W-T.byteLength+65535>>>16),_(d.buffer),1}catch{}}function It(W){var Y=L.length;W=W>>>0;var J=Et();if(W>J)return!1;let At=(ft,Ot)=>ft+(Ot-ft%Ot)%Ot;for(var nt=1;nt<=4;nt*=2){var lt=Y*(1+.2/nt);lt=Math.min(lt,W+100663296);var dt=Math.min(J,At(Math.max(W,lt),65536)),ht=$t(dt);if(ht)return!0}return!1}var w={b:yt,c:Ct,a:It};Vt(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.e).apply(null,arguments)},e._init=function(){return(e._init=e.asm.f).apply(null,arguments)},e._getPositionsPtr=function(){return(e._getPositionsPtr=e.asm.g).apply(null,arguments)},e._getCount=function(){return(e._getCount=e.asm.h).apply(null,arguments)},e._getTargetPositionsPtr=function(){return(e._getTargetPositionsPtr=e.asm.i).apply(null,arguments)},e._setParams=function(){return(e._setParams=e.asm.j).apply(null,arguments)},e._step=function(){return(e._step=e.asm.k).apply(null,arguments)},e._malloc=function(){return(e._malloc=e.asm.l).apply(null,arguments)},e._free=function(){return(e._free=e.asm.m).apply(null,arguments)};var E=e.stackSave=function(){return(E=e.stackSave=e.asm.n).apply(null,arguments)},G=e.stackRestore=function(){return(G=e.stackRestore=e.asm.o).apply(null,arguments)},Q=e.stackAlloc=function(){return(Q=e.stackAlloc=e.asm.p).apply(null,arguments)};e.ccall=v,e.cwrap=m;var it;Pt=function W(){it||Z(),it||(Pt=W)};function Z(W){if(at>0||(K(),at>0))return;function Y(){it||(it=!0,e.calledRun=!0,!p&&(H(),n(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),k()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),Y()},1)):Y()}if(e.run=Z,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return Z(),t.ready}})();class y0{constructor(){Jn(this,"module",null);Jn(this,"count",0);Jn(this,"cachedPtr",-1);Jn(this,"cachedView",null);Jn(this,"cachedTargetPtr",-1);Jn(this,"cachedTargetView",null)}async load(){this.module=await M0()}get mod(){if(!this.module)throw new Error("Swarm.load() debe completarse antes de usar el módulo Wasm");return this.module}init(t){this.count=t,this.cachedView=null,this.cachedTargetView=null,this.mod.ccall("init",null,["number"],[t])}setParams(t){this.mod.ccall("setParams",null,["number","number","number","number","number"],[t.cohesion,t.separation,t.alignment,t.maxSpeed,t.seekWeight])}step(t){this.mod.ccall("step",null,["number"],[t])}getPositions(){const t=this.mod.ccall("getPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedView||t!==this.cachedPtr||this.cachedView.buffer!==e)&&(this.cachedPtr=t,this.cachedView=new Float32Array(e,t,this.count*3)),this.cachedView}getTargetPositions(){const t=this.mod.ccall("getTargetPositionsPtr","number",[],[]),e=this.mod.HEAPF32.buffer;return(!this.cachedTargetView||t!==this.cachedTargetPtr||this.cachedTargetView.buffer!==e)&&(this.cachedTargetPtr=t,this.cachedTargetView=new Float32Array(e,t,this.count*3)),this.cachedTargetView}setAgentTargets(t){this.getTargetPositions().set(t.subarray(0,this.count*3))}getCount(){return this.count}}const S0=new I(-8,8,-8);function E0(i=S0){const t=new Cn;t.position.copy(i);const e=new re(new gr(.9,2),new Yn({color:3351552,emissive:16769355,emissiveIntensity:1.8,roughness:.4,metalness:.2}));e.castShadow=!0,t.add(e);const n=new re(new gr(1.8,2),new yr({color:16769355,wireframe:!0,transparent:!0,opacity:.25}));t.add(n);const s=new oh(16769355,3,14);t.add(s);function r(o){n.rotateY(o*.3),n.rotateX(o*.15)}return{group:t,position:t.position,update:r}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class b0 extends gn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _a(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const A0={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:_a,toHexString:_a},ms={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},T0={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=ms.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return ms.toHexString(s)}},w0={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=ms.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return ms.toHexString(s)}},C0=[A0,ms,T0,w0];function R0(i){return C0.find(t=>t.match(i))}class P0 extends gn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=R0(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=_a(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class mo extends gn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class L0 extends gn{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+x),this.$input.value=this.getValue())},s=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,h,u;const d=5,p=x=>{a=x.clientX,l=c=x.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=x=>{if(o){const M=x.clientX-a,S=x.clientY-l;Math.abs(S)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>d&&v()}if(!o){const M=x.clientY-c;u-=M*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=x.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,x,M,S,R)=>(f-x)/(M-x)*(R-S)+S,e=f=>{const x=this.$slider.getBoundingClientRect();let M=t(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(M)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(o){const x=f.touches[0].clientX-a,M=f.touches[0].clientY-l;Math.abs(x)>Math.abs(M)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let v;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const M=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class D0 extends gn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class I0 extends gn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const U0=`.lil-gui {
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
}`;function N0(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let cc=!1;class Ba{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!cc&&a&&(N0(U0),cc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new D0(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new L0(this,t,e,n,s,r);case"boolean":return new b0(this,t,e);case"string":return new I0(this,t,e);case"function":return new mo(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new P0(this,t,e,n)}addFolder(t){const e=new Ba({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof mo||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof mo)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Ji=48;function Ze(i,t,e,n){return(e*n+t)*n+i}function ki(i,t,e){return((i+.5)/t-.5)*2*e}function An(i,t,e){const n=Math.floor((i/e+1)/2*t);return n<0||n>=t?-1:n}function _h(i=Ji,t=Zi){const e=i*i*i;return{res:i,half:t,occupied:new Uint8Array(e),density:new Uint8Array(e)}}function hc(i,t,e,n=Ji,s=Zi){const r=_h(n,s);for(let o=0;o<t;o++){const a=An(i[o*3+0]-e[0],n,s);if(a<0)continue;const l=An(i[o*3+1]-e[1],n,s);if(l<0)continue;const c=An(i[o*3+2]-e[2],n,s);if(c<0)continue;const h=Ze(a,l,c,n);r.occupied[h]=1,r.density[h]<255&&r.density[h]++}return r}function F0(i){const{res:t,half:e,occupied:n}=i,s=[];for(let r=0;r<t;r++)for(let o=0;o<t;o++)for(let a=0;a<t;a++)!n[Ze(a,o,r,t)]||!(a===0||a===t-1||o===0||o===t-1||r===0||r===t-1||!n[Ze(a-1,o,r,t)]||!n[Ze(a+1,o,r,t)]||!n[Ze(a,o-1,r,t)]||!n[Ze(a,o+1,r,t)]||!n[Ze(a,o,r-1,t)]||!n[Ze(a,o,r+1,t)])||s.push(ki(a,t,e),ki(o,t,e),ki(r,t,e));return new Float32Array(s)}function O0(i,t){if(i.res!==t.res)throw new Error(`validateCoverage: grillas de distinta resolución (${i.res} vs ${t.res})`);const e=[];let n=0,s=0;for(let r=0;r<i.occupied.length;r++)i.occupied[r]&&(n++,t.occupied[r]?s++:e.push(r));return{target:n,covered:s,coverage:n===0?1:s/n,missing:Int32Array.from(e)}}const B0=128,uc=18;function z0(i,t){const e=new Uint8Array(t*t),n=new Uint8Array(t*t),s=[],r=c=>{const h=c*4;return[i[h],i[h+1],i[h+2]]};for(let c=0;c<t;c++)s.push(c),s.push((t-1)*t+c);for(let c=0;c<t;c++)s.push(c*t),s.push(c*t+t-1);for(const c of s)n[c]||(n[c]=1,e[c]=1);const o=uc*uc;let a=0;for(;a<s.length;){const c=s[a++],[h,u,d]=r(c),p=c%t,g=(c-p)/t,v=[];p>0&&v.push(c-1),p<t-1&&v.push(c+1),g>0&&v.push(c-t),g<t-1&&v.push(c+t);for(const m of v){if(n[m])continue;const[f,x,M]=r(m),S=f-h,R=x-u,A=M-d;n[m]=1,S*S+R*R+A*A<=o&&(e[m]=1,s.push(m))}}const l=new Uint8Array(t*t);for(let c=0;c<t*t;c++)l[c]=e[c]?0:1;return{mask:l,size:t}}function H0(i,t){return new Promise((e,n)=>{const s=new Image,r=URL.createObjectURL(i);s.onload=()=>{try{const o=document.createElement("canvas");o.width=t,o.height=t;const a=o.getContext("2d");if(!a){n(new Error("Canvas 2D no disponible"));return}a.drawImage(s,0,0,t,t),e(a.getImageData(0,0,t,t).data)}catch(o){n(o)}finally{URL.revokeObjectURL(r)}},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("No se pudo cargar la foto"))},s.src=r})}async function qs(i,t=B0){const e=await H0(i,t);return z0(e,t)}function js(i,t,e,n){return e<0||e>=t||n<0||n>=t?!1:i[n*t+e]===1}function Ks(i,t,e,n){const s=Math.floor((i/e+1)/2*n),r=Math.floor((-t/e+1)/2*n);return[s,r]}function k0(i,t,e,n,s=Ji){const r=Zi,o=_h(s,r);for(let a=0;a<s;a++){const l=ki(a,s,r);for(let c=0;c<s;c++){const h=ki(c,s,r);for(let u=0;u<s;u++){const d=ki(u,s,r),[p,g]=Ks(d,h,r,i.size);if(!js(i.mask,i.size,p,g))continue;const[v,m]=Ks(-d,h,r,t.size);if(!js(t.mask,t.size,v,m))continue;const[f,x]=Ks(l,h,r,e.size);if(!js(e.mask,e.size,f,x))continue;const[M,S]=Ks(-l,h,r,n.size);js(n.mask,n.size,M,S)&&(o.occupied[Ze(u,c,a,s)]=1)}}}return o}function V0(i,t,e,n,s=Ji){return F0(k0(i,t,e,n,s))}async function G0(i,t=Ji){const[e,n,s,r]=await Promise.all([qs(i.front),qs(i.back),qs(i.left),qs(i.right)]);return V0(e,n,s,r,t)}const Je={CORE:0,TRAVELING:1,ASSEMBLING:2,ATTACHED:3,RETURNING:4,IDLE:5},dc=["núcleo","viajando","ensamblando","asentado","volviendo","reposo","reparando","error"],cs=new Uint8Array(0),go=new Float32Array(0);function W0(){let i=0,t=cs,e=cs,n=cs,s=go,r=go,o=new Uint8Array(0),a=new Uint8Array(0),l=0;const c={get index(){return l},get role(){return t[l]??0},get colorWave(){return e[l]??0},get layer(){return n[l]??0},get state(){return o[l]??Je.IDLE},get botType(){return a[l]??Kt.NANOBOT},get delayFraction(){return s[l]??0},get targetX(){return r[l*3+0]??0},get targetY(){return r[l*3+1]??0},get targetZ(){return r[l*3+2]??0}};function h(d){o.length>=d||(o=new Uint8Array(d))}function u(d){a.length>=d||(a=new Uint8Array(d))}return{get count(){return i},get role(){return t},get colorWave(){return e},get layer(){return n},get delayFraction(){return s},get target(){return r},get state(){return o},get botType(){return a},adoptFormation(d){i=d.count,t=d.role,e=d.colorWave,n=d.layer,s=d.delayFraction,r=d.target,h(i),o.fill(Je.CORE,0,i),u(i),a.fill(Kt.NANOBOT,0,i)},reset(d,p,g){i=d,t=p,e=cs,n=cs,s=go,r=g,h(i),o.fill(Je.IDLE,0,i),u(i),a.fill(Kt.NANOBOT,0,i)},fillState(d){h(i),o.fill(d,0,i)},assignTypesFromRoles(d){u(i);for(let p=0;p<i;p++)a[p]=t[p]===d?Kt.MATERIAL:Kt.NANOBOT},countByType(d){d.fill(0);for(let p=0;p<i;p++)d[a[p]]++;return d},countByState(d){d.fill(0);for(let p=0;p<i;p++)d[o[p]]++;return d},at(d){return l=d,c}}}function X0(i,t){const e=new Ba({title:"Parámetros del enjambre"});e.addFolder("Microbots (exoesqueleto)").add(i,"microbotCount",0,6e4,100).name("Cantidad").onFinishChange(r=>t.onMicrobotCountChange(r)),e.add(i,"count",20,6e4,1).name("Nanobots").onFinishChange(r=>t.onCountChange(r)),e.add(i,"maxSpeed",.5,10,.1).name("Velocidad máx.").onChange(()=>t.onParamsChange(i)),e.add(i,"cohesion",0,3,.05).name("Cohesión").onChange(()=>t.onParamsChange(i)),e.add(i,"separation",0,3,.05).name("Separación").onChange(()=>t.onParamsChange(i)),e.add(i,"alignment",0,3,.05).name("Alineación").onChange(()=>t.onParamsChange(i));const s={guardar:()=>t.onSave({count:i.count,cohesion:i.cohesion,separation:i.separation,alignment:i.alignment,maxSpeed:i.maxSpeed}),cargar:()=>t.onLoad()};return e.add(s,"guardar").name("Guardar configuración"),e.add(s,"cargar").name("Cargar configuración"),J0(e,t),Q0(e,t),e}const br=200;function Y0(i){const t=i.addFolder("Estado de los agentes"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin agentes",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<br)return;n=o;const a=r();let l="";for(let h=0;h<dc.length;h++)a[h]!==0&&(l+=`${dc[h]}: ${a[h]}
`);const c=l===""?"sin agentes":l.trimEnd();c!==s&&(s=c,e.textContent=c)}}function $0(i){const t=i.addFolder("Cola de tareas"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin tareas",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<br)return;n=o;const a=r().describe(),l=a.length?a.join(`
`):"sin tareas";l!==s&&(s=l,e.textContent=l)}}function q0(i){const t=i.addFolder("Cobertura de la figura"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.6",e.style.whiteSpace="pre",e.style.opacity="0.85",e.textContent="sin figura",t.domElement.appendChild(e);let n=-1/0,s="";return r=>{const o=performance.now();if(o-n<br)return;n=o;const a=r(),l=a?`${Math.round(a.fraction*100)}% del volumen
${a.covered} de ${a.total} celdas`:"sin figura";l!==s&&(s=l,e.textContent=l)}}function j0(i){return`#${i.toString(16).padStart(6,"0")}`}function K0(i){const t=i.addFolder("Tipos de bot"),e=document.createElement("div");e.style.padding="6px 10px",e.style.fontSize="11px",e.style.lineHeight="1.7",t.domElement.appendChild(e);const n=[];for(const o of dn){const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="6px";const l=document.createElement("span");l.style.width="9px",l.style.height="9px",l.style.borderRadius="2px",l.style.flex="0 0 auto",l.style.background=j0(mn(o.type).identityColor),a.appendChild(l);const c=document.createElement("span");c.textContent=o.name,c.style.flex="1 1 auto",c.style.opacity=o.implemented?"0.9":"0.5",c.title=`${o.role} — ${o.fn}`,a.appendChild(c);const h=document.createElement("span");h.style.opacity="0.75",h.textContent="0",a.appendChild(h),n.push(h),e.appendChild(a);const u=o.implemented?o.note:o.pendingReason;if(u){const d=document.createElement("div");d.textContent=u,d.style.fontSize="10px",d.style.opacity="0.45",d.style.margin="-2px 0 4px 15px",d.style.lineHeight="1.35",e.appendChild(d)}}let s=-1/0;const r=dn.map(()=>-1);return o=>{const a=performance.now();if(a-s<br)return;s=a;const l=o();for(let c=0;c<dn.length;c++){const h=l[dn[c].type]??0;h!==r[c]&&(r[c]=h,n[c].textContent=dn[c].implemented?String(h):"sin agentes")}}}function Z0(i,t){const e=i.addFolder("Inspección"),n=document.createElement("div");n.style.cssText="font-size:10px;opacity:0.5;line-height:1.35;padding:4px 10px",n.textContent="El Zoom especial deja acercarse mucho más que el zoom normal, y ahí se distingue el hexágono y el tipo de cada bot.",e.domElement.appendChild(n);const s={zoom:()=>{const l=t.onToggleZoom();r.name(l?"Zoom especial: ACTIVO":"Zoom especial")},inspector:()=>{const l=t.onToggleInspector();o.name(l?"Inspección de bots: ABIERTA":"Inspección de bots")},capas:()=>{const l=t.onToggleLayers();a.name(l?"Ver capas: ABIERTO":"Ver capas")}},r=e.add(s,"zoom").name("Zoom especial"),o=e.add(s,"inspector").name("Inspección de bots"),a=e.add(s,"capas").name("Ver capas")}function J0(i,t){const e=i.addFolder("Comandos"),n={objectName:""};let s=null;const r=document.createElement("input");r.type="file",r.accept="image/*",r.style.display="none",document.body.appendChild(r);const o=document.createElement("img");o.style.cssText="width:100%;max-height:80px;object-fit:contain;display:none;margin:4px 0;border-radius:4px;";const a=document.createElement("div");a.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";let l=null;function c(){l&&(URL.revokeObjectURL(l),l=null)}o.addEventListener("load",c),o.addEventListener("error",c),r.addEventListener("change",()=>{var d;const u=(d=r.files)==null?void 0:d[0];u&&(c(),l=URL.createObjectURL(u),o.src=l,o.style.display="block",s=u,a.textContent=`Foto adjunta: ${u.name}`)}),e.add(n,"objectName").name("Objeto");const h={adjuntarFoto:()=>r.click(),formarObjeto:async()=>{if(!s){a.textContent="Subí una foto del objeto antes de formarlo.";return}const u=Oa(n.objectName);if(!u){a.textContent=`Objeto no reconocido. Probá: ${H_().join(", ")}`;return}a.textContent=`Formando: ${u}`;const d=await fh(s);t.onFormShape(u,d)},volverAlNucleo:()=>{a.textContent="Volviendo al núcleo...",t.onReturnToCore()}};e.add(h,"adjuntarFoto").name("Adjuntar foto"),e.add(h,"formarObjeto").name("Formar objeto"),e.add(h,"volverAlNucleo").name("Volver al núcleo"),e.domElement.appendChild(o),e.domElement.appendChild(a)}const _o={front:"Foto frontal",back:"Foto trasera",left:"Foto lateral izq.",right:"Foto lateral der."};function Q0(i,t){const e=i.addFolder("Escaneo 3D (4 fotos)"),n={},s=document.createElement("div");s.style.cssText="font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;",s.textContent="Consejo: mismo fondo liso y contrastante, objeto centrado y a la MISMA distancia/zoom en las 4 fotos (no recortar cada una por separado).",e.domElement.appendChild(s);const r=document.createElement("div");r.style.cssText="font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";function o(h){const u=document.createElement("input");return u.type="file",u.accept="image/*",u.style.display="none",u.dataset.scanSlot=h,document.body.appendChild(u),u.addEventListener("change",()=>{var p;const d=(p=u.files)==null?void 0:p[0];d&&(n[h]=d,r.textContent=`${_o[h]}: ${d.name}`)}),u}const a=["front","back","left","right"],l=Object.fromEntries(a.map(h=>[h,o(h)])),c={reconstruir:async()=>{const h=a.find(v=>!n[v]);if(h){r.textContent=`Falta adjuntar: ${_o[h]}.`;return}r.textContent="Reconstruyendo en 3D...";const u=n,d=await G0(u);if(d.length===0){r.textContent="No se pudo reconstruir nada — probá con fondo más liso/contrastante.";return}const p=V_(d),g=await fh(u.front);r.textContent="Formando: escaneo",t.onFormShape(p,g)}};for(const h of a)e.add({fn:()=>l[h].click()},"fn").name(_o[h]);e.add(c,"reconstruir").name("Reconstruir en 3D"),e.domElement.appendChild(r)}const vh="nanobot-swarm-config";function tv(){try{const i=localStorage.getItem(vh);return i?JSON.parse(i):null}catch{return null}}function ev(i){try{return localStorage.setItem(vh,JSON.stringify(i)),!0}catch{return!1}}async function fc(){try{const i=await fetch("/api/config");if(i.ok)return await i.json()}catch{}return tv()}async function nv(i){try{if((await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok)return!0}catch{}return ev(i)}const Zs=240;function pc(){const i=performance.memory;return i?i.usedJSHeapSize/(1024*1024):null}function iv(){const i=new Float64Array(Zs),t=new Float64Array(Zs);let e=0,n=0,s=0,r=0,o=0,a=0,l=0;const c={};return{sampleFrame(h){i[e]=h,e=(e+1)%Zs,n<Zs&&n++,s++},setAgentCounts(h,u){r=h,o=u},setRenderInfo(h,u){a=h,l=u},mark(h,u){c[h]=u},time(h,u){const d=performance.now();try{return u()}finally{c[h]=performance.now()-d}},snapshot(){if(n===0)return{frames:0,fps:0,frameMsAvg:0,frameMsP95:0,frameMsMax:0,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:pc(),timings:{...c}};let h=0,u=0;for(let v=0;v<n;v++){const m=i[v];h+=m,m>u&&(u=m),t[v]=m}const d=t.subarray(0,n);d.sort();const p=h/n,g=Math.min(n-1,Math.floor(n*.95));return{frames:s,fps:p>0?1e3/p:0,frameMsAvg:p,frameMsP95:d[g],frameMsMax:u,nanobots:r,microbots:o,drawCalls:a,triangles:l,heapUsedMB:pc(),timings:{...c}}},reset(){e=0,n=0,s=0;for(const h of Object.keys(c))delete c[h]}}}const sv=Math.PI*(3-Math.sqrt(5));function or(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function rv(i,t){const e=t[0]-i[0],n=t[1]-i[1],s=t[2]-i[2],r=Math.sqrt(e*e+n*n+s*s)||1,o=e/r,a=n/r,l=s/r,c=Math.abs(a)>.99?1:0,h=Math.abs(a)>.99?0:1;let u=h*l,d=-c*l,p=c*a-h*o;const g=Math.sqrt(u*u+d*d+p*p)||1;return u/=g,d/=g,p/=g,{ux:u,uy:d,uz:p,vx:a*p-l*d,vy:l*u-o*p,vz:o*d-a*u}}function ar(i,t,e,n,s,r){const o=n*Math.sin(i*Math.PI),a=i*e*Math.PI*2+t*sv,l=Math.cos(a)*o,c=Math.sin(a)*o;r[0]=s.ux*l+s.vx*c,r[1]=s.uy*l+s.vy*c,r[2]=s.uz*l+s.vz*c}const xh=1,Mh=1,za=xh+Mh,ov=.35,yh=za*ov,mc=za-yh,Ha={travelDuration:xh,layerStaggerSpan:Mh,layerDuration:za,swirlTurns:1.2,swirlMaxRadius:1,packetDuration:yh,packetSwirlTurns:1.5,packetSwirlMaxRadius:.4,burstTravelDuration:mc/2,burstStaggerSpan:mc/2};function av(i,t,e){return Math.min(Math.floor(i/e),t-1)}function lv(i,t,e,n,s,r,o,a){const l=1+s,c=new Uint8Array(n),h=new Array(l).fill(0);let u=0,d=0,p=0,g=0;for(let f=0;f<n;f++){const x=i[f]===r?1+t[f]:0;c[f]=x,h[x]++,x===1&&(u+=e[f*3+0],d+=e[f*3+1],p+=e[f*3+2],g++)}const v=new Float32Array(n),m=new Array(l).fill(0);for(let f=0;f<n;f++){const x=c[f],M=h[x];v[f]=M>1?m[x]/(M-1):0,m[x]++}return{layerOf:c,delayFraction:v,layerCount:l,totalDuration:l*o,wave0Landing:g>0?[u/g,d/g,p/g]:[a[0],a[1],a[2]]}}const ue=[0,0,0],cv=.85;function gc(i,t){return i>=1?Je.ATTACHED:i<=0?Je.CORE:i>=cv&&t===Je.TRAVELING?Je.ASSEMBLING:t}function hv(i,t,e,n,s,r,o,a=Ha,l,c=Je.TRAVELING,h=null){const{layerOf:u,delayFraction:d,layerCount:p,wave0Landing:g}=n,v=av(o,p,a.layerDuration),m=o-v*a.layerDuration,f=v===1;for(let x=0;x<e;x++){const M=u[x];if(M<v)i[x*3+0]=t[x*3+0],i[x*3+1]=t[x*3+1],i[x*3+2]=t[x*3+2],l&&(l[x]=Je.ATTACHED);else if(M>v){const S=h?h[x*3+0]:s[0],R=h?h[x*3+1]:s[1],A=h?h[x*3+2]:s[2];i[x*3+0]=S,i[x*3+1]=R,i[x*3+2]=A,l&&(l[x]=Je.CORE)}else if(!h&&f&&m<a.packetDuration){const S=or(Math.min(Math.max(m/a.packetDuration,0),1));ar(S,x,a.packetSwirlTurns,a.packetSwirlMaxRadius,r,ue),i[x*3+0]=s[0]+(g[0]-s[0])*S+ue[0],i[x*3+1]=s[1]+(g[1]-s[1])*S+ue[1],i[x*3+2]=s[2]+(g[2]-s[2])*S+ue[2],l&&(l[x]=c)}else if(!h&&f){const R=(m-a.packetDuration-d[x]*a.burstStaggerSpan)/a.burstTravelDuration,A=or(Math.min(Math.max(R,0),1));ar(A,x,a.swirlTurns,a.swirlMaxRadius,r,ue),i[x*3+0]=g[0]+(t[x*3+0]-g[0])*A+ue[0],i[x*3+1]=g[1]+(t[x*3+1]-g[1])*A+ue[1],i[x*3+2]=g[2]+(t[x*3+2]-g[2])*A+ue[2],l&&(l[x]=gc(A,c))}else{const S=(m-d[x]*a.layerStaggerSpan)/a.travelDuration,R=or(Math.min(Math.max(S,0),1));ar(R,x,a.swirlTurns,a.swirlMaxRadius,r,ue);const A=h?h[x*3+0]:s[0],T=h?h[x*3+1]:s[1],P=h?h[x*3+2]:s[2];i[x*3+0]=A+(t[x*3+0]-A)*R+ue[0],i[x*3+1]=T+(t[x*3+1]-T)*R+ue[1],i[x*3+2]=P+(t[x*3+2]-P)*R+ue[2],l&&(l[x]=gc(R,c))}}}function uv(i,t,e,n,s,r,o,a,l,c,h){for(let u=0;u<r;u++)ar(l,u,c,h,a,ue),s[u]?(t[u*6+0]=o[0]+(n[u*6+0]-o[0])*l+ue[0],t[u*6+1]=o[1]+(n[u*6+1]-o[1])*l+ue[1],t[u*6+2]=o[2]+(n[u*6+2]-o[2])*l+ue[2],t[u*6+3]=o[0]+(n[u*6+3]-o[0])*l+ue[0],t[u*6+4]=o[1]+(n[u*6+4]-o[1])*l+ue[1],t[u*6+5]=o[2]+(n[u*6+5]-o[2])*l+ue[2]):(i[u*3+0]=o[0]+(e[u*3+0]-o[0])*l+ue[0],i[u*3+1]=o[1]+(e[u*3+1]-o[1])*l+ue[1],i[u*3+2]=o[2]+(e[u*3+2]-o[2])*l+ue[2])}const ri={CREATE_STRUCTURE:"CREATE_STRUCTURE",FILL_STRUCTURE:"FILL_STRUCTURE",APPLY_COLOR:"APPLY_COLOR",RETURN_TO_CORE:"RETURN_TO_CORE"},Ke={PENDING:"pending",RUNNING:"running",DONE:"done",CANCELLED:"cancelled"},_c={CREATE_STRUCTURE:"exoesqueleto",FILL_STRUCTURE:"relleno",APPLY_COLOR:"color",RETURN_TO_CORE:"repliegue"};function dv(){let i=[],t=1,e=1,n=1,s=!1;function r(o,a,l,c,h=-1){return{id:t++,type:o,clock:a,t0:l,t1:c,wave:h,status:Ke.PENDING}}return{get tasks(){return i},get active(){for(const o of i)if(o.status===Ke.RUNNING)return o;return null},planStructure(o){s=!1,i=[r(ri.CREATE_STRUCTURE,"microbot",0,o)]},planLayers(o){e=Math.max(1,o.layerCount),n=o.layerDuration,s=!1,i=i.filter(a=>a.clock!=="nanobot"),i.push(r(ri.FILL_STRUCTURE,"nanobot",0,n));for(let a=0;a<e-1;a++)i.push(r(ri.APPLY_COLOR,"nanobot",(a+1)*n,(a+2)*n,a))},planReturn(){s=!0;for(const o of i)(o.status===Ke.PENDING||o.status===Ke.RUNNING)&&(o.status=Ke.CANCELLED);i.push(r(ri.RETURN_TO_CORE,"nanobot",0,e*n))},clear(){i=[],s=!1},sync(o,a){for(const l of i){if(l.status===Ke.CANCELLED)continue;const c=l.clock==="microbot"?o:a;if(l.type===ri.RETURN_TO_CORE){l.status=a<=0&&o<=0?Ke.DONE:Ke.RUNNING;continue}s||(c>=l.t1?l.status=Ke.DONE:c>=l.t0?l.status=Ke.RUNNING:l.status=Ke.PENDING)}},nanobotLayerIndex(o){const a=Math.floor(o/n);return Math.min(Math.max(a,0),e-1)},isStructureDone(){for(const o of i)if(o.type===ri.CREATE_STRUCTURE)return o.status===Ke.DONE;return!1},describe(){return i.map(o=>`${o.type===ri.APPLY_COLOR?`${_c[o.type]} ${o.wave+1}`:_c[o.type]}: ${o.status}`)}}}const fv=3;function pv(i,t,e,n,s,r=Ji,o=Zi){const a=new Float32Array(t*3),l=new Map,c=[];for(let p=0;p<n;p++){const g=An(e[p*3+0],r,o),v=An(e[p*3+1],r,o),m=An(e[p*3+2],r,o);if(g<0||v<0||m<0){c.push(p);continue}const f=Ze(g,v,m,r),x=l.get(f);x?x.push(p):l.set(f,[p])}function h(p){const g=l.get(p);if(!g||g.length===0)return-1;const v=g.pop();return g.length===0&&l.delete(p),v}let u=0,d=0;for(let p=0;p<t;p++){const g=i[p*3+0],v=i[p*3+1],m=i[p*3+2],f=An(g,r,o),x=An(v,r,o),M=An(m,r,o);let S=-1;if(f>=0&&x>=0&&M>=0){S=h(Ze(f,x,M,r));for(let R=1;S<0&&R<=fv;R++)for(let A=-R;A<=R&&S<0;A++){const T=M+A;if(!(T<0||T>=r))for(let P=-R;P<=R&&S<0;P++){const L=x+P;if(!(L<0||L>=r))for(let _=-R;_<=R&&S<0;_++){if(Math.max(Math.abs(_),Math.abs(P),Math.abs(A))!==R)continue;const y=f+_;y<0||y>=r||(S=h(Ze(y,L,T,r)))}}}S>=0&&d++}if(S<0){for(;S<0&&u<c.length;)S=c[u++];if(S<0){const R=l.keys().next();R.done||(S=h(R.value))}}S<0?(a[p*3+0]=s[0],a[p*3+1]=s[1],a[p*3+2]=s[2]):(a[p*3+0]=e[S*3+0],a[p*3+1]=e[S*3+1],a[p*3+2]=e[S*3+2])}return{from:a,matchedNearby:d}}const vo=2.2,mv=1.5,gv=1.4,xo=Ha.layerDuration,vc=4e4,_v=[0,0,0],xc=new Map,Sh=.5,Mo=[!0,!0],Mc=[!0,!1];function vv(i){const{swarm:t,swarmMesh:e,microbotMesh:n,settings:s,reactorCenter:r,swirlAxes:o}=i,a=i.now??(()=>performance.now());let l=null,c=ma,h=new Uint8Array(0),u=new Uint8Array(s.count).fill(ye.DETAIL),d=new Float32Array(s.count*3),p=null,g="idle",v=0,m=0,f={layerOf:new Uint8Array(0),delayFraction:new Float32Array(0),layerCount:1,totalDuration:xo,wave0Landing:[...Vn]};const x=new Float32Array(i.maxNanobots*3),M=W0(),S=new Uint32Array(8),R=new Uint32Array(o0),A=dv();let T=null,P=null,L=null,_="hidden",y=Math.min(s.microbotCount,i.maxMicrobots),D=null,F=0;const V=new Float32Array(i.maxMicrobots*3),K=new Float32Array(i.maxMicrobots*6);let H=null,k=null,B=null;function rt(){D=t0(l??"",y,Vn)}function ot(C){if(!D)return;const{points:kt,relationSpans:yt,isBeam:Ct}=D;uv(V,K,kt,yt,Ct,y,r,o,C,mv,gv),n.updateFromPositions(V,y,Ct,K)}function at(C,kt=!1){p&&hv(x,p.points,m,f,r,o,C,Ha,M.state,kt?Je.RETURNING:Je.TRAVELING,P)}function Pt(){t.setParams({cohesion:s.cohesion,separation:s.separation,alignment:s.alignment,maxSpeed:s.maxSpeed,seekWeight:Sh})}function Ft(){t.setAgentTargets(n0(s.count,r)),u=new Uint8Array(s.count).fill(ye.DETAIL),d=new Float32Array(s.count*3),M.reset(s.count,u,d)}function j(C,kt,yt){const Ct=Fa(C);if(!Ct)return null;const Et=`${C}#${O_(C)}`;let $t=xc.get(Et);$t||($t=hc(Ct.generate(vc),vc,_v),xc.set(Et,$t));const It=hc(kt,yt,Vn),w=O0($t,It);return{fraction:w.coverage,covered:w.covered,total:w.target}}function tt(C,kt){const yt=e0(C,s.count,Vn,kt);yt&&(p=yt,u=yt.roles,d=yt.points,h=yt.colorWave,c=kt,m=s.count,f=lv(yt.roles,yt.colorWave,yt.points,s.count,yt.colorWaveCount,ye.COLOR,xo,Vn),M.adoptFormation({count:s.count,role:yt.roles,colorWave:yt.colorWave,layer:f.layerOf,delayFraction:f.delayFraction,target:yt.points}),P=L&&L.count>0?pv(yt.points,s.count,L.positions,L.count,r).from:null,L=null,T=j(C,yt.points,s.count),M.assignTypesFromRoles(ye.COLOR),A.planLayers({layerCount:f.layerCount,layerDuration:xo}),e.setColorClusters(yt.colorClusters))}function pt(){H=null,p=null,g="idle",v=0,Ft(),e.setVisible(!1),e.setSkeletonGrayscale(!1),l=null,D=null,_="hidden",F=0,n.setVisible(!1),A.clear(),T=null,P=null,L=null,Pt()}function ut(C,kt){k=a(),L=l!==null&&p!==null?{positions:x.slice(0,m*3),count:m,roles:u,colorWave:h,revealed:f.layerCount-1}:null,H=null,p=null,g="idle",v=0,Ft(),L||(e.setVisible(!1),e.setSkeletonGrayscale(!1)),l=C,c=kt??ma,H={shapeName:C,colorClusters:c},rt(),_!=="retracting"&&(F=0),_="launching",n.setVisible(!0),A.planStructure(vo),Pt()}function vt(){if(l===null){pt();return}l=null,H=null,(_==="launching"||_==="settled")&&(_="retracting"),(g==="forming"||g==="settled")&&(g="retracting"),A.planReturn()}function St(C){if(g==="retracting"){B=C;return}if(s.count=C,t.init(C),e.setCount(C),l&&!H){const kt=g==="settled";tt(l,c),kt&&(g="settled",v=f.totalDuration,at(v),e.setSkeletonGrayscale(f.layerCount>1),e.updateFromPositions(x,m,u,d,Mo,h,f.layerCount-1))}else Ft()}function Bt(C){y=Math.min(C,i.maxMicrobots),s.microbotCount=y,!(_!=="launching"&&_!=="settled")&&(rt(),_==="settled"&&ot(1))}function Vt(C){var kt;if(_==="launching"||_==="retracting")if(F=Math.min(Math.max(F+(_==="launching"?1:-1)*C,0),vo),ot(or(F/vo)),A.sync(F,v),_==="launching"&&A.isStructureDone()){if(_="settled",H){const{shapeName:Ct,colorClusters:Et}=H;H=null,tt(Ct,Et),g="forming",v=0,e.setVisible(!0)}}else _==="retracting"&&F<=0&&(_="hidden",D=null,n.setVisible(!1));if(g==="forming"||g==="retracting"){v=Math.min(Math.max(v+(g==="forming"?1:-1)*C,0),f.totalDuration),at(v,g==="retracting"),A.sync(F,v);const Ct=A.nanobotLayerIndex(v);if(e.setSkeletonGrayscale(Ct>=1),Mc[1]=Ct>=1,e.updateFromPositions(x,m,u,d,Mc,h,Ct),g==="forming"&&v>=f.totalDuration)g="settled",k!==null&&((kt=i.onFormationSettled)==null||kt.call(i,a()-k),k=null);else if(g==="retracting"&&v<=0){if(g="idle",p=null,T=null,P=null,L=null,e.setVisible(!1),B!==null){const Et=B;B=null,St(Et)}else Ft();Pt()}}else g==="idle"&&(t.step(C),L?e.updateFromPositions(L.positions,L.count,L.roles,L.positions,Mo,L.colorWave,L.revealed):e.updateFromPositions(t.getPositions(),t.getCount(),u,d,Mo,h,0))}const Nt={get nanobotPhase(){return g},get microbotPhase(){return _},get nanobotElapsed(){return v},get microbotElapsed(){return F},get nanobotAnimCount(){return m},get microbotCount(){return y},get currentShapeName(){return l},get stateCounts(){return M.countByState(S)},get coverage(){return T},get typeCounts(){if(M.countByType(R),_!=="hidden"&&D){let C=0;for(let kt=0;kt<y;kt++)D.isBeam[kt]&&C++;R[Kt.MICROBOT]+=y-C,R[Kt.UNION]+=C}return R},get forming(){return l!==null}};return St(s.count),pt(),{state:Nt,agents:M,director:A,step:Vt,formShape:ut,returnToCore:vt,setNanobotCount:St,setMicrobotCount:Bt,applyParams:Pt,renderPositions:x}}function xv(i,t={}){const e=t.maxDt??.05,n=t.now??(()=>performance.now()),s=t.schedule??(h=>requestAnimationFrame(h)),r=t.onError;let o=!1,a=0,l=0;function c(h){if(!(!o||h!==l))try{const u=n(),d=Math.min((u-a)/1e3,e);a=u,i(d)}catch(u){if(o=!1,r)r(u);else throw u}finally{o&&h===l&&s(()=>c(h))}}return{start(){if(o)return;o=!0,l++,a=n();const h=l;s(()=>c(h))},stop(){o=!1},get running(){return o}}}const Ii={near:14,mid:34},Ui=2.5;function Mv(i=me.MID){let t=i;return{get level(){return t},update(e){let n;return t===me.NEAR?n=e>Ii.near+Ui?e>Ii.mid+Ui?me.FAR:me.MID:me.NEAR:t===me.FAR?n=e<Ii.mid-Ui?e<Ii.near-Ui?me.NEAR:me.MID:me.FAR:e<Ii.near-Ui?n=me.NEAR:e>Ii.mid+Ui?n=me.FAR:n=me.MID,n===t?!1:(t=n,!0)}}}const yv=.8,Sv=32;function Ev(i){const{camera:t,controls:e}=i;let n=!1,s=e.minDistance,r=t.fov;function o(){var l;n||(n=!0,s=e.minDistance,r=t.fov,e.minDistance=yv,t.fov=Sv,t.updateProjectionMatrix(),(l=i.onChange)==null||l.call(i,!0))}function a(){var l;n&&(n=!1,e.minDistance=s,t.fov=r,t.updateProjectionMatrix(),(l=i.onChange)==null||l.call(i,!1))}return{get active(){return n},enter:o,exit:a,toggle(){return n?a():o(),n}}}function yo(i,t,e=6){const n=new qn(i,i,t,e,1,!1);return n.rotateX(Math.PI/2),n}function bv(i){const t=new Cn,e=mn(i),n=new Yn({color:e.identityColor,emissive:e.identityEmissive,emissiveIntensity:.6,metalness:.65,roughness:.35}),s=new Yn({color:1711394,metalness:.8,roughness:.45}),r=new Yn({color:e.identityColor,emissive:e.identityColor,emissiveIntensity:1.4,metalness:.2,roughness:.3}),o=.55+ph(i).relativeSize*.12,a=new re(yo(o,o*.52),s);t.add(a);const l=new re(yo(o*.78,o*.62),n);switch(t.add(l),i){case Kt.MICROBOT:{for(let c=0;c<6;c++){const h=c/6*Math.PI*2,u=new re(new Xn(o*.16,o*.16,o*.66),s);u.position.set(Math.cos(h)*o*.9,Math.sin(h)*o*.9,0),u.rotation.z=h,t.add(u)}break}case Kt.NANOBOT:{const c=new re(yo(o*.84,o*.16),r);t.add(c);break}case Kt.UNION:{for(let c=0;c<6;c++){const h=c/6*Math.PI*2,u=new re(new qn(o*.17,o*.11,o*.5,6),n);u.position.set(Math.cos(h)*o*1.08,Math.sin(h)*o*1.08,0),u.rotation.z=-h+Math.PI/2,t.add(u);const d=new re(new _r(o*.17,o*.045,6,12),r);d.position.copy(u.position),d.rotation.y=Math.PI/2,d.rotation.z=h,t.add(d)}break}case Kt.REPAIR:{const c=new Xn(o*.95,o*.26,o*.2),h=new re(c,r);h.position.z=o*.34,t.add(h);const u=new re(c,r);u.position.z=o*.34,u.rotation.z=Math.PI/2,t.add(u);for(const d of[-1,1]){const p=new re(new Xn(o*.2,o*.42,o*.3),s);p.position.set(d*o*1,0,0),t.add(p)}break}case Kt.TRANSFORM:{for(let c=0;c<3;c++){const h=new re(new _r(o*(.95+c*.16),o*.06,6,18),c%2?r:n);h.rotation.x=c*Math.PI/5,h.rotation.y=c*Math.PI/3,t.add(h)}break}case Kt.MATERIAL:{for(let c=0;c<6;c++){const h=c/6*Math.PI*2,u=new re(new Da(o*.13,o*.34,6),r);u.position.set(Math.cos(h)*o*.72,Math.sin(h)*o*.72,o*.4),u.rotation.x=Math.PI/2,t.add(u)}break}}return t}function Av(){const i=document.createElement("canvas"),t=new nh({canvas:i,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new ih,n=new Be(38,1,.1,50);n.position.set(0,1.6,4.4),n.lookAt(0,0,0),e.add(new ah(16777215,.55));const s=new da(16777215,1.5);s.position.set(3,4,5),e.add(s);const r=new da(8961023,.8);r.position.set(-4,-2,-3),e.add(r);const o=new Cn;e.add(o);let a=null;function l(){a&&(o.remove(a),a.traverse(c=>{const h=c;if(!h.isMesh)return;h.geometry.dispose();const u=h.material;Array.isArray(u)?u.forEach(d=>d.dispose()):u.dispose()}),a=null)}return{canvas:i,show(c){l(),a=bv(c),o.add(a)},render(c){o.rotation.y+=c*.6,t.render(e,n)},setSize(c,h){c<=0||h<=0||(t.setSize(c,h,!1),n.aspect=c/h,n.updateProjectionMatrix())},dispose(){l(),t.dispose()}}}const So="no disponible en esta fase";function sn(i,t,e=!1){const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.gap="10px",n.style.padding="2px 0";const s=document.createElement("span");s.textContent=i,s.style.opacity="0.55",s.style.flex="0 0 auto";const r=document.createElement("span");return r.textContent=t,r.style.textAlign="right",r.style.opacity=e?"0.4":"0.95",e&&(r.style.fontStyle="italic"),n.append(s,r),n}function Tv(){const i=document.createElement("div");i.style.cssText=["position:fixed","left:12px","bottom:12px","width:300px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","backdrop-filter:blur(6px)"].join(";");const t=document.createElement("div");t.style.cssText="display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.1)";const e=document.createElement("strong");e.textContent="Inspección de bots",e.style.flex="1 1 auto";const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:none;border:none;color:inherit;cursor:pointer;font-size:13px;opacity:0.6",t.append(e,n),i.appendChild(t);const s=document.createElement("div");s.style.cssText="display:flex;flex-wrap:wrap;gap:4px;padding:8px 10px",i.appendChild(s);const r=Av();r.canvas.style.cssText="width:100%;height:170px;display:block",i.appendChild(r.canvas);const o=document.createElement("div");o.style.cssText="padding:8px 10px 10px",i.appendChild(o);let a=dn[0].type,l=!1,c=null;const h=[];function u(){const g=ph(a);o.textContent="";const v=document.createElement("div");v.textContent=g.name,v.style.cssText="font-size:14px;font-weight:600;margin-bottom:4px",v.style.color=`#${mn(g.type).identityColor.toString(16).padStart(6,"0")}`,o.appendChild(v),o.appendChild(sn("Rol",g.role)),o.appendChild(sn("Función",g.fn)),o.appendChild(sn("Forma","Hexágono")),o.appendChild(sn("Tamaño relativo",`${g.relativeSize.toFixed(1)}× Nanobot`)),o.appendChild(sn("Color de identidad",`#${mn(g.type).identityColor.toString(16).padStart(6,"0")}`)),o.appendChild(sn("Recibe material",g.acceptsObjectMaterial?"sí":"no — conserva su color estructural"));const m=c?c[g.type]??0:0;if(o.appendChild(g.implemented?sn("En el enjambre",`${m} agentes`):sn("En el enjambre","sin agentes",!0)),o.appendChild(sn("Material aplicado",So,!0)),o.appendChild(sn("Energía",So,!0)),o.appendChild(sn("Conexiones",So,!0)),!g.implemented&&g.pendingReason){const f=document.createElement("div");f.textContent=g.pendingReason,f.style.cssText="margin-top:6px;font-size:11px;opacity:0.45;line-height:1.4",o.appendChild(f)}}function d(g){a=g,h.forEach((v,m)=>{const f=dn[m].type===g;v.style.opacity=f?"1":"0.5",v.style.borderWidth=f?"2px":"1px"}),r.show(g),u()}for(const g of dn){const v=document.createElement("button");v.textContent=g.name.replace(" Bot","");const m=`#${mn(g.type).identityColor.toString(16).padStart(6,"0")}`;v.style.cssText=["flex:1 1 auto","min-width:74px","padding:3px 6px","cursor:pointer","background:rgba(255,255,255,0.05)",`border:1px solid ${m}`,"border-radius:4px",`color:${m}`,"font:11px system-ui,sans-serif"].join(";"),v.addEventListener("click",()=>d(g.type)),s.appendChild(v),h.push(v)}function p(g){l=g,i.style.display=g?"block":"none",g&&(r.setSize(i.clientWidth,170),d(a))}return n.addEventListener("click",()=>p(!1)),d(a),{element:i,get open(){return l},setOpen:p,render(g){l&&r.render(g)},setCounts(g){c=g},dispose(){r.dispose(),i.remove()}}}const Gn={STRUCTURE:0,CONNECTION:1,DETAIL:2,MATERIAL:3},yc=[{layer:Gn.STRUCTURE,name:"Estructura (Microbots)",hint:"Nodos del exoesqueleto"},{layer:Gn.CONNECTION,name:"Conexiones (Union Bots)",hint:"Vigas que unen los nodos"},{layer:Gn.DETAIL,name:"Detalle (Nanobots)",hint:"Relleno de superficie"},{layer:Gn.MATERIAL,name:"Material (Material Bots)",hint:"Color y acabado del objeto"}];function wv(i){const t=yc.map(()=>!0);let e=0;const n=document.createElement("div");n.style.cssText=["position:fixed","left:12px","top:12px","width:250px","background:rgba(14,16,20,0.92)","border:1px solid rgba(255,255,255,0.12)","border-radius:6px","color:#e8ecf2","font:12px/1.5 system-ui,sans-serif","z-index:20","display:none","padding:8px 10px","backdrop-filter:blur(6px)"].join(";");const s=document.createElement("strong");s.textContent="Capas de construcción",s.style.cssText="display:block;margin-bottom:6px",n.appendChild(s);const r={get visible(){return t},get explode(){return e}};for(const h of yc){const u=document.createElement("label");u.style.cssText="display:flex;align-items:center;gap:6px;padding:1px 0;cursor:pointer";const d=document.createElement("input");d.type="checkbox",d.checked=!0,d.addEventListener("change",()=>{t[h.layer]=d.checked,i.onChange(r)});const p=document.createElement("span");p.textContent=h.name,p.title=h.hint,u.append(d,p),n.appendChild(u)}const o=document.createElement("div");o.style.cssText="margin-top:8px;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px";const a=document.createElement("div");a.textContent="Ver capas (separar)",a.style.opacity="0.75";const l=document.createElement("input");l.type="range",l.min="0",l.max="12",l.step="0.5",l.value="0",l.style.width="100%",l.addEventListener("input",()=>{e=Number(l.value),i.onChange(r)});const c=document.createElement("div");return c.textContent="Sólo afecta cómo se dibuja: la simulación no cambia.",c.style.cssText="font-size:10px;opacity:0.45;line-height:1.35;margin-top:2px",o.append(a,l,c),n.appendChild(o),{element:n,state:r,setOpen(h){n.style.display=h?"block":"none"},dispose(){n.remove()}}}const Sc=6e4,Ec=6e4,Cv={count:3e3,microbotCount:4e3,cohesion:.8,separation:1.5,alignment:.6,maxSpeed:4,seekWeight:Sh};async function Rv(){const i=document.getElementById("app"),{scene:t,camera:e,renderer:n,composer:s,controls:r}=a_(i),o=iv();window.__nanobotMetrics=o,n.info.autoReset=!1;const a=p0(Sc);t.add(a.group);const l=x0(Ec);l.setVisible(!1),t.add(l.group);const c=E0();t.add(c.group);const h=c.position.toArray(),u=rv(h,Vn),d=new y0;await d.load();const p={...Cv},g=await fc();g&&Object.assign(p,g);const v=vv({swarm:d,swarmMesh:a,microbotMesh:l,settings:p,reactorCenter:h,swirlAxes:u,maxNanobots:Sc,maxMicrobots:Ec,onFormationSettled:k=>o.mark("formacionMs",k)}),m=X0(p,{onCountChange:k=>v.setNanobotCount(k),onParamsChange:()=>v.applyParams(),onSave:async k=>{await nv(k)},onLoad:async()=>{const k=await fc();k&&(Object.assign(p,k),v.setNanobotCount(p.count),v.applyParams(),m.controllersRecursive().forEach(B=>B.updateDisplay()))},onFormShape:(k,B)=>v.formShape(k,B),onReturnToCore:()=>v.returnToCore(),onMicrobotCountChange:k=>v.setMicrobotCount(k)}),f=Y0(m),x=()=>v.state.stateCounts,M=$0(m),S=()=>v.director,R=q0(m),A=()=>v.state.coverage,T=K0(m),P=()=>v.state.typeCounts,L=Mv();a.setLodLevel(L.level);const _=Tv();document.body.appendChild(_.element);const y={visible:[!0,!0,!0,!0],explode:0};function D(k){const B=k.explode;l.setLayerDisplay({visible:k.visible[Gn.STRUCTURE],offsetY:-1.5*B},{visible:k.visible[Gn.CONNECTION],offsetY:-.5*B}),a.setLayerDisplay({visible:k.visible[Gn.DETAIL],offsetY:.5*B},{visible:k.visible[Gn.MATERIAL],offsetY:1.5*B})}const F=wv({onChange:D});document.body.appendChild(F.element),D(y);const V=Ev({camera:e,controls:r,onChange:k=>{k?a.setLodLevel(me.NEAR):a.setLodLevel(L.level)}});let K=!1;Z0(m,{onToggleZoom:()=>V.toggle(),onToggleInspector:()=>(_.setOpen(!_.open),_.open),onToggleLayers:()=>(K=!K,F.setOpen(K),K)}),xv(k=>{const B=performance.now();n.info.reset(),c.update(k),r.update(),L.update(r.getDistance())&&!V.active&&a.setLodLevel(L.level),v.step(k),s.render(),o.sampleFrame(performance.now()-B),o.setAgentCounts(v.state.nanobotPhase==="idle"?d.getCount():v.state.nanobotAnimCount,v.state.microbotPhase==="hidden"?0:v.state.microbotCount),o.setRenderInfo(n.info.render.calls,n.info.render.triangles),f(x),M(S),R(A),T(P),_.setCounts(v.state.typeCounts),_.render(k)},{onError:k=>console.error("Error en el loop de animación; se detiene el render:",k)}).start()}Rv().catch(i=>{console.error("Error inicializando el simulador de nanobots:",i)});
