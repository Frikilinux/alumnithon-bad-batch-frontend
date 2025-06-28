import CaracteristicaSection from '../features/landing/Caracteristicas'
import Inicio from '../features/landing/Inicio'
import StatsSection from '../features/landing/Stats'
import FunctionSection from '../features/landing/Function'
import ChallengeSection from '../features/landing/Challenge'

import MentorshipSection from '../features/landing/MentorShip'
import TestimonySection from '../features/landing/Testimony'

const LandingPage: React.FC = () => {
  return (
    <>
      <Inicio />
      <StatsSection />
      <CaracteristicaSection />
      <FunctionSection />
      <ChallengeSection />
      <MentorshipSection />
      <TestimonySection />
    </>
  )
}

export default LandingPage
