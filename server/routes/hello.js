const querystring = require('querystring');
const Request = require('request');
const mockData = require('./../mock.js');

module.exports = {
  path: '/hello',
  method: 'GET',
  config: {
    auth: false,
    handler: (request, reply) => {

      const remoteUrl = 'https://graph.facebook.com/v2.8/oauth/access_token?';
      const requestParams = request.url.path.split('?')[1];
      const code = querystring.parse(requestParams).code;
      const params = {
        client_id: process.env.FB_APP_ID,
        redirect_uri: process.env.BASE_URL + '/hello',
        client_secret: process.env.FB_CLIENT_SECRET,
        code: code,
      };

      Request(remoteUrl + querystring.stringify(params), (err, response, body) => {
        if (err) { throw new Error(err); }

        const accessToken = JSON.parse(body).access_token;
        if (!accessToken) {
          reply('problem verifying user with Facebook');
        }

        const graphUrl = 'https://graph.facebook.com/me?access_token=' + accessToken;

        Request(graphUrl, (graphErr, _, graphBody) => {
          if (graphErr) throw new Error (graphErr);

          const userData = JSON.parse(graphBody);
          const fb_id = userData.id;
          console.log(fb_id);
          // check if user exists in DB
          const user = mockData.users.find(user => user.fb_id === fb_id);

          if (user) {
            const user_id = user.id;
            request.cookieAuth.set({ id: user_id, });
            reply.redirect('/');
          } else {
            reply('user not found');
            // create a new user in DB,
            // generate new ID
            // set cookie
            // redirect
          }
        });
      });
    },
  },
};
