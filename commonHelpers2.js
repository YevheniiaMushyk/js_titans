import{o as V,m as Y}from"./assets/loader-4b127149.js";import{a as x,i as l}from"./assets/vendor-8cce9181.js";const z=document.querySelector(".header__button"),G=document.querySelector(".modal__button_close"),F=document.getElementById("header_modal");z.addEventListener("click",()=>{F.showModal()});G.addEventListener("click",()=>{F.close()});const L={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},X="https://energyflow.b.goit.study/api/quote";async function Z(e){try{const t=localStorage.getItem("quoteLocalData");if(t){const n=JSON.parse(t),o=P();if(n.date===o){B(n.author,n.quote);return}}const a=(await x.get(e)).data;if(a){const n={quote:a.quote,author:a.author,date:P()};localStorage.setItem("quoteLocalData",JSON.stringify(n)),B(n.author,n.quote)}}catch{L.quoteAuthor.textContent="Angry Developer",L.quoteText.textContent="Internet access is required to receive a quote.",l.error({title:"Error",message:"No internet connection"})}}function P(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return`${t}-${s}-${a}`}function B(e,t){L.quoteAuthor.textContent=e,L.quoteText.textContent=t}Z(X);const ee=document.querySelector(".exercises-search"),r={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination")};document.querySelector(".exercises-search-form");let f=null;x.defaults.baseURL="https://energyflow.b.goit.study/api";const c={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function N(){return R(".exercises-card-container","add"),(await x.get("/filters",{params:{filter:c.filter,page:c.page,limit:c.perPage}})).data}function j(e){r.cardContainer.innerHTML="";const t=e.map(({name:s,filter:a,imgUrl:n})=>new Promise(o=>{const d=new Image;d.src=n,d.onload=()=>{o(`<li class="card-item">
          <a href="">
            <img class="card-image" src="${n}" alt="Card Image">
            <ul class="card-item-desc"="${s}">
              <li class="name" data-source="${s}">${s}</li>
              <li class="filter" data-source="${a}">${a}</li>
            </ul>
          </a>
        </li>`)}}));Promise.all(t).then(s=>{const a=s.join("");r.cardContainer.innerHTML=a,R(".exercises-card-container","add")})}function J(){N().then(e=>{const{results:t,page:s,totalPages:a}=e;if(c.totalPages=a,R(".exercises-card-container","del"),j(t),a>1){const n=se(s,a);r.pagination.innerHTML=n,document.querySelector(".pag-btn").classList.add("active"),c.filter!=="Body parts"?r.pagination.style.display="block":r.pagination.style.display="none"}else r.pagination.style.display="none"}).catch(e=>{ne(e.message,"ERROR")}).finally(()=>{})}J();r.musclesButton.classList.add("active");r.buttons.addEventListener("click",e=>{te(e);const t=e.target;ee.classList.add("hidden"),t!==e.currentTarget&&(t===r.musclesButton?c.filter="Muscles":t===r.bodypartButton?c.filter="Body parts":t===r.equipmentButton&&(c.filter="Equipment"),c.page=1,J())});function te(e){const t=e.target.nodeName==="BUTTON";r.musclesButton.classList.remove("active"),t&&(e.target.classList.add("active"),f!==null&&f.classList.remove("active"),f=e.target,f!==null&&f.classList.add("active"))}r.pagination.addEventListener("click",ae);function se(e,t){let s="";for(;e<=t;e++)s+=`<button class="pag-btn" type="button">${e}</button>`;return s}async function ae(e){document.querySelectorAll(".pag-btn").forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active"),c.page=e.target.textContent,r.cardContainer.innerHTML="";try{const{results:s}=await N();j(s)}catch(s){console.log(s)}}function R(e,t){const s=document.querySelector(e),a=s.getBoundingClientRect();a.height>100&&t==="add"&&(s.setAttribute("style","height:"+a.height+"px"),s.style.height=a.height+"px"),t==="del"&&(s.removeAttribute("style"),s.style.height="auto")}function ne(e,t="info"){t==="OK"?l.success({position:"topCenter",message:e}):t==="ERROR"?l.error({position:"topCenter",message:e}):l.info({position:"topCenter",message:e})}let re="https://energyflow.b.goit.study/api/exercises/";const D=document.querySelector(".exercises-search-form"),u=document.querySelector(".exercises-card-container"),oe=document.querySelector(".exercises-search"),ie=document.querySelector(".exercises-name"),h={name:"",page:1,maxPage:0,limit:9};let ce="";function M(){u.innerHTML='<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}u.addEventListener("click",le);async function le(e){e.preventDefault();const t=e.target.closest(".card-item");if(t){const s=t.querySelector(".name"),a=t.querySelector(".filter");if(s&&a){const n=s.textContent.trim().replace(/\s/g,"%20");let o=a.textContent.trim().toLowerCase().replace(/\s/g,"");o==="bodyparts"&&(o=o.replace(/s$/,"")),ie.innerHTML=`Exercises /<span> ${n.replace(/%20/g," ")}</span>`;try{const d=`${re}?${o}=${n}`,{results:C,totalPages:E}=await A("",1,d);oe.classList.toggle("hidden"),D.addEventListener("submit",$);async function $(v){v.preventDefault(),u.innerHTML="";const _=v.currentTarget,g=_.elements.exercises.value.trim();if(ce=g,h.page=1,g===""||g==null){M();return}try{const{results:p,totalPages:W}=await A(g,1,d);p&&p.length>0?(h.maxPage=Math.ceil(W/h.perpage),O(p,u),u.querySelectorAll(".exercises-title").forEach(function(T){T.scrollWidth>T.clientWidth&&T.classList.add("with-ellipsis")})):(u.innerHTML="",M())}catch(p){console.log(p)}finally{_.reset()}}h.maxPage=Math.ceil(E/h.perpage),O(C,u)}catch(d){console.log(d)}finally{D.reset()}}}}function A(e,t=1,s){return x.get(s,{params:{keyword:e,limit:9,page:t}}).then(a=>a.data)}function O(e,t){const s=e.map(({rating:a,name:n,burnedCalories:o,bodyPart:d,target:C,gifUrl:E,description:$,equipment:v,popularity:_,_id:g})=>`
    <li class="exercises-item" data-gifUrl=${E} data-description="${$}" data-equipment=${v} data-popularity=${_} data-id=${g}>
            <div class="exercises-sub-title">
                <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(a).padEnd(3,".0")}</span><svg class="exercises-rating__svg" width="18" height="18">
                            <use href="./img/icons.svg#icon-star_yellow"></use>
                        </svg></span>
                </div>
                <div class="exercises-start"><span class="exercises-start__text">Start</span><svg
                        class="exercises-start__svg" width="13" height="13">
                        <use href="./img/icons.svg#icon-arrow"></use>
                    </svg></div>
            </div>
            <div class="exercises-title">
                <svg class="exercises-title__svg" width="24" height="24">
                    <use href="./img/icons.svg#icon-fav_run_man"></use>
                </svg>
                <span class="exercises-title-text">${n}</span>
            </div>
            <div class="exercises-text">
                <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                    <span class="exercises-text__dynamic">${o} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${d}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${C}</span></p>
            </div>
    </li>`).join("");t.innerHTML=s,document.querySelectorAll(".exercises-start").forEach(a=>a.addEventListener("click",V))}const de=document.getElementById("modal_rating"),w=document.getElementById("modal"),ue=document.querySelector(".modal_rating_close"),y=document.querySelector(".modal_rating_window"),H=document.querySelectorAll(".fa-solid"),m=document.querySelector(".modal_rating_digit"),b=document.querySelector(".modal_rating_form");let i=0,K="",Q="",S=0,I="";de.addEventListener("click",()=>{i=0,m.textContent=`${i}.0`,w.classList.add("disactive_video_window"),y.showModal()});ue.addEventListener("click",()=>{i=0,m.textContent=`${i}.0`,b.reset(),y.close(),w.classList.remove("disactive_video_window")});y.addEventListener("click",e=>{e.target===e.currentTarget&&(i=0,m.textContent=`${i}.0`,b.reset(),y.close(),w.classList.remove("disactive_video_window"))});const me=()=>{m.textContent=`${i}.0`};for(let e=0;e<H.length;e++){const t=H[e];t.addEventListener("mouseenter",()=>{const s=t.dataset.rating;m.textContent=`${s}.0`}),t.addEventListener("mouseleave",me),t.addEventListener("click",()=>{S=t.dataset.rating,i=S,m.textContent=`${S}.0`})}b.addEventListener("submit",ge);function ge(e){e.preventDefault();const t=e.currentTarget;K=t.elements.email.value,Q=t.elements.coment.value,i===0?l.error({message:"Please enter your raiting",position:"topCenter",backgroundColor:"#FF6666"}):pe().then(()=>{y.close(),w.classList.remove("disactive_video_window"),l.info({message:"Thank you for your feedback",position:"topCenter"})}).catch(()=>{l.error({message:"Something wrong. Please try again later!",position:"topCenter"})}).finally(()=>{i=0,m.textContent=`${i}.0`,b.reset()})}function pe(){let e={};e.rate=parseInt(S),e.email=K,e.review=Q,I=Y.dataset.id;const t={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://energyflow.b.goit.study/api/exercises/${I}/rating`,t).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const k=document.querySelector(".footer-form"),fe=document.querySelector(".loader");async function he(e){return x.post("https://energyflow.b.goit.study/api/subscription",e)}k.addEventListener("submit",ye);function ye(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){q("The email field is empty!","ERROR");return}const s={email:t};U("true"),he(s).then(({data:a,status:n})=>{n===201&&q(a.message,"OK")}).catch(a=>{a.response.status===409?q("Subscription already exists!"):q(a.message,"ERROR")}).finally(()=>{k.reset(),U(!1)})}function q(e,t="info"){t==="OK"?l.success({position:"topCenter",message:e}):t==="ERROR"?l.error({position:"topCenter",message:e}):l.info({position:"topCenter",message:e})}function U(e=!0){fe.style.display=e?"inline-block":"none",k.disabled=e}
//# sourceMappingURL=commonHelpers2.js.map
