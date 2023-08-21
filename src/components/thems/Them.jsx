import React from 'react'
import { Box, Flex, useColorMode } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

const Them = () => {
    return (
        <Flex>
            <Box>
                <ThemeSelector/>
            </Box>
        </Flex>
    )
}

const ThemeSelector = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return(
        <Box height={10}>
            <IconButton icon={colorMode === 'light'?<FaMoon/>:<FiSun/>} onClick={toggleColorMode} height={7}/>
        </Box>
    )
}

export default Them