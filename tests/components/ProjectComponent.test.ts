import ProjectsComponent from "@/components/ProjectsComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

describe("ProjectsComponent", () => {
  const mockProps = {
    image: "/test-image.jpg",
    alt_title: "Test Project",
    title: "Project Title",
    description: "Project Description",
    technologies: ["Vue", "TypeScript"],
    link: "https://example.com",
  };

  it("renders with all props correctly", () => {
    const wrapper = mount(ProjectsComponent, {
      props: mockProps,
    });

    expect(wrapper.find("img").attributes("src")).toBe(mockProps.image);
    expect(wrapper.find("h2").text()).toContain(mockProps.title);
    expect(wrapper.text()).toContain(mockProps.description);
  });

  it("opens project link in new tab when clicked", async () => {
    const windowSpy = vi.spyOn(window, "open");
    const wrapper = mount(ProjectsComponent, {
      props: mockProps,
    });

    await wrapper.find("h2").trigger("click");
    expect(windowSpy).toHaveBeenCalledWith(mockProps.link, "_blank");
  });

  it("applies hover effects correctly", async () => {
    const wrapper = mount(ProjectsComponent, {
      props: mockProps,
    });

    await wrapper.trigger("mouseenter");
    expect(wrapper.classes()).toContain("hover:shadow-lg");
  });
});
