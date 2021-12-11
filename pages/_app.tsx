import "../global.css";
import "tailwindcss/tailwind.css";
import "nextra-theme-blog/style.css";
import { NavBar } from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mb-10">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
