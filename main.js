const { Plugin } = require('obsidian');

module.exports = class FileTreeSelectorHueRotatePlugin extends Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.hoverOverlayEl = null;
    this.activeOverlayEl = null;
    this.activeElementTracker = null;
  }

  async onload() {
    console.log('%c[Selector Hue Rotate]%c Initializing Floating Body-Child Overlay Engine...', 'color: #a4b0be; font-weight: bold;', 'color: default;');

    // 1. Inject the required baseline layout resets and direct border color animations
    this.injectStyles();

    // 2. Instantiate our floating overlay elements directly as children of document.body
    this.createOverlayElements();

    // 3. Register global delegation events to trace, track, and snap overlays to file tree items
    this.registerDomEvent(document.body, 'mouseover', (evt) => this.handleFileTreeHover(evt));
    this.registerDomEvent(document.body, 'mouseout', (evt) => this.handleFileTreeLeave(evt));

    // 4. Periodically monitor selection states to keep the active selection overlay perfectly aligned
    this.registerInterval(
      window.setInterval(() => this.trackActiveSelectionCoordinate(), 500)
    );
    this.registerEvent(
      this.app.workspace.on('layout-change', () => this.trackActiveSelectionCoordinate())
    );
  }

  onunload() {
    console.log('%c[Selector Hue Rotate]%c Stripping body overlay nodes...', 'color: #a4b0be; font-weight: bold;', 'color: default;');
    if (this.hoverOverlayEl) this.hoverOverlayEl.remove();
    if (this.activeOverlayEl) this.activeOverlayEl.remove();

    const styleEl = document.getElementById('obsidian-file-tree-selector-hue-rotate');
    if (styleEl) styleEl.remove();
  }

  createOverlayElements() {
    // Instantiate Hover Overlay Box
    this.hoverOverlayEl = document.createElement('div');
    this.hoverOverlayEl.id = 'obsidian-hue-rotate-hover-overlay';
    this.hoverOverlayEl.style.opacity = '0';
    document.body.appendChild(this.hoverOverlayEl);

    // Instantiate Active Selection Overlay Box
    this.activeOverlayEl = document.createElement('div');
    this.activeOverlayEl.id = 'obsidian-hue-rotate-active-overlay';
    this.activeOverlayEl.style.opacity = '0';
    document.body.appendChild(this.activeOverlayEl);
  }

  // Snaps our body-child overlay coordinates directly over the targeted file explorer elements
  snapOverlayToElement(element, overlayDOMNode) {
    const rect = element.getBoundingClientRect();
    
    overlayDOMNode.style.width = rect.width + 'px';
    overlayDOMNode.style.height = rect.height + 'px';
    overlayDOMNode.style.top = rect.top + 'px';
    overlayDOMNode.style.left = rect.left + 'px';
    overlayDOMNode.style.opacity = '1';
  }

  handleFileTreeHover(evt) {
    const targetRow = evt.target.closest('.tree-item-self');
    if (!targetRow) return;

    // Reposition and trigger the fast hover animation overlay node instantly
    this.snapOverlayToElement(targetRow, this.hoverOverlayEl);

    // If this hovered row is also the active selection, match animations to avoid visual overlapping
    if (targetRow.classList.contains('is-active')) {
      this.hoverOverlayEl.classList.add('hue-rotate-fast-velocity');
      this.activeOverlayEl.style.opacity = '0'; // Temporarily hide resting slow overlay while mouse is present
    } else {
      this.hoverOverlayEl.classList.remove('hue-rotate-fast-velocity');
    }
  }

  handleFileTreeLeave(evt) {
    const targetRow = evt.target.closest('.tree-item-self');
    if (!targetRow) return;

    // Completely hide the hover frame when the mouse leaves the target row boundaries
    if (this.hoverOverlayEl) {
      this.hoverOverlayEl.style.opacity = '0';
    }
    
    // Restore the slow resting selection overlay seamlessly
    this.trackActiveSelectionCoordinate();
  }

  // Tracks the active .is-active file node to keep the selection border snapped during scrolls or view updates
  trackActiveSelectionCoordinate() {
    const activeSelection = document.querySelector('.tree-item-self.is-active');
    
    if (!activeSelection) {
      if (this.activeOverlayEl) this.activeOverlayEl.style.opacity = '0';
      this.activeElementTracker = null;
      return;
    }

    this.activeElementTracker = activeSelection;
    
    // If the mouse is currently hovering over this exact selection element, let the hover handler dominate
    const hoveredNode = document.querySelector('.tree-item-self:hover');
    if (hoveredNode === activeSelection) {
      this.activeOverlayEl.style.opacity = '0';
      return;
    }

    this.snapOverlayToElement(activeSelection, this.activeOverlayEl);
  }

  injectStyles() {
    if (document.getElementById('obsidian-file-tree-selector-hue-rotate')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'obsidian-file-tree-selector-hue-rotate';

    styleEl.innerHTML = `
      /* Global Floating Overlay Base Rules Framework */
      #obsidian-hue-rotate-hover-overlay,
      #obsidian-hue-rotate-active-overlay {
        position: fixed !important;
        pointer-events: none !important; /* Prevents the direct body child from blocking mouse clicks */
        border-radius: 4px !important;
        box-sizing: border-box !important;
        z-index: 99999 !important; /* Ensures overlay sits on top of all file explorer scrolling containers */
        background-color: transparent !important;
        display: block !important; /* Enforce block rendering footprint so keyframes stay loaded */
        transition: opacity 0.15s ease !important;
        border: 1px solid transparent; 
      }

      /* Hover Overlay defaults to a fast 2-second border color animation cycle */
      #obsidian-hue-rotate-hover-overlay {
        animation: fileTreeFlatColorRotate 2s linear infinite !important;
      }

      /* Active Selection Overlay defaults to a slower 6-second resting cycle */
      #obsidian-hue-rotate-active-overlay {
        animation: fileTreeFlatColorRotate 6s linear infinite !important;
      }

      /* Forced override rule when hovering over an active selection node */
      #obsidian-hue-rotate-hover-overlay.hue-rotate-fast-velocity {
        animation: fileTreeFlatColorRotate 2s linear infinite !important;
      }

      /* Direct Border-Color Keyframe Timelines: Bundles solid border shorthand to force browser parsing */
      @keyframes fileTreeFlatColorRotate {
        0%   { border: 1px solid hsl(0, 85%, 60%); }
        17%  { border: 1px solid hsl(60, 85%, 60%); }
        33%  { border: 1px solid hsl(120, 85%, 60%); }
        50%  { border: 1px solid hsl(180, 85%, 60%); }
        67%  { border: 1px solid hsl(240, 85%, 60%); }
        83%  { border: 1px solid hsl(300, 85%, 60%); }
        100% { border: 1px solid hsl(360, 85%, 60%); }
      }
    `;

    document.head.appendChild(styleEl);
    console.log('[Selector Hue Rotate] Hardware-insulated direct body-child floating overlays successfully registered.');
  }
};
