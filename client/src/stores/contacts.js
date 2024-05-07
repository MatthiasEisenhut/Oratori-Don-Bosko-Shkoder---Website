import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useContactStore = defineStore('contacts', () => {
  const data = ref(null);
  async function fetchContacts() {
    try {
      const contacts = await axios.get('http://localhost:3000/contacts');
      this.data = contacts;
    } catch (err) {
      console.log(err);
    }
  }
  return { data, fetchContacts };
});
