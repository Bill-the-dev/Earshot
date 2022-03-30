Since today is CSS day, I thought I would share a few things that I found really helpful.  Obviously still learning, so take this with a grain of salt (or a few).  

### When to use Grid vs. Flexbox
- Grid for the overall layout
- Flexbox for individual components  

### Grid
- Parent container sets the `grid-template`
  - Use `fr` units to break the page into 'fractioned' pieces.  
  - `grid-template-columns: 1fr 1fr 1fr;` would split the container into (3) columns of equal width.
  - `grid-template-columns: 1fr 3fr;` would split the container into (2) columns.  The first column `1fr` width would be 25% of the total width (1 out of the total 4 `fr`s.  The second column `3fr` would be 75% total width (3 out of the total 4 `fr`s.
  - Same goes for `grid-template-rows`
- To display the grid layout using your Chrome Terminal, click the circular 'grid' button that displays next to the HTML element that contains grid.
- This [Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/) shows a bunch more outside this. 

### Flexbox
- Learning what properties effect the parent (flex container) versus the child (flex item) is so helpful.
- This [Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) lays it out side-by-side extremely well.
- This [Flexbox Product Page](https://css-tricks.com/designing-a-product-page-layout-with-flexbox/) finally made it all click for me.  Highly recommend it!



Since today is CSS day, I thought I would share a few things that I found really helpful. I'm still learning, so take this with a grain of salt.   

When to use Grid vs. Flexbox:
- Grid for the overall layout
- Flexbox for individual components  

Grid:
- Parent container sets the `grid-template`
- Use `grid-template-columns` and `grid-template-rows` with `fr` units to break the page into 'fractioned' pieces.  
- - This [Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/) shows a bunch more outside this.

Flexbox: 
- Learning what properties effect the parent (flex container) versus the child (flex item) is so helpful.
- This [Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) lays it out side-by-side extremely well.
- This [Flexbox Product Page](https://css-tricks.com/designing-a-product-page-layout-with-flexbox/) finally made it all click for me.  Highly recommend it!

If you all have any good tips or resources, please share.





**Unshelvd**

'I dunno, what do you want to do?'

Friends are no fun with open-ended questions.  Unshelvd is here to fix that.

Unshelvd is a social board gaming app that does away with uncertainty at your next meetup among friends.  Just let the app know how many people you have, what your interests include (or exclude), and Unshelvd will give you a list of the games to pull off the (virtual) shelf. 

It will give you suggestions for Connected (online) or Unplugged (in-person) games to play based on what's already on your shelf... or what you have in common with another user!  


### Features

- The Shelf
  - Games you can play displayed and filtered
    - Virtual ('Connected') or in-person ('Unplugged') categories

- Contextual Information
  - 'Connected' games might include:
    - Video games you and another user both own
    - Links to free online games based on category (strategy, casual, etc)
  - 'Unplugged' games might include:
    - Personal shelf filtered by # players and category
    - Link to rules and where to buy

Are you and your friend stranded at the airport with only a deck of cards? 
- How about a friendly game of *Go Fish*, or maybe something new

How about a zoom call with your family?
- Let's load up *Gartic Phone* or *Heads Up*

Is it game night and you forget what you even have to offer?
- I bet you forgot you even own *Munchkin*

Unshelvd will help you stop wasting time and help you get to the real reason to see your friends - to kick their butts in *Monikers*.
