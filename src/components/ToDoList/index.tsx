import { FC, useState, useEffect } from 'react'
import { List, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { setCookie, parseCookies } from 'nookies'

import { ItemListType, ItemType } from './types'
import ListRow from './ListRow'
import ListItem from './ListItem'

const ToDoList: FC = () => {
    const [items, setItems] = useState<ItemType[]>([])
    const { register, handleSubmit, reset, setFocus } = useForm()

    const handleAddItem = ( data: ItemListType ): void =>  {
        if (data.item !== '') {
            const newItem = {
                value: data.item,
                checked: false,
            }   

            updateList([ ...[ newItem ], ...items ])
            reset({ item: '' })
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
        setFocus("item")
    }, [setFocus])

    useEffect(() => {
        const { '_MY_MARKETLIST_':myList } = parseCookies()

        myList !== undefined && setItems(JSON.parse(myList))
    }, [])

    return (
        <List w="100%">
            <ListRow>
                <form onSubmit={handleSubmit(handleAddItem)}>
                    <InputGroup>
                        <Input 
                            {...register('item')}
                            placeholder="...Add new item" 
                            name="item"
                            size="md" 
                            border="0" 
                            outline="none"
                            fontFamily="handwriting"
                            fontSize="2xl"
                            autoComplete="off"
                            height="48px"
                            borderRadius="unset"
                            focusBorderColor="gray.600" />

                        <InputRightElement
                            height="48px"
                            paddingRight={2}>
                            <Button 
                                variant="ghost" 
                                type="submit" 
                                fontFamily="handwriting"
                                colorScheme="gray.600"
                                _hover={{ bg: "#e8e8e8" }}>
                                {`>`}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </form>
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
