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

var EmployeeOption = function () {
  var formValue = {}; // 真实接口数据,开启后删除loadElement

  function getData() {
    var h = $(window).height(),
        w = $(window).width(); // let temp=h-70

    $('.container').css('height', h + 'px');
    $('.container').css('width', w + 'px');
    $(window).resize(function () {
      console.log(3);
      console.log($(window).height());
      console.log($('.container').height());
      var h = $(window).height(),
          w = $(window).width();
      console.log(50); // let temp=h-70

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
    request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetChoosetWfData', {
      EMPLID: id
    }, 'GET', function (jsonData) {
      var welfareContainer = $('.welfare-container');
      console.log(welfareContainer);
      var contentElement = '';

      var _jsonData = _slicedToArray(jsonData, 1),
          realData = _jsonData[0];

     if(realData.GC_MY_EYWF_IF.length===0){
      $('.box ').css({'background-image':'../assets/background/no_wel.png', 'background-size': '100% 100%',
      'background-repeat': 'no-repeat'})
    

     }else{
      realData.GC_MY_EYWF_IF.forEach(function (d) {
        contentElement += "\n              <div class='welfare-info'>\n                <div class=\"pic\">\n                  <img src=".concat(d.GC_COST_PICTUE.VALUE, " alt=''/>\n                  <div class=\"desc\">\n                    ").concat(d.GC_COST_NAME.VALUE, "\n                  </div>\n                </div>\n                <div class='right-content'>\n                  <p class=\"row\"><span class=\"lable\">").concat(d.GC_COST_DESCR.VALUE, "</p>\n                  <p class=").concat(d.GC_EYWF_NCHOSE_AMT.VALUE === '0元' ? 'hide' : 'row', "><span class=\"lable\">").concat(d.GC_EYWF_NCHOSE_AMT.VALUE, "\uFF0C</span><span>\u5C06\u4EE5").concat(d.GC_EYWF_NCHOSE_DESCR.VALUE, "\u53D1\u653E</span></p>\n                  <p class=\"row\"><span class=\"lable\">").concat(d.GC_EYWF_CHOSE_AMT.VALUE, "\uFF0C</span><span>\u8BF7\u9009\u62E9\u60A8\u5E0C\u671B\u7684\u9886\u53D6\u65B9\u5F0F</span></p>\n                  </div>\n              </div>\n            ");
        d.GC_MY_EYWF_CHOSE.forEach(function (g) {
          contentElement += "<div class='select-welfare'>\n                <div class='type-item'>\n                <div>\n                  <input\n                    class='select-value' name=".concat('select-value' + d.GC_COST_CODE.VALUE, " type='radio' class='radio-input' id=", "select-value".concat(d.GC_COST_CODE.VALUE, "_").concat(g.GC_EYWF_C_TYPE.VALUE, "_").concat(d.GC_CAL_PRD_ID.VALUE), " value=").concat(d.GC_COST_CODE.VALUE + '_' + g.GC_EYWF_C_TYPE.VALUE + '_' + d.GC_CAL_PRD_ID.VALUE, "></input>\n                  <label for=", "select-value".concat(d.GC_COST_CODE.VALUE, "_").concat(g.GC_EYWF_C_TYPE.VALUE, "_").concat(d.GC_CAL_PRD_ID.VALUE), " value=").concat(d.GC_COST_CODE.VALUE + g.GC_EYWF_C_TYPE.VALUE + d.GC_CAL_PRD_ID.VALUE, "></label>\n                  <label class='type-desc' for=", "select-value".concat(d.GC_COST_CODE.VALUE, "_").concat(g.GC_EYWF_C_TYPE.VALUE, "_").concat(d.GC_CAL_PRD_ID.VALUE), " value=").concat(d.GC_COST_CODE.VALUE + g.GC_EYWF_C_TYPE.VALUE + d.GC_CAL_PRD_ID.VALUE, " class=\"select-value\">").concat(g.GC_EYWF_C_TYPE_DESCR.VALUE, "</label>\n                </div>\n                <div value_>\n                 <span class='value'>").concat(g.GC_EYWF_C_TYPE_AMT.VALUE, "</span>\n                </div>\n                </div>\n                <div class='other-desc'>").concat(g.GC_EYWF_C_TYPE_COMMENT.VALUE, "</div>\n              </div>");
        });
        contentElement += "<div class=\"confirm-btn cursor_\" data-code=".concat(d.GC_COST_CODE.VALUE, " >\u786E\u8BA4</div>");
      });
     }
      welfareContainer.html(contentElement);
      console.log(welfareContainer)
      addEvent();
    });
  }

  function isShowBirthdayImg() {
    var id = getQuery('EMPLID');
    request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetWishPicture', {
      EMPLID: id
    }, 'GET', function (birthdayDatas) {
      var _birthdayDatas = _slicedToArray(birthdayDatas, 1),
          birthday = _birthdayDatas[0];

      if (birthday.GC_WISH_FG.VALUE === 'Y') {
        $('.receive').append("<div class='birthday-img-wrapper'><img src='../assets/employeeOptionalPayment/GC_EYWF_BIRTHDAY_OX.png' class='birthday-img'/>\n             <img src='../assets/employeeOptionalPayment/GC_EYWF_GUAN_BI.png' class='close-icon'></img>\n           </div>");
        $('.content').append("<div class='mask'/>");
      }
    });
  }

  function submit(code, value) {
    var id = getQuery('EMPLID');
    var prdId = value.prdId,
        type = value.type;
        var r=confirm("确认领取福利");
        if (r==true){
          request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_SetChoosetWfData', {
            EMPLID: id,
            GC_COST_CODE: code,
            GC_CAL_PRD_ID: prdId,
            GC_EYWF_C_TYPE: type
          }, 'GET', function (data) {
           
            getData()
          });
        }
        else{
          
        }
}

  function addEvent() {
    $('.select-value').click(function (e) {
      var targetValue = e.target.value;
      var values = targetValue.split('_');

      var _values = _slicedToArray(values, 3),
          code = _values[0],
          type = _values[1],
          prdId = _values[2];

      formValue[code] = {
        type: type,
        prdId: prdId
      };
    });
    $('.confirm-btn').click(function (e) {
      console.log(123);
      var dataset = e.target.dataset;
      submit(dataset.code, formValue[dataset.code]);
    });
    $('.home').click(function () {
      var host = window.location.host,
          port = window.location.port;
      window.location.href = 'http://' + host + '/psc/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit';
    });
    $('.close-icon').click(function () {
      $('.mask').remove();
      $('.birthday-img-wrapper').remove();
    });
  }

  function getQuery(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
      //  return unescape(r[2])   ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。
      return decodeURI(r[2]);
    }

    return null;
  }

  function init() {
    addEvent();
    isShowBirthdayImg();
    getData();
  }

  return {
    init: init
  };
}();

EmployeeOption.init();