import React, { useState, useEffect } from 'react';
import { Card } from '../Common/Card';

const Form: React.FC = () => {
    const [toggleHeight, setToggleHeight] = useState<boolean>(false);
    const [isCardDisabled, setIsCardDisabled] = useState<boolean>(true);
    const toggleHeightHandler = () => setToggleHeight(!toggleHeight);

    return (
        <React.Fragment>
            <Card
                toggleHeight={toggleHeight} toggleHeightHandler={toggleHeightHandler}
            />
            <Card isCardDisabled={isCardDisabled} toggleHeight={toggleHeight} toggleHeightHandler={toggleHeightHandler}/>
            <Card isCardDisabled={isCardDisabled} toggleHeight={toggleHeight} toggleHeightHandler={toggleHeightHandler}/>
            <Card isCardDisabled={isCardDisabled} toggleHeight={toggleHeight} toggleHeightHandler={toggleHeightHandler}/>
        </React.Fragment>
    );
};

export default Form;
