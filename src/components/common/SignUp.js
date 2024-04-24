import "../../styles/common/SignUp.css";
import React, { useState } from 'react';

const imgURL = "https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const showPasswordChange = () => {
        console.log(password,email);
    }





  return (
    <main className="flex flex-col items-center overflow-hidden min-h-[calc(100vh-76px-50px)]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-10">
      <div className="self-start relative flex-shrink-0  pr-[42px] babybear:w-full babybear:pr-[0px]">
        <div className='main-heading text-color-text-accent-2'>
          <h1>Welcome to your professional community</h1>
        </div>
        <div className="hero-cta-form">
        <form>
          <input name="loginCsrfParam" />
          <div className="flex flex-col">
            <div className="mt-1.5">
              <div className="flex flex-col">
                <label className="input-label mb-1">Email or phone</label>
                <div className="text-input flex">
                  <input className="text-color-text font-sans text-md outline-0 bg-color-transparent grow" 
                  value={email}
                  onChange={handleEmailChange}
                  />
                </div>
              </div>

              <p className="input-helper mt-1.5"></p>
            </div>

            <div className="mt-1.5">
              <div className="flex flex-col">
                <label className="input-label mb-1">Password</label>
                <div className="text-input flex">
                  <input className="text-color-text font-sans text-md outline-0 bg-color-transparent grow"
                  value={password}
                  onChange={handlePasswordChange}
                   />

                  <button
                  onClick={showPasswordChange}
                    className="font-sans text-md font-bold text-color-action z-10 ml-[12px] hover:cursor-pointer"
                    aria-label="Show your LinkedIn password"
                    type="button"
                  >
                    Show
                  </button>
                </div>
              </div>

              <p className="input-helper mt-1.5"></p>
            </div>

            <input type="hidden" />
          </div>

          <div
            className="flex justify-between
          sign-in-form__footer--full-width"
          >
            <a
              className="font-sans text-md font-bold link leading-regular
            sign-in-form__forgot-password--full-width"
            >
              Forgot password?
            </a>

            <input type="hidden" />
            <button
              className="btn-md btn-primary flex-shrink-0 cursor-pointer
            sign-in-form__submit-btn--full-width"
              type="submit"
            >
              Sign in
            </button>
          </div>
          <div className="sign-in-form__divider left-right-divider pt-2 pb-3">
            <p className="sign-in-form__divider-text font-sans text-sm text-color-text px-2">
              or
            </p>
          </div>
          <input type="hidden" name="controlId" />
          <input type="hidden" name="pageInstance" />
        </form>
        </div>
      </div>
      <div>
        <img className="flip-rtl block z-[-1] w-[700px] h-[560px] relative flex-shrink babybear:w-[374px] babybear:h-[214px] babybear:static" src={imgURL} />
      </div>
    </div>
    </main>
  );
};

export default SignUp;
