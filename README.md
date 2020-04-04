# heroku-lavalink
Easily deploy lavalink on heroku.
This is a very elementary approach.

1. Download files (Clone or download->Download ZIP) & latest lavalink jar from https://github.com/Frederikam/Lavalink/releases
2. Extract files info an empty directory and drag the Lavalink.jar you just downloaded into the same directory.
3. Follow https://devcenter.heroku.com/articles/git
If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.
4. Go to your project settings on heroku and set PASS to whatever you want the lavalink password to be.
After changing PASS you must click the More menu and restart all dynos.

