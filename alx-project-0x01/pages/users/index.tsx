import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // Changed from users to posts
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  // Changed prop name from users to posts
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(
            (
              user // Changed from users.map to posts.map
            ) => (
              <UserCard key={user.id} {...user} />
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // Changed variable name from users to posts

  return {
    props: {
      posts, // Changed from users to posts
    },
  };
}

export default Users;
