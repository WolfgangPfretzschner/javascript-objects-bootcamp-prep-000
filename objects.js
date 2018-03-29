var playlist = {artistName:'',songTitle:''}

function updatPlaylist(obj,key,value){
  obj[key]=value;
  return obj;
}
function removeFromPlaylist(obj, key){
  delete obj.key
  return obj
}