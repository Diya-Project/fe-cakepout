import { getJournalByUuid, getJournalByYear } from "@/requests/journal";
import { deleteJournalReferenceNumber, getAllJournalReferenceNumber, postJorunalReferenceNumber, updateJournalReferenceNumber } from "@/requests/journalReferenceNumber";
import { JournalReferenceNumberAttributes } from "@/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetAllJournalReferenceNumber() {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_all_journal_reference_number'],
        queryFn: () => getAllJournalReferenceNumber(),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}

export function useGetJournalReferenceNumberByUuid(uuid: string) {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_journal_reference_number_by_uuid'],
        queryFn: () => getJournalByUuid(uuid),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}

export function useGetJournalReferenceNumberByYear(year: string) {
    const journalReferenceNumber = useQuery({
        queryKey: ['get_journal_reference_number_by_year'],
        queryFn: () => getJournalByYear(year),
    })
    useEffect(() => {
        journalReferenceNumber.refetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return journalReferenceNumber
}

export function useAddJournalReferenceNumber() {
    const journalReferenceNumber = useMutation({
        mutationKey: ['post_journal_reference_number'],
        mutationFn: (e: Omit<JournalReferenceNumberAttributes, 'uuid'>) => postJorunalReferenceNumber(e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}

export function useUpdateJournalReferenceNumber() {
    const journalReferenceNumber = useMutation({
        mutationKey: ['update_journal_reference_number'],
        mutationFn: (e: { uuid: string, data: Omit<JournalReferenceNumberAttributes, 'uuid'> }) => updateJournalReferenceNumber(e.uuid,e.data),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}

export function useDeleteJournalReferenceNumber() {
    const journalReferenceNumber = useMutation({
        mutationKey: ['delete_journal_reference_number'],
        mutationFn: (e:string) => deleteJournalReferenceNumber(e),
        onSuccess: (e) => {
            return e
        },
        onError: (e) => {
            return e
        }
    })
    return journalReferenceNumber
}
