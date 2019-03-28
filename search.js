function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'search_index.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

var documents = loadJSON(function (response) {
    return response;
});

var idx = lunr(function () {
  this.ref('name')
  this.field('text')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})

idx.search("Index")
