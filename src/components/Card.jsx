import React from 'react'

function Card(props) {
    const cardView = props.activeTab
 
    return (
        <div>
           {cardView == "Gift Card" ? 
            <form>
                <input type="text" name="first_name" value="apples"/>
                <input type="text" name="last_name" value="bannanas"/>
            </form>
            :
            (cardView == "Credit Card" ?
            <form>
                <input type="text" name="first_name" value="fish"/>
                <input type="text" name="last_name" value="chicken"/>
            </form>
            :
            ( cardView == "Apple Card" ?  
            <form>
                <input type="text" name="first_name" value="cars"/>
                <input type="text" name="last_name" value="money"/>
            </form>
            :
            <div>
                <p>No more views</p>
            </div>
            )
            )
            }
            
        </div>
    )
}

export default Card
