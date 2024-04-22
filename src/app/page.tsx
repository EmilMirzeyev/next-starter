import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
        <h1 className="text-lg font-bold">HomePage</h1>
        <Link href="/posts" className="text-blue">Go to Posts</Link>
    </div>
  );
};

export default Home;
