# Product Direction

## Core Positioning

Notebook Atelier is not primarily a Mac news site.

It is a Korean buying-decision product for people who are close to purchasing a MacBook or another premium notebook and want a fast, trustworthy answer.

## Customer Problem

The target customer is overwhelmed by too much conflicting information and cannot confidently decide:

- which model fits them
- whether Air is enough or Pro is necessary
- whether now is the right time to buy
- which purchase option is the most sensible

## Primary Customer

- Korean students buying their first MacBook
- Korean office workers replacing an old laptop
- Developers and creators comparing Air vs Pro
- Buyers who have already watched multiple reviews and are still uncertain

## What We Must Solve

Reduce decision friction for expensive notebook purchases.

The homepage, article system, and affiliate system should all push toward this goal:

`Help the user decide what to buy in minutes, then present a trustworthy path to purchase.`

## Revenue Logic

The business works if:

1. users arrive with strong purchase intent
2. the site reduces uncertainty faster than YouTube or generic review sites
3. the recommendation result leads to affiliate clicks

The business does not work if it becomes only:

- a broad Apple news hub
- a generic AI-written media site
- a design-heavy site without purchase clarity

## Operating Principle

- Recommendation comes first
- Editorial content exists to support recommendation trust and SEO
- Social content exists to repurpose high-value editorial work
- AI automation must increase quality and consistency, not cheapen the brand

## Infrastructure Direction

- Web deployment: GitHub -> Vercel
- Database: Postgres, preferably Supabase Postgres
- AI operating layer: Paperclip on a separate worker/server
- Affiliate sync and automation: server-side only
