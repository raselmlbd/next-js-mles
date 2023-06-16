import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();
  return (
    <header className="header" id="header">
      <div className="header-container">
        <div className="header-desktop">
          <div className="header-logo">
            <Link href="/">
              <Image
                src="/images/Logo.svg"
                alt="picture of the author"
                width={280}
                height={60}
              />
            </Link>
          </div>
          <nav className="header-nav">
            <span className={`nav-link ${pathname == '/about-us' ? 'active' : '' }`}>
              <Link href="about-us" className={`dropBtn ${pathname == '/about-us' ? 'active' : ''}`}>About Us</Link>
            </span>
            <span className={`nav-link ${pathname == '/what-we-offer' ? 'active' : '' }`}><Link href="what-we-offer">What We Offer</Link></span>
            <span className={`nav-link ${pathname == '/how-we-work' ? 'active' : '' }`}><Link href="how-we-work">How We Work</Link></span>
            <span className={`nav-link ${pathname == '/careers' ? 'active' : '' }`}><Link href="careers">Careers</Link></span>
            <span><Link href="#footer-contact">Contact Us</Link></span>
          </nav>
          <div className="mobile-nav-bar" id="mmOpen">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="mobile-nav" id="mobileMenu">
          <div className="nav-top">
            <div className="logo">
              <a href="#">
              <Image
                src="/images/Logo.svg"
                alt="picture of the author"
                width={280}
                height={60}
              />
            </a>
            </div>
            <div className="menu-close" id="mmClose">
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_506_610)">
                    <path d="M1.45459 1.45459L14.5455 14.5455ZM1.45459 14.5455L14.5455 1.45459Z" fill="#53575A"/>
                    <path d="M1.45459 1.45459L14.5455 14.5455M1.45459 14.5455L14.5455 1.45459" stroke="#53575A" strokeWidth="1.5" strokeLinecap="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_506_610">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <nav className="mobile-nav-menu">
            <span className="nav-link">
              <a href="#">About Us</a>
              <span className="levTwo">
                <a href="#">Legacy</a>
                <a href="#">Meet Our Talents</a>
              </span>
            </span>
            <span className="nav-link"><a href="#">What We Offer</a></span>
            <span className="nav-link"><a href="#">How We Work</a></span>
            <span className="nav-link"><a href="#">Careers</a></span>
            <span className="nav-link"><a href="#">Contact Us</a></span>
          </nav>
        </div>
      </div>
    </header>
  )
}
