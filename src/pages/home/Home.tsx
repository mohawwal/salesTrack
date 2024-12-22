import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <p>Home</p>
        <Button><Link to='/dashboard'>
        start sales-Detal</Link></Button>
    </div>
  )
}
