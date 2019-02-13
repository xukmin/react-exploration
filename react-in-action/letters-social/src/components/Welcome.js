import React from 'react';

const Welcome = () => {
  return (
    <div>
      <div className="welcome">
        <h1>Welcome!</h1>
        <p>
          If you're here, you're learning React from{' '}
          <a href="http://ifelse.io/book" target="_blank" rel="noopener noreferrer">
            React in Action
        </a>{' '}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
