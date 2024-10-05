AFRAME.registerComponent("movement", {
  init: function () {
    window.addEventListener("keydown", (e) => {
      let researcher_rotation = this.el.getAttribute('rotation');
      if (e.key === "ArrowRight") {
        this.el.setAttribute("rotation", { x: researcher_rotation.x, y: 90, z: researcher_rotation.z });
      }
      if (e.key === "ArrowLeft") {
        this.el.setAttribute("rotation", { x: researcher_rotation.x, y: 270, z: researcher_rotation.z });
      }
      if (e.key === "ArrowUp") {
        this.el.setAttribute("rotation", { x: researcher_rotation.x, y: 180, z: researcher_rotation.z });
      }
      if (e.key === "ArrowDown") {
        this.el.setAttribute("rotation", { x: researcher_rotation.x, y: 0, z: researcher_rotation.z });
      }
    });
  },

  tick: function () {
    let camera = document.getElementById('look');
    let camera_position = camera.getAttribute('position');

    this.el.setAttribute("position", {
      x: camera_position.x,
      y: camera_position.y - 9,
      z: camera_position.z - 9,
    });
  },
});
