# React Render (Codevolution)

## Lec 2 - Rendering (5:43)

# When we run react app, the code written in the components get translated into React's elements that mounted onto the DOM. This process is known as Rendering.

# Above react rendering process is divided into phases - 1). Render phase, 2). Commit phase

# React Elements - React elements are JS object which describe the structure of the UI.

# Once the JSX to React elements conversion is done for the entire component tree, all the React's elements are handed over to commit phase. In commit phase, all react's elements are applied to DOM tree using ReactDOM package. This is the rendering behaviour for just 'intial render' of the react app.

# As we know, react components need to be re-rendered in order to update UI.

# During the render phase, React will start at root of the component tree and goes downwards to leaf components finding all the components that have been flagged, as flagged components needing updates.

# A component can flagged itself for an update by calling useState() hook's setter function or by calling useReducer() hook's dispatch() function. Then for each of the flagged components, react will invoke the createElement() method and converts component's JSX into React Elements and stores that render's output.  

# In commit phase, react app's changes applied to the DOM.

# Note - Rendering is not same as updating the DOM. A component may be rendered without any visible changes to the DOM.
For example - During rendering, if component converts into same react element as it did in the previous render the elements are discarded and no changes are applied to the DOM.

# React updates DOM efficiently in the sense that all updates are batched and updated at once. This helps reduce the performance issues incurred by updating the DOM multiple times in rapid succession.

*****************************************************************************************************************

## Lec 3 - useState (12:40)

# command - rafc

# In index.js file file , we can check that the App component is wrapped in React.StrictMode.

Q What React.StrictMode does?
# This wrapper intentionally double invoke the function component body only in development mode. If we deploy the app to prod then we would see the log statement only once as intended.

# If we remove the React.StrictMode from App component then there will be only one log statement in the Browser's console.

# After intial render one of the way to flag a component for re-render is by calling setter function from useState (setCount() in example code UseState.js file)

# Re-rendering behaviour wrt render and commit phase :-

# What is special case with useState and re-rendering is that if we update a state hook to same value as the current state react may render that component one more time and then bail out from subsequent renders.

# Note - After the intial render if you call a setter function and set the state to same value (0), the component will not re-render.

# After a component has been re-rendered, if you set the state variable to the same value the component will re-render but only one more time.

# Once react indentify the flagged components, then react requires that useState updates must pass in or return a new reference as the state value, if state is primitive type then it has to be new string, number or boolean, if it is not the case then react will simply bail out from render phase for that component.

# Further bailing out part has two cases - 
1). if only the intial render is completed and value passed into setter function is same as before the render phase bails out from proceeding further.
2). if component has been re-rendered already then the component will proceed with the render phase one more time.

# Note - React goes to render phase only to discard the result.

*****************************************************************************************************************

## Lec 4 - useReducer (9:24)

# useReducer hook bahaves very similar to useState hook during rendering phase.

# In case of useReducer hook , anytime we dispatch an action, component re-renders.

# When component flagged during useReducer, react sees that useReducer is the only component that needs an update.

# Just like useState hook, useReducer hook also has the exception if we are updating the state to the same value after the intial render, the component will not re-render.

# If we are updating to same value after re-renders, react will render that specific component one more time and then bails out from any subsequent renders.

# so, useReducer hook has similar rendering behaviour as that of useState hook.

*****************************************************************************************************************

## Lec 5 - State Immutability (11:17)

# When it comes to useState and useReducer react does not re-render a component when new state is same as old state. However, we have seen this for only primitive types data.

# Rendering behaviour when we try to mutate objects and array.

# We can check in browser's console that on click of button component doesn't re-render, this is because of Object.is() method algorithm that react uses.

# When we use object as a state then the reference to the object must change for the component to queue a re-render after comparing old and new state. This is a common mistake that we tend to make as begineers i.e directly mutating the object and expecting the component to re-render.

# To fix above issue, we need to create a copy of old state

# syntax - 
    const newPName = {...iState};
    newPName.fName = 'John'
    newPName.lName = 'Grey'
    setPname(newPName);

# We can use above technique to re-render component when we use array.

# When we push elements into the same array then array values change but reference itself doesn't change.

# Again to fix this issue we need to create copy of array then push items and pass the new array into setter function of useState.

# Note - this rendering behaviour of object and array holds good for useReducer hook as well.

*****************************************************************************************************************

## Lec 6 - Parent and Child (11:02)

# Rendering behaviour when dealing with Parent & Child component :- 

# When a Parent component renders, react will recursively render all of its child components.

# In given example (Parent.js & Child.js), on page load Parent component will render which in turn will cause the child component to render.

# There will be two cases - 

1). When new state is different from the old state :- it causes child component to re-render.

2). When new state is same as the old state

