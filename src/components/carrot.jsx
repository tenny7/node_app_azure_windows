import React, { useState } from 'react';
import Card from './Card'

    function Index(props) {
    const  title = props.activeTab;
    const MyCard = <Card cardSelector={title}/>
 
    return (
        <>
            {MyCard}
        </>
    ) 
      
};
export default Index;