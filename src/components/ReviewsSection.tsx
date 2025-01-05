"use client";

import { TProductReview, TUser } from "@/types";
import { StarIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { addProductReviews } from "@/actions/product_reviews";

const ReviewsSection = ({
  productId,
  user,
  initialReviews,
}: {
  productId: string;
  user: TUser | null;
  initialReviews: TProductReview[];
}) => {
  const [reviews, setReviews] = useState<TProductReview[]>(
    initialReviews || []
  );
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [reviewRating, setReviewRating] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      try {
        const newReview = {
          product_id: productId,
          user_id: user.id,
          title: reviewTitle,
          description: reviewDescription,
          rating: reviewRating,
        };
        const { data, error, message } = await addProductReviews(newReview);

        console.log("data", data);
        console.log("error", error);
        console.log("message", message);

        if (data) {
          setReviews((prev) => [...prev, data]);
          setReviewTitle("");
          setReviewDescription("");
          setReviewRating(0);
        }
      } catch (error) {
        console.error("Failed to submit review:", error);
      }
    }
  };

  return (
    <div className="grid gap-6">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Reviews</h2>
      <div className="grid gap-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="border-b border-muted pb-4">
            <RatingDisplay rating={review.rating} />
            <h2 className="text-lg font-bold">{review.title}</h2>
            <p>{review.description}</p>
          </div>
        ))}

        {reviews.length === 0 && (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </div>
      {user && (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div>
            <label htmlFor="rating" className="block text-lg font-semibold">
              Rating
            </label>
            <select
              id="rating"
              value={reviewRating}
              onChange={(e) => setReviewRating(Number(e.target.value))}
              className="border rounded p-2 w-full"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 && "s"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="title" className="block text-lg font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              value={reviewDescription}
              onChange={(e) => setReviewDescription(e.target.value)}
              className="border rounded p-2 w-full"
              rows={4}
            />
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      )}
    </div>
  );
};

export default ReviewsSection;

const RatingDisplay = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon
      key={index}
      className={`w-6 h-6 ${
        index < Math.round(rating)
          ? "fill-accent stroke-accent"
          : "fill-gray stroke-accent"
      }`}
    />
  ));
  return <div className="flex items-center gap-1">{stars}</div>;
};
