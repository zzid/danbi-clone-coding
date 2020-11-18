# clone coding
## React (class component)

( source : reactjs.org )
### constructor()
<pre>
<code>
constructor(props)
</code>
메서드를 바인딩하거나 state를 초기화하는 작업이 없다면, 해당 React 컴포넌트에는 생성자를 구현하지 않아도 됩니다.

React 컴포넌트의 생성자는 해당 컴포넌트가 마운트되기 전에 호출됩니다. 
React.Component를 상속한 컴포넌트의 생성자를 구현할 때에는 다른 구문에 앞서 super(props)를 호출해야 합니다. 그렇지 않으면 this.props가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.

React에서 생성자는 보통 아래의 두 가지 목적을 위하여 사용됩니다:

this.state에 객체를 할당하여 지역 state를 초기화
인스턴스에 이벤트 처리 메서드를 바인딩
constructor() 내부에서 setState()를 호출하면 안 됩니다.
컴포넌트에 지역 state가 필요하다면 생성자 내에서 this.state에 초기 state 값을 할당하면 됩니다.
<code>
constructor(props) {
  super(props);
  // 여기서 this.setState()를 호출하면 안 됩니다!
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
</code>
생성자는 this.state를 직접 할당할 수 있는 유일한 곳입니다. 그 외의 메서드에서는 this.setState()를 사용해야 합니다.

생성자 내에서는 부수 효과를 발생시키거나 구독 작업(subscription)을 수행하면 안 됩니다. 해당 경우에는 componentDidMount()를 대신 사용하세요.

</pre>
>  주의<br>
 state에 props를 복사하면 안 됩니다! 가장 흔히 범하는 실수 중 하나입니다.
 constructor(props) {
  super(props);
  // 이렇게 하지 마세요!
  this.state = { color: props.color };
 }
 이것은 불필요한 작업이며(this.props.color를 직접 사용하면 됩니다), 버그를 발생시킵니다(color props의 값이 변하더라도 state에 반영되지 않습니다).
 props의 갱신을 의도적으로 무시해야 할 때만 이와 같은 패턴을 사용하기 바랍니다.
 이 경우, 해당 props의 이름을 initialColor 또는 defaultColor 등으로 변경하는 편이 자연스럽습니다. 그러면 이후 필요에 따라 컴포넌트가 key를 변경하여 초기 state를 “재설정”하도록 강제할 수 있습니다.
 props의 값에 의존하는 state가 필요할 때 어떻게 해야 하는지에 대하여 알고 싶다면, 우리가 작성한 state로부터 값을 가져오지 않는 법에 대한 블로그 글을 읽어보세요.
<br>

Recommendation: Fully controlled component
```
function EmailInput(props) {
   return <input onChange={props.onChange} value={props.email} />;
 }
```
Recommendation: Fully uncontrolled component with a key

```
<EmailInput
   defaultEmail={this.props.user.email}
   key={this.props.user.id}
 />

/*

    Each time the ID changes, the EmailInput will be recreated and its state will be reset to the latest defaultEmail value.
    With this approach, you don’t have to add key to every input.
    It might make more sense to put a key on the whole form instead.
    Every time the key changes, all components within the form will be recreated with a freshly initialized state.

*/
```

### componentDidMount()
<pre>
componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다.
DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다.
외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치입니다.

이 메서드는 데이터 구독을 설정하기 좋은 위치입니다.
데이터 구독이 이루어졌다면, componentWillUnmount()에서 구독 해제 작업을 반드시 수행하기 바랍니다.

componentDidMount()에서 즉시 setState()를 호출하는 경우도 있습니다.
이로 인하여 추가적인 렌더링이 발생하지만, 브라우저가 화면을 갱신하기 전에 이루어질 것입니다.
이 경우 render()가 두 번 호출되지만, 사용자는 그 중간 과정을 볼 수 없을 것입니다.
이런 사용 방식은 성능 문제로 이어지기 쉬우므로 주의가 필요합니다.
대부분의 경우, 앞의 방식을 대신하여 constructor() 메서드에서 초기 state를 할당할 수 있습니다.
하지만 모달(Modal) 또는 툴팁과 같이 렌더링에 앞서 DOM 노드의 크기나 위치를 먼저 측정해야 하는 경우 이러한 방식이 필요할 수 있습니다.
</pre>

### componentDidUpdate()
<pre>
componentDidUpdate()는 갱신이 일어난 직후에 호출됩니다. 이 메서드는 최초 렌더링에서는 호출되지 않습니다.

컴포넌트가 갱신되었을 때 DOM을 조작하기 위하여 이 메서드를 활용하면 좋습니다.
또한, 이전과 현재의 props를 비교하여 네트워크 요청을 보내는 작업도 이 메서드에서 이루어지면 됩니다
(가령, props가 변하지 않았다면 네트워크 요청을 보낼 필요가 없습니다).
<code>
componentDidUpdate(prevProps, prevState, snapshot)
</code>
<code>
componentDidUpdate(prevProps) {
  // 전형적인 사용 사례 (props 비교를 잊지 마세요)
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
</code>
componentDidUpdate()에서 setState()를 즉시 호출할 수도 있지만,
위의 예시처럼 조건문으로 감싸지 않으면 무한 반복이 발생할 수 있다는 점에 주의하세요.
또한 추가적인 렌더링을 유발하여, 비록 사용자는 눈치채지 못할지라도 컴포넌트 성능에 영향을 미칠 수 있습니다. 
상위에서 내려온 prop을 그대로 state에 저장하는 것은 좋지 않으며, 그 대신 prop을 직접 사용하는 것이 좋습니다.
이와 관련된 자세한 정보는 props를 state에 복사하는 것이 버그를 유발하는 이유에서 확인할 수 있습니다.

컴포넌트에서 getSnapshotBeforeUpdate()를 구현한다면,
해당 메서드가 반환하는 값은 componentDidUpdate()에 세 번째 “snapshot” 인자로 넘겨집니다.
반환값이 없다면 해당 인자는 undefined를 가집니다.
</pre>

### componentWillUnmount()
<pre>
componentWillUnmount()는 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됩니다.
이 메서드 내에서 타이머 제거, 네트워크 요청 취소,
componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행하세요.

이제 컴포넌트는 다시 렌더링되지 않으므로, componentWillUnmount() 내에서 setState()를 호출하면 안 됩니다.
컴포넌트 인스턴스가 마운트 해제되고 나면, 절대로 다시 마운트되지 않습니다.
</pre>

## JS Study

### This

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

### var, let, const

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

#### hoisting

<pre>
1. var, let, const 모두 hosting 된다.
2. hoisting은 '선언'만 된다. 초기화는 hoisting 되지 않는다.
3. 
</pre>

#### Property
