export default function LogIn() {
  return (
    <section>
      <div>
        <form>
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input type="username" name="username" id="username" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Username" />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </section>
  );
}