2.a). When we call setter function passing in same state value right after the initial render :- here react bails out of re-rendering the parent component, if the parent component did not re-render then there is no need for the child component to re-render.

2.b). When we call setter function passing in the same state value right after component has re-rendered one or more time :- When we call a setter function or dispatch function with same state value after the re-render, react will re-render the parent component just one more time and will not re-render the child component. The parent component has to be rendered one more time to ensure that if it's safe to bail out from future renders.This same holds good for useReducer hook as well.

# Child component went through the render phase but not the commit phase. This is a "Unnecessary render".

# "Unnecessary render" does affect the performance.

*****************************************************************************************************************

## Lec 7 - Same Element Reference (12:41)

# Unnecessary Renders - where the child component goes through the render phase but not the commit phase.

# Main causes for re-render -
1). A component can re-render if it calls a setter function or a dispatch function.

2). A component can render if its parent component rendered.

# Technique to prevent unnecessary render of child component :- to optimize unnecessary render of the child component we moved child component from being invoked in Parent component JSX to being passed as a 'prop'.

# As we know, a component can change its state but it can never change its props. Taking this into account React will automatically provide us with optimization. 

# Children props has to be referencing the same element from the previous render, so it will skip the render phase for the ChildOne component.

# If at all component was re-rendering because of a props change then the child one component would also have to be re-renderd.

# If we cause ParentOne to re-render (in GrandParent.js) because of state change from the same component, react will not re-render the ChildOne component as it is still the same element which couldn't have changed.

# When we click GrandParent's count button, both the ParentOne and ChildOne components are re-renders. In this scenario GrandParent changes its state and causes a re-render. This in turn cause the ParentOne component to re-render. React now knows that ParentOne component is not re-rendering because of its own state change but rather because of the parent component re-rendering. That's mean props could have changed. So react will proceed with render phase for ChildOne component but ofcourse ignores the render output and not committed to the DOM. 

*****************************************************************************************************************

## Lec 8 - React memo (8:23)

# Another technique to optimize rendering behaviour when dealing with parent and child components using React's memo.

# Often we used to call that child component re-renderd because of change in props but this statement is not correct. Child component re-rendered because the parent component re-renderd not because the props changed.

# Note - React doesn't care whether props changed or not, it will always render child component just because the parent rendered.

# When we click on count button(in ParentTwo.js), react should not re-render the child component because rendering child is a unnecessary render and it does affect the performance. To optimize this rendering behaviour we can let React know that it should re-render the child component only if its props change and way to do it is using "React.memo".

# React.memo is a HOC which is used to wrap components if they render same result given the same props. Doing so gives a performance boost to react app by memoizing the render output.  

# Note - memo only does a shallow comparison of the previous and new props. However we can pass custom comparison function as second argument to React.memo() to meet your requirements.

*****************************************************************************************************************

## Lec 9 - Questions on Optimization (5:41)

# Question1 - When do we need to use the same element reference technique and when do I use React.memo?

## Same Element Reference :- When your parent component re-renders because of state change in the parent component which results in the child component having to re-render.

## Same Element Reference :-
# state change - yes, we can use
# props change - no, we can't use

Note - Above tecnique doesn't work if the parent component re-renders because of changes in its props.

## React.memo :- When your child component is being asked to re-render due to changes in the parent's state which do not affect the child component props in anyway.

# Overlapping scenario - What if the child component doesn't have any props?
# React.memo should still work in above scenario. But it is still better to go with same element reference because that is something react automatically provide for us and it also prevents us from having to add React.memo all over your code base.

# Question2 - If React.memo provides the optimization by comparing the props, why not wrap every single component with React.memo?

## React.memo uses shallow comparison of props and state which is not free of cost operation. It has a time complexity of O(props count).  So, re-render will take ample amount of time. That's why React.memo can actually be detrimental to the performance of your react app. Therefore, it is always a good idea to memoize only expensive components where the props hardly change. Hence React.memo is not used in every single component.

# When we optimize the rendering of one component, React will also skip rendering that component's entire subtree because it's effectively stopping the default "render children recursively" behaviour of React.

*****************************************************************************************************************

## Lec 10 - Incorrect memo with children (6:10)

# When we used strong tag inside child component (MemoChildThree) then we can see child component also got rendered along with parent component although we have used React.memo. Why it is so?

## This is because of the children props. In react, props.children is always a new reference which will cause the child component to always render.

Note - There is no need to wrap your child component with react.memo if the child component itself has children elements. The incorrect memo will simply to add to your component render time as new references to the children props will always cause the memoized child component to re-render.

*****************************************************************************************************************

## Lec 11 - Incorrect memo with Impure Component (5:06)

# When we click on 'change Name' button then time is got updated but when we click on 'count' button then time is not get updated because we are using memoization (React.memo).

