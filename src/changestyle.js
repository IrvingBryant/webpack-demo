// const fs = require('fs')
var fs = require('fs')
var path = require('path')
//正则匹配16进制的颜色值 目前匹配16进制颜色
var colorRgExp=/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g,
    clockimgRgExp=/28723bc3-7c77-4a8a-9c39-c0f4e087bb28/g,
    completedRgExp=/aed30383-60bb-4275-a2d5-7ecad2591889/g,
    chaFalsebgImgRgExp=/aeae64b3-1ab4-49f7-b9a5-c970b43debf8/g,
    chaTruebgImgRgExp=/080b6bda-fa61-478b-8b23-6a39cd03e804/g,
    chaActiveBgRgExp=/add1ddcc-9d2f-4c00-8c8f-5b0b7fa2ebfa/g,
    chaDisabledBgRgExp=/1d143baa-e83d-424a-ab4a-4de95b61fc79/g,
    navIconStudyRgExp=/89ea0674-29bb-42e6-a96e-8f218d528104/g,
    navIconCourseRgExp=/bc99c88b-b2fc-434e-a237-bb436adec23a/g,
    navIconUserRgExp=/37f50fec-20ed-4e7e-9787-b92ddbf762f4/g,
    navIconTrainingRgExp=/324693e8-b504-4e98-a190-edd981cd989a/g;
/**
 * defaultRgExpArray 所有默认图片的正则数组
 */
var defaultRgExpArray=[clockimgRgExp,completedRgExp,chaFalsebgImgRgExp,
    chaTruebgImgRgExp,chaActiveBgRgExp,chaDisabledBgRgExp,
    navIconStudyRgExp,navIconCourseRgExp,navIconUserRgExp,navIconTrainingRgExp]
/**
 * 
 * @param {*}  readUrl 被读取得原css文件的地址路径
 * @param {*} writeUrl 被写入的css文件的地址路径
 * @param {Array} hashArray 图片的后缀哈希数组 数组顺序请按照defaultRgExpArray顺序排列
 * @param {*} color 需要更新的主题颜色
 */
function changeStyle(readUrl,writeUrl,hashArray,color){
    let rgExpcolor = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g
    if(rgExpcolor.test(color)){
        fs.readFile(path.resolve(__dirname,readUrl),'utf8',(err, data) => {
            if (err) throw err;
            let cssTxt = data
            for(let i=0 ;i<defaultRgExpArray.length;i++){
                cssTxt=cssTxt.replace(defaultRgExpArray[i],hashArray[i])
                
            }
            cssTxt = cssTxt.replace(colorRgExp,color)  
            fs.writeFile(path.resolve(__dirname,writeUrl),cssTxt, function(err){
                if(err) throw err;
                console.log('文件写入成功。。。');
            });
        }); 
    }else{
        console.log('请输入正确的16进制颜色');
    }
}
var a=[1,2,3,4,5,6,7,8,9,10]
changeStyle('../static/theme/theme-orange/theme-orange.css','../static/theme/theme-orange/theme-red.css',a,'#666666');