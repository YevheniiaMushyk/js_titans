import{a as K,i as C}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const me=document.getElementById("loader");function pe(e){e.style.display="block"}function ge(e){e.style.display="none"}const b="/js_titans/assets/icons-2ff509a7.svg",q="ENERGY_FLOW_FAVORITES_KEY";function g(){const e=window.localStorage.getItem(q);return e&&e!=="undefined"?JSON.parse(e):[]}function z(e){const t=g(),n=t.length?[...t,e]:[e];window.localStorage.setItem(q,JSON.stringify(n))}function F(e){return!!g().find(n=>n._id===e)}function $(e){const n=g().filter(i=>i._id!==e);window.localStorage.setItem(q,JSON.stringify(n))}const s=document.getElementById("modal");s.querySelector(".modal-content");const G=s.querySelector(".close"),w=s.querySelector(".exercise-gif"),T=s.querySelector(".exercise-title");s.querySelectorAll(".exercise-star");const A=s.querySelector(".exercise-target"),M=s.querySelector(".exercise-bodyparts"),O=s.querySelector(".exercise-equipment"),P=s.querySelector(".exercise-popular"),R=s.querySelector(".exercise-calories"),B=s.querySelector(".exercise-description"),U=s.querySelector(".favorite-button");document.querySelector(".rating-button");const N=document.querySelector(".rating-number");document.querySelector(".modal_rating");function fe(e){const t=e.target.closest(".exercises-item");if(!t)return;const n=X(t);I(n),s.style.display="block"}function Q(e){const t=e.target.closest(".exercises_item");if(!t)return;const n=Z(t);I(n),s.style.display="block"}G.addEventListener("click",()=>{s.style.display="none"});window.addEventListener("click",e=>{e.target===s&&(s.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(s.style.display="none")});function W(e){const n=F(e)?"Remove from":"Add to favorites";U.innerHTML=`${n}
        <svg class="modal_icon" width="13" height="15"><use href="#icon-heart"></use></svg>`}U.addEventListener("click",e=>{if(!s)return;const t=s.dataset.id;if(F(t))$(t);else{const i=D();z(i)}u&&j(),W(t)});function X(e){const t=e.querySelector(".exercises-title-text"),n=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],o=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:c,description:_,equipment:x,popularity:v,time:h,id:E}=e.dataset;return{title:H(t.textContent),burnedCalories:n.textContent,bodyPart:i.textContent,target:o.textContent,rating:r.textContent,gifUrl:c,description:_,equipment:x,popularity:v,time:h,_id:E}}function Z(e){const t=e.querySelector(".exercises_title_text"),n=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],o=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:c,description:_,equipment:x,popularity:v,time:h,id:E}=e.dataset;return{title:H(t.textContent),burnedCalories:n.textContent,bodyPart:i.textContent,target:o.textContent,rating:r.textContent,gifUrl:c,description:_,equipment:x,popularity:v,time:h,_id:E}}function D(){return{rating:parseFloat(N.textContent),gifUrl:w.src,time:parseFloat(s.dataset.time),popularity:parseFloat(P.textContent),equipment:O.textContent,description:B.textContent,target:A.textContent,bodyPart:M.textContent,burnedCalories:parseFloat(R.textContent),title:T.textContent,_id:s.dataset.id}}function I(e){w.src=e.gifUrl,w.alt=e.title,N.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((n,i)=>{const o=Math.trunc(t),r=i+1<=o?100:i+1>Math.ceil(t)?0:(t-o)*100;n.style.width=`${r}%`}),T.textContent=e.title,A.textContent=e.target,M.textContent=e.bodyPart,O.textContent=e.equipment,P.textContent=e.popularity,R.textContent=e.burnedCalories,B.textContent=e.description,s.dataset.time=e.time,s.dataset.id=e._id,W(e._id)}function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ee="https://energyflow.b.goit.study/api/exercises/",u=document.querySelector(".workouts-list");let S=[];u&&j();function j(){S=g(),S.length>0?(u.innerHTML="",S.forEach(e=>{te(e._id).then(t=>{const n=t.data;ne(n)}).catch(t=>{console.log(t)})})):J()}function te(e){return K.get(`${ee}/${e}`)}function ne(e){const t=se(e);u.insertAdjacentHTML("beforeend",t),oe(e),document.querySelectorAll(".exercises_start").forEach(n=>n.addEventListener("click",Q))}function se(e){return`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id} data-time=${e.time}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16"><use href=${b}#icon-trash></use></svg>
          </button>
        </div>

  <div class="exercises_start">  
    <span class="exercises_start__text">Start</span>
    <svg
      class="exercises_start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    ><use href=${b}#icon-arrow></use></svg>    
  </div>

      </div>
      <div class="exercises_title">
        <svg class="exercises_title__svg" width="24" height="24"><use href=${b}#icon-fav_run_man></use></svg>
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
  `}function oe(e){document.querySelectorAll(".workout-card__remove-btn").forEach(n=>{n.getAttribute("data-workout-id")===e._id&&n.addEventListener("click",()=>{re(n,e._id)})})}function re(e,t){e.closest(".exercises_item").remove(),$(t),updatedStoredWorkouts.length===0&&J()}function J(){u.innerHTML=`
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
    </div>`}const ie=document.getElementById("modal_rating"),f=document.getElementById("modal"),ae=document.querySelector(".modal_rating_close"),d=document.querySelector(".modal_rating_window"),L=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),y=document.querySelector(".modal_rating_form");let a=0,V="",Y="",m=0,k="";ie.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,f.classList.add("disactive_video_window"),d.showModal()});ae.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,y.reset(),d.close(),f.classList.remove("disactive_video_window")});d.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,l.textContent=`${a}.0`,y.reset(),d.close(),f.classList.remove("disactive_video_window"))});const ce=()=>{l.textContent=`${a}.0`};for(let e=0;e<L.length;e++){const t=L[e];t.addEventListener("mouseenter",()=>{const n=t.dataset.rating;l.textContent=`${n}.0`}),t.addEventListener("mouseleave",ce),t.addEventListener("click",()=>{m=t.dataset.rating,a=m,l.textContent=`${m}.0`})}y.addEventListener("submit",le);function le(e){e.preventDefault();const t=e.currentTarget;V=t.elements.email.value,Y=t.elements.coment.value,a===0?C.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):de().then(()=>{d.close(),f.classList.remove("disactive_video_window"),C.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{C.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,l.textContent=`${a}.0`,y.reset()})}function de(){let e={};e.rate=parseInt(m),e.email=V,e.review=Y,k=s.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${k}/rating`,t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}let p=document.getElementById("toTop");p.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?p.style.display="block":p.style.display="none"});p.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{pe as a,ge as d,me as l,fe as o};
//# sourceMappingURL=scroll_to_top-c81d9934.js.map
