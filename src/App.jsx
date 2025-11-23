import { Dock, Navbar, Welcome } from '#components/index'

/**
 * Root application component that renders the main layout.
 *
 * Renders the top navigation, welcome section, and dock inside a <main> element.
 * @returns {JSX.Element} The application's main JSX tree containing <Navbar />, <Welcome />, and <Dock />.
 */
function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  )
}

export default App