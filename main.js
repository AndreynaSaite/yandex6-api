(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&"SCRIPT"===o.currentScript.tagName.toUpperCase()&&(e=o.currentScript.src),!e)){var n=o.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t=>{t.preventDefault()},o=(t,e)=>{const o=t.querySelector(e.submitButtonSelector),n=t.checkValidity();o.disabled=!n,o.classList.toggle("popup__button_disabled",!n)};var n;t.p,t.p;const r=document.querySelector(".popup_type_profile"),c=document.querySelector(".profile__edit-buton"),a=r.querySelector(".popup__form_type_profile"),p=document.querySelector(".profile-info__title"),i=document.querySelector(".profile-info__intro"),s=document.querySelector(".popup__input_type_name"),u=document.querySelector(".popup__input_type_job"),l=document.querySelector(".profile__avatar"),d=document.querySelector(".popup_type_avatar"),_=d.querySelector(".popup__form_type_avatar"),m=document.querySelector(".popup__input_type_linka"),h=document.querySelector(".popup_type_place"),y=document.querySelector(".profile__add-button"),f=h.querySelector(".popup__form_type_place"),v=h.querySelector(".popup__input_type_title"),b=h.querySelector(".popup__input_type_link"),S=document.querySelector(".popup_type_image"),g=document.querySelector(".popup__img"),C=document.querySelector(".popup__name"),E=document.querySelectorAll(".popup__button-close"),q=document.querySelectorAll(".popup"),L=document.querySelector(".template-card").content,k=document.querySelector(".elements"),x=t=>{const e=L.cloneNode(!0),o=e.querySelector(".element__title"),r=e.querySelector(".element__img"),c=e.querySelector(".element__button"),a=e.querySelector(".element__basket");t.owner._id!==n&&(a.style.display="none");const p=e.querySelector(".element__button_like");return o.textContent=t.name,r.src=t.link,r.alt=t.alt,p.textContent=t.likes.length,T(r),i=c,s=t._id,u=p,i.addEventListener("click",(t=>{t.target.classList.toggle("element__button_active"),t.target.classList.contains("element__button_active")?function(t,e){fetch(`https://nomoreparties.co/v1/frontend-st-cohort-201/cards/likes/${t}`,{method:"PUT",headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3","Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{e.textContent=t.likes.length}))}(s,u):function(t,e){fetch(`https://nomoreparties.co/v1/frontend-st-cohort-201/cards/likes/${t}`,{method:"DELETE",headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3 ","Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{e.textContent=t.likes.length}))}(s,u)})),((t,e)=>{t.addEventListener("click",(t=>{console.log(e),function(t){fetch(`https://nomoreparties.co/v1/frontend-st-cohort-201/cards/${t}`,{method:"DELETE",headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3 ","Content-Type":"application/json"}})}(e),t.target.closest(".element").remove()}))})(a,t._id),console.log(t),console.log(n),e;var i,s,u},T=t=>{t.addEventListener("click",(e=>{j(S),g.src=t.src,g.alt=t.alt,C.textContent=e.target.closest(".element").textContent}))};l.addEventListener("click",(t=>{j(d)}));const j=t=>{t.classList.add("popup_opened"),document.addEventListener("keydown",w)},$=t=>{t.classList.remove("popup_opened"),document.removeEventListener("keydown",w)},w=t=>{"Escape"===t.key&&q.forEach((t=>{$(t)}))};c.addEventListener("click",(()=>{j(r),s.value=p.textContent,u.value=i.textContent})),a.addEventListener("submit",(t=>{const e=t.target.querySelector(".popup__button-submit"),o=e.textContent;e.textContent="Сохраняю...",console.log("OTPRAVIL.."),function(t,e,o,n){fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me",{method:"PATCH",headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3 ","Content-Type":"application/json"},body:JSON.stringify({name:`${t}`,about:`${e}`})}).then((t=>t.json())).then((t=>{z()})).finally((()=>{o.textContent=n}))}(s.value,u.value,e,o),$(r),t.preventDefault()})),_.addEventListener("submit",(t=>{console.log("OTPRAVIL..");const e=t.target.querySelector(".popup__button-submit"),o=e.textContent;e.textContent="Сохраняю...",function(t,e,o){fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me/avatar",{method:"PATCH",headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3 ","Content-Type":"application/json"},body:JSON.stringify({avatar:`${t}`})}).then((t=>t.json())).then((t=>{l.src=t.avatar})).finally((()=>{e.textContent=o}))}(m.value,e,o),$(d),t.preventDefault()})),E.forEach((t=>{t.addEventListener("click",(t=>{const e=A(t);$(e)}))})),q.forEach((t=>{t.addEventListener("click",(t=>{if(t.target===t.currentTarget){const e=A(t);$(e)}}))})),y.addEventListener("click",(()=>{j(h),v.value="",b.value=""})),f.addEventListener("submit",(t=>{const e=t.target.querySelector(".popup__button-submit"),o=e.textContent;e.textContent="Сохраняю...",function(t,e,o,n){fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards",{method:"POST",headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3 ","Content-Type":"application/json"},body:JSON.stringify({name:`${t}`,link:`${e}`})}).then((t=>t.json())).finally((()=>{o.textContent=n}))}(v.value,b.value,e,o),P(),t.target.reset(),$(h)}));const A=t=>t.target.closest(".popup");function z(){fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/users/me ",{headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3"},method:"GET"}).then((t=>t.json())).then((t=>{console.log(t),p.textContent=t.name,i.textContent=t.about,l.src=t.avatar,n=t._id}))}function P(){fetch("https://nomoreparties.co/v1/frontend-st-cohort-201/cards",{headers:{authorization:"1c78c69e-0125-4898-8b81-b0d3658cf4a3"},method:"GET"}).then((t=>t.json())).then((t=>{t.forEach((t=>{k.append(x(t))}))}))}var N;z(),P(),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(N.formSelector)).forEach((t=>{t.addEventListener("submit",e),t.addEventListener("input",(()=>{o(t,N)})),((t,e)=>{Array.from(t.querySelectorAll(e.inputSelector)).forEach((function(t){t.addEventListener("input",(t=>{((t,e)=>{const o=t.target,n=o.id,r=document.querySelector(`#${n}-error`);o.validity.valid?(o.classList.remove(e.inputErrorClass),r.textContent=""):(o.classList.add(e.inputErrorClass),r.textContent=o.validationMessage)})(t,e)}))}))})(t,N),o(t,N)}))})();