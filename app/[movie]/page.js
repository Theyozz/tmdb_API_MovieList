import Image from "next/image"

export default async function MovieDetail({ params }){
    const { movie } = params
    const ImagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}})
    const res = await data.json()
    return(
        <div>
            <div>
                <h2>{res.title}</h2>
                <h2>{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                {console.log(res)}
                <Image 
                    src={ImagePath + res.backdrop_path}
                    width={700}
                    height={700}
                    alt="Poster path"
                    className="my-10 w-full"
                />
                <h2>{res.overview}</h2>
            </div>
        </div>
    )
} 