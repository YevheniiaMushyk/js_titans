import"./vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const M=document.getElementById("loader");function U(t){t.style.display="block"}function Y(t){t.style.display="none"}const n=document.getElementById("modal");n.querySelector(".modal-content");const q=n.querySelector(".close"),p=n.querySelector(".exercise-gif"),b=n.querySelector(".exercise-title");n.querySelectorAll(".exercise-star");const C=n.querySelector(".exercise-target"),w=n.querySelector(".exercise-bodyparts"),h=n.querySelector(".exercise-equipment"),L=n.querySelector(".exercise-popular"),F=n.querySelector(".exercise-calories"),O=n.querySelector(".exercise-description"),v=n.querySelector(".favorite-button"),A=document.querySelector(".rating-button"),T=document.querySelector(".rating-number"),g=document.querySelector(".modal_rating"),f="ENERGY_FLOW_FAVORITES_KEY";function J(t){const e=t.target.closest(".exercises-item");if(!e)return;const r=N(e);S(r),n.style.display="block"}function K(t){const e=t.target.closest(".exercises_item");if(!e)return;const r=R(e);S(r),n.style.display="block"}q.addEventListener("click",()=>{n.style.display="none"});window.addEventListener("click",t=>{t.target===n&&(n.style.display="none")});window.addEventListener("keydown",t=>{t.key==="Escape"&&(n.style.display="none")});window.addEventListener("click",t=>{A&&g&&(g.dataset.id=n.dataset.id)});function m(){const t=window.localStorage.getItem(f);return t&&t!=="undefined"?JSON.parse(t):[]}function P(t){const e=m(),r=e.length?[...e,t]:[t];window.localStorage.setItem(f,JSON.stringify(r))}function E(t){return!!m().find(r=>r===t)}function x(t){const r=E(t)?"Remove from":"Add to favorites";v.innerHTML=`${r}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function B(t){const r=m().filter(s=>s!==t);window.localStorage.setItem(f,JSON.stringify(r))}v.addEventListener("click",t=>{if(!n){console.log(n);return}const e=n.dataset.id;E(e)?B(e):P(e),x(e)});function N(t){const e=t.querySelector(".exercises-title-text"),r=t.querySelector(".exercises-text__dynamic"),s=t.querySelectorAll(".exercises-text__dynamic")[1],o=t.querySelectorAll(".exercises-text__dynamic")[2],i=t.querySelector(".exercises-rating__text"),{gifurl:c,description:a,equipment:d,popularity:u,id:y}=t.dataset;return{title:_(e.textContent),burnedCalories:r.textContent,bodyPart:s.textContent,target:o.textContent,rating:i.textContent,gifUrl:c,description:a,equipment:d,popularity:u,_id:y}}function R(t){const e=t.querySelector(".exercises_title_text"),r=t.querySelector(".exercises_text__dynamic"),s=t.querySelectorAll(".exercises_text__dynamic")[1],o=t.querySelectorAll(".exercises_text__dynamic")[2],i=t.querySelector(".exercises_rating__text"),{gifurl:c,description:a,equipment:d,popularity:u,id:y}=t.dataset;return{title:_(e.textContent),burnedCalories:r.textContent,bodyPart:s.textContent,target:o.textContent,rating:i.textContent,gifUrl:c,description:a,equipment:d,popularity:u,_id:y}}function S(t){p.src=t.gifUrl,p.alt=t.title,T.textContent=t.rating;const e=parseFloat(t.rating);document.querySelectorAll(".yellow-star").forEach((r,s)=>{const o=Math.trunc(e),i=s+1<=o?100:s+1>Math.ceil(e)?0:(e-o)*100;r.style.width=`${i}%`}),b.textContent=t.title,C.textContent=t.target,w.textContent=t.bodyPart,h.textContent=t.equipment,L.textContent=t.popularity,F.textContent=t.burnedCalories,O.textContent=t.description,n.dataset.id=t._id,x(t._id)}function _(t){return t.charAt(0).toUpperCase()+t.slice(1)}let l=document.getElementById("toTop");l.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?l.style.display="block":l.style.display="none"});l.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{U as a,J as b,Y as d,M as l,n as m,K as o};
//# sourceMappingURL=scroll_to_top-ce4c3695.js.map
