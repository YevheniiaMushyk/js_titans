import{a as z,i as b}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const ge=document.getElementById("loader");function fe(e){e.style.display="block"}function _e(e){e.style.display="none"}const m="/js_titans/assets/icons-2ff509a7.svg",q="ENERGY_FLOW_FAVORITES_KEY";function f(){const e=window.localStorage.getItem(q);return e&&e!=="undefined"?JSON.parse(e):[]}function G(e){const t=f(),n=t.length?[...t,e]:[e];window.localStorage.setItem(q,JSON.stringify(n))}function k(e){return!!f().find(n=>n._id===e)}function T(e){const n=f().filter(i=>i._id!==e);window.localStorage.setItem(q,JSON.stringify(n))}const s=document.getElementById("modal");s.querySelector(".modal-content");const Q=s.querySelector(".close"),w=s.querySelector(".exercise-gif"),A=s.querySelector(".exercise-title");s.querySelectorAll(".exercise-star");const M=s.querySelector(".exercise-target"),O=s.querySelector(".exercise-bodyparts"),P=s.querySelector(".exercise-equipment"),R=s.querySelector(".exercise-popular"),B=s.querySelector(".exercise-calories"),U=s.querySelector(".exercise-description"),N=s.querySelector(".favorite-button");document.querySelector(".rating-button");const W=document.querySelector(".rating-number");document.querySelector(".modal_rating");function ye(e){const t=e.target.closest(".exercises-item");if(!t)return;const n=Z(t);j(n),s.style.display="block"}function X(e){const t=e.target.closest(".exercises_item");if(!t)return;const n=D(t);j(n),s.style.display="block"}Q.addEventListener("click",()=>{s.style.display="none"});window.addEventListener("click",e=>{e.target===s&&(s.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(s.style.display="none")});function I(e){const n=k(e)?"Remove from":"Add to favorites";N.innerHTML=`${n}
        <svg class="modal_icon" width="13" height="15"><use href="${m}#icon-heart"></use></svg>`}N.addEventListener("click",e=>{if(!s)return;const t=s.dataset.id;if(k(t))T(t);else{const i=ee();G(i)}u&&J(),I(t)});function Z(e){const t=e.querySelector(".exercises-title-text"),n=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],o=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:c,description:x,equipment:v,popularity:h,time:E,id:C}=e.dataset;return{title:H(t.textContent),burnedCalories:n.textContent,bodyPart:i.textContent,target:o.textContent,rating:r.textContent,gifUrl:c,description:x,equipment:v,popularity:h,time:E,_id:C}}function D(e){const t=e.querySelector(".exercises_title_text"),n=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],o=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:c,description:x,equipment:v,popularity:h,time:E,id:C}=e.dataset;return{title:H(t.textContent),burnedCalories:n.textContent,bodyPart:i.textContent,target:o.textContent,rating:r.textContent,gifUrl:c,description:x,equipment:v,popularity:h,time:E,_id:C}}function ee(){return{rating:parseFloat(W.textContent),gifUrl:w.src,time:parseFloat(s.dataset.time),popularity:parseFloat(R.textContent),equipment:P.textContent,description:U.textContent,target:M.textContent,bodyPart:O.textContent,burnedCalories:parseFloat(B.textContent),title:A.textContent,_id:s.dataset.id}}function j(e){w.src=e.gifUrl,w.alt=e.title,W.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((n,i)=>{const o=Math.trunc(t),r=i+1<=o?100:i+1>Math.ceil(t)?0:(t-o)*100;n.style.width=`${r}%`}),A.textContent=e.title,M.textContent=e.target,O.textContent=e.bodyPart,P.textContent=e.equipment,R.textContent=e.popularity,B.textContent=e.burnedCalories,U.textContent=e.description,s.dataset.time=e.time,s.dataset.id=e._id,I(e._id)}function H(e){return e.charAt(0).toUpperCase()+e.slice(1)}const L="/js_titans/assets/dumbbell@1x-min-52b04e82.png",te="/js_titans/assets/dumbbell@2x-min-b1e2f335.png",ne="https://energyflow.b.goit.study/api/exercises/",u=document.querySelector(".workouts-list");let S=[];u&&J();function J(){S=f(),S.length>0?(u.innerHTML="",S.forEach(e=>{se(e._id).then(t=>{const n=t.data;oe(n)}).catch(t=>{console.log(t)})})):V()}function se(e){return z.get(`${ne}/${e}`)}function oe(e){const t=re(e);u.insertAdjacentHTML("beforeend",t),ie(e),document.querySelectorAll(".exercises_start").forEach(n=>n.addEventListener("click",X))}function re(e){return`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id} data-time=${e.time}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16"><use href=${m}#icon-trash></use></svg>
          </button>
        </div>

  <div class="exercises_start">  
    <span class="exercises_start__text">Start</span>
    <svg
      class="exercises_start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    ><use href=${m}#icon-arrow></use></svg>    
  </div>

      </div>
      <div class="exercises_title">
        <svg class="exercises_title__svg" width="24" height="24"><use href=${m}#icon-fav_run_man></use></svg>
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
  `}function ie(e){document.querySelectorAll(".workout-card__remove-btn").forEach(n=>{n.getAttribute("data-workout-id")===e._id&&n.addEventListener("click",()=>{ae(n,e._id)})})}function ae(e,t){e.closest(".exercises_item").remove(),T(t),updFavorites.length===0&&V()}function V(){console.log("EmptyMessage"),u.innerHTML=`
    <div class="empty-list">
      <img class="empty-item"
        srcset="${L}, ${te}"
        src="${L}"
        alt="dumbbell"
        width="85"
        height="52"
      />
      <p class="empty-message">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>
    </div>`}const ce=document.getElementById("modal_rating"),_=document.getElementById("modal"),le=document.querySelector(".modal_rating_close"),d=document.querySelector(".modal_rating_window"),$=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),y=document.querySelector(".modal_rating_form");let a=0,Y="",K="",p=0,F="";ce.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,_.classList.add("disactive_video_window"),d.showModal()});le.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,y.reset(),d.close(),_.classList.remove("disactive_video_window")});d.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,l.textContent=`${a}.0`,y.reset(),d.close(),_.classList.remove("disactive_video_window"))});const de=()=>{l.textContent=`${a}.0`};for(let e=0;e<$.length;e++){const t=$[e];t.addEventListener("mouseenter",()=>{const n=t.dataset.rating;l.textContent=`${n}.0`}),t.addEventListener("mouseleave",de),t.addEventListener("click",()=>{p=t.dataset.rating,a=p,l.textContent=`${p}.0`})}y.addEventListener("submit",ue);function ue(e){e.preventDefault();const t=e.currentTarget;Y=t.elements.email.value,K=t.elements.coment.value,a===0?b.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):me().then(()=>{d.close(),_.classList.remove("disactive_video_window"),b.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{b.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,l.textContent=`${a}.0`,y.reset()})}function me(){let e={};e.rate=parseInt(p),e.email=Y,e.review=K,F=s.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${F}/rating`,t).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}let g=document.getElementById("toTop");g.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?g.style.display="block":g.style.display="none"});g.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{fe as a,_e as d,m as e,ge as l,ye as o};
//# sourceMappingURL=scroll_to_top-39b755b6.js.map
