import React from 'react';
import * as THREE from 'three';
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

    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 10, 20);
    scene.add(light);

    const geometry = new THREE.ConeBufferGeometry(5, 10, 10);
    const material = new THREE.MeshPhongMaterial({ color: 0xff00f0 });
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);

    camera.position.z = 50;

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
