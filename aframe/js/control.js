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

  const moveStep = 0.2;

  document.getElementById("moveForward").addEventListener("click", () => {
    const pos = model.getAttribute("position");
    model.setAttribute("position", {
      x: pos.x,
      y: pos.y,
      z: pos.z - moveStep
    });
  });

  document.getElementById("moveBack").addEventListener("click", () => {
    const pos = model.getAttribute("position");
    model.setAttribute("position", {
      x: pos.x,
      y: pos.y,
      z: pos.z + moveStep
    });
  });

  document.getElementById("moveLeft").addEventListener("click", () => {
    const pos = model.getAttribute("position");
    model.setAttribute("position", {
      x: pos.x - moveStep,
      y: pos.y,
      z: pos.z
    });
  });

  document.getElementById("moveRight").addEventListener("click", () => {
    const pos = model.getAttribute("position");
    model.setAttribute("position", {
      x: pos.x + moveStep,
      y: pos.y,
      z: pos.z
    });
  });


    const scaleStep = 0.1;

  document.getElementById("scaleUp").addEventListener("click", () => {
    const scale = model.getAttribute("scale");

    model.setAttribute("scale", {
      x: scale.x + scaleStep,
      y: scale.y + scaleStep,
      z: scale.z + scaleStep
    });
  });

  document.getElementById("scaleDown").addEventListener("click", () => {
    const scale = model.getAttribute("scale");

    model.setAttribute("scale", {
      x: Math.max(0.1, scale.x - scaleStep),
      y: Math.max(0.1, scale.y - scaleStep),
      z: Math.max(0.1, scale.z - scaleStep)
    });
  });