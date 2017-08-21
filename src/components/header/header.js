import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';

export default class Header extends React.Component {

    Logout() {
        const auth = (localStorage.setItem('auth',false))
        this.props.history.push('/')
    }
    render() {
        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 57
            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };
        return (
            <div>
                <AppBar
                    style={{ ...style.appBar }}
                    title="book store"
                    iconElementLeft={
                        <IconButton style={style.menuButton} >
                        </IconButton>
                    }
                    iconElementRight={
                        <div style={style.iconsRightContainer}>

                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                }
                            >
                                <MenuItem onClick={() => this.Logout()}>Log Out</MenuItem>
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        )
    }
}