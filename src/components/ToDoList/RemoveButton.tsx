import { FC } from 'react'
import { Text } from '@chakra-ui/react'

import { RemoveButtonType } from './types'

const RemoveButton: FC<RemoveButtonType> = ({ handleClick }) => {
    return (
        <Text 
            as="span" 
            cursor="pointer"
            fontSize="md"
            color="red"
            float="right"
            onClick={() => { handleClick() }}
            >
            x
        </Text>
    )
}

export default RemoveButton