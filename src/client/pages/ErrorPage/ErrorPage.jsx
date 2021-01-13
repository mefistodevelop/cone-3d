import React from 'react';
import './ErrorPage.scss';

export function ErrorPage() {
  return (
    <main className="error-page">
      <h1 className="error-page__small-text">page not found</h1>
      <p className="error-page__large-text">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </p>
      <p className="error-page__small-text">
        Sorry, requested page has not been found
      </p>
    </main>
  );
}
