import"./assets/loader-636fdc7a.js";import{a as d,i as _}from"./assets/vendor-8cce9181.js";const g=document.querySelector(".favheader__button"),p=document.querySelector(".favmodal__button_close"),u=document.querySelector(".favmodal");g.addEventListener("click",()=>{u.showModal()});p.addEventListener("click",()=>{u.close()});const a={quoteText:document.querySelector(".favorites-text"),quoteAuthor:document.querySelector(".favorites-sub-title")},v="https://energyflow.b.goit.study/api/quote";async function m(t){try{const e=localStorage.getItem("quoteLocalData");if(e){const o=JSON.parse(e),l=c();if(o.date===l){n(o.author,o.quote);return}}const r=(await d.get(t)).data;if(r){const o={quote:r.quote,author:r.author,date:c()};localStorage.setItem("quoteLocalData",JSON.stringify(o)),n(o.author,o.quote)}}catch(e){_.error("Failed to fetch quote data"),console.error(e)}}function c(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();return`${e}-${s}-${r}`}function n(t,e){a.quoteAuthor.textContent=t,a.quoteText.textContent=e}m(v);const x="https://energyflow.b.goit.study/api/exercises/",f=document.querySelector(".workouts-list");function h(t){return d.get(`${x}/${t}`)}const i=JSON.parse(localStorage.getItem("workoutId"))||[];i.length>0&&i.forEach(t=>{h(t).then(e=>{const s=e.data;S(s)}).catch(e=>{console.error(e)})});function S(t){const e=q(t);f.insertAdjacentHTML("beforeend",e),k(t)}function k(t){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===t._id&&s.addEventListener("click",()=>{y(s,t._id)})})}function y(t,e){t.closest(".exercises-item").remove();const r=(JSON.parse(localStorage.getItem("workoutId"))||[]).filter(o=>o!==e);localStorage.setItem("workoutId",JSON.stringify(r)),r.length===0&&localStorage.removeItem("workoutId")}function q(t){return`
    <li class="exercises-item">
      <div class="exercises-sub-title">
        <div class="exercises__workout-rating">
          <p class="exercises-workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${t._id}">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <a href="./modal_video.js" class="exercises-item__link">
          <div class="exercises-start">
            <span class="exercises-start__text">Start</span>
            <svg class="exercises-start__svg" width="13" height="13" stroke="rgb(27, 27, 27)">
              <use href="./img/icons.svg#icon-arrow"></use>
            </svg>
          </div>
        </a>
      </div>
      <div class="exercises-title">
        <svg class="exercises-title__svg" width="24" height="24">
          <use href="./img/icons.svg#icon-fav_run_man"></use>
        </svg>
        <span class="exercises-title-text">${t.name}</span>
      </div>
      <div class="exercises-text">
        <p class="exercises-text__content">
          <span class="exercises-text__static">Burned calories:</span>
          <span class="exercises-text__dynamic">${t.burnedCalories} / 3 min</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Body part:</span>
          <span class="exercises-text__dynamic">${t.bodyPart}</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Target:</span>
          <span class="exercises-text__dynamic">${t.target}</span>
        </p>
      </div>
    </li>
  `}
//# sourceMappingURL=commonHelpers.js.map
