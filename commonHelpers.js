import"./assets/modal_video-1bed9cb7.js";import{a as f}from"./assets/vendor-8cce9181.js";const p=document.querySelector(".favheader__button"),x=document.querySelector(".favmodal__button_close"),c=document.querySelector(".favmodal");p.addEventListener("click",()=>{c.showModal()});x.addEventListener("click",()=>{c.close()});const g="https://energyflow.b.goit.study/api/exercises/",i=document.querySelector(".workouts-list");function n(e){return f.get(`${g}/${e}`)}let d=!0;const r=JSON.parse(localStorage.getItem("workoutId"))||[];r.length>0?r.forEach(e=>{n(e).then(t=>{const s=t.data;l(s)}).catch(t=>{console.error(t)})}):u();function o(e){const t=JSON.parse(localStorage.getItem("workoutId"))||[];t.includes(e)||n(e).then(s=>{const a=s.data;l(a),t.push(e),localStorage.setItem("workoutId",JSON.stringify(t)),d=!1}).catch(s=>{console.error(s)})}fetchFavourites();console.log(response.data);const _="64f389465ae26083f39b17a2",v="64f389465ae26083f39b17a5",k="64f389465ae26083f39b17a6",b="64f389465ae26083f39b19d8",h="64f389465ae26083f39b1b1a",I="64f389465ae26083f39b1996",y="64f389465ae26083f39b180e",W="64f389465ae26083f39b198b",w="64f389465ae26083f39b19b3",S="64f389465ae26083f39b1987";o(_);o(v);o(k);o(b);o(h);o(I);o(y);o(W);o(w);o(S);function l(e){const t=E(e);i.insertAdjacentHTML("beforeend",t),L(e)}function L(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{M(s,e._id)})})}function M(e,t){e.closest(".exercises-item").remove();const a=(JSON.parse(localStorage.getItem("workoutId"))||[]).filter(m=>m!==t);localStorage.setItem("workoutId",JSON.stringify(a)),a.length===0&&(localStorage.removeItem("workoutId"),u())}function E(e){return`
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
  `}function u(){d||(i.innerHTML=`
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
