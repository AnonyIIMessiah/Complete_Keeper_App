import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  const [x, setx] = React.useState(false);
  function changeApp() {
    setx(true);
  }
  function changeApp2() {
    setx(false);
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {x ? (
          <div>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
            <textarea
              onMouseOut={changeApp2}
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
          </div>
        ) : (
          <textarea
            onMouseOver={changeApp}
            onMouseOut={changeApp2}
            onClick={changeApp}
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="1"
          />
        )}
        <Zoom in={x}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
