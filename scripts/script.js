// Let's create an anonymous function that is immediately executed.

(function() {
  const doc = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: function() {
      this.elHeaderExpand = document.getElementById("header-container-expand");
      this.elHeaderSubtitle = document.querySelector("header > p");
      this.elNavExpand = document.getElementById("nav-container-expand");
      this.elNavItems = document.querySelector("nav ul");
    },
    bindEvents: function() {
      this.elHeaderExpand.addEventListener("click", this.toggleHeader.bind(this));
      this.elNavExpand.addEventListener("click", this.toggleNav.bind(this));
    },
    toggleHeader: function() {
      this.elHeaderSubtitle.classList.toggle("collapsed");
      this.elHeaderSubtitle.classList.toggle("expanded");
    },
    toggleNav: function() {
      this.elNavItems.classList.toggle("collapsed");
      this.elNavItems.classList.toggle("expanded");
    }
  }

  doc.init();
})();