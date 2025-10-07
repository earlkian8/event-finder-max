import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import EventsPage from './pages/event-page'
function App() {
  return (
    <>
      <Header/>
      <main>
          <Routes>
            <Route path="/" element={<EventsPage/>}/>
            <Route path="/events" element={<EventsPage />}/>
            <Route path="/events/:id"/>
            <Route path="/events/:id/map"/>
            <Route path="/venues"/>
            <Route path="/about"/>
          </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
