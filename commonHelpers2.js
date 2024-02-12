import"./assets/modal_video-864bb1bd.js";import{i as c,a as h}from"./assets/vendor-8cce9181.js";const Q=document.querySelector(".header__button"),W=document.querySelector(".modal__button_close"),H=document.querySelector(".modal");Q.addEventListener("click",()=>{H.showModal()});W.addEventListener("click",()=>{H.close()});const Y=document.getElementById("modal_rating"),z=document.querySelector(".modal_rating_close"),y=document.querySelector(".modal_rating"),k=document.querySelectorAll(".fa-solid"),d=document.querySelector(".modal_rating_digit"),S=document.querySelector(".modal_rating_form");let i=0,U="",F="",q=0;const V="64f389465ae26083f39b19d8";Y.addEventListener("click",()=>{i=0,d.textContent=`${i}.0`,y.showModal()});z.addEventListener("click",()=>{i=0,d.textContent=`${i}.0`,S.reset(),y.close()});y.addEventListener("click",e=>{e.target===e.currentTarget&&(i=0,d.textContent=`${i}.0`,S.reset(),y.close())});const G=()=>{d.textContent=`${i}.0`};for(let e=0;e<k.length;e++){const t=k[e];t.addEventListener("mouseenter",()=>{const s=t.dataset.rating;d.textContent=`${s}.0`}),t.addEventListener("mouseleave",G),t.addEventListener("click",()=>{q=t.dataset.rating,i=q,d.textContent=`${q}.0`})}S.addEventListener("submit",X);function X(e){e.preventDefault();const t=e.currentTarget;U=t.elements.email.value,F=t.elements.coment.value,i===0?c.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):Z().then(()=>{y.close(),c.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{c.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{i=0,d.textContent=`${i}.0`,S.reset()})}function Z(){let e={};e.rate=parseInt(q),e.email=U,e.review=F;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${V}/rating`,t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const _={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},ee="https://energyflow.b.goit.study/api/quote";async function te(e){try{const t=localStorage.getItem("quoteLocalData");if(t){const a=JSON.parse(t),l=R();if(a.date===l){P(a.author,a.quote);return}}const n=(await h.get(e)).data;if(n){const a={quote:n.quote,author:n.author,date:R()};localStorage.setItem("quoteLocalData",JSON.stringify(a)),P(a.author,a.quote)}}catch{_.quoteAuthor.textContent="Angry Developer",_.quoteText.textContent="Internet access is required to receive a quote.",c.error({title:"Error",message:"No internet connection"})}}function R(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return`${t}-${s}-${n}`}function P(e,t){_.quoteAuthor.textContent=e,_.quoteText.textContent=t}te(ee);const se=document.querySelector(".exercises-search"),r={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination")},ne=document.querySelector(".exercises-search-form"),ae=document.querySelector(".loader");let p=null;h.defaults.baseURL="https://energyflow.b.goit.study/api";const o={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function I(){return w(!0),(await h.get("/filters",{params:{filter:o.filter,page:o.page,limit:o.perPage}})).data}function N(e){r.cardContainer.innerHTML="";const t=e.map(({name:s,filter:n,imgUrl:a})=>`<li class="card-item">
        <a href="">
        <img class="card-image" src="${a}" alt="Card Image">
            <ul class="card-item-desc"="${s}">
                <li class="name" data-source="${s}">${s}</li>
                <li class="filter" data-source="${n}">${n}</li>
            </ul>
        </a>
    </li>`).join("");r.cardContainer.innerHTML=t,w(!1)}r.bodypartButton.addEventListener("click",()=>{o.page=1,C()});function C(){I().then(e=>{const{results:t,page:s,totalPages:n}=e;if(o.totalPages=n,N(t),n>1){const a=oe(s,n);r.pagination.innerHTML=a,document.querySelector(".pag-btn").classList.add("active"),o.filter!=="Body parts"?r.pagination.style.display="block":r.pagination.style.display="none"}else r.pagination.style.display="none"}).catch(e=>{ce(e.message,"ERROR")}).finally(()=>{w(!1)})}C();r.musclesButton.classList.add("active");r.buttons.addEventListener("click",e=>{re(e);const t=e.target;se.classList.add("hidden"),t!==e.currentTarget&&(t===r.musclesButton?o.filter="Muscles":t===r.bodypartButton?o.filter="Body parts":t===r.equipmentButton&&(o.filter="Equipment"),o.page=1,C())});function re(e){const t=e.target.nodeName==="BUTTON";r.musclesButton.classList.remove("active"),t&&(e.target.classList.add("active"),p!==null&&p.classList.remove("active"),p=e.target,p!==null&&p.classList.add("active"))}r.pagination.addEventListener("click",ie);function oe(e,t){let s="";for(;e<=t;e++)s+=`<button class="pag-btn" type="button">${e}</button>`;return s}async function ie(e){document.querySelectorAll(".pag-btn").forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active"),o.page=e.target.textContent,r.cardContainer.innerHTML="";try{const{results:s}=await I();N(s)}catch(s){console.log(s)}}function w(e=!0){ae.style.display=e?"inline-block":"none",ne.disabled=e}function ce(e,t="info"){t==="OK"?c.success({position:"topCenter",message:e}):t==="ERROR"?c.error({position:"topCenter",message:e}):c.info({position:"topCenter",message:e})}let le="https://energyflow.b.goit.study/api/exercises/";const B=document.querySelector(".exercises-search-form"),u=document.querySelector(".exercises-card-container"),ue=document.querySelector(".exercises-search"),f={name:"",page:1,maxPage:0,limit:9};let de="";function D(){u.innerHTML='<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}u.addEventListener("click",ge);async function ge(e){e.preventDefault();const t=e.target.closest(".card-item");if(t){const s=t.querySelector(".name"),n=t.querySelector(".filter");if(s&&n){const a=s.textContent.trim().replace(/\s/g,"%20");let l=n.textContent.trim().toLowerCase().replace(/\s/g,"");l==="bodyparts"&&(l=l.replace(/s$/,""));try{const g=`${le}?${l}=${a}`,{results:L,totalPages:j}=await M("",1,g);ue.classList.toggle("hidden"),B.addEventListener("submit",J);async function J($){$.preventDefault(),u.innerHTML="";const T=$.currentTarget,x=T.elements.exercises.value.trim();if(de=x,f.page=1,x===""||x==null){D();return}try{const{results:m,totalPages:K}=await M(x,1,g);m&&m.length>0?(f.maxPage=Math.ceil(K/f.perpage),O(m,u),u.querySelectorAll(".exercises-title").forEach(function(b){b.scrollWidth>b.clientWidth&&b.classList.add("with-ellipsis")})):(u.innerHTML="",D())}catch(m){console.log(m)}finally{T.reset()}}f.maxPage=Math.ceil(j/f.perpage),O(L,u)}catch(g){console.log(g)}finally{B.reset()}}}}function M(e,t=1,s){return h.get(s,{params:{keyword:e,limit:9,page:t}}).then(n=>n.data)}function O(e,t){const s=e.map(({rating:n,name:a,burnedCalories:l,bodyPart:g,target:L})=>`
    <li class="exercises-item">
            <div class="exercises-sub-title">
                <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(n).padEnd(3,".0")}</span><svg class="exercises-rating__svg" width="18" height="18">
                            <use href="../img/icons.svg#icon-star_yellow"></use>
                        </svg></span>
                </div>
                <a href="#" class="exercises-start"><span class="exercises-start__text">Start</span><svg
                        class="exercises-start__svg" width="13" height="13">
                        <use href="../img/icons.svg#icon-arrow"></use>
                    </svg></a>
            </div>
            <div class="exercises-title">
                <svg class="exercises-title__svg" width="24" height="24">
                    <use href="../img/icons.svg#icon-fav_run_man"></use>
                </svg>
                <span class="exercises-title-text">${a}</span>
            </div>
            <div class="exercises-text">
                <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                    <span class="exercises-text__dynamic">${l} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${g}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${L}</span></p>
            </div>
    </li>`).join("");t.innerHTML=s}const E=document.querySelector(".footer-form"),me=document.querySelector(".loader");async function pe(e){return h.post("https://energyflow.b.goit.study/api/subscription",e)}E.addEventListener("submit",fe);function fe(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){v("The email field is empty!","ERROR");return}const s={email:t};A("true"),pe(s).then(({data:n,status:a})=>{a===201&&v(n.message,"OK")}).catch(n=>{n.response.status===409?v("Subscription already exists!"):v(n.message,"ERROR")}).finally(()=>{E.reset(),A(!1)})}function v(e,t="info"){t==="OK"?c.success({position:"topCenter",message:e}):t==="ERROR"?c.error({position:"topCenter",message:e}):c.info({position:"topCenter",message:e})}function A(e=!0){me.style.display=e?"inline-block":"none",E.disabled=e}
//# sourceMappingURL=commonHelpers2.js.map
