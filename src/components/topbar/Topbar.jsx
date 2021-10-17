import React from 'react'
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                    <div className="topleft">
                        <span className="logo">lamaadmin</span>


                    </div>
                    <div className="topright">
                    
                        <div className="topbarIconContainer">
                        <NotificationsNone/>
                         <span className="topIconBadge">2</span>
                        
                         </div>
                         <div className="topbarIconContainer">
                        <Language/>
                         
                        
                         </div>
                         <div className="topbarIconContainer">
                        <Settings/>
                         </div>
                         <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="" className="topAvatar"/>
                    </div>

            </div>
           
        </div>
    )
}
