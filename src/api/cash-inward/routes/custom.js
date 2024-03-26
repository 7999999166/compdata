 module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/cash-inward/pretransaction',
        handler: 'custom.pre', 
      },
      {
        method: 'GET',
        path: '/cash-inward/posttransaction',
        handler: 'custom.post', 
      },
    ],
  };
