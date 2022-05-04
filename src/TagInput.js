import React, { useState } from "react";

function TagInput({student, addTag}) {

  const [tagInput, setTagInput] = useState("");
// Add a tag from tag input when click on enter key
  function handleTagSubmit(e) {
      e.preventDefault();
      if (tagInput.trim().length) {
         addTag(tagInput, student);
         setTagInput("");
      }
  }
// Handle the tag input while taping a new tag
  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  }
  
  return (
   
     <form onSubmit={(e) => handleTagSubmit(e)}>
          <input
              className="tagInput"
              placeholder="Add tag"
              type="text"
              value={tagInput}
              onChange={(e) => handleTagInput(e)}
          />
              
      </form>
    
    );
  }

export default TagInput;