import{a as i,l as n,d as f}from"./assets/scroll_to_top-f5052643.js";import{a as q,i as m}from"./assets/vendor-8cce9181.js";const g=document.querySelector(".favheader__button"),h=document.querySelector(".favmodal__button_close"),d=document.querySelector(".favmodal");g.addEventListener("click",()=>{d.showModal()});h.addEventListener("click",()=>{d.close()});const c={quoteText:document.querySelector(".favorites-text"),quoteAuthor:document.querySelector(".favorites-sub-title")},S="https://energyflow.b.goit.study/api/quote";async function v(e){try{i(n);const t=localStorage.getItem("quoteLocalData");if(t){const o=JSON.parse(t),l=s();if(o.date===l){u(o.author,o.quote);return}}const a=(await q.get(e)).data;if(a){const o={quote:a.quote,author:a.author,date:s()};localStorage.setItem("quoteLocalData",JSON.stringify(o)),u(o.author,o.quote)}}catch(t){m.error("Failed to fetch quote data"),console.error(t)}finally{f(n)}}function s(){const e=new Date,t=String(e.getDate()).padStart(2,"0"),r=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return`${t}-${r}-${a}`}function u(e,t){c.quoteAuthor.textContent=e,c.quoteText.textContent=t}v(S);
//# sourceMappingURL=commonHelpers.js.map
