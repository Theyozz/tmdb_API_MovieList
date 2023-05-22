import Movies from "./movies.js"

export default async function Home() {
  const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return (
    <main>
      <h1 className="text-center mb-10 text-7xl">Top rated films</h1>
      <div className="grid gap-10 grid-cols-fluid p-10">
        {res.results.map((movies) => (
          <Movies
            title={movies.title}
            poster_path={movies.poster_path}
            id={movies.id}
            release_date={movies.release_date}
          />
        ))}
      </div>
    </main>
  )
}
