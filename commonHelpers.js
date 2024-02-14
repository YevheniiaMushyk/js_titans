import{a as f,l as c,d as v}from"./assets/scroll_to_top-e863f7bb.js";import{a as l,i as x}from"./assets/vendor-8cce9181.js";const h=document.querySelector(".favheader__button"),y=document.querySelector(".favmodal__button_close"),g=document.querySelector(".favmodal");h.addEventListener("click",()=>{g.showModal()});y.addEventListener("click",()=>{g.close()});const n={quoteText:document.querySelector(".favorites-text"),quoteAuthor:document.querySelector(".favorites-sub-title")},S="https://energyflow.b.goit.study/api/quote";async function b(e){try{f(c);const t=localStorage.getItem("quoteLocalData");if(t){const a=JSON.parse(t),p=i();if(a.date===p){d(a.author,a.quote);return}}const o=(await l.get(e)).data;if(o){const a={quote:o.quote,author:o.author,date:i()};localStorage.setItem("quoteLocalData",JSON.stringify(a)),d(a.author,a.quote)}}catch(t){x.error("Failed to fetch quote data"),console.error(t)}finally{v(c)}}function i(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}-${s}-${o}`}function d(e,t){n.quoteAuthor.textContent=e,n.quoteText.textContent=t}b(S);const k="https://energyflow.b.goit.study/api/exercises/",m=document.querySelector(".workouts-list");function q(e){return l.get(`${k}/${e}`)}let r=!0;const u=JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[];u.length>0?u.forEach(e=>{q(e).then(t=>{const s=t.data;E(s)}).catch(t=>{console.error(t)})}):(r=!1,_());function E(e){console.log(e._id);const t=I(e);m.insertAdjacentHTML("beforeend",t),w(e)}function w(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{L(s,e._id)})})}function L(e,t){e.closest(".exercises-item").remove();const o=(JSON.parse(localStorage.getItem("ENERGY_FLOW_FAVORITES_KEY"))||[]).filter(a=>a!==t);localStorage.setItem("ENERGY_FLOW_FAVORITES_KEY",JSON.stringify(o)),localStorage.removeItem("workoutId"),o.length===0&&(r=!1),o.length===0&&_()}function I(e){return`
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
       
    
  <div class="exercises-start">
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
  `}function _(){r||(m.innerHTML=`
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
