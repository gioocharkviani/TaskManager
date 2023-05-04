import React, {useState, useRef, useEffect} from 'react'

import StatusBar from './StatusBar';
import TaskCard from './TaskCard';

function DragNDrop({data}) {

    const [list, setList] = useState(data); 
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        setList(data);
    }, [setList, data])

    const dragItem = useRef();
    const dragItemNode = useRef();
    
    const handletDragStart = (e, item) => {
        console.log('Starting to drag', item)

        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true); 
        },0)       
    }
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem)
        if (dragItemNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item')
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI,1)[0])
                dragItem.current = targetItem;
                localStorage.setItem('List', JSON.stringify(newList));
                return newList
            })
        }
    }
    const handleDragEnd = (e) => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
        dragItemNode.current = null;
    }
    const getStyles = (item) => {
        if (dragItem.current.grpI === item.grpI && dragItem.current.itemI === item.itemI) {
            return "CurrentTask"
        }
        return "dragging-task"
    }

    if (list) {
        return (                
            <>
            {list.map((grp, grpI) => (
              <StatusBar 
                key={grp.title} 
                onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null} 
                style="dnd-group"
                title={grp.title}
                color={grp.color}
                >

                {grp.items.map((item, itemI) => (
                  <TaskCard
                  title={item.title}
                  key={item} 
                  desc={item.description} 
                  onDragStart={(e) => handletDragStart(e, {grpI, itemI})} 
                  onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null} 
                  style={dragging?getStyles({grpI, itemI}):"dragging-task"} />
                ))}
              </StatusBar>
            ))}
            </>
        )
    } else { return null}

}

export default DragNDrop;