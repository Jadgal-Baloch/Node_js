// frist point it is nacessary to expot



 function add(a , b) {
    return a + b
};
 function sub(a , b) {
     return a - b
 };

// frist way to export it is single export

module.exports = {
addfn:add,
 subfn:sub,

 };


// 2nd way to export  it is multiple export

exports.add=(a , b) => a + b;
exports.sub=(a ,b) => a-b;

