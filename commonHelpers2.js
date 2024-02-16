import{a as C,l as h,d as B,o as z}from"./assets/scroll_to_top-c81d9934.js";import{a as L,i as f}from"./assets/vendor-8cce9181.js";const J=document.querySelector(".header__button"),W=document.querySelector(".modal__button_close"),N=document.getElementById("header_modal");J.addEventListener("click",()=>{N.showModal()});W.addEventListener("click",()=>{N.close()});const b={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},Y="https://energyflow.b.goit.study/api/quote";async function V(e){try{C(h);const t=localStorage.getItem("quoteLocalData");if(t){const n=JSON.parse(t),c=D();if(n.date===c){H(n.author,n.quote);return}}const a=(await L.get(e)).data;if(a){const n={quote:a.quote,author:a.author,date:D()};localStorage.setItem("quoteLocalData",JSON.stringify(n)),H(n.author,n.quote)}}catch{b.quoteAuthor.textContent="Angry Developer",b.quoteText.textContent="Internet access is required to receive a quote.",f.error({title:"Error",message:"No internet connection"})}}function D(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return`${t}-${s}-${a}`}function H(e,t){B(h),b.quoteAuthor.textContent=e,b.quoteText.textContent=t}V(Y);let G="https://energyflow.b.goit.study/api/exercises/";const O=document.querySelector(".exercises-search-form"),g=document.querySelector(".exercises-card-container"),X=document.querySelector(".exercises-search"),Z=document.querySelector(".exercises-name"),ee=document.querySelector("#pagination");let x=1;const I=9,m={name:"",page:1,maxPage:0,limit:9};let te="";function M(){g.innerHTML='<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}g.addEventListener("click",se);async function se(e){e.preventDefault();const t=e.target.closest(".card-item");if(ee.classList.add("hidden"),t){const s=t.querySelector(".name"),a=t.querySelector(".filter");if(s&&a){const n=s.textContent.trim().replace(/\s/g,"%20");let c=a.textContent.trim().toLowerCase().replace(/\s/g,"");c==="bodyparts"&&(c=c.replace(/s$/,"")),Z.innerHTML=`Exercises /
        <span>${_(n.replace(/%20/g," "))}</span>`;try{let w=function(d){y.innerHTML="";for(let o=1;o<=d;o++){const l=document.createElement("button");l.classList.add("pagination-btn"),l.textContent=o,l.setAttribute("data-page",o),l.addEventListener("click",$),y.appendChild(l)}document.querySelectorAll(".pagination-btn").forEach(o=>o.classList.remove("active")),document.querySelector(`.pagination-btn[data-page='${x}']`).classList.add("active")};const u=`${G}?${c}=${n.toLowerCase()}`,{results:E,totalPages:q}=await R("",1,u);X.classList.toggle("hidden");const y=document.querySelector(".pagination-container");I>=q?m.maxPage=1:(m.maxPage=3,w(3),y.classList.remove("hidden"));async function $(d){const o=parseInt(d.target.dataset.page);if(x!==o){document.querySelectorAll(".pagination-btn").forEach(i=>i.classList.remove("active")),x=o,d.target.classList.add("active");const l=(x-1)*I;try{const{results:i}=await R("",x,u);i&&i.length>0?k(i,g):(g.innerHTML="",M())}catch(i){console.log(i)}d.target.classList.add("active")}}O.addEventListener("submit",P);async function P(d){d.preventDefault(),g.innerHTML="",y.innerHTML="";const o=d.currentTarget,l=o.elements.exercises.value.trim();if(te=l,m.page=1,l===""||l==null){M();return}try{const{results:i,totalPages:Q}=await R(l,1,u);i&&i.length>0?(m.maxPage=Math.ceil(Q/m.perpage),k(i,g),g.querySelectorAll(".exercises-title").forEach(function(T){T.scrollWidth>T.clientWidth&&T.classList.add("with-ellipsis")})):(g.innerHTML="",M())}catch(i){console.log(i)}finally{o.reset()}}m.maxPage=Math.ceil(q/m.perpage),k(E,g)}catch(u){console.log(u)}finally{O.reset()}}}}function R(e,t=1,s){return L.get(s,{params:{keyword:e,limit:9,page:t}}).then(a=>a.data)}function k(e,t){const s=e.map(({rating:a,name:n,burnedCalories:c,bodyPart:u,target:E,gifUrl:q,description:y,equipment:w,popularity:$,time:P,_id:d})=>`
    <li class="exercises-item" data-gifUrl=${q} data-description="${y}" data-equipment=${w} data-popularity=${$} data-time=${P} data-id=${d}>
            <div class="exercises-sub-title">
                  <div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(a).padEnd(3,".0")}</span>
                    <svg class="exercises-rating__svg" width="18" height="18"><use href="#icon-star_yellow"></use></svg></span>
                  </div>
                  <div class="exercises-start"><span class="exercises-start__text">Start</span><svg
                        class="exercises-start__svg" width="13" height="13"><use href="#icon-arrow"></use></svg></div>
                  </div>
                  <div class="exercises-title">
                  <svg class="exercises-title__svg" width="24" height="24"><use href="#icon-fav_run_man"></use></svg>
                  <span class="exercises-title-text">${_(n)}</span>
                  </div>
                  <div class="exercises-text">
                    <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                        <span class="exercises-text__dynamic">${c} / 3 min</span></p>
                    <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                        <span class="exercises-text__dynamic">${u}</span></p>
                    <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                        <span class="exercises-text__dynamic">${E}</span></p>
            </div>
    </li>`).join("");t.innerHTML=s,document.querySelectorAll(".exercises-start").forEach(a=>a.addEventListener("click",z))}function _(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const ae=document.querySelector(".exercises-search"),ne=document.querySelector(".exercises-name"),r={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination"),excerciceContainer:document.querySelector(".container-ex")};let v=null;L.defaults.baseURL="https://energyflow.b.goit.study/api";const p={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function U(){return A(".exercises-card-container","add"),(await L.get("/filters",{params:{filter:p.filter,page:p.page,limit:p.perPage}})).data}function F(e){r.cardContainer.innerHTML="";const t=e.map(({name:s,filter:a,imgUrl:n})=>new Promise(c=>{const u=new Image;u.src=n,u.onload=()=>{c(`<li class="card-item">
          <a href="">
            <img class="card-image" src="${n}" alt="Card Image">
            <ul class="card-item-desc"="${s}">
              <li class="name" data-source="${_(s)}">${_(s)}</li>
              <li class="filter" data-source="${a}">${a}</li>
            </ul>
          </a>
        </li>`)}}));Promise.all(t).then(s=>{const a=s.join("");r.cardContainer.innerHTML=a,A(".exercises-card-container","add"),B(h),r.cardContainer.insertAdjacentHTML("beforeend",'<div id="pagination" class="tui-pagination"></div>')})}function j(){C(h),U().then(e=>{const{results:t,page:s,totalPages:a}=e;if(p.totalPages=a,A(".exercises-card-container","del"),F(t),a>1){const n=ie(s,a);r.pagination.innerHTML=n,document.querySelector(".pag-btn").classList.add("active"),p.filter!=="Body parts"?r.pagination.style.display="block":r.pagination.style.display="none"}else r.pagination.style.display="none"}).catch(e=>{ce(e.message,"ERROR")}).finally(()=>{})}j();r.musclesButton.classList.add("active");r.buttons.addEventListener("click",e=>{re(e);const t=e.target;r.pagination.classList.remove("hidden"),ae.classList.add("hidden"),ne.innerHTML="Exercises";const s=document.querySelector(".pagination-container");s.innerHTML="",s.classList.add("hidden"),t!==e.currentTarget&&(t===r.musclesButton?p.filter="Muscles":t===r.bodypartButton?p.filter="Body parts":t===r.equipmentButton&&(p.filter="Equipment"),p.page=1,j())});function re(e){const t=e.target.nodeName==="BUTTON";r.musclesButton.classList.remove("active"),t&&(e.target.classList.add("active"),v!==null&&v.classList.remove("active"),v=e.target,v!==null&&v.classList.add("active"))}r.pagination.addEventListener("click",oe);function ie(e,t){let s="";for(;e<=t;e++)s+=`<button class="pag-btn" type="button">${e}</button>`;return s}async function oe(e){document.querySelectorAll(".pag-btn").forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active"),p.page=e.target.textContent,r.cardContainer.innerHTML="";try{C(h);const{results:s}=await U();F(s),r.excerciceContainer&&r.excerciceContainer.scrollIntoView({behavior:"smooth"})}catch(s){console.log(s)}}function A(e,t){const s=document.querySelector(e),a=s.getBoundingClientRect();a.height>100&&t==="add"&&(s.setAttribute("style","height:"+a.height+"px"),s.style.height=a.height+"px"),t==="del"&&(s.removeAttribute("style"),s.style.height="auto")}function ce(e,t="info"){t==="OK"?f.success({position:"topCenter",message:e}):t==="ERROR"?f.error({position:"topCenter",message:e}):f.info({position:"topCenter",message:e})}const K=document.querySelector(".footer-form");async function le(e){return L.post("https://energyflow.b.goit.study/api/subscription",e)}K.addEventListener("submit",ue);function ue(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){S("The email field is empty!","ERROR");return}const s={email:t};C(h),le(s).then(({data:a,status:n})=>{n===201&&S(a.message,"OK")}).catch(a=>{a.response.status===409?S("Subscription already exists!"):S(a.message,"ERROR")}).finally(()=>{K.reset(),B(h)})}function S(e,t="info"){t==="OK"?f.success({position:"topCenter",message:e}):t==="ERROR"?f.error({position:"topCenter",message:e}):f.info({position:"topCenter",message:e})}
//# sourceMappingURL=commonHelpers2.js.map
