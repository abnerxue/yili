function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function request(url, params, type, successCallback) {
  var realUrl = Constant.BASE_URL + url;
  $.ajax({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'access-control-allow-credentials': 'true' // "userid":'LBY',
      // 'pwd':'1'

    },
    url: realUrl,
    data: params,
    contentType: 'text/plain',
    type: type,
    success: function success(Response) {
      console.log(Response);
      console.log(_typeof(Response)); //  console.log(Response.replaceAll("\r|\n", ""))

      var res = JSON.parse(Response); // console.log(res)

      if (res.root.responsedata.RET_CODE === 0) {
        successCallback(res.root.responsedata.data);
      }
    },
    error: function error(err) {
      console.log(err);
    }
  });
}

function chunk(arr, size) {
  var arr2 = [];

  for (var i = 0; i < arr.length; i = i + size) {
    arr2.push(arr.slice(i, i + size));
  }

  return arr2;
}
