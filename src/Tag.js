import React from 'react'

function Tag({tag, student, deleteTag}) {

    // function that handles delete a tag when click on the close icon
    const handleTagDelete = (e) => {
        deleteTag(tag, student);
    }

    return (
        <ul id="tags" >
        <li className="tag">
        <span className="tags" onClick={() => handleTagDelete()}>
             {tag}</span>
             <span className='tag-close-icon'>X</span>
        
        </li>
        </ul>
    )
}

export default Tag;
