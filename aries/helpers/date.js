// V1 putem scrie asa daca vrem sa ii pastram numele
// module.exports = {
//   formattedDate
// }

// V2 daca vrem sa ii schimbam numele
// module.exports = {
//   formattedDateFunction = formattedDate;
// }

module.exports.formattedDate = formattedDate;

//asta se poate folosi, se face hositing
function formattedDate(date) {
  const now = new Date(); //ora serverului nu ora clientului
  const formattedDate = `${now.getMonth() + 1} ${now.getFullYear()}`;

  return formattedDate;
}

//fiind declarat asa nu se poate folosi altundeva
module.exports.test = function test() {
  console.log('test');
};
