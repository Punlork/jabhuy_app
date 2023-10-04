import React from 'react'
import { AddIcon, Box, Fab, FabIcon, FlatList } from '@gluestack-ui/themed'
import Card from './Card'
import styles from '../../styles/styleGuide'
import HomeHeader from '../../components/HomeHeader'
import { RemoveIcon } from '@gluestack-ui/themed'

export function HomeScreen() {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <HomeHeader />

            {/* <Fab size="lg">
                <FabIcon as={AddIcon} />
            </Fab> */}
            <Box height={35} />
            <FlatList
                numColumns={2}
                data={new Array(10)}
                ItemSeparatorComponent={() => <Box height={20} />}
                columnWrapperStyle={[styles.justifyBetween, styles.px8]}
                contentContainerStyle={[styles.pb20]}
                renderItem={() => {
                    return <Card title="Coca Cola - Can" />
                }}
            />
        </Box>
    )
}
