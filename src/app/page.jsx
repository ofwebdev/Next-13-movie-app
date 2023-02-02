// "use client"
// import React from 'react';

// interface Movie {
//     title: string;
// }

// interface Results {
//     results: Movie[];
// }

// const Home: React.FC = () => {
//     const [movies, setMovies] = React.useState<Results | undefined>();

//     React.useEffect(() => {
//         const fetchData = async () => {
//             const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
//             const res = await data.json();
//             setMovies(res);
//         };

//         fetchData();
//     }, []);

//     console.log(movies);

//     return (
//         <>
//             <h2>Home</h2>
//             {movies?.results?.map((m) => (
//                 <>

//                     <h1 key={m.title}>{m.title}</h1>

//                 </>
//             ))}
//         </>
//     );
// };

// export default Home;

import Movie from "./Movies";

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return (
    <>
      {/* <div className="bg-amber-400">Home</div> */}
      <div className="inline-grid grid-cols-1 md:grid-cols-5 gap-4">
        {res.results.map(m => (
          <>
            <Movie
              key={m.id}
              id={m.id}
              title={m.title}
              poster_path={m.poster_path}
              release_date={m.release_date}
            />
          </>
        ))}
      </div>
    </>
  )
}
