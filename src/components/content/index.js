import Paper from 'material-ui/Paper'
const className = require('classname')
import ProductList from './product/product_list/index'


class ContentMain extends React.Component{
    render(){
        let contentWrapStyle = 
        className(
            {
            'contentWrap_hasMenu':true,
            },{
            'contentWrap_hasNoMenu':false
        })

        const numbers = [1, 2, 3, 4, 5,6,7,8,9,10,11, 12, 13, 14, 15,16,17,18,19,20,21, 22, 23, 24, 25,26,27,28,29,30,31, 32, 33, 34, 35,36,37,38,39,40,41, 42, 43, 44, 45,46,47,48,49,50,51, 52, 53, 54, 55,56,57,58,59,60];
        const listItems = numbers.map((number) =>
          <li key={number.toString()}>{number}</li>
        );
        

        //这里还有路由要写
        
        return (
            <div className = {contentWrapStyle}>
                <ProductList />
            </div>
        )
    }
}

export default ContentMain