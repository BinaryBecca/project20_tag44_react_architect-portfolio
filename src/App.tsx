import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Homepage from "./pages/homepage/Homepage"
import Layout from "./layout/Layout"
import Contacts from "./pages/contacts/Contacts"
import Gallery from "./pages/gallery/Gallery"
import Projects from "./pages/projects/Projects"
import Certifications from "./pages/certifications/Certifications"

interface AppProps {
  activatingDarkMode: boolean
}

function App({ activatingDarkMode }: AppProps) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage activatingDarkMode={activatingDarkMode} />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contacts" element={<Contacts activatingDarkMode={activatingDarkMode} />} />
        </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
