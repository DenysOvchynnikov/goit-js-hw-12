import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios.get('', {
      params: {
        per_page: 15,
        page: page,
        key: '50295834-c918df4fa87d72bde5e1e5104',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
