class Language {
  message = "";

  constructor() {
    this.message = "";
  }

  en(message) {
    if ((sessionStorage.getItem("language") || "EN") === "EN") {
      this.message = message
    }
    return this
  }

  cn(message) {
    if (sessionStorage.getItem("language") === "CN") {
      this.message = message
    }
    return this
  }

  getMessage() {
    return this.message
  }
}

const HungrySingleton = (function () {
  const _instance = new Language();

  return function () {
    return _instance;
  };
})();

// const newL = (() => {
//   return () => {
//     return new Language()
//   }
// })()

const LanguageInstance = HungrySingleton();

export default LanguageInstance