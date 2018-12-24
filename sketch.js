import canvasSketch from "canvas-sketch";
import { scaleLinear } from "d3-scale";

const width = 2048;

const settings = {
  animate: true,
  dimensions: [width, width]
};

const sketch = ({ width, height }) => {
  let x = 0;
  let y = 0;

  const scaleX = scaleLinear()
    .domain([-2.182, 2.6558])
    .range([0, width]);

  const scaleY = scaleLinear()
    .domain([0, 9.9983])
    .range([height, 0]);

  return ({ context }) => {
    for (let i = 0; i < 500; i += 1) {
      const px = scaleX(x);
      const py = scaleY(y);
      circle(context, px, py);

      let xNew;
      let yNew;

      const p = Math.random();

      if (p < 0.01) {
        xNew = 0;
        yNew = 0.16 * y;
      } else if (p < 0.86) {
        xNew = 0.85 * x + 0.04 * y;
        yNew = -0.04 * x + 0.85 * y + 1.6;
      } else if (p < 0.93) {
        xNew = 0.2 * x - 0.26 * y;
        yNew = 0.23 * x + 0.22 * y + 1.6;
      } else {
        xNew = -0.15 * x + 0.28 * y;
        yNew = 0.26 * x + 0.24 * y + 0.44;
      }

      x = xNew;
      y = yNew;
    }
  };
};

canvasSketch(sketch, settings);

function circle(context, x, y, radius = 1) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, false);
  context.fillStyle = "rgba(34, 139, 34, 1)";
  context.fill();
}
