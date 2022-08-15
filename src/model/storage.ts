const storage = {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string) {
    if (localStorage.getItem(key)) {
      const temp: any = localStorage.getItem(key);
      return JSON.parse(temp);
    } else {
      return null;
    }
  },

  remove(key: string) {
    localStorage.removeItem(key);
  }
};
export default storage;
