import React, { useState, useEffect } from 'react';
import { Card } from '../Common/Card';
import { data } from '../../common/constants';
import { IData } from '../../common/interfaces';

const Form: React.FC = () => {
    const [formData, setFormData] = useState<IData[]>(data);
    const toggleExpandedHandler = (cardid:string)=>(e: React.MouseEvent<HTMLElement, MouseEvent>) => {

        const updatedFormData = formData.map((data)=>{
            if (data.question === cardid) {
                return {
                    ...data,
                    toggleExpandedState: !data.toggleExpandedState
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);

    };

    return (
        <React.Fragment>
            {formData.map((data, idx) => (
                <Card
                    question={data.question}
                    description={data.description}
                    inputType={data.inputType}
                    answer={data.answer}
                    isCardDisabled={data.isCardDisabled}
                    toggleExpandedState={data.toggleExpandedState}
                    placeHolderText={data.placeHolderText}
                    submitBtnColor={data.submitBtnColor}
                    toggleExpandedHandler={toggleExpandedHandler(data.question)}

                />
            ))}
        </React.Fragment>
    );
};

export default Form;

/*

<Card question={question}
description={description} inputType={inputType}
inputValue={inputValue} isCardDisabled={isCardDisabled}
onChangeHandler={onChangeHandler} onCancelHandler={onCancelHandler}
onSubmitHandler={onSubmitHandler} toggleExpandedState={toggleExpandedState}
placeHolderText={placeHolderText} submitBtnColor={submitBtnColor}
toggleExpandedHandler={toggleExpandedHandler}/>
*/
