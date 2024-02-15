import{a as N,i as h}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const ue=document.getElementById("loader");function ge(e){e.style.display="block"}function me(e){e.style.display="none"}const s=document.getElementById("modal");s.querySelector(".modal-content");const B=s.querySelector(".close"),C=s.querySelector(".exercise-gif"),P=s.querySelector(".exercise-title");s.querySelectorAll(".exercise-star");const W=s.querySelector(".exercise-target"),J=s.querySelector(".exercise-bodyparts"),Y=s.querySelector(".exercise-equipment"),U=s.querySelector(".exercise-popular"),V=s.querySelector(".exercise-calories"),z=s.querySelector(".exercise-description"),F=s.querySelector(".favorite-button"),K=document.querySelector(".rating-button"),G=document.querySelector(".rating-number"),q=document.querySelector(".modal_rating"),b="ENERGY_FLOW_FAVORITES_KEY";function pe(e){const t=e.target.closest(".exercises-item");if(!t)return;const o=X(t);$(o),s.style.display="block"}function H(e){const t=e.target.closest(".exercises_item");if(!t)return;const o=Z(t);$(o),s.style.display="block"}B.addEventListener("click",()=>{s.style.display="none"});window.addEventListener("click",e=>{e.target===s&&(s.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(s.style.display="none")});window.addEventListener("click",e=>{K&&q&&(q.dataset.id=s.dataset.id)});function w(){const e=window.localStorage.getItem(b);return e&&e!=="undefined"?JSON.parse(e):[]}function j(e){const t=w(),o=t.length?[...t,e]:[e];window.localStorage.setItem(b,JSON.stringify(o))}function O(e){return!!w().find(o=>o===e)}function T(e){const o=O(e)?"Remove from":"Add to favorites";F.innerHTML=`${o}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function Q(e){const o=w().filter(i=>i!==e);window.localStorage.setItem(b,JSON.stringify(o))}F.addEventListener("click",e=>{if(!s){console.log(s);return}const t=s.dataset.id;O(t)?(Q(t),d&&S()):(j(t),d&&S()),T(t)});function X(e){const t=e.querySelector(".exercises-title-text"),o=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],n=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:a,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:A(t.textContent),burnedCalories:o.textContent,bodyPart:i.textContent,target:n.textContent,rating:r.textContent,gifUrl:a,description:y,equipment:v,popularity:x,_id:E}}function Z(e){const t=e.querySelector(".exercises_title_text"),o=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],n=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:a,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:A(t.textContent),burnedCalories:o.textContent,bodyPart:i.textContent,target:n.textContent,rating:r.textContent,gifUrl:a,description:y,equipment:v,popularity:x,_id:E}}function $(e){C.src=e.gifUrl,C.alt=e.title,G.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((o,i)=>{const n=Math.trunc(t),r=i+1<=n?100:i+1>Math.ceil(t)?0:(t-n)*100;o.style.width=`${r}%`}),P.textContent=e.title,W.textContent=e.target,J.textContent=e.bodyPart,Y.textContent=e.equipment,U.textContent=e.popularity,V.textContent=e.burnedCalories,z.textContent=e.description,s.dataset.id=e._id,T(e._id)}function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}const D="https://energyflow.b.goit.study/api/exercises/",d=document.querySelector(".workouts-list");let g=[];d&&S();function S(){g=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[],console.log(g),g.length>0?(console.log("32 JS full"),d.innerHTML="",g.forEach(e=>{ee(e).then(t=>{const o=t.data;console.log("37 dodaem rozmitky"),te(o)}).catch(t=>{console.log(t)})})):(console.log("45 JS empty"),R())}function ee(e){return console.log("64 zaput"),N.get(`${D}/${e}`)}function te(e){console.log("70 stvor rozmitku");const t=oe(e);d.insertAdjacentHTML("beforeend",t),ne(e),document.querySelectorAll(".exercises_start").forEach(o=>o.addEventListener("click",H))}function oe(e){return console.log("125 rozmitka Li"),`
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
  `}function ne(e){document.querySelectorAll(".workout-card__remove-btn").forEach(o=>{o.getAttribute("data-workout-id")===e._id&&o.addEventListener("click",()=>{se(o,e._id)})})}function se(e,t){e.closest(".exercises_item").remove();const i=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(n=>n._id!==t._id);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(i)),i.length===0&&R()}function R(){d.innerHTML=`
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
    </div>`}const re=document.getElementById("modal_rating"),f=document.getElementById("modal"),ie=document.querySelector(".modal_rating_close"),u=document.querySelector(".modal_rating_window"),L=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),_=document.querySelector(".modal_rating_form");let c=0,M="",I="",m=0,k="";re.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,f.classList.add("disactive_video_window"),u.showModal()});ie.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,_.reset(),u.close(),f.classList.remove("disactive_video_window")});u.addEventListener("click",e=>{e.target===e.currentTarget&&(c=0,l.textContent=`${c}.0`,_.reset(),u.close(),f.classList.remove("disactive_video_window"))});const ce=()=>{l.textContent=`${c}.0`};for(let e=0;e<L.length;e++){const t=L[e];t.addEventListener("mouseenter",()=>{const o=t.dataset.rating;l.textContent=`${o}.0`}),t.addEventListener("mouseleave",ce),t.addEventListener("click",()=>{m=t.dataset.rating,c=m,l.textContent=`${m}.0`})}_.addEventListener("submit",ae);function ae(e){e.preventDefault();const t=e.currentTarget;M=t.elements.email.value,I=t.elements.coment.value,c===0?h.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):le().then(()=>{u.close(),f.classList.remove("disactive_video_window"),h.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{h.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{c=0,l.textContent=`${c}.0`,_.reset()})}function le(){let e={};e.rate=parseInt(m),e.email=M,e.review=I,k=s.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${k}/rating`,t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let p=document.getElementById("toTop");p.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?p.style.display="block":p.style.display="none"});p.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{ge as a,me as d,ue as l,pe as o};
//# sourceMappingURL=scroll_to_top-e4c3aa5e.js.map
