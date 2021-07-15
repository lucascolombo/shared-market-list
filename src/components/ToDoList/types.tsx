export interface ItemType {
    value: string
    checked: boolean
}

export interface ListItemType {
    checked: boolean
    idItem: number
    onChangeChecked: ( itemId: number, checked: boolean ) => void
    onRemoveItem: ( itemId: number ) => void
}

export interface CheckBoxType {
    checked: boolean
}

export interface ListItemNameType {
    checked: boolean
}

export interface RemoveButtonType {
    handleClick: () => void
}