    var myName = 'kanik' ;

    exports.handler = async function pre(event){
    return {
           statusCode : 200 ,
           body : JSON.stringify(myName) 
         };
   }