function localStorageSetup(key: string) {
  function set(value: string) {
    localStorage.setItem(key, value);
  }

  function get(): string | null {
    return localStorage.getItem(key);
  }

  function remove() {
    localStorage.removeItem(key);
  }

  return { set, get, remove };
}

export default localStorageSetup;
