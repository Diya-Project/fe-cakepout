'use client'
import { Controller } from "react-hook-form"
import Select from 'react-select';
import { FocusEventHandler } from "react";
import { SelectAttributes } from "@/type";

type SelectFormAttributes = {
    instanceId: string;
    method: any;
    methodName: string;
    className?: string;
    title: string;
    defaultValue?: { value: string | number | boolean | undefined; label: string | number | boolean | undefined };
    placeholder?: string;
    options: SelectAttributes[]
    isMulti?: boolean;
    blur?: FocusEventHandler<HTMLInputElement> | undefined;
    change?: (e: any) => void;
    disabled?: boolean;
    val?: { value: string | number | boolean | undefined; label: string | number | boolean | undefined }
}

function SelectForm
    ({ method, methodName, options, title, val, className, defaultValue, disabled, isMulti, blur, change, placeholder, instanceId }: SelectFormAttributes) {
    const { error } = method.getFieldState(methodName)
    return (
        <div className={`w-full space-y-1 ${className}`}>
            <label className="md:mx-0 text-md font-light text-gray-600">{title}</label>
            <Controller
                control={method.control}
                name={methodName}
                defaultValue={defaultValue}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                }) => {
                    return <Select
                        instanceId={instanceId}
                        className={className}
                        styles={{
                            control: (baseStyles, state: any) => ({
                                ...baseStyles,
                                borderRadius: "0px",
                                paddingTop: "1px",
                                paddingBottom: "1px",
                                borderColor: state.isTouched ? "#624d4d" : "#624d4d",
                                borderWidth: "2px",
                            }),
                        }}
                        classNamePrefix="select"
                        placeholder={placeholder}
                        options={options}
                        isMulti={isMulti}
                        onBlur={blur}
                        onChange={(e: any) => {
                            if (isMulti) {
                                onChange(e.map((d: any) =>
                                    d.value))
                                if (onChange) {
                                    onChange(e);
                                }
                            }
                            else {
                                onChange(e.value);
                                if (change) {
                                    change(e.value)
                                }
                            }
                        }}
                        isDisabled={disabled}
                        ref={ref}
                        value={change ? val : options?.find((o: any) => o.value === value) || {}}
                    />
                }}
            />
            {error && <p className='text-red-600 mt-1 mx-1'>{error.message}</p>}
        </div>
    );
}

export default SelectForm
