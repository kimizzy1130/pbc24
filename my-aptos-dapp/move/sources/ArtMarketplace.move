module marketplace::ArtMarketplace {
    use aptos_framework::coin;
    use std::coin::{deposit, withdraw};
    use std::signer;
    use aptos_framework::aptos_coin::AptosCoin;

    // Represents a single art piece listing
    struct ArtListing has key, store, drop {
        artist: address,
        original_image_hash: vector<u8>,
        glazed_image_hash: vector<u8>,
        price: u64,
    }

    // Represents the marketplace's balance
    struct MarketplaceBalance has key, store {
        balance: u64,
    }

    // Marketplace commission rate (e.g., 5%)
    const COMMISSION_RATE: u64 = 5;

    public fun list_art(
        artist: &signer,
        original_image_hash: vector<u8>,
        glazed_image_hash: vector<u8>,
        price: u64,
    ) {
        let artist_addr = signer::address_of(artist);
        let listing = ArtListing {
            artist: artist_addr,
            original_image_hash,
            glazed_image_hash,
            price,
        };
        move_to(artist, listing);
    }

    public fun buy_art(buyer: &signer, artist_addr: address) acquires ArtListing, MarketplaceBalance {
        let listing = borrow_global_mut<ArtListing>(artist_addr);
        let price = listing.price;
        
        // Transfer APT from buyer to this contract
        let payment = withdraw<AptosCoin>(buyer, price);

        // Calculate commission and artist's share
        let commission = price * COMMISSION_RATE / 100;
        let artist_share = price - commission;

        // Transfer commission to marketplace balance
        let marketplace_balance = borrow_global_mut<MarketplaceBalance>(@marketplace);
        let new_balance = marketplace_balance.balance + commission;
        marketplace_balance.balance = new_balance;

        let artist_payment = coin::extract<AptosCoin>(&mut payment, artist_share);

        // Transfer artist's share to artist
        coin::deposit(artist_addr, artist_payment);
        
        if (coin::value(&payment) > 0) {
            coin::deposit(signer::address_of(buyer), payment);
        } else {
            // If the payment has been fully consumed, explicitly destroy the empty Coin.
            coin::destroy_zero(payment);
        }
        //move_from<ArtListing>(artist_addr);
    }

    public fun withdraw_commission(owner: &signer) acquires MarketplaceBalance {
        let owner_addr = signer::address_of(owner);
        assert!(owner_addr == @marketplace, 403); // Only the owner/creator can withdraw
        
        let balance_state = borrow_global_mut<MarketplaceBalance>(@marketplace);
        let balance = balance_state.balance;
        let commission = coin::withdraw<AptosCoin>(owner, balance);
        balance_state.balance = 0;

        coin::deposit(owner_addr, commission);
    }

    // Initialization and other utility functions here...
}

