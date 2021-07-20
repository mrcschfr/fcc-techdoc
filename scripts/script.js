// Let's create an anonymous function that is immediately executed.

(function() {
  const doc = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function() {
      this.elHeaderExpand = document.getElementById("header-container-expand");
      this.elHeaderSubtitle = document.querySelector("header p");
      this.elNavExpand = document.getElementById("nav-container-expand");
      this.elNavItems = document.querySelector("nav ul");
    },
    bindEvents: function() {
      this.elHeaderExpand.addEventListener("click", this.toggleHeader);
      //this.elNavExpand.addEventListener(onclick, "toggleNav");
    },
    toggleHeader: function() {
      alert("CLICK");
      this.elHeaderSubtitle.classList.toggle("collapsed");
    }
  }

  doc.init();
})();