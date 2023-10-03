import React from 'react'
import { AddIcon, Box, Fab, FabIcon, FlatList } from '@gluestack-ui/themed'
import Card from './Card'
import styles from '../../styles/styleGuide'

export function HomeScreen() {
    return (
        <Box flex={1} justifyContent="center" alignItems="center" py={20}>
            {/* <Fab size="lg">
                <FabIcon as={AddIcon} />
            </Fab> */}
            <FlatList
                numColumns={2}
                data={new Array(10)}
                ItemSeparatorComponent={() => <Box height={20} />}
                columnWrapperStyle={[styles.justifyBetween]}
                renderItem={() => {
                    return <Card title="Coca Cola - Can" />
                }}
            />
        </Box>
    )
}
