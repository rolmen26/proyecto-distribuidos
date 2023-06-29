// import React from "react";
// import ViewGamesCard from "../components/ViewGamesCard";
// import { Loading } from "../components/Loading";
// import UsePopularGames from "../hooks/usePopularGames";
// import PopularGames from "../classes/PopularGames";

// const PopularGamesView = () => {

//   const { isLoading, juegos, next, previous, handlePageClick } = '';

//   return (
//     <>
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <div className="wrapper">
//           {juegos.map(({ id, name, background_image }) => (
//             <ViewGamesCard
//               key={id}
//               id={id}
//               name={name}
//               background_image={background_image}
//             />
//           ))}
//           {previous && (
//             <button
//               onClick={() => {
//                 handlePageClick({ page: previous });
//               }}
//               className="btn__game"
//             >
//               Previous
//             </button>
//           )}
//           {next && (
//             <button
//               onClick={() => {
//                 handlePageClick({ page: next });
//               }}
//               className="btn__game"
//             >
//               Next
//             </button>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default PopularGamesView;

export {}