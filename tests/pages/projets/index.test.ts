import { projects } from "@/data/projects";
import ProjectsIndex from "@/pages/projets/index.vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

// Mock du router
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

describe("ProjectsIndex", () => {
  beforeEach(() => {
    // Reset des mocks entre chaque test
    vi.clearAllMocks();
  });

  it("rend correctement la page des projets", () => {
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    // Vérifie le titre principal
    expect(wrapper.find("h1").text()).toBe("All Projects");

    // Vérifie que le nom est présent
    expect(wrapper.find("h2").text()).toContain("Heriniaina Ralison");

    // Vérifie que tous les projets sont rendus
    const tableRows = wrapper.findAll("tbody tr");
    expect(tableRows.length).toBe(projects.length);
  });

  it("affiche correctement les détails de chaque projet dans le tableau desktop", () => {
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    const firstProject = projects[0];
    const firstRow = wrapper.findAll("tbody tr")[0];

    // Vérifie les colonnes du premier projet
    expect(firstRow.find("td:nth-child(1)").text()).toBe(firstProject.year);
    expect(firstRow.find("td:nth-child(2)").text()).toBe(firstProject.title);
    expect(firstRow.find("td:nth-child(3)").text()).toBe(firstProject.madeAt);
    expect(firstRow.find("td:nth-child(4)").text()).toBe(firstProject.progress);

    // Vérifie les technologies
    const technologies = firstRow.findAll(".bg-accent1\\/10");
    expect(technologies.length).toBe(firstProject.technologies.length);
  });

  it("affiche correctement les projets en version mobile", () => {
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    const mobileProjects = wrapper.findAll(".lg\\:hidden .group");
    expect(mobileProjects.length).toBe(projects.length);

    // Vérifie le premier projet en version mobile
    const firstProject = projects[0];
    const firstMobileProject = mobileProjects[0];

    expect(firstMobileProject.find("img").attributes("src")).toBe(
      firstProject.image
    );
    expect(firstMobileProject.find("h2").text()).toContain(firstProject.title);
    expect(firstMobileProject.find("p").text()).toContain(
      firstProject.description
    );
  });

  it("ouvre un nouvel onglet lors du clic sur un projet", async () => {
    const mockOpen = vi.spyOn(window, "open").mockImplementation(() => null);

    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    // Clic sur le titre du premier projet en version mobile
    await wrapper.find(".lg\\:hidden h2").trigger("click");

    expect(mockOpen).toHaveBeenCalledWith(projects[0].link, "_blank");

    mockOpen.mockRestore();
  });

  it("navigue en arrière lors du clic sur le bouton retour", async () => {
    const mockRouterGo = vi.spyOn(router, "go");

    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.find("h2").trigger("click");

    expect(mockRouterGo).toHaveBeenCalledWith(-1);
  });
});
