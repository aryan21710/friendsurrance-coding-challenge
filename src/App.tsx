import React from 'react';
import { Button } from './components/Common/Button';
import {BLUE} from './common/constants'

const App:React.FC=()=>{
    const onClickHandler=()=> alert('hi');
    return (
        <Button onClickHandler={onClickHandler} bkgColor={'green'}/>
    );
}

export default App;
