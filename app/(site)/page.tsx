import Authform from "./components/Authform";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-16 w-16 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png" alt="" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in your account</h2>
      </div>
      <Authform/>
    </div>
  );
}
