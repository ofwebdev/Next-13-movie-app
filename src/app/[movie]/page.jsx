import Image from "next/image";


export async function generateStaticParams() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return res.results.map(movie => ({movie: toString(movie.id)}));
}

export default async function MovieDetails({ params }) {
  const { movie } = params;

  // console.log(params)
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);


  const res =  await data.json();


  return (
    <div>
      <h1>{res.title}</h1>
      <h2>{res.release_date}</h2>
      <h2>{res.status}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <Image src={imagePath + res.backdrop_path} width={'1000'} height='1000' className="w-full h-auto my-3" />
      <p>{res.overview}</p>
    </div>
  )
}
