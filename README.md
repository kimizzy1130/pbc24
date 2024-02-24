# Graffito, Penn Blockchain Hackathon 2024

## Submission Details
1. Participant/Team Name
Sean Cho/Graffito
Madelyn Dempsey/Graffito
Izzy Kim/Graffito

3. Project Name
Graffito

3. Link to Tweet 
https://x.com/sean1dream/status/1761423461384179879?s=20
   

4. Brief description of your project
Graffito is a safe and secure IP marketplace between artists and GenAI companies. We empower digital artists to receive fair compensation for their original work. Simultaneously, we elevate new standards of transparency and ethics in GenAI image training datasets. We serve both artists and GenAI companies. Artists are currently losing jobs as their work is being scraped online and used without consent to train GenAI models. Existing solutions in the market that serve to protect artists — watermarking, opt-out lists, IP lawyers — are failing to actually protect artists. On the other hand, GenAI companies are being sued for $1B lawsuits by artists (Andersen v. Stability AI), in which even if they win the cases, they spend a tremendous amount of money on legal fees and compromise their PR image. Clearly, both artists and GenAI companies are in need of a solution that allows them to mutually benefit and co-exist. Our decentralized, safe, and secure IP marketplace protects artists original artwork through Glazing. Glazing makes changes to the image pixel that are hardly detectable to the human eye, but very visible to GenAI models. This prevents web scrapers from scraping image listed for sale pre-purchase and using it to train their GenAI models. We use Aptos and Near to facilitate smart contract between buyers (artists) and sellers (GenAI companies) which allows artists to receive compensation once an art has been purchased by GenAI companies for training purposes. GenAI companies receive raw, un-glazed image once a payment has been confirmed.

**NOTE We only had time to create a demo using our APTOS repository, as that is what we started working on first. However, we have a NEAR repository that we've included. The frontend for both would be the same. The RUST Smart contract in the NEAR repo is finished, and deployed here:
https://testnet.nearblocks.io/txns/Ekthf3vxgQ7e7LfCnzzqEByPuNbjEeC7cTSe6XbCYpXm# The NEAR repo we initialized using create-near-app is located here:
https://github.com/seanwjcho/marketplace-near and the smart contract is located under ./contract/src/lib.rs**


5. Country / Region
USA

6. Technical Solution your dApp is based on?
Aptos create dApp
Near create app

8. Which theme best describes your dApp?
Social Impact

9. What sponsor bounty you're applying to? (Note: Can me multiple)
Aptos, Near

10. Link to pitch deck (MUST INCLUDE LIVE DEMO LINK)
https://drive.google.com/file/d/1rnooEWSkfynHVhtPGUgej5Mq4PhhWEW0/view?usp=sharing

11. Deployed Smart Contract Address
    Aptos: https://explorer.aptoslabs.com/txn/0x9c39733cb9afdeff334cc44e45592d8e6deed2674129c8e80cecfc3ce43b9022?network=devnet
    Near: https://testnet.nearblocks.io/txns/Ekthf3vxgQ7e7LfCnzzqEByPuNbjEeC7cTSe6XbCYpXm#
12. Deployed to Any other Chain Yes/No
    Yes (Aptos & Near)

14. Is this part of a larger / past project? If yes, please include repo for larger project. Note: this can only help you. We are simply curious to see integration plans for your hackathon project.
Yes. Don't have a repo, but Maddie and Izzy working on business development side of this for a class.
## Premise: 

https://drive.google.com/file/d/1rnooEWSkfynHVhtPGUgej5Mq4PhhWEW0/view?usp=sharing

Graffito is a safe and secure IP marketplace between artists and GenAI companies. We empower digital artists to receive fair compensation for their original work. Simultaneously, we elevate new standards of transparency and ethics in GenAI image training datasets. We serve both artists and GenAI companies. Artists are currently losing jobs as their work is being scraped online and used without consent to train GenAI models. Existing solutions in the market that serve to protect artists — watermarking, opt-out lists, IP lawyers — are failing to actually protect artists. On the other hand, GenAI companies are being sued for $1B lawsuits by artists (Andersen v. Stability AI), in which even if they win the cases, they spend a tremendous amount of money on legal fees and compromise their PR image. Clearly, both artists and GenAI companies are in need of a solution that allows them to mutually benefit and co-exist. Our decentralized, safe, and secure IP marketplace protects artists original artwork through Glazing. Glazing makes changes to the image pixel that are hardly detectable to the human eye, but very visible to GenAI models. This prevents web scrapers from scraping image listed for sale pre-purchase and using it to train their GenAI models. We use Aptos and Near to facilitate smart contract between buyers (artists) and sellers (GenAI companies) which allows artists to receive compensation once an art has been purchased by GenAI companies for training purposes. GenAI companies receive raw, un-glazed image once a payment has been confirmed.

![Graffito Pitch](https://copper-dirty-goose-489.mypinata.cloud/ipfs/QmZ39iju8VNBf4C9JdcnvFVDrt6njVX86735bDT9ism2pG)

---

## Usage
Requirements: Node.js, Aptos CLI installed (brew install aptos)

1. Clone the repository

2. Download an Aptos wallet like Petra, WELLDONE, etc. Switch to DEVNET, and use the faucet to get some APT

3..
```
cd my-aptos-dapp
```

4. Navigate to ``move --> Move.toml`` and replace the address for ``marketplace`` in line 10 with the public key of the wallet you plan to deploy with.

5. In your terminal, run 
```
npm run move:init
```
When prompted to enter your private key, export the private key from your aptos wallet and input it into the terminal.

6. Then, run 
```
npm run move:compile
npm run move:publish
```
Select Y when prompted to spend xxxx fees to deploy the contract.

7. Upon successful deployment of the smart contract modules, open another terminal and run
```
cd my-aptos-dapp
npm start
```
A local host developer environment should now run. Users can connect wallet and attempt to buy an art from the marketplace. 
