const WelfareOveriew = (function () {
  function init() {
    const activeWrapper = $('.active-wrapper-container')
    const id= getQuery('EMPLID')
      // 真实接口数据
  request(
    '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetEventList',
    // {
    //   EMPLID: id,
     
    // },
    null,
    'GET',
    data => {
      let activeWrapperElement = ''
      let welfareOverviewDatas=data
      welfareOverviewDatas.forEach(w => {
        activeWrapperElement += `
          <div class="active-wrapper" >
            <div class="active-title" data-id=1>${w.GC_EYWF_EVNT_NAME.VALUE}</div>
            <div class="active"  onclick="handleGo(\`${w.GC_EYWF_EVNT_SEQ.VALUE}\`,\`${w.GC_JD_EVNT_NBR.VALUE}\`)">
             <img class="active-img" src=${w.GC_EYWF_EVNT_PICTURE.VALUE} />
              <div class="desc">${w.GC_EYWF_EVNT_COMTS.VALUE}</div>
            </div>
          </div>
        `
      })
      activeWrapper.html(activeWrapperElement)
    }
  )

    
  $('.home').click(()=>{
    console.log('home.html')
    console.log(window.location.host,'777')
    console.log(window.location.port)
    let host=window.location.host,
        port=window.location.port
        window.location.href='http://'+host+'/psc/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit'
    // window.location.href='http://10.60.143.33:8001/psp/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit'
  })

  }

  return {
    init
  }
})()
 function handleGo(GC_EYWF_EVNT_SEQ,GC_JD_EVNT_NBR){
   console.log(GC_EYWF_EVNT_SEQ,GC_JD_EVNT_NBR)
    const id=getQuery('EMPLID')
      request('WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_GetEventUrl',{
        GC_EYWF_EVNT_SEQ:GC_EYWF_EVNT_SEQ,
        GC_JD_EVNT_NBR:GC_JD_EVNT_NBR,
        EMPLID:id

      },(data)=>{
         window.location.href=data.GC_EYWF_EVNT_URL.VALUE
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
WelfareOveriew.init()
