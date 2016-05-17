// Get a universally unique identifier
let count = 0;
module.exports =  function uuid(id) {
  return (id)
    ? 'react-tabs-' + (count++) + '-' + id
    : 'react-tabs-' + (count++);
};
uuid.setCount = function(c){
  if(c !== undefined){
    count = c;
  }
}
