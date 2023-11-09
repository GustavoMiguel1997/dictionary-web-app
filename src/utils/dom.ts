function setDataAttributes(currentTheme: string, currentFont: string) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.documentElement.setAttribute('data-font', currentFont);
}

export { setDataAttributes };
