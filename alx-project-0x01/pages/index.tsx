// pages/index.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <div className="mt-6">
            <Button
              className="bg-white text-blue-500 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold"
              onClick={() => console.log("Get Started clicked")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
