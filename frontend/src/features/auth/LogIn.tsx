export default function LogIn() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-dark-green mb-6">Log In</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input type="username" name="username" id="username" className="w-full px-3 py-2 border rounded-lg" placeholder="Username" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Password" />
          </div>
          <button type="submit" className="w-full bg-dark-green text-white font-semibold py-2 rounded-lg hover:bg-green-700">
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
