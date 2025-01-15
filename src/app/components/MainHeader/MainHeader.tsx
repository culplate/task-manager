import Link from 'next/link';

export default function MainHeader() {
  return (
    <header className="flex justify-between py-6 px-10">
      <Link href="/">Logo</Link>
      <div className="flex gap-5">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </header>
  );
}
