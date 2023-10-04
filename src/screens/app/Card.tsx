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
            height="$72"
            width="48%"
            bgColor="$primary0"
            onPress={onPressed}
            elevation={2}
            shadowRadius="$2">
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
                <Badge
                    bgColor="$primary0"
                    size="md"
                    borderTopRightRadius="$xs"
                    borderBottomRightRadius="$xs"
                    py="$0.5"
                    top={20}
                    position="absolute"
                    alignSelf="flex-start">
                    <BadgeText color="$white" fontWeight="$normal" size="sm">
                        Drinks
                    </BadgeText>
                </Badge>
            </Box>
            <VStack
                px="$3"
                pt="$2"
                pb="$2"
                borderTopRightRadius="$xl"
                borderTopLeftRadius="$xl"
                borderBottomLeftRadius="$2xl"
                borderBottomRightRadius="$2xl"
                bgColor="$white"
                position="absolute"
                bottom={0}
                elevation={4}
                width="$full">
                <Text pb={'$2'} size="lg" color="$black" fontWeight="$semibold">
                    {title}
                </Text>

                <Box height={2} />
                <Text size="md" color="$black">
                    KHR : 2000 riel
                </Text>
                <Text size="md" color="$black">
                    USD : 0.5 $
                </Text>
            </VStack>
        </Pressable>
    )
})

Card.displayName = 'Card'

export default Card
