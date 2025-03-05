import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { p as projects, _ as _sfc_main$5 } from './projects-CumsFn8O.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-FNUx0CRM.mjs';
import { useRouter } from 'vue-router';
import './vue.8fc199ce-DOOoMjNn.mjs';
import './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'ipx';
import 'unhead';

const useTheme = () => {
  const theme = ref(
    "dark"
  );
  const toggleTheme = () => {
    console.log("toggleTheme");
  };
  return {
    theme,
    toggleTheme
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "navComponent",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const activeSection = ref("about");
    const { theme, toggleTheme } = useTheme();
    __expose({
      activeSection,
      theme,
      toggleTheme
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between lg:fixed lg:h-[calc(100vh-12rem)] lg:max-w-[calc((100vw-6rem)/2-1rem)]" }, _attrs))}><div class="flex flex-col gap-20"><div><h2 class="text-accent2 mb-2 text-3xl lg:text-5xl font-bold">Heriniaina Ralison</h2><p class="text-content text-lg lg:text-xl/relaxed"> Lead Developer </p><p class="text-content mt-4"> I build high-performance, engaging and <br>accessible web applications. </p></div><div class="hidden lg:flex lg:flex-col lg:space-y-8"><ul class="flex flex-col space-y-8"><li class="group"><a href="#about" data-testid="nav-about" class="${ssrRenderClass([
        "group flex items-center transition-colors duration-300",
        activeSection.value === "about" ? "text-accent2" : "text-content"
      ])}"><span class="${ssrRenderClass([
        "flex items-center transition-transform duration-300",
        activeSection.value === "about" ? "translate-x-2" : "group-hover:text-content group-hover:translate-x-2"
      ])}"><span class="${ssrRenderClass([
        "mr-5 inline-block h-px origin-left transition-all duration-300",
        activeSection.value === "about" ? "bg-accent2 w-20" : "bg-content group-hover:bg-accent2 w-12 group-hover:w-20"
      ])}"></span><span class="group-hover:text-accent2 text-sm font-semibold uppercase tracking-wider">about</span></span></a></li><li class="group"><a href="#experience" data-testid="nav-experience" class="${ssrRenderClass([
        "group flex items-center transition-colors duration-300",
        activeSection.value === "experience" ? "text-accent2" : "text-content"
      ])}"><span class="${ssrRenderClass([
        "flex items-center transition-transform duration-300",
        activeSection.value === "experience" ? "translate-x-2" : "group-hover:text-content group-hover:translate-x-2"
      ])}"><span class="${ssrRenderClass([
        "mr-5 inline-block h-px origin-left transition-all duration-300",
        activeSection.value === "experience" ? "bg-accent2 w-20" : "bg-content group-hover:bg-accent2 w-12 group-hover:w-20"
      ])}"></span><span class="group-hover:text-accent2 text-sm font-semibold uppercase tracking-wider">Experiences</span></span></a></li><li class="group"><a href="#projects" data-testid="nav-projects" class="${ssrRenderClass([
        "group flex items-center transition-colors duration-300",
        activeSection.value === "projects" ? "text-accent2" : "text-content"
      ])}"><span class="${ssrRenderClass([
        "flex items-center transition-transform duration-300",
        activeSection.value === "projects" ? "translate-x-2" : "group-hover:text-content group-hover:translate-x-2"
      ])}"><span class="${ssrRenderClass([
        "mr-5 inline-block h-px origin-left transition-all duration-300",
        activeSection.value === "projects" ? "bg-accent2 w-20" : "bg-content group-hover:bg-accent2 w-12 group-hover:w-20"
      ])}"></span><span class="group-hover:text-accent2 text-sm font-semibold uppercase tracking-wider">Projects</span></span></a></li></ul></div></div><div class="flex flex-col gap-4"></div><div class="mb-12 mt-5 flex flex-row space-x-4"><a href="https://github.com/NicRuhmer" target="_blank" class="text-content hover:text-accent2 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg></a><a href="https://www.linkedin.com/in/ralison-heriniaina-rogenico-ruhmer/" target="_blank" class="text-content hover:text-accent2 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg></a><a href="mailto:nicrohmer0@gmail.com" class="text-content hover:text-accent2 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg></a><a href="https://www.instagram.com/ruhmernic/" class="text-content hover:text-accent2 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg></a><button class="text-content hover:text-accent2 transition-colors duration-300">`);
      if (unref(theme) === "dark") {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>`);
      }
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navComponent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-start-2 flex flex-col gap-6 px-0 lg:px-5" }, _attrs))}><p class="text-content text-base/relaxed"> Back in 2020, I took the plunge into coding during my Computer Science studies, captivated by the process of transforming ideas into <span class="text-accent2">high-performance, accessible web applications</span>. Fast-forward to today, and I&#39;ve been fortunate to work on diverse international projects, collaborating with cross-functional teams to create <span class="text-accent2">robust, user-focused digital experiences</span> that prioritize usability and impact. </p><p class="text-content text-base/relaxed"> My main focus is on <span class="text-accent2">performance optimization</span> and <span class="text-accent2">web accessibility</span> \u2014 ensuring that every product not only looks polished but also <span class="text-accent2">functions seamlessly</span> under the hood. I thrive in bridging the gap between design and engineering, crafting software that meets both aesthetic and technical standards. Leading and mentoring teams has become a key part of my role, helping us collectively push the boundaries of what we can build. </p><p class="text-content text-base/relaxed"> Outside of coding, I\u2019m always on the lookout for new ways to <span class="text-accent2">challenge myself</span> and learn. Whether it\u2019s hitting the <span class="text-accent2">basketball court</span> for some friendly competition, getting immersed in a <span class="text-accent2">thought-provoking book</span>, or setting out to <span class="text-accent2">conquer a new trail</span>, I love experiences that keep me <span class="text-accent2">curious</span> and <span class="text-accent2">motivated</span>. Spending time with friends is also a huge part of my life \u2014 nothing beats a great conversation or shared adventure. These moments help me recharge and bring fresh perspectives back to my <span class="text-accent2">work</span>. </p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutComponent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "cardComponent",
  __ssrInlineRender: true,
  props: {
    period: {},
    title: {},
    description: {},
    technologies: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hover:bg-accent1/5 group mt-3 flex w-full justify-between rounded-lg bg-transparent px-0 lg:px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]" }, _attrs))}><div class="mt-1/3 text-content w-1/4 shrink-0 text-sm lg:w-2/6"><p>${ssrInterpolate(_ctx.period)}</p></div><div class="text-accent2 w-4/6 cursor-pointer"><h2 class="group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300">${ssrInterpolate(_ctx.title)}</h2><p class="text-content my-4 text-sm">${ssrInterpolate(_ctx.description)}</p><p class="text-content mt-2 flex flex-wrap gap-2 text-sm"><!--[-->`);
      ssrRenderList(_ctx.technologies, (tech) => {
        _push(`<span data-testid="technology" class="bg-accent1/10 text-accent1 rounded-xl px-3 py-1 text-sm transition-colors duration-300">${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cardComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "projectsComponent",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt_title: {},
    title: {},
    description: {},
    technologies: {},
    link: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hover:bg-accent1/5 group mt-3 flex w-full justify-between gap-6 rounded-lg bg-transparent px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]" }, _attrs))}><div class="w-2/6 shrink-0 text-sm">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: `/images/${_ctx.image.replace(/^\/?(images\/)?/, "")}`,
        alt: _ctx.alt_title,
        class: "h-auto w-full rounded-lg",
        quality: "80"
      }, null, _parent));
      _push(`</div><div class="text-accent2 w-4/6 cursor-pointer"><h2 class="group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300">${ssrInterpolate(_ctx.title)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></h2><p class="text-content mt-2 text-sm">${ssrInterpolate(_ctx.description)}</p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projectsComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const experiences = [
  {
    id: 1,
    period: "May 2024 - Present",
    title: "Lead Developer - Constellation Group",
    description: "As a Lead Developer, I lead the architecture and development of complex technical solutions including SPAs and REST APIs. I drive technical excellence through mentoring team members and establishing development best practices. I've taken ownership of company-wide accessibility initiatives, creating documentation and conducting training sessions. My role involves deep UX research and applying design thinking principles to enhance user satisfaction, while providing technical leadership across multiple projects.",
    technologies: [
      "Vue",
      "Nuxt",
      "React",
      "Nest",
      "REST APIs",
      "MongoDB",
      "TypeScript",
      "Tailwind",
      "Docker"
    ]
  },
  {
    id: 2,
    period: "Sept 2022 - May 2024",
    title: "Fullstack Developer - Constellation Group",
    description: "Working closely with project managers, designers, and engineers in an agile environment, I developed and delivered high-quality web and mobile applications for diverse clients. I specialized in transforming design concepts into polished digital experiences, utilizing modern JavaScript frameworks and best practices. My focus on implementation quality and user experience contributed to improved client satisfaction and engagement metrics across multiple projects.",
    technologies: [
      "Vue",
      "Nuxt",
      "React",
      "Javascript",
      "Nest",
      "REST APIs",
      "MongoDB",
      "TypeScript",
      "Tailwind"
    ]
  },
  {
    id: 3,
    period: "Oct 2021 - Sept 2022",
    title: "Developer - Numerika",
    description: "Led the development of interactive learning platforms using Vue.js and Laravel, including the successful launch of Formations.mg. Established and maintained design systems and reusable UI component libraries that improved development efficiency across multiple projects. My focus on user-centered design and performance optimization resulted in significant improvements in user engagement and platform satisfaction.",
    technologies: ["Vue", "Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavComponent = _sfc_main$4;
      const _component_AboutComponent = __nuxt_component_1;
      const _component_CardComponent = _sfc_main$2;
      const _component_ProjectsComponent = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><main class="bg-bkg text-content flex h-screen w-full justify-center overflow-auto scroll-smooth lg:pt-32"><div class="block w-full px-4 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-8">`);
      _push(ssrRenderComponent(_component_NavComponent, { class: "mb-12 lg:mb-0 pt-12 lg:pt-0" }, null, _parent));
      _push(`<div class="col-start-2 flex flex-col"><section id="about"><h1 class="text-accent2 text-md bg-bkg/80 sticky top-0 z-10 mb-5 py-4 font-bold uppercase backdrop-blur-sm lg:relative lg:hidden"> About</h1>`);
      _push(ssrRenderComponent(_component_AboutComponent, { class: "mb-20" }, null, _parent));
      _push(`</section><section id="experience"><h1 class="text-accent2 text-md bg-bkg/80 sticky top-0 z-10 mb-5 py-4 font-bold uppercase backdrop-blur-sm lg:relative lg:hidden"> Experiences</h1><div class="hover-group flex flex-col"><!--[-->`);
      ssrRenderList(unref(experiences), (experience) => {
        _push(ssrRenderComponent(_component_CardComponent, {
          key: experience.id,
          period: experience.period,
          title: experience.title,
          description: experience.description,
          technologies: experience.technologies
        }, null, _parent));
      });
      _push(`<!--]--></div><a class="text-accent2 hover:text-accent1 text-md group mb-20 mt-10 flex cursor-pointer items-center gap-2 font-semibold transition-colors duration-200" href="https://drive.google.com/file/d/1tWDKZO5-1gPGR6h3fHCox2X-U59mSOq0/view?usp=drive_link" target="_blank"> View Full Resume <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right transition-all duration-200 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></section><section id="projects"><h1 class="text-accent2 text-md bg-bkg/80 sticky top-0 z-10 mb-5 py-4 font-bold uppercase backdrop-blur-sm lg:relative lg:hidden"> Projects</h1><div class="hover-group flex flex-col"><!--[-->`);
      ssrRenderList(unref(projects).slice(0, 3), (project) => {
        _push(ssrRenderComponent(_component_ProjectsComponent, {
          key: project.id,
          image: project.image,
          alt_title: project.alt_title,
          title: project.title,
          link: project.link,
          description: project.description,
          technologies: project.technologies
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projets",
        "data-testid": "archive-link",
        class: "text-accent2 hover:text-accent1 text-md group mb-20 mt-10 flex cursor-pointer items-center gap-2 font-semibold transition-colors duration-200"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Full Projects Archive <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right transition-all duration-200 group-hover:inline-block group-hover:translate-x-1"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View Full Projects Archive "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                class: "lucide lucide-arrow-right transition-all duration-200 group-hover:inline-block group-hover:translate-x-1"
              }, [
                createVNode("path", { d: "M5 12h14" }),
                createVNode("path", { d: "m12 5 7 7-7 7" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-content mb-20 text-sm"> Loosely designed and inspired by some many great portfolio and minimalistic design, coded in Visual Studio Code by yours truly. Built with `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-accent2 hover:text-accent1",
        to: "https://nuxt.com/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nuxt`);
          } else {
            return [
              createTextVNode("Nuxt")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-accent2 hover:text-accent1",
        to: "https://typescriptlang.org/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Typescript`);
          } else {
            return [
              createTextVNode(" Typescript")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-accent2 hover:text-accent1",
        to: "https://tailwindcss.com/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tailwind CSS`);
          } else {
            return [
              createTextVNode("Tailwind CSS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, deployed with Docker. All text is set in the `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-accent2 hover:text-accent1",
        to: "https://rsms.me/inter/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Inter`);
          } else {
            return [
              createTextVNode("Inter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` typeface. </p></section></div></div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cp4BgVlw.mjs.map
