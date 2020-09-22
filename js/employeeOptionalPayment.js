const EmployeeOption = (function () {
  let formValue = {}
  let prdId = ''


   

  // 真实接口数据,开启后删除loadElement
  function getData() {
        const id=getQuery('EMPLID')
      request(
        '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetChoosetWfData',
        {
          EMPLID: id
        },
        'GET',
        jsonData => {
          console.log('data', jsonData)
          const welfareContainer = $('.welfare-container')
          let contentElement = ''
          const [realData] = jsonData
          console.log(realData)
          console.log( realData[0])
          // prdId = realData.GC_MY_EYWF_IF.GC_CAL_PRD_ID.VALUE
          realData.GC_MY_EYWF_IF.forEach(d => {
            contentElement += `
              <div class='welfare-info'>
                <div class="pic">
                  <img src=${d.GC_COST_PICTUE.VALUE} alt=''/>
                  <div class="desc">
                    ${d.GC_COST_NAME.VALUE}
                  </div>
                </div>
                <div class='right-content'>
                  <p class="row"><span class="lable">${d.GC_COST_DESCR.VALUE}</p>
                  <p class=${d.GC_EYWF_NCHOSE_AMT.VALUE === '0元'? 'hide' : 'row'}><span class="lable">${
              d.GC_EYWF_NCHOSE_AMT.VALUE
            }，</span><span>将以${d.GC_EYWF_NCHOSE_DESCR.VALUE}发放</span></p>
                  <p class="row"><span class="lable">${
                    d.GC_EYWF_CHOSE_AMT.VALUE
                  }，</span><span>请选择您希望的领取方法</span></p>
                  </div>
              </div>
            `
            d.GC_MY_EYWF_CHOSE.forEach(g => {
              contentElement += `<div class='select-welfare'>
                <div class='type-item'>
                <div>
                  <input
                    class='select-value' name=${
                      'select-value' + d.GC_COST_NAME.VALUE
                    } type='radio' class='radio-input' id=${`select-value${d.GC_COST_NAME.VALUE}_${g.GC_EYWF_C_TYPE.VALUE}`} value=${
                d.GC_COST_NAME.VALUE + '_' + g.GC_EYWF_C_TYPE.VALUE
              }></input>
                  <label for=${`select-value${d.GC_COST_NAME.VALUE}_${g.GC_EYWF_C_TYPE.VALUE}`} value=${
                d.GC_COST_NAME.VALUE + g.GC_EYWF_C_TYPE.VALUE
              }></label>
                  <label class='type-desc' for=${`select-value${d.GC_COST_NAME.VALUE}_${g.GC_EYWF_C_TYPE.VALUE}`} value=${
                d.GC_COST_NAME.VALUE + g.GC_EYWF_C_TYPE.VALUE
              } class="select-value">${g.GC_EYWF_C_TYPE_DESCR.VALUE}</label>
                </div>
                <div>
                 <span class='value'>${g.GC_EYWF_C_TYPE_AMT.VALUE}</span>
                </div>
                </div>
                <div class='other-desc'>${g.GC_EYWF_C_TYPE_COMMENT.VALUE}</div>
              </div>`
            })
            contentElement += `<div class="confirm-btn cursor_" data-type=${d.GC_COST_NAME.VALUE} >确认</div>`
          })
          welfareContainer.html(contentElement)
        }
      )
    addEvent()
  }

  function isShowBirthdayImg() {
   
     const id = getQuery('EMPLID')
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetWishPicture',
      {
        EMPLID: id
      },
      'GET',
      birthdayDatas => {
        const [birthday] = birthdayDatas
        if (birthday.GC_WISH_FG.VALUE === 'Y') {
          $('.receive').append(
            `<div class='birthday-img-wrapper'><img src='../assets/employeeOptionalPayment/GC_EYWF_BIRTHDAY_OX.png' class='birthday-img'/>
             <img src='../assets/employeeOptionalPayment/GC_EYWF_GUAN_BI.png' class='close-icon'></img>
           </div>`
          )
          $('.content').append("<div class='mask'/>")
        }
      }
    )
  }

  function submit(type) {
    const id=getQuery('EMPLID')
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_SetChoosetWfData',
      {
        EMPLID: id,
        GC_CAL_PRD_ID: prdId,
        GC_EYWF_C_TYPE: type
      },
      data => {
        console.log('提交成功', data)
      }
    )
  }

  function addEvent() {
    $('.select-value').click(e => {
      const targetValue = e.target.value
      const typeAndValue = targetValue.split('_')
      const [type, value] = typeAndValue
      formValue[type] = value
    })

    $('.confirm-btn').click(e => {
      const dataset = e.target.dataset
      submit(formValue[dataset.type])
      console.log(22)
      console.log(formValue[dataset.type])
    })
    $('.home').click(()=>{
      let host=window.location.host,
        port=window.location.port
     window.location.href='http://'+host+'/psc/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit'
      
    })
    $('.close-icon').click(() => {
      $('.mask').remove()
      $('.birthday-img-wrapper').remove()
    })
  }
  function getQuery(name){
    let reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    let r=window.location.search.substr(1).match(reg);
    if(r!=null){
     //  return unescape(r[2])   ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。
     return decodeURI(r[2])
    }
    return null;
 }

  function init() {
    addEvent() 
    isShowBirthdayImg()
    getData()
   
   
  }

  return {
    init
  }
})()

EmployeeOption.init()
