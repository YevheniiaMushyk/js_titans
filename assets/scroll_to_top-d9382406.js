import{a as I,i as h}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const le=document.getElementById("loader");function de(e){e.style.display="block"}function ue(e){e.style.display="none"}const n=document.getElementById("modal");n.querySelector(".modal-content");const N=n.querySelector(".close"),C=n.querySelector(".exercise-gif"),P=n.querySelector(".exercise-title");n.querySelectorAll(".exercise-star");const B=n.querySelector(".exercise-target"),W=n.querySelector(".exercise-bodyparts"),J=n.querySelector(".exercise-equipment"),Y=n.querySelector(".exercise-popular"),U=n.querySelector(".exercise-calories"),V=n.querySelector(".exercise-description"),k=n.querySelector(".favorite-button");document.querySelector(".rating-button");const z=document.querySelector(".rating-number");document.querySelector(".modal_rating");const b="ENERGY_FLOW_FAVORITES_KEY";function ge(e){const t=e.target.closest(".exercises-item");if(!t)return;const o=j(t);T(o),n.style.display="block"}function K(e){const t=e.target.closest(".exercises_item");if(!t)return;const o=Q(t);T(o),n.style.display="block"}N.addEventListener("click",()=>{n.style.display="none"});window.addEventListener("click",e=>{e.target===n&&(n.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(n.style.display="none")});function w(){const e=window.localStorage.getItem(b);return e&&e!=="undefined"?JSON.parse(e):[]}function G(e){const t=w(),o=t.length?[...t,e]:[e];window.localStorage.setItem(b,JSON.stringify(o))}function F(e){return!!w().find(o=>o===e)}function O(e){const o=F(e)?"Remove from":"Add to favorites";k.innerHTML=`${o}  
        <svg class="modal_icon" width="13" height="15">  
            <use href="./img/icons.svg#icon-heart"></use>  
        </svg>`}function H(e){const o=w().filter(i=>i!==e);window.localStorage.setItem(b,JSON.stringify(o))}k.addEventListener("click",e=>{if(!n)return;const t=n.dataset.id;F(t)?(H(t),d&&S()):(G(t),d&&S()),O(t)});function j(e){const t=e.querySelector(".exercises-title-text"),o=e.querySelector(".exercises-text__dynamic"),i=e.querySelectorAll(".exercises-text__dynamic")[1],s=e.querySelectorAll(".exercises-text__dynamic")[2],r=e.querySelector(".exercises-rating__text"),{gifurl:a,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:$(t.textContent),burnedCalories:o.textContent,bodyPart:i.textContent,target:s.textContent,rating:r.textContent,gifUrl:a,description:y,equipment:v,popularity:x,_id:E}}function Q(e){const t=e.querySelector(".exercises_title_text"),o=e.querySelector(".exercises_text__dynamic"),i=e.querySelectorAll(".exercises_text__dynamic")[1],s=e.querySelectorAll(".exercises_text__dynamic")[2],r=e.querySelector(".exercises_rating__text"),{gifurl:a,description:y,equipment:v,popularity:x,id:E}=e.dataset;return{title:$(t.textContent),burnedCalories:o.textContent,bodyPart:i.textContent,target:s.textContent,rating:r.textContent,gifUrl:a,description:y,equipment:v,popularity:x,_id:E}}function T(e){C.src=e.gifUrl,C.alt=e.title,z.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((o,i)=>{const s=Math.trunc(t),r=i+1<=s?100:i+1>Math.ceil(t)?0:(t-s)*100;o.style.width=`${r}%`}),P.textContent=e.title,B.textContent=e.target,W.textContent=e.bodyPart,J.textContent=e.equipment,Y.textContent=e.popularity,U.textContent=e.burnedCalories,V.textContent=e.description,n.dataset.id=e._id,O(e._id)}function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}const X="https://energyflow.b.goit.study/api/exercises/",d=document.querySelector(".workouts-list");let g=[];d&&S();function S(){g=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[],console.log(g),g.length>0?(console.log("32 JS full"),d.innerHTML="",g.forEach(e=>{Z(e).then(t=>{const o=t.data;console.log("37 dodaem rozmitky"),D(o)}).catch(t=>{console.log(t)})})):(console.log("45 JS empty"),A())}function Z(e){return console.log("64 zaput"),I.get(`${X}/${e}`)}function D(e){console.log("70 stvor rozmitku");const t=ee(e);d.insertAdjacentHTML("beforeend",t),te(e),document.querySelectorAll(".exercises_start").forEach(o=>o.addEventListener("click",K))}function ee(e){return console.log("125 rozmitka Li"),`
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
  `}function te(e){document.querySelectorAll(".workout-card__remove-btn").forEach(o=>{o.getAttribute("data-workout-id")===e._id&&o.addEventListener("click",()=>{oe(o,e._id)})})}function oe(e,t){e.closest(".exercises_item").remove();const i=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(s=>s._id!==t._id);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(i)),i.length===0&&A()}function A(){d.innerHTML=`
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
    </div>`}const se=document.getElementById("modal_rating"),_=document.getElementById("modal"),ne=document.querySelector(".modal_rating_close"),u=document.querySelector(".modal_rating_window"),q=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),f=document.querySelector(".modal_rating_form");let c=0,R="",M="",m=0,L="";se.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,_.classList.add("disactive_video_window"),u.showModal()});ne.addEventListener("click",()=>{c=0,l.textContent=`${c}.0`,f.reset(),u.close(),_.classList.remove("disactive_video_window")});u.addEventListener("click",e=>{e.target===e.currentTarget&&(c=0,l.textContent=`${c}.0`,f.reset(),u.close(),_.classList.remove("disactive_video_window"))});const re=()=>{l.textContent=`${c}.0`};for(let e=0;e<q.length;e++){const t=q[e];t.addEventListener("mouseenter",()=>{const o=t.dataset.rating;l.textContent=`${o}.0`}),t.addEventListener("mouseleave",re),t.addEventListener("click",()=>{m=t.dataset.rating,c=m,l.textContent=`${m}.0`})}f.addEventListener("submit",ie);function ie(e){e.preventDefault();const t=e.currentTarget;R=t.elements.email.value,M=t.elements.coment.value,c===0?h.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):ce().then(()=>{u.close(),_.classList.remove("disactive_video_window"),h.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{h.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{c=0,l.textContent=`${c}.0`,f.reset()})}function ce(){let e={};e.rate=parseInt(m),e.email=R,e.review=M,L=n.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${L}/rating`,t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let p=document.getElementById("toTop");p.style.display="none";window.addEventListener("scroll",()=>{window.scrollY>100?p.style.display="block":p.style.display="none"});p.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})};export{de as a,ue as d,le as l,ge as o};
//# sourceMappingURL=scroll_to_top-d9382406.js.map
