import { Button, ButtonList } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ buttonName, onLeaveFeedback }) {
  return (
    <ButtonList>
      {buttonName.map(item => {
        return (
          <Button
            key={item}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </Button>
        );
      })}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  buttonName: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};