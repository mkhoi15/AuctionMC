
export type PagedResult<T> = {
    result: T[];
    pageCount: number;
    totalCount: number;
}


export interface Auction {
    id: string
    reservePrice: number
    seller: string
    winner?: string
    soldAmount: number
    currentHightBid: number
    createdAt: string
    updatedAt: string
    auctionEnd: string
    status: string
    make: string
    model: string
    year: number
    color: string
    mileage: number
    imageUrl: string
  }