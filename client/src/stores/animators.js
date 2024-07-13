import { defineStore } from 'pinia';
import axios from 'axios';

export const useAnimatorStore = defineStore('animators', {
  state: () => {
    return {
      animators: [],
    };
  },
  actions: {
    async fetchAnimators() {
      try {
        const { data } = await axios.get('http://localhost:3000/animators');
        this.animators = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
