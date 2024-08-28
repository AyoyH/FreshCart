import React from "react";

export default function RatingStars({ ratingsAverage, rate }) {
  const isFullStar = ratingsAverage >= rate;
  const isPartialStar = ratingsAverage > rate - 1 && ratingsAverage < rate;
  const fillPercentage = (ratingsAverage - (rate - 1)) * 100;

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isPartialStar && (
        <defs>
          <linearGradient id={`grad-${rate}`}>
            <stop offset={`${100 - fillPercentage}%`} stopColor="yellow" />
            <stop offset={`${fillPercentage}%`} stopColor="gray" />
          </linearGradient>
        </defs>
      )}
      <path
        fill={
          isFullStar ? "yellow" : isPartialStar ? `url(#grad-${rate})` : "gray"
        }
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}
