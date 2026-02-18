document.addEventListener("DOMContentLoaded", () => {
  const model = document.getElementById("model");

  const step = 10; // laipsniai

  document.getElementById("rotLeft").addEventListener("click", () => {
    const rot = model.getAttribute("rotation");
    model.setAttribute("rotation", {
      x: rot.x,
      y: rot.y - step,
      z: rot.z
    });
  });

  document.getElementById("rotRight").addEventListener("click", () => {
    const rot = model.getAttribute("rotation");
    model.setAttribute("rotation", {
      x: rot.x,
      y: rot.y + step,
      z: rot.z
    });
  });
});
