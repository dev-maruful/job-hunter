import React from "react";
import Lottie from "lottie-react";
import educationAnimation from "../assets/73782-education.json";

const Blog = () => {
  return (
    <div>
      <h1 className="my-14 text-3xl font-extrabold">Blog</h1>
      <div className="flex gap-10 items-center">
        <div className="flex-1">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-lightGray bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-extrabold">
              When should you use context API?
            </div>
            <div className="collapse-content text-left">
              <p className="text-base text-gray font-semibold">
                Here are some situations where we might want to use the Context
                API: <br /> <br />
                <span className="text-black">1. Theming:</span> If we have a
                theme that needs to be used across multiple components, we can
                use the Context API to provide the theme to all the components
                without having to pass it down manually at every level. <br />
                <span className="text-black">2. Authentication:</span> If we
                have an authentication system and we need to pass the user's
                authentication status to multiple components, we can use the
                Context API to provide the authentication status to all the
                components that need it. <br />
                <span className="text-black">3. Language Localization:</span> If
                our app needs to support multiple languages, we can use the
                Context API to provide the current language to all the
                components that need it. <br />
                <span className="text-black">4. Global state management: </span>
                If we have data that needs to be shared across multiple
                components, we can use the Context API to provide that data to
                all the components that need it.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-lightGray bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-extrabold">
              What is a custom hook?
            </div>
            <div className="collapse-content text-left">
              <p className="text-base text-gray font-semibold">
                A <span className="text-black">custom hook</span> is a
                JavaScript function that uses one or more of the built-in React
                hooks{" "}
                <span className="text-black">
                  (useState, useEffect, useContext, etc.)
                </span>
                to add some specific behavior to a functional component in a
                reusable way. <span className="text-black">Custom hooks</span>{" "}
                allow us to extract repeated logic into a separate function so
                that it can be shared across multiple components. <br /> <br />{" "}
                <span className="text-black">Custom hooks</span> can be used to
                encapsulate complex logic or state management, such as API
                calls, form handling, or even animation effects. They can also
                be used to abstract away common patterns in our code, such as
                debouncing or throttling event handlers.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-lightGray bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-extrabold">
              What is useRef?
            </div>
            <div className="collapse-content text-left">
              <p className="text-base text-gray font-semibold">
                <span className="text-black">useRef</span> is a built-in React
                hook that returns a mutable ref object. The ref object can hold
                a value, similar to a class component's instance variable or a
                global variable, and can be used to persist values between
                renders without causing the component to re-render. It's
                important to note that{" "}
                <span className="text-black">useRef</span> does not trigger a
                re-render when the value changes.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-lightGray bg-base-100 rounded-box mb-5"
          >
            <div className="collapse-title text-xl font-extrabold">
              What is useMemo?
            </div>
            <div className="collapse-content text-left">
              <p className="text-base text-gray font-semibold">
                <span className="text-black">useMemo</span> is a built-in React
                hook that memoizes a value, which means that it only re-computes
                the value when its dependencies have changed. It's useful for
                optimizing performance by avoiding unnecessary calculations or
                rendering. <br /> <br />
                The <span className="text-black">useMemo</span> hook takes two
                arguments: a function that returns a value, and an array of
                dependencies. The function is only re-executed when one or more
                dependencies have changed. If the dependencies have not changed,
                <span className="text-black">useMemo</span> returns a cached
                value from the previous render.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={educationAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
