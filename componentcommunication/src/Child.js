import { useState } from "react";

const Child = (props) => {
    const[toggle, setToggle] = useState("Parent");
    
    return (
        <div className='bg-danger text-light border w-75 mt-4 border-dark rounded  p-5 d-flex flex-column justify-content-center align-items-center'>
            <h3>Child Div</h3>
            <p>Content from <b>Parent</b> Div: <br/>{props.fromParent}</p>
            <div className='form-group d-flex flex-column justify-content-center'>
                <label className='form-label' for={toggle === "Parent" ? "parent" : "sibling"}>Type here to send data to:</label>
                <select className="dropdown" onChange={(e) => setToggle(e.target.value)}>
                    <option selected>Parent</option>
                    <option>Sibling</option>
                </select>
                { toggle === "Parent" ? 
                    <input id="parent" className="mt-4 form-control" type='text' onChange={(e) => props.updateParent(e.target.value)}></input>
                    :
                    <input id="sibling" className="mt-4 form-control" type='text' onChange={(e) => props.updateSibling(e.target.value)}></input>
                }
            </div>
        </div>
    )
};

export default Child;