## Overview:

You are given a function `fn`, an array of arguments `args`, and an interval time `t`.
You need to implement a function `cancelFn` that calls `fn` immediately with `args`
and then schedules subsequent calls to `fn` every `t` milliseconds until `cancelFn` is called.

---

## Use Cases:

- **Auto-Saving in Editing Applications:**  
  When working with text editors, document processors, or other content creation tools, it's common to have an auto-save feature that periodically saves changes. You can use interval cancellation to schedule auto-saving at regular intervals. If the user explicitly saves the document or exits the application, you can cancel the interval to prevent unnecessary saving operations.

- **Animation and Slideshow Timings:**  
  During development, you may want to create animations or slideshows that automatically transition between different states or images. Interval cancellation can be used to control the timing of these transitions. If the user interacts with the animation or slideshow, you can cancel the interval to pause or stop the automatic progression.

  > **Note:** For more complex or performance-critical animations, it's recommended to use the `requestAnimationFrame` method instead of `setInterval`, as it provides better performance and efficiency.

- **Time-based Reminders:**  
  Consider a task management application where users can set reminders for specific tasks. Interval cancellation can be used to trigger reminders at specified intervals. Once the user acknowledges the reminder or the task is completed, you can cancel the interval to stop further reminders.

---

Before going any further, we need to learn two concepts: `setInterval` and `clearInterval`.

1. `setInterval`:
   The `setInterval` function is used to repeatedly execute a function or a code snippet with a fixed time delay between each call. It takes two arguments: the function or code snippet to be executed and the time delay specified in milliseconds.

```
setInterval(function, delay);
```

- The `function` parameter represents the function or code snippet that will be executed at each interval.
- The `delay` parameter specifies the time delay in milliseconds between each execution of the function.
  When `setInterval` is called, it schedules the first execution of the specified function after the initial delay. Subsequent executions will occur repeatedly based on the specified delay.
  `setInterval` returns an interval ID, which is a unique numeric value. This ID can be used later to identify and control the interval schedule. Also, note that `setInterval` is not totally precise.

2. `clearInterval`:
   The `clearInterval` function is used to cancel a timed, repeating action that was previously established by a call to `setInterval`. It takes the interval ID returned by `setInterval` as an argument.

```
clearInterval(intervalID);
```

- The `intervalID` parameter represents the unique ID returned by the `setInterval` function when the interval was created.
  By calling `clearInterval` with the appropriate interval ID, you can effectively stop the subsequent executions of the function specified in `setInterval`. It cancels the scheduled interval and prevents any further calls to the specified function.

## Approach 1: Using `setInterval`&`clearInterval`

To set an interval timer, we use the `setInterval` function. In the code snippet below,`setInterval` will repeatedly call `() => fn(...args)` every `t` milliseconds. It's important to note that `setInterval` does not immediately call the function before `t` milliseconds, which is why we manually call `fn(...args)` once before setting the interval.

Next, we define a function called `cancelFn` that clears the interval when it's called. We return `cancelFn` from the main function. It's worth mentioning that `cancelFn` is not called when our `cancellable` function is initially defined. However, whenever the `cancellable` function is called, it returns `cancelFn`. The `cancelFn` can then be called at a later time to clear the interval.

Implementation:

```
function cancellable(fn: Function, args: any[], t: number): Function {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);

    const cancelFn = () => clearInterval(timer);
    return cancelFn;
}
```

Complexity Analysis:
Time complexity: O(1)

Space complexity: O(1)

## Approach 2: Using Recursion

### Intuition:

We can set up a timed interval where the function is repeatedly executed. This will provide a way to cancel the interval execution when desired. In simpler words, each function will keep calling itself (aftertms, via atimeout), as long as the boolean flag is not flipped.

### Algorithm:

When we call thecancellablefunction, it first executes the provided function(fn)with the given arguments(args)i.e(fn(...args)). This ensures that the function is called at least once before we start the interval.

Next, we define an internal function calledstartInterval. This function will be held for setting up the interval by usingsetTimeout. It waits for the specifiedtand then executes the function(fn)again. It repeats this process until we decide to cancel the interval which will be decided by the booleanisCancelledthat we declared at the start of the code.

To create this repeated execution,startIntervaluses a clever trick. It calls itself recursively within thesetTimeoutcallback function. This means that after each execution of the function, it schedules the next execution by callingstartIntervalagain. This creates a loop-like behavior where the function is executed, and thenstartIntervalis called again to schedule the next execution.

Implementation 1:

Implementation 2:
Implementation 1 is good, but it's more efficient to useclearTimeoutto clear those recursive timeouts. This approach ensures that the callback isn't called unnecessarily:

Complexity Analysis:
In the given implementations, the execution involves setting asetTimeoutfunction with a delay oftmilliseconds. However, it's important to note that the scheduling of the function call does not introduce recursion or affect the complexity in terms of the JavaScript engine's memory usage.

Let's dig a little deeper:

The JavaScript engine initializes and creates the context for thecancellablefunction.
The statements of thecancellablefunction, including thesetTimeoutcall, are executed.
ThesetTimeoutfunction instructs the JavaScript engine to schedule a function call after a delay oftmilliseconds.
The context of thecancellablefunction is destroyed, and the JavaScript engine continues with other operations.
At this point, in terms of memory usage, the JavaScript engine returns to its initial state without any additional memory allocation or recursion. The only remaining information is a reference to the function and the scheduled time for the future call.
After the specified delay, the JavaScript engine executes the scheduled function without any impact on memory usage or recursion.
Once the function execution is completed, any remaining references or data related to the scheduled call are cleared.
Considering this sequence of events, we can conclude that the complexity of this code is constantO(1). The memory utilization does not grow with the duration of the delay, and there is no recursion or memory buildup as the JavaScript engine handles the scheduling and execution of the function independently.

Time complexity: O(1)

Space complexity: O(1)

Interview Tips:
Can the interval time be dynamically changed after it has been set?
Are there any limitations or performance considerations to keep in mind when using interval cancellation?
What happens if the interval time `(t)` is set to a negative value or zero?
Is it possible to restart or reschedule the interval after it has been canceled?
