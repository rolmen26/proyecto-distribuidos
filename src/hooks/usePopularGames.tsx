import PopularGames from "../classes/PopularGames";
import FetchData from "../helpers/FetchGames";
import { useState, useEffect } from "react";

// const usePopularGames = () => {
//     const [isLoading, setisLoading] = useState(true);
//     const [juegos, setJuegos] = useState([]);
//     const [next, setNext] = useState(null);
//     const [previous, setPrevious] = useState(null);

//     useEffect(() => {
//         fetchAllPopularGames().then(({ juegos, next, previous }) => {
//             setisLoading(false);
//             setJuegos(juegos);
//             setNext(next);
//             setPrevious(previous);
//         });
//     }, []);

//     const handlePageClick = ({ page }) => {
//         setisLoading(true);
//         fetchNextPreviousPage(page)
//             .then(({ juegos, next, previous }) => {
//                 setisLoading(false);
//                 setJuegos(juegos);
//                 setNext(next);
//                 setPrevious(previous);
//             })
//             .catch(() => {
//                 setisLoading(false);
//             });
//     };

//     return {
//         isLoading,
//         juegos,
//         next,
//         previous,
//         handlePageClick,
//     };
// };

class UsePopularGames<T> extends FetchData {

    constructor(popularGames: T){
        super();
        this.popularGames = popularGames;
    }

    public popularGames;

    public retrieveGames = () => {
        const [isLoading, setisLoading] = useState(true);
        // const [juegos, setJuegos] = useState([]);
        // const [next, setNext] = useState(null);
        // const [previous, setPrevious] = useState(null);

        useEffect(() => {
            super.fetchToEndpoint("/games", "{'ordering': '-added'}")
                .then((rsp) => {
                    console.log(rsp);
                    setisLoading(false);
                    // setJuegos(juegos);
                    // setNext(next);
                    // setPrevious(previous);
                })
                .catch((ex) => { console.log('Error with this thing', ex) })
                .finally(() => { console.log('xd') });
        }, []);

        // const handlePageClick = ({ page }) => {
        //     setisLoading(true);
        //     fetchNextPreviousPage(page)
        //         .then(({ juegos, next, previous }) => {
        //             setisLoading(false);
        //             setJuegos(juegos);
        //             setNext(next);
        //             setPrevious(previous);
        //         })
        //         .catch(() => {
        //             setisLoading(false);
        //         });
        // };

        return {
            isLoading,
        };
    }
}

export default UsePopularGames; 