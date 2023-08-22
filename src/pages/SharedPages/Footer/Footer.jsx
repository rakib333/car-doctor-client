import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 md:py-12 md:px-40 bg-base-200 text-base-content">
                <div>
                    <img src={logo} className='h-14 w-24' alt="" />
                    <p>Edwin Diaz is a software and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;