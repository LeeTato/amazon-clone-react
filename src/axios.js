import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-react-a34f4.cloudfunctions.net/api',
});

export default instance;

//(http://localhost:5001/clone-react-a34f4/us-central1/api).