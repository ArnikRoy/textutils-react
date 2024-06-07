import React from 'react'

function Alert(props) {
    //function to capitalize the first char of an word
    const captitalize = (word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
            <strong>{captitalize(props.alert.type)}</strong> : {props.alert.msg}
            

            {/* close the alert section */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>   */}
        </div>

    )
}

export default Alert
