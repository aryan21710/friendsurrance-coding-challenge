export interface IData {
  question: string;
  inputType : string;
  answer: string;
  isCardDisabled: boolean;
  description: string;
  toggleExpandedState: boolean;
  submitBtnColor : string;
  placeHolderText: string;
  isCardSubmitted: boolean;
  classname: string;
  submitBtnText: string;
  statusIconColor: string;
  validation: string;
  optionsArr?: string[]|undefined;
  inputValue: string;
  skipCards: number,
  skipCardsOnAnswer: null|string, }