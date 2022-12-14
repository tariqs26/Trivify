import { useRef, useEffect } from 'react';

type Props = {
  questions: Array<unknown>;
  currentIndex: number;
};
export default function ProgressBar({ questions, currentIndex: idx }: Props) {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (barRef.current as HTMLDivElement).style.width = `${
      ((idx + 1) / questions.length) * 100
    }%`;
  }, [idx, questions]);

  return (
    <div className='progress-bar'>
      <div className='bar' ref={barRef}></div>
    </div>
  );
}
