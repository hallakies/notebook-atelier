# Overnight Master Plan

## North Star

Notebook Atelier must become the place Korean buyers visit right before purchasing a MacBook or another premium notebook.

The business wins only if it does three things well:

1. Bring in users with strong buying intent
2. Reduce their confusion in minutes
3. Convert that clarity into affiliate clicks and revenue

## Business Goal

- Build a premium, trustworthy notebook buying-decision product
- Start with MacBook buying intent and expand later to premium notebooks
- Minimize founder intervention by turning repeatable work into agent workflows

## Operating Rule

- Recommendation first
- Conversion second
- SEO and social as acquisition engines
- Automation only if it improves trust, speed, or repeatability

## Primary KPIs

- Recommendation start rate
- Recommendation completion rate
- Product click-through rate
- Organic sessions
- Revenue per 1,000 sessions
- Article publish count
- Instagram profile visits and site taps

## Immediate Bottlenecks

- Recommendation results do not always show matched purchase products
- Funnel tracking is incomplete
- Buying-intent SEO inventory is too thin
- Instagram automation is not connected yet
- Paperclip operating loop is documented but not yet running as a real company workflow

## Weekly Execution Plan

### Week 1: Revenue MVP Stabilization

Goal: make the core recommendation and affiliate path reliable.

- [ ] Fix recommendation result product visibility end-to-end
- [ ] Verify outbound purchase links on mobile and desktop
- [ ] Add stable click logging for recommendation products
- [ ] Clean up result-page copy so it speaks to buyers, not operators
- [ ] Validate mobile-first layout for the full funnel

Definition of done:

- Every recommendation profile returns at least one valid purchase option
- Result pages load correctly on mobile
- Every product click is logged with profile context

### Week 2: Search-Intent SEO Foundation

Goal: publish pages that attract purchase-intent traffic, not casual readers.

- [ ] Publish `macbook-recommendation`
- [ ] Publish `macbook-air-vs-pro`
- [ ] Publish `best-macbook-for-students`
- [ ] Publish `best-macbook-for-developers`
- [ ] Publish `should-i-buy-a-macbook-now`
- [ ] Add internal links between all buying-intent pages and the recommendation flow
- [ ] Add product modules inside these pages

Definition of done:

- At least 5 high-intent pages are live
- Each page links into the finder and one or more product blocks
- Metadata, headings, and internal links are in place

### Week 3: Content Repurposing and Social Engine

Goal: turn one site asset into multiple traffic surfaces.

- [ ] Create one premium Instagram carousel template
- [ ] Create one short-form reel brief template
- [ ] Convert the top 3 buying-intent articles into Instagram post drafts
- [ ] Build caption rules and CTA structure
- [ ] Define posting cadence and reporting format

Definition of done:

- One article can be turned into a carousel draft in a repeatable format
- Social content points back to site pages with buying intent

### Week 4: Automation Layer

Goal: remove manual repetition from content and commerce operations.

- [ ] Move Coupang sync into a stable worker schedule
- [ ] Add automatic recommendation-to-product remapping
- [ ] Generate article briefs from keyword clusters
- [ ] Generate weekly KPI reports
- [ ] Add failure logging and alert conditions

Definition of done:

- Product sync no longer depends on manual local intervention
- Content planning and KPI reporting can run on schedule

### Week 5-8: AI-Operated Company Setup

Goal: turn the documented company into an operating system.

- [ ] Stand up the Paperclip org chart
- [ ] Load CEO, Editorial, Growth, Commerce, and Social prompts
- [ ] Set heartbeat cadence by role
- [ ] Connect data review to agent priorities
- [ ] Make the weekly report drive the next backlog automatically

Definition of done:

- Agents can propose, prioritize, and execute routine operating work
- Founder only approves high-risk actions and major brand decisions

## Tonight's Checklist

This is the execution list to push through in one sitting.

### Block A: Revenue Path

- [ ] Fix the `Ready To Buy` product block so live results always show products
- [ ] Confirm product deeplinks open correctly from the public site
- [ ] Confirm each result profile has a mapped product set
- [ ] Confirm click logging is stored correctly

### Block B: Buyer Funnel

- [ ] Review homepage copy for buyer-facing tone only
- [ ] Tighten mobile spacing, CTA order, and result readability
- [ ] Remove any operator-facing or internal language still visible on site

### Block C: SEO Base

- [ ] Create the first content schema for buying-intent articles
- [ ] Draft the first 5 article slugs and structures
- [ ] Decide article templates for comparison, buyer guide, and timing pages

### Block D: Social System

- [ ] Define the first Instagram carousel template
- [ ] Define caption template and CTA rules
- [ ] Plan how article output becomes Instagram output automatically

### Block E: Operating System

- [ ] Finalize the AI company operating docs
- [ ] Define which tasks run in web, worker, and Paperclip layers
- [ ] Prepare the first weekly KPI report format

## Technical Todo

### Web

- [ ] Ensure recommendation results never return empty product arrays without a visible fallback state
- [ ] Add click tracking and event context
- [ ] Add article template routes
- [ ] Add structured data where useful

### Data

- [ ] Finalize product mapping tables
- [ ] Add reporting queries for clicks and profile performance
- [ ] Add article and social content source tables if needed

### Worker

- [ ] Move local sync logic into a stable scheduled process
- [ ] Add logs and rerun behavior
- [ ] Keep all secrets local or in deployment environments only

### Social

- [ ] Create post-ready output format
- [ ] Keep API publishing separated from content generation
- [ ] Only automate allowed platform actions

## Founder Involvement Boundary

Founder should only need to intervene for:

- account setup and credentials
- legal or platform-risk decisions
- major brand approvals
- exceptional failures

Everything else should move toward documented, repeatable, agent-run execution.

## Decision Filter

If a task does not improve one of these, it is not the priority tonight:

- trust
- conversion
- search capture
- automation repeatability
