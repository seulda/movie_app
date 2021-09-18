import React from 'react';

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>;
// }

// Detail 컴포넌트를 class형 컴포넌트로 변경
//    : componentDidMount() 생명주기 함수를 사용하여, Detail 컴포넌트가 마운트될 때 push() 함수 실행

// Detail 컴포넌트는 [render() -> componentDidMount()]의 순서로 함수를 실행하기 때문에 리다이렉트 기능이 동작하지 않음
//    = render() 함수 내에서 location.state.title을 사용하려 하는데 location.state가 undefined
//   >> render() 함수에도 componentDidMount() 생명주기 함수에 작성한 리다이렉트 코드를 추가해 주어야 함.

class Detail extends React.Component {
    componentDidMount() {
        // 구조분해할당 사용
        const { location, history } = this.props;
        // location state가 없는 경우 /경로(home)로 이동시킴
        if (location.state == undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}

export default Detail;