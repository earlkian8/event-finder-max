
import { Routes, Route } from 'react-router-dom'
import EventsPage from './pages/event-page'
import NotFound from './components/not-found'
import EventDetailsPage from './pages/event-details-page'
import EventMapPage from './pages/event-map-page'
import VenuePage from './pages/venue-page'
import AboutPage from './pages/about-page'
import Layout from './layout/layout'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<EventsPage/>}/>
          <Route path="/events" element={<EventsPage />}/>
          <Route path="/events/:id" element={<EventDetailsPage/>}>
            <Route path="map" element={<EventMapPage/>}/>
          </Route>
          <Route path="/venues" element={<VenuePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
