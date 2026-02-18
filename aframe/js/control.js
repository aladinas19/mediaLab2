console.log("controls.js užkrautas");

window.addEventListener("load", () => {
  const model = document.querySelector("#model");

  if (!model) {
    console.error("Modelis nerastas");
    return;
  }


  model.addEventListener("loaded", () => {
    console.log("Modelis pilnai užkrautas");

    document.getElementById("rotLeft").onclick = () => {
      model.object3D.rotation.y -= 0.2;
    };

    document.getElementById("rotRight").onclick = () => {
      model.object3D.rotation.y += 0.2;
    };

    document.getElementById("moveForward").onclick = () => {
      model.object3D.position.z -= 0.2;
    };

    document.getElementById("moveBack").onclick = () => {
      model.object3D.position.z += 0.2;
    };

    document.getElementById("moveLeft").onclick = () => {
      model.object3D.position.x -= 0.2;
    };

    document.getElementById("moveRight").onclick = () => {
      model.object3D.position.x += 0.2;
    };

    document.getElementById("scaleUp").onclick = () => {
      model.object3D.scale.x += 0.1;
      model.object3D.scale.y += 0.1;
      model.object3D.scale.z += 0.1;
    };

    document.getElementById("scaleDown").onclick = () => {
      model.object3D.scale.x = Math.max(0.1, model.object3D.scale.x - 0.1);
      model.object3D.scale.y = Math.max(0.1, model.object3D.scale.y - 0.1);
      model.object3D.scale.z = Math.max(0.1, model.object3D.scale.z - 0.1);
    };
  });
});
