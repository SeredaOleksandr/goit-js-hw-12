import{S as i,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const u=o=>{const e=`https://pixabay.com/api/?${new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(e).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})},d=document.querySelector(".gallery");let p=new i(".gallery a",{captionsData:"alt",captionDelay:250});const f=o=>{const s=o.hits.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href=${e.largeImageURL}>
                <img
                    src=${e.webformatURL}
                    alt=${e.tags}
                />
            </a>
                 <div>
                <p><span>Likes</span> ${e.likes}</p>
                <p><span>Views</span> ${e.views}</p>
                <p><span>Comments</span> ${e.comments}</p>
                <p><span>Downloads</span> ${e.downloads}</p>
            </div>
                </li>`).join("");d.insertAdjacentHTML("beforeend",s),p.refresh()},y=document.querySelector("form"),m=document.querySelector(".gallery"),l=document.querySelector(".loader");y.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.search.value.trim();l.style.display="flex",m.innerHTML="",u(s).then(e=>{e.hits.length===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!"}),f(e)}).catch(e=>console.error("Error",e)).finally(()=>l.style.display="none")});
//# sourceMappingURL=commonHelpers.js.map
