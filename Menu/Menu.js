
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu;
// create a reference to the ".menu-button" class
const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

class Panel {
  // constructor
  constructor(panel) {
    // panel is the individual DOM panel
    this.panelButtons = panel.querySelector('.panel-buttons');
    this.panelBtnOpen = panel.querySelector('.panel-btn-open');
    this.panelBtnClose = panel.querySelector('.panel-btn-close');
    this.panelContent = panel.querySelector('.panel-content');
    
    //this.panelButtons.addEventListener('click', this.togglePanel.bind(this));
    this.panelButtons.addEventListener('click', () => this.togglePanel());
    
  }
  // methods
  togglePanel() {
    console.log(this.panelBtnOpen);
    this.panelBtnOpen.classList.toggle('hide-btn');
    this.panelBtnClose.classList.toggle('hide-btn');
    this.panelContent.classList.toggle('toggle-on');
  }
}

const panels = document.querySelectorAll('.panel');
panels.forEach( panel => new Panel(panel));


// DOM panels -> loop (forEach) -> forEach will iterate over each DOM panel individually -> create a new Panel class -> creates a new panel object -> returned back to the dom
