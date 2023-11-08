import React, {useEffect, useState} from 'react'

function BackToTop() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',

        })
    }


  return (
    <div className=''>
        {
            backToTopButton && (
                <button className=' bg-orange-600 hover:bg-orange-700 rounded text-white fixed bottom-14 right-10 md:right-14 h-10 w-10 text-lg md:text-lg hover:text-xl md:hover:text-2xl' onClick={scrollUp} style={{ zIndex: 9999 }}>^</button>
            )
        }
    </div>
  )
}

export default BackToTop