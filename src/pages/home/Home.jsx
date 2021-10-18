import React from 'react'
import './home.css'
import Featured from '../../components/featuredInfo/Featured'
import Chart from '../../components/chart/Chart'
import {userData} from '../../DummyData.js'; 

export default function Home() {
    return (
        <div className='home'>
                <Featured/> 
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>        
        </div>
    )
}
