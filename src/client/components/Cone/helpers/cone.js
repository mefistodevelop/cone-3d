import { Mesh, MeshNormalMaterial, Vector3 } from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';

export const createCone = (points) => {
  const vectors = [];

  points.forEach((p) => vectors.push(new Vector3(...p)));

  const geometry = new ConvexGeometry(vectors);
  const material = new MeshNormalMaterial();
  const cone = new Mesh(geometry, material);

  return cone;
};
