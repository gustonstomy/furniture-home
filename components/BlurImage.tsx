import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import Skeleton from 'react-loading-skeleton';
// import blurredImage from '@/public/images/bluredImage.jpg';
import { twMerge } from 'tailwind-merge';

interface BlurImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
}

export default function BlurImage({
  alt,
  className,
  ...props
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Simple gray placeholder */}
      {(isLoading || hasError) && (
        <div className="h-full w-full">
          <Skeleton className="h-full w-full" />
        </div>
      )}

      {!hasError && (
        <Image
          alt={alt}
          {...props}
          className={twMerge(
            'transition-all duration-500 ease-in-out',
            className,
            isLoading ? 'opacity-0 blur-2xl' : 'opacity-100 blur-0',
          )}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}

      {/* Fallback for error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <span className="text-sm text-gray-400">{alt}</span>
        </div>
      )}
    </div>
  );
}
