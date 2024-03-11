import Select from 'react-select'
import { SelectorAttributes } from './TypeFields';


function Selector({ title,onChange, options, value }: SelectorAttributes) {
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