export const useTheme = () => {
  const theme = ref(
    process.client ? localStorage.getItem("theme") || "dark" : "dark"
  );

  const toggleTheme = () => {
    console.log("toggleTheme");
    if (process.client) {
      theme.value = theme.value === "dark" ? "light" : "dark";
      localStorage.setItem("theme", theme.value);
      document.documentElement.setAttribute("data-theme", theme.value);
    }
  };

  onMounted(() => {
    if (process.client) {
      const savedTheme = localStorage.getItem("theme") || "dark";
      theme.value = savedTheme;
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  });

  return {
    theme,
    toggleTheme,
  };
};
