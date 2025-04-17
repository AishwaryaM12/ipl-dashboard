import Image from 'next/image';
import { useState } from 'react';

const SafeImage = ({ src, fallback, ...props }: { src: string; fallback: string; alt: string; width: number; height: number }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            onError={() => setImgSrc(fallback)}
            alt={props.alt}
        />
    );
};

export default SafeImage;
