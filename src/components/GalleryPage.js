// import React from 'react';
// import { useParams } from 'react-router-dom';

// const GalleryPage = () => {
//   const { id } = useParams(); // Get the card ID from the URL

//   // Define gallery images for each card
//   const galleryImages = {
//     1: [
//       `${process.env.PUBLIC_URL}/media/pre-wedding1.jpg`,
//       `${process.env.PUBLIC_URL}/media/pre-wedding2.jpg`,
//       `${process.env.PUBLIC_URL}/media/pre-wedding3.jpg`,
//     ],
//     2: [
//       `${process.env.PUBLIC_URL}/media/pre-birthday1.jpg`,
//       `${process.env.PUBLIC_URL}/media/pre-birthday2.jpg`,
//       `${process.env.PUBLIC_URL}/media/pre-birthday3.jpg`,
//     ],
//     3: [
//       `${process.env.PUBLIC_URL}/media/birthday1.jpg`,
//       `${process.env.PUBLIC_URL}/media/birthday2.jpg`,
//       `${process.env.PUBLIC_URL}/media/birthday3.jpg`,
//     ],
//     // Add similar entries for all cards
//     default: [`${process.env.PUBLIC_URL}/media/default.jpg`],
//   };

//   // Get the gallery images for the selected card, or default images if not found
//   const images = galleryImages[id] || galleryImages.default;

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {images.map((image, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img
//               src={image}
//               alt={`Gallery ${index + 1}`}
//               className="w-full h-48 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;

import React from 'react';
import { useParams } from 'react-router-dom';

const GalleryPage = () => {
  const { id } = useParams(); // Get the card ID from the URL

  // Define gallery images for each card
  const galleryImages = {
    1: [ 
        // Pre-wedding
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw1.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw2.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw3.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw4.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw5.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw6.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw7.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw8.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw9.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw10.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw11.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw12.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw13.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw14.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw15.jpg`,
      `${process.env.PUBLIC_URL}/media/pre_wedding/pw16.jpg`,
    ],
    2: [ 
        //wedding
        `${process.env.PUBLIC_URL}/media/wedding/m2.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m3.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m4.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m5.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m36.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m7.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m1.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m6.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m9.jpg`,

        `${process.env.PUBLIC_URL}/media/wedding/m10.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m37.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m38.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m11.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m12.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m13.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m14.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m15.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m8.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m17.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m18.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m19.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m20.jpg`,

        `${process.env.PUBLIC_URL}/media/wedding/m21.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m22.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m23.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m24.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m25.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m26.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m27.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m28.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m29.jpg`,

        `${process.env.PUBLIC_URL}/media/wedding/m30.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m31.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m32.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m33.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m34.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m16.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m39.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m35.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m40.jpg`,
        `${process.env.PUBLIC_URL}/media/wedding/m41.jpg`,
        
      
    ],
    3: [
        //Reception
        `${process.env.PUBLIC_URL}/media/reception/r1.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r2.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r3.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r4.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r5.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r6.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r7.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r8.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r9.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r10.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r11.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r15.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r14.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r16.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r17.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r13.jpg`,
        `${process.env.PUBLIC_URL}/media/reception/r12.jpg`,
      
    ],
    4: [
        // Haldi
        `${process.env.PUBLIC_URL}/media/haldi/h1.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h2.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h5.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h6.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h7.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h8.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h9.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h10.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h11.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h12.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h13.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h14.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h15.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h16.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h17.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h18.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h19.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h4.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h20.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h3.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h21.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h22.jpg`,
        `${process.env.PUBLIC_URL}/media/haldi/h23.jpg`,
      ],
      5: [
        // Sangeeth
        `${process.env.PUBLIC_URL}/media/sangeeth/s1.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s2.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s24.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s25.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s21.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s26.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s3.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s4.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s5.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s6.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s7.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s8.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s9.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s10.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s11.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s12.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s13.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s14.jpg`,
        // `${process.env.PUBLIC_URL}/media/sangeeth/s15.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s23.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s16.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s17.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s18.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s19.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s20.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s22.jpg`,
        `${process.env.PUBLIC_URL}/media/sangeeth/s27.jpg`,
      ],
      6: [
        // Pre-Birthday
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb1.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb2.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb3.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb5.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb7.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb8.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb9.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb10.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb11.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb12.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb13.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb14.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb15.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb16.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb17.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb4.jpg`,
        `${process.env.PUBLIC_URL}/media/pre_birthday/pb6.jpg`,
        
      ],
      7: [
        // Birthday
        `${process.env.PUBLIC_URL}/media/birthday/b1.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b2.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b3.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b4.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b5.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b6.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b7.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b8.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b9.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b10.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b11.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b12.jpg`,
        `${process.env.PUBLIC_URL}/media/birthday/b13.jpg`,

        // `${process.env.PUBLIC_URL}/media/maternity/b1.jpg`,
        // `${process.env.PUBLIC_URL}/media/maternity/b2.jpg`,
      ],
      8: [
        `${process.env.PUBLIC_URL}/media/event/e1.jpg`,
        `${process.env.PUBLIC_URL}/media/event/e2.jpg`,
        `${process.env.PUBLIC_URL}/media/event/e3.jpg`,
        // Event Photography
      ],
      9: [
        // Government Projects
        `${process.env.PUBLIC_URL}/media/government/g1.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g2.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g3.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g4.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g5.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g6.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g7.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g8.jpg`,
        `${process.env.PUBLIC_URL}/media/government/g9.jpg`,
      ],
      10: [
        // Corporate Shoots
        `${process.env.PUBLIC_URL}/media/default.jpg`,
      ],
      11: [
        // Portfolio Shoots
        `${process.env.PUBLIC_URL}/media/portfolio/p1.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p2.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p3.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p4.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p5.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p6.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p7.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p8.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p9.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p10.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p11.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p12.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p13.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p14.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p15.jpg`,
        `${process.env.PUBLIC_URL}/media/portfolio/p16.jpg`,
      ],
      12: [
        // Marketing & Media
        `${process.env.PUBLIC_URL}/media/marketMedia/mm1.jpg`,
        `${process.env.PUBLIC_URL}/media/marketMedia/mm2.jpg`,
        `${process.env.PUBLIC_URL}/media/marketMedia/mm3.jpg`,
        `${process.env.PUBLIC_URL}/media/marketMedia/mm4.jpg`,
        `${process.env.PUBLIC_URL}/media/marketMedia/mm5.jpg`,
        // `${process.env.PUBLIC_URL}/media/marketMedia/mm2.jpg`,
      ],
      13: [
        // Real Estate
        `${process.env.PUBLIC_URL}/media/realestate/r1.jpg`,
        `${process.env.PUBLIC_URL}/media/realestate/r2.jpg`,
        `${process.env.PUBLIC_URL}/media/realestate/r3.jpg`,
        `${process.env.PUBLIC_URL}/media/realestate/r4.jpg`,
      ],
      14: [
        // Maternity & Baby Shoot
        `${process.env.PUBLIC_URL}/media/maternity/b1.jpg`,
        `${process.env.PUBLIC_URL}/media/maternity/b2.jpg`,
        
        `${process.env.PUBLIC_URL}/media/maternity/b5.jpg`,
        `${process.env.PUBLIC_URL}/media/maternity/b6.jpg`,
        `${process.env.PUBLIC_URL}/media/maternity/b7.jpg`,
        `${process.env.PUBLIC_URL}/media/maternity/b8.jpg`,
        `${process.env.PUBLIC_URL}/media/maternity/b4.jpg`,
        `${process.env.PUBLIC_URL}/media/maternity/b3.jpg`,
        
        // `${process.env.PUBLIC_URL}/media/maternity/b9.jpg`,
        // `${process.env.PUBLIC_URL}/media/maternity/b10.jpg`,
        // `${process.env.PUBLIC_URL}/media/maternity/b11.jpg`,
      ],
      15: [
        // Cradel Shoot
        `${process.env.PUBLIC_URL}/media/cradle/c1.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c2.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c3.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c4.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c5.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c6.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c7.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c8.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c9.jpg`,
        `${process.env.PUBLIC_URL}/media/cradle/c10.jpg`,
      ],
      16: [
        // Drone Shoot
        `${process.env.PUBLIC_URL}/media/drone/d1.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d2.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d3.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d4.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d1.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d22.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d23.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d24.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d5.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d6.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d7.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d8.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d9.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d10.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d11.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d12.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d13.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d14.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d15.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d16.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d17.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d18.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d19.jpg`,
        `${process.env.PUBLIC_URL}/media/drone/d20.jpg`,
        
        `${process.env.PUBLIC_URL}/media/drone/d25.jpg`,
        // `${process.env.PUBLIC_URL}/media/drone/d26.jpg`,
      ],
      17: [
        // engagement
        `${process.env.PUBLIC_URL}/media/engagement/e1.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e2.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e3.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e4.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e5.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e6.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e7.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e8.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e9.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e10.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e11.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e12.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e13.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e14.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e15.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e16.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e17.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e18.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e19.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e20.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e21.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e22.jpg`,
        `${process.env.PUBLIC_URL}/media/engagement/e23.jpg`,
      ],
      

    // Add similar entries for all cards
    default: [`${process.env.PUBLIC_URL}/media/default.jpg`],
  };

  // Get the gallery images for the selected card, or default images if not found
  const images = galleryImages[id] || galleryImages.default;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            // className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full object-contain bg-gray-200" //h-96 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
