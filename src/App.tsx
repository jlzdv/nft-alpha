import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className={styles.container}>
      <HeroSection />
    </div>
  );
}

const styles = {
  container:
    "font-poppins min-h-screen w-full bg-gray-900 flex flex-col justify-center items-center gap-y-5 px-5",
};

export default App;
