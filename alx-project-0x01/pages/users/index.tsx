// pages/users/index.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Users: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <h1 className="text-2xl font-semibold">Users Page</h1>
        <p className="mt-2">User content will be displayed here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Users;
