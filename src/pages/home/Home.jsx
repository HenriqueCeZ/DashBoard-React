import React from 'react'
import './home.css'
import Featured from '../../components/featuredInfo/Featured'
import Chart from '../../components/chart/Chart'
import {userData} from '../../DummyData.js'; 
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
    return (
        <div className='home'>
                <Featured/> 
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> 
                <div className="homeWidgets">
                            <WidgetSm/>
                            <WidgetLg/>
                        </div>       
        </div>
    )
}
