# derby-sparkline

This simple app shows how to make a derby component out of a reusable chart.  

The reusable chart was ported from this Angular example: http://bl.ocks.org/enjalot/6457608  

You can take advantage of the powerful parts of d3 while making all your data react in real-time with derby/racer!  

![Screenshot](/sparkline.png)

# Usage

```
npm install
```
```
node server
```
now open your browser to http://localhost:3030/

# Interesting areas of the code:

Not much was modified from the standard ```derby new project```

Component:  
[/ui/sparkline/index.js](/ui/sparkline/index.js)  
[/ui/sparkline/index.html](/ui/sparkline/index.html)  
[/ui/sparkline/index.styl](/ui/sparkline/index.styl)  

App code:  
[/lib/app/index.js](/src/app/index.js)  
[/view/app/index.html](/view/app/index.html)  

Styles:  
[/styles/app/index.styl](/styles/app/index.styl)  

