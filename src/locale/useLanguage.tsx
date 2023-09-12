import { useAtom } from 'jotai'
import { storageAtom } from '../atom/Storage'
import defaultLanguage from './language'

export const useLanguage = () => {
    const [storage, _] = useAtom(storageAtom)
    return defaultLanguage[storage.language]
}
