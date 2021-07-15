import { FC, useState, useEffect } from 'react'
import { List } from '@chakra-ui/react'
import { setCookie, parseCookies } from 'nookies'

import { ItemListType, ItemType } from './types'
import ListRow from './ListRow'
import ListItem from './ListItem'
import Form from '../Form'

const ToDoList: FC = () => {
    const [items, setItems] = useState<ItemType[]>([])

    const handleAddItem = ( data: ItemListType ): void =>  {
        if (data.item !== '') {
            const newItem = {
                value: data.item,
                checked: false,
            }   

            updateList([ ...[ newItem ], ...items ])
        }
    }

    const handleChangeCheckItem = ( itemId: number, checked: boolean ): void => {
        const newItems = items.map((item, i) => {
            if (i === itemId)
                return { value: item.value, checked: checked }
            
            return item
        })

        updateList(newItems)
    }

    const handleRemoveItem = (itemId: number): void => {
        const newItems: ItemType[] = items.filter((item, i) => {
            if (i !== itemId) 
                return item
        })

        updateList(newItems)
    }

    const updateList = (newList: ItemType[]): void => {
        setItems(newList)
        setCookie(undefined, '_MY_MARKETLIST_', JSON.stringify(newList), {
            maxAge: 60 * 60 * 24 * 30 // 30 days
        })
    }

    useEffect(() => {
        const { '_MY_MARKETLIST_':myList } = parseCookies()

        myList !== undefined && setItems(JSON.parse(myList))
    }, [])

    return (
        <List w="100%">
            <ListRow>
                <Form onSubmitItem={handleAddItem} />
            </ListRow>

            {items.map((item, i) =>
                <ListRow key={i}>
                    <ListItem 
                        idItem={i}
                        checked={item.checked}
                        onChangeChecked={handleChangeCheckItem}
                        onRemoveItem={handleRemoveItem}
                        >
                        {item.value}
                    </ListItem>
                </ListRow>
            )}
        </List>
    )
}

export default ToDoList
