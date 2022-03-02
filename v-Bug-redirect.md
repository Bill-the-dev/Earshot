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







VX9zY6RdooS^tw