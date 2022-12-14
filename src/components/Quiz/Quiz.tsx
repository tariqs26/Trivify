import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { afterAnswer } from 'app/utils';
import { stopTimer } from 'features/timerSlice';
import { useQuestionsFetch } from 'hooks/useQuestionsFetch';
import QuizFooter from './QuizFooter/QuizFooter';
import Question from '../Question/Question';
import QuizModal from './QuizModal/QuizModal';
import './Quiz.css';

export default function Quiz() {
  const { isLoading, questions, currentIndex } = useAppSelector(
    (state) => state.quiz
  );
  useQuestionsFetch();

  const { isTimerComplete } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isTimerComplete) return;
    dispatch(stopTimer());
    afterAnswer(dispatch, currentIndex, questions);
  }, [questions, currentIndex, isTimerComplete]);

  return isLoading ? (
    <div className='loader-container'>
      <div className='loader-bars'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            className='loader-bar'
            key={i}
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <>
      <QuizModal />
      <div className='quiz page'>
        <Question {...questions[currentIndex]} />
        <QuizFooter />
      </div>
    </>
  );
}
