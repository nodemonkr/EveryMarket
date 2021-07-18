//styled components

// auth & redux
import { useHistory, Link } from "react-router-dom";

const Signup = () => {
  return (
    <form>
      <div>
        <input
          name="name"
          type="text"
          label="Full Name"
          placeholder="Bart Simpson"
        />
      </div>
      <div>
        <input
          name="email"
          type="text"
          label="Email"
          placeholder="test1@example.com"
        />
      </div>
      <div>
        <input
          name="dateOfBirth"
          type="date"
          label="Date of Birth"
          placeholder="******"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          label="password"
          placeholder="******"
        />
      </div>
      <div>
        <input
          name="repeatPassword"
          type="password"
          label="Repeat Password"
          placeholder="******"
        />
      </div>
      <div>
        <button>signup</button>
      </div>
      <div>
        <button>
          <Link to="/login">login</Link>
        </button>
      </div>
    </form>
  );
};

export default Signup;