# Impure component / Regular component - means components where the JSX can change even though the props and state remains same. Using date is one such example and also using randomness (Math.random) is 
another such example.

# so, when we use React.memo with current time or with Math.random() to render time or any value then in such React.memo() is a incorrect optimization.

# So, when we deal with impure components make sure you are aware of the consequences when using React.memo().

*****************************************************************************************************************

## Lec 12 - Incorrect memo with props Reference (7:26)

# Suppose there is a need to display person's first name and last name in child component, we could do this in child component directly but since most of data resides in parent component, let's add the person object in the parent component and pass it down as props to child component.

# When we click count button (ParentFive.js) , then it will render child component as well although we are using React.memo() with child component. Ideally it should n't happen. This in unexpected behaviour. This is happening because we have defined person's object in Parent component, every time the parent component renders a new person's object reference is created and then passed in as a props to the child component. If the reference changed, React.memo() can't optimize hence the child component is also re-renders.

# This is not just case with objects, functions also have a similar effect.

# During re-render, the parent component creates a new reference of handleClick() function and passes that new reference as props to the child component that means React.memo() can't optimize and child component re-renders.

# Note - If your component has objects or functions and you are wrapping one of its child components in React.memo() then it is a incorrect usage of memoization(memo).

*****************************************************************************************************************

## Lec 13 - useMemo and useCallback (4:22)

# Let us solve optmization problem that we faced while using Objects and functions when we render parent component object & function using useMemo & useCallback.

# using useMemo with person's objects and useCallback with function, we can solve incorrect optimization problem that we faced previously.

# Syntax :-

  const person = {
    fName : 'John',
    lName : 'Gilbert'
  }

  const memoPerson = useMemo(() => person, []);

  const handleClick = () => {
    console.log('Click Handler...');
  }

  const memoHandleClick = useCallback(handleClick, []);

*****************************************************************************************************************

## Lec 14 - Context (11:13)

# Ways to cause a re-render :- mainly there are two causes - 
1). Component calls useState setter function or useReducer dispatch function.
2). If parent component re-renders
3). "Context" API is another way to cause a component to re-render.

# Rendering behaviour of react app wrt context api :- When we render parent component, react sees that the parent component also renders a context provider, it then checks to see if the context provider has been given new value since we increment the count value, the context provider indeed
has been given a new value. React will make a note to re-render all the components that consume the context value. In the example code child component(ChildC) where react will make its way down the component tree and when it encounters child component (ChildC), it is going to re-render that component.

# In the example, we will try to access count value in child component that defined in parent component using context API.

# When we click count button from Parent component (ParentContext.js) then ChildA and ChildB along with ChildC will also get re-rendered although we have used context API for childC component only. Why it is so?

# As we know when parent component re-renders, all the children components recursively re-render. So, when state in parent component changes, the parent component re-renders and if parent component re-renders every single child component also re-renders. This is default behaviour in react. In fact the child component (childC) re-renders because the parent we rendered and not necessarily the context value was updated.

# Note - Context API solves the problem of props drilling so that we don't have to specify props through each nested component.
But when it comes to context and rendering behaviour, it is not the most efficient.

*****************************************************************************************************************

## Lec 15 - Context and memo (4:11)

# When the context provider is in the parent component and the parent component's state updates, every child component re-renders and not just the component consuming the context value.

# We will solve above rendering issue using React.memo() 

# Ideally we just want to render Parent component and ChildC component that is consuming the context value. We will achieve this using React.memo()

# By using memo with CHildA component, we can prevent unnecessary re-render of child A & child B components.

# During rendering of ChildC component , react sees that it consumes count context value whose value has now changed, so react proceeds to re-render ChildC component. So, any time we increment the count value and provide a new value to the context provider only the component consuming that value is re-rendered, i.e ChildC component.

# Note - If ChildC component has children components then those children components will also be re-rendered because of default parent child rendering behaviour in react.

# By wrapping the child component of the context provider with React.memo, state updates in parent component will not force every component to re-render but only the component where the context is consumed.

*****************************************************************************************************************

## Lec 16 - Context and Same Element Reference (3:38)

# Another way to optimize context rendering behaviour in react :- using Same Element Reference technique

# When setter function is called in parent component, react queues a re-render of the components however react knows that re-render is caused by a state change, so the component cannot modify its own props which means the children props could not have been modified. Here children props refers to ChildA component (from ChildContext2.js file). So, react now knows that childA hasn't been modified and there is no need to re-render that component. This kind of optimization, react automatically takes care of. As react goes down the component tree, it will re-render just ChildC component as it consumes a context value whose value has been changed.

# Note - If we are using Context in react app either make sure to wrap the immediate child (ChildA in the example) of the context provider with React.memo or make sure to use children props to make use of the same element reference optimization that react provides.

*****************************************************************************************************************