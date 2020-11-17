# clone coding

# JS Study

## This

> c.f bind(), apply(), call()

- apply()
  > 인수들의 단일 배열을 받는다. (e.g) [a,b,c,d,...]

<pre>
<code>
// same results
/* 1 */
Math.max.apply(nulll, someArray);

/* 2 */
Math.max(...someArray);


// same results
/* 1 */
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

/* 2 */
array.concat(elemetns);

</code>
</pre>

    * call()
    > 인수 리스트 받는다. (e.g) a,b,c,d ...

<pre>
<code>

</code>
</pre>

    * bind()
    > return : 지정한 this 값 및 초기 인수를 사용하여 변경한 원본 함수의 복제본.

<pre>
<code>
this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
</code>
</pre>

## var, let, const

<pre>
1. var는 함수 레벨 스코프이고 let, const는 블럭 레벨 스코프입니다.
2. var로 선언한 변수는 선언 전에 사용해도 에러가 나지 않지만 let, const는 에러가 발생합니다.
3. var는 이미 선언되어있는 이름과 같은 이름으로 변수를 또 선언해도 에러가 나지 않지만 let, const는 이미 존재하는 변수와 같은 이름의 변수를 또 선언하면 에러가 납니다.
4. var, let은 변수 선언시 초기 값을 주지 않아도 되지만 const는 반드시 초기값을 할당해야 합니다.
5. var, let은 값을 다시 할당할 수 있지만 const는 한번 할당한 값은 변경할 수 없습니다(단, 객체 안에 프로퍼티가 변경되는 것까지 막지는 못합니다).
6. var은 선언만 하더라도, undefined로 초기값이 할당 되고, let은 선언만 하면 (메모리에) 초기값은 할당되지 않는다. const는 선언과 동시에 반드시 초기화를 해야한다.

=>
var의 경우 버그 발생과 메모리 누수의 위험 등이 있기 때문에 var말고 let, const를 사용하시는 것이 좋다.
</pre>

### hoisting

<pre>
1. var, let, const 모두 hosting 된다.
2. hoisting은 '선언'만 된다. 초기화는 hoisting 되지 않는다.
3. 
</pre>

### Property
