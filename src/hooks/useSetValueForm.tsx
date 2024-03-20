import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form';

export default function useSetValueForm(method: UseFormReturn<any, any, undefined>, form: Array<string>, trigger: string | number | boolean) {
    useEffect(() => {
        form.map((e) => {
            method.setValue(e, null)
        })
    }, [method, trigger])
}
