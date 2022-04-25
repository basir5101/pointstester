import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import thePoint from "./Point";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Box from "@material-ui/core/Box";
import AdjustIcon from "@material-ui/icons/Adjust";

//-----------------------------------------------------------------------------------------------------------------Styles:

const useStyles = makeStyles(() => ({
  container: {
    margin: "auto",
    position: "absolute",
    alignContent: "align-stretch",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    broder: "solid red 4px",
  },
  box: {
    height: "4rem",
    width: "4rem",
    justifyContent: "center",
    alignItems: "center",
    //border: 'solid blue 1px',
    "&:hover": {
      boxShadow:
        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
      cursor: "pointer",
      borderRadius: "50%",
    },
  },
  BoxNumber: {
    visibility: "hidden",
  },
}));

//------------------------------------------------------------------------------------------------------------------------App:

export const PointsGrid = () => {
  //-----------------------------------------------------------------------------------------------------------Functions:
  const data = [...Array(162).keys()];
  const classes = useStyles();
  const [pointPlace, setPointPlace] = useState(data);

  const point = thePoint();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(pointPlace);

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPointPlace(items);
  };

  //------------------------------------------------------------------------------------------------------------Body:

  return (
    <div>
      <Box>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="pointsContainer">
            {(provided) => (
              <Box
                className={classes.container}
                display={"flex"}
                flexGrow={1}
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"center"}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {pointPlace.map((index) => {
                  return (
                    <Draggable
                      draggableId={`${index}`}
                      key={index}
                      index={index}
                      id={index}
                    >
                      {(provided) => (
                        <div
                          className={classes.box}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {point}
                          <p className={classes.boxNumber}>{index}</p>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </div>
  );
};
