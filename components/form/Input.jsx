import React from 'react'

const Input = (props) => {
   const {type, placeholder, isrequired, ...inputProps} = props
    const _isRequired = isrequired ? "required" : ""
  return (
    <div className='w-full'>
        <label className='relative block cursor-text w-full'>
            <input type={type} {...inputProps} className={`h-14 w-full border border-primary outline-none px-4 peer ${
                type !== "datetime-local" && "pt-2"
            }`}required={_isRequired} />
            {type !== "datetime-local" && <span className='absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs peer-empty:text-sm peer-empty:h-14 transition-all'>{placeholder}</span>}
        </label>
    </div>
  )
}

export default Input