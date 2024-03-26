    const { createCoreController } = require('@strapi/strapi').factories;

     module.exports = createCoreController('api::cash-inward.cash-inward', ({ strapi }) =>  ({

     async pre(ctx) {
  
     var myName = 'kanik' ;

     return {
           statusCode : 200 ,
           body : JSON.stringify(myName) 
         };


 
      },

      async post(ctx){

      ctx.body = "i m not okey" ;

      }
      
      }));