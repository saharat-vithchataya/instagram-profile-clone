import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Toggle from "./components/Toggle";
import UserInfo from "./components/Userinfo";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-[60rem] lg:w-[60rem] mx-auto">
        <header className="mt-5">
          <UserInfo />
        </header>
        <section>
          <Toggle />
        </section>
        <section>
          <Posts />
        </section>
      </div>
    </>
  );
}

export default App;
