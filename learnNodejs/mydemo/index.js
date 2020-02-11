let template = require('art-template');
let html = template(__dirname + '/result.art', {
    chinese: "120",
    math: "110",
    english: "138",
    summary: "289"
});
console.log(html);