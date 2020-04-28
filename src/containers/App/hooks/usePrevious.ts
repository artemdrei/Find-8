import { useEffect, useRef } from 'react';

export const usePrevious = (value: number) => {
  const ref: any = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current || 0;
};
