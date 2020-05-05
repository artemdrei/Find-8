import { useState, useLayoutEffect } from 'react';

export const useFieldSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      // TODO:: use argument instead hadcoded
      const layout = document.querySelector('#content') as HTMLDivElement;
      setSize([layout.clientHeight, layout.clientWidth]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('optimizedResize', updateSize);
  }, []);
  console.log('size:', size);

  return size;
};
