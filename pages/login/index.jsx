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
        <h1 className="font-medium text-[48px] text-[#000000]">Welcome To Remotely</h1>
        <p className="text-[24px] w-[50%] m-auto">
          Learn from the world-renowed experts with interactive projects and
          case studies
        </p>
        <p className="text-[39px] py-10">Choose Login Type</p>
        <div className="flex flex-col m-auto">
          <Link href="/" className="bg-purple text-white p-5 mt-2">
            <span className="mx-1 text-white text-lg font-normal text-2xl">Student</span>
          </Link>
          <Link href="/" className="bg-purple text-white py-5 px-28  my-5">
            <span className="mx-1 text-white text-lg font-normal text-2xl">Coach</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
