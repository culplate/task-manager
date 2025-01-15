export default function RegisterPage() {
  return (
    <div className="max-w-80 p-10">
      <h1>Register</h1>
      <h2>Enter your email to register:</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
