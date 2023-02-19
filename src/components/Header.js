import React from "react";

export default Header = () => {
  const navItems = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Menu",
      url: "#menu",
    },
    {
      name: "Reservations",
      url: "#reservations",
    },
    {
      name: "Order Online",
      url: "#orderOnline",
    },
    {
      name: "Login",
      url: "#",
    },
  ];
  return (
    <>
      <nav>
        <ul>
          {navItems.map((item) => {
            return (
              <li>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
