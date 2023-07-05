function getArtistAlbums(artist, params){
  var artistAlbums = {
    'Aphex Twin':['Syro', 'Drukqs'],
    'Metallica':['Kill \'Em All', 'Reload']
  };
  return new Promise(function (fulfill, reject){
    fulfill(artistAlbums[artist]);
  });

}
function getAlbumsTotal(list, params){
  var listCount = 0;
  for(var i = 0; i<list.length; i++){
    getArtistAlbums(list[i], params)
      .then(function(data) {
        listCount++;
        for(var alb = 0; alb<data.length; alb++){
        //for(var alb = 0; alb<data.items.length; alb++){
          //albums.push(data.body.items[alb].id);
          albums.push(data[alb]);
        }
        // print out album list at the end of our loop
        if(listCount == list.length){
          console.log(albums);
        }

      }, function(err) {
        console.error(err);
      });
  }
  // prints out too early because of async nature of node.js
  //console.log(albums);
}
var listOfArtists = ['Aphex Twin', 'Metallica'];
var albums = [];

getAlbumsTotal(listOfArtists, 'dummy params');