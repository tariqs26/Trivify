import { useRef, useEffect } from 'react';

export const useText = <T extends HTMLElement>(text: string) => {
  const textRef = useRef<T>(null);
  useEffect(() => {
    (textRef.current as T).innerHTML = text;
  }, [text]);
  return textRef;
};
