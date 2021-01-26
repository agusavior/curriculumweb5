import LanguageSelector from "./LanguageSelector";

export default function() {
    return (
      <header className='bg-pagebackground flex justify-end'>
          {/**
                   <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/users">
            <a>Users List</a>
          </Link>
          <a href="/api/users">Users API</a>
        </nav>
           */}
        <p className='pr-4'>Language:</p>
        <LanguageSelector/>
      </header>
    )
}