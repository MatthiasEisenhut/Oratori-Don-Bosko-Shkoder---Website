import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAnimatorStore = defineStore('animators', () => {
  const data = ref(null);
  async function fetchAnimators() {
    try {
      const animators = await axios.get('http://localhost:3000/animators');
      this.data = animators;
    } catch (err) {
      console.log(err);
    }
  }
  return { data, fetchAnimators };
});
