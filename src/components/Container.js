import React from 'react';

const Container = ({inner,classname="container"}) => {
    return (
        <div className={classname}>{inner}</div>
    );
};

export default Container;