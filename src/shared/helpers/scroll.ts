export const scrollToSection = (ref?: any, extraSpacing?: boolean) => {
  if (!ref) {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    return;
  }
  const spacing = extraSpacing ? 83 : 0;
  window.scroll({
    top: ref.current.offsetTop - 90 - spacing,
    left: 0,
    behavior: "smooth",
  });
};
