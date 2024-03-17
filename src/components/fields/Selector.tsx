import { SelectAttributes } from '@/type';
import { ReactNode } from 'react';
import Select from 'react-select'

type SelectorAttributes = {
    title: string;
    options: Array<SelectAttributes>
    value: SelectAttributes
    onChange: (e: any) => void;
    defaultValue?: SelectAttributes;
}


function Selector({ title, onChange, options, value }: SelectorAttributes):ReactNode {
    return (
        <div className='w-60 font-montserrat font-light'>
            <Select
                styles={{
                    control: (baseStyles: any) => ({
                        ...baseStyles,
                        borderRadius: "6px",
                        paddingTop: "1px",
                        paddingBottom: "1px",
                    }),

                }}
                options={options}
                value={value}
                onChange={onChange}
                defaultValue={{ value: null, label: "Pilih Mustamiq" }}
            />
        </div>
    )
}

export default Selector