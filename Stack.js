class Stack {
    constructor() {
        this.items = [];
    }


    // Pushes an element onto the stack (numbers only)
    push(element) {
        this.items.push(element);
    }


    // Remove the last element from the stack and return it if exists
    pop() {
        if (this.isEmpty()) {
            return 'Stack is Empty';
        } else {
            return this.items.pop();
        }
    }


    // Remove the first element from the stack and return it if exists
    trim() {
        if (this.isEmpty()) {
            return 'Stack is Empty';
        } else {
            return this.items.shift();
        }
    }


    // Checks if the stack is empty
    isEmpty() {
        if (this.items.length == 0) {
            return true;
        } else {
            return false;
        }
    }


    // Return stack size
    size() {
        return this.items.length;
    }


    // Returns the top element of the stack if it exists
    peek() {
        if (this.isEmpty()) {
            return 'Stack is Empty';
        } else {
            return this.items[this.size() - 1];
        }
    }


    // Returns a space-separated string that contains all stack elements
    displayStack(stack) {
        if (this.isEmpty()) {
            return 'Stack is Empty';
        } else {
            return 'Stack Elements: [ ' + this.items.toString() + ' ]';
        }
    }


    // Return a new stack in reverse order
    reverse_stack(stack) {
        const reversedStack = new Stack();
        while (!stack.isEmpty()) {
            reversedStack.push(stack.pop());
        }
        return reversedStack;
    }


    // Return the max element in the stack (return -1 if it does not exists)
    max() {
        if (this.isEmpty()) {
            return -1;
        } else {
            const initialValue = this.items[0];
            return this.items.reduce((max, current) => {
                return current > max ? current : max;
            }, initialValue);
        }
    }


    // Return the min element in the stack (return -1 if it does not exists)
    min() {
        if (this.isEmpty()) {
            return -1;
        } else {
            const initialValue = this.items[0];
            return this.items.reduce((min, current) => {
                return current < min ? current : min;
            }, initialValue);
        }
    }


    // Remove all the elements from the stack
    clear() {
        while (!this.isEmpty()) {
            this.pop();
        }
    }


    // Find the element in the stack
    find(element) {
        return 'The element is at index :' + this.items.indexOf(element);
    }


    // Return a non-duplicated stack
    set() {
        const nonDuplicatedStack = new Stack();
        const uniqueElements = new Map();

        for (let element of this.items) {
            uniqueElements.set(element, true);
        }

        for (let [key] of uniqueElements) {
            nonDuplicatedStack.push(key);
        }

        return nonDuplicatedStack;
    }


    // Return the n-th element from the top
    top(n) {
        if (n <= 0 || n > this.size()) {
            return "Invalid value of n";
        }
        return this.items[this.size() - n];
    }


    // Return the n-th element from the bottom
    bottom(n) {
        if (n <= 0 || n > this.size()) {
            return "Invalid value of n";
        }
        return this.items[n - 1];
    }


    // Remove the element at the given index if it exists
    remove(index) {
        if (index >= 0 && index < this.size()) {
            this.items.splice(index, 1);
            return 'Element removed successfully';
        } else {
            return 'Invalid index';
        }
    }

}


