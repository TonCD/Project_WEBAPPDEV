
import './Header.scss'
import { useState } from "react";
import Logo from "../../assets/logo.png"
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
                <div className="container" style={{ height: "100px" }}>
                    {/* Logo */}
                    <div className="d-none d-md-block">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "400px" }}
                        />
                    </div>

                    {/* Menu Drawer (Mobile) */}
                    <div className="d-block d-md-none">
                        {/* MenuDrawer component */}
                        <button className="btn">
                            <i className="bi bi-list fs-3"></i>
                        </button>
                    </div>

                    {/* Search Field */}
                    <div className="col-4">
                        <div class="input-group">
                            <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-light"><i class="bi bi-search"></i> </button>
                        </div>

                    </div>

                    <div className='col-4'></div>


                </div>
            </div>
        </div>




    )
}
export default Header;