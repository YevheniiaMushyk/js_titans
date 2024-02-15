import{a as Y,i as b}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const ue=document.getElementById("loader");function me(e){e.style.display="block"}function ge(e){e.style.display="none"}const w="ENERGY_FLOW_FAVORITES_KEY";function f(){const e=window.localStorage.getItem(w);return e&&e!=="undefined"?JSON.parse(e):[]}function j(e){const t=f(),n=t.length?[...t,e]:[e];window.localStorage.setItem(w,JSON.stringify(n))}function k(e){return!!f().find(n=>n._id===e)}function F(e){const n=f().filter(i=>i._id!==e);window.localStorage.setItem(w,JSON.stringify(n))}const o=document.getElementById("modal");o.querySelector(".modal-content");const K=o.querySelector(".close"),S=o.querySelector(".exercise-gif"),$=o.querySelector(".exercise-title");o.querySelectorAll(".exercise-star");const T=o.querySelector(".exercise-target"),A=o.querySelector(".exercise-bodyparts"),M=o.querySelector(".exercise-equipment"),O=o.querySelector(".exercise-popular"),P=o.querySelector(".exercise-calories"),R=o.querySelector(".exercise-description"),B=o.querySelector(".favorite-button");document.querySelector(".rating-button");const N=document.querySelector(".rating-number");document.querySelector(".modal_rating");function pe(e){const t=e.target.closest(".exercises-item");if(!t)return;const n=Q(t);W(n),o.style.display="block"}function G(e){const t=e.target.closest(".exercises_item");if(!t)return;const n=X(t);W(n),o.style.display="block"}K.addEventListener("click",()=>{o.style.display="none"});window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(o.style.display="none")});function U(e){const n=k(e)?"Remove from":"Add to favorites";B.innerHTML=`${n}
        <svg class="modal_icon" width="13" height="15"><use href="../img/icons.svg#icon-heart"></use></svg>`}B.addEventListener("click",e=>{if(!o)return;const t=o.dataset.id;if(k(t))F(t);else{const i=Z();j(i)}u&&J(),U(t)});function Q(e){const t=e.querySelector(".exercises-title-text"),n=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],s=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:c,description:v,equipment:x,popularity:h,time:E,id:C}=e.dataset;return{title:I(t.textContent),burnedCalories:n.textContent,bodyPart:i.textContent,target:s.textContent,rating:r.textContent,gifUrl:c,description:v,equipment:x,popularity:h,time:E,_id:C}}function X(e){const t=e.querySelector(".exercises_title_text"),n=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],s=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:c,description:v,equipment:x,popularity:h,time:E,id:C}=e.dataset;return{title:I(t.textContent),burnedCalories:n.textContent,bodyPart:i.textContent,target:s.textContent,rating:r.textContent,gifUrl:c,description:v,equipment:x,popularity:h,time:E,_id:C}}function Z(){return{rating:parseFloat(N.textContent),gifUrl:S.src,time:parseFloat(o.dataset.time),popularity:parseFloat(O.textContent),equipment:M.textContent,description:R.textContent,target:T.textContent,bodyPart:A.textContent,burnedCalories:parseFloat(P.textContent),title:$.textContent,_id:o.dataset.id}}function W(e){S.src=e.gifUrl,S.alt=e.title,N.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((n,i)=>{const s=Math.trunc(t),r=i+1<=s?100:i+1>Math.ceil(t)?0:(t-s)*100;n.style.width=`${r}%`}),$.textContent=e.title,T.textContent=e.target,A.textContent=e.bodyPart,M.textContent=e.equipment,O.textContent=e.popularity,P.textContent=e.burnedCalories,R.textContent=e.description,o.dataset.time=e.time,o.dataset.id=e._id,U(e._id)}function I(e){return e.charAt(0).toUpperCase()+e.slice(1)}const D="https://energyflow.b.goit.study/api/exercises/",u=document.querySelector(".workouts-list");let m=[];u&&J();function J(){m=f(),console.log(m),m.length>0?(console.log("32 JS full"),u.innerHTML="",m.forEach(e=>{ee(e._id).then(t=>{const n=t.data;console.log("37 dodaem rozmitky"),te(n)}).catch(t=>{console.log(t)})})):(console.log("45 JS empty"),z())}function ee(e){return console.log("64 zaput"),Y.get(`${D}/${e}`)}function te(e){console.log("70 stvor rozmitku");const t=ne(e);u.insertAdjacentHTML("beforeend",t),oe(e),document.querySelectorAll(".exercises_start").forEach(n=>n.addEventListener("click",G))}function ne(e){return console.log("125 rozmitka Li"),`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id} data-time=${e.time}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16"><use href="../img/icons.svg#icon-trash"></use></svg>
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
        <svg class="exercises_title__svg" width="24" height="24"><use href="../icons.svg#icon-fav_run_man"></use></svg>
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
  `}function oe(e){document.querySelectorAll(".workout-card__remove-btn").forEach(n=>{n.getAttribute("data-workout-id")===e._id&&n.addEventListener("click",()=>{se(n,e._id)})})}function se(e,t){e.closest(".exercises_item").remove(),F(t),updatedStoredWorkouts.length===0&&z()}function z(){u.innerHTML=`
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
    </div>`}const re=document.getElementById("modal_rating"),y=document.getElementById("modal"),ie=document.querySelector(".modal_rating_close"),d=document.querySelector(".modal_rating_window"),q=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),_=document.querySelector(".modal_rating_form");let a=0,H="",V="",g=0,L="";re.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,y.classList.add("disactive_video_window"),d.showModal()});ie.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,_.reset(),d.close(),y.classList.remove("disactive_video_window")});d.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,l.textContent=`${a}.0`,_.reset(),d.close(),y.classList.remove("disactive_video_window"))});const ae=()=>{l.textContent=`${a}.0`};for(let e=0;e<q.length;e++){const t=q[e];t.addEventListener("mouseenter",()=>{const n=t.dataset.rating;l.textContent=`${n}.0`}),t.addEventListener("mouseleave",ae),t.addEventListener("click",()=>{g=t.dataset.rating,a=g,l.textContent=`${g}.0`})}_.addEventListener("submit",ce);function ce(e){e.preventDefault();const t=e.currentTarget;H=t.elements.email.value,V=t.elements.coment.value,a===0?b.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):le().then(()=>{d.close(),y.classList.remove("disactive_video_window"),b.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{b.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,l.textContent=`${a}.0`,_.reset()})}function le(){let e={};e.rate=parseInt(g),e.email=H,e.review=V,L=o.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${L}/rating`,t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}let p=document.getElementById("toTop");p.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?p.style.display="block":p.style.display="none"});p.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{me as a,ge as d,ue as l,pe as o};
//# sourceMappingURL=scroll_to_top-f71bcdc0.js.map
