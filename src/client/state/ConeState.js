import React, { createContext, useContext, useReducer } from 'react';
import { coneApi } from '../api/api';

const ConeContext = createContext();
export const useConeData = useContext(ConeContext);

const initialState = {
  points: [],
};

const SET_POINTS = 'SET_POINTS';

const coneReducer = (state, action) => {
  switch (action.type) {
    case SET_POINTS:
      return { ...state, points: action.payload };
    default:
      return state;
  }
};

export const ConeState = ({ children }) => {
  const [state, dispatch] = useReducer(coneReducer, initialState);

  const setPoints = (points) => dispatch({ type: SET_POINTS, payload: points });

  const getPoints = async (height, radius, segmentsNumber) => {
    try {
      const points = await coneApi.getPoints(height, radius, segmentsNumber);
      setPoints(points);
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
    }
  };

  return (
    <ConeContext.Provider value={{ getPoints, points: state.points }}>
      {children}
    </ConeContext.Provider>
  );
};
