import { IAction, IDispatch, IPhoto } from '@root/typings';
import api from '@api/requests';
import { mapPhotos } from '@api/mappers';

type TFetchPhotos = () => (dispatch: IDispatch) => void;
export interface IFetchPhotos extends IAction<'FETCH_PHOTOS'> {
  payload: IPhoto[];
}

export const fetchPhotos: TFetchPhotos = () => async (dispatch) => {
  console.log('__SHOW LOADER__');
  try {
    const photos = await api.fetchPhotos();
    const mappedPhots = mapPhotos(photos);

    const action: IFetchPhotos = {
      type: 'FETCH_PHOTOS',
      payload: mappedPhots,
    };

    dispatch(action);
  } catch (e) {
    console.log('fetchPhotos redux action error', e);
  } finally {
    console.log('__HIDE LOADER__');
  }
};
