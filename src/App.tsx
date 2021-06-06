import React from 'react';
import { Button } from './components/Common/Button';
import { Input } from './components/Common/Input';

import { BLUE, GREEN } from './common/constants';

const App:React.FC = ()=>{
    const onClickHandler = ()=> {return}
    const onChangeHandler = ()=> {return}

    return (
        <React.Fragment>
            <Button onClickHandler={onClickHandler} bkgColor={GREEN}/>
            <Input type={'password'} placeHolderText={'ENTER YOUR NAME'} onChangeHandler={onChangeHandler}/>
        </React.Fragment>
    );
};

export default App;
