import { ItemListType } from '../ToDoList/types'

export interface FormType {
    onSubmitItem: (data: ItemListType) => void,
}