const axios = require('axios');

const exchangeCodeForTokens = async (code) => {
  const params = new URLSearchParams();
  params.append('code', code);
  params.append('client_id', 'client_id');
  params.append('client_secret', 'secret_key');
  params.append('redirect_uri', 'https://calendarsync.com/oauth2/callback');
  params.append('grant_type', 'authorization_code');

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', params);
    return response.data;
  } catch (error) {
    console.error('Error exchanging code for tokens:', error.message);
    throw error;
  }
};

const main = async () => {
  const authorizationCode = 'generated_code';

  try {
    const tokenResponse = await exchangeCodeForTokens(authorizationCode);
    console.log('Token response:', tokenResponse);
    console.log('Refresh token:', tokenResponse.refresh_token);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

main();
