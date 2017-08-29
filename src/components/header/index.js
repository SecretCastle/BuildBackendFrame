import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';


class Header extends React.Component{
    render(){
        return(
            <AppBar
                title = "SecretCastle"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton = {false}
                style={{
                    position:'fixed',
                    width:'100%',
                    top:0
                }}
            >   
                <Avatar style={{marginTop:12}} icon={<FontIcon className="muidocs-icon-communication-voicemail" />} />
            </AppBar>
        )
    }
}
export default Header