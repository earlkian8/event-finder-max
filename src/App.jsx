import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import EventsPage from './pages/event-page'
import NotFound from './components/not-found'
import EventDetailsPage from './pages/event-details-page'
import VenuePage from './pages/venue-page'
import AboutPage from './pages/about-page'
function App() {
  return (
    <>
      <Header/>
      <main>
          <Routes>
            <Route path="/" element={<EventsPage/>}/>
            <Route path="/events" element={<EventsPage />}/>
            <Route path="/events/:id" element={<EventDetailsPage/>}>
              <Route path="map"/>
            </Route>
            <Route path="/venues" element={<VenuePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>

            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
