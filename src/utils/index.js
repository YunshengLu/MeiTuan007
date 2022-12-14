/**
 * @author  文长
 * @func 根据path 判断是否在数组配置中
 * @params {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
    const arr = ['/cities', '/homedetail','/search'];
    let pathRes = path.split('/')
    if (pathRes[1] && arr.indexOf('/' + pathRes[1]) != -1) return true;
    return false



    // 1. path 全部匹配 /cities
    // 2. path 多了  /homedetail/: id/cmments/:id
    // const arr = ['/cities', '/homedetail'];
    //  // 完全匹配
    //  if (arr.indexOf(path) != -1) {
    //     return true
    // }

    // for (let i = 0; i< arr.length; i++) {
    //     if (path.lastIndexOf('/') !== 0) {
    //         // 正则 path 的 第二个/ 前面的部分
    //         // /  转义  \/ 
    //         // \w 一个字符 
    //         // \w+ 一个或多个字符
    //         const reg = /^(\/[\w]+)\//
    //         const matchArr = path.match(reg)
    //         const partlyPath = matchArr[1] ? matchArr[1] : ''
    //         console.log(partlyPath );
    //         if (partlyPath) {
    //             return arr.indexOf(partlyPath) != -1
    //         }
    //     }

    // }
    // arr.forEach(item => {
    //     // 完全匹配
    //     // if (item === path) {
    //     //     // 这里return后 下面的代码不执行  但是foreach还会再次执行  
    //     //     return true
    //     // }
    //     // 部分匹配 
    //     if (path.lastIndexOf('/') !== 0) {
    //         // 正则 path 的 第二个/ 前面的部分
    //         // /  转义  \/ 
    //         // \w 一个字符 
    //         // \w+ 一个或多个字符
    //         const reg = /^(\/[\w]+)\//
    //         const matchArr = path.match(reg)
    //         const partlyPath = matchArr[1] ? matchArr[1] : ''
    //         if (partlyPath) {
    //             return partlyPath === item
    //         }
    //     }

    // })
    // return false
}