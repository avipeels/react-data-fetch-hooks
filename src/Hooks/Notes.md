# useCallback()
This is a hook that takes two arguments:
1. Inline callback function
2. Dependency array
The inline callback functions do execute only when one of the dependencies change. Otherwise it will return memoized callback functions.
## Scenario:
When a function reference is passed from parent to child this will help in avoiding unnecessary re-renders. 

