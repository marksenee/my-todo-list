import React from "react";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class LifecycleEx extends React.Component {

// 생성자 함수
  constructor(props) {
    super(props);
    
    this.state = {
      cat_name: '나비',
    };

    console.log('in constructor!');
  }

  changeCatName = () => { 
    // 다음 강의에서 배울, state 업데이트 하는 방법입니다!
    // 지금은 componentDidUpdate()를 보기 위해 쓰는 거니까, 처음보는 거라고 당황하지 말기!
      this.setState({cat_name: '바둑이'}); //setState는 데이터를 바꿔준다. 

      console.log('고양이 이름을 바꾼다!');
  }

  // 생성(mount)
  // 업데이트 될 때는 실행되지 않는다. 맨 처음 렌더링 할때만 실행되는 라이프 사이클 메서드이다. 
  // ajax 요청을 많이 하는 부분 
  // 실제 DOM에 다 올라가게 되는 부분  
  componentDidMount(){
    console.log('in componentDidMount!');
  }

  // 수정(업데이트)
  // 업데이트 시켜줌, 리렌더링, 리렌더링이 끝난 다음에 실행이 되는 라이프 사이클 함수이다. 
  // 중요한 파라미터는 prevProps(부모한테 받아온 것), prevState(내 것)이다.
  // 즉, 현재 데이터와 이전 데이터 비교 
  // 가상돔이 실제 돔으로 업데이트 된다. 
  componentDidUpdate(prevProps, prevState){
      console.log(prevProps, prevState);
      console.log('in componentDidUpdate!');
  }

  // 삭제
  // 컴포넌트가 사라질 때 메서드
  // 컴포넌트가 사라지기 직전에 호출된다. 
  componentWillUnmount(){
      console.log('in componentWillUnmount!');
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {

    console.log('in render!');

    //  in render가 되고 아래 return을 DOM에 붙여준다.
    // 바뀔 요소들이 return에 들어있는 것 
    return (
      <div>
          {/* render 안에서 컴포넌트의 데이터 state를 참조할 수 있습니다. */}
        <h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1>
        <button onClick={this.changeCatName}>고양이 이름 바꾸기</button>
      </div>
    );
  }
}

export default LifecycleEx;