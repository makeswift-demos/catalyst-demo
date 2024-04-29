import Image from 'next/image';

import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '@bigcommerce/components/slideshow';

import SlideshowBG from './slideshow-bg-01.jpg';

interface Props {
  className?: string;
  slides: React.ReactNode[];
}

export const Hero = ({ className, slides }: Props) => (
  <Slideshow className={className}>
    <SlideshowContent>
      {slides.length > 0 ? (
        slides.map((slide, index) => (
          <SlideshowSlide key={index}>
            <div className="relative">
              <Image
                alt="an assortment of brandless products against a blank background"
                className="absolute -z-10 object-cover"
                fill
                priority
                src={SlideshowBG}
              />
              <div className="flex flex-col gap-4 px-12 pb-48 pt-36">{slide}</div>
            </div>
          </SlideshowSlide>
        ))
      ) : (
        <div>Add some slides!</div>
      )}
      {/* <SlideshowSlide>
        <div className="relative">
          <Image
            alt="an assortment of brandless products against a blank background"
            className="absolute -z-10 object-cover"
            fill
            priority
            src={SlideshowBG}
          />
          <div className="flex flex-col gap-4 px-12 pb-48 pt-36">
            <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </div>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <h2 className="text-5xl font-black lg:text-6xl">Great Deals</h2>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Button asChild className="w-fit">
            <a href="/#">Shop now</a>
          </Button>
        </div>
      </SlideshowSlide>
      <SlideshowSlide>
        <div className="flex flex-col gap-4 bg-gray-100 px-12 pb-48 pt-36">
          <h2 className="text-5xl font-black lg:text-6xl">Low Prices</h2>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <Button asChild className="w-fit">
            <a href="/#">Shop now</a>
          </Button>
        </div>
      </SlideshowSlide> */}
    </SlideshowContent>
    <SlideshowControls>
      <SlideshowAutoplayControl />
      <SlideshowPreviousIndicator />
      <SlideshowPagination />
      <SlideshowNextIndicator />
    </SlideshowControls>
  </Slideshow>
);
