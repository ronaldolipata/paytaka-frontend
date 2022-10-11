import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Paytaka</h1>
        <p className="sub-title">The virtual wallet for your needs.</p>
      </div>
      <div className="cta-container">
        <Link to={`/signup`}>
          <button className="sign-up cta-button">Start an account</button>
        </Link>
        <Link to={`/login`}>
          <button className="login cta-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
