import React from 'react'

function StatusBarVendorsRegistration({bar1Color, bar2Color, bar3Color, bar4Color}) {
  return (
    <div>
        {/* Stages tracking */}
        <div className='flex w-2/3 mx-auto mt-16 justify-center box-border'>
            <div className={`border mr-1 md:ml-36 md:mr-5 w-full border-${bar1Color} border-t-4`}/>
            <div className={`border mx-1 w-full border-${bar2Color} border-t-4`}/>
            <div className={`border mx-1 w-full border-${bar3Color} border-t-4`}/>
            <div className={`border ml-1 md:mr-36 w-full  border-${bar4Color} border-t-4`}/>
        </div>
    </div>
  )
}

export default StatusBarVendorsRegistration