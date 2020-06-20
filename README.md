# heroku-lavalink
Easily deploy a lavalink server on heroku.
This is a very elementary and barebones approach, but reliable nonetheless.
This branch will automatically download the Lavalink.jar, but it may not be latest.

Current Lavalink release: **v3.3.1**

##### Note:
You can enable automatic deploys to update the app when commits are added to the auto branch (see step 5 to 9 in Github Deploy).
Automatic deploys will restart your server so enable them at your own risk, the author is not responsible for any damages that may occur as results of automatic deploys!

### One Click Deploy:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/KareemRS/heroku-lavalink/tree/auto)

Buildpacks should be added automatically, you may modify the `PASS` variable during setup to change the password.

### Github Deploy:
1. Create a fork of this repo
2. Navigate to your heroku project @dashboard.heroku.com
3. Navigate to your project *"Settings"*, click *"Reaveal Config Vars"*, and set a new var called *PASS* to what you want your lavalink password to be.
4. In the same menu, set a new var called JAVA_TOOL_OPTIONS and set it to "-XX:+UseContainerSupport -Xmx500m -Xss256k -XX:CICompilerCount=2 -Dfile.encoding=UTF-8" without the "" , this will set ram to max on a free dyno
5. Navigate to the *"Deploy"* tab
6. Find/Click the *"Connect to GitHub"* section and login if needed
7. For the repo name, type *"heroku-lavalink"* and Click *"Search"*
8. Click *"Connect"* 
9. Scroll down and find *"Manual Deploy"*, then switch the branch to auto and *"Deploy Branch"*.

### Heroku CLI Deploy:
1. Download files (Clone or download->Download ZIP).
2. Extract files into an empty directory.
3. Follow https://devcenter.heroku.com/articles/git.
If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.
4. Go to your project settings->config vars on heroku and set a new var called PASS to what you want your lavalink password to be.
5. In the same menu, set a new var called JAVA_TOOL_OPTIONS and set it to "-XX:+UseContainerSupport -Xmx500m -Xss256k -XX:CICompilerCount=2 -Dfile.encoding=UTF-8" without the "" , this will set ram to max on a free dyno

**Notes:** 
1. After changing PASS you must redeploy or click the More menu and *restart all dynos*.
2. If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.

Please understand your lavalink server ***will run out of memory on a free dyno***. I would recommend upgrading or switching to a lighter alternative. If you do upgrade, you must change -Xmx in the JAVA_TOOL_OPTIONS to your new amount of ram.
