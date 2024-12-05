const axios = require('axios');

// Fungsi untuk memanggil API
const callApiAt1AM = async () => {
  try {
    const [response1, response2] = await Promise.all([
      axios.get('http://10.0.0.5:3000/api/allsn/'),
      axios.get('http://10.0.0.5:3000/api/alljoActive'),
      // axios.get('http://10.0.0.5:3000/api/alljobSelesaiKunjungan'),
      axios.get('http://10.0.0.5:3000/api/reportpm')
    ]);
    console.log('Response from allsn:', response1.data);
    console.log('Response from alljoActive:', response2.data);

  } catch (error) {
    console.error('Error calling API:', error);
  }
};

module.exports = callApiAt1AM; // Ekspor fungsi untuk digunakan di file lain