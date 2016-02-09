var Utils = Utils || {};

Utils.templateParse = function(str, data) {
  return str.replace(/\{\{(.*?)\}\}/g, function(match, token) {
    return data[token];
  });
};