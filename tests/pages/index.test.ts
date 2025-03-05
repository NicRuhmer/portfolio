import CardComponent from "@/components/cardComponent.vue";
import { experiences } from "@/data/experiences";
import IndexPage from "@/pages/index.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/utils/useAssetUrl", () => ({
  useAssetUrl: () => ({
    getAssetUrl: (path: string) => `/portfolio/${path.replace(/^\//, "")}`,
  }),
}));

describe("IndexPage", () => {
  const mountOptions = {
    global: {
      stubs: {
        CardComponent: true,
        ProjectsComponent: true,
        AboutComponent: true,
        NavComponent: true,
      },
      mocks: {
        $router: {
          push: vi.fn(),
        },
      },
    },
  };

  it("renders all main sections", () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.find("#about").exists()).toBe(true);
    expect(wrapper.find("#experience").exists()).toBe(true);
    expect(wrapper.find("#projects").exists()).toBe(true);
  });

  it("displays correct number of experiences", () => {
    const wrapper = mount(IndexPage, {
      global: {
        components: {
          CardComponent, // Enregistrer le vrai composant
        },
        stubs: {
          ProjectsComponent: true,
          AboutComponent: true,
          NavComponent: true,
        },
        mocks: {
          $router: {
            push: vi.fn(),
          },
        },
      },
    });

    const experienceCards = wrapper.findAllComponents(CardComponent);
    expect(experienceCards.length).toBe(experiences.length);
  });

  it("limits projects display to 3", () => {
    const wrapper = mount(IndexPage);
    const projectComponents = wrapper.findAllComponents({
      name: "ProjectsComponent",
    });
    expect(projectComponents.length).toBeLessThanOrEqual(3);
  });

  it("handles resume link correctly", async () => {
    const windowSpy = vi.spyOn(window, "open");
    const wrapper = mount(IndexPage, {
      global: {
        stubs: false, // Désactiver les stubs pour ce test
      },
    });

    // Utiliser un sélecteur plus flexible
    const resumeLink = wrapper.find('a[href*="drive.google.com"]');
    expect(resumeLink.exists()).toBe(true);

    await resumeLink.trigger("click");
    expect(windowSpy).toHaveBeenCalledWith(
      "https://drive.google.com/file/d/1tWDKZO5-1gPGR6h3fHCox2X-U59mSOq0/view?usp=drive_link",
      "_blank"
    );
  });
});
