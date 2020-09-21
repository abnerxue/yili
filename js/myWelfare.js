window.onload = function () {
    // 真实接口数据
    const id=getQuery('EMPLID')
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfSum',
      { EMPLID: id },
      'GET',
      data => {
        console.log(data)
        const overiewContentElement = $('.content')
        let content = ''
        let realData=data[0]
        // console.log(t)
        // let temp=[]
        //  for(let i in t){
        //    let o={}
        //    o[i]= data[0][i]
        //    temp.push(o)
        //  }
        //  console.log(temp)
        // const realData = temp
        // console.log(realData)
          Object.values(realData).forEach((d, index) => {
          console.log(realData[index],realData[d],d)
          const flag = index % 2 === 1
          content += `
            <div class=${flag ? 'right-item' : 'item'}><span class="lable">${d[0].TEXT}</span><span>${
              d[0].VALUE
          }</span></div>
            `
            overiewContentElement.html(content)
        })
      }
    )
    getDetail()
 
    $('.home').click(()=>{
      console.log('home.html')
      window.location.href='http://10.60.143.33:8001/psp/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit'
    })
}
function getDetail(){
         // 真实接口数据
         const YEAR=new Date()
         let year=YEAR.getFullYear()
         const id=getQuery('EMPLID')
         request(
           '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail',
           {
             EMPLID: id,
             GC_YEAR: year
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

  function getQuery(name){
    let reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
    let r=window.location.search.substr(1).match(reg);
    if(r!=null){
     //  return unescape(r[2])   ECMAScript v3 已从标准中删除了 unescape() 函数，并反对使用它，因此应该用 decodeURI() 和 decodeURIComponent() 取而代之。
     return decodeURI(r[2])
    }
    return null;
 }