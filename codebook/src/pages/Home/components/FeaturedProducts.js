import { ProductCard } from "../../../components/index"
import useFetch from "../../../hooks/useFetch"
const FeaturedProducts = () => {
  const {productList} = useFetch('featured_products')
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {productList.map((product,index) => {
          return (
            <ProductCard key={index} product={product} />
          )
        })}

      </div>
    </section>
  )
}

export default FeaturedProducts