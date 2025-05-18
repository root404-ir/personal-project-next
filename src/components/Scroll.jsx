import { motion, useScroll } from 'framer-motion'
const Scroll = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div style={{ scaleX: scrollYProgress, backgroundColor: 'green', height: '10px', position: 'fixed', bottom: 0, left: 0, right: 0 }} />
    )
}

export default Scroll