import './NavBar.scss';
import JoinImage from './img/joinimage.png';
import LogInImage from './img/loginimage.png';

function NavBar(){
    return (
        <div className="NavBar">

            <div className="Logo"></div>

            <div className="Join">
                <img className="JoinImage" src={JoinImage}/>
                <div className="JoinText">JOIN</div>
            </div>

            <div className="LogIn">
                <img className="LogInImage" src={LogInImage}/>
                <div className="LogInText">LOGIN</div>
            </div>

    
            <div className="NavComponents">

                <div className="NavAboutUs">ABOUT US</div>

                <div className="NavStocks">STOCKS</div>

                <div className="NavPortfolio">PORTFOLIO</div>

                <div className="NavTrending">TRENDING</div>
      
                <div className="NavSearch">
                    <input className="NavSearchBar"/>
                    <div className="NavSearchIcon1"></div>
                    <div className="NavSearchIcon2"></div>
                </div>
        
            </div>
        </div>
    );
}

export default NavBar;