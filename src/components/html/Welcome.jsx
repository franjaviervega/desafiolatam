import React from 'react';

const Welcome = (props) => {
    
    setTimeout(() => {
        //props.history.push("/product");
    }, 10);
    return (
        <div className="mb-4">
            <h3>Welcome</h3>
        </div>
    );
}

export default Welcome;