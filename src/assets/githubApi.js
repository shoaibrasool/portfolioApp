// githubApi.js

import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

const fetchRepositories = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

export { fetchRepositories };
