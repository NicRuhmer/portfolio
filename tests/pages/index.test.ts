import { experiences } from "@/data/experiences";
import IndexPage from "@/pages/index.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

describe("IndexPage", () => {
  it("renders all main sections", () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find("#about").exists()).toBe(true);
    expect(wrapper.find("#experience").exists()).toBe(true);
    expect(wrapper.find("#projects").exists()).toBe(true);
  });

  it("displays correct number of experiences", () => {
    const wrapper = mount(IndexPage);
    const experienceCards = wrapper.findAllComponents({
      name: "CardComponent",
    });
    expect(experienceCards.length).toBe(experiences.length);
  });

  it("limits projects display to 3", () => {
    const wrapper = mount(IndexPage);
    const projectComponents = wrapper.findAllComponents({
      name: "ProjectsComponent",
    });
    expect(projectComponents.length).toBeLessThanOrEqual(3);
  });

  it("handles view all projects navigation", async () => {
    const mockRouter = {
      push: vi.fn(),
    };
    const wrapper = mount(IndexPage, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    await wrapper
      .find('h2[text="View Full Projects Archive"]')
      .trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith({ path: "/projets" });
  });

  it("handles resume link correctly", async () => {
    const windowSpy = vi.spyOn(window, "open");
    const wrapper = mount(IndexPage);

    await wrapper.find('h2[text="View Full Resume"]').trigger("click");
    expect(windowSpy).toHaveBeenCalledWith(
      "https://drive.google.com/file/d/1tWDKZO5-1gPGR6h3fHCox2X-U59mSOq0/view?usp=drive_link",
      "_blank"
    );
  });
});
