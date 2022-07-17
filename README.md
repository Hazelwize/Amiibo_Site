# Amiibo Viewer
This is a site used for viewing Amiibo for your collection. You can sort by name or by series.

**Link to project:** https://hazelwize.github.io/Amiibo_Site/
![amiibo-viewer](https://user-images.githubusercontent.com/97214996/179379403-d4a83ca8-9429-4281-9266-b9b35c81dfd2.png)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This site uses the Amiibo API to fetch the data that populates the DOM. I tried to go with an authentic looking design for a Nintendo product when making this site, and I think that it turned out nicely. The ability to sort by series or by name is a mixture of filtering and using the proper query parameters. Each of the items in the response object are put through a function that takes the proper information and creates a card that is appended to the DOM.

## Optimizations

I would like to add authentication to this site as well as collections. I collect amiibo, and I would like for it to keep track of my collection by letting me know which one's I need and showing me the ones that I have. I was also planning on adding another API that pulls the recently sold price on ebay to find out the rough value of your collection.

## Lessons Learned:

This was a great opportunity to learn about creating elements in a format that could be rendered nicely to the DOM and having a CSS class apply styles in a modular fashion. I also found that making the toggle between "name" and "series" a fun way to learn about how labels can be used in unexpected ways.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Murder Ink E-Sports Team:** https://github.com/Hazelwize/murderInk

**PlayerToo Social Platform:** https://github.com/Hazelwize/player-two

**Stitch-N-Loop:** https://github.com/Hazelwize/stitch-and-loop-api



