function xml2js(xml) {
  function fun() {
    var obj = {};
    for (; ;) {
      var start = xml.match(/^<\w+>/);
      var content = xml.match(/^<\/\w+>/);
      var end = xml.match(/^[^<|^>|^/]+/);
      if (start != null && start.length > 0) {
        xml = xml.substring(start[0].length);
        obj[start[0]] = fun();
      } else if (content != null && content.length > 0) {
        xml = xml.substring(content[0].length);
        break;
      } else if (end != null && end.length > 0) {
        obj = end[0];
        xml = xml.substring(obj.length);
      } else {
        console.log("end!");
        break;
      }
    }
    return obj;
  }
  return fun();
}
