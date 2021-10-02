import axios from "axios";

export const apiPosts = Object.freeze({
  getAll: async (_limit = 10, _page = 1) =>
    await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit,
        _page,
      }
    }),

  getById: async (id) => await axios.get('https://jsonplaceholder.typicode.com/posts/' + id),
  getComments: async (id) => await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
})
