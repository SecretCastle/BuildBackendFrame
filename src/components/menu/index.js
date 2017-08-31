import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import MenuItems from '../../lib/menuitem'
import MenuItem  from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'

class DrawerMenu extends React.Component {

    state = {
        isShow:true,
        isOpen:true
    }

    showHideMenu = () =>{
        this.setState({
            isShow : !this.state.isShow
        })
    }
    openItem = () =>{
        console.log(!this.state.isOpen);
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toContent = () =>{ 

    }

    /**
     * 创建一个渲染menu tree的纯函数
     * 
     * @param {any} group 
     * @memberof DrawerMenu
     */

    //TODO 目前只支持最大到二级
    createMenuFn(group){
        if(!(group instanceof Array)){
            throw 'component->menu->index.js 43 传入的非数组'
            return 
        }
        let menuItem 
        for(let firstLevel in group){
            if(group[firstLevel].item && Array.isArray(group[firstLevel].item)){
                //有二级栏目 
                menuItem = 
                    <ListItem 
                        key={firstLevel}
                        primaryText = {group[firstLevel].title} 
                        nestedItems = {
                            this.returnLevel(group[firstLevel].item)
                        }
                    /> 
            }else{
                menuItem = 
                    <ListItem 
                        key={firstLevel}
                        primaryText = {group[firstLevel].title}
                    />
            } 
        }
        return menuItem
    }

    /**
     * 只返回某一级所有的item，不关联其他级
     * 
     * @param {any} level 
     * @memberof DrawerMenu
     */
    returnLevel(level){
        if(!(level instanceof Array)){
            throw 'component->menu->index.js 传入的非数组'
            return 
        }
        let levelItem = []
        for(let item in level){
            levelItem.push( 
                <MenuItem 
                    key = {Number(item)}
                    primaryText = {level[item].title}
                    href={level[item].path}
                />
            )
        }
        return levelItem
    }

    render(){
        let menuItem = this.createMenuFn(MenuItems)
        return (
            <Drawer open={this.state.isShow}>
                <AppBar
                    title="SecretCastle"
                    onLeftIconButtonTouchTap = {this.showHideMenu}
                >
                </AppBar>
                <div>
                    <List>
                        <ListItem 
                            primaryText = "DashBoard"
                            href="#/app/dashboard"
                        />
                        {menuItem}
                    </List>
                </div>
            </Drawer>
        )
    }
}

export default DrawerMenu