import { FC } from 'react'
import { Flex } from '@chakra-ui/react'

const Paper: FC = ({children}) => {
    return (
        <Flex
            minHeight="288px"
            maxHeight="85vh"
            w={['300px', '480px']}
            bgColor="white"
            bg="url('/paper.jpeg')"
            boxShadow="0 0 25px 0 #999"
            marginTop={16}
            overflowY="auto"
            >
            {children}
        </Flex>
    )
  }
  
export default Paper
