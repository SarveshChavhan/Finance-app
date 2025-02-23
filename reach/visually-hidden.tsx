import React, { ReactNode } from 'react';

interface VisuallyHiddenProps {
  children: ReactNode;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return (
    <span style={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      whiteSpace: 'nowrap'
    }}>
      {children}
    </span>
  );
};

export default VisuallyHidden;