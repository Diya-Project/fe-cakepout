import React, { ReactNode } from 'react'
import RadioForm from './RadioForm'

type MultiRadioAttributes = {
    header: string
    method: any;
    methodName: string;
    value: Array<string>;
    title: Array<string>;
    children?: ReactNode;
}


export default function MultiRadio({ header, method, methodName, value, title, children }: MultiRadioAttributes):ReactNode {
    return (
        <div>
            <h1 className='font-light mb-2'>{header}</h1>
            <div className='flex my-auto md:space-x-0 space-x-2'>
                <RadioForm method={method} methodName={methodName} val={value[0]} title={title[0]} />
                <RadioForm method={method} methodName={methodName} val={value[1]} title={title[1]} />
                {children}
            </div>
            {method.formState.errors[methodName] && (
                <p className="text-red-600 mt-1 mx-1">
                    {method.formState.errors[methodName].message}
                </p>
            )}
        </div>
    )
}
