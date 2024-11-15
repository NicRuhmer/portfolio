import AboutComponent from "@/components/AboutComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("AboutComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(AboutComponent);
    expect(wrapper.exists()).toBe(true);
  });

  // Test du contenu
  it("contains introduction text", () => {
    const wrapper = mount(AboutComponent);
    expect(wrapper.text()).toContain("your introduction text here");
  });

  // Test des liens sociaux si présents
  it("renders social links", () => {
    const wrapper = mount(AboutComponent);
    const socialLinks = wrapper.findAll(".social-link");
    expect(socialLinks.length).toBeGreaterThan(0);
  });
});
