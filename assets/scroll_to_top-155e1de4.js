import{i as h}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const ue=document.getElementById("loader");function ge(e){e.style.display="block"}function me(e){e.style.display="none"}const n=document.getElementById("modal");n.querySelector(".modal-content");const P=n.querySelector(".close"),C=n.querySelector(".exercise-gif"),Y=n.querySelector(".exercise-title");n.querySelectorAll(".exercise-star");const J=n.querySelector(".exercise-target"),U=n.querySelector(".exercise-bodyparts"),V=n.querySelector(".exercise-equipment"),K=n.querySelector(".exercise-popular"),G=n.querySelector(".exercise-calories"),j=n.querySelector(".exercise-description"),O=n.querySelector(".favorite-button"),H=document.querySelector(".rating-button"),z=document.querySelector(".rating-number");let c=0;const q=document.querySelector(".modal_rating"),S="ENERGY_FLOW_FAVORITES_KEY";function fe(e){const t=e.target.closest(".exercises-item");if(!t)return;const o=D(t);R(o),n.style.display="block"}function Q(e){c=0;const t=e.target.closest(".exercises_item");if(!t)return;const o=ee(t);R(o),n.style.display="block",c=1}P.addEventListener("click",()=>{n.style.display="none",c=0});window.addEventListener("click",e=>{e.target===n&&(n.style.display="none",c=0)});window.addEventListener("keydown",e=>{e.key==="Escape"&&(n.style.display="none",c=0)});window.addEventListener("click",e=>{H&&q&&(q.dataset.id=n.dataset.id)});function w(){const e=window.localStorage.getItem(S);return e&&e!=="undefined"?JSON.parse(e):[]}function X(e){const t=w(),o=t.length?[...t,e]:[e];window.localStorage.setItem(S,JSON.stringify(o))}function T(e){return!!w().find(o=>o===e)}function A(e){const o=T(e)?"Remove from":"Add to favorites";O.innerHTML=`${o}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function Z(e){const o=w().filter(r=>r!==e);window.localStorage.setItem(S,JSON.stringify(o))}O.addEventListener("click",e=>{if(!n){console.log(n);return}const t=n.dataset.id;T(t)?(Z(t),c===1&&L()):(X(t),c===1&&L()),A(t)});function D(e){const t=e.querySelector(".exercises-title-text"),o=e.querySelector(".exercises-text__dynamic"),r=e.querySelectorAll(".exercises-text__dynamic")[1],s=e.querySelectorAll(".exercises-text__dynamic")[2],i=e.querySelector(".exercises-rating__text"),{gifurl:l,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:I(t.textContent),burnedCalories:o.textContent,bodyPart:r.textContent,target:s.textContent,rating:i.textContent,gifUrl:l,description:y,equipment:v,popularity:x,_id:E}}function ee(e){const t=e.querySelector(".exercises_title_text"),o=e.querySelector(".exercises_text__dynamic"),r=e.querySelectorAll(".exercises_text__dynamic")[1],s=e.querySelectorAll(".exercises_text__dynamic")[2],i=e.querySelector(".exercises_rating__text"),{gifurl:l,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:I(t.textContent),burnedCalories:o.textContent,bodyPart:r.textContent,target:s.textContent,rating:i.textContent,gifUrl:l,description:y,equipment:v,popularity:x,_id:E}}function R(e){C.src=e.gifUrl,C.alt=e.title,z.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((o,r)=>{const s=Math.trunc(t),i=r+1<=s?100:r+1>Math.ceil(t)?0:(t-s)*100;o.style.width=`${i}%`}),Y.textContent=e.title,J.textContent=e.target,U.textContent=e.bodyPart,V.textContent=e.equipment,K.textContent=e.popularity,G.textContent=e.burnedCalories,j.textContent=e.description,n.dataset.id=e._id,A(e._id)}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}c=0;const te="https://energyflow.b.goit.study/api/exercises/",$=document.querySelector(".workouts-list");async function W(){const o=(await(await fetch(te)).json()).results.filter(r=>storedWorkoutIds.includes(r._id));console.log(o)}let f=!0;if($){const e=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];e.length>0?e.forEach(t=>{W(),N(t)}):(f=!1,b())}function N(e){const t=ne(e);document.querySelector(".workouts-list").insertAdjacentHTML("beforeend",t),oe(e),document.querySelectorAll(".exercises_start").forEach(r=>r.addEventListener("click",Q))}function oe(e){document.querySelectorAll(".workout-card__remove-btn").forEach(o=>{o.getAttribute("data-workout-id")===e._id&&o.addEventListener("click",()=>{se(o,e._id)})})}function se(e,t){e.closest(".exercises_item").remove();const r=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(s=>s._id!==t._id);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(r)),r.length===0&&(f=!1),r.length===0&&b()}function ne(e){return`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>

  <div class="exercises_start">
  <button class="exercises-start-button" data-workout-data="${JSON.stringify(e)}">
    <span class="exercises_start__text">Start</span>
    <svg
      class="exercises_start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >
      <use href="./img/icons.svg#icon-arrow"></use>
    </svg></button>
  </div>

      </div>
      <div class="exercises_title">
        <svg class="exercises_title__svg" width="24" height="24">
          <use href="./img/icons.svg#icon-fav_run_man"></use>
        </svg>
        <span class="exercises_title_text">${e.name}</span>
      </div>
      <div class="exercises_text">
        <p class="exercises_text__content">
          <span class="exercises_text__static">Burned calories:</span>
          <span class="exercises_text__dynamic">${e.burnedCalories} / 3 min</span>
        </p>
        <p class="exercises_text__content">
          <span class="exercises_text__static">Body part:</span>
          <span class="exercises_text__dynamic">${e.bodyPart}</span>
        </p>
        <p class="exercises_text__content">
          <span class="exercises_text__static">Target:</span>
          <span class="exercises_text__dynamic">${e.target}</span>
        </p>
      </div>
      <span class="exercises_rating__text disactive_video_window">${String(e.rating).padEnd(3,".0")}</span>
    </li>
  `}function b(){f||($.innerHTML=`
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
    </div>`)}function L(){const e=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];e.length>0?e.forEach(t=>{W().then(o=>{const r=o.data;console.log("dodaem rozmitky 216"),N(r)}).catch(o=>{console.log(o)})}):(f=!1,b())}const re=document.getElementById("modal_rating"),p=document.getElementById("modal"),ie=document.querySelector(".modal_rating_close"),u=document.querySelector(".modal_rating_window"),k=document.querySelectorAll(".fa-solid"),d=document.querySelector(".modal_rating_digit"),_=document.querySelector(".modal_rating_form");let a=0,M="",B="",g=0,F="";re.addEventListener("click",()=>{a=0,d.textContent=`${a}.0`,p.classList.add("disactive_video_window"),u.showModal()});ie.addEventListener("click",()=>{a=0,d.textContent=`${a}.0`,_.reset(),u.close(),p.classList.remove("disactive_video_window")});u.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,d.textContent=`${a}.0`,_.reset(),u.close(),p.classList.remove("disactive_video_window"))});const ae=()=>{d.textContent=`${a}.0`};for(let e=0;e<k.length;e++){const t=k[e];t.addEventListener("mouseenter",()=>{const o=t.dataset.rating;d.textContent=`${o}.0`}),t.addEventListener("mouseleave",ae),t.addEventListener("click",()=>{g=t.dataset.rating,a=g,d.textContent=`${g}.0`})}_.addEventListener("submit",ce);function ce(e){e.preventDefault();const t=e.currentTarget;M=t.elements.email.value,B=t.elements.coment.value,a===0?h.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):le().then(()=>{u.close(),p.classList.remove("disactive_video_window"),h.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{h.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,d.textContent=`${a}.0`,_.reset()})}function le(){let e={};e.rate=parseInt(g),e.email=M,e.review=B,F=n.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${F}/rating`,t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let m=document.getElementById("toTop");m.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?m.style.display="block":m.style.display="none"});m.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{ge as a,me as d,ue as l,fe as o};
//# sourceMappingURL=scroll_to_top-155e1de4.js.map
