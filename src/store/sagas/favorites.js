import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure("Repositório já adicionado."));
    } else {
      const repositoryData = {
        id: data.id,
        avatar: data.owner.avatar_url,
        name: data.name,
        description: data.description,
        url: data.html_url,
      };

      yield put(FavoriteActions.addFavoriteSucess(repositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteFailure("Erro ao adicionar o repositório"));
  };

}
