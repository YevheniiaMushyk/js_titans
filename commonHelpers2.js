import"./assets/loader-2a3886f6.js";import{i as c,a as f}from"./assets/vendor-db25513e.js";const k=document.querySelector(".header__button"),B=document.querySelector(".modal__button_close"),$=document.querySelector(".modal");k.addEventListener("click",()=>{$.showModal()});B.addEventListener("click",()=>{$.close()});const _=document.getElementById("modal_rating"),D=document.querySelector(".modal_rating_close"),d=document.querySelector(".modal_rating"),S=document.querySelectorAll(".fa-solid"),l=document.querySelector(".modal_rating_digit"),p=document.querySelector(".modal_rating_form");let i=0,R="",x="",g=0;const P="64f389465ae26083f39b19d8";_.addEventListener("click",()=>{i=0,l.textContent=`${i}.0`,d.showModal()});D.addEventListener("click",()=>{i=0,l.textContent=`${i}.0`,p.reset(),d.close()});d.addEventListener("click",t=>{t.target===t.currentTarget&&(i=0,l.textContent=`${i}.0`,p.reset(),d.close())});const O=()=>{l.textContent=`${i}.0`};for(let t=0;t<S.length;t++){const e=S[t];e.addEventListener("mouseenter",()=>{const o=e.dataset.rating;l.textContent=`${o}.0`}),e.addEventListener("mouseleave",O),e.addEventListener("click",()=>{g=e.dataset.rating,i=g,l.textContent=`${g}.0`})}p.addEventListener("submit",M);function M(t){t.preventDefault();const e=t.currentTarget;R=e.elements.email.value,x=e.elements.coment.value,i===0?c.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):A().then(()=>{d.close(),c.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{c.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{i=0,l.textContent=`${i}.0`,p.reset()})}function A(){let t={};t.rate=parseInt(g),t.email=R,t.review=x;const e={method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${P}/rating`,e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const L={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},I="https://energyflow.b.goit.study/api/quote";async function F(t){try{const e=localStorage.getItem("quoteLocalData");if(e){const r=JSON.parse(e),b=v();if(r.date===b){C(r.author,r.quote);return}}const n=(await f.get(t)).data;if(n){const r={quote:n.quote,author:n.author,date:v()};localStorage.setItem("quoteLocalData",JSON.stringify(r)),C(r.author,r.quote)}}catch(e){c.error(e)}}function v(){const t=new Date,e=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return`${e}-${o}-${n}`}function C(t,e){L.quoteAuthor.textContent=t,L.quoteText.textContent=e}F(I);const a={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination")},H=document.querySelector(".exercises-search-form"),N=document.querySelector(".loader");let u=null;f.defaults.baseURL="https://energyflow.b.goit.study/api";const s={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function T(){return h(!0),(await f.get("/filters",{params:{filter:s.filter,page:s.page,limit:s.perPage}})).data}function w(t){a.cardContainer.innerHTML="";const e=t.map(({name:o,filter:n,imgUrl:r})=>`<li class="card-item">
        <a href="">
        <img class="card-image" src="${r}" alt="Card Image">
            <ul class="card-item-desc"="${o}">
                <li class="name" data-source="${o}">${o}</li>
                <li class="filter" data-source="${n}">${n}</li>
            </ul>
        </a>
    </li>`).join("");a.cardContainer.innerHTML=e,h(!1)}a.bodypartButton.addEventListener("click",()=>{s.page=1,y()});function y(){T().then(t=>{const{results:e,page:o,totalPages:n}=t;if(s.totalPages=n,w(e),n>1){const r=j(o,n);a.pagination.innerHTML=r,document.querySelector(".pag-btn").classList.add("active"),s.filter!=="Body parts"?a.pagination.style.display="block":a.pagination.style.display="none"}else a.pagination.style.display="none"}).catch(t=>{K(t.message,"ERROR")}).finally(()=>{h(!1)})}y();a.musclesButton.classList.add("active");a.buttons.addEventListener("click",t=>{U(t);const e=t.target;e!==t.currentTarget&&(e===a.musclesButton?s.filter="Muscles":e===a.bodypartButton?s.filter="Body parts":e===a.equipmentButton&&(s.filter="Equipment"),s.page=1,y())});function U(t){const e=t.target.nodeName==="BUTTON";a.musclesButton.classList.remove("active"),e&&(t.target.classList.add("active"),u!==null&&u.classList.remove("active"),u=t.target,u!==null&&u.classList.add("active"))}a.pagination.addEventListener("click",J);function j(t,e){let o="";for(;t<=e;t++)o+=`<button class="pag-btn" type="button">${t}</button>`;return o}async function J(t){document.querySelectorAll(".pag-btn").forEach(o=>{o.classList.remove("active")}),t.target.classList.add("active"),s.page=t.target.textContent,a.cardContainer.innerHTML="";try{const{results:o}=await T();w(o)}catch(o){console.log(o)}}function h(t=!0){N.style.display=t?"inline-block":"none",H.disabled=t}function K(t,e="info"){e==="OK"?c.success({position:"topCenter",message:t}):e==="ERROR"?c.error({position:"topCenter",message:t}):c.info({position:"topCenter",message:t})}const q=document.querySelector(".footer-form"),Q=document.querySelector(".loader");async function z(t){return f.post("https://energyflow.b.goit.study/api/subscription",t)}q.addEventListener("submit",V);function V(t){t.preventDefault();const e=t.currentTarget.email.value.trim().toLowerCase();if(e===""){m("The email field is empty!","ERROR");return}const o={email:e};E("true"),z(o).then(({data:n,status:r})=>{r===201&&m(n.message,"OK")}).catch(n=>{n.response.status===409?m("Subscription already exists!"):m(n.message,"ERROR")}).finally(()=>{q.reset(),E(!1)})}function m(t,e="info"){e==="OK"?c.success({position:"topCenter",message:t}):e==="ERROR"?c.error({position:"topCenter",message:t}):c.info({position:"topCenter",message:t})}function E(t=!0){Q.style.display=t?"inline-block":"none",q.disabled=t}
//# sourceMappingURL=commonHelpers2.js.map