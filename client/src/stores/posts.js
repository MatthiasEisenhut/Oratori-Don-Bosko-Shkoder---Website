import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const usePostStore = defineStore('posts', () => {
  const data = ref(null);
  async function fetchPosts() {
    try {
      const posts = await axios.get('http://localhost:3000/posts');
      this.data = posts;
    } catch (err) {
      console.log(err);
    }
  }
  return { data, fetchPosts };
});
