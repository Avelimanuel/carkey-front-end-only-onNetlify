import { carsWeworkOn } from '../assets/constants'
import OurCars from '../components/OurCars'
import { motion } from 'framer-motion'

const CarsWeWorkOn = () => {
  return (
    <motion.section initial={{ x: 300, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.2, x: { type: "spring", stiffness: 10 } }} className='flex flex-wrap justify-center items-center gap-9'>
    {carsWeworkOn.map((car)=>(
      <OurCars index={car.label} {...car}/>
    ))}

  </motion.section>
  )
}

export default CarsWeWorkOn
