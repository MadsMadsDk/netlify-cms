export const ADD_MEDIA = 'ADD_MEDIA';
export const REMOVE_MEDIA = 'REMOVE_MEDIA';

export function addMedia(mediaProxy) {
  return { type: ADD_MEDIA, payload: mediaProxy };
}

export function removeMedia(path) {
  return { type: REMOVE_MEDIA, payload: path };
}
