import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/home">
        <svg
          width="218.5300079345703"
          height="45.61337073347515"
          viewBox="0 0 401 83.7"
        >
          <defs id="SvgjsDefs1625"></defs>
          <g id="SvgjsG1626" transform="matrix(0.9,0,0,0.9,0,0)" fill="#000">
            <rect width="90" height="93" rx="10" ry="10"></rect>
          </g>
          <g
            transform="matrix(1.2611805747862799,0,0,1.2611805747862799,12.215273561451474,-6.9685050287689485)"
            fill="#61c0bf"
          >
            <path d="M42.139 36.894999999999996 c0.43219 1.9544 0.61662 3.9976 0.44186 6.0588 c-0.18557 2.0611 -0.74676 4.116 -1.6169 5.9878 c-0.88536 1.8578 -2.0701 3.5077 -3.4397 4.8755 c-1.3671 1.3735 -2.8867 2.5131 -4.5056 3.3965 c-1.6175 0.88662 -3.3158 1.5616 -5.0693 1.9976 c-1.7599 0.43283 -3.4918 0.63372 -5.213 0.66042 c-3.4372 0.0375 -6.705 -0.6222 -9.7332 -1.6639 c-0.21545 -0.07752 -0.39275 -0.19002 -0.55231 -0.31652 c-0.90828 -0.13096 -1.6506 -0.39727 -1.7771 -0.79068 c-1.6385 -9.831 -3.8039 -19.559 -5.4475 -29.803 c-1.7962 -2.9904 -2.9586 -5.7704 -1.6931 -6.3732 c2.0002 -0.9438 3.9883 -1.5654 5.9484 -2.0084 c1.9576 -0.4176 3.889 -0.6216 5.8015 -0.696 c3.8198 -0.078162 7.5774 0.41057 11.293 1.6741 c1.8565 0.65526 3.699 1.4714 5.4837 2.6198 c1.7485 1.1421 3.2935 2.4857 4.6371 3.9628 c1.3462 1.4777 2.4559 3.1232 3.3818 4.8596 c0.92664 1.7351 1.6315 3.5986 2.0605 5.5582 z M31.81 45.204 c0.2015 -0.85806 0.27112 -1.702 0.19166 -2.5765 c-0.092166 -0.87456 -0.34383 -1.7637 -0.70614 -2.6288 c-0.35654 -0.86688 -0.85674 -1.711 -1.4675 -2.4724 c-0.6057 -0.75948 -1.2813 -1.4714 -2.0401 -2.0408 c-0.7557 -0.57076 -1.5502 -1.0284 -2.3402 -1.357 c-0.76776 -0.30697 -1.6887 -0.52939 -2.6459 -0.69018 c-0.64764 -0.10998 -1.3347 -0.15574 -2.0288 -0.17291 c-1.2247 6.471 -2.3166 13.114 -3.5719 19.751 c1.7059 0.11566 3.38 0.051445 4.9613 -0.22693 c2.4336 -0.4309 4.5577 -1.3518 6.2838 -2.738 c1.7231 -1.3684 2.9332 -3.1334 3.3635 -4.8482 z"></path>
          </g>
          <g
            transform="matrix(1.3790372284920505,0,0,1.3790372284920505,98.79502981161126,5.452657986099787)"
            fill="#61c0bf"
          >
            <path d="M12.059 12 c5.7668 0 10.459 4.692 10.458 10.458 l0 7.0824 c0 5.7668 -4.692 10.459 -10.459 10.459 c-0.58252 0 -1.1411 -0.23141 -1.5529 -0.64316 l-8.2628 -8.2628 c-0.85784 -0.85756 -0.85784 -2.248 0 -3.1056 c0.85756 -0.85756 2.248 -0.85756 3.1056 0 l7.5604 7.5604 c2.9441 -0.41476 5.2164 -2.9507 5.2164 -6.0072 l0 -7.0824 c0 -3.3452 -2.7215 -6.0668 -6.0668 -6.0668 l-6.0666 0 l0 3.9768 l7.6196 7.6196 c0.85784 0.85756 0.85784 2.248 0 3.1056 c-0.85756 0.85756 -2.248 0.85756 -3.1056 0 l-8.2628 -8.2628 c-0.41176 -0.41176 -0.64316 -0.9704 -0.64316 -1.5529 l0 -7.0824 c0 -1.2128 0.98328 -2.196 2.196 -2.196 l8.2627 0 z M42.846000000000004 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 l0 16.196 c0 1.2128 -0.98328 2.196 -2.196 2.196 c-1.1071 0 -2.0201 -0.81968 -2.1716 -1.885 c-1.677 1.1856 -3.721 1.885 -5.9264 1.885 c-5.6764 0 -10.294 -4.6176 -10.294 -10.294 s4.6176 -10.294 10.294 -10.294 c2.2054 0 4.2492 0.69944 5.9264 1.885 c0.15152 -1.0654 1.0645 -1.885 2.1716 -1.885 z M34.748 35.608 c3.2543 0 5.902 -2.6476 5.902 -5.902 s-2.6476 -5.902 -5.902 -5.902 s-5.902 2.6476 -5.902 5.902 s2.6476 5.902 5.902 5.902 z M66.363 19.644 c1.0846 0.54216 1.5243 1.8614 0.98192 2.946 l-8.098 16.196 c-0.37195 0.74392 -1.1324 1.2139 -1.9641 1.2139 s-1.5922 -0.46996 -1.9641 -1.2139 l-8.098 -16.196 c-0.5424 -1.0848 -0.10266 -2.4039 0.98192 -2.9463 c1.0848 -0.5424 2.4039 -0.10293 2.9463 0.9822 l6.134 12.268 l6.134 -12.267 c0.54216 -1.0851 1.8612 -1.5241 2.9463 -0.9822 z M71.718 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 l0 16.196 c0 1.2128 -0.98328 2.196 -2.196 2.196 s-2.196 -0.98328 -2.196 -2.196 l0 -16.196 c0 -1.2128 0.98328 -2.196 2.196 -2.196 z M69.68939999999999 15.036000000000001 c-0.054884 -0.13176 -0.096056 -0.2718 -0.12352 -0.4118 c-0.030195 -0.14 -0.043908 -0.28551 -0.043908 -0.42824 s0.013711 -0.28824 0.043908 -0.42824 c0.027461 -0.14 0.068632 -0.28 0.12352 -0.41176 s0.12352 -0.26078 0.20312 -0.37883 c0.079608 -0.12078 0.1702 -0.23332 0.27176 -0.33488 s0.2141 -0.19215 0.33488 -0.27176 c0.11805 -0.079608 0.24707 -0.14824 0.37883 -0.20312 s0.27176 -0.096056 0.41176 -0.12352 c0.71372 -0.14551 1.4714 0.090588 1.982 0.59844 c0.098828 0.10156 0.19215 0.2141 0.27176 0.33488 c0.079608 0.11805 0.14824 0.24707 0.20312 0.37883 s0.096056 0.27176 0.12352 0.41176 c0.030195 0.14 0.043908 0.28551 0.043908 0.42824 s-0.013711 0.28824 -0.043908 0.42824 c-0.027461 0.14 -0.068632 0.28 -0.12352 0.41176 s-0.12352 0.26078 -0.20312 0.37883 c-0.079608 0.12078 -0.17293 0.23332 -0.27176 0.33488 c-0.10156 0.10156 -0.2141 0.19215 -0.33488 0.27176 c-0.11805 0.079608 -0.24707 0.14824 -0.37883 0.20312 s-0.27176 0.096056 -0.41176 0.12352 c-0.14 0.030195 -0.28551 0.043908 -0.42824 0.043908 s-0.28824 -0.013711 -0.42824 -0.043908 c-0.14 -0.027461 -0.28 -0.068632 -0.41176 -0.12352 s-0.26078 -0.12352 -0.37883 -0.20312 c-0.12078 -0.079608 -0.23332 -0.1702 -0.33488 -0.27176 s-0.19215 -0.2141 -0.27176 -0.33488 c-0.079608 -0.11805 -0.14824 -0.24707 -0.20312 -0.37883 z M94.23299999999999 12 c1.2128 0 2.1961 0.98328 2.1961 2.196 l0 23.608 c0 1.2128 -0.98328 2.196 -2.196 2.196 c-1.103 0 -2.013 -0.81364 -2.1697 -1.873 c-1.6707 1.1782 -3.7056 1.873 -5.9008 1.873 c-5.6612 0 -10.267 -4.6056 -10.267 -10.267 s4.6056 -10.267 10.267 -10.267 c2.1837 0 4.2088 0.6874 5.8744 1.8541 l0 -7.1249 c0 -1.2128 0.98328 -2.196 2.196 -2.196 z M86.163 35.608 c3.2392 0 5.8744 -2.6353 5.8744 -5.8744 s-2.6353 -5.8744 -5.8744 -5.8744 s-5.8744 2.6353 -5.8744 5.8744 s2.6353 5.8744 5.8744 5.8744 z M128.006 27.345 c1.213 0 2.196 0.98328 2.196 2.196 c0 5.7668 -4.692 10.459 -10.459 10.459 s-10.459 -4.692 -10.459 -10.459 l0 -7.0824 c0 -5.7668 4.692 -10.459 10.459 -10.459 s10.459 4.692 10.459 10.459 c0 1.2128 -0.98328 2.196 -2.196 2.196 s-2.196 -0.98328 -2.196 -2.196 c0 -3.3452 -2.7215 -6.0668 -6.0668 -6.0668 s-6.0668 2.7215 -6.0668 6.0668 l0 7.0824 c0 3.3452 2.7215 6.0668 6.0668 6.0668 c2.571 0 4.7736 -1.6075 5.6556 -3.8706 l-5.6554 0 c-1.2128 0 -2.196 -0.98328 -2.196 -2.196 s0.98328 -2.196 2.196 -2.196 l8.2627 0 z M150.53 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 l0 16.196 c0 1.2128 -0.98328 2.196 -2.196 2.196 c-1.1071 0 -2.0201 -0.81968 -2.1716 -1.885 c-1.677 1.1856 -3.721 1.885 -5.9264 1.885 c-5.6764 0 -10.294 -4.6176 -10.294 -10.294 s4.6176 -10.294 10.294 -10.294 c2.2054 0 4.2492 0.69944 5.9264 1.885 c0.15152 -1.0654 1.0645 -1.885 2.1716 -1.885 z M142.43200000000002 35.608 c3.2543 0 5.902 -2.6476 5.902 -5.902 s-2.6476 -5.902 -5.902 -5.902 s-5.902 2.6476 -5.902 5.902 s2.6476 5.902 5.902 5.902 z M164.966 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 s-0.98328 2.196 -2.196 2.196 c-3.2543 0 -5.902 2.6476 -5.902 5.902 l0 8.098 c0 1.2128 -0.98328 2.196 -2.196 2.196 s-2.196 -0.98328 -2.196 -2.196 l0 -16.196 c0 -1.2128 0.98328 -2.196 2.196 -2.196 c1.1071 0 2.0201 0.81996 2.1716 1.885 c1.677 -1.1856 3.721 -1.885 5.9264 -1.885 z M181.554 33.8792 c0.85756 -0.85756 2.2482 -0.85772 3.1058 0.00011719 c0.85784 0.85756 0.85784 2.248 0 3.1056 c-1.9443 1.9443 -4.5292 3.0149 -7.2792 3.0149 c-5.6764 0 -10.294 -4.6176 -10.294 -10.294 s4.6176 -10.294 10.294 -10.294 c2.7498 0 5.3348 1.0706 7.2788 3.0152 c0.85784 0.85756 0.85784 2.248 0 3.1056 c-0.85756 0.85756 -2.248 0.85756 -3.1056 0 c-1.1145 -1.1148 -2.5968 -1.7286 -4.1732 -1.7286 c-3.2543 0 -5.902 2.6476 -5.902 5.902 s2.6476 5.902 5.902 5.902 c1.5765 0 3.0586 -0.6138 4.1732 -1.7286 z M191.9268 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 l0 16.196 c0 1.2128 -0.98328 2.196 -2.196 2.196 s-2.196 -0.98328 -2.196 -2.196 l0 -16.196 c0 -1.2128 0.98328 -2.196 2.196 -2.196 z M196.528 13.800999999999998 c0.29426 1.1766 -0.42108 2.3691 -1.5976 2.6633 l-4.9412 1.2353 c-0.17871 0.044728 -0.35797 0.066132 -0.5342 0.066132 c-0.98408 0 -1.8795 -0.66624 -2.1288 -1.6641 c-0.29453 -1.1766 0.42108 -2.369 1.5976 -2.663 l4.9412 -1.2353 c1.1782 -0.29426 2.3693 0.42136 2.663 1.5976 z M216.946 19.412 c1.2128 0 2.196 0.98328 2.196 2.196 l0 16.196 c0 1.2128 -0.98328 2.196 -2.196 2.196 c-1.1071 0 -2.0201 -0.81968 -2.1716 -1.885 c-1.677 1.1856 -3.721 1.885 -5.9264 1.885 c-5.6764 0 -10.294 -4.6176 -10.294 -10.294 s4.6176 -10.294 10.294 -10.294 c2.2054 0 4.2492 0.69944 5.9264 1.885 c0.15152 -1.0654 1.0645 -1.885 2.1716 -1.885 z M208.848 35.608 c3.2543 0 5.902 -2.6476 5.902 -5.902 s-2.6476 -5.902 -5.902 -5.902 s-5.902 2.6476 -5.902 5.902 s2.6476 5.902 5.902 5.902 z"></path>
          </g>
        </svg>
      </Link>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/home">My Work</Link>
        <Link to="/home">Resume</Link>
        <Link to="/contact-me">Contact me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
