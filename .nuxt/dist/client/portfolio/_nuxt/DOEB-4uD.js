import{p as u,_ as w}from"./BYjLsRP3.js";import{n as k,x as v,o as n,c as a,a as t,d as r,F as i,v as d,t as o,R as x,u as p,b as _}from"./CiDkqvS1.js";const b={class:"bg-bkg text-content flex h-screen w-full flex-col overflow-auto scroll-smooth pt-20"},y={class:"mx-auto w-full max-w-[1200px] lg:px-6 px-0"},B={class:"bg-bkg mt-8 hidden lg:block"},C={class:"w-full"},M={class:"text-accent2 px-4 py-8 text-sm","data-testid":"project-year"},N={class:"text-accent1 px-4","data-testid":"project-title"},P={class:"text-accent2 px-4 text-sm","data-testid":"project-made-at"},T={class:"text-content text-nowrap px-4 text-sm","data-testid":"project-progress"},V={class:"px-4"},A={class:"flex flex-wrap gap-2 px-4"},R=["href"],$={class:"lg:hidden"},F={class:"lg:hidden space-y-6 mt-8"},H={class:"w-full md:w-2/6 shrink-0 text-sm"},L={class:"text-accent2 w-full md:w-4/6 cursor-pointer"},q=["onClick"],D={class:"text-content mt-2 text-sm","data-testid":"project-description"},E={class:"text-content mt-2 flex flex-wrap gap-2 text-sm","data-testid":"project-technology"},I=["href"],S={class:"flex flex-col sm:flex-row items-start sm:items-center gap-2"},Y={class:"text-content group flex items-center gap-1 transition-all duration-300"},j={class:"text-content group flex items-center gap-1 transition-all duration-300"},z={class:"text-content group flex items-center gap-1 transition-all duration-300"},O=k({__name:"index",setup(G){const h=v(),g=c=>{window.open(c,"_blank")};function m(){h.go(-1)}return(c,s)=>{const f=w;return n(),a("div",b,[t("div",y,[t("div",{class:"px-4"},[t("h2",{onClick:m,"data-testid":"back-button",class:"text-accent1 group my-3 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-colors duration-200"},s[0]||(s[0]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-arrow-left transition-all duration-200 group-hover:inline-block group-hover:-translate-x-1"},[t("path",{d:"m12 19-7-7 7-7"}),t("path",{d:"M19 12H5"})],-1),r(" Heriniaina Ralison ")])),s[1]||(s[1]=t("h1",{class:"text-accent2 text-3xl lg:text-5xl font-semibold"},"All Projects",-1))]),t("div",B,[t("table",C,[s[3]||(s[3]=t("thead",{class:""},[t("tr",{class:"text-left"},[t("th",{class:"text-accent2 px-4 py-8 text-sm font-medium"},"Year"),t("th",{class:"text-accent2 px-4 text-sm font-medium"},"Project"),t("th",{class:"text-accent2 px-4 text-sm font-medium"},"Made at"),t("th",{class:"text-accent2 px-4 text-sm font-medium"},"Progress"),t("th",{class:"text-accent2 px-4 text-sm font-medium"},"Built with"),t("th",{class:"text-accent2 px-4 text-sm font-medium"},"Link")])],-1)),t("tbody",null,[(n(!0),a(i,null,d(p(u),e=>(n(),a("tr",{key:e.id,"data-testid":"project-row",class:"border-t border-gray-800 transition-all duration-300"},[t("td",M,o(e.year),1),t("td",N,o(e.title),1),t("td",P,o(e.madeAt),1),t("td",T,o(e.progress),1),t("td",V,[t("div",A,[(n(!0),a(i,null,d(e.technologies,l=>(n(),a("span",{key:l,"data-testid":"project-technology",class:"text-accent1 bg-accent1/10 rounded-full px-3 py-1 text-sm"},o(l),1))),128))])]),t("td",null,[e.link?(n(),a("a",{key:0,href:e.link,target:"_blank","data-testid":"project-link",class:"hover:text-accent1 text-content group flex items-center gap-1 transition-all duration-300"},[r(o(e.linkText)+" ",1),s[2]||(s[2]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-arrow-up-right group-hover:text-accent1 transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1"},[t("path",{d:"M7 7h10v10"}),t("path",{d:"M7 17 17 7"})],-1))],8,R)):x("",!0)])]))),128))])])]),t("div",$,[t("div",F,[(n(!0),a(i,null,d(p(u),e=>(n(),a("div",{key:e.id,"data-testid":"mobile-project",class:"hover:bg-accent1/5 group mt-3 flex w-full flex-col md:flex-row justify-between gap-6 rounded-lg bg-transparent px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]"},[t("div",H,[_(f,{src:`/images/${e.image.replace(/^\/?(images\/)?/,"")}`,alt:e.alt_title,class:"h-auto w-full rounded-lg",quality:"80"},null,8,["src","alt"])]),t("div",L,[t("h2",{onClick:l=>g(e.link),"data-testid":"mobile-project-title",class:"group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300"},[r(o(e.title)+" ",1),s[4]||(s[4]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1"},[t("path",{d:"M7 7h10v10"}),t("path",{d:"M7 17 17 7"})],-1))],8,q),t("p",D,o(e.description),1),t("p",E,[(n(!0),a(i,null,d(e.technologies,l=>(n(),a("span",{key:l,class:"bg-accent1/10 text-accent1 rounded-xl px-3 py-1 text-sm transition-colors duration-300"},o(l),1))),128))]),e.link?(n(),a("a",{key:0,href:e.link,target:"_blank",class:"hover:text-accent1 text-content group flex items-center gap-1 transition-all duration-300 mt-2"},[s[5]||(s[5]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-link"},[t("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),t("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})],-1)),r(" "+o(e.linkText),1)],8,I)):x("",!0),t("div",S,[t("span",Y,o(e.madeAt),1),s[6]||(s[6]=t("span",{class:"text-content hidden md:inline"},",",-1)),t("span",j,o(e.year),1),s[7]||(s[7]=t("span",{class:"text-content hidden md:inline"},",",-1)),t("span",z,o(e.progress),1)])])]))),128))])])])])}}});export{O as default};
