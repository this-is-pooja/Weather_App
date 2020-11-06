import Link from "next/link";
const Navbar = (props) => (
  <div>
    <ul>
      {/* ////////////////align class added/////////////////// */}
      <li className="align">Weather_App.net</li>
      {/* ///////////////////////////////////////////// */}
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>contact us</a>
        </Link>
      </li>
    </ul>
    <div className="footer">
      <p className="p">&copy;copywrite 2020 Weather_App.net </p>
    </div>
    <style jsx>
      {`
        ul {
          background: #556B2F;
          display: flex;
          justify-content: flex-end;
          height: 60px;
          list-style: none;
          color: #fff;
          align-items: center;
          margin-top: -10px;
          margin-right: -8px;
          margin-left: -8px;
          padding-top: 8px;
        }
        ///////////////////////////////////////
        ul li.align {
          position: absolute;
          left: 0;
        }
        //////////////////////////////////////
        ul li {
          font-size: 30px;
          margin-right: 20px;
        }

        ul li a {
          color: #fff;
          text-decoration-style: solid;
        }
        .footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          background-color: #3f000f;
          color: white;
          text-align: center;
        }
      `}
    </style>
  </div>
);
export default Navbar;
