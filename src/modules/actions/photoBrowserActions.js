import { createAsyncActionCreator } from '../common/redux-helpers';
import * as photoService from '../common/photoBrowserService';

export const keys = {
    GET_TOP_PHOTOS: 'GET_TOP_PHOTOS',
    GET_PHOTO_DETAILS: 'GET_PHOTO_DETAILS'
};

export const getTopPhotos = page => createAsyncActionCreator(
    keys.GET_TOP_PHOTOS,
    photoService.getTopPhotos,
    {page}
);