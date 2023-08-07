import { useNavigate} from 'react-router-dom';
import Img from "../assets/client_home.jpg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  
  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToRegister = () => {
    navigate('/register');
  };
  
  return (
    <div className="home-page">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Find the Right Lawyer for Your Legal Needs</h1>
        {/* <SearchBar /> */}
        <img src={Img} alt="client-images" />
        <p>
          At E-lawyer Hiring, we make it easy to find and hire top-rated lawyers
          for all your legal needs. Our user-friendly platform allows you to
          search for lawyers by location, area of expertise, and other important
          factors, so you can find the perfect match for your unique situation.
        </p>
        <p>
          Sign up today to start your search and take the first step towards
          securing the legal representation you need to succeed.
        </p>
      </main>
        <div className="button-container">
          <button type="submit" className="btn" onClick={navigateToLogin}>
            Log In
          </button>
          <button type="submit" className="btn" onClick={navigateToRegister}>
            Sign Up
          </button>
        </div>
      <footer>
        <p>&copy; E-lawyer Hiring. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
