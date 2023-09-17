import React from 'react'
import { useAtom } from 'jotai'
import { storageAtom } from '../../atom/Storage'
import { Box, Button, Text } from '@gluestack-ui/themed'
import { useLanguage } from '../../locale/useLanguage'
import Card from './Card'

export function HomeScreen() {
    const [storage, setStorage] = useAtom(storageAtom)
    const language = useLanguage()

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
                <Text>Change</Text>
            </Button>
            <Card></Card>
        </Box>
    )
}
