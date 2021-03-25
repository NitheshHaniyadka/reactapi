import {cartItemType} from '../App'

import {Wrapper} from './Item.styles'

type Props={
    item:cartItemType
}


const Item: React.FC<Props>=({item})=>(
    <Wrapper>
        <img src={item.avatar} alt={item.avatar}/>
        <div>
            <p>{item.id}</p>
            <h3>{item.first_name}</h3>
            <h3>{item.first_name}</h3>
            <h3>{item.last_name}</h3>
            <p>{item.email}</p>
            
        </div>
    </Wrapper>
)

export default Item;