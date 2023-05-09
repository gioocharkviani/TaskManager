import {v4 as uuid} from 'uuid'


   const itemsFromBackend = [
    { id: uuid(), content: "First task" },
    { id: uuid(), content: "Second task" },
    { id: uuid(), content: "Third task" },
    { id: uuid(), content: "Fourth task" },
    { id: uuid(), content: "Fifth task" }
  ];
  
  export  const columnsFromBackend = {
      [uuid()]: {
          name: "Requested",
          color: '#9710ff' ,
          items: itemsFromBackend
        },
        [uuid()]: {
          name: "To do",
          color: '#1283ed' ,
          items: []
        },
        [uuid()]: {
          name: "In Progress",
          color: '#d75d0b' ,
          items: []
        },
        [uuid()]: {
          name: "Done",
          color: '#50e300' ,
          items: []
        }
  };