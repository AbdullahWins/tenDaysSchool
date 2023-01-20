import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      <h2 className="m-4">Welcome to Blogs</h2>
      <div className="m-4">
        <p className="fs-4">what is cors?</p>
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources.
        </p>
      </div>
      <div className="m-4">
        <p className="fs-4">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </p>
        <p>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
      </div>
      <div className="m-4">
        <p className="fs-4">How does the private route work?</p>
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated.
        </p>
      </div>
      <div className="m-4">
        <p className="fs-4">What is Node? How does Node work?</p>
        <p>
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
