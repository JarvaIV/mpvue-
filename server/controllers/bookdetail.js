const { mysql } = require('../qcloud');
module.exports = async (ctx) => {
    console.log(111111111111111111, ctx)
    const { id } = ctx.request.query;
  
    await mysql("books")
        .where("id", id)
        .increment('count', 1);
    /* ctx.state.data = {
       name:111111
    }  */
}