import { useCallback } from 'react'
import { openPage } from '../../../../utils'
import './HeaderMenuItem.css'



export function HeaderMenuItem ({title, path}) {
    const itemClick = useCallback(
        () => openPage(path), 
        [path]
    );

    return (
        <div className="Item" onClick={itemClick}>
            {title}
        </div>
    )
}