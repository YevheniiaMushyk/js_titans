import{a as N,i as h}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const de=document.getElementById("loader");function ue(e){e.style.display="block"}function me(e){e.style.display="none"}const S="ENERGY_FLOW_FAVORITES_KEY";function b(){const e=window.localStorage.getItem(S);return e&&e!=="undefined"?JSON.parse(e):[]}function P(e){const t=b(),o=t.length?[...t,e]:[e];window.localStorage.setItem(S,JSON.stringify(o))}function L(e){return!!b().find(o=>o===e)}function B(e){const o=b().filter(i=>i!==e);window.localStorage.setItem(S,JSON.stringify(o))}const n=document.getElementById("modal");n.querySelector(".modal-content");const W=n.querySelector(".close"),w=n.querySelector(".exercise-gif"),J=n.querySelector(".exercise-title");n.querySelectorAll(".exercise-star");const Y=n.querySelector(".exercise-target"),U=n.querySelector(".exercise-bodyparts"),V=n.querySelector(".exercise-equipment"),z=n.querySelector(".exercise-popular"),K=n.querySelector(".exercise-calories"),G=n.querySelector(".exercise-description"),k=n.querySelector(".favorite-button");document.querySelector(".rating-button");const H=document.querySelector(".rating-number");document.querySelector(".modal_rating");function ge(e){const t=e.target.closest(".exercises-item");if(!t)return;const o=Q(t);O(o),n.style.display="block"}function j(e){const t=e.target.closest(".exercises_item");if(!t)return;const o=X(t);O(o),n.style.display="block"}W.addEventListener("click",()=>{n.style.display="none"});window.addEventListener("click",e=>{e.target===n&&(n.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(n.style.display="none")});function F(e){const o=L(e)?"Remove from":"Add to favorites";k.innerHTML=`${o}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}k.addEventListener("click",e=>{if(!n)return;const t=n.dataset.id;L(t)?B(t):P(t),u&&$(),F(t)});function Q(e){const t=e.querySelector(".exercises-title-text"),o=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],s=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:a,description:y,equipment:v,popularity:x,time:E,id:I}=e.dataset;return{title:T(t.textContent),burnedCalories:o.textContent,bodyPart:i.textContent,target:s.textContent,rating:r.textContent,gifUrl:a,description:y,equipment:v,popularity:x,time:E,_id:I}}function X(e){const t=e.querySelector(".exercises_title_text"),o=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],s=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:a,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:T(t.textContent),burnedCalories:o.textContent,bodyPart:i.textContent,target:s.textContent,rating:r.textContent,gifUrl:a,description:y,equipment:v,popularity:x,_id:E}}function O(e){w.src=e.gifUrl,w.alt=e.title,H.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((o,i)=>{const s=Math.trunc(t),r=i+1<=s?100:i+1>Math.ceil(t)?0:(t-s)*100;o.style.width=`${r}%`}),J.textContent=e.title,Y.textContent=e.target,U.textContent=e.bodyPart,V.textContent=e.equipment,z.textContent=e.popularity,K.textContent=e.burnedCalories,G.textContent=e.description,n.dataset.time=e.time,n.dataset.id=e._id,F(e._id)}function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Z="https://energyflow.b.goit.study/api/exercises/",u=document.querySelector(".workouts-list");let m=[];u&&$();function $(){m=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[],console.log(m),m.length>0?(console.log("32 JS full"),u.innerHTML="",m.forEach(e=>{D(e).then(t=>{const o=t.data;console.log("37 dodaem rozmitky"),ee(o)}).catch(t=>{console.log(t)})})):(console.log("45 JS empty"),A())}function D(e){return console.log("64 zaput"),N.get(`${Z}/${e}`)}function ee(e){console.log("70 stvor rozmitku");const t=te(e);u.insertAdjacentHTML("beforeend",t),oe(e),document.querySelectorAll(".exercises_start").forEach(o=>o.addEventListener("click",j))}function te(e){return console.log("125 rozmitka Li"),`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="../img/icons.svg#icon-trash"></use>
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
      <use href="../img/icons.svg#icon-arrow"></use>
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
  `}function oe(e){document.querySelectorAll(".workout-card__remove-btn").forEach(o=>{o.getAttribute("data-workout-id")===e._id&&o.addEventListener("click",()=>{se(o,e._id)})})}function se(e,t){e.closest(".exercises_item").remove();const i=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(s=>s._id!==t._id);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(i)),i.length===0&&A()}function A(){u.innerHTML=`
    <div class="empty-list">
      <img class="empty-item"
        srcset="../img/dumbbell@1x-min.png 1x, ../img/dumbbell@1x-min.png 2x"
        src="../img/dumbbell@1x-min.png"
        alt="dumbbell"
        width="85"
        height="52"
      />
      <p class="empty-message">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>
    </div>`}const ne=document.getElementById("modal_rating"),_=document.getElementById("modal"),re=document.querySelector(".modal_rating_close"),d=document.querySelector(".modal_rating_window"),C=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),f=document.querySelector(".modal_rating_form");let c=0,R="",M="",g=0,q="";ne.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,_.classList.add("disactive_video_window"),d.showModal()});re.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,f.reset(),d.close(),_.classList.remove("disactive_video_window")});d.addEventListener("click",e=>{e.target===e.currentTarget&&(c=0,l.textContent=`${c}.0`,f.reset(),d.close(),_.classList.remove("disactive_video_window"))});const ie=()=>{l.textContent=`${c}.0`};for(let e=0;e<C.length;e++){const t=C[e];t.addEventListener("mouseenter",()=>{const o=t.dataset.rating;l.textContent=`${o}.0`}),t.addEventListener("mouseleave",ie),t.addEventListener("click",()=>{g=t.dataset.rating,c=g,l.textContent=`${g}.0`})}f.addEventListener("submit",ce);function ce(e){e.preventDefault();const t=e.currentTarget;R=t.elements.email.value,M=t.elements.coment.value,c===0?h.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):ae().then(()=>{d.close(),_.classList.remove("disactive_video_window"),h.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{h.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{c=0,l.textContent=`${c}.0`,f.reset()})}function ae(){let e={};e.rate=parseInt(g),e.email=R,e.review=M,q=n.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${q}/rating`,t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let p=document.getElementById("toTop");p.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?p.style.display="block":p.style.display="none"});p.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{ue as a,me as d,de as l,ge as o};
//# sourceMappingURL=scroll_to_top-f5052643.js.map
