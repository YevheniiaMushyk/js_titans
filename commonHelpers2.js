import{a as _,l as h,d as k,o as z}from"./assets/scroll_to_top-2a286288.js";import{a as L,i as f}from"./assets/vendor-8cce9181.js";const J=document.querySelector(".header__button"),W=document.querySelector(".modal__button_close"),I=document.getElementById("header_modal");J.addEventListener("click",()=>{I.showModal()});W.addEventListener("click",()=>{I.close()});const b={quoteText:document.querySelector(".quote-card-text"),quoteAuthor:document.querySelector(".quote-card-author")},Y="https://energyflow.b.goit.study/api/quote";async function V(e){try{_(h);const t=localStorage.getItem("quoteLocalData");if(t){const n=JSON.parse(t),c=A();if(n.date===c){D(n.author,n.quote);return}}const a=(await L.get(e)).data;if(a){const n={quote:a.quote,author:a.author,date:A()};localStorage.setItem("quoteLocalData",JSON.stringify(n)),D(n.author,n.quote)}}catch{b.quoteAuthor.textContent="Angry Developer",b.quoteText.textContent="Internet access is required to receive a quote.",f.error({title:"Error",message:"No internet connection"})}}function A(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),s=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return`${t}-${s}-${a}`}function D(e,t){k(h),b.quoteAuthor.textContent=e,b.quoteText.textContent=t}V(Y);const G=document.querySelector(".exercises-search"),X=document.querySelector(".exercises-name"),r={buttons:document.querySelector(".exercises-buttons"),musclesButton:document.querySelector('[data-filter="muscles"]'),bodypartButton:document.querySelector('[data-filter="bodypart"]'),equipmentButton:document.querySelector('[data-filter="equipment"]'),cardContainer:document.querySelector(".exercises-card-container"),pagination:document.querySelector("#pagination"),excerciceContainer:document.querySelector(".container-ex")};document.querySelector(".exercises-search-form");let x=null;L.defaults.baseURL="https://energyflow.b.goit.study/api";const d={filter:"Muscles",page:1,perPage:12,totalPages:1,totalItems:0};async function N(){return B(".exercises-card-container","add"),(await L.get("/filters",{params:{filter:d.filter,page:d.page,limit:d.perPage}})).data}function U(e){r.cardContainer.innerHTML="";const t=e.map(({name:s,filter:a,imgUrl:n})=>new Promise(c=>{const u=new Image;u.src=n,u.onload=()=>{c(`<li class="card-item">
          <a href="">
            <img class="card-image" src="${n}" alt="Card Image">
            <ul class="card-item-desc"="${s}">
              <li class="name" data-source="${s}">${s}</li>
              <li class="filter" data-source="${a}">${a}</li>
            </ul>
          </a>
        </li>`)}}));Promise.all(t).then(s=>{const a=s.join("");r.cardContainer.innerHTML=a,B(".exercises-card-container","add"),k(h),r.cardContainer.insertAdjacentHTML("beforeend",'<div id="pagination" class="tui-pagination"></div>')})}function F(){_(h),N().then(e=>{const{results:t,page:s,totalPages:a}=e;if(d.totalPages=a,B(".exercises-card-container","del"),U(t),a>1){const n=ee(s,a);r.pagination.innerHTML=n,document.querySelector(".pag-btn").classList.add("active"),d.filter!=="Body parts"?r.pagination.style.display="block":r.pagination.style.display="none"}else r.pagination.style.display="none"}).catch(e=>{se(e.message,"ERROR")}).finally(()=>{})}F();r.musclesButton.classList.add("active");r.buttons.addEventListener("click",e=>{Z(e);const t=e.target;r.pagination.classList.remove("hidden"),G.classList.add("hidden"),X.innerHTML="Exercises";const s=document.querySelector(".pagination-container");s.innerHTML="",s.classList.add("hidden"),t!==e.currentTarget&&(t===r.musclesButton?d.filter="Muscles":t===r.bodypartButton?d.filter="Body parts":t===r.equipmentButton&&(d.filter="Equipment"),d.page=1,F())});function Z(e){const t=e.target.nodeName==="BUTTON";r.musclesButton.classList.remove("active"),t&&(e.target.classList.add("active"),x!==null&&x.classList.remove("active"),x=e.target,x!==null&&x.classList.add("active"))}r.pagination.addEventListener("click",te);function ee(e,t){let s="";for(;e<=t;e++)s+=`<button class="pag-btn" type="button">${e}</button>`;return s}async function te(e){document.querySelectorAll(".pag-btn").forEach(s=>{s.classList.remove("active")}),e.target.classList.add("active"),d.page=e.target.textContent,r.cardContainer.innerHTML="";try{_(h);const{results:s}=await N();U(s),r.excerciceContainer&&r.excerciceContainer.scrollIntoView({behavior:"smooth"})}catch(s){console.log(s)}}function B(e,t){const s=document.querySelector(e),a=s.getBoundingClientRect();a.height>100&&t==="add"&&(s.setAttribute("style","height:"+a.height+"px"),s.style.height=a.height+"px"),t==="del"&&(s.removeAttribute("style"),s.style.height="auto")}function se(e,t="info"){t==="OK"?f.success({position:"topCenter",message:e}):t==="ERROR"?f.error({position:"topCenter",message:e}):f.info({position:"topCenter",message:e})}let ae="https://energyflow.b.goit.study/api/exercises/";const H=document.querySelector(".exercises-search-form"),p=document.querySelector(".exercises-card-container"),ne=document.querySelector(".exercises-search"),re=document.querySelector(".exercises-name"),ie=document.querySelector("#pagination");let v=1;const O=9,m={name:"",page:1,maxPage:0,limit:9};let oe="";function T(){p.innerHTML='<div class="no-results-text">Unfortunately, <span>no results</span> were found.You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</div>'}p.addEventListener("click",ce);async function ce(e){e.preventDefault();const t=e.target.closest(".card-item");if(ie.classList.add("hidden"),t){const s=t.querySelector(".name"),a=t.querySelector(".filter");if(s&&a){const n=s.textContent.trim().replace(/\s/g,"%20");let c=a.textContent.trim().toLowerCase().replace(/\s/g,"");c==="bodyparts"&&(c=c.replace(/s$/,"")),re.innerHTML=`Exercises /
        <span>${j(n.replace(/%20/g," "))}</span>`;try{let E=function(g){y.innerHTML="";for(let o=1;o<=g;o++){const l=document.createElement("button");l.classList.add("pagination-btn"),l.textContent=o,l.setAttribute("data-page",o),l.addEventListener("click",w),y.appendChild(l)}document.querySelectorAll(".pagination-btn").forEach(o=>o.classList.remove("active")),document.querySelector(`.pagination-btn[data-page='${v}']`).classList.add("active")};const u=`${ae}?${c}=${n}`,{results:C,totalPages:q}=await M("",1,u);ne.classList.toggle("hidden");const y=document.querySelector(".pagination-container");O>=q?m.maxPage=1:(m.maxPage=3,E(3),y.classList.remove("hidden"));async function w(g){const o=parseInt(g.target.dataset.page);if(v!==o){document.querySelectorAll(".pagination-btn").forEach(i=>i.classList.remove("active")),v=o,g.target.classList.add("active");const l=(v-1)*O;try{const{results:i}=await M("",v,u);i&&i.length>0?R(i,p):(p.innerHTML="",T())}catch(i){console.log(i)}g.target.classList.add("active")}}H.addEventListener("submit",$);async function $(g){g.preventDefault(),p.innerHTML="",y.innerHTML="";const o=g.currentTarget,l=o.elements.exercises.value.trim();if(oe=l,m.page=1,l===""||l==null){T();return}try{const{results:i,totalPages:Q}=await M(l,1,u);i&&i.length>0?(m.maxPage=Math.ceil(Q/m.perpage),R(i,p),p.querySelectorAll(".exercises-title").forEach(function(P){P.scrollWidth>P.clientWidth&&P.classList.add("with-ellipsis")})):(p.innerHTML="",T())}catch(i){console.log(i)}finally{o.reset()}}m.maxPage=Math.ceil(q/m.perpage),R(C,p)}catch(u){console.log(u)}finally{H.reset()}}}}function M(e,t=1,s){return L.get(s,{params:{keyword:e,limit:9,page:t}}).then(a=>a.data)}function R(e,t){const s=e.map(({rating:a,name:n,burnedCalories:c,bodyPart:u,target:C,gifUrl:q,description:y,equipment:E,popularity:w,_id:$})=>`
    <li class="exercises-item" data-gifUrl=${q} data-description="${y}" data-equipment=${E} data-popularity=${w} data-id=${$}>
            <div class="exercises-sub-title">
<div class="exercises__workout-rating"><p class="exercises-workout">workout</p>
                    <span class="exercises-rating"><span class="exercises-rating__text">${String(a).padEnd(3,".0")}</span><svg class="exercises-rating__svg" width="18" height="18">
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
                <span class="exercises-title-text">${j(n)}</span>
            </div>
            <div class="exercises-text">
                <p class="exercises-text__content"><span class="exercises-text__static">Burned calories:</span>
                    <span class="exercises-text__dynamic">${c} / 3 min</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Body part:</span>
                    <span class="exercises-text__dynamic">${u}</span></p>
                <p class="exercises-text__content"><span class="exercises-text__static">Target:</span>
                    <span class="exercises-text__dynamic">${C}</span></p>
            </div>
    </li>`).join("");t.innerHTML=s,document.querySelectorAll(".exercises-start").forEach(a=>a.addEventListener("click",z))}function j(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const K=document.querySelector(".footer-form");async function le(e){return L.post("https://energyflow.b.goit.study/api/subscription",e)}K.addEventListener("submit",ue);function ue(e){e.preventDefault();const t=e.currentTarget.email.value.trim().toLowerCase();if(t===""){S("The email field is empty!","ERROR");return}const s={email:t};_(h),le(s).then(({data:a,status:n})=>{n===201&&S(a.message,"OK")}).catch(a=>{a.response.status===409?S("Subscription already exists!"):S(a.message,"ERROR")}).finally(()=>{K.reset(),k(h)})}function S(e,t="info"){t==="OK"?f.success({position:"topCenter",message:e}):t==="ERROR"?f.error({position:"topCenter",message:e}):f.info({position:"topCenter",message:e})}
//# sourceMappingURL=commonHelpers2.js.map
