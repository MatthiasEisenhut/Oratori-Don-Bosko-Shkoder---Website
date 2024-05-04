import { ref } from 'vue';
import { defineStore } from 'pinia';
import posts from '../../public/data/posts.js';

export const usePostStore = defineStore('posts', () => {
  const data = ref(posts);
  function fetchPosts() {
    try {
      this.data = posts;
    } catch (err) {
      console.log(err);
    }
  }
  return { data, fetchPosts };
});
