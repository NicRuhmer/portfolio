import NavComponent from "@/components/NavComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { ref } from "vue";

// Mock du module useTheme
vi.mock("@/utils/useTheme", () => ({
  useTheme: () => {
    const theme = ref("light");
    const toggleTheme = () => {
      theme.value = theme.value === "light" ? "dark" : "light";
    };
    return {
      theme,
      toggleTheme,
    };
  },
}));

describe("NavComponent", () => {
  it("renders navigation links correctly", () => {
    const wrapper = mount(NavComponent);
    const links = wrapper.findAll("a");
    expect(links.length).toBeGreaterThan(0);
  });

  it("changes active section on scroll", async () => {
    const wrapper = mount(NavComponent, {
      global: {
        stubs: {
          IntersectionObserver: true,
        },
      },
    });

    // Accéder à la ref exposée
    const vm = wrapper.vm as any;

    // Modifier la valeur de activeSection directement
    vm.activeSection = "experience";
    await wrapper.vm.$nextTick();

    const experienceLink = wrapper.find('a[href="#experience"]');
    expect(experienceLink.classes()).toContain("text-accent2");
  });

  it("handles theme toggle", async () => {
    const wrapper = mount(NavComponent);
    const themeButton = wrapper.find("button");

    // Récupérer l'état initial du thème
    const initialTheme = wrapper.vm.theme;

    // Cliquer sur le bouton
    await themeButton.trigger("click");

    // Vérifier que toggleTheme a été appelé
    expect(wrapper.vm.theme).not.toBe(initialTheme);
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
