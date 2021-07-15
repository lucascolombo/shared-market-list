import { FC, useEffect } from 'react'
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { FormType, DataItemType } from './types'

const Form: FC<FormType> = ({ onSubmitItem }) => {
    const { register, handleSubmit, setFocus, reset } = useForm()

    const onHandleSubmit = (data: DataItemType): void => {
        const { item } = data

        if (item !== '') {
            onSubmitItem(item)
            reset({ item: '' })
        }
    }

    useEffect(() => {
        setFocus("item")
    }, [setFocus])

    return (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
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
                    focusBorderColor="gray.600"
                    textTransform="capitalize" />

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
    );
}

export default Form