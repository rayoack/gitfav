import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

import { Form, Container, List } from './styles';
import Logo from '../../assets/logo.png';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
      })),
      error: PropTypes.oneOfType([null, PropTypes.string]),
    })).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (event) => {
    event.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);

    this.setState({ repositoryInput: '' });
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="logo" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>

          { this.props.favorites.loading && <span>Carregando...</span> }

          { !!this.props.favorites.error && (<span style={{ color: '#F00' }}>{this.props.favorites.error}</span>) }
        </Form>

        <List>
          {this.props.favorites.data.map(favorite => (
            <li key={favorite.id}>
              <img src={favorite.avatar} alt={favorite.name} />
              <h3>{favorite.name}</h3>
              <div>
                <p>{favorite.description}</p>
              </div>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </List>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
