//http://www.jqueryscript.net/social-media/jQuery-Plugin-To-Display-RSS-Feeds-On-Your-Webpage-YRSS.html
$('.rss-feed').yrss('https://www.hayadan.org.il/category/biology/brain/feed/', {
    ssl: true,
    limit: 2,
    dateformat: 'spellmonth',
    image: true,
    snippetlimit: 100
});
/* Lea 2018/11: made some changes to yrss.js. Beware when getting new version */