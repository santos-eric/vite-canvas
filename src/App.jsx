// import {PrimaryButton} from '@workday/canvas-kit-react/button';
import { gsap } from 'gsap'
import imagesLoaded from 'imagesloaded'
import photo1 from '../assets/aguachiles.jpg'
import photo2 from '../assets/austinDowntown.jpg'
import photo3 from '../assets/bal-downtown.jpg'
import photo4 from '../assets/aguachiles.jpg'
import photo5 from '../assets/aguachiles.jpg'

function App() {

  const content = document.querySelector('section')

  // get all images
  const imgLoad = imagesLoaded(content)

  // images loaded, loader disappears
  imgLoad.on('done', (instance) => {
    gsap.to('.blinder', {
      scaleY: 0,
      stagger: .03,
      ease: 'power3.out'
    })
  })


  return (
    <>
      <div className="loader">
        <div className="blinder-container">
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
          <div className="blinder"></div>
        </div>
      </div>

      <div className="section">
        <img src='../assets/aguachiles.jpg' alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo5} alt="" />
      </div>
    </>
  )
}

export default App
