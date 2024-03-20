import InputForm from '@/components/fields/InputForm'
import SelectForm from '@/components/fields/SelectForm'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactNode, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from "yup"
import Form from '../templates/Form'
import Modal from '../templates/Modal'
import useDetailOfActivityOptions from '@/options/activityOptions'
import { grupAkun } from '../constants/GrupAkun'
import useGroupAccountLabelOptions from '@/options/groupAccount'
import useResetForm from '@/hooks/useResetForm'
import useSetValueForm from '@/hooks/useSetValueForm'
import useInstitutionOptions from '@/options/institution'
import Selector from '../fields/Selector'
import { SelectAttributes } from '@/type'

const activityCode = [4, 5]

type FormAddAccountAttributes = { show: boolean, close: () => void, submit: SubmitHandler<AddAccountAttributes> }

export default function FormAddAccount({ submit, show, close }: FormAddAccountAttributes): ReactNode {
    const [statusGroupAccounLabel, setStatusGroupAccountLabel] = useState(false)
    const [institutionValue, setInstitutionValue] = useState<SelectAttributes>({ value: 0, label: '' })
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                group_account: yup.number().typeError('group_account field required').min(0, 'min 0').required(),
                group_account_label: yup.number().nullable().typeError('group_account_label field required').min(0, 'min 0').required(),
                group_account_name: yup.string().when('group_account_label', (group_account_label, fields) => group_account_label[0] === null ? fields.required() : fields.nullable()),
                name: yup.string().required(),
                activity_id: yup.string().nullable()

            })
        ), defaultValues: { activity_id: undefined }
    })
    const watchGroupAccount = method.watch('group_account')

    const groupAccountLabelOptions = useGroupAccountLabelOptions(watchGroupAccount, !statusGroupAccounLabel)
    const detailOfActiviyOptions = useDetailOfActivityOptions(institutionValue.value)
    const institutionOptions = useInstitutionOptions()

    // useSetValueForm(method, ['group_account_label', 'group_account_name', 'activity_id', 'name'], watchGroupAccount)
    useResetForm(method, show, null)
    return (
        <Modal title='Tambah Akun' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <SelectForm instanceId='select-grup-akun' title='Klasifikasi Akun' method={method} methodName='group_account' options={grupAkun} />
                <div className='flex flex-col justify-start items-start gap-2'>
                    <label className='font-montserrat font-semibold'>Main/Opsional</label>
                    <input className='w-4 h-4' type='checkbox' checked={statusGroupAccounLabel} onChange={(e) => {
                        setStatusGroupAccountLabel(e.currentTarget.checked)
                        method.setValue('group_account_label', 0)
                        method.setValue('group_account_name', undefined)
                    }} />
                </div>
                {!statusGroupAccounLabel ?
                    <SelectForm instanceId='select-group-account-label' title='Grup Akun Label' method={method} methodName='group_account_label' options={groupAccountLabelOptions} />
                    :
                    <InputForm title='Grup Akun' method={method} methodName='group_account_name' />
                }
                <InputForm title='Nama' method={method} methodName='name' />
                {activityCode.includes(watchGroupAccount) && <Selector title='Lembaga' options={institutionOptions} value={institutionValue} onChange={(e) => setInstitutionValue(e)} />}
                {activityCode.includes(watchGroupAccount) && <SelectForm instanceId='select-detailOfActivity' title='Kegiatan' method={method} methodName='activity_id' options={detailOfActiviyOptions} />}
            </Form>
        </Modal>
    )
}

