import { notFound } from "next/navigation";

export default function ReviewDetail({ params }: {
    params: { 
        productId: string;
        reviewId: string;
     };
}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
        return null;
    }

    return <h1>Product {params.productId} Review {params.reviewId}</h1>;
}
  