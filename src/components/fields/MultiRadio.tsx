import React from 'react'
import RadioForm from './RadioForm'
import { MultiRadioAttributes } from './TypeFields'


export default function MultiRadio({ header, method, methodName, value, title, children }: MultiRadioAttributes) {
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
