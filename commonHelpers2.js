import"./assets/loader-22fe984e.js";import{a as S,i as d}from"./assets/vendor-8cce9181.js";const W=document.querySelector(".header__button"),Q=document.querySelector(".modal__button_close"),H=document.getElementById("header_modal");W.addEventListener("click",()=>{H.showModal()});Q.addEventListener("click",()=>{H.close()});const E={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},j="https://energyflow.b.goit.study/api/quote";async function G(e){try{const t=localStorage.getItem("quoteLocalData");if(t){const r=JSON.parse(t),a=R();if(r.date===a){T(r.author,r.quote);return}}const n=(await S.get(e)).data;if(n){const r={quote:n.quote,author:n.author,date:R()};localStorage.setItem("quoteLocalData",JSON.stringify(r)),T(r.author,r.quote)}}catch{E.quoteAuthor.textContent="Angry Developer",E.quoteText.textContent="Internet access is required to receive a quote.",d.error({title:"Error",message:"No internet connection"})}}function R(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}-${s}-${n}`}function T(e,t){E.quoteAuthor.textContent=e,E.quoteText.textContent=t}G(j);const V=document.querySelector(".exercises-search"),i={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination")};document.querySelector(".exercises-search-form");let x=null;S.defaults.baseURL="https://energyflow.b.goit.study/api";const l={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function N(){return w(".exercises-card-container","add"),(await S.get("/filters",{params:{filter:l.filter,page:l.page,limit:l.perPage}})).data}function I(e){i.cardContainer.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:r})=>new Promise(a=>{const c=new Image;c.src=r,c.onload=()=>{a(`<li class="card-item">
          <a href="">
            <img class="card-image" src="${r}" alt="Card Image">
            <ul class="card-item-desc"="${s}">
              <li class="name" data-source="${s}">${s}</li>
              <li class="filter" data-source="${n}">${n}</li>
            </ul>
          </a>
        </li>`)}}));Promise.all(t).then(s=>{const n=s.join("");i.cardContainer.innerHTML=n,w(".exercises-card-container","add")})}function U(){N().then(e=>{const{results:t,page:s,totalPages:n}=e;if(l.totalPages=n,w(".exercises-card-container","del"),I(t),n>1){const r=X(s,n);i.pagination.innerHTML=r,document.querySelector(".pag-btn").classList.add("active"),l.filter!=="Body parts"?i.pagination.style.display="block":i.pagination.style.display="none"}else i.pagination.style.display="none"}).catch(e=>{ee(e.message,"ERROR")}).finally(()=>{})}U();i.musclesButton.classList.add("active");i.buttons.addEventListener("click",e=>{z(e);const t=e.target;V.classList.add("hidden"),t!==e.currentTarget&&(t===i.musclesButton?l.filter="Muscles":t===i.bodypartButton?l.filter="Body parts":t===i.equipmentButton&&(l.filter="Equipment"),l.page=1,U())});function z(e){const t=e.target.nodeName==="BUTTON";i.musclesButton.classList.remove("active"),t&&(e.target.classList.add("active"),x!==null&&x.classList.remove("active"),x=e.target,x!==null&&x.classList.add("active"))}i.pagination.addEventListener("click",Z);function X(e,t){let s="";for(;e<=t;e++)s+=`<button class="pag-btn" type="button">${e}</button>`;return s}async function Z(e){document.querySelectorAll(".pag-btn").forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active"),l.page=e.target.textContent,i.cardContainer.innerHTML="";try{const{results:s}=await N();I(s)}catch(s){console.log(s)}}function w(e,t){const s=document.querySelector(e),n=s.getBoundingClientRect();n.height>100&&t==="add"&&(s.setAttribute("style","height:"+n.height+"px"),s.style.height=n.height+"px"),t==="del"&&(s.removeAttribute("style"),s.style.height="auto")}function ee(e,t="info"){t==="OK"?d.success({position:"topCenter",message:e}):t==="ERROR"?d.error({position:"topCenter",message:e}):d.info({position:"topCenter",message:e})}const o=document.getElementById("modal");o.querySelector(".modal-content");const te=o.querySelector(".close"),k=o.querySelector(".exercise-gif"),se=o.querySelector(".exercise-title");o.querySelectorAll(".exercise-star");const ne=o.querySelector(".exercise-target"),re=o.querySelector(".exercise-bodyparts"),oe=o.querySelector(".exercise-equipment"),ae=o.querySelector(".exercise-popular"),ie=o.querySelector(".exercise-calories"),ce=o.querySelector(".exercise-description"),D=o.querySelector(".favorite-button"),le=document.querySelector(".rating-button"),ue=document.querySelector(".rating-number"),B=document.querySelector(".modal_rating"),L="ENERGY_FLOW_FAVORITES_KEY";function de(e){const t=e.target.closest(".exercises-item");if(!t)return;const s=me(t);fe(s),o.style.display="block"}te.addEventListener("click",()=>{o.style.display="none"});window.addEventListener("click",e=>{e.target===o&&(o.style.display="none")});window.addEventListener("keydown",e=>{e.key==="Escape"&&(o.style.display="none")});window.addEventListener("click",e=>{le&&B&&(B.dataset.id=o.dataset.id)});function C(){const e=window.localStorage.getItem(L);return e&&e!=="undefined"?JSON.parse(e):[]}function ge(e){const t=C(),s=t.length?[...t,e]:[e];window.localStorage.setItem(L,JSON.stringify(s))}function J(e){return!!C().find(s=>s===e)}function K(e){const s=J(e)?"Remove from":"Add to favorites";D.innerHTML=`${s}  
  <svg class="modal_icon" width="13" height="15">  
  <use href="./img/icons.svg#icon-heart"></use>  
  </svg>`}function pe(e){const s=C().filter(n=>n!==e);window.localStorage.setItem(L,JSON.stringify(s))}D.addEventListener("click",e=>{if(!o){console.log(o);return}const t=o.dataset.id;J(t)?pe(t):ge(t),K(t)});function me(e){const t=e.querySelector(".exercises-title-text"),s=e.querySelector(".exercises-text__dynamic"),n=e.querySelectorAll(".exercises-text__dynamic")[1],r=e.querySelectorAll(".exercises-text__dynamic")[2],a=e.querySelector(".exercises-rating__text"),{gifurl:c,description:m,equipment:f,popularity:y,id:g}=e.dataset;return{title:t.textContent,burnedCalories:s.textContent,bodyPart:n.textContent,target:r.textContent,rating:a.textContent,gifUrl:c,description:m,equipment:f,popularity:y,_id:g}}function fe(e){k.src=e.gifUrl,k.alt=e.title,ue.textContent=e.rating;const t=parseFloat(e.rating);document.querySelectorAll(".yellow-star").forEach((s,n)=>{const r=Math.trunc(t),a=n+1<=r?100:n+1>Math.ceil(t)?0:(t-r)*100;s.style.width=`${a}%`}),se.textContent=e.title,ne.textContent=e.target,re.textContent=e.bodyPart,oe.textContent=e.equipment,ae.textContent=e.popularity,ie.textContent=e.burnedCalories,ce.textContent=e.description,o.dataset.id=e._id,K(e._id)}let ye="https://energyflow.b.goit.study/api/exercises/";const P=document.querySelector(".exercises-search-form"),u=document.querySelector(".exercises-card-container"),he=document.querySelector(".exercises-search"),xe=document.querySelector(".exercises-name"),v={name:"",page:1,maxPage:0,limit:9};let ve="";function A(){u.innerHTML='<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}u.addEventListener("click",Se);async function Se(e){e.preventDefault();const t=e.target.closest(".card-item");if(t){const s=t.querySelector(".name"),n=t.querySelector(".filter");if(s&&n){const r=s.textContent.trim().replace(/\s/g,"%20");let a=n.textContent.trim().toLowerCase().replace(/\s/g,"");a==="bodyparts"&&(a=a.replace(/s$/,"")),xe.innerHTML=`Exercises /<span> ${r.replace(/%20/g," ")}</span>`;try{const c=`${ye}?${a}=${r}`,{results:m,totalPages:f}=await M("",1,c);he.classList.toggle("hidden"),P.addEventListener("submit",y);async function y(g){g.preventDefault(),u.innerHTML="";const q=g.currentTarget,p=q.elements.exercises.value.trim();if(ve=p,v.page=1,p===""||p==null){A();return}try{const{results:h,totalPages:Y}=await M(p,1,c);h&&h.length>0?(v.maxPage=Math.ceil(Y/v.perpage),O(h,u),u.querySelectorAll(".exercises-title").forEach(function(b){b.scrollWidth>b.clientWidth&&b.classList.add("with-ellipsis")})):(u.innerHTML="",A())}catch(h){console.log(h)}finally{q.reset()}}v.maxPage=Math.ceil(f/v.perpage),O(m,u)}catch(c){console.log(c)}finally{P.reset()}}}}function M(e,t=1,s){return S.get(s,{params:{keyword:e,limit:9,page:t}}).then(n=>n.data)}function O(e,t){const s=e.map(({rating:n,name:r,burnedCalories:a,bodyPart:c,target:m,gifUrl:f,description:y,equipment:g,popularity:q,_id:p})=>`
    <li class="exercises-item" data-gifUrl=${f} data-description="${y}" data-equipment=${g} data-popularity=${q} data-id=${p}>
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
                    <span class="exercises-text__dynamic">${a} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${c}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${m}</span></p>
            </div>
    </li>`).join("");t.innerHTML=s,document.querySelectorAll(".exercises-start").forEach(n=>n.addEventListener("click",de))}const $=document.querySelector(".footer-form"),qe=document.querySelector(".loader");async function _e(e){return S.post("https://energyflow.b.goit.study/api/subscription",e)}$.addEventListener("submit",Ee);function Ee(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){_("The email field is empty!","ERROR");return}const s={email:t};F("true"),_e(s).then(({data:n,status:r})=>{r===201&&_(n.message,"OK")}).catch(n=>{n.response.status===409?_("Subscription already exists!"):_(n.message,"ERROR")}).finally(()=>{$.reset(),F(!1)})}function _(e,t="info"){t==="OK"?d.success({position:"topCenter",message:e}):t==="ERROR"?d.error({position:"topCenter",message:e}):d.info({position:"topCenter",message:e})}function F(e=!0){qe.style.display=e?"inline-block":"none",$.disabled=e}
//# sourceMappingURL=commonHelpers2.js.map
