import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar'
import MenuItemGroup  from '../../lib/menuitem'
import Divider from 'material-ui/Divider';

class DrawerMenu extends React.Component {

    render(){


        //readMenuTree
       

        return (
            <Drawer open={true}>
                <AppBar
                    title="SecretCastle"
                >
                </AppBar>
                <div>
                    <Menu>
                        <MenuItem>Menu Item</MenuItem>
                      
                        <MenuItem>Menu Item 2</MenuItem>
                    </Menu>
                </div>
            </Drawer>
        )
    }
}

export default DrawerMenu