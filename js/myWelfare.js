window.onload = function () {
    // 真实接口数据
    const id=routerquery()
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfSum',
      { EMPLID: id },
      data => {
        console.log(data)
        const overiewContentElement = $('.content')
        let content = ''
        const [realData] = data
        Object.keys(realData).forEach((d, index) => {
          const flag = index % 2 === 1
          content += `
            <div class=${flag ? 'right-item' : 'item'}><span class="lable">${realData[d].TEXT}</span><span>${
            realData[d].VALUE
          }</span></div>
            `
          overiewContent.html(overiewContentElement)
        })
      }
    )
      // 真实接口数据
      const YEAR=new Date()

      request(
        '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail',
        {
          EMPLID: id,
          GC_YEAR: YEAR.getFullYear()
        },
        data => {
          console.log('detailData', data)
          const detailContent = $('.detail-content')
          let detailDataElement = ''
          const [realDetailData] = data
          realDetailData.GC_MY_EYWF_IF.forEach(d => {
            d.GC_MY_EYWF_DETAIL.forEach(c => {
              detailDataElement += `
              <div class="detail-item">
                <div class="left-img">
                <img src=${
                  d.GC_COST_PICTUE.VALUE ? d.GC_COST_PICTUE.VALUE : '../assets/home/GC_EYWF_MOON_PRE.png'
                }  class="detail-img" />
                </div>
                <div class="right-content">
                  <p><span class="lable">${c.GC_ENTITY_CASH_DESC.VALUE}</span><span>${
                c.GC_COST_ENTY_NUM.VALUE
              }</span></p>
                </div>
              </div>
          `
            })
          })
    
          detailContent.html(detailDataElement)
        }
      )
     
 

}
function routerquery() {
  var result;
  var url=window.location.search; //获取url中"?"符后的字串  
  if(url.indexOf("?")!=-1){
  result = url.substr(url.indexOf("=")+1,1);
  }
  return result;
  }