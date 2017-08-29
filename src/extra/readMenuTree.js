/**
 * （构建思路）
 * 开始编译时执行
 *  
 * 
 * 此文件的作用是读取
 * components -> content -> 文件夹（按照功能名称定义名字） 
 *         exp: 
 *              content 
 *                  product                         ---   一级菜单
 *                      product_second              ---   二级菜单
 *                          product_second_third    --- 三级菜单(如果有)
 *                      product_second          
 *                      product_second
 *                  iot
 *      
 * 用于生成menu tree
 * 
 * 这里只向下读取/components/content/下的文件夹，如果碰到全文件的文件夹则停止
 *  
 */
// src/lib/menu.json
// {
//     item:[
//         {
//             title:'first_level',             //一级菜单
//             path:'',
//             item:[
//                 {
//                     title:'second_level',     //二级菜单
//                     path:'',
//                     item:[
//                         {
//                             title:'third_level',
//                             path:''
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             title:'first_level',
//             path:'',
//             item:[
//                 {
//                     title:'second_level'
//                 }
//             ]
//         }
//     ]
// }


