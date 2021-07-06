import { FC } from 'react'
import { Text } from '@chakra-ui/react'

import { CheckBoxType } from './types'

const CheckBoxIcon: FC<CheckBoxType> = ({ checked }) => {
    return (
        <Text 
            as="span" 
            cursor="pointer"
            fontSize="md"
            paddingRight="3"
            >
            {checked ? '[x]' : '[ ]'}
        </Text>
    )
}

export default CheckBoxIcon