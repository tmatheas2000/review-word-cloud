export interface Review {
    id: number,
    author: string,
    reviewText: string,
    rating: number
}

export interface Keyword {
    key: string,
    value: number
}

export interface AggModal {
    list: Array<Review>,
    statement?: string,
    keywords: Array<Keyword>
}

export interface RatingBasedReviews {
    rating_1: AggModal,
    rating_2: AggModal,
    rating_3: AggModal,
    rating_4: AggModal,
    rating_5: AggModal
}