import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className=" text-decoration-none text-secondary m-1"
              href="#home"
              data-mdb-ripple-color="dark"
            >
              Home
            </a>

            <a
              data-mdb-ripple-init
              className="text-decoration-none text-secondary m-1"
              href="#projects"
              data-mdb-ripple-color="dark"
            >
              Projects
            </a>

            <a
              data-mdb-ripple-init
              className="text-decoration-none text-secondary m-1"
              href="#skills"
              data-mdb-ripple-color="dark"
            >
              Skills
            </a>

            <a
              data-mdb-ripple-init
              className="text-decoration-none text-secondary m-1"
              href="#contacts"
              data-mdb-ripple-color="dark"
            >
              Contacts
            </a>

            <a
              data-mdb-ripple-init
              className="text-decoration-none text-secondary m-1"
              href="https://drive.google.com/file/d/1llBUJdj5-1u5HWpcAL9mW5uZ9HmIPUvp/view?usp=sharing"
              target="blank"
              data-mdb-ripple-color="dark"
            >
              Resume
            </a>
          </section>
        </div>
        <div className="text-center txt-title p-3">
          © 2024 Copyright :
          <span className="text-secondary"> MohamedRadwan</span>
        </div>
      </footer>
    </>
  );
}
