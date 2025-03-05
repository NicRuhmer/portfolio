import { p as projects, _ as _sfc_main$1 } from "./projects-CumsFn8O.js";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "./vue.8fc199ce-DOOoMjNn.js";
import "../../server.mjs";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "radix3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-bkg text-content flex h-screen w-full flex-col overflow-auto scroll-smooth pt-20" }, _attrs))}><div class="mx-auto w-full max-w-[1200px] lg:px-6 px-0"><div class="px-4"><h2 data-testid="back-button" class="text-accent1 group my-3 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left transition-all duration-200 group-hover:inline-block group-hover:-translate-x-1"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Heriniaina Ralison </h2><h1 class="text-accent2 text-3xl lg:text-5xl font-semibold">All Projects</h1></div><div class="bg-bkg mt-8 hidden lg:block"><table class="w-full"><thead class=""><tr class="text-left"><th class="text-accent2 px-4 py-8 text-sm font-medium">Year</th><th class="text-accent2 px-4 text-sm font-medium">Project</th><th class="text-accent2 px-4 text-sm font-medium">Made at</th><th class="text-accent2 px-4 text-sm font-medium">Progress</th><th class="text-accent2 px-4 text-sm font-medium">Built with</th><th class="text-accent2 px-4 text-sm font-medium">Link</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<tr data-testid="project-row" class="border-t border-gray-800 transition-all duration-300"><td class="text-accent2 px-4 py-8 text-sm" data-testid="project-year">${ssrInterpolate(project.year)}</td><td class="text-accent1 px-4" data-testid="project-title">${ssrInterpolate(project.title)}</td><td class="text-accent2 px-4 text-sm" data-testid="project-made-at">${ssrInterpolate(project.madeAt)}</td><td class="text-content text-nowrap px-4 text-sm" data-testid="project-progress">${ssrInterpolate(project.progress)}</td><td class="px-4"><div class="flex flex-wrap gap-2 px-4"><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span data-testid="project-technology" class="text-accent1 bg-accent1/10 rounded-full px-3 py-1 text-sm">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></td><td>`);
        if (project.link) {
          _push(`<a${ssrRenderAttr("href", project.link)} target="_blank" data-testid="project-link" class="hover:text-accent1 text-content group flex items-center gap-1 transition-all duration-300">${ssrInterpolate(project.linkText)} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right group-hover:text-accent1 transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="lg:hidden"><div class="lg:hidden space-y-6 mt-8"><!--[-->`);
      ssrRenderList(unref(projects), (project) => {
        _push(`<div data-testid="mobile-project" class="hover:bg-accent1/5 group mt-3 flex w-full flex-col md:flex-row justify-between gap-6 rounded-lg bg-transparent px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&amp;:not(:hover)]:opacity-50 [.hover-group:hover_&amp;:not(:hover)]:blur-[.5px]"><div class="w-full md:w-2/6 shrink-0 text-sm">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `/images/${project.image.replace(/^\/?(images\/)?/, "")}`,
          alt: project.alt_title,
          class: "h-auto w-full rounded-lg",
          quality: "80"
        }, null, _parent));
        _push(`</div><div class="text-accent2 w-full md:w-4/6 cursor-pointer"><h2 data-testid="mobile-project-title" class="group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300">${ssrInterpolate(project.title)} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></h2><p class="text-content mt-2 text-sm" data-testid="project-description">${ssrInterpolate(project.description)}</p><p class="text-content mt-2 flex flex-wrap gap-2 text-sm" data-testid="project-technology"><!--[-->`);
        ssrRenderList(project.technologies, (tech) => {
          _push(`<span class="bg-accent1/10 text-accent1 rounded-xl px-3 py-1 text-sm transition-colors duration-300">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></p>`);
        if (project.link) {
          _push(`<a${ssrRenderAttr("href", project.link)} target="_blank" class="hover:text-accent1 text-content group flex items-center gap-1 transition-all duration-300 mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> ${ssrInterpolate(project.linkText)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col sm:flex-row items-start sm:items-center gap-2"><span class="text-content group flex items-center gap-1 transition-all duration-300">${ssrInterpolate(project.madeAt)}</span><span class="text-content hidden md:inline">,</span><span class="text-content group flex items-center gap-1 transition-all duration-300">${ssrInterpolate(project.year)}</span><span class="text-content hidden md:inline">,</span><span class="text-content group flex items-center gap-1 transition-all duration-300">${ssrInterpolate(project.progress)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projets/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CVI8AlLp.js.map
