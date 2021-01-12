import React, { useContext, useState } from 'react';
import { ConeContext } from '../../state/ConeState';
import './Form.scss';

export const Form = () => {
  const [height, setHeight] = useState('');
  const [radius, setRadius] = useState('');
  const [segments, setSegments] = useState('');
  const { getPoints } = useContext(ConeContext);

  const handleHeight = (e) => {
    const { value } = e.target;
    setHeight(value);
  };

  const handleRadius = (e) => {
    const { value } = e.target;
    setRadius(value);
  };

  const handleSegments = (e) => {
    const { value } = e.target;
    setSegments(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && radius && segments) {
      getPoints(height, radius, segments);
      setHeight('');
      setRadius('');
      setSegments('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        height
        <input
          type="number"
          className="form-control form__field"
          name="height"
          value={height}
          onChange={handleHeight}
        />
      </label>

      <label className="form__label">
        radius
        <input
          type="number"
          className="form-control form__field"
          name="radius"
          value={radius}
          onChange={handleRadius}
        />
      </label>

      <label className="form__label">
        Number of segments
        <input
          type="number"
          className="form-control form__field"
          name="segments"
          value={segments}
          onChange={handleSegments}
        />
      </label>

      <button type="submit" className="btn btn-secondary form__button">
        Render
      </button>
    </form>
  );
};
