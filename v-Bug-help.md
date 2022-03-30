`song.jsx` 
  - hover li causes type error.  
  - without settimeout full page crash

`media_reducer.js`
  - fetch_current_time fetches much more often than necessary

`media-footer.js`
  - paused for too long... won't start again?

`seed-data`
  - duplicated in AWS?

`library`
  - tiles should resize based on screen width


[UNRESOLVED]
Redirect to home is not working on successful login.

Walkthrough numbers correlate to screenshots:
1. When not logged in, `/home` loads just fine.  Home shows only component skeleton, no logic or specific components are rendered in this image.
2. Splash `/` renders and successfully logs out a user.  (Previous `entities.users.id` still shows, but session is null and is not an issue logging back in.)
3. Successful login results in correct props and state.  See image for debugger inside the util render and redirect.
4. Redirect 'succeeds' to route to `/home`, but page is blank.  No errors in terminal or otherwise.
5. Refresh of `/home` shows `Uncaught Error: You must pass a component to the function returned by connect. Instead received undefined` and calling `window.getState()` which worked previously results in `Uncaught TypeError: window.getState is not a function at <anonymous>:1:8`. 
6. Screenshot of route Util and home container.
7. Screenshot of app.jsx and home.jsx   

---


[UNRESOLVED] 

Good morning, I'm having trouble with some jbuilder syntax.

Goal: When I fetch a song, it can also fetch it's associated album's attached image from s3.  

What works: I can extract `@song, :id, :title, :album_id` and it's attached `songUrl`.
What is making me go grey(er): I can't get the `album_art` url through the `song.album` association. 

Model hierarchy: `song` > *belongs_to* > `album` > *belongs_to* > `artist` > *belongs_to* > `genre`

Thanks in advance for your help!



