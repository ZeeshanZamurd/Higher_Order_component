# Higher_Order_component
 Higher Order Component in reactjs 
 Q: Why we use higher order components  even we can pass props to component to make conditionaly rendering? refer to this question after reading HOC.
 
Yes, that's a good point. When you have a large number of components that need to be rendered with slightly different behavior or props, it can become quite difficult to manage all of the conditional statements within the component. In such cases, it can be helpful to use a Higher Order Component (HOC) to wrap the original component and provide the necessary logic for rendering the components with different behavior.

On the other hand, if you only need to make a small number of conditional manipulations to a component, it may be simpler and more readable to use conditional nesting within the component itself rather than creating a separate HOC.

Ultimately, the approach you choose will depend on the specific requirements of your application and the complexity of the logic involved. It's important to keep in mind that readability and maintainability of your code should always be a top priority, and to choose the approach that best supports those goals.
