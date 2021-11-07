import React from 'react'
import './../components/css/style.css'




function Kpi() {
    

    // const [rating, setRating] = useState(0.0)
    // const sum = ( (five_star * 5) + (four_star * 4) + (three_star * 3) + (two_star * 2) + (one_star * 1) )
    // const total_rating = five_star * 5 + four_star * 4 + three_star * two_star * 2 + one_star
    


    // total_no_of_rating = total_no_of_rating + old_total_rating;

    // rating = ( newSum / total_no_of_rating);
    // current_kpi = Math.round(rating * 100) / 100;
    // five_star_count = saved_five_star[0] + five_star;

    return (
        <div>
            <div className="card-ui ">
                <div className="flx-space-between">
                    <div>
                        <h5>Enter Rating</h5>
                        <form>
                            <input type="text" value="" placeholder="Enter 5-star count" />
                            <br/>
                            <input type="text" value="" placeholder="Enter 4-star count" />
                            <br/>
                            <input type="text" value="" placeholder="Enter 3-star count" />
                            <br/>
                            <input type="text" value="" placeholder="Enter 2-star count" />
                            <br/>
                            <input type="text" value="" placeholder="Enter 1-star count" />
                            <br/>
                            <div className="flx-space-between">
                                <button className="ui-m-5">Compute</button>  
                                <button className="ui-m-5">Rollback</button>  
                            </div>
                            
                        </form>
                    </div> 

                    <div>
                        <form>
                            <h5>Enter Target</h5>
                            <input type="text" value="" className="ui-m-5" placeholder="Enter Target" />
                            <button>Save</button>   
                            
                               
                        </form> 

                        <div>
                            <h5><span className="label-teal">Current KPI</span> : <span className="label-blue">4.59</span> </h5>   
                            <h5><span className="label-teal">Required 5-stars</span> : <span className="label-blue">5</span> </h5>   
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Kpi
