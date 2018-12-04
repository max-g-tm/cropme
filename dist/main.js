!function(e){var t={};function r(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),function(e){r(2);!function(t){const i=r(3);function o(){return"translate("+this.properties.x+"px,"+this.properties.y+"px) scale("+this.properties.scale+") rotate("+this.properties.deg+"deg)"}function s(){(function(){const e=document.createElement("div");e.classList.add("cropme-container"),e.style.width=this.options.container.width+"px",e.style.height=this.options.container.height+"px",this.properties.container=e,this.properties.wrapper.appendChild(e)}).call(this),function(){const e=document.createElement("div");e.classList.add("cropme-slider");const t=this.properties.slider=document.createElement("input");t.type="range",t.setAttribute("min",this.options.zoom.min),t.setAttribute("max",this.options.zoom.max),t.setAttribute("step",1e-6),t.style.width=this.options.container.width+"px",e.appendChild(t),this.properties.wrapper.appendChild(e)}.call(this),function(){this.properties.image||(this.properties.image=new Image),this.properties.image.ondragstart=(()=>!1),this.properties.container.appendChild(this.properties.image)}.call(this),function(){const e=this.properties.viewport=document.createElement("div"),t=this.options;if(t.viewport.width=t.viewport.width>t.container.width?t.container.width:t.viewport.width,t.viewport.height=t.viewport.height>t.container.height?t.container.height:t.viewport.height,e.style.width=t.viewport.width+"px",e.style.height=t.viewport.height+"px",e.className="viewport","circle"===t.viewport.type&&(e.className="viewport circle"),t.viewport.border.enable){let e=(t.container.width-t.viewport.width)/2;t.viewport.border.width=e<t.viewport.border.width?e:t.viewport.border.width}else t.viewport.border.width=0;this.properties.viewport.style.borderWidth=t.viewport.border.width+"px",this.properties.viewport.style.borderColor=t.viewport.border.color,this.properties.container.appendChild(e)}.call(this);let e,t,r=0,i=0,s=this,n=function(o){o.preventDefault();let n=o.pageX,a=o.pageY;if(o.touches){let e=o.touches[0];n=e.pageX,a=e.pageY}r=s.properties.x||r,i=s.properties.y||i,e=n-r,t=a-i,document.addEventListener("mousemove",p),document.addEventListener("touchmove",p)};s.properties.image.addEventListener("mousedown",n),s.properties.image.addEventListener("touchstart",n);let p=function(r){r.preventDefault();let i=r.pageX,n=r.pageY;if(r.touches){let e=r.touches[0];i=e.pageX,n=e.pageY}if(r.touches&&r.touches.length>1){let e=r.touches[1],t=i-e.pageX,o=n-e.pageY,p=90-180*Math.atan2(t,o)/Math.PI;s.properties.odeg||(s.properties.odeg=p-s.properties.deg),s.properties.deg=p-s.properties.odeg;let a=Math.sqrt(Math.pow(t,2)+Math.pow(o,2));s.properties.od||(s.properties.od=a/s.properties.scale),s.properties.scale=s.properties.slider.value=a/s.properties.od}else s.properties.x=i-e,s.properties.y=n-t;s.properties.image.style.transform=o.call(s)},a=function(){document.removeEventListener("touchmove",p),document.removeEventListener("mousemove",p),s.properties.od=0,s.properties.odeg=0};document.addEventListener("mouseup",a),document.addEventListener("touchend",a),s.properties.slider.addEventListener("input",function(e){s.properties.scale=parseFloat(e.target.value),s.properties.image.style.transform=o.call(s)});if(s.properties.container.addEventListener("mousewheel",function(e){e.preventDefault();let t=s.properties.scale+e.wheelDelta/1200*s.properties.scale;t>s.options.zoom.min&&t<s.options.zoom.max&&s.options.zoom.mouseWheel&&(s.properties.scale=s.properties.slider.value=t,s.properties.image.style.transform=o.call(s))}),!s.options.zoom.slider){let e=this.properties.slider.parentNode;s.properties.wrapper.removeChild(e)}}window.jQuery&&(jQuery.fn.cropme=function(e,t){if("object"==typeof e)return this.each(function(){var t=new n(this,e);$(this).data("cropme",t)});if("string"==typeof e){let r=this.data("cropme");if("position"===e)return r.position();if("bind"===e)return r.bind(t);if("export"===e)return r.export(t);if("rotate"===e)return r.rotate(t);if("destroy"===e)return r.destroy();throw"Error: "+e+" method not found"}throw"Error: the argument must be an object or a string"});class n{constructor(e,t){if(e.className.indexOf("cropme-wrapper")>-1)throw"Error: Cropme is already initialized";this.properties={},this.options=i(p,t),this.properties.wrapper=e,"img"===e.tagName.toLowerCase()&&(this.properties.image=new Image,this.properties.image.src=e.src,this.properties.wrapper=document.createElement("div"),e.parentNode.insertBefore(this.properties.wrapper,e.previousSibling),e.parentNode.removeChild(e)),this.properties.wrapper.className+="cropme-wrapper "+this.options.customClass,s.call(this),this.properties.image.src&&this.bind({url:this.properties.image.src})}bind(e){this.properties.image.src=e.url;let t=this.properties,r=this.options,i=this;this.properties.image.onload=function(){let s=t.image.getBoundingClientRect(),n=t.container.getBoundingClientRect(),p=(n.width-s.width)/2,a=(n.height-s.height)/2;t.ox=p,t.oy=a,"object"==typeof e.position&&(p=e.position.x||p,a=e.position.y||a);let l=e.scale?e.scale:n.height/s.height;if(r.zoom.max<=r.zoom.min)throw"Error: max zoom cannot be less or equal to min zoom";l<r.zoom.min&&(l=r.zoom.min),l>r.zoom.max&&(l=r.zoom.max),t.x=p,t.y=a,t.scale=l,t.slider.value=l,t.deg=e.deg||0,t.image.style.transform=o.call(i),t.image.style.opacity=1}}rotate(e){this.properties.deg=e,this.properties.image.style.transform=o.call(this)}export(e){let t=function(e){let t=document.createElement("canvas"),r=t.getContext("2d"),i=this.options.viewport.width,s=this.options.viewport.height;"object"==typeof e&&(e.scale?(i*=e.scale,s*=e.scale):e.width&&(s=e.width*s/i,i=e.width)),t.width=i,t.height=s;const n=i/this.options.viewport.width,p=s/this.options.viewport.height,a=this.properties.deg,l=this.properties.x,c=this.properties.y;function h(e,t,r){this.properties.deg=e,this.properties.x=t,this.properties.y=r,this.properties.image.style.transform=o.call(this)}0!==a&&h.call(this,0,this.properties.ox,this.properties.oy);const d=this.properties.image.getBoundingClientRect(),u=this.properties.viewport.getBoundingClientRect(),m=n*(d.x-u.x-this.options.viewport.border.width),f=p*(d.y-u.y-this.options.viewport.border.width);if(0!==a&&(r.translate((l-this.properties.x)*n,(c-this.properties.y)*p),r.translate(i/2,s/2),r.rotate(a*Math.PI/180),r.translate(-i/2,-s/2)),r.drawImage(this.properties.image,m,f,d.width*n,d.height*p),"circle"===this.options.viewport.type){r.translate(i/2,s/2),r.rotate(-a*Math.PI/180),r.translate(-i/2,-s/2),r.scale(1,this.options.viewport.height/this.options.viewport.width);let e=(this.options.viewport.width-this.options.viewport.height)/2*n,t=(this.properties.x-l)*n,o=(this.properties.y-c)*p;e>0?o=e+2*o:e<0&&(o=e+o/2),r.translate(t,o),r.globalCompositeOperation="destination-in",r.arc(i/2,s/2,i/2,0,2*Math.PI),r.fill()}return"triangle"===this.options.viewport.type&&(r.translate(i/2,s/2),r.rotate(-a*Math.PI/180),r.translate(-i/2,-s/2),r.translate((this.properties.x-l)*n,(this.properties.y-c)*p),r.beginPath(),r.globalCompositeOperation="destination-in",r.moveTo(i/2,0),r.lineTo(i,s),r.lineTo(0,s),r.closePath(),r.fill()),h.call(this,a,l,c),t}.call(this,e);return e="object"==typeof e?e.type:e,new Promise(r=>{"blob"===e?t.toBlob(e=>r(URL.createObjectURL(e))):r(t.toDataURL())})}position(){return{x:this.properties.x,y:this.properties.y,scale:this.properties.scale,deg:parseInt(this.properties.deg)}}destroy(){this.properties.wrapper.innerHTML="",this.properties.wrapper.className=this.properties.wrapper.className.replace("cropme-wrapper",""),delete this.options,delete this.properties}}const p={container:{width:300,height:300},viewport:{width:100,height:100,border:{enable:!0,width:2,color:"#fff"}},zoom:{min:.01,max:3,enable:!0,mouseWheel:!0,slider:!0},customClass:""};"object"==typeof e.exports?e.exports=n:"function"==typeof define&&r(4)?define([],function(){return n}):t.Cropme=n}(window)}.call(this,r(1)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){},function(e,t,r){e.exports=function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){for(var r=arguments.length,n=Array(r>1?r-1:0),p=1;p<r;p++)n[p-1]=arguments[p];if(!n.length)return t;var a=n.shift();if((0,o.isObject)(t)&&(0,o.isObject)(a))for(var l in a)(0,o.isObject)(a[l])?(t[l]||Object.assign(t,i({},l,{})),e(t[l],a[l])):(0,s.isArray)(a[l])?(t[l]||Object.assign(t,i({},l,[])),t[l]=t[l].concat(a[l])):Object.assign(t,i({},l,a[l]));return e.apply(void 0,[t].concat(n))};var o=r(1),s=r(2);e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isObject=function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=function(e){return e&&Array.isArray(e)}}])},function(e,t){(function(t){e.exports=t}).call(this,{})}]);