/**
 * initialises a stack data structure that also keeps track of the minimum value within the stack.
 */
 const MinStack = function() {
  // Array to hold the stack data structure.
  this.stack = [];
  // Saves the minimum value in the stack.
  this.minValue = null;
};

/** 
* Appends a new number to the top of the stack.
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  // Append the new value to the top of the stack (end of the array).
  this.stack.push(val);

  // Set the new minimim value.
  if (this.minValue > val || this.minValue === null) {
      this.minValue = val;
  }
};

/**
* Takes off the top item in the stack and returns it.
* @return {number}
*/
MinStack.prototype.pop = function () {
  // The item that we take off of the top of the stack (end of the array).
  let item = this.stack.pop();

  // If we took off the minimum value item.
  if (this.minValue === item) {
      // Re-calculate the new minimum value.
      this.minValue = Math.min(...this.stack);
  }

  // Return the item we removed from the top of the stack.
  return item;
};

/**
* Shows the top item in the stack.
* @return {number}
*/
MinStack.prototype.top = function () {
  // Show the top item on the stack (last item in the array).
  return this.stack[this.stack.length - 1];
};

/**
* Shows the minimum value in the stack, which is stored as its own variable.
* @return {number}
*/
MinStack.prototype.getMin = function () {
  // Return the stored minumum value.
  return this.minValue;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/