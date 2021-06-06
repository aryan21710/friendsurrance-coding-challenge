import React from 'react';
import { Button } from './components/Common/Button';
import {BLUE,GREEN} from './common/constants'

const App:React.FC=()=>{
    const onClickHandler=()=> alert('hi');
    return (
        <Button onClickHandler={onClickHandler} bkgColor={GREEN}/>
    );
}

export default App;
