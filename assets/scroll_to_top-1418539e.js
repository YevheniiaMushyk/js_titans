import{a as M,i as v}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const ge=document.getElementById("loader");function me(e){e.style.display="block"}function fe(e){e.style.display="none"}const s=document.getElementById("modal");s.querySelector(".modal-content");const B=s.querySelector(".close"),S=s.querySelector(".exercise-gif"),Y=s.querySelector(".exercise-title");s.querySelectorAll(".exercise-star");const P=s.querySelector(".exercise-target"),J=s.querySelector(".exercise-bodyparts"),V=s.querySelector(".exercise-equipment"),K=s.querySelector(".exercise-popular"),U=s.querySelector(".exercise-calories"),G=s.querySelector(".exercise-description"),q=s.querySelector(".favorite-button"),H=document.querySelector(".rating-button"),j=document.querySelector(".rating-number");let m=0;const w=document.querySelector(".modal_rating"),x="ENERGY_FLOW_FAVORITES_KEY";function z(e){m=0;const t=e.target.closest(".exercises_item");if(!t)return;const o=Z(t);D(o),s.style.display="block",m=1}B.addEventListener("click",()=>{s.style.display="none"});window.addEventListener("click",e=>{e.target===s&&(s.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(s.style.display="none")});window.addEventListener("click",e=>{H&&w&&(w.dataset.id=s.dataset.id)});function E(){const e=window.localStorage.getItem(x);return e&&e!=="undefined"?JSON.parse(e):[]}function Q(e){const t=E(),o=t.length?[...t,e]:[e];window.localStorage.setItem(x,JSON.stringify(o))}function k(e){return!!E().find(o=>o===e)}function F(e){const o=k(e)?"Remove from":"Add to favorites";q.innerHTML=`${o}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function X(e){const o=E().filter(r=>r!==e);window.localStorage.setItem(x,JSON.stringify(o))}q.addEventListener("click",e=>{if(!s){console.log(s);return}const t=s.dataset.id;k(t)?(X(t),m===1&&re()):Q(t),F(t)});function Z(e){const t=e.querySelector(".exercises_title_text"),o=e.querySelector(".exercises_text__dynamic"),r=e.querySelectorAll(".exercises_text__dynamic")[1],n=e.querySelectorAll(".exercises_text__dynamic")[2],i=e.querySelector(".exercises_rating__text"),{gifurl:l,description:$,equipment:A,popularity:N,id:W}=e.dataset;return{title:ee(t.textContent),burnedCalories:o.textContent,bodyPart:r.textContent,target:n.textContent,rating:i.textContent,gifUrl:l,description:$,equipment:A,popularity:N,_id:W}}function D(e){S.src=e.gifUrl,S.alt=e.title,j.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((o,r)=>{const n=Math.trunc(t),i=r+1<=n?100:r+1>Math.ceil(t)?0:(t-n)*100;o.style.width=`${i}%`}),Y.textContent=e.title,P.textContent=e.target,J.textContent=e.bodyPart,V.textContent=e.equipment,K.textContent=e.popularity,U.textContent=e.burnedCalories,G.textContent=e.description,s.dataset.id=e._id,F(e._id)}function ee(e){return e.charAt(0).toUpperCase()+e.slice(1)}m=0;const te="https://energyflow.b.goit.study/api/exercises/",p=document.querySelector(".workouts-list");p.innerHTML="";function O(e){return M.get(`${te}/${e}`)}let d=!0;const b=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];b.length>0?b.forEach(e=>{O(e).then(t=>{const o=t.data;T(o)}).catch(t=>{console.log(t)})}):(d=!1,h());function T(e){const t=ne(e);p.insertAdjacentHTML("beforeend",t),oe(e),document.querySelectorAll(".exercises_start").forEach(o=>o.addEventListener("click",z))}function oe(e){document.querySelectorAll(".workout-card__remove-btn").forEach(o=>{o.getAttribute("data-workout-id")===e._id&&o.addEventListener("click",()=>{se(o,e._id)})})}function se(e,t){e.closest(".exercises_item").remove();const r=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(n=>n!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(r)),localStorage.removeItem("ENERGY_FLOW_FAVORITES_KEY"),r.length===0&&(d=!1),r.length===0&&h()}function ne(e){return`
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
  `}function h(){d||(p.innerHTML=`
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
    </div>`)}function re(){d=!0;const e=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];p.innerHTML="",e.length>0?e.forEach(t=>{O(t).then(o=>{const r=o.data;T(r)}).catch(o=>{console.log(o)})}):(d=!1,h())}const ie=document.getElementById("modal_rating"),y=document.getElementById("modal"),ae=document.querySelector(".modal_rating_close"),u=document.querySelector(".modal_rating_window"),L=document.querySelectorAll(".fa-solid"),c=document.querySelector(".modal_rating_digit"),_=document.querySelector(".modal_rating_form");let a=0,I="",R="",g=0,C="";ie.addEventListener("click",()=>{a=0,c.textContent=`${a}.0`,y.classList.add("disactive_video_window"),u.showModal()});ae.addEventListener("click",()=>{a=0,c.textContent=`${a}.0`,_.reset(),u.close(),y.classList.remove("disactive_video_window")});u.addEventListener("click",e=>{e.target===e.currentTarget&&(a=0,c.textContent=`${a}.0`,_.reset(),u.close(),y.classList.remove("disactive_video_window"))});const ce=()=>{c.textContent=`${a}.0`};for(let e=0;e<L.length;e++){const t=L[e];t.addEventListener("mouseenter",()=>{const o=t.dataset.rating;c.textContent=`${o}.0`}),t.addEventListener("mouseleave",ce),t.addEventListener("click",()=>{g=t.dataset.rating,a=g,c.textContent=`${g}.0`})}_.addEventListener("submit",le);function le(e){e.preventDefault();const t=e.currentTarget;I=t.elements.email.value,R=t.elements.coment.value,a===0?v.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):de().then(()=>{u.close(),y.classList.remove("disactive_video_window"),v.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{v.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{a=0,c.textContent=`${a}.0`,_.reset()})}function de(){let e={};e.rate=parseInt(g),e.email=I,e.review=R,C=s.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${C}/rating`,t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let f=document.getElementById("toTop");f.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?f.style.display="block":f.style.display="none"});f.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{me as a,fe as d,ge as l};
//# sourceMappingURL=scroll_to_top-1418539e.js.map
