import './style.css'
import {Header} from './components/Header'
import {Body} from './components/Body'
import {Footer} from './components/Footer'

export function App(){
  return(
  
      <section className='secao'>
         <div className='container'>
          
          
           <Header />
           <Body />
           <Footer />
          
          </div>

        </section>
   
  )
}