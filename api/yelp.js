var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token: process.env.access_token_key,
  token_secret: process.env.access_token_secret
});

// module.exports = {
//   search: function(searchOptions) {
//     return new Promise(function(resolve, reject) {
//       var params = { s: searchOptions };
//         yelp.get('results/businesses', params, function(error, businesses) {
//           if(!error) {
//             var businesses = payload.businesses;
//             var formattedBusinesses = businesses.map(function(business) {
//               return {
//                 name: business.name,
//                 categories: business.categories,
//                 rating: business.rating,
//                 phone: business.phone
//             };
//           });
//           resolve(formattedBusinesses);
//         }
//       });
// });
// }
// };

module.exports = {
  search: function(searchOptions) {

  var promise = yelp.search(searchOptions);

  return promise;
  }
};
