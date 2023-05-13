import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { columnsFromBackend } from "./data";

import StatusBar from "./StatusBar";
import TaskCard from './TaskCard'



function DndTasks() {

  const [columns, setColumns] = useState(columnsFromBackend);

  console.log(columns);


//Search Filter  
  const [searchQuery, setSearchQuery] = useState("first");
  const filteredItems = columnsFromBackend[Object.keys(columnsFromBackend)[0]].items.filter(
    (item) => item.content.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
//Search Filter

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  return (
    <div className="flex  gap-[20px] w-full  overflow-x-auto" >
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div key={columnId}  className="bg-[#d8e3f6] flex flex-col">
            <StatusBar title={column.name} color={column.color}/>
              <div className="m-[8px] ">
                <Droppable droppableId={columnId} key={columnId} >
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{background: snapshot.isDraggingOver ? "#9ab6e8": "#d8e3f6" }}
                        className="flex flex-col min-w-[250px]  min-h-[100px]"
                      >
                        
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index} >
                              {(provided, snapshot) => {
                      
                                return (
                                
                                  <div className="mb-[10px]" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                    <TaskCard desc={item.content.descirption} title={item.content.title}/>
                                  </div>

                                );

                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default DndTasks;
