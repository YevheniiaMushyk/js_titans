import{a as P,i as h}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const me=document.getElementById("loader");function fe(e){e.style.display="block"}function pe(e){e.style.display="none"}const s=document.getElementById("modal");s.querySelector(".modal-content");const Y=s.querySelector(".close"),C=s.querySelector(".exercise-gif"),J=s.querySelector(".exercise-title");s.querySelectorAll(".exercise-star");const U=s.querySelector(".exercise-target"),V=s.querySelector(".exercise-bodyparts"),K=s.querySelector(".exercise-equipment"),G=s.querySelector(".exercise-popular"),H=s.querySelector(".exercise-calories"),j=s.querySelector(".exercise-description"),T=s.querySelector(".favorite-button"),z=document.querySelector(".rating-button"),Q=document.querySelector(".rating-number");let d=0;const q=document.querySelector(".modal_rating"),S="ENERGY_FLOW_FAVORITES_KEY";function ye(e){const t=e.target.closest(".exercises-item");if(!t)return;const o=ee(t);R(o),s.style.display="block"}function X(e){d=0;const t=e.target.closest(".exercises_item");if(!t)return;const o=te(t);R(o),s.style.display="block",d=1}Y.addEventListener("click",()=>{s.style.display="none"});window.addEventListener("click",e=>{e.target===s&&(s.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(s.style.display="none")});window.addEventListener("click",e=>{z&&q&&(q.dataset.id=s.dataset.id)});function w(){const e=window.localStorage.getItem(S);return e&&e!=="undefined"?JSON.parse(e):[]}function Z(e){const t=w(),o=t.length?[...t,e]:[e];window.localStorage.setItem(S,JSON.stringify(o))}function $(e){return!!w().find(o=>o===e)}function A(e){const o=$(e)?"Remove from":"Add to favorites";T.innerHTML=`${o}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function D(e){const o=w().filter(r=>r!==e);window.localStorage.setItem(S,JSON.stringify(o))}T.addEventListener("click",e=>{if(!s){console.log(s);return}const t=s.dataset.id;$(t)?(D(t),d===1&&k()):(Z(t),d===1&&k()),A(t)});function ee(e){const t=e.querySelector(".exercises-title-text"),o=e.querySelector(".exercises-text__dynamic"),r=e.querySelectorAll(".exercises-text__dynamic")[1],n=e.querySelectorAll(".exercises-text__dynamic")[2],i=e.querySelector(".exercises-rating__text"),{gifurl:c,description:_,equipment:v,popularity:x,id:E}=e.dataset;return{title:I(t.textContent),burnedCalories:o.textContent,bodyPart:r.textContent,target:n.textContent,rating:i.textContent,gifUrl:c,description:_,equipment:v,popularity:x,_id:E}}function te(e){const t=e.querySelector(".exercises_title_text"),o=e.querySelector(".exercises_text__dynamic"),r=e.querySelectorAll(".exercises_text__dynamic")[1],n=e.querySelectorAll(".exercises_text__dynamic")[2],i=e.querySelector(".exercises_rating__text"),{gifurl:c,description:_,equipment:v,popularity:x,id:E}=e.dataset;return{title:I(t.textContent),burnedCalories:o.textContent,bodyPart:r.textContent,target:n.textContent,rating:i.textContent,gifUrl:c,description:_,equipment:v,popularity:x,_id:E}}function R(e){C.src=e.gifUrl,C.alt=e.title,Q.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((o,r)=>{const n=Math.trunc(t),i=r+1<=n?100:r+1>Math.ceil(t)?0:(t-n)*100;o.style.width=`${i}%`}),J.textContent=e.title,U.textContent=e.target,V.textContent=e.bodyPart,K.textContent=e.equipment,G.textContent=e.popularity,H.textContent=e.burnedCalories,j.textContent=e.description,s.dataset.id=e._id,A(e._id)}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}d=0;const oe="https://energyflow.b.goit.study/api/exercises/",ne=document.querySelector("#wl");function N(e){return P.get(`${oe}/${e}`)}let f=!0;const L=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];L.length>0?L.forEach(e=>{N(e).then(t=>{const o=t.data;W(o)}).catch(t=>{console.log(t)})}):(f=!1,b());function W(e){const t=ie(e);document.querySelector(".workouts-list").insertAdjacentHTML("beforeend",t),se(e),document.querySelectorAll(".exercises_start").forEach(r=>r.addEventListener("click",X))}function se(e){document.querySelectorAll(".workout-card__remove-btn").forEach(o=>{o.getAttribute("data-workout-id")===e._id&&o.addEventListener("click",()=>{re(o,e._id)})})}function re(e,t){e.closest(".exercises_item").remove();const r=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(n=>n!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(r)),r.length===0&&(f=!1),r.length===0&&b()}function ie(e){return`
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
  `}function b(){f||(ne.innerHTML=`
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
    </div>`)}function k(){const e=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];e.length>0?e.forEach(t=>{N(t).then(o=>{const r=o.data;W(r)}).catch(o=>{console.log(o)})}):(f=!1,b())}const ae=document.getElementById("modal_rating"),p=document.getElementById("modal"),ce=document.querySelector(".modal_rating_close"),u=document.querySelector(".modal_rating_window"),F=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),y=document.querySelector(".modal_rating_form");let a=0,M="",B="",g=0,O="";ae.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,p.classList.add("disactive_video_window"),u.showModal()});ce.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,y.reset(),u.close(),p.classList.remove("disactive_video_window")});u.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,l.textContent=`${a}.0`,y.reset(),u.close(),p.classList.remove("disactive_video_window"))});const le=()=>{l.textContent=`${a}.0`};for(let e=0;e<F.length;e++){const t=F[e];t.addEventListener("mouseenter",()=>{const o=t.dataset.rating;l.textContent=`${o}.0`}),t.addEventListener("mouseleave",le),t.addEventListener("click",()=>{g=t.dataset.rating,a=g,l.textContent=`${g}.0`})}y.addEventListener("submit",de);function de(e){e.preventDefault();const t=e.currentTarget;M=t.elements.email.value,B=t.elements.coment.value,a===0?h.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):ue().then(()=>{u.close(),p.classList.remove("disactive_video_window"),h.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{h.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,l.textContent=`${a}.0`,y.reset()})}function ue(){let e={};e.rate=parseInt(g),e.email=M,e.review=B,O=s.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${O}/rating`,t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let m=document.getElementById("toTop");m.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?m.style.display="block":m.style.display="none"});m.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{fe as a,pe as d,me as l,ye as o};
//# sourceMappingURL=scroll_to_top-2a286288.js.map