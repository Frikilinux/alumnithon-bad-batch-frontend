import DashboardOverview from '../features/home/DashboardOverview'
import DashboardWidget from '../features/home/DashboardWidget'
import HeaderBanner from '../features/home/HeaderBanner'

const Home = () => {
  return (
    <section>
      <HeaderBanner />
      <DashboardWidget />
      <DashboardOverview />
    </section>
  )
}

export default Home
