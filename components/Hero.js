import Image from 'next/image';
import bg from '../assets/bg-main.png'
import styles from '../components/Hero.module.css'

const Hero = () => {
  return (
    <div>
      <Image className={styles.heroBg} src={bg} alt='background' priority />
    </div>
  )
}

export default Hero
