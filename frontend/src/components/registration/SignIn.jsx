import "./registration.scss";

const SignIn = () => {
  return (
    <div>
      <div className="registration-container">
        <div className="registration-form__wrapper">
          <h2>Sign In</h2>
          <form className="registration-form">
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
              <button className="registration-button">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
