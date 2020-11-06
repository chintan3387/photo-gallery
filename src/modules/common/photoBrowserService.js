import { UNSPLASH_API_KEY, API_ROOT_URL } from './constants';

const createUnsplashImageUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${API_ROOT_URL}${relativeUrl}?client_id=${UNSPLASH_API_KEY}`;
   
    if (queryParams) {
        Object.keys(queryParams)
          .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
      }
      return baseUrl;
}

export const getTopPhotos = async ({ page }) => {
    const fullUrl = createUnsplashImageUrl('/photos', {
        page,
        per_page: 50
    })

    return fetch(fullUrl);
}

export const getPhotoDetails = async({ photoId }) => {
    const fullUrl = createUnsplashImageUrl(`/photos/${photoId}`);
    return fetch(fullUrl);
}