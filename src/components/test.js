

// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const movies = [
//   { id: 1, title: "Movie 1", img: "/media/reception/r1.jpg" },
//   { id: 2, title: "Movie 2", img: "/media/reception/r2.jpg" },
//   { id: 3, title: "Movie 3", img: "/media/reception/r1.jpg" },
//   { id: 4, title: "Movie 4", img: "/media/reception/r2.jpg" },
//   { id: 5, title: "Movie 5", img: "/media/reception/r1.jpg" },
//   { id: 6, title: "Movie 6", img: "/media/reception/r3.jpg" },
// ];

// export default function NetflixScroller() {
//   const scrollRef = useRef(null);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full px-10 py-20 bg-gray-100">
//       <h2 className="text-black text-2xl mb-6 text-center font-semibold">
//         Trending Now
//       </h2>
//       <div className="relative flex items-center">
//         {/* Left Scroll Button */}
//         <button
//           className="absolute left-0 z-10 bg-black/50 p-2 rounded-full"
//           onClick={() => scroll(-300)}
//         >
//           <ChevronLeft size={32} className="text-white" />
//         </button>

//         {/* Movie Scroller (Hidden Vertical Scroll) */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-4 w-full px-10"
//         >
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="min-w-[200px] cursor-pointer hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src={movie.img}
//                 alt={movie.title}
//                 className="w-full rounded-lg shadow-lg"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Scroll Button */}
//         <button
//           className="absolute right-0 z-10 bg-black/50 p-2 rounded-full"
//           onClick={() => scroll(300)}
//         >
//           <ChevronRight size={32} className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Movie categories with different images
// const movieCategories = [
//   {
//     id: 1,
//     title: "Trending Now",
//     movies: [
      // { id: 1, title: "Movie 1", img: "/media/pre_wedding/pw1.jpg" },
      // { id: 2, title: "Movie 2", img: "/media/pre_wedding/pw2.jpg" },
      // { id: 3, title: "Movie 3", img: "/media/pre_wedding/pw3.jpg" },
      // { id: 4, title: "Movie 4", img: "/media/pre_wedding/pw4.jpg" },
      // { id: 5, title: "Movie 5", img: "/media/pre_wedding/pw5.jpg" },
      // { id: 6, title: "Movie 1", img: "/media/pre_wedding/pw6.jpg" },
      // { id: 7, title: "Movie 2", img: "/media/pre_wedding/pw7.jpg" },
      // { id: 8, title: "Movie 3", img: "/media/pre_wedding/pw8.jpg" },
      // { id: 9, title: "Movie 4", img: "/media/pre_wedding/pw9.jpg" },
      // { id: 10, title: "Movie 5", img: "/media/pre_wedding/pw10.jpg" },
      // { id: 11, title: "Movie 1", img: "/media/pre_wedding/pw11.jpg" },
      // { id: 12, title: "Movie 2", img: "/media/pre_wedding/pw12.jpg" },
      // { id: 13, title: "Movie 3", img: "/media/pre_wedding/pw13.jpg" },
      // { id: 14, title: "Movie 4", img: "/media/pre_wedding/pw14.jpg" },
      // { id: 15, title: "Movie 5", img: "/media/pre_wedding/pw15.jpg" },
//     ],
//   },
//   {
//     id: 2,
//     title: "New Releases",
//     movies: [
//       { id: 6, title: "Movie 6", img: "/media/reception/r6.jpg" },
//       { id: 7, title: "Movie 7", img: "/media/reception/r7.jpg" },
//       { id: 8, title: "Movie 8", img: "/media/reception/r8.jpg" },
//       { id: 9, title: "Movie 9", img: "/media/reception/r9.jpg" },
//       { id: 10, title: "Movie 10", img: "/media/reception/r10.jpg" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Top Picks for You",
//     movies: [
//       { id: 11, title: "Movie 11", img: "/media/reception/r11.jpg" },
//       { id: 12, title: "Movie 12", img: "/media/reception/r12.jpg" },
//       { id: 13, title: "Movie 13", img: "/media/reception/r13.jpg" },
//       { id: 14, title: "Movie 14", img: "/media/reception/r14.jpg" },
//       { id: 15, title: "Movie 15", img: "/media/reception/r15.jpg" },
//     ],
//   },
// ];

