import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../Common/Card';
import { data } from '../../common/constants';
import { IData } from '../../common/interfaces';
import { BLUE, GREEN, GREY } from '../../common/constants';

const Form: React.FC = () => {
    const [formData, setFormData] = useState<IData[]>(data);



    const toggleExpandedHandler = (cardid: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const updatedFormData = formData.map((data) => {
            if (data.question === cardid) {
                return {
                    ...data,
                    toggleExpandedState: !data.toggleExpandedState,
                    classname: !data.toggleExpandedState ? 'expand' : 'collapse',
                   
                };
            } else {
                if (data.isCardSubmitted) {
                    return { ...data, classname: 'collapse' };
                } else {
                    return { ...data, classname: 'collapse disabled' };
                }
            }
        });
        setFormData([...updatedFormData]);
    };

    const onCancelHandler = (cardid: string)=>(e: React.MouseEvent<HTMLButtonElement>)=>{
        const updatedFormData = formData.map((data, idx) => {
            if (data.question === cardid) {
                return {
                    ...data,
                    isCardSubmitted: false,
                    submitBtnColor: GREY,
                    answer: ''
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);
    };

    const onSubmitHandler = (cardid: string)=>(e: React.MouseEvent<HTMLButtonElement>)=>{
        const updatedFormData = formData.map((data, idx) => {
            if (data.question === cardid) {
                return {
                    ...data,
                    isCardSubmitted: true,
                    submitBtnColor: GREEN
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);
    };
    const onChangeHandler = (cardid: string)=>(e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFormData = formData.map((data, idx) => {
            if (data.question === cardid) {
                const element = e.target as HTMLInputElement;
                return {
                    ...data,
                    answer: element.value,
                    placeHolderText: '',
                    submitBtnColor: element.value.length > 0 ? GREEN : GREY
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
                    classname={data.classname}
                    description={data.description}
                    inputType={data.inputType}
                    answer={data.answer}
                    isCardSubmitted={data.isCardSubmitted}
                    isCardDisabled={data.isCardDisabled}
                    toggleExpandedState={data.toggleExpandedState}
                    placeHolderText={data.placeHolderText}
                    submitBtnColor={data.submitBtnColor}
                    toggleExpandedHandler={toggleExpandedHandler(data.question)}
                    onSubmitHandler={onSubmitHandler(data.question)}
                    onCancelHandler={onCancelHandler(data.question)}
                    onChangeHandler={onChangeHandler(data.question)}
                />
            ))}
        </React.Fragment>
    );
};

export default Form;


