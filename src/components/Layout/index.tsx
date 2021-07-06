import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

const Layout: FC = ({ children }) => {
    return (
        <Flex 
            as="main"
            height="100vh"
            justifyContent="center"
            alignItems="flex-start"
            bg="url('/kitchen.jpeg') no-repeat"
            bgSize="cover"
            >
            {children}
        </Flex>
    )
}

export default Layout
