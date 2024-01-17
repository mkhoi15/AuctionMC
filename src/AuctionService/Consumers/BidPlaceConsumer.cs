﻿using AuctionService.Data;
using Contracts;
using MassTransit;

namespace AuctionService.Consumers;

public class BidPlaceConsumer : IConsumer<BidPlaced>
{
    private readonly AuctionDbContext _dbContext;
    public BidPlaceConsumer(AuctionDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task Consume(ConsumeContext<BidPlaced> context)
    {
        Console.WriteLine("---> Consuming BidPlaced Event");

        var auction = await _dbContext.Auctions.FindAsync(context.Message.AuctionId);

        if (auction.CurrentHightBid == null
           || context.Message.BidStatus.Contains("Accepted")
           && context.Message.Amount > auction.CurrentHightBid)
        {
            auction.CurrentHightBid = context.Message.Amount;
            await _dbContext.SaveChangesAsync();
        }
    }
}
