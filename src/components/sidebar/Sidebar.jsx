import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline,TrendingUp,Person,ShoppingCart, AttachMoney, Equalizer,Mail, DynamicFeed,ChatBubble,LocalMall, Report} from '@material-ui/icons'


export default function Sidebar() {
    return (
        <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                        <ul className="sidebarList">
                             
                             <li className="sidebarItemList">
                                <LineStyle/>
                                Home
                             </li>
                             <li className="sidebarItemList ">
                                <Timeline/>
                                Analytics
                             </li>
                             <li className="sidebarItemList">
                                <TrendingUp/>
                                Sales
                             </li>
                           </ul>  
                             <h3 className="sidebarTitle">QuickMenu</h3>
                        <ul className="sidebarList">
                             <li className="sidebarItemList">
                                <Person/>
                                Users
                             </li>
                             <li className="sidebarItemList">
                                <ShoppingCart/>
                                Products
                             </li>
                             <li className="sidebarItemList">
                                <AttachMoney/>
                                Transactions
                             </li>
                             <li className="sidebarItemList">
                                <Equalizer/>
                                Reports
                             </li>
                             
                             
                             
                        </ul>
                        <h3 className="sidebarTitle">Notifications</h3>
                        <ul className="sidebarList">
                             <li className="sidebarItemList">
                                <Mail/>
                                Mail
                             </li>
                             <li className="sidebarItemList">
                                <DynamicFeed/>
                                Feedback
                             </li>
                             <li className="sidebarItemList">
                                <ChatBubble/>
                                Messages
                             </li>
                             
                             
                             
                        </ul>
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                             <li className="sidebarItemList">
                                <LocalMall/>
                                Manage
                             </li>
                             <li className="sidebarItemList">
                                <Timeline/>
                                Analytics
                             </li>
                             <li className="sidebarItemList">
                                <Report/>
                                Reports
                             </li>
                             
                             
                             
                        </ul>
                    </div>
                </div>
        </div>
    )
}
