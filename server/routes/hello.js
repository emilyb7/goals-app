// module.exports = [
//
//       handler: (request, reply) => {
//         if (!request.auth.isAuthenticated) {
//           return reply('Auth failed due to: ' + request.auth.error.message).code(401);
//         } else {
//           request.cookieAuth.set({user: request.auth.credentials.profile.id, });
//           reply.redirect('/');
//         }
//       },
//     },
//   },
// ];