import { useState } from 'react';
import Child from './Child';
import Sibling from './Sibling';

const Parent = () => {
    const [childData, setChildData] = useState("");
    const [siblingData, setSiblingData] = useState("");
    const [sendData, setSendData] = useState("");

    function updateChildData(data) {
        setChildData(data)
    }   

    function updateSiblingData(data) {
        setSiblingData(data)
    }  

    function childText(data) {
        setSendData(data);
    }

    return (
        <div style={{height: "100vh"}} className='bg-dark w-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='bg-primary text-white border w-50 border-dark rounded  p-5 d-flex flex-column justify-content-center align-items-center'>
                <h3>Parent Div</h3>
                <p>Content from <b>Child</b> Div: <br/>{childData}</p>
                <div className='form-group'>
                    <label className='form-label' for="superparent">Type here to send data to child:</label>
                    <input id="superparent" className="form-control" type='text' onChange={(e) => childText(e.target.value)}></input>
                </div>
                <div className='d-flex gap-3 justify-content-center align-items-center'>
                    <Child updateParent={updateChildData} updateSibling={updateSiblingData} fromParent={sendData} />
                    <Sibling fromParent={siblingData} />
                </div>
            </div>
        </div>
    );  
};

export default Parent;