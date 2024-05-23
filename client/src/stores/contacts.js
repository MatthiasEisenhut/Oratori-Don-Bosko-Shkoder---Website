import { defineStore } from 'pinia';
import axios from 'axios';

export const useContactStore = defineStore('contacts', {
  state: () => {
    return {
      contacts: [],
    };
  },
  actions: {
    async fetchContacts() {
      try {
        const { data } = await axios.get('http://localhost:3000/contacts');
        this.contacts = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
