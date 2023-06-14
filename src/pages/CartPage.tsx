import CartView from '../components/cart/CartView';

import useFetchCart from '../hooks/useFetchCart';

export default function CartPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <div>
      <h2>장바구니</h2>
      {/* 2. 장바구니 목록 보여주기 */}
      <CartView cart={cart} />
    </div>
  );
}
