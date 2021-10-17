import './featured.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function Featured() {
    return (
        <div className="featured">
               
                <div className="featuredItem">
                    <span className="featuredT">Revanue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$10,415</span>
                        <span className="featuredMoneyRated">
                            -11.4<ArrowDownward className="featuredIcon negative "/>
                            </span>

                    </div>
                      <span className="featuredSub">Compared to last month</span>  
                </div>
                <div className="featuredItem">
                    <span className="featuredT">Sales</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$100,415</span>
                        <span className="featuredMoneyRated">
                            -112.4<ArrowDownward className="featuredIcon negative "/>
                            </span>

                    </div>
                      <span className="featuredSub">Compared to last month</span>  
                </div>
                <div className="featuredItem">
                    <span className="featuredT">Cost</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$233,225</span>
                        <span className="featuredMoneyRated">
                            +232.4<ArrowUpward  className="featuredIcon  "/>
                            </span>

                    </div>
                      <span className="featuredSub">Compared to last month</span>  
                </div>
        </div>
    )
}
