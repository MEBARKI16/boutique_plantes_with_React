import '../styles/Banner.css'
import Recommendation from './Recommendation';
import logo from '../assets/logo.png'
function Banner()
{
    return (
    <div className="imj-banner">
        <div className='img-banner-row'>
        <img src={logo} alt="la maison jungle" className="img-logo"/>
        <h1 className='img-title'>la maison jungle</h1>
        </div>
        <Recommendation />
        </div>);
}
export default Banner;