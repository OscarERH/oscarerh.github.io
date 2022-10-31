---
title: Big O Notation
date: 2022,10,30
cover: https://i.imgur.com/2uoR0eb.png
---
## What is Big-O Notation?

The Big-O notation measures the worst-case complexity of an algorithm. In Big-O
notation, n represents the number of inputs. The question asked with Big-O is the
following: “What will happen as n approaches infinity?”
When you implement an algorithm, Big-O notation is important because it tells you
how efficient the algorithm is.

## Rules of Big-O Notation

- ***Coefficient rule**:* If f(n) is O(g(n)), then kf(n) is O(g(n)), for any
constant k > 0. The first rule is the coefficient rule, which eliminates
coefficients not related to the input size, n. This is because as n
approaches infinity, the other coefficient becomes negligible.
- ***Sum rule:*** If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is
O(h(n)+p(n)). The sum rule simply states that if a resultant time
complexity is a sum of two different time complexities, the resultant
Big-O notation is also the sum of two different Big-O notations.
- ***Product Rule***:  If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is
O(h(n)p(n)). Similarly, the product rule states that Big-O is multiplied
when the time complexities are multiplied.
- ***Transitive Rule**:* If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is
O(h(n)). The transitive rule is a simple way to state that the same time
complexity has the same Big-O.
- ***Polynomial rule**:* If f(n) is a polynomial of degree k, then f(n) is
O(n^k). Intuitively, the polynomial rule states that polynomial time
complexities have Big-O of the same polynomial degree.
- ***Log of a power rule**:* log(nk) is O(log(n)) for any constant k > 0. With
the log of a power rule, constants within a log function are also
ignored in Big-O notation.

### Coefficient Rule: “Get Rid of Constants”

It simply requires you to ignore any non-input-size-related constants. Coefficients in Big-O are
negligible with large input sizes. Therefore, this is the most important rule of Big-O
notations.

If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.
This means that both 5f(n) and f(n) have the same Big-O notation of O(f(n)).
Here is an example of a code block with a time complexity of O(n):

```jsx
function counter(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}
```

This block of code has f(n) = n. This is because it adds to count n times. Therefore,
this function is O(n) in time complexity:

```jsx
function counter(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
```

This block has f(n) = 5n. This is because it runs from 0 to 5n. However, the first two
examples both have a Big-O notation of O(n). Simply put, this is because if n is close to
infinity or another large number, those four additional operations are meaningless. It is
going to perform it n times. Any constants are negligible in Big-O notation.
The following code block demonstrates another function with a linear time
complexity but with an additional operation on this part `count += 3`:

```jsx
function counter(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}
```

Lastly, this block of code has f(n) = n+1. There is +1 from the last operation
(count+=3). This still has a Big-O notation of O(n). This is because that 1 operation is not
dependent on the input n. As n approaches infinity, it will become negligible.

### Sum Rule: “Add Big-Os Up”

The sum rule is intuitive to understand; time complexities can be added. Imagine a
master algorithm that involves two other algorithms. The Big-O notation of that master
algorithm is simply the sum of the other two Big-O notations.
If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
It is important to remember to apply the coefficient rule after applying this rule.

The following code block demonstrates a function with two main loops whose time
complexities must be considered independently and then summed:

```jsx
function count(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}
```

In this example, line 4 has f(n) = n, and line 7 has f(n) = 5n. This results in 6n.
However, when applying the coefficient rule, the final result is O(n) = n.

### Product Rule: “Multiply Big-Os”

The product rule simply states how Big-Os can be multiplied.
If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).
The following code block demonstrates a function with two nested for loops for
which the product rule is applied:

```jsx
function count(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    for (let i = 0; i < 5 * n; i++) {
      count += 1;
    }
  }
  return count;
}
```

In this example, f(n) = 5n*n because line 7 runs 5n times for a total of n iterations.
Therefore, this results in a total of 5n²
operations. Applying the coefficient rule, the result
is that O(n)=n².

### Polynomial Rule: “Big-O to the Power of k”

The polynomial rule states that polynomial time complexities have a Big-O notation of
the same polynomial degree.
Mathematically, it’s as follows:
If f(n) is a polynomial of degree k, then f(n) is O(n^k).

The following code block has only one for loop with quadratic time complexity:

```jsx
function count(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
```

In this example, f(n) = n² because line 4 runs n*n iterations.

## Examples

### **O(1)**

```jsx
const a1 = performance.now();
smArr.push(27);
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // Less than 1 Millisecond

const b1 = performance.now();
bigArr.push(27);
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // Less than 1 Millisecond
```

## O(n)

```jsx
const a1 = performance.now();
smArr.forEach(item => console.log(item));
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // 3 Milliseconds

const b1 = performance.now();
bigArr.forEach(item => console.log(item));
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // 13 Milliseconds
```

## O(n^2)

```jsx
const a1 = performance.now();
smArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
const a2 = performance.now();
console.log(`Time: ${a2 - a1}`); // 8 Milliseconds

const b1 = performance.now();
bigArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
const b2 = performance.now();
console.log(`Time: ${b2 - b1}`); // 307 Milliseconds
```

## O(log n)

```jsx
const sort = arr => {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1, total = arr.length; i < total; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  };
  return [
    ...sort(left),
    pivot,
    ...sort(right)
  ];
};
```

### **O(n!)**

```jsx
const factorial = n => {
  let num = n;

  if (n === 0) return 1
  for (let i = 0; i < n; i++) {
    num = n * factorial(n - 1);
  };

  return num;
};
```

## Closing Thoughts

keeping your code as performant as possible may seem like an obvious concern, but I’m sure almost every developer has created double or even triple nested loops at least once because “it just works”. Big O notation is very necessary in expressing and thinking about complexity is a way we never could before.

## Acknowledgement

### **Understanding Big O Notation via JavaScript**

[Understanding Big O Notation via JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/js-big-o-notation)

### **JavaScript Data Structures and Algorithms**

[JavaScript Data Structures and Algorithms: An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals](https://www.amazon.com/Sammie-Bae/dp/1484239873/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&amp&crid=2N6N6UIDW9BGQ&amp&keywords=algorithms+javascript&amp&qid=1660770284&amp&sprefix=algorithms+jav,aps,728&amp&sr=8-1&language=en_US)

### **Know Thy Complexities!**

[Know Thy Complexities!](http://bigocheatsheet.com/)