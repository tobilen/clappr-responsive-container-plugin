 Clappr Responsive Container Plugin
A plugin for clappr which will resize the container to never be larger than the current viewport width.

# Usage
Add both Clappr and this plugin scripts to your HTML:

```html
<head>
  <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/clappr.thumbnails-plugin/latest/clappr-responsive-container-plugin.js"></script>
</head>
```

You can also find the project on npm: https://www.npmjs.com/package/clappr-responsive-container-plugin

Then just add `ResponsiveContainer` into the list of plugins of your player instance as shown below.

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.mp4",
  plugins: {
    container: [ResponsiveContainer]
  }
});
```


# Demo
To run the demo start a web server with the root directory being the root of this repo, and then browse to the "index.html" file in the "demo" folder.

# Development
Install dependencies:

`npm install`

Build:

`npm run build`

Minified version:

`npm run release`

# Thanks
This repository was based off of tjenkinson's thumbnails plugin: https://github.com/tjenkinson/clappr-thumbnails-plugin
