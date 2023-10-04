import {
    Box,
    Input,
    InputIcon,
    Text,
    InputField,
    SearchIcon,
    HStack,
    Icon,
    ArrowDownIcon,
} from '@gluestack-ui/themed'
import React from 'react'

const HomeHeader = () => (
    <Box
        bgColor="$primary0"
        height="$20"
        width="$full"
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        px={20}
        pt={20}>
        <Text size="lg" color="$white" fontWeight="$bold">
            Punlork Jabhuy
        </Text>

        <HStack
            position="absolute"
            bottom={-20}
            left={20}
            width="$full"
            justifyContent="center">
            <Input
                bgColor="$white"
                alignItems="center"
                size="md"
                width="$64"
                borderRadius={15}
                variant="rounded"
                pl={10}>
                <InputIcon as={SearchIcon} />
                <InputField placeholder="Search" />
            </Input>
            <Box width={10} />
            <Box
                bgColor="$white"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
                <Icon
                    as={ArrowDownIcon}
                    w="$6"
                    h="$6"
                    m="$2"
                    color="$primary0"
                />
            </Box>
            <Box width={10} />
            <Box
                bgColor="$white"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
                <Icon
                    as={ArrowDownIcon}
                    w="$6"
                    h="$6"
                    m="$2"
                    color="$primary0"
                />
            </Box>
        </HStack>
    </Box>
)

export default HomeHeader
