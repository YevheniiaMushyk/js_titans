import"./assets/loader-d8f8635e.js";import{a as q,i as d}from"./assets/vendor-8cce9181.js";const W=document.querySelector(".header__button"),Q=document.querySelector(".modal__button_close"),H=document.getElementById("header_modal");W.addEventListener("click",()=>{H.showModal()});Q.addEventListener("click",()=>{H.close()});const E={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},j="https://energyflow.b.goit.study/api/quote";async function G(e){try{const t=localStorage.getItem("quoteLocalData");if(t){const r=JSON.parse(t),i=R();if(r.date===i){k(r.author,r.quote);return}}const n=(await q.get(e)).data;if(n){const r={quote:n.quote,author:n.author,date:R()};localStorage.setItem("quoteLocalData",JSON.stringify(r)),k(r.author,r.quote)}}catch{E.quoteAuthor.textContent="Angry Developer",E.quoteText.textContent="Internet access is required to receive a quote.",d.error({title:"Error",message:"No internet connection"})}}function R(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}-${s}-${n}`}function k(e,t){E.quoteAuthor.textContent=e,E.quoteText.textContent=t}G(j);const V=document.querySelector(".exercises-search"),z=document.querySelector(".exercises-name"),a={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination")},X=document.querySelector(".exercises-search-form"),Z=document.querySelector(".loader");let h=null;q.defaults.baseURL="https://energyflow.b.goit.study/api";const c={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function U(){return w(!0),(await q.get("/filters",{params:{filter:c.filter,page:c.page,limit:c.perPage}})).data}function I(e){a.cardContainer.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:r})=>`<li class="card-item">
        <a href="">
        <img class="card-image" src="${r}" alt="Card Image">
            <ul class="card-item-desc"="${s}">
                <li class="name" data-source="${s}">${s}</li>
                <li class="filter" data-source="${n}">${n}</li>
            </ul>
        </a>
    </li>`).join("");a.cardContainer.innerHTML=t,w(!1)}a.bodypartButton.addEventListener("click",()=>{c.page=1,b()});function b(){U().then(e=>{const{results:t,page:s,totalPages:n}=e;if(c.totalPages=n,I(t),n>1){const r=te(s,n);a.pagination.innerHTML=r,document.querySelector(".pag-btn").classList.add("active"),c.filter!=="Body parts"?a.pagination.style.display="block":a.pagination.style.display="none"}else a.pagination.style.display="none"}).catch(e=>{ne(e.message,"ERROR")}).finally(()=>{w(!1)})}b();a.musclesButton.classList.add("active");a.buttons.addEventListener("click",e=>{ee(e);const t=e.target;V.classList.add("hidden"),z.innerHTML="Exercises",t!==e.currentTarget&&(t===a.musclesButton?c.filter="Muscles":t===a.bodypartButton?c.filter="Body parts":t===a.equipmentButton&&(c.filter="Equipment"),c.page=1,b())});function ee(e){const t=e.target.nodeName==="BUTTON";a.musclesButton.classList.remove("active"),t&&(e.target.classList.add("active"),h!==null&&h.classList.remove("active"),h=e.target,h!==null&&h.classList.add("active"))}a.pagination.addEventListener("click",se);function te(e,t){let s="";for(;e<=t;e++)s+=`<button class="pag-btn" type="button">${e}</button>`;return s}async function se(e){document.querySelectorAll(".pag-btn").forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active"),c.page=e.target.textContent,a.cardContainer.innerHTML="";try{const{results:s}=await U();I(s)}catch(s){console.log(s)}}function w(e=!0){Z.style.display=e?"inline-block":"none",X.disabled=e}function ne(e,t="info"){t==="OK"?d.success({position:"topCenter",message:e}):t==="ERROR"?d.error({position:"topCenter",message:e}):d.info({position:"topCenter",message:e})}const o=document.getElementById("modal");o.querySelector(".modal-content");const re=o.querySelector(".close"),B=o.querySelector(".exercise-gif"),oe=o.querySelector(".exercise-title");o.querySelectorAll(".exercise-star");const ae=o.querySelector(".exercise-target"),ie=o.querySelector(".exercise-bodyparts"),ce=o.querySelector(".exercise-equipment"),le=o.querySelector(".exercise-popular"),ue=o.querySelector(".exercise-calories"),de=o.querySelector(".exercise-description"),D=o.querySelector(".favorite-button"),pe=document.querySelector(".rating-button"),ge=document.querySelector(".rating-number"),M=document.querySelector(".modal_rating"),C="ENERGY_FLOW_FAVORITES_KEY";function me(e){const t=e.target.closest(".exercises-item");if(!t)return;const s=xe(t);he(s),o.style.display="block"}re.addEventListener("click",()=>{o.style.display="none"});window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(o.style.display="none")});window.addEventListener("click",e=>{pe&&M&&(M.dataset.id=o.dataset.id)});function $(){const e=window.localStorage.getItem(C);return e&&e!=="undefined"?JSON.parse(e):[]}function fe(e){const t=$(),s=t.length?[...t,e]:[e];window.localStorage.setItem(C,JSON.stringify(s))}function J(e){return!!$().find(s=>s===e)}function K(e){const s=J(e)?"Remove from":"Add to favorites";D.innerHTML=`${s}  
  <svg class="modal_icon" width="13" height="15">  
  <use href="./img/icons.svg#icon-heart"></use>  
  </svg>`}function ye(e){const s=$().filter(n=>n!==e);window.localStorage.setItem(C,JSON.stringify(s))}D.addEventListener("click",e=>{if(!o){console.log(o);return}const t=o.dataset.id;J(t)?ye(t):fe(t),K(t)});function xe(e){const t=e.querySelector(".exercises-title-text"),s=e.querySelector(".exercises-text__dynamic"),n=e.querySelectorAll(".exercises-text__dynamic")[1],r=e.querySelectorAll(".exercises-text__dynamic")[2],i=e.querySelector(".exercises-rating__text"),{gifurl:l,description:m,equipment:f,popularity:y,id:p}=e.dataset;return{title:t.textContent,burnedCalories:s.textContent,bodyPart:n.textContent,target:r.textContent,rating:i.textContent,gifUrl:l,description:m,equipment:f,popularity:y,_id:p}}function he(e){B.src=e.gifUrl,B.alt=e.title,ge.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((s,n)=>{const r=Math.trunc(t),i=n+1<=r?100:n+1>Math.ceil(t)?0:(t-r)*100;s.style.width=`${i}%`}),oe.textContent=e.title,ae.textContent=e.target,ie.textContent=e.bodyPart,ce.textContent=e.equipment,le.textContent=e.popularity,ue.textContent=e.burnedCalories,de.textContent=e.description,o.dataset.id=e._id,K(e._id)}let ve="https://energyflow.b.goit.study/api/exercises/";const O=document.querySelector(".exercises-search-form"),u=document.querySelector(".exercises-card-container"),qe=document.querySelector(".exercises-search"),Se=document.querySelector(".exercises-name"),v={name:"",page:1,maxPage:0,limit:9};let _e="";function P(){u.innerHTML='<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}u.addEventListener("click",Ee);async function Ee(e){e.preventDefault();const t=e.target.closest(".card-item");if(t){const s=t.querySelector(".name"),n=t.querySelector(".filter");if(s&&n){const r=s.textContent.trim().replace(/\s/g,"%20");let i=n.textContent.trim().toLowerCase().replace(/\s/g,"");i==="bodyparts"&&(i=i.replace(/s$/,"")),Se.innerHTML=`Exercises /<span> ${r.replace(/%20/g," ")}</span>`;try{const l=`${ve}?${i}=${r}`,{results:m,totalPages:f}=await A("",1,l);qe.classList.toggle("hidden"),O.addEventListener("submit",y);async function y(p){p.preventDefault(),u.innerHTML="";const S=p.currentTarget,g=S.elements.exercises.value.trim();if(_e=g,v.page=1,g===""||g==null){P();return}try{const{results:x,totalPages:Y}=await A(g,1,l);x&&x.length>0?(v.maxPage=Math.ceil(Y/v.perpage),F(x,u),u.querySelectorAll(".exercises-title").forEach(function(L){L.scrollWidth>L.clientWidth&&L.classList.add("with-ellipsis")})):(u.innerHTML="",P())}catch(x){console.log(x)}finally{S.reset()}}v.maxPage=Math.ceil(f/v.perpage),F(m,u)}catch(l){console.log(l)}finally{O.reset()}}}}function A(e,t=1,s){return q.get(s,{params:{keyword:e,limit:9,page:t}}).then(n=>n.data)}function F(e,t){const s=e.map(({rating:n,name:r,burnedCalories:i,bodyPart:l,target:m,gifUrl:f,description:y,equipment:p,popularity:S,_id:g})=>`
    <li class="exercises-item" data-gifUrl=${f} data-description="${y}" data-equipment=${p} data-popularity=${S} data-id=${g}>
            <div class="exercises-sub-title">
                <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(n).padEnd(3,".0")}</span><svg class="exercises-rating__svg" width="18" height="18">
                            <use href="../img/icons.svg#icon-star_yellow"></use>
                        </svg></span>
                </div>
                <div class="exercises-start"><span class="exercises-start__text">Start</span><svg
                        class="exercises-start__svg" width="13" height="13">
                        <use href="../img/icons.svg#icon-arrow"></use>
                    </svg></div>
            </div>
            <div class="exercises-title">
                <svg class="exercises-title__svg" width="24" height="24">
                    <use href="../img/icons.svg#icon-fav_run_man"></use>
                </svg>
                <span class="exercises-title-text">${r}</span>
            </div>
            <div class="exercises-text">
                <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                    <span class="exercises-text__dynamic">${i} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${l}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${m}</span></p>
            </div>
    </li>`).join("");t.innerHTML=s,document.querySelectorAll(".exercises-start").forEach(n=>n.addEventListener("click",me))}const T=document.querySelector(".footer-form"),Le=document.querySelector(".loader");async function be(e){return q.post("https://energyflow.b.goit.study/api/subscription",e)}T.addEventListener("submit",we);function we(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){_("The email field is empty!","ERROR");return}const s={email:t};N("true"),be(s).then(({data:n,status:r})=>{r===201&&_(n.message,"OK")}).catch(n=>{n.response.status===409?_("Subscription already exists!"):_(n.message,"ERROR")}).finally(()=>{T.reset(),N(!1)})}function _(e,t="info"){t==="OK"?d.success({position:"topCenter",message:e}):t==="ERROR"?d.error({position:"topCenter",message:e}):d.info({position:"topCenter",message:e})}function N(e=!0){Le.style.display=e?"inline-block":"none",T.disabled=e}
//# sourceMappingURL=commonHelpers2.js.map
