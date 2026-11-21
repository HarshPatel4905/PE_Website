import { useState } from 'react';
import { Layers } from 'lucide-react';
import { SITE_IMAGES, SiteImageKey } from '../cms/images';

interface TechnicalImageProps {
  imageKey: SiteImageKey;
  className?: string;
  imgClassName?: string;
  showCaption?: boolean;
  priority?: boolean;
}

export function TechnicalImage({
  imageKey,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  showCaption = false,
  priority = false,
}: TechnicalImageProps) {
  const [failed, setFailed] = useState(false);
  const asset = SITE_IMAGES[imageKey];

  return (
    <figure className={`overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={asset.src}
          alt={asset.alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
          className={imgClassName}
        />
      ) : (
        <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#102B46] via-[#172536] to-[#3977A8] flex flex-col items-center justify-center p-6 text-center text-[#DCE6EF]">
          <Layers className="w-8 h-8 mb-3 opacity-80" strokeWidth={1.5} />
          <p className="text-xs font-medium tracking-wide max-w-xs">{asset.caption}</p>
        </div>
      )}
      {showCaption && (
        <figcaption className="mt-2 text-xs text-[#172536]/65 font-sans">
          {asset.caption}
        </figcaption>
      )}
    </figure>
  );
}
