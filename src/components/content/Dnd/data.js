import {v4 as uuid} from 'uuid'


   const itemsFromBackend = [
    { id: uuid(), content: {title: "First task" , descirption : 'Some description'} },
    { id: uuid(), content: {title: "second task" , descirption : 'Some description'} },
    { id: uuid(), content: {title: "third task" , descirption : 'Some description'} },
  ];
  
  export  const columnsFromBackend = {
      [uuid()]: {
          name: "To Do",
          color: '#9710ff' ,
          items: itemsFromBackend
        },
        [uuid()]: {
          name: "In Progress",
          color: '#1283ed' ,
          items: []
        },
        [uuid()]: {
          name: "Review",
          color: '#d75d0b' ,
          items: []
        },
        [uuid()]: {
          name: "Done",
          color: '#50e300' ,
          items: []
        } 
        ,
        [uuid()]: {
          name: "Blocked",
          color: 'red' ,
          items: []
        } 
  };