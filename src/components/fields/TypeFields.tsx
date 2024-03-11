import { Dispatch, FocusEventHandler, ReactNode, SetStateAction } from "react"
import { SelectAttributes } from "@/type"


export type InputType = 'text' | 'number' | 'password' | 'date' | 'datetime-local'

export type InputAttributes = {
    value: string | number | undefined
    setValue: Dispatch<SetStateAction<string>>
    placeholder?:string
    type:InputType
    read?:boolean
}

export type MultiRadioAttributes = {
    header: string
    method: any;
    methodName: string;
    value: Array<string>;
    title: Array<string>;
    children?: ReactNode;
}

export type InputFormAttributes ={
    max?:number;
    step?:number;
    type?:InputType;
    title?:string;
    className?:string;
    read?:boolean;
    icon?:any;
    methodName:string;
    method:any;
}

export type TextAreaFormAttributes = {
    method:any;
    methodName:string;
    className?:string;
    title:string;
}

export type SelectFormAttributes = {
    instanceId:string;
    method:any;
    methodName:string;
    className?:string;
    title:string;
    defaultValue?:{value:string|number|boolean|undefined;label:string|number|boolean|undefined};
    placeholder?:string;
    options:SelectAttributes[];
    isMulti?:boolean;
    blur?:FocusEventHandler<HTMLInputElement> | undefined;
    change?:(e:any)=>any;
    disabled?:boolean;
    val?:{value:string|number|boolean|undefined;label:string|number|boolean|undefined}
}

export type RadioFormAttributes = {
    method : any;
    methodName : string;
    change?:(e:any)=>any;
    id?:string|undefined;
    val?:string|number|undefined;
    title?:string
}

export type SelectorAttributes ={
    title: string;
    options: Array<SelectAttributes>
    value: SelectAttributes
    onChange: (e: any) => void; 
    defaultValue?: SelectAttributes;
}
