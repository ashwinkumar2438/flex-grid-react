(this["webpackJsonpflex-grid-react"]=this["webpackJsonpflex-grid-react"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r,i,s=n(0),a=n.n(s),o=n(12),c=n.n(o),l=(n(29),n(2)),u=n(3),d=n(5),v=n(17),h=(n(30),n(1)),f=function(e){var t=e.value,n=void 0===t?{value:0,id:""}:t,r=e.unit,i=void 0===r?"%":r,a=e.maximum,o=void 0===a?100:a,c=e.onChange,l=Object(s.useRef)(),u=Object(s.useCallback)((function(e){var t=e.target.getAttribute("progress"),r={value:Math.ceil(t*o/100),id:n.id};null===c||void 0===c||c(r)}),[c,o,n.id]);return Object(s.useEffect)((function(){if(l.current){var e=l.current;return e.addEventListener("seekchange",u),function(){e.removeEventListener("seekchange",u)}}}),[u]),Object(h.jsxs)("div",{className:"slider-wrapper",children:[Object(h.jsx)("div",{className:"current-value",children:Object(h.jsx)("span",{children:n.value+i})}),Object(h.jsx)("slide-bar",{progress:n.value/o*100,ref:l})]})},p=(n(32),["type"]),b=[{label:"flex",value:"flex"},{label:"grid",value:"grid"}],m=function(e){var t=e.type,n=Object(d.a)(e,p);return"slider"===t?Object(h.jsx)(f,Object(u.a)({},n)):Object(h.jsx)(v.a,Object(u.a)({},n))},j=function(e){var t,n=e.displayType,r=e.setDisplayType,i=e.parentForm,a=e.setParentForm,o=e.childrenForm,c=void 0===o?[]:o,d=e.setChildrenForm,p=e.setChildCount,j=Object(s.useState)({label:1,value:0}),g=Object(l.a)(j,2),O=g[0],y=g[1],x=c.map((function(e,t){return{label:t+1,value:t}})),E=Object(s.useCallback)((function(e){a(e.id,e)}),[a]),w=Object(s.useCallback)((function(e){console.log(e),d([O.value],e.id,e)}),[O.value,d]),k=Object(s.useCallback)((function(e){var t=e.value;p(t)}),[p]);return Object(h.jsxs)("div",{className:"main-form",children:[Object(h.jsx)("h2",{className:"heading",children:"Display"}),Object(h.jsxs)("div",{className:"parent-form",children:[Object(h.jsx)("label",{htmlFor:"display-type",className:"form-label",children:" Display Type"}),Object(h.jsx)(v.a,{options:b,value:b.find((function(e){var t=e.value;return n===t})),onChange:function(e){var t=e.value;r(t)}})]}),Object(h.jsx)("h3",{className:"heading",children:"Parent Form"}),Object(h.jsx)("div",{className:"parent-form",children:i.map((function(e){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("label",{htmlFor:e.id,className:"form-label",children:e.label}),Object(h.jsx)(m,Object(u.a)(Object(u.a)({},e.props),{},{type:e.type,value:e.value,className:"form-input",onChange:E}))]},e.id)}))}),Object(h.jsx)("h3",{className:"heading",children:"Children Form"}),Object(h.jsxs)("div",{className:"child-form common-form",children:[Object(h.jsx)("label",{htmlFor:"child-count"}),Object(h.jsx)(f,{maximum:20,unit:"",value:{value:c.length},onChange:k}),Object(h.jsx)("label",{htmlFor:"select-child",className:"form-label"}),Object(h.jsx)(v.a,{id:"select-child",value:O,options:x,onChange:y})]}),Object(h.jsxs)("h4",{className:"heading",children:["Child : ",O.label]}),Object(h.jsx)("div",{className:"child-form",children:null===(t=c[O.value])||void 0===t?void 0:t.map((function(e){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("label",{htmlFor:e.id,className:"form-label",children:e.label}),Object(h.jsx)(m,Object(u.a)(Object(u.a)({},e.props),{},{type:e.type,value:e.value,className:"form-input",onChange:w}))]},e.id)}))})]})},g=n(4),O=["mousedown","touchstart"],y=null!==(r=null===(i=document.body)||void 0===i?void 0:i.clientWidth)&&void 0!==r?r:window.screen.availWidth,x=y>500?"flexBasis":"width",E=y>500?.9:1,w=y>1200?70:y>800?50:y>500?30:100,k=function(){var e=Object(s.useState)(w),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(s.useRef)(),a=Object(s.useRef)(),o=Object(s.useRef)({active:!1}),c=Object(s.useCallback)((function(e){var t=e.type,n=O.includes(t);o.current.active=n,n&&e.preventDefault()}),[]),u=Object(s.useCallback)((function(e){var t;if(o.current.active&&i.current.current){var n=e.type.includes("touch")?e.touches[0]?e.touches[0].clientX:(null===(t=e.changedTouches)||void 0===t?void 0:t.length)?e.changedTouches[e.changedTouches.length-1].clientX:null:e.clientX,s=i.current.current.getBoundingClientRect(),a=s.left,c=s.right,l=(c-n)/(c-a);r(100*(l=l<.1?.1:l>E?E:l))}}),[]),d=Object(s.useCallback)((function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e instanceof HTMLElement){var n=t?"addEventListener":"removeEventListener";document[n]("mousemove",u),e[n]("mousedown",c),document[n]("mouseup",c),document[n]("touchmove",u),e[n]("touchstart",c),document[n]("touchend",c)}}),[u,c]),v=Object(s.useCallback)((function(e){e&&a.current!==e&&(a.current&&d(a.current,!1),a.current=e,d(e))}),[d]);return[Object(g.a)({},x,"".concat(n,"%")),function(e){return i.current=e,{ref:v}}]},C=n(9),P=n(20),L=function(e){var t,n=Object(P.a)(e);try{var r=function(){var e=t.value;"select"===e.type&&(e.props.options=e.props.options.map((function(t){return{value:t,label:t,id:e.id}})),e.value=e.props.options.find((function(t){return t.value===e.value}))),"slider"===e.type&&(e.value={value:e.value,label:e.value,id:e.id})};for(n.s();!(t=n.n()).done;)r()}catch(i){n.e(i)}finally{n.f()}return e},N=function(e){var t,n={},r=Object(P.a)(e);try{for(r.s();!(t=r.n()).done;){var i,s,a=t.value;n[a.id]=a.value.value+(null!==(i=null===(s=a.props)||void 0===s?void 0:s.unit)&&void 0!==i?i:"")}}catch(o){r.e(o)}finally{r.f()}return n},_=function(e){return e.map((function(e){return Object(u.a)({},e)}))},F=function(e,t){return Object(C.a)(Array(e)).map((function(){return _(t)}))},T=(n(49),function(e){var t=e.appRef,n=e.displayType,r=void 0===n?"flex":n,i=e.parentForm,s=void 0===i?[]:i,a=e.childrenForm,o=void 0===a?[]:a,c=k(),d=Object(l.a)(c,2),v=d[0],f=d[1];return Object(h.jsxs)("div",{className:"main-container",style:v,children:[Object(h.jsx)("div",Object(u.a)({className:"dragger"},f(t))),Object(h.jsx)("div",{className:"parent-box",style:Object(u.a)({display:r},N(s)),children:o.map((function(e,t){return Object(h.jsx)("div",{className:"child-box child-".concat(t+1),style:N(e),children:t+1},t)}))})]})}),R={flex:L([{id:"flexBasis",type:"slider",label:"flex-basis",value:20,props:{maximum:100,unit:"%"}},{id:"flexGrow",type:"select",label:"flex-grow",value:"1",props:{options:["0","1","2","3"]}}]),grid:L([{id:"gridColumnStart",type:"select",label:"grid-column-start",value:"auto",props:{options:["auto","-1","-2","-3","1","2","3","4","5"]}},{id:"gridColumnEnd",type:"select",label:"grid-column-end",value:"auto",props:{options:["auto","-1","-2","-3","1","2","3","4","5"]}}])},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flex",t=Object(s.useRef)(null),n=Object(s.useRef)(e),r=Object(s.useState)([]),i=Object(l.a)(r,2),a=i[0],o=i[1],c=Object(s.useState)(5),d=Object(l.a)(c,2),v=d[0],h=d[1];Object(s.useEffect)((function(){if(n.current!==e){var r=a;t.current?o(t.current):o(F(v,R[e])),n.current=e,t.current=r.length?r:null}}),[e,v,a]),Object(s.useEffect)((function(){if(v!==a.length)if(v<a.length)o((function(e){return e.slice(0,v)}));else{var e=Object(C.a)(Array(v-a.length)).map((function(){return _(R[n.current])}));o((function(t){return[].concat(Object(C.a)(t),Object(C.a)(e))}))}}),[v,a]);var f=Object(s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;console.log(e,t,n),o((function(r){return r.map((function(r,i){return e.includes(i)?r.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{value:n}):e})):r}))}))}),[o]);return[a,f,h]},z={flex:L([{id:"flexDirection",type:"select",label:"flex-direction",value:"row",props:{options:["row","column","row-reverse"]}},{id:"flexWrap",type:"select",label:"flex-wrap",value:"wrap",props:{options:["wrap","nowrap","wrap-reverse"]}}]),grid:L([{id:"gridTemplateColumns",type:"select",label:"grid-template-columns",value:"repeat( 3, 1fr )",props:{options:["repeat( 3, 1fr )","auto 100px","repeat( autofill, 100px )"]}},{id:"gridTemplateRows",type:"select",label:"grid-template-rows",value:"repeat( 3, 1fr )",props:{options:["repeat( 3, 1fr )","auto 100px","repeat( autofill, 100px )"]}}])},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flex",t=Object(s.useRef)(null),n=Object(s.useRef)(),r=Object(s.useState)([]),i=Object(l.a)(r,2),a=i[0],o=i[1];Object(s.useEffect)((function(){if(n.current!==e){var r=a;t.current?o(t.current):o(_(z[e])),n.current=e,t.current=r.length?r:null}}),[e,a]);var c=function(e,t){o((function(n){return n.map((function(n){return n.id===e?Object(u.a)(Object(u.a)({},n),{},{value:t}):n}))}))};return[a,c]};n(50);var H=function(){var e=Object(s.useRef)(),t=Object(s.useState)("flex"),n=Object(l.a)(t,2),r=n[0],i=n[1],a=A(r),o=Object(l.a)(a,2),c=o[0],u=o[1],d=S(r),v=Object(l.a)(d,3),f=v[0],p=v[1],b=v[2];return Object(h.jsxs)("div",{className:"app",ref:e,children:[Object(h.jsx)(j,{displayType:r,setDisplayType:i,parentForm:c,setParentForm:u,childrenForm:f,setChildrenForm:p,setChildCount:b}),Object(h.jsx)(T,{appRef:e,displayType:r,parentForm:c,childrenForm:f})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),s(e),a(e)}))},B=n(6),D=n(7),X=n(8),W=n(23),I=n(24),J=function(e){Object(X.a)(n,e);var t=Object(W.a)(n);function n(){var e;return Object(B.a)(this,n),(e=t.call(this)).rendered=!1,e.attachShadow({mode:"open"}),e.detail={position:0},e.progressEvent=new CustomEvent("progresschange",{bubbles:!1,cancelable:!0}),e.seekEvent=new CustomEvent("seekchange",{bubbles:!1,cancelable:!0,detail:e.detail}),e.mouseHoverEvent=new CustomEvent("mousehover",{bubbles:!1,cancelable:!0,detail:e.detail}),e}return Object(D.a)(n,[{key:"connectedCallback",value:function(){this.render()}},{key:"disconnectedCallback",value:function(){document.removeEventListener("mousemove",this._setPosition),document.removeEventListener("mouseup",this._freezePosition),document.removeEventListener("mouseleave",this._freezePosition),document.removeEventListener("touchmove",this._setPosition),document.removeEventListener("touchend",this._freezePosition),document.removeEventListener("touchcancel",this._freezePosition)}},{key:"attributeChangedCallback",value:function(e,t,n){switch(e){case"progress":this._updateAttribute(n,"progress");break;case"buffer-start":this._updateAttribute(n,"buffer-start");break;case"buffer-end":this._updateAttribute(n,"buffer-end");break;default:return}}},{key:"_updateAttribute",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;e=Number(e),this.wrapper&&!isNaN(e)&&(e>100||e<0||this.wrapper.style.setProperty("--".concat(t),"".concat(e,"%")))}},{key:"fireProgressEvent",value:function(){var e=this;clearTimeout(this._progressTimer),this._progressTimer=setTimeout((function(){e.dispatchEvent(e.progressEvent)}),100)}},{key:"fireSeekEvent",value:function(e){this.detail.position=e,this.dispatchEvent(this.seekEvent)}},{key:"mouseHover",value:function(e){var t=this.getBoundingClientRect(),n=100*(e.clientX-t.left)/this.clientWidth;this.detail.position=n,this.dispatchEvent(this.mouseHoverEvent)}},{key:"updatePosition",value:function(e){var t,n=e.type;if(!n.includes("move")||this.moused){var r=this.getBoundingClientRect(),i=n.includes("touch")?e.touches[0]?e.touches[0].clientX:(null===(t=e.changedTouches)||void 0===t?void 0:t.length)?e.changedTouches[e.changedTouches.length-1].clientX:null:e.clientX;if(!isNaN(Number(i))){var s=100*(i-r.left)/this.clientWidth;this.setProgress(s,n)}}}},{key:"setProgress",value:function(e,t){e=e>100?100:e<0?0:e,this.setAttribute("progress",e),this.fireSeekEvent(e),t.includes("move")||this.fireProgressEvent()}},{key:"toggleMoused",value:function(e,t){this.moused&&!e&&this.updatePosition(t),this.moused=e}},{key:"attachListeners",value:function(){this._setPosition=this.updatePosition.bind(this),this._freezePosition=this.toggleMoused.bind(this,!1),this._unfreezePosition=this.toggleMoused.bind(this,!0),this._mouseHover=this.mouseHover.bind(this);var e=this.wrapper.querySelector(".pointer");this.wrapper.addEventListener("mouseup",this._setPosition),this.wrapper.addEventListener("mousemove",this._mouseHover),e.addEventListener("mousedown",this._unfreezePosition),document.addEventListener("mousemove",this._setPosition),document.addEventListener("mouseup",this._freezePosition),document.addEventListener("mouseleave",this._freezePosition),e.addEventListener("touchstart",this._unfreezePosition),document.addEventListener("touchmove",this._setPosition),document.addEventListener("touchend",this._freezePosition),document.addEventListener("touchcancel",this._freezePosition)}},{key:"render",value:function(){if(!this.rendered){this.wrapper=document.createElement("div"),this.wrapper.classList.add("wrapper"),this.wrapper.innerHTML='\n      <div class="slidebar">\n        <div class="buffer"></div>\n        <div class="progress"></div>\n      </div>\n      <div class="pointer">\n      <svg height=\'100%\' style=\'display:block;\' viewbox=\'0 0 100 100\'></svg>\n      </div>\n      ';var e=document.createElement("style");e.textContent="  \n       .wrapper{\n        height:100%;\n        width:100%;\n        position:relative;\n        --progress:0;\n        --buffer-start:0;\n        --buffer-end:0;\n        --pointer-height:0\n       }\n        .pointer{\n          height:100%;\n          width:max-content;\n          border-radius: 50%;\n          background:var(--pointer-clr,red);\n          position:absolute;\n          top:50%;\n          left:var(--progress);\n          transform:translate(-50%,-50%);\n          cursor: pointer;\n        }\n        .slidebar{\n          height:40%;\n          width:100%;\n          background:lightblue;\n          position:absolute;\n          top:50%;\n          left:0;\n          transform:translateY(-50%);\n          cursor:pointer;\n        }\n        .progress{\n            height:100%;\n            position:absolute;\n            left:0;\n            top:0;\n            width:var(--progress);\n            background:var(--progress-clr,orange);\n        }\n        .buffer{\n            height:100%;\n            position:absolute;\n            left:var(--buffer-start);\n            top:0;\n            background:var(--buffer-clr,darkgrey);\n            width:0;\n            width:calc( var(--buffer-end) - var(--buffer-start));\n        }\n      ",this.shadowRoot.append(e,this.wrapper),this.attachListeners();for(var t=0,n=["progress","buffer-start","buffer-end"];t<n.length;t++){var r=n[t],i=this.getAttribute(r);i&&this._updateAttribute(i,r)}this.rendered=!0}}}],[{key:"observedAttributes",get:function(){return["progress","buffer-start","buffer-end"]}}]),n}(Object(I.a)(HTMLElement));customElements.get("slide-bar")||customElements.define("slide-bar",J),c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),M()}},[[51,1,2]]]);
//# sourceMappingURL=main.5554b305.chunk.js.map