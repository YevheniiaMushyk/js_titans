import"./assets/modal_video-1c3175ac.js";import{a as u,i as h}from"./assets/vendor-8cce9181.js";const v=document.querySelector(".favheader__button"),b=document.querySelector(".favmodal__button_close"),l=document.querySelector(".favmodal");v.addEventListener("click",()=>{l.showModal()});b.addEventListener("click",()=>{l.close()});const c={quoteText:document.querySelector(".favorites-text"),quoteAuthor:document.querySelector(".favorites-sub-title")},k="https://energyflow.b.goit.study/api/quote";async function y(e){try{const t=localStorage.getItem("quoteLocalData");if(t){const r=JSON.parse(t),_=n();if(r.date===_){i(r.author,r.quote);return}}const o=(await u.get(e)).data;if(o){const r={quote:o.quote,author:o.author,date:n()};localStorage.setItem("quoteLocalData",JSON.stringify(r)),i(r.author,r.quote)}}catch(t){h.error("Failed to fetch quote data"),console.error(t)}}function n(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`${t}-${s}-${o}`}function i(e,t){c.quoteAuthor.textContent=e,c.quoteText.textContent=t}y(k);const I="https://energyflow.b.goit.study/api/exercises/",f=document.querySelector(".workouts-list");function m(e){return u.get(`${I}/${e}`)}let p=!0;const d=JSON.parse(localStorage.getItem("workoutId"))||[];d.length>0?d.forEach(e=>{m(e).then(t=>{const s=t.data;g(s)}).catch(t=>{console.error(t)})}):x();function a(e){const t=JSON.parse(localStorage.getItem("workoutId"))||[];t.includes(e)||m(e).then(s=>{const o=s.data;g(o),t.push(e),localStorage.setItem("workoutId",JSON.stringify(t)),p=!1}).catch(s=>{console.error(s)})}fetchFavourites();console.log(response.data);const S="64f389465ae26083f39b17a2",w="64f389465ae26083f39b17a5",q="64f389465ae26083f39b17a6",W="64f389465ae26083f39b19d8",L="64f389465ae26083f39b1b1a",$="64f389465ae26083f39b1996",C="64f389465ae26083f39b180e",M="64f389465ae26083f39b198b",O="64f389465ae26083f39b19b3",D="64f389465ae26083f39b1987";a(S);a(w);a(q);a(W);a(L);a($);a(C);a(M);a(O);a(D);function g(e){const t=T(e);f.insertAdjacentHTML("beforeend",t),E(e)}function E(e){document.querySelectorAll(".workout-card__remove-btn").forEach(s=>{s.getAttribute("data-workout-id")===e._id&&s.addEventListener("click",()=>{N(s,e._id)})})}function N(e,t){e.closest(".exercises-item").remove();const o=(JSON.parse(localStorage.getItem("workoutId"))||[]).filter(r=>r!==t);localStorage.setItem("workoutId",JSON.stringify(o)),o.length===0&&(localStorage.removeItem("workoutId"),x())}function T(e){return`
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
  `}function x(){p||(f.innerHTML=`
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
