import { useState } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function MotionImage({
  src,
  width,
  height,
  layout = 'responsive',
}: {
  src: string;
  width: string;
  height: string;
  layout: 'responsive' | 'fill' | 'intrinsic' | any;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <Image
          src={src}
          width={width}
          height={height}
          layout={layout}
          alt=""
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </section>
  );
}

export { MotionImage };
