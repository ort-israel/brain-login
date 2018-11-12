$(document).ready(function () {
    var feed = new google.feeds.Feed('http://www.hayadan.org.il/category/biology/brain/feed/');
    feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
    feed.load(function (result) {
        if (!result.error) {
            var container = document.getElementById("divRss");
            if (container != null) {
                for (var i = 0; i < 2; i++) {
                    var entry = $(result.xmlDocument).find('item')[i];
                    var li = document.createElement("li");
                    var liClass = document.createAttribute("class");
                    liClass.value = "clear-after";
                    li.setAttributeNode(liClass);
                    /* image*/
                    var remoteSrc = $(entry).find("enclosure").attr("url"); // check if src exists. Only if it does, create the img elelemnt
                    if (typeof(remoteSrc) !== 'undefined'){
                        var img = document.createElement("img");
                        var src = document.createAttribute("src");
                        src.value = remoteSrc;
                        img.setAttributeNode(src);
                        li.appendChild(img);
                    }
                    /* linked title*/
                    var a = document.createElement("a");
                    var href = document.createAttribute("href");
                    href.value = $(entry).find("link").html();
                    a.setAttributeNode(href);
                    // open link in new window
                    var target = document.createAttribute("target");
                    target.value = "_blank";
                    a.setAttributeNode(target);
                    a.appendChild(document.createTextNode($(entry).find("title").html()));
                    li.appendChild(a);
                    /* published date*/
                    li.appendChild(document.createElement("br"));
                    // format date
                    var postDate = new Date($(entry).find('pubDate').html());
                    li.appendChild(document.createTextNode('(' + postDate.getDate() + "." + (postDate.getMonth() + 1) + "." + postDate.getFullYear() + ')'));
                    container.appendChild(li);
                }
            }
        }
    });
})
;

