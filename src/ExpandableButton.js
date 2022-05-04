import React from 'react'


const ExpandableButton = ({onDisplay, showGrades}) => {
    return(
        <button
            className="expand-button"
            onClick={onDisplay}
        >
            {showGrades ? '-' : '+' }
        </button>
    )
}
export default ExpandableButton
