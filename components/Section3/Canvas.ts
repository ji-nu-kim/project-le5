export default class Canvas {
  canvasElem: HTMLCanvasElement;
  constructor(canvasElem: HTMLCanvasElement) {
    this.canvasElem = canvasElem;
  }

  createCircle() {
    const x = Math.floor(Math.random() * 450);
    const y = Math.floor(Math.random() * 450);
    const ctx = this.canvasElem.getContext('2d');
    ctx?.beginPath();
    ctx?.arc(x, y, 50, 0, 2 * Math.PI);
    ctx?.stroke();
  }
}
