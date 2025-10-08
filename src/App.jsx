import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import EventsPage from './pages/event-page'
import NotFound from './components/not-found'
import EventDetailsPage from './pages/event-details-page'
import EventMapPage from './pages/event-map-page'
function App() {
  return (
    <>
      <Header/>
      <main>
          <Routes>
            <Route path="/" element={<EventsPage/>}/>
            <Route path="/events" element={<EventsPage />}/>
            <Route path="/events/:id" element={<EventDetailsPage/>}>
              <Route path="map" element={<EventMapPage/>}/>
            </Route>
            <Route path="/venues"/>
            <Route path="/about"/>

            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
