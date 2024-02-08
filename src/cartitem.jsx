import PropTypes from 'prop-types'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import './App.css'
import { useGlobalContext } from './context'
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div className='div1'>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className='div2'>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => increase(id)}>
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => decrease(id)}>
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  )
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default CartItem
