interface RatingProps {
    rating: number;
  }
  
  export default function Rating(props: RatingProps) {
    let total = props.rating;
    const stars = Array.from({ length: Math.floor(total) }).map((_, i) => {
      total -= 1;
  
      return (
        <li key={`star-${i}`}>
          <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/star-filled.svg" />
        </li>
      )
    });
  
    if (total > 0) {
      stars.push(
        <li key={`star-${stars.length}`}>
          <img src="https://furniro-bucket.s3.us-east-2.amazonaws.com/icons/star-half.svg" />
        </li>
      );
    }
  
    return (
      <ol className="flex items-center gap-1">
        {stars}
      </ol>
    )
  }