// function NetflixScroller({ title, movies }) {
//   const scrollRef = useRef(null);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full px-10 py-10 bg-gray-100">
//       <h2 className="text-black text-2xl mb-6 font-semibold">{title}</h2>
//       <div className="relative flex items-center">
//         {/* Left Scroll Button */}
//         <button
//           className="absolute left-0 z-10 bg-black/50 p-2 rounded-full"
//           onClick={() => scroll(-300)}
//         >
//           <ChevronLeft size={32} className="text-white" />
//         </button>

//         {/* Movie Scroller */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-4 w-full px-10"
//         >
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="min-w-[200px] cursor-pointer hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src={movie.img}
//                 alt={movie.title}
//                 className="w-full rounded-lg shadow-lg"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Scroll Button */}
//         <button
//           className="absolute right-0 z-10 bg-black/50 p-2 rounded-full"
//           onClick={() => scroll(300)}
//         >
//           <ChevronRight size={32} className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function NetflixPage() {
//   return (
//     <div className="bg-gray-200 py-10">
//       {movieCategories.map((category) => (
//         <NetflixScroller key={category.id} title={category.title} movies={category.movies} />
//       ))}
//     </div>
//   );
// }



// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Movie categories with different images
// const movieCategories = [
//   {
//     id: 1,
//     title: "Trending Now",
//     movies: [
//       { id: 1, title: "Movie 1", img: "/media/pre_wedding/pw1.jpg" },
//       { id: 2, title: "Movie 2", img: "/media/pre_wedding/pw2.jpg" },
//       { id: 3, title: "Movie 3", img: "/media/pre_wedding/pw3.jpg" },
//       { id: 4, title: "Movie 4", img: "/media/pre_wedding/pw4.jpg" },
//       { id: 5, title: "Movie 5", img: "/media/pre_wedding/pw5.jpg" },
//       { id: 6, title: "Movie 1", img: "/media/pre_wedding/pw6.jpg" },
//       { id: 7, title: "Movie 2", img: "/media/pre_wedding/pw7.jpg" },
//       { id: 8, title: "Movie 3", img: "/media/pre_wedding/pw8.jpg" },
//       { id: 9, title: "Movie 4", img: "/media/pre_wedding/pw9.jpg" },
//       { id: 10, title: "Movie 5", img: "/media/pre_wedding/pw10.jpg" },
//       { id: 11, title: "Movie 1", img: "/media/pre_wedding/pw11.jpg" },
//       { id: 12, title: "Movie 2", img: "/media/pre_wedding/pw12.jpg" },
//       { id: 13, title: "Movie 3", img: "/media/pre_wedding/pw13.jpg" },
//       { id: 14, title: "Movie 4", img: "/media/pre_wedding/pw14.jpg" },
//       { id: 15, title: "Movie 5", img: "/media/pre_wedding/pw15.jpg" },
//     ],
//   },
//   {
//     id: 2,
//     title: "New Releases",
//     movies: [
//       { id: 9, title: "Movie 9", img: "/media/reception/r6.jpg" },
//       { id: 10, title: "Movie 10", img: "/media/reception/r7.jpg" },
//       { id: 11, title: "Movie 11", img: "/media/reception/r8.jpg" },
//       { id: 12, title: "Movie 12", img: "/media/reception/r9.jpg" },
//       { id: 13, title: "Movie 13", img: "/media/reception/r10.jpg" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Top Picks for You",
//     movies: [
//       { id: 14, title: "Movie 14", img: "/media/reception/r11.jpg" },
//       { id: 15, title: "Movie 15", img: "/media/reception/r12.jpg" },
//       { id: 16, title: "Movie 16", img: "/media/reception/r13.jpg" },
//       { id: 17, title: "Movie 17", img: "/media/reception/r14.jpg" },
//       { id: 18, title: "Movie 18", img: "/media/reception/r15.jpg" },
//     ],
//   },
// ];

// function NetflixScroller({ title, movies }) {
//   const scrollRef = useRef(null);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative w-full px-4 md:px-10 py-10 bg-gray-100">
//       <h2 className="text-black text-xl md:text-2xl mb-4 md:mb-6 font-semibold">{title}</h2>
//       <div className="relative flex items-center">
//         {/* Left Scroll Button */}
//         <button
//           className="absolute left-0 z-10 bg-black/50 p-2 md:p-3 rounded-full hidden md:flex"
//           onClick={() => scroll(-300)}
//         >
//           <ChevronLeft size={32} className="text-white" />
//         </button>

