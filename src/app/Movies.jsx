import Link from "next/link"
import Image from "next/image"

export default function Movie({ title, id, poster_path, release_date }) {
    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <div className="mb-5">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h2>{release_date}</h2>

            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} width="400" height="300" alt={title}/>
            </Link>
        </div>
    )
}