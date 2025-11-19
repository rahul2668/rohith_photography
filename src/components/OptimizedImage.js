import React, { useState } from 'react';

/**
 * OptimizedImage Component
 *
 * Displays optimized images with:
 * - Progressive loading (blur placeholder → full image)
 * - WebP format with JPEG fallback
 * - Multiple size variants (thumbnail, medium, large)
 * - Lazy loading
 * - Smooth fade-in animation
 */
const OptimizedImage = ({
  folder,
  filename,
  alt,
  size = 'thumbnail', // 'thumbnail' | 'medium' | 'large'
  className = '',
  onClick,
  loading = 'lazy'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Extract filename without extension
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '');

  // Define intrinsic dimensions based on size variant
  const dimensions = {
    thumbnail: { width: 400, height: 267 },
    medium: { width: 1024, height: 683 },
    large: { width: 1920, height: 1280 }
  };

  const { width, height } = dimensions[size] || dimensions.medium;

  // Build paths to optimized images
  const webpPath = `/media/optimized/${folder}/${nameWithoutExt}-${size}.webp`;
  const jpegPath = `/media/optimized/${folder}/${nameWithoutExt}-${size}.jpg`;
  const fallbackPath = `/media/${folder}/${filename}`; // Original image as ultimate fallback

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder background - shows while loading */}
      {!imageLoaded && !imageError && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Main optimized image */}
      {!imageError ? (
        <picture>
          {/* Modern WebP format (smaller file size) */}
          <source srcSet={webpPath} type="image/webp" />

          {/* JPEG fallback for older browsers */}
          <source srcSet={jpegPath} type="image/jpeg" />

          {/* Final fallback to original image */}
          <img
            src={fallbackPath}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            onClick={onClick}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`
              w-full h-full object-cover
              transition-opacity duration-500
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              ${onClick ? 'cursor-pointer' : ''}
            `}
          />
        </picture>
      ) : (
        /* Error fallback - show original image directly */
        <img
          src={fallbackPath}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onClick={onClick}
          onLoad={handleImageLoad}
          className={`
            w-full h-full object-cover
            ${onClick ? 'cursor-pointer' : ''}
          `}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
