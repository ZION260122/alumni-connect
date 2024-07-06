import "./registration.scss";

const SignUp = () => {
  return (
    <div>
      <div className="registration-container">
        <div className="registration-form__wrapper">
          <h2>Sign Up</h2>
          <form className="registration-form">
            <div className="registration-form__group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                required
              />
            </div>
            <div className="registration-form__group">
            <label>Email</label>
              <input
                type="email"
                placeholder="Enter your college Email"
                name="email"
                required
              />
            </div>
            <div className="registration-form__group">
            <label>password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <div className="registration-form__group">
              <button className="registration-button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
