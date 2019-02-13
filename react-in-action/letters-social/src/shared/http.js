import fetch from 'isomorphic-fetch';

export function fetchPosts(endpoint) {
  return fetch(endpoint);
}
