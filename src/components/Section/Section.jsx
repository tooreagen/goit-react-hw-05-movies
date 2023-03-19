import { Header } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section>
      <Header>{title}</Header>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};