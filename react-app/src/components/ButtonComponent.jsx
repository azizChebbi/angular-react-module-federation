import React from 'react';

const ButtonComponent = ({content, onClick}) => (
  <button onClick={onClick}>{content}</button>
);

export default ButtonComponent;
