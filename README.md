# heroku-lavalink
Easily deploy a lavalink server on heroku.
This is a very elementary and barebones approach, but reliable nonetheless.
This branch will automatically download the Lavalink.jar, but it may not be latest.

1. Download files (Clone or download->Download ZIP).
2. Extract files info an empty directory.
3. Follow https://devcenter.heroku.com/articles/git.
If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.
4. Go to your project settings->config vars on heroku and set a new var called PASS to whatever you want your lavalink password to be.
After changing PASS you must click the More menu and restart all dynos.

