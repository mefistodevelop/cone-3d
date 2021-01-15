import React from 'react';
import './Cone.scss';
import { createScene } from './helpers/scene';
import { createCamera } from './helpers/camera';
import { createRenderer } from './helpers/renderer';
import { createCone } from './helpers/cone';
import { Resizer } from './helpers/Resizer';
import { Loop } from './helpers/Loop';
import { createControls } from './helpers/controls';

class Cone extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.scene = createScene();
    this.camera = createCamera();
    this.renderer = createRenderer();
    this.resizer = null;
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.controls = createControls(this.camera, this.renderer.domElement);
    this.renderCone = this.renderCone.bind(this);
  }

  componentDidMount() {
    const { points } = this.props;
    const canvas = this.canvasRef.current;
    canvas.appendChild(this.renderer.domElement);

    this.resizer = new Resizer(canvas, this.camera, this.renderer);

    const cone = createCone(points);
    this.scene.add(cone);
    this.controls.update();
    this.renderCone();
    this.loop.start();
    this.controls.addEventListener('change', this.renderCone);
  }

  componentDidUpdate(prevProps) {
    const { points } = this.props;

    if (points !== prevProps.points) {
      this.scene.remove(this.scene.children[0]);
      const newCone = createCone(points);
      this.scene.add(newCone);
    }
  }

  componentWillUnmount() {
    this.loop.stop();
    this.resizer.unsubscribe();
    this.controls.removeEventListener('change', this.renderCone);
    this.renderer.dispose();
    this.scene.remove(this.scene.children[0]);
  }

  renderCone() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return <div className="cone" ref={this.canvasRef} />;
  }
}

export { Cone };
