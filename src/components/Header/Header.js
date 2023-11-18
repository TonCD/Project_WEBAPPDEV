
import './Header.scss'
import { useState } from "react";
import Logo from "../../assets/logo.png";

function Cart(props) {
    return (
        <>
            <button
                variant="outline-secondary"
                size="sm"
                className="d-flex align-items-center pt-2 pb-2 fs-5 border rounded p-2"
                style={{ backgroundColor: "transparent", color: 'white' }}
            >
                <i class="bi bi-cart me-3"></i>
                Cart
                <span className="ms-3 text-center" style={{
                    width: "20px",
                    height: "25px",
                    borderRadius: "10px",
                    background: "yellow",
                    color: "#000",
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "25px",
                }}>{props.value}</span>
            </button>
        </>
    );
}
const BUTTONSTYLE = {
    width: "fit-content",
    padding: "0",
    minWidth: "0",
};

const TIPS = [
    { title: "Cheap Game Start account" },
    { title: "GearUp Booster reduces lag when playing games" },
    { title: "Make money on Divine Shop" },
];

const TUTORIALS = [
    {
        title: "Shopping guide",
        icon: "📖",
    },
    {
        title: "Customer incentives",
        icon: "⚙️",
    },
    {
        title: "Contact Info",
        icon: "	📞",
    },
];

const Header = (props) => {
    const [Inf, setInf] = useState(0);

    const NextHandle = () => {
        const numShow = Inf + 1 > TIPS.length - 1 ? 0 : Inf + 1;
        return setInf(numShow);
    };

    const BackHandle = () => {
        const numShow = Inf - 1 < 0 ? TIPS.length - 1 : Inf - 1;
        return setInf(numShow);
    };
    return (
        <div className='header' style={{
            background: "url(https://divineshop.vn/static/0de2668c294edf9d5fd8a8647b2c65b6.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderBottom: "1px solid #cccccc7a",
            color: 'white',
        }}>
            <div className='container'>
                <div className='button d-flex'>
                    <button type="button" className="btn" style={BUTTONSTYLE} onClick={BackHandle}><i className="bi bi-chevron-double-left text"></i></button>
                    <button type="button" className="btn" style={BUTTONSTYLE} onClick={NextHandle}><i className="bi bi-chevron-double-right text"></i></button>
                    <div className='d-flex align-items-center'>
                        {TIPS[Inf].title}
                    </div>
                </div>
                <div>
                    {TUTORIALS &&
                        TUTORIALS.map((inf) => {
                            return (
                                <button type="button" className="btn text" key={inf.title}>
                                    <div className='d-flex'>
                                        <div className='icon'> {inf.icon}</div>
                                        {inf.title}
                                    </div>
                                </button>
                            );
                        })}
                </div>
            </div>
            <div
                className="py-3"
                style={{
                    borderBottom: "1px solid #ccc",
                }}
            >
                <div className="container justify-content-around justify-content-xl-between" style={{ height: "100px" }}>
                    {/* Logo */}
                    <div className="d-none d-xl-block d- col-4">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "400px" }}
                        />
                    </div>
                    {/* NAV ở đây */}

                    {/* Search Field */}
                    <div className="col-4 mx-3">
                        <div className="input-group">
                            <input type="search" className="form-control" style={{
                                backgroundColor: 'transparent',
                                color: 'white'
                            }} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="btn btn-outline-light"><i className="bi bi-search"></i> </button>
                        </div>

                    </div>

                    <div className='d-none d-xl-flex'>
                        <div className='d-flex justify-content-center  align-items-center ms-2' >
                            <i className="bi bi-person-circle fs-4"></i>
                            <button type="button" className='login-container btn btn-link text-light' >
                                Sign In
                            </button>
                            /
                            <button type="button" className='register-container btn btn-link text-light'>
                                Sign Up
                            </button>
                        </div>
                    </div>

                    <div className='d-md-flex d-none justify-content-around'>
                        <Cart value="0" />
                    </div>
                </div>
                <nav class="container navbar navbar-expand-xl">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Features</a>
                                <a class="nav-link" href="#">Pricing</a>
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>




    )
}
export default Header;