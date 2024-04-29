import { getBestSellingProducts } from '~/client/queries/get-best-selling-products';
import { getFeaturedProducts } from '~/client/queries/get-featured-products';
import { Hero } from '~/components/hero';
import { ProductCardCarousel } from '~/components/product-card-carousel';
import { Button } from '~/components/ui/button';

export default async function Home() {
  const [bestSellingProducts, featuredProducts] = await Promise.all([
    getBestSellingProducts({ imageWidth: 500, imageHeight: 500 }),
    getFeaturedProducts({ imageWidth: 500, imageHeight: 500 }),
  ]);

  return (
    <>
      <Hero
        slides={[
          <>
            <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </>,
          <>
            <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </>,
          <>
            <h2 className="text-5xl font-black lg:text-6xl">25% Off Sale</h2>
            <p className="max-w-xl">
              Lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <Button asChild className="w-fit">
              <a href="/#">Shop now</a>
            </Button>
          </>,
        ]}
      />

      <div className="my-10">
        <ProductCardCarousel
          products={bestSellingProducts}
          showCart={false}
          showCompare={false}
          title="Best Selling Products"
        />

        <ProductCardCarousel
          products={featuredProducts}
          showCart={false}
          showCompare={false}
          title="Featured Products"
        />
      </div>
    </>
  );
}

export const runtime = 'edge';
