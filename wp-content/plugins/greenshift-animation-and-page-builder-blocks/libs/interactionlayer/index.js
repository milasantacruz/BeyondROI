let GSscrollCalcDistance=0,GSonScrollIEvents=[],GSonMouseMoveIEvents=[];function GSfindChildrenWithoutStyle(e){let t=e.children;for(var r=[],l=0;l<t.length;l++){var i=t[l];"style"!==i.tagName.toLowerCase()&&r.push(i)}return r}let GSCookClass={setCookie(e,t,r){let l="";if(r){let i=new Date;i.setTime(i.getTime()+1e3*r),l="; expires="+i.toUTCString()}document.cookie=e+"="+(encodeURIComponent(t)||"")+l+"; path=/"},getCookie(e){let t=document.cookie.split(";");for(let r of t)if(r.indexOf(e+"=")>-1)return decodeURIComponent(r.split("=")[1]);return null},removeCookie(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"}};if(document.body&&document.body.classList.contains("gspb-bodyfront")){let e=document.querySelectorAll("[data-gspbactions]");GSPB_Trigger_Actions("front",e)}function GSPB_Trigger_Actions(e="front",t,r=window,l=document,i=null){if(t){if(null==i){let o=new AbortController;i=o.signal}t.forEach(t=>{if(null==t)return;let o=t.getAttribute("data-gspbactions");if(null==o){let n=t.querySelector("[data-gspbactions]");if(null==n)return;o=n.getAttribute("data-gspbactions")}let s=JSON.parse(o);s&&s.length&&s.forEach((o,n)=>{let s=o?.triggerData;o?.actions;let a=s?.trigger,c={rootMargin:s.rootmargin||"0px 0px 0px 0px",threshold:s.threshold&&s.threshold>=0&&s.threshold<=1?s.threshold:.3},g=s?.selector,u=[];if(g){if("."==(g=g.trim())||"#"==g)return;u=Array.from(l.querySelectorAll(g))}else u=[t];u.length&&u.forEach(o=>{switch(a){case"on-load":gspb_trigger_inter_Actions(t,o,n,null,r,l);break;case"click":o.addEventListener("click",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{capture:!0,signal:i});break;case"mouse-enter":o.addEventListener("mouseenter",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"mouse-leave":o.addEventListener("mouseleave",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"on-change":o.addEventListener("change",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"focus":o.addEventListener("focus",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"blur":o.addEventListener("blur",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"scroll-above":if("front"===e)GSonScrollIEvents.push({type:"scroll-above",pixelScrollValue:s.pixel_scroll,element:t,triggerElement:o,layerIndex:n,windowobj:r,documentobj:l});else{let g=s.pixel_scroll;l.querySelector(".interface-interface-skeleton__content")?document.querySelector(".interface-interface-skeleton__content").addEventListener("scroll",e=>{document.querySelector(".interface-interface-skeleton__content").scrollTop<g&&gspb_trigger_inter_Actions(t,o,n,e,r,l)},{capture:!0,signal:i}):r.addEventListener("scroll",e=>{r.scrollY<g&&gspb_trigger_inter_Actions(t,o,n,e,r,l)},{capture:!0,signal:i})}break;case"scroll-below":if("front"===e)GSonScrollIEvents.push({type:"scroll-below",pixelScrollValue:s.pixel_scroll,element:t,triggerElement:o,layerIndex:n,windowobj:r,documentobj:l});else{let u=s.pixel_scroll;l.querySelector(".interface-interface-skeleton__content")?document.querySelector(".interface-interface-skeleton__content").addEventListener("scroll",e=>{document.querySelector(".interface-interface-skeleton__content").scrollTop>=u&&gspb_trigger_inter_Actions(t,o,n,e,r,l)},{capture:!0,signal:i}):r.addEventListener("scroll",e=>{r.scrollY>=u&&gspb_trigger_inter_Actions(t,o,n,e,r,l)},{capture:!0,signal:i})}break;case"mouse-move":"front"===e?GSonMouseMoveIEvents.push({element:t,triggerElement:o,layerIndex:n,windowobj:r,documentobj:l}):r.addEventListener("mousemove",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"mouse-move-object":o.addEventListener("mousemove",e=>{gspb_trigger_inter_Actions(t,o,n,e,r,l)},{signal:i});break;case"on-view":new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&gspb_trigger_inter_Actions(t,o,n,e,r,l)})},c).observe(o);break;case"on-leave":new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting||gspb_trigger_inter_Actions(t,o,n,e,r,l)})},c).observe(o)}})})})}}if(GSonScrollIEvents.length>0){let t=GSonScrollIEvents[0].windowobj||window;t.addEventListener("scroll",e=>{let r=t.scrollY;GSonScrollIEvents.forEach(t=>{"scroll-above"===t.type?r<t.pixelScrollValue&&gspb_trigger_inter_Actions(t.element,t.triggerElement,t.layerIndex,e,t.windowobj,t.documentobj):"scroll-below"===t.type&&r>=t.pixelScrollValue&&gspb_trigger_inter_Actions(t.element,t.triggerElement,t.layerIndex,e,t.windowobj,t.documentobj)})})}function GSPBDynamicMathPlaceholders(e,t,r,l,i){if(i.indexOf("{{SCROLL}}")>-1)i=l.querySelector(".interface-interface-skeleton__content")?i.replace("{{SCROLL}}",document.querySelector(".interface-interface-skeleton__content").scrollTop):i.replace("{{SCROLL}}",r.scrollY);else if(i.indexOf("{{SCROLLVIEW}}")>-1){let o=e.getBoundingClientRect();if(o.top<r.innerHeight&&o.bottom>=0){let n=(r.innerHeight-o.top)/(r.innerHeight+o.height)*100;i=i.replace("{{SCROLLVIEW}}",n)}else i=o.bottom<0?i.replace("{{SCROLLVIEW}}",100):i.replace("{{SCROLLVIEW}}",0)}else if(i.indexOf("{{CLIENT_X}}")>-1){let s=t.clientX;i=i.replace("{{CLIENT_X}}",s)}else if(i.indexOf("{{VALUE}}")>-1){let a=t?.target?.value;a&&(i=i.replace("{{VALUE}}",a))}else if(i.indexOf("{{CLIENT_Y}}")>-1){let c=t.clientY;i=i.replace("{{CLIENT_Y}}",c)}else if(i.indexOf("{{OFFSET_X}}")>-1){let g=t.offsetX;i=i.replace("{{OFFSET_X}}",g)}else if(i.indexOf("{{OFFSET_Y}}")>-1){let u=t.offsetY;i=i.replace("{{OFFSET_Y}}",u)}else if(i.indexOf("{{CLIENT_X_%}}")>-1){let f=t.clientX/r.innerWidth*100;i=i.replace("{{CLIENT_X_%}}",Math.min(Math.max(f,0),100))}else if(i.indexOf("{{CLIENT_Y_%}}")>-1){let d=t.clientY/r.innerHeight*100;i=i.replace("{{CLIENT_Y_%}}",Math.min(Math.max(d,0),100))}else i.indexOf("{{WIDTH}}")>-1?i=i.replace("{{WIDTH}}",e.offsetWidth):i.indexOf("{{HEIGHT}}")>-1?i=i.replace("{{HEIGHT}}",e.offsetHeight):i.indexOf("{{OFFSET_LEFT}}")>-1?i=i.replace("{{OFFSET_LEFT}}",e.offsetLeft):i.indexOf("{{OFFSET_TOP}}")>-1&&(i=i.replace("{{OFFSET_TOP}}",e.offsetTop));return i}function GSPBMathAttributeOperator(e,t,r,l,i,o,n,s){n&&"."!=n&&"#"!=n&&(e=l.querySelector(n.trim()));let a=o=GSPBDynamicMathPlaceholders(e,t,r,l,o);return a&&s&&s.length>0&&s.forEach((i,o)=>{let n=i?.value,s=i?.selector,c=i?.type;if(c&&n){s&&"."!=(s=s.trim())&&"#"!=s&&(e=l.querySelector(s));let g=GSPBDynamicMathPlaceholders(e,t,r,l,n);g=parseFloat(g),a=parseFloat(a),"add"===c?a+=g:"subtract"===c?a-=g:"multiply"===c?a*=g:"divide"===c?a/=g:"modulo"===c&&(a%=g)}}),i&&(a+=i),a}function gspb_trigger_inter_Actions(e,t,r,l,i=window,o=document){let n=e.getAttribute("data-gspbactions");if(null==n){let s=e.querySelector("[data-gspbactions]");if(null==s)return;n=s.getAttribute("data-gspbactions")}let a=JSON.parse(n);if(!a||!a.length)return;let c=a[r]?.actions,g=a[r]?.triggerData?.delay,u=a[r]?.triggerData?.delaytime||0;void 0!==c&&(g&&u>0?setTimeout(()=>{gspb_execute_inter_Actions(t,c,l,i,o)},u):gspb_execute_inter_Actions(t,c,l,i,o))}function gspb_execute_inter_Actions(e,t,r,l=window,i=document){if(void 0!==t)for(let o of t){let n=o?.env;if("no-action"===n&&!i.body.classList.contains("gspb-bodyfront"))return;let s=o?.actionname,a=o?.selector,c=o?.conditions,g="",u=o?.classname,f=o?.attr,d=o?.attrValue,p=o?.attrValueSelector,b=o?.customMath,v=o?.attrUnit,m=[];if(a){if("."==(a=a.trim())||"#"==a)return;if(e.classList&&e.classList.contains("gspb-buttonbox")&&(e=e.classList.contains("wp-block-greenshift-blocks-buttonbox")?e.closest(".gspb_button_wrapper"):e.closest(".wp-block-greenshift-blocks-buttonbox")),a.includes("{CLOSEST")){let S=a.match(/\{CLOSEST:(.*?)\}/)?.[1],h=a.match(/\{SELECTOR_ALL:(.*?)\}/)?.[1];S&&h&&(h=h.replace("{TRIGGERINDEX}",Array.from(GSfindChildrenWithoutStyle(e.parentNode)).indexOf(e)),m=Array.from(e.closest(S).querySelectorAll(h)))}else a=a.replace("{TRIGGERINDEX}",Array.from(GSfindChildrenWithoutStyle(e.parentNode)).indexOf(e)+1),m=Array.from(i.querySelectorAll(a))}else m=[e];if(!m.length)return;m.forEach(t=>{if(!c||!(c.length>0)||!1!==(g=gspb_check_inter_Conditions(t,c,r))){if("attach-class"===s&&t.classList.add(u),"slideto"===s){let n=t.querySelector(".swiper");if(n){let a=o?.slideindex.replace("{TRIGGERINDEX}",Array.from(GSfindChildrenWithoutStyle(e.parentNode)).indexOf(e));a&&n.swiper.slideTo(a)}}if("slidepause"===s){let m=t.querySelector(".swiper");m&&m.swiper.pause()}if("slideresume"===s){let S=t.querySelector(".swiper");S&&S.swiper.resume()}if("sethtml"===s){let h=o?.htmlcontent;if(h){if(h.includes("{DYNAMIC_CONTENT")){let E=h.match(/\{DYNAMIC_CONTENT:(.*?)\}/)?.[1];if(E){let $=i.querySelector(E);$&&(h=h.replace("{DYNAMIC_CONTENT:"+E+"}",$.innerHTML))}}t.innerHTML=h}}if("video"===s){let y=o?.videotype,L="";(L=t instanceof HTMLVideoElement?t:t.querySelector("video"))&&("play"===y?L.play():"pause"===y?L.pause():"restart"===y?L.currentTime=0:L.play())}if("reusable"===s){let k=o?.reusableid;k&&"function"==typeof GSEL_ajax_load&&GSEL_ajax_load(r,k,t)}if("rive"===s){let C=o?.riveinput,T=o?.riveinputaction;void 0!==window[C]&&("fire"===T?window[C].fire():o?.riveinputvalue&&(window[C].value=GSPBMathAttributeOperator(t,r,l,i,v,d,p,b)))}if("attach-attribute"===s&&t.setAttribute(f,GSPBMathAttributeOperator(t,r,l,i,v,d,p,b)),"set-variable"===s&&t.style.setProperty(f,GSPBMathAttributeOperator(t,r,l,i,v,d,p,b)),"toggle-class"===s&&t.classList.toggle(u),"remove-class"===s&&t.classList.remove(u),"remove-attribute"===s&&t.removeAttribute(f),"save-to-browser-storage"===s){let I=o.storagekey,x=o.storagevalue;localStorage.setItem(I,x)}if("save-to-cookie"===s){let A=o.storagekey,O=o.storagevalue,w=o.storagetime;GSCookClass.setCookie(A,O,w)}if("remove-from-browser-storage"===s){let G=o.storagekey;localStorage.removeItem(G)}if("remove-from-cookie"===s){let _=o.storagekey;GSCookClass.removeCookie(_)}"hide-element"===s&&(t.style.display="none"),"show-element"===s&&(t.style.display="block"),"toggle-element"===s&&("none"===t.style.display?t.style.display="block":t.style.display="none")}})}}function gspb_check_inter_Conditions(e,t,r){let l=!1;return t&&t.forEach(t=>{let i=t.includeornot,o=t.classorid,n=t.additionalclass;if("includes"===i)"class"===o&&e.classList.contains(n)?l=!0:"id"===o&&e.id===n?l=!0:"storage"===o&&localStorage.getItem(n)?l=!0:"cookie"===o&&GSCookClass.getCookie(n)&&(l=!0);else if("not-includes"===i)"class"!==o||e.classList.contains(n)?"id"===o&&e.id!==n?l=!0:("storage"!==o||localStorage.getItem(n))&&("cookie"!==o||GSCookClass.getCookie(n))||(l=!0):l=!0;else if("more"==i)"value"==o&&r?.target?.value&&r?.target?.value>parseFloat(n)&&(l=!0);else if("less"==i)"value"==o&&r?.target?.value&&r?.target?.value<parseFloat(n)&&(l=!0);else if("equal"==i)"value"==o&&r?.target?.value&&r?.target?.value==parseFloat(n)&&(l=!0);else if("not-equal"==i)"value"==o&&r?.target?.value&&r?.target?.value!=parseFloat(n)&&(l=!0);else if("contains"==i)"value"==o&&r?.target?.value&&r?.target?.value.includes(n)&&(l=!0);else if("not-contains"==i)"value"==o&&r?.target?.value&&!r?.target?.value.includes(n)&&(l=!0);else if("checked"==i)"value"==o&&r?.target?.checked&&(l=!0);else if("not-checked"==i)"value"!=o||r?.target?.checked||(l=!0);else if("between"==i&&"value"==o){let s=n.split("-");s&&s.length&&r?.target?.value&&r?.target?.value>=parseFloat(s[0].trim())&&r?.target?.value<=parseFloat(s[1].trim())&&(l=!0)}}),l}GSonMouseMoveIEvents.length>0&&(GSonMouseMoveIEvents[0].windowobj||window).addEventListener("mousemove",e=>{GSonMouseMoveIEvents.forEach(t=>{gspb_trigger_inter_Actions(t.element,t.triggerElement,t.layerIndex,e,t.windowobj,t.documentobj)})});