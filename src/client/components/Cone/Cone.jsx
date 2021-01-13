import React from 'react';
import * as THREE from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './Cone.scss';

class Cone extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.scene = new THREE.Scene();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    canvas.appendChild(renderer.domElement);

    const cone = this.createCone();
    this.scene.add(cone);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 30;
    camera.position.y = -35;
    camera.position.x = -30;
    controls.update();

    const animate = () => {
      if (this.resizeRendererToDisplaySize(renderer)) {
        const newWidth = canvas.clientWidth;
        const newHeight = canvas.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }

      requestAnimationFrame(animate);
      renderer.render(this.scene, camera);
    };

    animate();
  }

  componentDidUpdate(prevProps) {
    const { points } = this.props;

    if (points !== prevProps.points) {
      this.scene.remove(this.scene.children[0]);
      const newCone = this.createCone();
      this.scene.children[0] = newCone;
      this.scene.add(newCone);
    }
  }

  createCone() {
    const { points } = this.props;
    const vectors = [];

    points.forEach((p) => vectors.push(new THREE.Vector3(...p)));

    const geometry = new ConvexGeometry(vectors);
    const material = new THREE.MeshNormalMaterial();
    const cone = new THREE.Mesh(geometry, material);
    return cone;
  }

  resizeRendererToDisplaySize(renderer) {
    const canvas = this.canvasRef.current;
    if (!canvas) return false;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, true);
    }
    return needResize;
  }

  render() {
    return <div className="cone" ref={this.canvasRef} />;
  }
}

export { Cone };
