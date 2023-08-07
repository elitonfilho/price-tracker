# Requirements

# Prompt schema
## Query schema
- id
- ProductName
- URL
- Regex to match (optional)
- StrategyId
## Strategy schema ?

# Result from query schema
    - product schema
        - productId
        - productName
        - productLink
        - availableSites
    - price schema
        - priceIid
        - productId key
        - site
        - date
        - price
    - groupSchema
        - id
        - productListIds
        - name
    - groupPrice

# routes

# App schema
Controller
    Watcher
        Run a strategy on a event
        Calls db controller to store results
    Strategies
        Get entries from DB Controller
        Cache ?
    Db controller (singleton)
        Basic stuff
        Statistics run by other service ?