//         {/* Movie Scroller */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto overflow-y-hidden scrollbar-hide space-x-3 md:space-x-4 w-full px-4 md:px-10"
//         >
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="min-w-[140px] md:min-w-[200px] lg:min-w-[240px] cursor-pointer hover:scale-110 transition-transform duration-300"
//             >
//               <img
//                 src={movie.img}
//                 alt={movie.title}
//                 className="w-full rounded-lg shadow-lg"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Scroll Button */}
//         <button
//           className="absolute right-0 z-10 bg-black/50 p-2 md:p-3 rounded-full hidden md:flex"
//           onClick={() => scroll(300)}
//         >
//           <ChevronRight size={32} className="text-white" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function NetflixPage() {
//   return (
//     <div className="bg-gray-200 py-10">
//       {movieCategories.map((category) => (
//         <NetflixScroller key={category.id} title={category.title} movies={category.movies} />
//       ))}
//     </div>
//   );
// }


import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Movie categories with different images
const movieCategories = [
  {
    id: 1,
    title: "Trending Now",
    movies: [
      { id: 1, title: "Movie 1", img: "/media/pre_wedding/pw1.jpg" },
      { id: 2, title: "Movie 2", img: "/media/pre_wedding/pw2.jpg" },
      { id: 3, title: "Movie 3", img: "/media/pre_wedding/pw3.jpg" },
      { id: 4, title: "Movie 4", img: "/media/pre_wedding/pw4.jpg" },
      { id: 5, title: "Movie 5", img: "/media/pre_wedding/pw5.jpg" },
      { id: 6, title: "Movie 6", img: "/media/pre_wedding/pw6.jpg" },
      { id: 7, title: "Movie 7", img: "/media/pre_wedding/pw7.jpg" },
      { id: 8, title: "Movie 8", img: "/media/pre_wedding/pw8.jpg" },
    ],
  },
  {
    id: 2,
    title: "New Releases",
    movies: [
      { id: 9, title: "Movie 9", img: "/media/reception/r6.jpg" },
      { id: 10, title: "Movie 10", img: "/media/reception/r7.jpg" },
      { id: 11, title: "Movie 11", img: "/media/reception/r8.jpg" },
      { id: 12, title: "Movie 12", img: "/media/reception/r9.jpg" },
      { id: 13, title: "Movie 13", img: "/media/reception/r10.jpg" },
    ],
  },
  {
    id: 3,
    title: "Top Picks for You",
    movies: [
      { id: 14, title: "Movie 14", img: "/media/reception/r11.jpg" },
      { id: 15, title: "Movie 15", img: "/media/reception/r12.jpg" },
      { id: 16, title: "Movie 16", img: "/media/reception/r13.jpg" },
      { id: 17, title: "Movie 17", img: "/media/reception/r14.jpg" },
      { id: 18, title: "Movie 18", img: "/media/reception/r15.jpg" },
    ],
  },
];

function NetflixScroller({ title, movies }) {
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full px-4 md:px-10 py-10 bg-gray-100">
      <h2 className="text-black text-xl md:text-2xl mb-4 md:mb-6 font-semibold">{title}</h2>
      <div className="relative flex items-center">
         <button
         className="absolute left-0 z-10 bg-black/50 p-2 rounded-full flex items-center justify-center"
         onClick={() => scroll(-300)}
         >
         <ChevronLeft size={24} className="text-white" />
         </button>
        {/* Movie Scroller */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden scrollbar-hide space-x-3 md:space-x-4 w-full px-4 md:px-10"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="min-w-[140px] md:min-w-[200px] lg:min-w-[240px] cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <button
         className="absolute right-0 z-10 bg-black/50 p-2 rounded-full flex items-center justify-center"
         onClick={() => scroll(300)}
         >
         <ChevronRight size={24} className="text-white" />
         </button>
      </div>
    </div>
  );
}

export default function NetflixPage() {
  return (
    <div className="bg-gray-200 py-10">
      {movieCategories.map((category) => (
        <NetflixScroller key={category.id} title={category.title} movies={category.movies} />
      ))}
    </div>
  );
}
