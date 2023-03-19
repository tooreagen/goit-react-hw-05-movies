import { Text } from './Notification.styled';
import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <Text>{message}</Text>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};