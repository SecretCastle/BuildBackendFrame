# 布局思路

目前v3整体架构思路分析

```
build      //webpack配置文件
document   //文档
src		  //主程序
.babelrc   //babel配置文件
.eslintrc  //eslint配置文件
.gitingore 
index.html  //html
README.md
webpack.config.js  //webpack配置文件
```


> `src`目录

目前思路，按照组件编写，方便调用和重复利用

```
assets     //静态文件存放位置
components //组件存放位置
index.js   //入口文件 其中，入口文件只包含一个根目录 <App /> ,用于导入加载所必需的文件，以及ReactDOM渲染
```

> `components`目录

Components目录主要存放的是项目的组件

```
content	 //内容区域组件
menu		 //菜单区域组件
...       //其他待添加
app.js    //主界面的加载js
```

#### 组件写法

目前支持的可用有，`模版` 、`ant-design`、 `material-ui`  

```
//welcome.js

class Welcome extends React.Component {
	render(){
		return(
			<div className="hello">
				<!--Html Write Here-->
				<div style={{marginTop:'20px',fontSize:'24px'}}>Hello World</div>
			</div>
		)
	}
}

export default Welcome
```

一个`单纯`的组件就写好了,当然了，这里不包括逻辑处理


##### 组件引用

```
//index.js
import Welcome from './xx/welcome'
Import HaHa from './xx/haha.js'
ReactDom.render(
	<Welcome>
		<Haha />
	</Welcome>,
	document.getElementById('App')
)
```
