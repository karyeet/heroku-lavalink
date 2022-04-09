# heroku-lavalink
Easily deploy a [lavalink](https://github.com/freyacodes/Lavalink) server on heroku.
This approach is minimal, but reliable.
This branch will automatically download the latest Lavalink jar file.

* ### *heroku-lavalink will now download the latest Lavalink.jar automatically & directly from GitHub*
*To update your Lavalink.jar, restart all dynos.*

* ### *heroku-lavalink can now visit itself every 20 minutes (instead of uptimerobot)*
*set APP_NAME in config vars to your heroku application's name to enable, you only need this for the free tier*

## One Click Deploy:
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/karyeet/hlvlink-decoy/tree/auto) <-- Click me!

Buildpacks should be added automatically, you may modify the `PASS` variable during setup to change the password.

## Github Deploy:
1. Create a fork of this repo
2. Navigate to your heroku project @dashboard.heroku.com
3. Navigate to your project *"Settings"*, click *"Reaveal Config Vars"*, and create a new var called *PASS* and set it to what you want your lavalink password to be.
4. In the same menu, create a new var called JAVA_TOOL_OPTIONS and set it to `-Xmx400m -Xms400m -XX:MaxPermSize=48m`, these are settings I recommend for a free dyno.
5. In the same menu, create a var called APP_NAME and set it to your heroku applications name.
6. Navigate to the *"Deploy"* tab
7. Find/Click the *"Connect to GitHub"* section and login if needed
8. For the repo name, type *"heroku-lavalink"* and Click *"Search"*
9. Click *"Connect"* 
10. Scroll down and find *"Manual Deploy"*, then switch the branch to auto and *"Deploy Branch"*.

## Heroku CLI Deploy:
1. Download files (Clone or download->Download ZIP).
2. Extract files into an empty directory.
3. Follow https://devcenter.heroku.com/articles/git.
If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.
4. Go to your project settings->config vars on heroku and set a new var called PASS to what you want your lavalink password to be.
5. In the same menu, set a new var called JAVA_TOOL_OPTIONS and set it to `-Xmx400m -Xms400m -XX:MaxPermSize=48m`, these are settings I recommend for a free dyno.
6. In the same menu, create a var called APP_NAME and set it to your heroku applications name.
##
**Notes:** 
1. After changing PASS you must redeploy or click the More menu and *restart all dynos*.
2. If heroku is unable to automatically configure buildpacks, go to your projects settings on the heroku website and add java and nodejs.

Please understand your lavalink server ***will most likely run out of memory on a free dyno***. I would recommend upgrading or switching to a lighter alternative. If you do upgrade, you must change -Xmx in the JAVA_TOOL_OPTIONS to your new amount of ram.

Need a featureful, maintained, light music bot without using lavalink?
Checkout [Manderine](https://github.com/karyeet/Mandarine)!
