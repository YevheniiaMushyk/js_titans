import"./assets/loader-6257e73e.js";import{a as i}from"./assets/vendor-8cce9181.js";const n=document.querySelector(".favheader__button"),d=document.querySelector(".favmodal__button_close"),c=document.querySelector(".favmodal");n.addEventListener("click",()=>{c.showModal()});d.addEventListener("click",()=>{c.close()});const l="https://energyflow.b.goit.study/api/exercises/",u=document.querySelector(".workouts-list");function _(e){return i.get(`${l}/${e}`)}const r=JSON.parse(localStorage.getItem("workoutId"))||[];r.length>0&&r.forEach(e=>{_(e).then(s=>{const t=s.data;v(t)}).catch(s=>{console.error(s)})});function v(e){const s=g(e);u.insertAdjacentHTML("beforeend",s),m(e)}function m(e){document.querySelectorAll(".workout-card__remove-btn").forEach(t=>{t.getAttribute("data-workout-id")===e._id&&t.addEventListener("click",()=>{x(t,e._id)})})}function x(e,s){e.closest(".exercises-item").remove();const o=(JSON.parse(localStorage.getItem("workoutId"))||[]).filter(a=>a!==s);localStorage.setItem("workoutId",JSON.stringify(o)),o.length===0&&localStorage.removeItem("workoutId")}function g(e){return`
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
  `}
//# sourceMappingURL=commonHelpers.js.map
