var Hapi = require( 'hapi' );
var Path = require( 'path' );

var server = new Hapi.Server({
  connections : {
    routes : {
      files : {
        relativeTo : Path.join( __dirname, 'public' )
      }
    }
  }
});

server.connection({
  port : 3000 
});

// Routes
server.route({
  method : 'GET',
  path : '/hapi.png',
  handler : function( request, reply ) {
    reply.file( 'hapi.png' );
  }
});

server.start( function() {
  console.log( 'Running at: ', server.info.uri );
});
