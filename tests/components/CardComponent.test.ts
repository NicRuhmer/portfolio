import CardComponent from "@/components/cardComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("CardComponent", () => {
  const defaultProps = {
    period: "2023-2024",
    title: "Projet Test",
    description: "Description du projet",
    technologies: ["Vue", "TypeScript", "Tailwind"],
  };

  it("renders properly with props", () => {
    const wrapper = mount(CardComponent, {
      props: defaultProps,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("displays correct content", () => {
    const wrapper = mount(CardComponent, {
      props: defaultProps,
    });
    expect(wrapper.text()).toContain(defaultProps.title);
    expect(wrapper.text()).toContain(defaultProps.description);
    expect(wrapper.text()).toContain(defaultProps.period);
  });

  it("renders all technologies", () => {
    const wrapper = mount(CardComponent, {
      props: defaultProps,
    });
    const techElements = wrapper.findAll('[data-testid="technology"]');
    expect(techElements.length).toBe(defaultProps.technologies.length);

    defaultProps.technologies.forEach((tech, index) => {
      expect(techElements[index].text()).toContain(tech);
    });
  });

  it("handles empty technologies array", () => {
    const wrapper = mount(CardComponent, {
      props: {
        ...defaultProps,
        technologies: [],
      },
    });
    const techElements = wrapper.findAll('[data-testid="technology"]');
    expect(techElements.length).toBe(0);
  });
});
