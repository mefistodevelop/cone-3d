import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const createControls = (camera, domElement) => {
  const controls = new OrbitControls(camera, domElement);
  return controls;
};
