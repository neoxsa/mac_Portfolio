import { Dock, Home, Navbar, Welcome } from '#components/index'
import { Contact, Finder, ImageWindowContent, Photos, Resume, Safari, Terminal, Text } from '#windows';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable);


function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWindowContent />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App
