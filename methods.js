var a = ["First", "Second", "Third", "Fourth"];
var obj = {
    first: "Hello",
    second: a.forEach(function(item, i, a) {
        alert(i + ": " + item + " (Array:" + a + ")");
    })
}
obj.second();