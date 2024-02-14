import{a as C}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const Q=document.getElementById("loader");function X(e){e.style.display="block"}function Z(e){e.style.display="none"}const o=document.getElementById("modal");o.querySelector(".modal-content");const F=o.querySelector(".close"),y=o.querySelector(".exercise-gif"),L=o.querySelector(".exercise-title");o.querySelectorAll(".exercise-star");const k=o.querySelector(".exercise-target"),A=o.querySelector(".exercise-bodyparts"),R=o.querySelector(".exercise-equipment"),I=o.querySelector(".exercise-popular"),T=o.querySelector(".exercise-calories"),N=o.querySelector(".exercise-description"),v=o.querySelector(".favorite-button"),W=document.querySelector(".rating-button"),M=document.querySelector(".rating-number"),_=document.querySelector(".modal_rating"),g="ENERGY_FLOW_FAVORITES_KEY";function D(e){const t=e.target.closest(".exercises-item");if(!t)return;const s=P(t);h(s),o.style.display="block"}function Y(e){const t=e.target.closest(".exercises_item");if(!t)return;const s=J(t);h(s),o.style.display="block"}F.addEventListener("click",()=>{o.style.display="none"});window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(o.style.display="none")});window.addEventListener("click",e=>{W&&_&&(_.dataset.id=o.dataset.id)});function f(){const e=window.localStorage.getItem(g);return e&&e!=="undefined"?JSON.parse(e):[]}function $(e){const t=f(),s=t.length?[...t,e]:[e];window.localStorage.setItem(g,JSON.stringify(s))}function E(e){return!!f().find(s=>s===e)}function S(e){const s=E(e)?"Remove from":"Add to favorites";v.innerHTML=`${s}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function B(e){const s=f().filter(n=>n!==e);window.localStorage.setItem(g,JSON.stringify(s)),j(e)}v.addEventListener("click",e=>{if(!o){console.log(o);return}const t=o.dataset.id;E(t)?B(t):$(t),S(t)});function P(e){const t=e.querySelector(".exercises-title-text"),s=e.querySelector(".exercises-text__dynamic"),n=e.querySelectorAll(".exercises-text__dynamic")[1],r=e.querySelectorAll(".exercises-text__dynamic")[2],i=e.querySelector(".exercises-rating__text"),{gifurl:c,description:l,equipment:d,popularity:u,id:p}=e.dataset;return{title:b(t.textContent),burnedCalories:s.textContent,bodyPart:n.textContent,target:r.textContent,rating:i.textContent,gifUrl:c,description:l,equipment:d,popularity:u,_id:p}}function J(e){const t=e.querySelector(".exercises_title_text"),s=e.querySelector(".exercises_text__dynamic"),n=e.querySelectorAll(".exercises_text__dynamic")[1],r=e.querySelectorAll(".exercises_text__dynamic")[2],i=e.querySelector(".exercises_rating__text"),{gifurl:c,description:l,equipment:d,popularity:u,id:p}=e.dataset;return{title:b(t.textContent),burnedCalories:s.textContent,bodyPart:n.textContent,target:r.textContent,rating:i.textContent,gifUrl:c,description:l,equipment:d,popularity:u,_id:p}}function h(e){y.src=e.gifUrl,y.alt=e.title,M.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((s,n)=>{const r=Math.trunc(t),i=n+1<=r?100:n+1>Math.ceil(t)?0:(t-r)*100;s.style.width=`${i}%`}),L.textContent=e.title,k.textContent=e.target,A.textContent=e.bodyPart,R.textContent=e.equipment,I.textContent=e.popularity,T.textContent=e.burnedCalories,N.textContent=e.description,o.dataset.id=e._id,S(e._id)}function b(e){return e.charAt(0).toUpperCase()+e.slice(1)}const K="https://energyflow.b.goit.study/api/exercises/",q=document.querySelector(".workouts-list");function O(e){return C.get(`${K}/${e}`)}let m=!0;const x=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];x.length>0?x.forEach(e=>{O(e).then(t=>{const s=t.data;V(s)}).catch(t=>{console.error(t)})}):(m=!1,w());function V(e){const t=H(e);q.insertAdjacentHTML("beforeend",t),G(e),document.querySelectorAll(".exercises_start").forEach(s=>s.addEventListener("click",Y))}function G(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{U(s,e._id)})})}function U(e,t){e.closest(".exercises_item").remove();const n=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(r=>r!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(n)),localStorage.removeItem("ENERGY_FLOW_FAVORITES_KEY"),n.length===0&&(m=!1),n.length===0&&w()}function H(e){return`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id}>
      <div class="exercises-sub-title">
        <div class="exercises__workout-rating">
          <p class="exercises-workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
       
    
  <div class="exercises_start">
  <button class="exercises-start-button" data-workout-data="${JSON.stringify(e)}">
    <span class="exercises-start__text">Start</span>
    <svg
      class="exercises-start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >
      <use href="./img/icons.svg#icon-arrow"></use>
    </svg></button>
  </div>

      </div>
      <div class="exercises-title">
        <svg class="exercises-title__svg" width="24" height="24">
          <use href="./img/icons.svg#icon-fav_run_man"></use>
        </svg>
        <span class="exercises_title_text">${e.name}</span>
      </div>
      <div class="exercises-text">
        <p class="exercises-text__content">
          <span class="exercises-text__static">Burned calories:</span>
          <span class="exercises_text__dynamic">${e.burnedCalories} / 3 min</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Body part:</span>
          <span class="exercises_text__dynamic">${e.bodyPart}</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Target:</span>
          <span class="exercises_text__dynamic">${e.target}</span>
        </p>
      </div>
      <span class="exercises_rating__text disactive_video_window">${String(e.rating).padEnd(3,".0")}</span>
    </li>
  `}function w(){m||(q.innerHTML=`
    <div class="empty-list">
      <img class="empty-item"
        srcset="./img/dumbbell@1x-min.png 1x, ./img/dumbbell@1x-min.png 2x"
        src="./img/dumbbell@1x-min.png"
        alt="dumbbell"
        width="85"
        height="52"
      />      
      <p class="empty-message">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>
    </div>`)}function j(e){const s=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(n=>n!==e);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(s)),O(e)}let a=document.getElementById("toTop");a.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?a.style.display="block":a.style.display="none"});a.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{X as a,Z as d,Q as l,o as m,D as o};
//# sourceMappingURL=scroll_to_top-56a707de.js.map
