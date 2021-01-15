import { PerspectiveCamera } from 'three';

export const createCamera = () => {
  const camera = new PerspectiveCamera(90, 2, 0.1, 1000);
  camera.position.set(-35, -30, 30);

  return camera;
};
