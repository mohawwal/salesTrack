import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"

const Products = () => {
  return (
    <div>
        <Button><Link to='/addProduct'>
          add a product
        </Link></Button>
        <div>
          List of categories
        </div>
    </div>
  )
}

export default Products