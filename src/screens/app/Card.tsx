/* eslint-disable react-native/no-raw-text */
import {
    Badge,
    BadgeText,
    Box,
    Image,
    Text,
    VStack,
} from '@gluestack-ui/themed'
import { Pressable } from '@gluestack-ui/themed/build/components/Pressable/styled-components'
import React, { memo } from 'react'
import { GestureResponderEvent } from 'react-native'

type CardProps = {
    title: string
    onPressed?: (event: GestureResponderEvent) => void
}

const Card = memo(({ title, onPressed }: CardProps) => {
    return (
        <Pressable
            borderRadius="$2xl"
            height="$80"
            width="45%"
            bgColor="$amber100"
            onPress={onPressed}
            elevation={4}>
            <Box
                borderRadius="$2xl"
                backgroundColor="$white"
                flex={1}
                justifyContent="flex-start"
                pt={15}>
                <Image
                    height={150}
                    resizeMode="contain"
                    source={{
                        uri: 'https://www.cbcl.com.kh/wp-content/uploads/2022/08/Coke_VIS1_330ml-e1660726978654.png',
                    }}
                />
            </Box>
            <VStack
                px="$3"
                pt="$2"
                pb="$2"
                borderTopRightRadius="$xl"
                borderTopLeftRadius="$xl"
                borderBottomLeftRadius="$2xl"
                borderBottomRightRadius="$2xl"
                bgColor="$primary300"
                position="absolute"
                bottom={0}
                elevation={10}
                width="$full">
                <Text pb={'$2'} size="lg" color="white" fontWeight="$semibold">
                    {title}
                </Text>
                <Badge
                    bgColor="$white"
                    size="md"
                    borderRadius="$lg"
                    py="$0.5"
                    px="$2"
                    alignSelf="flex-start">
                    <BadgeText color="$black" fontWeight="$normal" size="sm">
                        Drinks
                    </BadgeText>
                </Badge>
                <Box height={10} />
                <Text size="md" color="$white">
                    <Text fontWeight="$semibold" color="$white">
                        {'KHR: '}
                    </Text>
                    2000 riel
                </Text>
                <Text size="md" color="white">
                    <Text fontWeight="$semibold" color="$white">
                        {'USD: '}
                    </Text>
                    0.5 $
                </Text>
            </VStack>
        </Pressable>
    )
})

Card.displayName = 'Card'

export default Card
