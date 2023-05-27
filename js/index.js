class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

function FontSize(type){
  var cls = [".font", ".font2", ".font3", ".font4", ".font5", ".font6", ".font7", ".font8", 
  ".font9", ".font10", ".font11", ".font12", ".font13", ".font14", ".font15", ".font16", ".font17", 
  ".font18", ".font19", ".font20", ".font21", ".font22", ".font23", ".font24", ".font25", ".font26", 
  ".font27", ".font28"];

  cls.forEach(classList=>{
    var elemento = document.querySelector(classList);
    var size = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    size = parseFloat(size);
    if (type=="aumentar"){
      elemento.style.fontSize=(size+5)+"px";
    }
  
    else{
      elemento.style.fontSize=(size-5)+"px";
    }
  })
}