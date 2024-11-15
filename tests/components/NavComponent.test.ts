import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NavComponent from "~/components/NavComponent.vue";

describe("NavComponent", () => {
  it("renders navigation links correctly", () => {
    const wrapper = mount(NavComponent);
    const links = wrapper.findAll("a");
    expect(links.length).toBeGreaterThan(0);
  });

  it("changes active section on scroll", async () => {
    const wrapper = mount(NavComponent);
    await wrapper.setData({ activeSection: "experience" });
    const experienceLink = wrapper.find('a[href="#experience"]');
    expect(experienceLink.classes()).toContain("text-accent2");
  });

  it("handles theme toggle", async () => {
    const wrapper = mount(NavComponent);
    const themeButton = wrapper.find("button");
    await themeButton.trigger("click");
    expect(wrapper.emitted("toggle-theme")).toBeTruthy();
  });

  it("renders social links with correct hrefs", () => {
    const wrapper = mount(NavComponent);
    const githubLink = wrapper.find('a[href="https://github.com/NicRuhmer"]');
    const linkedinLink = wrapper.find(
      'a[href="https://www.linkedin.com/in/ralison-heriniaina-rogenico-ruhmer/"]'
    );

    expect(githubLink.exists()).toBe(true);
    expect(linkedinLink.exists()).toBe(true);
  });
});
