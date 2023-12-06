const Sibling = (props) => {
    return (
        <div className='bg-danger text-light border w-75 mt-4 border-dark rounded  p-5 d-flex flex-column justify-content-center align-items-center'>
            <h3>Sibling Div</h3>
            <p>Content from <b>Child</b> Div: <br/>{props.fromParent}</p>
        </div>
    )
};

export default Sibling;