import InputForm from '@/components/fields/InputForm'
import SelectForm from '@/components/fields/SelectForm'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactNode, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import Form from '../templates/Form'
import Modal from '../templates/Modal'
import useDetailOfActivityOptions from '@/options/activityOptions'
import { grupAkun } from '../constants/GrupAkun'
import useGroupAccountLabelOptions from '@/options/groupAccount'

const activityCode = [4, 5]

export default function FormAddAccount({ submit, show, close }: { show: boolean, close: () => void, submit: (e: any) => void }): ReactNode {
    const [statusGroupAccounLabel, setStatusGroupAccountLabel] = useState(false)
    const method = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required(),
                group_account: yup.number().typeError('group_account field required').min(0, 'min 0').required(),
                group_account_label: yup.number().nullable().typeError('group_account_label field required').min(0, 'min 0').required(),
                group_account_name: yup.string().when('group_account_label', (group_account_label, fields) => group_account_label[0] === null ? fields.required() : fields.nullable()),
                activity_id: yup.string().when('group_account', (groupAccount, fields) => groupAccount[0] === 4 || groupAccount[0] === 5 ? fields.required() : fields.nullable())

            })
        ), defaultValues: { activity_id: undefined }
    })
    const watchGroupAccount = method.watch('group_account')
    const detailOfActiviyOptions = useDetailOfActivityOptions(watchGroupAccount === 4 || watchGroupAccount === 5 ? true : false)
    const groupAccountLabelOptions = useGroupAccountLabelOptions(watchGroupAccount, !statusGroupAccounLabel)
    useEffect(() => {
        method.setValue('group_account_label', 0)
        method.setValue('group_account_name', undefined)
        method.setValue('activity_id', undefined)
    }, [watchGroupAccount])
    useEffect(() => {
        method.reset()
    }, [show])
    return (
        <Modal title='Tambah Akun' show={show} close={close}>
            <Form submit={method.handleSubmit(submit)}>
                <InputForm title='Nama' method={method} methodName='name' />
                <SelectForm instanceId='select-grup-akun' title='Grup Akun' method={method} methodName='group_account' options={grupAkun} />
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
                    <InputForm title='Nama Grup Akun Label' method={method} methodName='group_account_name' />
                }
                {activityCode.includes(watchGroupAccount) && <SelectForm instanceId='select-detailOfActivity' title='Kegiatan' method={method} methodName='activity_id' options={detailOfActiviyOptions} />}
            </Form>
        </Modal>
    )
}

