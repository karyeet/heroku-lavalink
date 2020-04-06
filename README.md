# heroku-lavalink
Easily deploy a lavalink server on heroku.
This is a very elementary and barebones approach, but reliable nonetheless.

1. Download files (Clone or download->Download ZIP) & latest lavalink jar from https://github.com/Frederikam/Lavalink/releases
2. Extract files info an empty directory and move the Lavalink.jar you just downloaded into the same directory.
3. Follow https://devcenter.heroku.com/articles/git.
If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.
4. Go to your project settings->config vars on heroku and set a new var called PASS to whatever you want your lavalink password to be.
After changing PASS you must click the More menu and restart all dynos.

