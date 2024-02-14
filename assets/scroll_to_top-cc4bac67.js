import{a as B,i as E}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const ue=document.getElementById("loader");function ge(e){e.style.display="block"}function me(e){e.style.display="none"}const s=document.getElementById("modal");s.querySelector(".modal-content");const P=s.querySelector(".close"),w=s.querySelector(".exercise-gif"),Y=s.querySelector(".exercise-title");s.querySelectorAll(".exercise-star");const J=s.querySelector(".exercise-target"),U=s.querySelector(".exercise-bodyparts"),V=s.querySelector(".exercise-equipment"),K=s.querySelector(".exercise-popular"),G=s.querySelector(".exercise-calories"),H=s.querySelector(".exercise-description"),F=s.querySelector(".favorite-button"),j=document.querySelector(".rating-button"),z=document.querySelector(".rating-number");let d=0;const C=document.querySelector(".modal_rating"),h="ENERGY_FLOW_FAVORITES_KEY";function fe(e){const t=e.target.closest(".exercises-item");if(!t)return;const n=D(t);$(n),s.style.display="block"}function Q(e){d=0;const t=e.target.closest(".exercises_item");if(!t)return;const n=ee(t);$(n),s.style.display="block",d=1}P.addEventListener("click",()=>{s.style.display="none"});window.addEventListener("click",e=>{e.target===s&&(s.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(s.style.display="none")});window.addEventListener("click",e=>{j&&C&&(C.dataset.id=s.dataset.id)});function S(){const e=window.localStorage.getItem(h);return e&&e!=="undefined"?JSON.parse(e):[]}function X(e){const t=S(),n=t.length?[...t,e]:[e];window.localStorage.setItem(h,JSON.stringify(n))}function O(e){return!!S().find(n=>n===e)}function T(e){const n=O(e)?"Remove from":"Add to favorites";F.innerHTML=`${n}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function Z(e){const n=S().filter(r=>r!==e);window.localStorage.setItem(h,JSON.stringify(n))}F.addEventListener("click",e=>{if(!s){console.log(s);return}const t=s.dataset.id;O(t)?(Z(t),d===1&&q()):(X(t),d===1&&q()),T(t)});function D(e){const t=e.querySelector(".exercises-title-text"),n=e.querySelector(".exercises-text__dynamic"),r=e.querySelectorAll(".exercises-text__dynamic")[1],o=e.querySelectorAll(".exercises-text__dynamic")[2],i=e.querySelector(".exercises-rating__text"),{gifurl:a,description:_,equipment:y,popularity:v,id:x}=e.dataset;return{title:A(t.textContent),burnedCalories:n.textContent,bodyPart:r.textContent,target:o.textContent,rating:i.textContent,gifUrl:a,description:_,equipment:y,popularity:v,_id:x}}function ee(e){const t=e.querySelector(".exercises_title_text"),n=e.querySelector(".exercises_text__dynamic"),r=e.querySelectorAll(".exercises_text__dynamic")[1],o=e.querySelectorAll(".exercises_text__dynamic")[2],i=e.querySelector(".exercises_rating__text"),{gifurl:a,description:_,equipment:y,popularity:v,id:x}=e.dataset;return{title:A(t.textContent),burnedCalories:n.textContent,bodyPart:r.textContent,target:o.textContent,rating:i.textContent,gifUrl:a,description:_,equipment:y,popularity:v,_id:x}}function $(e){w.src=e.gifUrl,w.alt=e.title,z.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((n,r)=>{const o=Math.trunc(t),i=r+1<=o?100:r+1>Math.ceil(t)?0:(t-o)*100;n.style.width=`${i}%`}),Y.textContent=e.title,J.textContent=e.target,U.textContent=e.bodyPart,V.textContent=e.equipment,K.textContent=e.popularity,G.textContent=e.burnedCalories,H.textContent=e.description,s.dataset.id=e._id,T(e._id)}function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}d=0;const te="https://energyflow.b.goit.study/api/exercises/",R=document.querySelector(".workouts-list");function I(e){return B.get(`${te}/${e}`)}const b=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];b.length>0&&b.forEach(e=>{I(e).then(t=>{const n=t.data;N(n)}).catch(t=>{console.log(t)})});function N(e){const t=se(e);R.insertAdjacentHTML("beforeend",t),ne(e),document.querySelectorAll(".exercises_start").forEach(n=>n.addEventListener("click",Q))}function ne(e){document.querySelectorAll(".workout-card__remove-btn").forEach(n=>{n.getAttribute("data-workout-id")===e._id&&n.addEventListener("click",()=>{oe(n,e._id)})})}function oe(e,t){e.closest(".exercises_item").remove();const r=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(o=>o!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(r)),r.length,r.length}function se(e){return`
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
  `}function q(){const e=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];R.innerHTML="",e.length>0&&e.forEach(t=>{I(t).then(n=>{const r=n.data;N(r)}).catch(n=>{console.log(n)})})}const re=document.getElementById("modal_rating"),f=document.getElementById("modal"),ie=document.querySelector(".modal_rating_close"),u=document.querySelector(".modal_rating_window"),L=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),p=document.querySelector(".modal_rating_form");let c=0,W="",M="",g=0,k="";re.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,f.classList.add("disactive_video_window"),u.showModal()});ie.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,p.reset(),u.close(),f.classList.remove("disactive_video_window")});u.addEventListener("click",e=>{e.target===e.currentTarget&&(c=0,l.textContent=`${c}.0`,p.reset(),u.close(),f.classList.remove("disactive_video_window"))});const ce=()=>{l.textContent=`${c}.0`};for(let e=0;e<L.length;e++){const t=L[e];t.addEventListener("mouseenter",()=>{const n=t.dataset.rating;l.textContent=`${n}.0`}),t.addEventListener("mouseleave",ce),t.addEventListener("click",()=>{g=t.dataset.rating,c=g,l.textContent=`${g}.0`})}p.addEventListener("submit",ae);function ae(e){e.preventDefault();const t=e.currentTarget;W=t.elements.email.value,M=t.elements.coment.value,c===0?E.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):le().then(()=>{u.close(),f.classList.remove("disactive_video_window"),E.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{E.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{c=0,l.textContent=`${c}.0`,p.reset()})}function le(){let e={};e.rate=parseInt(g),e.email=W,e.review=M,k=s.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${k}/rating`,t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}let m=document.getElementById("toTop");m.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?m.style.display="block":m.style.display="none"});m.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{ge as a,me as d,ue as l,fe as o};
//# sourceMappingURL=scroll_to_top-cc4bac67.js.map
