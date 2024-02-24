# Graffito, Penn Blockchain Hackathon 2024

## Premise: 

https://drive.google.com/file/d/1l2R4KJnRkC6U5gkp43rF1D5p67cuu66v/view

Graffito is a safe and secure IP marketplace between artists and GenAI companies. We empower digital artists to receive fair compensation for their original work. Simultaneously, we elevate new standards of transparency and ethics in GenAI image training datasets. We serve both artists and GenAI companies. Artists are currently losing jobs as their work is being scraped online and used without consent to train GenAI models. Existing solutions in the market that serve to protect artists — watermarking, opt-out lists, IP lawyers — are failing to actually protect artists. On the other hand, GenAI companies are being sued for $1B lawsuits by artists (Andersen v. Stability AI), in which even if they win the cases, they spend a tremendous amount of money on legal fees and compromise their PR image. Clearly, both artists and GenAI companies are in need of a solution that allows them to mutually benefit and co-exist. Our decentralized, safe, and secure IP marketplace protects artists original artwork through Glazing. Glazing makes changes to the image pixel that are hardly detectable to the human eye, but very visible to GenAI models. This prevents web scrapers from scraping image listed for sale pre-purchase and using it to train their GenAI models. We use Aptos to facilitate smart contract between buyers (artists) and sellers (GenAI companies) which allows artists to receive compensation once an art has been purchased by GenAI companies for training purposes. GenAI companies receive raw, un-glazed image once a payment has been confirmed.k

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
