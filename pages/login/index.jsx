import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Remotely login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="justify-center text-center py-24 flex-col flex item-center">
        <h1>Welcome To Remotely</h1>
        <p>
          Learn from the world-renowed experts with interactive projects and
          case studies
        </p>
        <h4>Choose Login Type</h4>
        <div>
        <Link
          href="/"
          className="bg-purple text-white"
        >
          <span className="mx-1 text-white text-lg font-normal">Student</span>
        </Link>
        <Link
          href="/"
          className="bg-purple text-white"
        >
          <span className="mx-1 text-white text-lg font-normal">Student</span>
        </Link>
        </div>
      </section>
    </div>
  );
}
