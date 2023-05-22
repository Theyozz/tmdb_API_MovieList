import Image from "next/image"
import Link from "next/link"

export default function Movies({title,poster_path,id, release_date}){
    const ImagePath = "https://image.tmdb.org/t/p/original"
    return (
        <Link href={`/${id}`}>
            <div>
                <h1>{title}</h1>
                <h3>{release_date}</h3>
                <Image
                    src={ImagePath + poster_path}
                    width={500}
                    height={500}
                    alt="Poster path"
                />
            </div>
        </Link>
    )
}