import { combineReducers } from 'redux';
import { createAsyncReducer } from '../common/redux-helpers';
import { keys as photoGalleryActionKeys } from '../actions/photoBrowserActions';


const photoGallerySuccessReducer = (state, action) => {
    const existingPhotos = state.response ? state.response.result : [];

    return {
        ...state,
        isLoading: false,
        response: {
            result: [
                ...existingPhotos,
                ...action.response
            ]
        }
    };
}

const  photoGalleryReducer = combineReducers({
    topPhotos: createAsyncReducer(photoGalleryActionKeys.GET_TOP_PHOTOS, {
        [`${photoGalleryActionKeys.GET_TOP_PHOTOS}_SUCCESS`]: photoGallerySuccessReducer
    })
});

export default photoGalleryReducer;