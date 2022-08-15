import React, { FC, useState, Component } from 'react';
// import { observer } from "mobx-react";
import s from './index.module.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Index: FC = () => {
  const [itemData, setItemData] = useState<Array<any>>([...getItems(11)]);

  function getItems(count: number) {
    return Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k + 1}`,
      content: `this is content ${k + 1}`
    }));
  }

  // resort
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);
    return result;
  };

  const grid = 2;

  // Style
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    background: isDragging ? 'lightgreen' : '#ffffff',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const getListStyle = () => ({
    background: 'black',
    padding: grid,
    width: 500
  });

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(itemData, result.source.index, result.destination.index);

    setItemData(items);
  };
  return (
    <div className={s.ftable}>
      <p style={{ fontWeight: 600, textAlign: 'left' }}>⑤、ドラッグ並び替え</p>

      <p style={{ textAlign: 'left' }}>並び順変更</p>
      <div className={s.tableStyle}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle()}>
                {itemData.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Index;
