import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="pt-7">
        <div className="flex justify-between bg-slate-500 mx-2 sm:mx-8 px-8 py-5 border-solid border-2 border-slate-300 rounded-md">
          <div>
            <p className="text-white text-xl">HomePage</p>
          </div>
          <div className="flex gap-5">
            <button className="text-white text-xl border-solid border-2 white px-2 rounded-lg hover:bg-slate-400">
              LogIn
            </button>
            <button className="text-white text-xl border-solid border-2 white px-2 rounded-lg hover:bg-slate-400 hidden lg:block">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
