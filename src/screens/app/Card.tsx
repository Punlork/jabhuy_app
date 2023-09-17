import { Box, Image, Text, VStack } from '@gluestack-ui/themed'
import React from 'react'

const Card = () => {
    return (
        <Box borderColor="$primary100" borderRadius="$lg" borderWidth="$1">
            <Box p={'$4'}>
                <Image
                    h={150}
                    resizeMode="contain"
                    source={{
                        uri: 'https://www.cbcl.com.kh/wp-content/uploads/2022/08/Coke_VIS1_330ml-e1660726978654.png',
                    }}
                />
            </Box>
            <VStack
                px="$6"
                pt="$4"
                pb="$4"
                borderRadius="$lg"
                bgColor="$primary0">
                <Text pb={'$2'} size="xl" color="white" fontWeight="$bold">
                    Coca Cola - Can
                </Text>
                <Text size="md" color="white">
                    KHR: 2000 riel
                </Text>
                <Text size="md" color="white">
                    USD: 0.5 $
                </Text>
            </VStack>
        </Box>
    )
}

export default Card
