"use strict";

var request = require("request");

var query = [
  "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>",
  "PREFIX sacs: <http://data.e-stat.go.jp/lod/terms/sacs#>",
  "PREFIX dcterms: <http://purl.org/dc/terms/>",
  "select * where {",
  "?sac a sacs:StandardAreaCode ; rdfs:label ?label .",
  "OPTIONAL {?sac dcterms:isPartOf ?parent FILTER REGEX(STR(?parent),'^.*/C[0-9]+-[0-9]+$')}",
  "OPTIONAL {?sac sacs:districtOfSubPrefecture ?gun FILTER (LANG(?gun)='ja')}",
  "FILTER (LANG(?label)='ja')",
  "FILTER REGEX(STR(?sac),'^.*/C[0-9]+-[0-9]+$')",
  "} ORDER BY ?sac"
];

request.get("http://data.e-stat.go.jp/lod/sparql/query", {
  qs: {
    output: "json",
    query: query.join(" ")
  },
  json: true
}, function(error, response, json) {
  var map = {};
  json.results.bindings.forEach(function(binding) {
    map[binding.sac.value] = binding;
  });

  json.results.bindings.forEach(function(binding) {
    var sac = binding.sac.value;
    var key = "";
    var cur = sac;
    while (cur) {
      var obj = map[cur];
      if (!obj.label.value.match(/^.*(特別区部|振興局|支庁|全国)$/))
        key = (obj.gun ? obj.gun.value : "") + obj.label.value + key;
      cur = obj.parent ? obj.parent.value : null;
    }
    if (key.length > 0)
      console.log([
        "<http://geonames.jp/resource/@>".replace("@", key),
        "<http://www.w3.org/2004/02/skos/core#narrowMatch>",
        "<@>".replace("@", sac),
        "."
      ].join(" "));
  });
});
