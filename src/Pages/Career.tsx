import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import LeftAboutUs from '../Components/LeftAboutUs'
import RightAboutUs from '../Components/RightAboutUs'
import Footer from '../Components/Footer'

const Career = () => {
  return (
    <>
        <Header width='full' active='Career' />
        <Carousel images={['logo.png','logo_.png','welcome.jpg']} />
        <LeftAboutUs />
        <RightAboutUs />
        <LeftAboutUs />
        <RightAboutUs />
        <Footer />
    </>
  )
}

export default Career