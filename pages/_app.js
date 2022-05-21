import { BulletinProvider } from '../Context'
// import '../styles/globals.css'
import Bullitens from './bullitens'
// import example from './example.scss'


function MyApp() {

  return (
    <BulletinProvider>
      <Bullitens />
    </BulletinProvider>

  )
}
export default MyApp
