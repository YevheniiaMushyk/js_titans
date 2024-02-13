import{o as p}from"./assets/loader-27286289.js";import{a as u,i as f}from"./assets/vendor-8cce9181.js";const x=document.querySelector(".favheader__button"),v=document.querySelector(".favmodal__button_close"),l=document.querySelector(".favmodal");x.addEventListener("click",()=>{l.showModal()});v.addEventListener("click",()=>{l.close()});const c={quoteText:document.querySelector(".favorites-text"),quoteAuthor:document.querySelector(".favorites-sub-title")},h="https://energyflow.b.goit.study/api/quote";async function y(e){try{const t=localStorage.getItem("quoteLocalData");if(t){const r=JSON.parse(t),m=n();if(r.date===m){i(r.author,r.quote);return}}const o=(await u.get(e)).data;if(o){const r={quote:o.quote,author:o.author,date:n()};localStorage.setItem("quoteLocalData",JSON.stringify(r)),i(r.author,r.quote)}}catch(t){f.error("Failed to fetch quote data"),console.error(t)}}function n(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}-${s}-${o}`}function i(e,t){c.quoteAuthor.textContent=e,c.quoteText.textContent=t}y(h);const b="https://energyflow.b.goit.study/api/exercises/",_=document.querySelector(".workouts-list");function S(e){return u.get(`${b}/${e}`)}let a=!0;const d=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];d.length>0?d.forEach(e=>{S(e).then(t=>{const s=t.data;k(s)}).catch(t=>{console.error(t)})}):(a=!1,g());const E=document.querySelectorAll(".exercises-item__button");E.forEach(e=>{e.addEventListener("click",t=>{p(t)})});function k(e){const t=I(e);_.insertAdjacentHTML("beforeend",t),q(e)}function q(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{w(s,e._id)})})}function w(e,t){e.closest(".exercises-item").remove();const o=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(r=>r!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(o)),localStorage.removeItem("workoutId"),o.length===0&&(a=!1),o.length===0&&g()}function I(e){return`
    <li class="exercises-item">
      <div class="exercises-sub-title">
        <div class="exercises__workout-rating">
          <p class="exercises-workout">workout</p>
          <button class="workout-card__remove-btn" data-workout-id="${e._id}">
            <svg class="workout-card__icon" width="16" height="16">
              <use href="./img/icons.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
     <button class="exercises-item__button" data-workout-id="${e._id}">
  <div class="exercises-start">
    <span class="exercises-start__text">Start</span>
    <svg
      class="exercises-start__svg"
      width="13"
      height="13"
      stroke="rgb(27, 27, 27)"
    >
      <use href="./img/icons.svg#icon-arrow"></use>
    </svg>
  </div>
</button>
      </div>
      <div class="exercises-title">
        <svg class="exercises-title__svg" width="24" height="24">
          <use href="./img/icons.svg#icon-fav_run_man"></use>
        </svg>
        <span class="exercises-title-text">${e.name}</span>
      </div>
      <div class="exercises-text">
        <p class="exercises-text__content">
          <span class="exercises-text__static">Burned calories:</span>
          <span class="exercises-text__dynamic">${e.burnedCalories} / 3 min</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Body part:</span>
          <span class="exercises-text__dynamic">${e.bodyPart}</span>
        </p>
        <p class="exercises-text__content">
          <span class="exercises-text__static">Target:</span>
          <span class="exercises-text__dynamic">${e.target}</span>
        </p>
      </div>
    </li>
  `}function g(){a||(_.innerHTML=`
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
    </div>`)}
//# sourceMappingURL=commonHelpers.js.map
