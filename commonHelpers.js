import{a as f,l as c,d as x,o as v}from"./assets/scroll_to_top-ce4c3695.js";import{a as u,i as h}from"./assets/vendor-8cce9181.js";const y=document.querySelector(".favheader__button"),S=document.querySelector(".favmodal__button_close"),_=document.querySelector(".favmodal");y.addEventListener("click",()=>{_.showModal()});S.addEventListener("click",()=>{_.close()});const i={quoteText:document.querySelector(".favorites-text"),quoteAuthor:document.querySelector(".favorites-sub-title")},b="https://energyflow.b.goit.study/api/quote";async function E(e){try{f(c);const t=localStorage.getItem("quoteLocalData");if(t){const o=JSON.parse(t),m=n();if(o.date===m){d(o.author,o.quote);return}}const a=(await u.get(e)).data;if(a){const o={quote:a.quote,author:a.author,date:n()};localStorage.setItem("quoteLocalData",JSON.stringify(o)),d(o.author,o.quote)}}catch(t){h.error("Failed to fetch quote data"),console.error(t)}finally{x(c)}}function n(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return`${t}-${s}-${a}`}function d(e,t){i.quoteAuthor.textContent=e,i.quoteText.textContent=t}E(b);const q="https://energyflow.b.goit.study/api/exercises/",p=document.querySelector(".workouts-list");function k(e){return u.get(`${q}/${e}`)}let r=!0;const l=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];l.length>0?l.forEach(e=>{k(e).then(t=>{const s=t.data;L(s)}).catch(t=>{console.error(t)})}):(r=!1,g());function L(e){const t=O(e);p.insertAdjacentHTML("beforeend",t),I(e),document.querySelectorAll(".exercises_start").forEach(s=>s.addEventListener("click",v))}function I(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{$(s,e._id)})})}function $(e,t){e.closest(".exercises-item").remove();const a=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(o=>o!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(a)),localStorage.removeItem("workoutId"),a.length===0&&(r=!1),a.length===0&&g()}function O(e){return`
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
      <span class="exercises_rating__text">${String(e.rating).padEnd(3,".0")}</span>
    </li>
  `}function g(){r||(p.innerHTML=`
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
