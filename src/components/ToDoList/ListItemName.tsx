import { FC } from 'react'
import { Text } from '@chakra-ui/react'

import { ListItemNameType } from './types'

const ListItemName: FC<ListItemNameType> = ({ children, checked }) => {
    return (
        <Text 
            as="span"
            color={ checked ? 'gray.500' : 'black' }
            textDecoration={ checked ? 'line-through' : 'none' }
            > 
            {children}
        </Text>
    )
}

export default ListItemName