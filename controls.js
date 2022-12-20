class Controls {
  constructor() {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;
    this.boost = false;

    this.#addKeyboardListeners();
  }

  #addKeyboardListeners() {
    document.onkeydown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
        case "q":
          this.boost = true;
          break;
      }
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
        case "q":
          this.boost = false;
          break;
      }
    };
  }
}
