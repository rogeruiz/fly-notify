const path = require( "path" )
const assign = require( "object-assign" )
const notifier = require( "node-notifier" )

module.exports = function () {

  this.notify = function ( options ) {

    var defaults = {

      title: 'Fly',
      message: 'Task completed.',
      icon: path.join( __dirname, 'fly-logo.png' ),

    }

    if ( options.icon ) {

      options.icon = devicon( options.icon )

    }

    notifier.notify( assign( defaults, options ),

    function ( error, response ) {

      if ( error ) this.error( error )

      if ( response ) this.debug( response )

    }.bind( this ) )

    return this

  }

}

function devicon ( s ) {

  const ICONS_PATH = "node_modules/fly-notify/node_modules/devicons/!PNG/"
  let icon = path.join( process.cwd(), ICONS_PATH, s.slice( 4 ) + ".png" )

  return s.slice( 0, 3 ) === "dev" ? icon: s

}
