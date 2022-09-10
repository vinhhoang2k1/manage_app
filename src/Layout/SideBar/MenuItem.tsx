import { useRef, useState } from 'react'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { TypeMenuSidebar } from "../../Models/sidebar.models"
type Props = {
    item: TypeMenuSidebar
}

const Submenu = ({ item }: Props) => {
    const refListSubMenu = useRef<HTMLUListElement>(null)
    const [active, setActive] = useState(false)
    const handleclick = () => {
        setActive(pre => !pre)
    }
    return (
        <li className='bold' >
            <div className={`content ${active ? 'active' : ''}`} onClick={handleclick} >
                <p className='title'>{item.title}</p>
                <ExpandMoreRoundedIcon />
            </div>
            <div className={`wrap-sub-menu ${active ? 'active' : ''}`}>
                <ul ref={refListSubMenu} className={`list_sub-menu `} >
                    {item.children.map((item: any) => (
                        <li className='item_sub-menu' key={item.id} style={{}}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </li >
    )
}

export default Submenu


