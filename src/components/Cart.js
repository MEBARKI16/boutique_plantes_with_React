import '../styles/Cart.css'
function Cart()
{
    const monstera = 8;
    const lierre = 10;
    const bouquet = 15;
     return (<div className="img-cart">
        <h2>Panier</h2>
        <ul>
            <li>monstera : {monstera}$</li>
            <li>lierre : {lierre}$</li>
            <li>bouquet de fleurs : {bouquet}$</li>
            </ul>
            <p>total : {monstera+lierre+bouquet}$</p>
            </div>
            );
}
export default Cart;