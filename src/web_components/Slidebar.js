export default class SlideBar extends HTMLElement {
    constructor() {
      super();
      this.rendered = false;
      this.attachShadow({ mode: "open" });
      this.detail = { position: 0 };
      this.progressEvent = new CustomEvent("progresschange", {
        bubbles: false,
        cancelable: true
      });
      this.seekEvent = new CustomEvent("seekchange", {
        bubbles: false,
        cancelable: true,
        detail: this.detail
      });
      this.mouseHoverEvent = new CustomEvent("mousehover", {
        bubbles: false,
        cancelable: true,
        detail: this.detail
      });
    }
  
    connectedCallback() {
      this.render();
    }
  
    disconnectedCallback() {
      document.removeEventListener("mousemove", this._setPosition);
      document.removeEventListener("mouseup", this._freezePosition);
      document.removeEventListener("mouseleave", this._freezePosition);
  
      document.removeEventListener("touchmove", this._setPosition);
      document.removeEventListener("touchend", this._freezePosition);
      document.removeEventListener("touchcancel", this._freezePosition);
    }
  
    static get observedAttributes() {
      return ["progress", "buffer-start", "buffer-end"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "progress":
          this._updateAttribute(newValue, "progress");
          break;
        case "buffer-start":
          this._updateAttribute(newValue, "buffer-start");
          break;
        case "buffer-end":
          this._updateAttribute(newValue, "buffer-end");
          break;
        default:
          return;
      }
    }
  
    _updateAttribute(val = 0, attribute) {
      val = Number(val);
      if (!this.wrapper || isNaN(val)) return;
      if (val > 100 || val < 0) return;
      this.wrapper.style.setProperty(`--${attribute}`, `${val}%`);
    }
  
    fireProgressEvent() {
      clearTimeout(this._progressTimer);
      this._progressTimer = setTimeout(() => {
        this.dispatchEvent(this.progressEvent);
      }, 100);
    }
  
    fireSeekEvent(val) {
      this.detail.position = val;
      this.dispatchEvent(this.seekEvent);
    }
  
    mouseHover(event) {
      let rect = this.getBoundingClientRect();
      let absX = event.clientX;
      let pos = absX - rect.left;
      let progress = (pos * 100) / this.clientWidth;
      this.detail.position = progress;
      this.dispatchEvent(this.mouseHoverEvent);
    }
  
    updatePosition(event) {
      let eventname = event.type;
      if (eventname.includes("move") && !this.moused) return;
      let rect = this.getBoundingClientRect();
      let absX = eventname.includes("touch")
        ? event.touches[0]
          ? event.touches[0].clientX
          : event.changedTouches?.length
          ? event.changedTouches[event.changedTouches.length - 1].clientX
          : null
        : event.clientX;
  
      if (isNaN(Number(absX))) return;
      let pos = absX - rect.left;
      let progress = (pos * 100) / this.clientWidth;
      this.setProgress(progress, eventname);
    }
  
    setProgress(val, eventname) {
      val = val > 100 ? 100 : val < 0 ? 0 : val;
      this.setAttribute("progress", val);
      this.fireSeekEvent(val);
      if (eventname.includes("move")) return;
      this.fireProgressEvent();
    }
    toggleMoused(val, event) {
      if (this.moused && !val) this.updatePosition(event);
      this.moused = val;
    }
  
    attachListeners() {
      this._setPosition = this.updatePosition.bind(this);
      this._freezePosition = this.toggleMoused.bind(this, false);
      this._unfreezePosition = this.toggleMoused.bind(this, true);
      this._mouseHover = this.mouseHover.bind(this);
  
      let pointer = this.wrapper.querySelector(".pointer");
  
      this.wrapper.addEventListener("mouseup", this._setPosition);
      this.wrapper.addEventListener("mousemove", this._mouseHover);
  
      pointer.addEventListener("mousedown", this._unfreezePosition);
      document.addEventListener("mousemove", this._setPosition);
      document.addEventListener("mouseup", this._freezePosition);
      document.addEventListener("mouseleave", this._freezePosition);
  
      pointer.addEventListener("touchstart", this._unfreezePosition);
      document.addEventListener("touchmove", this._setPosition);
      document.addEventListener("touchend", this._freezePosition);
      document.addEventListener("touchcancel", this._freezePosition);
    }
  
    render() {
      if (this.rendered) return;
      this.wrapper = document.createElement("div");
      this.wrapper.classList.add("wrapper");
      this.wrapper.innerHTML = `
      <div class="slidebar">
        <div class="buffer"></div>
        <div class="progress"></div>
      </div>
      <div class="pointer">
      <svg height='100%' style='display:block;' viewbox='0 0 100 100'></svg>
      </div>
      `;
      let styles = document.createElement("style");
      styles.textContent = `  
       .wrapper{
        height:100%;
        width:100%;
        position:relative;
        --progress:0;
        --buffer-start:0;
        --buffer-end:0;
        --pointer-height:0
       }
        .pointer{
          height:100%;
          width:max-content;
          border-radius: 50%;
          background:var(--pointer-clr,red);
          position:absolute;
          top:50%;
          left:var(--progress);
          transform:translate(-50%,-50%);
          cursor: pointer;
        }
        .slidebar{
          height:40%;
          width:100%;
          background:lightblue;
          position:absolute;
          top:50%;
          left:0;
          transform:translateY(-50%);
          cursor:pointer;
        }
        .progress{
            height:100%;
            position:absolute;
            left:0;
            top:0;
            width:var(--progress);
            background:var(--progress-clr,orange);
        }
        .buffer{
            height:100%;
            position:absolute;
            left:var(--buffer-start);
            top:0;
            background:var(--buffer-clr,darkgrey);
            width:0;
            width:calc( var(--buffer-end) - var(--buffer-start));
        }
      `;
      this.shadowRoot.append(styles, this.wrapper);
      this.attachListeners();
  
      for (let attr of ["progress", "buffer-start", "buffer-end"]) {
        let val = this.getAttribute(attr);
        if (val) this._updateAttribute(val, attr);
      }
  
      this.rendered = true;
    }
  }

  