import React from 'react'
import { useAtom } from 'jotai'
import { storageAtom } from '../../atom/Storage'
import { useNavigation } from '@react-navigation/native'
import {
    AddIcon,
    Box,
    Button,
    ButtonIcon,
    ButtonText,
    Text,
} from '@gluestack-ui/themed'
import { useLanguage } from '../../locale/useLanguage'

export function HomeScreen() {
    const [storage, setStorage] = useAtom(storageAtom)
    const language = useLanguage()
    const navigation = useNavigation()

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text>{`Current Language: ${language.home}`}</Text>
            <Box height={10} />
            <Button
                onPress={() => {
                    setStorage({
                        ...storage,
                        language: storage.language == 'en' ? 'kh' : 'en',
                    })
                }}
                action="secondary">
                <ButtonText>Change Langauge</ButtonText>
            </Button>
        </Box>
    )
}
