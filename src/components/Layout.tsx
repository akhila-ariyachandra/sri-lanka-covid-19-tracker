import React from "react";
import { FaGithub } from "react-icons/fa";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="p-4 bg-gray-200">
      <main className="container grid grid-cols-1 gap-2">{children}</main>

      <footer className="container mt-5 flex items-center text-base text-lg">
        <div className="flex-1">
          <p>
            Created by{" "}
            <a
              className="underline text-green-800"
              href="https://akhilaariyachandra.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akhila Ariyachandra
            </a>
          </p>

          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              className="underline text-green-800"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            {`, `}
            <a
              className="underline text-green-800"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            {`, `}
            <a
              className="underline text-green-800"
              href="http://recharts.org/en-US/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recharts
            </a>
            {`, & `}
            <a
              className="underline text-green-800"
              href="https://zeit.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZEIT
            </a>
          </p>
        </div>

        <a
          className="text-green-800"
          href="https://github.com/akhila-ariyachandra/sri-lanka-covid-19-tracker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repo"
        >
          <FaGithub className="text-4xl" />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
