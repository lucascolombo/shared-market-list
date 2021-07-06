import { FC } from 'react'
import { Text } from '@chakra-ui/react'

import { ListItemType } from './types'
import CheckBoxIcon from './CheckBoxIcon'
import ListItemName from './ListItemName'
import RemoveButton from './RemoveButton'

const ListItem: FC<ListItemType> = ({ 
    children, 
    checked, 
    idItem, 
    onChangeChecked, 
    onRemoveItem,
}) => {
    return (
        <Text
            lineHeight="48px"
            fontFamily="handwriting"
            fontSize="2xl"
            paddingLeft={4}
            paddingRight={4}
            >
            <Text
                as="span"
                onClick={() => { onChangeChecked(idItem, !checked) }}
                >
                <CheckBoxIcon checked={checked} />

                <ListItemName checked={checked}>
                    {children}
                </ListItemName>
            </Text>

            <RemoveButton handleClick={() => { onRemoveItem(idItem) }} />
        </Text>
    )
}

export default ListItem
