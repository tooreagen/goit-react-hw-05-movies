import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positiveFeedbackPct, setPositiveFeedbackPct] = useState(0);

  function feedBack(item) {
    try {
      switch (item) {
        case 'Good':
          setGoodFeedback(goodFeedback + 1);
          break;
        case 'Neutral':
          setNeutralFeedback(neutralFeedback + 1);
          break;
        case 'Bad':
          setBadFeedback(badFeedback + 1);
          break;
        default:
          throw new Error('Unknown feedback');
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    const totalFeedback = goodFeedback + neutralFeedback + badFeedback;
    if (!totalFeedback) {
      return;
    }
    setTotalFeedback(totalFeedback);
    if (totalFeedback) {
      setPositiveFeedbackPct((goodFeedback / totalFeedback) * 100);
    }
  }, [goodFeedback, neutralFeedback, badFeedback]);

  return (
    <Layout>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          buttonName={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={feedBack}
        />
      </Section>

      {totalFeedback > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPct}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}

      <GlobalStyle />
    </Layout>
  );
};
