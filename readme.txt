/**************** Responsive Layout  **********************/
The CSS is taken from here: http://eiskis.net/layers/

/**************** Slider  **********************/
The Slider is taken from here:  http://designmodo.com/responsive-slider/. Demo: http://designmodo.com/demo/responsiveslider/.
Other options were: http://wowslider.com/simple-jquery-slider-gentle-linear-demo.html, http://flexslider.woothemes.com/video-wistia.html

/**************** RSS reader  **********************/
The RSS is gotten using the Google API (https://developers.google.com/feed/v1/devguide#resultXml), and asking for the XML format, so all fields are returned - this is in order to show image,
 (Got the idea to do it from an SO answer here: http://stackoverflow.com/questions/10943544/how-to-parse-a-rss-feed-using-javascript).
Tried http://plugins.jquery.com/FeedEk/, but it doesn't show images, because uses google api with json, which retrieves only some of the fields