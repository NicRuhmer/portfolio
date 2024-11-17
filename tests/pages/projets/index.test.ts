import { projects } from "@/data/projects";
import ProjectsIndex from "@/pages/projets/index.vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: vi.fn(),
    go: vi.fn(),
    beforeEach: vi.fn(),
    afterEach: vi.fn(),
    currentRoute: { value: { path: "/" } },
  }),
}));

describe("ProjectsIndex", () => {
  let router: any;

  beforeEach(() => {
    vi.clearAllMocks();
    router = {
      push: vi.fn(),
      go: vi.fn(),
      beforeEach: vi.fn(),
      afterEach: vi.fn(),
      currentRoute: { value: { path: "/" } },
    };
  });

  it("renders projects page correctly", () => {
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find("h1").text()).toBe("All Projects");
    expect(wrapper.find('[data-testid="back-button"]').text()).toContain(
      "Heriniaina Ralison"
    );
    const tableRows = wrapper.findAll('[data-testid="project-row"]');
    expect(tableRows.length).toBe(projects.length);
  });

  it("displays project details correctly in desktop view", () => {
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    const firstProject = projects[0];
    const firstRow = wrapper.findAll('[data-testid="project-row"]')[0];

    expect(firstRow.find('[data-testid="project-year"]').text()).toBe(
      String(firstProject.year)
    );
    expect(firstRow.find('[data-testid="project-title"]').text()).toBe(
      firstProject.title
    );
    expect(firstRow.find('[data-testid="project-made-at"]').text()).toBe(
      firstProject.madeAt
    );
    expect(firstRow.find('[data-testid="project-progress"]').text()).toBe(
      firstProject.progress
    );

    const technologies = firstRow.findAll('[data-testid="project-technology"]');
    expect(technologies.length).toBe(firstProject.technologies.length);
  });

  it("displays projects correctly in mobile view", () => {
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    const mobileProjects = wrapper.findAll('[data-testid="mobile-project"]');
    expect(mobileProjects.length).toBe(projects.length);

    const firstProject = projects[0];
    const firstMobileProject = mobileProjects[0];

    expect(
      firstMobileProject.find('[data-testid="project-image"]').attributes("src")
    ).toBe(firstProject.image);
    expect(
      firstMobileProject.find('[data-testid="mobile-project-title"]').text()
    ).toContain(firstProject.title);
    expect(
      firstMobileProject.find('[data-testid="project-description"]').text()
    ).toContain(firstProject.description);
  });

  it("opens project in new tab when clicked", async () => {
    const mockOpen = vi.spyOn(window, "open").mockImplementation(() => null);
    const wrapper = mount(ProjectsIndex, {
      global: {
        plugins: [router],
      },
    });

    await wrapper.find('[data-testid="mobile-project-title"]').trigger("click");
    expect(mockOpen).toHaveBeenCalledWith(projects[0].link, "_blank");
    mockOpen.mockRestore();
  });
});
