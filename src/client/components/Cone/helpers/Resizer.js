const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    this.container = container;
    this.camera = camera;
    this.renderer = renderer;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    setSize(container, camera, renderer);
    window.addEventListener('resize', () => {
      setSize(container, camera, renderer);
    });
  }

  unsubscribe() {
    window.removeEventListener('resize', () => {
      setSize(this.container, this.camera, this.renderer);
    });
  }
}

export { Resizer };
