import React, { useState } from 'react';
import './Form.scss';

export const Form = () => {
  const [height, setHeight] = useState('');
  const [radius, setRadius] = useState('');
  const [segments, setSegments] = useState('');

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
    console.log(`${height} ${radius} ${segments}`);
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

      <button type="submit" className="form__button">
        Render
      </button>
    </form>
  );
};
