import React from "react";
import Tag from "./Tag";

function Tags ({student}, {deleteTag}) {

    if (student.tags.length) {
        const tags = student.tags.map((item) => {
            return (
               <Tag 
                   key={student.id} 
                   tag={item} 
                   student={student} 
                   deleteMyTag={deleteTag}
                />
            );
        });
        return (
        
        <div >Tags: <br /><br />{tags}</div>
        
        )
    } else {
        return null;
    }
}

export default Tags;
