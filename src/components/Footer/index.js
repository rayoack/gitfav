import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Container } from './styles';

const Footer = ({ count }) => (
  <Container>
    <p>Você tem {count} favoritos.</p>
  </Container>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
