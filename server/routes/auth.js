const querystring = require('querystring');

module.exports = {
  path: '/auth',
  method: 'GET',
  handler: (request, reply) => {

    const remoteUrl = 'https://www.facebook.com/v2.8/dialog/oauth?';
    const params = {
      client_id: process.env.FB_APP_ID,
      redirect_uri: process.env.BASE_URL + '/hello',
    };

    return reply.redirect(remoteUrl + querystring.stringify(params));
  },
};
