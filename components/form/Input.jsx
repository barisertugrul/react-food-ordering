import React from 'react'

const Input = (props) => {
   const {type, errorMessage, touched, value, placeholder, isrequired, ...inputProps} = props
    const _isRequired = isrequired ? "required" : ""
    return (
    <div className='w-full'>
        <label className='relative block cursor-text w-full'>
            <input type={type}
            {...inputProps}
            value={value}
            className={`h-14 w-full border  outline-none px-4 peer ${
                type !== "datetime-local" && "pt-2"
            } 
            ${touched && errorMessage ? "border-danger" : "border-primary"}
            ${value ? "has-value" : "" }
            `}
            required={_isRequired}
           />
            {type !== "datetime-local" && <span className='absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs  transition-all peer-[&.has-value]:text-xs peer-[&.has-value]:h-7'>{placeholder}</span>}
        </label>
            {touched && errorMessage && 
                <span className='text-danger text-xs'>{errorMessage}</span>
            }
    </div>
  )
}

export default Input