import React from 'react';
import * as THREE from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import { getPoints } from '../server/cone';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);

    renderer.setSize(width, height);

    canvas.appendChild(renderer.domElement);

    const points = getPoints(5, 2, 10);
    const vectors = [];

    points.forEach((p) => vectors.push(new THREE.Vector3(...p)));

    const geometry = new ConvexGeometry(vectors);
    const material = new THREE.MeshNormalMaterial({ color: 0xff0000 });
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      cone.rotation.y += 0.01;
      cone.rotation.z += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return (
      <div className="App">
        <div className="App__canvas" ref={this.canvasRef} />
      </div>
    );
  }
}

export { App };
