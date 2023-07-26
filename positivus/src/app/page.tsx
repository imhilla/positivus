import Header from './Components/Header'
import { space_grotesk } from '../../styles/fonts'

export default function Home() {
  return (
    <main style={space_grotesk.style} className="flex min-h-screen min-w-screen w-full flex-col items-center justify-between">
      <Header />
      this is a text
    </main>
  )
}
