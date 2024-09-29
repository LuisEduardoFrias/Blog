'use client'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <>
      <div className="page-not-found" >
        <div>
          <h2>Error 404</h2>
          <Link href={"/home"} className="link" >{'volver'}</Link>
        </div>
      </div>
    </>
  );
}