export const BLUE = 'rgb(52, 143, 235)';
export const GREEN = 'rgb(29, 191, 4)';
export const GREY = 'rgb(176, 181, 176)';
export const data = [
    {
        question: 'First Name',
        inputType: 'text',
        answer: '',
        inputValue: '',
        isCardDisabled: false,
        description: 'Please Enter Your First Name',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your First Name',
        isCardSubmitted: false,
        classname: 'collapse',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|alpha'
    },
    {
        question: 'Last Name',
        inputType: 'text',
        answer: '',
        inputValue: '',
        isCardDisabled: true,
        description: 'Please Enter Your Last Name',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Last Name',
        isCardSubmitted: false,
        classname: 'collapse disabled',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|alpha'
    },
    {
        question: 'Gender',
        inputType: 'select',
        inputValue: '',
        optionsArr: ['Other', 'Male', 'Female'],
        answer: '',
        isCardDisabled: true,
        description: 'Please Enter Your Gender',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Age',
        isCardSubmitted: false,
        classname: 'collapse disabled',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: ''
    },
    {
        question: 'Age',
        inputType: 'number',
        inputValue: '',
        answer: '',
        isCardDisabled: true,
        description: 'Please Enter Your Age In Years',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Age',
        isCardSubmitted: false,
        classname: 'collapse disabled',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|numeric|min:18,num|max:90,num'
    },
    {
        question: 'Email',
        inputType: 'email',
        inputValue: '',
        answer: '',
        isCardDisabled: true,
        description: 'Please Enter Your Email Address',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Email Address',
        isCardSubmitted: false,
        classname: 'collapse disabled',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|between:5,100|email'
    },
    {
        question: 'Phone Number',
        inputType: 'text',
        inputValue: '',
        answer: '',
        isCardDisabled: true,
        description: 'Please Enter Your Phone Number',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Phone Number',
        isCardSubmitted: false,
        classname: 'collapse disabled',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|numeric|between:8,11|phone'
    },
    {
        question: 'Address',
        inputType: 'text',
        inputValue: '',
        answer: '',
        isCardDisabled: true,
        description: 'Please Enter Your Residential Address',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Residential Address',
        isCardSubmitted: false,
        classname: 'collapse disabled',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|between:5,100'
    },
    {
        question: 'Insurance Status',
        inputType: 'select',
        disabledNextCardAnswer: 'No',
        inputValue: '',
        optionsArr: ['Other', 'Yes', 'No'],
        answer: '',
        isCardDisabled: false,
        description: 'Are You Insured?',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Are You Insured?',
        isCardSubmitted: false,
        classname: 'collapse',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: ''
    },
    {
        question: 'Insurance Company',
        inputType: 'text',
        inputValue: '',
        answer: '',
        isCardDisabled: false,
        description: 'Please Enter Your Insurance Company Name?',
        toggleExpandedState: false,
        submitBtnColor: GREY,
        placeHolderText: 'Enter Your Insurance Company Name?',
        isCardSubmitted: false,
        classname: 'collapse',
        submitBtnText: 'Submit',
        statusIconColor: GREY,
        validation: 'required|alpha_space|between:3,30'
    },
];

/*
are you insured . if no disable next field called insurance company and insurance id and insurance beneficiary.
infected with covid in last 1 month. If yes then vaccination type will be disabled.

FirstName, LastName, age, gender, email, phone, address,  are you insured, insurance company, insurance id, infected with covid in last 1 month, vaccination type.

*/


