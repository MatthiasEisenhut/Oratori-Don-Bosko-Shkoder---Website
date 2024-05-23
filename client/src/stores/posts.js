import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostStore = defineStore('posts', {
  state: () => {
    return {
      posts: [],
    };
  },
  actions: {
    async fetchPosts() {
      try {
        const { data } = await axios.get('http://localhost:3000/posts');
        this.posts = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
