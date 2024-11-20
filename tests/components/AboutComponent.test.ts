import AboutComponent from "@/components/aboutComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("AboutComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(AboutComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it("contains introduction text", () => {
    const wrapper = mount(AboutComponent);
    expect(wrapper.text()).toContain("Back in 2020");
    expect(wrapper.text()).toContain("Computer Science studies");
  });

  it("contains all main sections of the introduction", () => {
    const wrapper = mount(AboutComponent);

    // Vérifie les sections principales
    const expectedContent = [
      "Back in 2020",
      "Computer Science studies",
      "performance optimization",
      "web accessibility",
      "Outside of coding",
    ];

    expectedContent.forEach((content) => {
      expect(wrapper.text()).toContain(content);
    });
  });
});
