/**
 * Determines whether the color scheme for the host operating system is using dark mode.
 */
const useDarkMode = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log(`Prefers dark mode ${prefersDarkMode}`);
  return prefersDarkMode;
};

export default useDarkMode;
