import {  MouseEventHandler} from "react"
export interface ButtonProps {
  title: String;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
  typeBtn?: "button"| "submit";
}


export interface InputProps {
hint: String;
name: String;
type: String;
style: String;
}