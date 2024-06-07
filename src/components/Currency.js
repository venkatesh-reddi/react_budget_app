import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch } = useContext(AppContext)
    return (
        <div >
            <div className="row alert alert-success">
                Currency:
                <select className="col-sm" id="curr" onChange={(e) => {
                    let load;
                    if (e.target.value === "Rupee") {
                        load = "₹"
                    }
                    else if (e.target.value === "Pound") {
                        load = "£"
                    }
                    else if(e.target.value === "Euro")
                    {
                        load = "€"
                    }
                    else{
                        load = "$"
                    }
                    dispatch(
                        {
                            type:"CHG_CURRENCY",
                            payload:load
                        }
                    )

                }}>
                    <option  value="Dolllar"> $ Dollar</option>
                    <option  value="Pound" selected="selected"> £ Pound</option>
                    <option  value="Euro"> € Euro</option>
                    <option  value="Rupee"> ₹ Rupee</option>
                </select>
            </div>
        </div>
    )
}
export default Currency;