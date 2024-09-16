# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.
Sources 

https://www.youtube.com/watch?v=BEw8ifxN8zM - explain mergesort 

https://github.com/COSC3020/mergesort-AaronATM/blob/main/code.js

used for inspiration in the implemenation of the merge function as I was very lost how to do this non recursively

TA Ali - helped me break down the first "half" of the repo above

Chat GPT - helped to understand Math.min function and used it also to configure the function, specifically with shifting elements


The first condition runs at constant time where it checks if the array has one object or less. Within the first for loop it runs at $\log(n)$, the size doubles each time because each time it iterates it looks for the next size of subarrays. The nested for loop runs at $\Theta$ (n) because it is iterates through all n elements in each respected subarray. Within the merge implementation ,there might be additional space that has to be created because when a element in the right array needs to be inserted into the left array it has to shift all of them one to the right which makes this more inefficient compared to a traditional mergesort as there is no elements that need to be swapped. This makes it $\Theta$ $\ n^2 log(n)$ which is also the worst case, where as the normal merge sort is only  $\Theta$ $\ nlog(n)$. 





I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
