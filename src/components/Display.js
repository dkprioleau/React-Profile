import React from "react"; 


function Display({click}){ //click is the props variable that holds name that is part of the state hook. Make sure that is has curley braces!!!!
    return( 
        // Remember that everything in the function needs to be in empty brackets or a div
       <>   
       
        {click}
           {/* releases name variable which holds the two functions to update the state  */}

        </>
    )
}







export default Display