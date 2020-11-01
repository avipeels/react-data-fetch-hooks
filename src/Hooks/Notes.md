# useCallback()
This is a hook that takes two arguments:
1. Inline callback function
2. Dependency array
The inline callback functions do execute only when one of the dependencies change. Otherwise it will return **memoized callback functions**.
## Scenario:
When a function reference is passed from parent to child this will help in avoiding unnecessary re-renders. 

# useMemo()
This hook returns **memoized values** The operation is performed only once and the value is stored in the cache.

This is a hook that takes two arguments:
1. Callback function
2. Dependency array

## Scenario:
When there is heavy repititive calculation.

# useRef()
This hook helps in accessing **DOM nodes or HTML elements**
It takes one arguments:
1. Initial value

And returns mutable object(state can be changed after they are created). This return ref object holds a mutable value in its current property which will remain same on every re-render.

