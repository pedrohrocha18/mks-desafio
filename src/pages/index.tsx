import SkeletonLoader from "@/components/layout/skeleton/Skeleton";
import Card from "@/components/products/Card";
import { useFetch } from "@/hooks/useFetch";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const data = useFetch();

  return (
    <div className="flex flex-row justify-center items-center min-h-[80vh] m-[25px] w-[100%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[35px]">
        {data ? (
          data.map((product: any) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  );
}
