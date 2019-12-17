/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

ListNode = function (val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {

  function init(n){
    var n1 = new ListNode;
    var ptr;
    n.forEach((v, i) => {
      if(i == 0){
        n1 = new ListNode(v);
        ptr = n1;
      }else{
        ptr.next = new ListNode(v);
        ptr = ptr.next;
      }
    });
    return n1;
  }

  var v1 = [];
  var ptr = l1;
  while(ptr){
    v1.push(ptr.val);
    ptr = ptr.next;
  }

  var v2 = [];
  var ptr = l2;
  while(ptr){
    v2.push(ptr.val);
    ptr = ptr.next;
  }

  console.log('addTwoNumbers:v1=', v1);
  console.log('addTwoNumbers:v2=', v2);

  var n = parseInt(v1.reverse().join("")) + parseInt(v2.reverse().join(""));
  console.log('addTwoNumbers:n=', n);
  console.log('addTwoNumbers:ret=', Math.abs(n).toString().split("").reverse().map(
    function(x, i, arr){
      if(i == arr.length-1){
        return x * (n < 0 ? -1 : 1);
      }else{
        return x * 1;
      }
    }
  ));
  return init(Math.abs(n).toString().split("").reverse().map(
    function(x, i, arr){
      if(i == arr.length-1){
        return x * (n < 0 ? -1 : 1);
      }else{
        return x * 1;
      }
    }
  ));

}

var Method1 = addTwoNumbers;

var addTwoNumbers = function(l1, l2) {

  var v1_len = 0;
  var ptr = l1;
  var sign1 = 1;
  while(ptr){
    sign1 = ptr.val < 0 ? -1 : 1;
    ptr = ptr.next;
    if(ptr) v1_len++;
  }

  var v2_len = 0;
  var ptr = l2;
  var sign2 = 1;
  while(ptr){
    sign2 = ptr.val < 0 ? -1 : 1;
    ptr = ptr.next;
    if(ptr) v2_len++;
  }

  const v = v1_len > v2_len ? v1_len : v2_len;

  var ret = new ListNode;
  var ptr0;
  var ptr1;
  var ptr2;
  var inc = 0;

  var sign0;
  if(sign1 == -1 && sign2 == -1){ sign0 = -1 }

  var sum = 0;
  var sumArr = [];

  for(var i=0; i<=v; i++){

    if(i == 0){
      ptr1 = l1;
      ptr2 = l2;
    }else{
      ptr1 = ptr1 ? ptr1.next : null;
      ptr2 = ptr2 ? ptr2.next : null;
    }

    var t = Math.abs(ptr1 ? ptr1.val : 0) * sign1 + Math.abs(ptr2 ? ptr2.val : 0) * sign2 + inc;

    if(i != v){
      t = Math.abs(t);
    }

    //console.log("func", i, Math.abs(ptr1 ? ptr1.val : 0) , sign1 , Math.abs(ptr2 ? ptr2.val : 0) , sign2 , inc, t);

    if(t<0 && sign0 != -1){
      t += 10;
      if(i == 0){
        ret = new ListNode(t);
        sum += ret.val;
        inc = -1
        ptr0 = ret;
      }else{
        ptr0.next = new ListNode(t);
        sum += ptr0.next.val;
        inc = -1
        ptr0 = ptr0.next;
      }
    }else{
      if(i == 0){
        ret = new ListNode(t % 10);
        sum += ret.val;
        inc = (t / 10 >= 1) ? 1 : 0;
        ptr0 = ret;
      }else{
        ptr0.next = new ListNode(t % 10);
        sum += ptr0.next.val;
        inc = (t / 10 >= 1) ? 1 : 0;
        ptr0 = ptr0.next;
      }
    }
  }


  if(inc){
    ptr0.next = new ListNode(inc);
    sum += inc;
  }

  if(sum == 0){
    ret = new ListNode(0);
  }

  return ret;

}

var Method2 = addTwoNumbers;

var addTwoNumbers = function(l1, l2) {
   // Initialize first node
    let top = new ListNode(0);
    let temp = top;
    let sum = 0;
    let carry = 0;
    while(l1 || l2 || sum > 0) {
        // add first value of l1, then traverse down the list
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        // add first value of l1, then traverse down the list
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        // carryover the sum
        if(sum > 9) {
            sum -= 10;
            carry = 1;
        }
        
        // build the new LL
        temp.next = new ListNode(sum);
        //traverse down ll
        temp = temp.next;
        // if there is a remainder, carry it over
        sum = carry;
        carry = 0;
        
    }
    return top.next;
};

var Method3 = addTwoNumbers;

var addTwoNumbers = function(l1, l2) {
  var sum = 0;
  var carry = 0;

  // start handle sign
  // ignored due to the both input does not a non-negative integers
  // var ptr = l1;
  // var sign = 1;
  // while(ptr){
  //   if(ptr.val < 0){ sign = -1 }
  //   ptr = ptr.next;
  // }
  // var ptr = l1;
  // while(ptr){
  //   if(ptr.val > 0){ ptr.val *= sign }
  //   ptr = ptr.next;
  // }
  // 
  // var ptr = l2;
  // var sign = 1;
  // while(ptr){
  //   if(ptr.val < 0){ sign = -1 }
  //   ptr = ptr.next;
  // }
  // var ptr = l2;
  // while(ptr){
  //   if(ptr.val > 0){ ptr.val *= sign }
  //   ptr = ptr.next;
  // }
  // end of handle sign

  var sum2 = 0;
  var res = new ListNode();
  var ptr = res;
  while(l1 || l2 || sum){

    if(l1){
      sum += l1.val;
      l1 = l1.next;
    }

    if(l2){
      sum += l2.val;
      l2 = l2.next;
    }

    if(sum >= 10){
      sum = sum % 10;
      carry = 1;
    }

    ptr.next = new ListNode(sum);
    sum2 += sum;
    ptr = ptr.next;

    sum = carry;
    carry = 0;
  }

  // start handle sign
  // ignored due to the both positive input does appear zero value
  // var ptr = res;
  // var sign = 1;
  // while(ptr){
  //   if(ptr.next){ ptr.val = Math.abs(ptr.val) }
  //   ptr = ptr.next;
  // }
  // // end of handle sign
  // 
  // // start handle all zero
  // if(sum2 == 0){
  //   res.next = new ListNode(0);
  // }
  // end of handle sign

  return res.next;
};

var Method4 = addTwoNumbers;

function dump(n){
  var ret = [];
  var ptr = n;
  while(ptr){
    ret.push(ptr.val);
    ptr = ptr.next;
  }
  return ret.join(" -> ");
}

function init(n){
  var n1 = null;
  var ptr;
  n.forEach((v, i) => {
    if(i == 0){
      n1 = new ListNode(v);
      ptr = n1;
    }else{
      ptr.next = new ListNode(v);
      ptr = ptr.next;
    }
  });
  return n1;
}

var check = function (ans, res){
  try{
    console.log('check : res = ', dump(res));
    console.log('check : ans = ', dump(ans));
    return dump(res) == dump(ans) ? '==Right==' : '==Wrong==';
  }catch(e){
    return "Check Fail";
  }
}


//console.log('Method 1');
//console.log('1: test 1', ans = init([7, 0, 8]), res = Method1(init([2, 4, 3]), init([5, 6, 4])), check(ans, res));
//console.log('1: test 2', ans = init([0]), res = Method1(init([2, 4, 3]), init([2, 4, -3])), check(ans, res));
//console.log('1: test 3', ans = init([4, 8, -6]), res = Method1(init([2, 4, -3]), init([2, 4, -3])), check(ans, res));
//console.log('1: test 4', ans = init([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), res = Method1(init([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), init([5,6,4])), check(ans, res));

//console.log('Method 2');
//console.log('2: test 1', ans = init([1, 1]), res = Method2(init([5]), init([6])), check(ans, res));
//console.log('2: test 2', ans = init([8, 9, 1]), res = Method2(init([9, 9]), init([9, 9])), check(ans, res));
//console.log('2: test 3', ans = init([7, 0, 8]), res = Method2(init([2, 4, 3]), init([5, 6, 4])), check(ans, res));
//console.log('2: test 4', ans = init([0]), res = Method2(init([2, 4, 3]), init([2, 4, -3])), check(ans, res));
//console.log('2: test 5', ans = init([4, 8, -6]), res = Method2(init([2, 4, -3]), init([2, 4, -3])), check(ans, res));
//console.log('2: test 6', ans = init([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), res = Method2(init([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), init([5,6,4])), check(ans, res));
//console.log('2: test 7', ans = init([0,9]), res = Method2(init([9,8]), init([1])), check(ans, res));
//console.log('2: test 7', ans = init([-1]), res = Method2(init([1]), init([-2])), check(ans, res));

//console.log('Method 3');
//console.log('3: test 1', ans = init([1, 1]), res = Method3(init([5]), init([6])), check(ans, res));
//console.log('3: test 2', ans = init([8, 9, 1]), res = Method3(init([9, 9]), init([9, 9])), check(ans, res));
//console.log('3: test 3', ans = init([7, 0, 8]), res = Method3(init([2, 4, 3]), init([5, 6, 4])), check(ans, res));
//console.log('3: test 4', ans = init([0]), res = Method3(init([2, 4, 3]), init([-2, -4, -3])), check(ans, res));
//console.log('3: test 5', ans = init([4, 8, -6]), res = Method3(init([2, 4, -3]), init([2, 4, -3])), check(ans, res));
//console.log('3: test 6', ans = init([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), res = Method3(init([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), init([5,6,4])), check(ans, res));
//console.log('3: test 7', ans = init([0,9]), res = Method3(init([9,8]), init([1])), check(ans, res));
//console.log('3: test 8', ans = init([-1]), res = Method3(init([0]), init([-1])), check(ans, res));

console.log('Method 4');
console.log('4: test 1', ans = init([1, 1]), res = Method4(init([5]), init([6])), check(ans, res));
console.log('4: test 2', ans = init([8, 9, 1]), res = Method4(init([9, 9]), init([9, 9])), check(ans, res));
console.log('4: test 3', ans = init([7, 0, 8]), res = Method4(init([2, 4, 3]), init([5, 6, 4])), check(ans, res));
//console.log('4: test 4', ans = init([0]), res = Method4(init([2, 4, 3]), init([2, 4, -3])), check(ans, res));
//console.log('4: test 5', ans = init([4, 8, -6]), res = Method4(init([2, 4, -3]), init([2, 4, -3])), check(ans, res));
console.log('4: test 6', ans = init([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), res = Method4(init([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), init([5,6,4])), check(ans, res));
console.log('4: test 7', ans = init([0,9]), res = Method4(init([9,8]), init([1])), check(ans, res));
//console.log('4: test 7', ans = init([-1]), res = Method4(init([1]), init([-2])), check(ans, res));
