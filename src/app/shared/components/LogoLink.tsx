import Link from 'next/link';

export default function LogoLink() {
  return (
    <Link href="/" className="py-4">
      <svg className="w-9 h-9">
        <use href={`/icons.svg#icon-logo`}></use>
      </svg>
    </Link>
  );
}
