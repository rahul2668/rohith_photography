import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Grid, Maximize2 } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import OptimizedImage from './OptimizedImage';

const GalleryPage = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Define gallery images with folder and filename for optimization
  const galleryImages = {
    1: [
      { folder: 'pre_wedding', filename: 'pw1.jpg' },
      { folder: 'pre_wedding', filename: 'pw2.jpg' },
      { folder: 'pre_wedding', filename: 'pw3.jpg' },
      { folder: 'pre_wedding', filename: 'pw4.jpg' },
      { folder: 'pre_wedding', filename: 'pw5.jpg' },
      { folder: 'pre_wedding', filename: 'pw6.jpg' },
      { folder: 'pre_wedding', filename: 'pw7.jpg' },
      { folder: 'pre_wedding', filename: 'pw8.jpg' },
      { folder: 'pre_wedding', filename: 'pw9.jpg' },
      { folder: 'pre_wedding', filename: 'pw10.jpg' },
      { folder: 'pre_wedding', filename: 'pw11.jpg' },
      { folder: 'pre_wedding', filename: 'pw12.jpg' },
      { folder: 'pre_wedding', filename: 'pw13.jpg' },
      { folder: 'pre_wedding', filename: 'pw14.jpg' },
      { folder: 'pre_wedding', filename: 'pw15.jpg' },
      { folder: 'pre_wedding', filename: 'pw16.jpg' },
    ],
    2: [
      { folder: 'wedding', filename: 'm2.jpg' },
      { folder: 'wedding', filename: 'm3.jpg' },
      { folder: 'wedding', filename: 'm4.jpg' },
      { folder: 'wedding', filename: 'm5.jpg' },
      { folder: 'wedding', filename: 'm36.jpg' },
      { folder: 'wedding', filename: 'm7.jpg' },
      { folder: 'wedding', filename: 'm1.jpg' },
      { folder: 'wedding', filename: 'm6.jpg' },
      { folder: 'wedding', filename: 'm9.jpg' },
      { folder: 'wedding', filename: 'm10.jpg' },
      { folder: 'wedding', filename: 'm37.jpg' },
      { folder: 'wedding', filename: 'm38.jpg' },
      { folder: 'wedding', filename: 'm11.jpg' },
      { folder: 'wedding', filename: 'm12.jpg' },
      { folder: 'wedding', filename: 'm13.jpg' },
      { folder: 'wedding', filename: 'm14.jpg' },
      { folder: 'wedding', filename: 'm15.jpg' },
      { folder: 'wedding', filename: 'm8.jpg' },
      { folder: 'wedding', filename: 'm17.jpg' },
      { folder: 'wedding', filename: 'm18.jpg' },
      { folder: 'wedding', filename: 'm19.jpg' },
      { folder: 'wedding', filename: 'm20.jpg' },
      { folder: 'wedding', filename: 'm21.jpg' },
      { folder: 'wedding', filename: 'm22.jpg' },
      { folder: 'wedding', filename: 'm23.jpg' },
      { folder: 'wedding', filename: 'm24.jpg' },
      { folder: 'wedding', filename: 'm25.jpg' },
      { folder: 'wedding', filename: 'm26.jpg' },
      { folder: 'wedding', filename: 'm27.jpg' },
      { folder: 'wedding', filename: 'm28.jpg' },
      { folder: 'wedding', filename: 'm29.jpg' },
      { folder: 'wedding', filename: 'm30.jpg' },
      { folder: 'wedding', filename: 'm31.jpg' },
      { folder: 'wedding', filename: 'm32.jpg' },
      { folder: 'wedding', filename: 'm33.jpg' },
      { folder: 'wedding', filename: 'm34.jpg' },
      { folder: 'wedding', filename: 'm16.jpg' },
      { folder: 'wedding', filename: 'm39.jpg' },
      { folder: 'wedding', filename: 'm35.jpg' },
      { folder: 'wedding', filename: 'm40.jpg' },
      { folder: 'wedding', filename: 'm41.jpg' },
    ],
    3: [
      { folder: 'reception', filename: 'r1.jpg' },
      { folder: 'reception', filename: 'r2.jpg' },
      { folder: 'reception', filename: 'r3.jpg' },
      { folder: 'reception', filename: 'r4.jpg' },
      { folder: 'reception', filename: 'r5.jpg' },
      { folder: 'reception', filename: 'r6.jpg' },
      { folder: 'reception', filename: 'r7.jpg' },
      { folder: 'reception', filename: 'r8.jpg' },
      { folder: 'reception', filename: 'r9.jpg' },
      { folder: 'reception', filename: 'r10.jpg' },
      { folder: 'reception', filename: 'r11.jpg' },
      { folder: 'reception', filename: 'r15.jpg' },
      { folder: 'reception', filename: 'r14.jpg' },
      { folder: 'reception', filename: 'r16.jpg' },
      { folder: 'reception', filename: 'r17.jpg' },
      { folder: 'reception', filename: 'r13.jpg' },
      { folder: 'reception', filename: 'r12.jpg' },
    ],
    4: [
      { folder: 'haldi', filename: 'h1.jpg' },
      { folder: 'haldi', filename: 'h2.jpg' },
      { folder: 'haldi', filename: 'h5.jpg' },
      { folder: 'haldi', filename: 'h6.jpg' },
      { folder: 'haldi', filename: 'h7.jpg' },
      { folder: 'haldi', filename: 'h8.jpg' },
      { folder: 'haldi', filename: 'h9.jpg' },
      { folder: 'haldi', filename: 'h10.jpg' },
      { folder: 'haldi', filename: 'h11.jpg' },
      { folder: 'haldi', filename: 'h12.jpg' },
      { folder: 'haldi', filename: 'h13.jpg' },
      { folder: 'haldi', filename: 'h14.jpg' },
      { folder: 'haldi', filename: 'h15.jpg' },
      { folder: 'haldi', filename: 'h16.jpg' },
      { folder: 'haldi', filename: 'h17.jpg' },
      { folder: 'haldi', filename: 'h18.jpg' },
      { folder: 'haldi', filename: 'h19.jpg' },
      { folder: 'haldi', filename: 'h4.jpg' },
      { folder: 'haldi', filename: 'h20.jpg' },
      { folder: 'haldi', filename: 'h3.jpg' },
      { folder: 'haldi', filename: 'h21.jpg' },
      { folder: 'haldi', filename: 'h22.jpg' },
      { folder: 'haldi', filename: 'h23.jpg' },
    ],
    5: [
      { folder: 'sangeeth', filename: 's1.jpg' },
      { folder: 'sangeeth', filename: 's2.jpg' },
      { folder: 'sangeeth', filename: 's24.jpg' },
      { folder: 'sangeeth', filename: 's25.jpg' },
      { folder: 'sangeeth', filename: 's21.jpg' },
      { folder: 'sangeeth', filename: 's26.jpg' },
      { folder: 'sangeeth', filename: 's3.jpg' },
      { folder: 'sangeeth', filename: 's4.jpg' },
      { folder: 'sangeeth', filename: 's5.jpg' },
      { folder: 'sangeeth', filename: 's6.jpg' },
      { folder: 'sangeeth', filename: 's7.jpg' },
      { folder: 'sangeeth', filename: 's8.jpg' },
      { folder: 'sangeeth', filename: 's9.jpg' },
      { folder: 'sangeeth', filename: 's10.jpg' },
      { folder: 'sangeeth', filename: 's11.jpg' },
      { folder: 'sangeeth', filename: 's12.jpg' },
      { folder: 'sangeeth', filename: 's13.jpg' },
      { folder: 'sangeeth', filename: 's14.jpg' },
      { folder: 'sangeeth', filename: 's23.jpg' },
      { folder: 'sangeeth', filename: 's16.jpg' },
      { folder: 'sangeeth', filename: 's17.jpg' },
      { folder: 'sangeeth', filename: 's18.jpg' },
      { folder: 'sangeeth', filename: 's19.jpg' },
      { folder: 'sangeeth', filename: 's20.jpg' },
      { folder: 'sangeeth', filename: 's22.jpg' },
      { folder: 'sangeeth', filename: 's27.jpg' },
    ],
    6: [
      { folder: 'pre_birthday', filename: 'pb1.jpg' },
      { folder: 'pre_birthday', filename: 'pb2.jpg' },
      { folder: 'pre_birthday', filename: 'pb3.jpg' },
      { folder: 'pre_birthday', filename: 'pb5.jpg' },
      { folder: 'pre_birthday', filename: 'pb7.jpg' },
      { folder: 'pre_birthday', filename: 'pb8.jpg' },
      { folder: 'pre_birthday', filename: 'pb9.jpg' },
      { folder: 'pre_birthday', filename: 'pb10.jpg' },
      { folder: 'pre_birthday', filename: 'pb11.jpg' },
      { folder: 'pre_birthday', filename: 'pb12.jpg' },
      { folder: 'pre_birthday', filename: 'pb13.jpg' },
      { folder: 'pre_birthday', filename: 'pb14.jpg' },
      { folder: 'pre_birthday', filename: 'pb15.jpg' },
      { folder: 'pre_birthday', filename: 'pb16.jpg' },
      { folder: 'pre_birthday', filename: 'pb17.jpg' },
      { folder: 'pre_birthday', filename: 'pb4.jpg' },
      { folder: 'pre_birthday', filename: 'pb6.jpg' },
    ],
    7: [
      { folder: 'birthday', filename: 'b1.jpg' },
      { folder: 'birthday', filename: 'b2.jpg' },
      { folder: 'birthday', filename: 'b3.jpg' },
      { folder: 'birthday', filename: 'b4.jpg' },
      { folder: 'birthday', filename: 'b5.jpg' },
      { folder: 'birthday', filename: 'b6.jpg' },
      { folder: 'birthday', filename: 'b7.jpg' },
      { folder: 'birthday', filename: 'b8.jpg' },
      { folder: 'birthday', filename: 'b9.jpg' },
      { folder: 'birthday', filename: 'b10.jpg' },
      { folder: 'birthday', filename: 'b11.jpg' },
      { folder: 'birthday', filename: 'b12.jpg' },
      { folder: 'birthday', filename: 'b13.jpg' },
    ],
    8: [
      { folder: 'event', filename: 'e1.jpg' },
      { folder: 'event', filename: 'e2.jpg' },
      { folder: 'event', filename: 'e3.jpg' },
    ],
    9: [
      { folder: 'government', filename: 'g1.jpg' },
      { folder: 'government', filename: 'g2.jpg' },
      { folder: 'government', filename: 'g3.jpg' },
      { folder: 'government', filename: 'g4.jpg' },
      { folder: 'government', filename: 'g5.jpg' },
      { folder: 'government', filename: 'g6.jpg' },
      { folder: 'government', filename: 'g7.jpg' },
      { folder: 'government', filename: 'g8.jpg' },
      { folder: 'government', filename: 'g9.jpg' },
    ],
    10: [
      { folder: '', filename: 'default.jpg' },
    ],
    11: [
      { folder: 'portfolio', filename: 'p1.jpg' },
      { folder: 'portfolio', filename: 'p2.jpg' },
      { folder: 'portfolio', filename: 'p3.jpg' },
      { folder: 'portfolio', filename: 'p4.jpg' },
      { folder: 'portfolio', filename: 'p5.jpg' },
      { folder: 'portfolio', filename: 'p6.jpg' },
      { folder: 'portfolio', filename: 'p7.jpg' },
      { folder: 'portfolio', filename: 'p8.jpg' },
      { folder: 'portfolio', filename: 'p9.jpg' },
      { folder: 'portfolio', filename: 'p10.jpg' },
      { folder: 'portfolio', filename: 'p11.jpg' },
      { folder: 'portfolio', filename: 'p12.jpg' },
      { folder: 'portfolio', filename: 'p13.jpg' },
      { folder: 'portfolio', filename: 'p14.jpg' },
      { folder: 'portfolio', filename: 'p15.jpg' },
      { folder: 'portfolio', filename: 'p16.jpg' },
    ],
    12: [
      { folder: 'marketMedia', filename: 'mm1.jpg' },
      { folder: 'marketMedia', filename: 'mm2.jpg' },
      { folder: 'marketMedia', filename: 'mm3.jpg' },
      { folder: 'marketMedia', filename: 'mm4.jpg' },
      { folder: 'marketMedia', filename: 'mm5.jpg' },
    ],
    13: [
      { folder: 'realestate', filename: 'r1.jpg' },
      { folder: 'realestate', filename: 'r2.jpg' },
      { folder: 'realestate', filename: 'r3.jpg' },
      { folder: 'realestate', filename: 'r4.jpg' },
    ],
    14: [
      { folder: 'maternity', filename: 'b1.jpg' },
      { folder: 'maternity', filename: 'b2.jpg' },
      { folder: 'maternity', filename: 'b5.jpg' },
      { folder: 'maternity', filename: 'b6.jpg' },
      { folder: 'maternity', filename: 'b7.jpg' },
      { folder: 'maternity', filename: 'b8.jpg' },
      { folder: 'maternity', filename: 'b4.jpg' },
      { folder: 'maternity', filename: 'b3.jpg' },
    ],
    15: [
      { folder: 'cradle', filename: 'c1.jpg' },
      { folder: 'cradle', filename: 'c2.jpg' },
      { folder: 'cradle', filename: 'c3.jpg' },
      { folder: 'cradle', filename: 'c4.jpg' },
      { folder: 'cradle', filename: 'c5.jpg' },
      { folder: 'cradle', filename: 'c6.jpg' },
      { folder: 'cradle', filename: 'c7.jpg' },
      { folder: 'cradle', filename: 'c8.jpg' },
      { folder: 'cradle', filename: 'c9.jpg' },
      { folder: 'cradle', filename: 'c10.jpg' },
    ],
    16: [
      { folder: 'drone', filename: 'd1.jpg' },
      { folder: 'drone', filename: 'd2.jpg' },
      { folder: 'drone', filename: 'd3.jpg' },
      { folder: 'drone', filename: 'd4.jpg' },
      { folder: 'drone', filename: 'd1.jpg' },
      { folder: 'drone', filename: 'd22.jpg' },
      { folder: 'drone', filename: 'd23.jpg' },
      { folder: 'drone', filename: 'd24.jpg' },
      { folder: 'drone', filename: 'd5.jpg' },
      { folder: 'drone', filename: 'd6.jpg' },
      { folder: 'drone', filename: 'd7.jpg' },
      { folder: 'drone', filename: 'd8.jpg' },
      { folder: 'drone', filename: 'd9.jpg' },
      { folder: 'drone', filename: 'd10.jpg' },
      { folder: 'drone', filename: 'd11.jpg' },
      { folder: 'drone', filename: 'd12.jpg' },
      { folder: 'drone', filename: 'd13.jpg' },
      { folder: 'drone', filename: 'd14.jpg' },
      { folder: 'drone', filename: 'd15.jpg' },
      { folder: 'drone', filename: 'd16.jpg' },
      { folder: 'drone', filename: 'd17.jpg' },
      { folder: 'drone', filename: 'd18.jpg' },
      { folder: 'drone', filename: 'd19.jpg' },
      { folder: 'drone', filename: 'd20.jpg' },
      { folder: 'drone', filename: 'd25.jpg' },
    ],
    17: [
      { folder: 'engagement', filename: 'e1.jpg' },
      { folder: 'engagement', filename: 'e2.jpg' },
      { folder: 'engagement', filename: 'e3.jpg' },
      { folder: 'engagement', filename: 'e4.jpg' },
      { folder: 'engagement', filename: 'e5.jpg' },
      { folder: 'engagement', filename: 'e6.jpg' },
      { folder: 'engagement', filename: 'e7.jpg' },
      { folder: 'engagement', filename: 'e8.jpg' },
      { folder: 'engagement', filename: 'e9.jpg' },
      { folder: 'engagement', filename: 'e10.jpg' },
      { folder: 'engagement', filename: 'e11.jpg' },
      { folder: 'engagement', filename: 'e12.jpg' },
      { folder: 'engagement', filename: 'e13.jpg' },
      { folder: 'engagement', filename: 'e14.jpg' },
      { folder: 'engagement', filename: 'e15.jpg' },
      { folder: 'engagement', filename: 'e16.jpg' },
      { folder: 'engagement', filename: 'e17.jpg' },
      { folder: 'engagement', filename: 'e18.jpg' },
      { folder: 'engagement', filename: 'e19.jpg' },
      { folder: 'engagement', filename: 'e20.jpg' },
      { folder: 'engagement', filename: 'e21.jpg' },
      { folder: 'engagement', filename: 'e22.jpg' },
      { folder: 'engagement', filename: 'e23.jpg' },
    ],
    default: [{ folder: '', filename: 'default.jpg' }],
  };

  // Get the gallery images for the selected card, or default images if not found
  const images = galleryImages[id] || galleryImages.default;

  // Get category name based on ID for better UX
  const getCategoryName = (id) => {
    const categoryMap = {
      1: "Pre-Wedding",
      2: "Wedding",
      3: "Reception",
      4: "Haldi Ceremony",
      5: "Sangeeth Night",
      6: "Pre-Birthday",
      7: "Birthday",
      8: "Event Photography",
      9: "Government Projects",
      10: "Corporate Shoots",
      11: "Portfolio Shoots",
      12: "Marketing & Media",
      13: "Real Estate",
      14: "Maternity Shoot",
      15: "Cradle Shoot",
      16: "Drone Shoot",
      17: "Engagement"
    };
    return categoryMap[id] || "Gallery";
  };

  // Prepare slides for lightbox (using large optimized images)
  const lightboxSlides = images.map(({ folder, filename }) => {
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '');
    return {
      src: `/media/optimized/${folder}/${nameWithoutExt}-large.jpg`,
      alt: `${getCategoryName(id)} Gallery`,
      width: 1920,
      height: 1280,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Grid size={20} />
              <span className="text-sm">{images.length} Photos</span>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {getCategoryName(id)} Gallery
            </h1>
            <p className="text-gray-600 mt-2">
              Explore our collection of {images.length} stunning photographs
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map(({ folder, filename }, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setLightboxOpen(true);
              }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <OptimizedImage
                  folder={folder}
                  filename={filename}
                  alt={`${getCategoryName(id)} ${index + 1}`}
                  size="medium"
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Maximize2
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    size={32}
                  />
                </div>

                {/* Image Number Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Capturing moments that last a lifetime
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Lightbox for full-screen image viewing */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
        plugins={[Zoom, Thumbnails, Fullscreen]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: 'bottom',
          width: 120,
          height: 80,
          border: 0,
          borderRadius: 4,
          padding: 0,
          gap: 16,
        }}
        animation={{
          fade: 300,
          swipe: 250,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
      />
    </div>
  );
};

export default GalleryPage;
