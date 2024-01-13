
import './App.css';
import About from './components/about';
import Hero from './components/hero';
import NavBar from './components/navBar';
import "../src/styles/fonts.css";
import Project from './components/projects';
import GitHubStats from './components/gitStats';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <section>
        <main>
          <Hero />
          <About />
          <Project />
          <GitHubStats />
          <Contact />
        </main>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
