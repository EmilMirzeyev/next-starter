import React from "react";

const TestLayout = ({
  children,
  users,
  articles,
  products,
  login
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  articles: React.ReactNode;
  products: React.ReactNode;
  login: React.ReactNode;
}>) => {

  // const isLogged = true
  return (
    <>
      <div>{children}</div>
      <div>{users}</div>
      <div>{articles}</div>
      <div>{products}</div>
      <div>{login}</div>
      {/* {
        isLogged ? (
          <>
            <div>{users}</div>
            <div>{articles}</div>
          </>
        ) : (
          <div>{login}</div>
        )
      } */}
    </>
  );
};

export default TestLayout;
