import React from 'react'
import Header from './layout/navbar/Header'
import Footer from './layout/footer/Footer'

function Container({ children }: any) {
   return (
      <div className='m-0 p-0 bg-zinc-100'>
         <div>
            <Header />
         </div>
         <div className="flex justify-center w-full items-center">
            {children}
         </div>
         <div>
            <Footer />
         </div>
      </div>

   )
}

export default Container