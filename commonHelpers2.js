import"./assets/styles-01291b30.js";import{a as L,i as w}from"./assets/vendor-db25513e.js";const k=document.querySelector(".header__button"),b=document.querySelector(".modal__button_close"),g=document.querySelector(".modal");k.addEventListener("click",()=>{g.showModal()});b.addEventListener("click",()=>{g.close()});const E="https://energyflow.b.goit.study/api/exercises/",S=document.querySelector(".exercises-search-form"),i=document.querySelector(".card-container"),s=document.querySelector(".label"),u=document.getElementById("preloader"),a={name:"",page:1,maxPage:0,perpage:9};let m="";const d="is-hidden";function l(e){e.classList.add(d)}function x(e){e.classList.remove(d)}function M(e,t){t.classList.add(d),e.disabled=!1}function q(e,t){t.classList.remove(d),e.disabled=!0}function T(){i.innerHTML='<div class="loader"></div>'}function p(){i.innerHTML='<div class="no-results-text">Unfortunately, no results were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}function P(){const e=i.querySelector(".loader");e&&e.remove()}S.addEventListener("submit",H);async function H(e){e.preventDefault(),i.innerHTML="";const t=e.currentTarget,n=t.elements.exercises.value.trim();if(m=n,a.page=1,n===""||n==null){p(),l(s);return}T();try{const{results:r,totalPages:o}=await h(n);r&&r.length>0?(a.maxPage=Math.ceil(o/a.perpage),v(r,i),r&&r.length>0&&r.length!==o?(x(s),s.removeEventListener("click",c),s.addEventListener("click",c)):l(s)):(i.innerHTML="",p(),l(s))}catch(r){console.log(r)}finally{P(),t.reset()}}function h(e,t=1){return L.get(E,{params:{muscles:"delts",keyword:e,perpage:9,page:t}}).then(n=>n.data)}async function c(){a.page+=1,q(s,u);try{const{results:e}=await h(m,a.page);v(e,i)}catch(e){console.log(e)}finally{M(s,u),a.page>=a.maxPage?(l(s),w.error({title:"Error",message:`"We're sorry, but you've reached the end of search results."`}),s.removeEventListener("click",c)):(x(s),s.removeEventListener("click",c),s.addEventListener("click",c))}}function v(e,t){const n=e.map(({rating:r,name:o,burnedCalories:_,bodyPart:f,target:y})=>`
    <li class="exercises-item"><a href="#" class="exercises-item__link">
            <div class="exercises-sub-title">
                <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(r).padEnd(3,".0")}</span><svg class="exercises-rating__svg" width="18" height="18">
                            <use href="../img/icons.svg#icon-star_yellow"></use>
                        </svg></span>
                </div>
                <div class="exercises-start"><span class="exercises-start__text">Start</span><svg
                        class="exercises-start__svg" width="13" height="13" stroke="rgb(27, 27, 27)">
                        <use href="../img/icons.svg#icon-arrow"></use>
                    </svg></div>
            </div>
            <div class="exercises-title">
                <svg class="exercises-title__svg" width="24" height="24">
                    <use href="../img/icons.svg#icon-fav_run_man"></use>
                </svg>
                <span class="exercises-title-text">${o}</span>
            </div>
            <div class="exercises-text">
                <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                    <span class="exercises-text__dynamic">${_} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${f}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${y}</span></p>
            </div>
        </a>
    </li>`).join("");t.innerHTML=n}
//# sourceMappingURL=commonHelpers2.js.map
