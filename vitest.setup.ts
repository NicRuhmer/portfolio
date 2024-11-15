import { afterEach, vi } from "vitest";

// 1. Mock de ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// 2. Mock de window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// 3. Mock de window.scrollTo
window.scrollTo = vi.fn();

// 4. Mock de IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// 5. Nettoyage après chaque test
afterEach(() => {
  vi.clearAllMocks();
});

// Mock de fonction de routage
vi.mock("vue-router", () => ({
  useRouter: vi.fn(),
}));

// Mock de window.open
window.open = vi.fn();
