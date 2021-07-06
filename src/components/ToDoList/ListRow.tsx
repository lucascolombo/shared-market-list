import { FC } from 'react'
import { ListItem } from '@chakra-ui/react'

const ListRow: FC = ({ children }) => {
    return (
        <ListItem
            height="48px"
            bg="url('/paper.jpeg')"
            >
            {children}
        </ListItem>
    )
}

export default ListRow