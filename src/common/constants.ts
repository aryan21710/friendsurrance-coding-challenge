export const BLUE = 'rgb(52, 143, 235)';
export const GREEN = 'rgb(29, 191, 4)';
export const GREY = 'rgb(176, 181, 176)';
export const data = [{
    question: 'First Name',
    inputType : 'text',
    answer: '',
    isCardDisabled: false,
    description: 'Please Enter Your First Name',
    toggleExpandedState: false,
    submitBtnColor : GREY,
    placeHolderText: 'Enter Your First Name',
    isCardSubmitted: false,
    classname: 'collapse'
}, {
    question: 'Last Name',
    inputType : 'text',
    answer: '',
    isCardDisabled: true,
    description: 'Please Enter Your Last Name',
    toggleExpandedState: false,
    submitBtnColor : GREY,
    placeHolderText: 'Enter Your Last Name',
    isCardSubmitted: false,
    classname: 'collapse disabled'
}, {
    question: 'Email',
    inputType : 'email',
    answer: '',
    isCardDisabled: true,
    description: 'Please Enter Your Email Address',
    toggleExpandedState: false,
    submitBtnColor : GREY,
    placeHolderText: 'Enter Your Email Address',
    isCardSubmitted: false,
    classname: 'collapse disabled'
}, {
    question: 'DOB',
    inputType : 'date',
    answer: '',
    isCardDisabled: true,
    description: 'Please Enter Your Date Of Birth',
    toggleExpandedState: false,
    submitBtnColor : GREY,
    placeHolderText: 'Enter Your Email Address',
    isCardSubmitted: false,
    classname: 'collapse disabled'
}];

/*
are you insured . if no disable next field called insurance company and insurance id and insurance beneficiary.
infected with covid in last 1 month. If yes then vaccination type will be disabled.

FirstName, LastName, age, gender, email, phone, address,  are you insured, insurance company, insurance id, infected with covid in last 1 month, vaccination type.

new emp or existing emp. new emp then disable the current proj name.
*/

/*
first card :-
classname: collapse always



*/