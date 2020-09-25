"use strict";

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var mywelfare = function () {
  var YEAR = new Date();
  var year = YEAR.getFullYear();

  function init() {
    // 真实接口数据
    var h = $(window).height(),
        w = $(window).width(); // let temp=h-70

    $('.container').css('height', h + 'px');
    $('.container').css('width', w + 'px');
    console.log($('.container').height());
    $(window).resize(function () {
      console.log(3);
      console.log($(window).height()); // let temp=h-70

      var h = $(window).height(),
          w = $(window).width();

      if (h < 1020) {
        $('.container').css('height', '1010px');
        console.log($('.container').height());
      } else {
        $('.container').css('height', h + 'px');
        $('.container').css('width', w + 'px');
        console.log($('.container').height());
      }
    });
    var id = getQuery('EMPLID');
    request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfSum', {
      EMPLID: id
    }, 'GET', function (data) {
      var overiewContentElement = $('.content');
      var content = '';

      var _data = _slicedToArray(data, 1),
          realData = _data[0];

      content += "\n          <div>\n              <span class=\"lable\">".concat(realData.GC_SUM_YL_E_SHOPV.TEXT, "</span><span>").concat(realData.GC_SUM_YL_E_SHOPV.VALUE, "</span>\n          </div>\n          <div class='content-item'>\n              <span class=\"lable\">").concat(realData.GC_SUM_YL_GOODS.TEXT, "</span><span>").concat(realData.GC_SUM_YL_GOODS.VALUE, "</span>\n          </div>\n          <div>\n              <span class=\"lable\">").concat(realData.GC_SUM_E_POITS.TEXT, "</span><span>").concat(realData.GC_SUM_E_POITS.VALUE, "</span>\n          </div>\n          <div class='content-item'>\n            <span class=\"lable\">").concat(realData.GC_SUM_GOODS.TEXT, "</span><span>").concat(realData.GC_SUM_GOODS.VALUE, "</span>\n        </div>\n        <div>\n          <span class=\"lable\">").concat(realData.GC_SUM_AMT.TEXT, "</span><span>").concat(realData.GC_SUM_AMT.VALUE, "</span>\n        </div>\n     ");
      overiewContentElement.html(content);
      console.log(realData);
    }); // }
    // )
    // 真实接口数据

    var id_ = getQuery('EMPLID');
    console.log(id_, year, 'year');
    $('.year').append(year);
    request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail', {
      EMPLID: id,
      GC_YEAR: year
    }, 'GET', function(data){
      var detailContent = $('.detail-content');
      var detailDataElement = '';

      var _mywelfareDataDetailD = data,
          _mywelfareDataDetailD2 = _slicedToArray(_mywelfareDataDetailD, 1),
          realDetailData = _mywelfareDataDetailD2[0];

      realDetailData.GC_MY_EYWF_IF.forEach(function (d) {
        console.log(d, 'dddddd');
        detailDataElement += "<div class=\"detail-item\">\n          <div class=\"left-img\">\n          <img src=".concat(d.GC_COST_PICTUE.VALUE, "  class=\"detail-img\" />\n          <div class=\"welfare-name\">").concat(d.GC_COST_NAME.VALUE, "</div>\n          </div>\n          <div class=\"right-content\">\n        ");
        d.GC_MY_EYWF_DETAIL.forEach(function (c) {
          detailDataElement += "\n            <p><span class=\"lable\">".concat(c.GC_ENTITY_CASH_DESC.VALUE, "</span><span>").concat(c.GC_COST_ENTY_NUM.VALUE, "</span></p>\n         ");
        });
        detailDataElement += '</div></div>';
      });
      detailContent.html(detailDataElement);
      addEvent();
    });
    $('.home').click(function () {
      var host = window.location.host,
          port = window.location.port;
      window.location.href = 'http://' + host + '/psc/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit';
    });
  }

  function addEvent() {
    var yearIcon = $('.year-icon');
    yearIcon.click(function () {
      $('.all-year').toggle();
    });
    $('.year-item').click(function (e) {
      var selectYear = Number(e.target.innerText);
      year = selectYear;
      $('.year').html(year);
      $('.all-year').toggle();
      getDetail();
    });
  }

  function getQuery(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
      return decodeURI(r[2]);
    }

    return null;
  }

  function getDetail() {
    console.log(year);
    var id = getQuery('EMPLID');
    request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail', {
      EMPLID: id,
      GC_YEAR: year
    }, 'GET', function (data) {
      var detailContent = $('.detail-content');
      var detailDataElement = '';

      var _data2 = _slicedToArray(data, 1),
          realDetailData = _data2[0];

      realDetailData.GC_MY_EYWF_IF.forEach(function (d) {
        console.log(d, 'dddddd');
        detailDataElement += "<div class=\"detail-item\">\n              <div class=\"left-img\">\n              <img src=".concat(d.GC_COST_PICTUE.VALUE, "  class=\"detail-img\" />\n              <div class=\"welfare-name\">").concat(d.GC_COST_NAME.VALUE, "</div>\n              </div>\n              <div class=\"right-content\">\n          ");
        d.GC_MY_EYWF_DETAIL.forEach(function (c) {
          detailDataElement += "\n              <p><span class=\"lable\">".concat(c.GC_ENTITY_CASH_DESC.VALUE, "</span><span>").concat(c.GC_COST_ENTY_NUM.VALUE, "</span></p>\n             ");
        });
        detailDataElement += '</div></div>';
      });
      detailContent.html(detailDataElement);
    });
  }

  return {
    init: init
  };
}();

mywelfare.init();