import{i as u,a as z}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const ge=document.getElementById("loader");function fe(e){e.style.display="block"}function _e(e){e.style.display="none"}const d="/js_titans/assets/icons-e2846af5.svg",L="ENERGY_FLOW_FAVORITES_KEY";function p(){const e=window.localStorage.getItem(L);return e&&e!=="undefined"?JSON.parse(e):[]}function G(e){const t=p(),s=t.length?[...t,e]:[e];window.localStorage.setItem(L,JSON.stringify(s))}function T(e){return!!p().find(s=>s._id===e)}function M(e){const s=p().filter(i=>i._id!==e);window.localStorage.setItem(L,JSON.stringify(s))}const n=document.getElementById("modal");n.querySelector(".modal-content");const Q=n.querySelector(".close"),q=n.querySelector(".exercise-gif"),A=n.querySelector(".exercise-title");n.querySelectorAll(".exercise-star");const O=n.querySelector(".exercise-target"),P=n.querySelector(".exercise-bodyparts"),R=n.querySelector(".exercise-equipment"),B=n.querySelector(".exercise-popular"),U=n.querySelector(".exercise-calories"),N=n.querySelector(".exercise-description"),f=n.querySelector(".favorite-button");document.querySelector(".rating-button");const W=document.querySelector(".rating-number");document.querySelector(".modal_rating");function ye(e){const t=e.target.closest(".exercises-item");if(!t)return;const s=Z(t);I(s),n.style.display="block"}function X(e){const t=e.target.closest(".exercises_item");if(!t)return;const s=D(t);I(s),n.style.display="block"}Q.addEventListener("click",()=>{n.style.display="none"});window.addEventListener("click",e=>{e.target===n&&(n.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(n.style.display="none")});f.addEventListener("click",e=>{if(!n)return;const t=n.dataset.id;if(T(t))M(t),u.info({message:"Exercise card has been removed from favorites",position:"topCenter"});else{const i=ee();G(i),u.info({message:"Exercise card has been added to favorites",position:"topCenter"})}g&&J(),H(t)});function H(e){const s=T(e)?"Remove from":"Add to favorites";switch(s){case"Remove from":f.innerHTML=`${s}
        <svg class="modal_icon" width="13" height="15"><use href="${d}#icon-heart_full"></use></svg>`;break;case"Add to favorites":f.innerHTML=`${s}
        <svg class="modal_icon" width="13" height="15"><use href="${d}#icon-heart"></use></svg>`;break;default:f.innerHTML=`${s}
        <svg class="modal_icon" width="13" height="15"><use href="${d}#icon-heart"></use></svg>`}}function Z(e){const t=e.querySelector(".exercises-title-text"),s=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],o=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:c,description:h,equipment:E,popularity:C,time:b,id:S}=e.dataset;return{title:j(t.textContent),burnedCalories:s.textContent,bodyPart:i.textContent,target:o.textContent,rating:r.textContent,gifUrl:c,description:h,equipment:E,popularity:C,time:b,_id:S}}function D(e){const t=e.querySelector(".exercises_title_text"),s=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],o=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:c,description:h,equipment:E,popularity:C,time:b,id:S}=e.dataset;return{title:j(t.textContent),burnedCalories:s.textContent,bodyPart:i.textContent,target:o.textContent,rating:r.textContent,gifUrl:c,description:h,equipment:E,popularity:C,time:b,_id:S}}function ee(){return{rating:parseFloat(W.textContent),gifUrl:q.src,time:parseFloat(n.dataset.time),popularity:parseFloat(B.textContent),equipment:R.textContent,description:N.textContent,target:O.textContent,bodyPart:P.textContent,burnedCalories:parseFloat(U.textContent),title:A.textContent,_id:n.dataset.id}}function I(e){q.src=e.gifUrl,q.alt=e.title,W.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((s,i)=>{const o=Math.trunc(t),r=i+1<=o?100:i+1>Math.ceil(t)?0:(t-o)*100;s.style.width=`${r}%`}),A.textContent=e.title,O.textContent=e.target,P.textContent=e.bodyPart,R.textContent=e.equipment,B.textContent=e.popularity,U.textContent=e.burnedCalories,N.textContent=e.description,n.dataset.time=e.time,n.dataset.id=e._id,H(e._id)}function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}const $="/js_titans/assets/dumbbell@1x-min-52b04e82.png",te="/js_titans/assets/dumbbell@2x-min-b1e2f335.png",se="https://energyflow.b.goit.study/api/exercises/",g=document.querySelector(".workouts-list");let w=[];g&&J();function J(){w=p(),w.length>0?(g.innerHTML="",w.forEach(e=>{ne(e._id).then(t=>{const s=t.data;oe(s)}).catch(t=>{console.log(t)})})):V()}function ne(e){return z.get(`${se}/${e}`)}function oe(e){const t=re(e);g.insertAdjacentHTML("beforeend",t),ie(e),document.querySelectorAll(".exercises_start").forEach(s=>s.addEventListener("click",X))}function re(e){return`
    <li class="exercises_item" data-gifUrl=${e.gifUrl} data-description="${e.description}" data-equipment=${e.equipment} data-popularity=${e.popularity} data-id=${e._id} data-time=${e.time}>
      <div class="exercises_sub_title">
        <div class="exercises__workout_rating">
          <p class="exercises_workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16"><use href=${d}#icon-trash></use></svg>
          </button>
        </div>

  <div class="exercises_start">  
    <span class="exercises_start__text">Start</span>
    <svg
      class="exercises_start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    ><use href=${d}#icon-arrow></use></svg>    
  </div>

      </div>
      <div class="exercises_title">
        <svg class="exercises_title__svg" width="24" height="24"><use href=${d}#icon-fav_run_man></use></svg>
        <span class="exercises_title_text">${e.name}<span class="exercises_tooltiptext">${e.name}</span></span>
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
  `}function ie(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{ae(s,e._id)})})}function ae(e,t){e.closest(".exercises_item").remove(),M(t),p().length<1&&V()}function V(){console.log("EmptyMessage"),g.innerHTML=`
    <div class="empty-list">
      <img class="empty-item"
        srcset="${$}, ${te}"
        src="${$}"
        alt="dumbbell"
        width="85"
        height="52"
      />
      <p class="empty-message">
        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.
      </p>
    </div>`}const ce=document.getElementById("modal_rating"),v=document.getElementById("modal"),le=document.querySelector(".modal_rating_close"),m=document.querySelector(".modal_rating_window"),k=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),x=document.querySelector(".modal_rating_form");let a=0,Y="",K="",_=0,F="";ce.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,v.classList.add("disactive_video_window"),m.showModal()});le.addEventListener("click",()=>{a=0,l.textContent=`${a}.0`,x.reset(),m.close(),v.classList.remove("disactive_video_window")});m.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,l.textContent=`${a}.0`,x.reset(),m.close(),v.classList.remove("disactive_video_window"))});const de=()=>{l.textContent=`${a}.0`};for(let e=0;e<k.length;e++){const t=k[e];t.addEventListener("mouseenter",()=>{const s=t.dataset.rating;l.textContent=`${s}.0`}),t.addEventListener("mouseleave",de),t.addEventListener("click",()=>{_=t.dataset.rating,a=_,l.textContent=`${_}.0`})}x.addEventListener("submit",ue);function ue(e){e.preventDefault();const t=e.currentTarget;Y=t.elements.email.value,K=t.elements.coment.value,a===0?u.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):me().then(()=>{m.close(),v.classList.remove("disactive_video_window"),u.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{u.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,l.textContent=`${a}.0`,x.reset()})}function me(){let e={};e.rate=parseInt(_),e.email=Y,e.review=K,F=n.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${F}/rating`,t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}let y=document.getElementById("toTop");y.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?y.style.display="block":y.style.display="none"});y.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{fe as a,_e as d,d as e,ge as l,ye as o};
//# sourceMappingURL=scroll_to_top-33d43bf5.js.map
