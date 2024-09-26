export const Button = () => {
  // 이벤트 핸들러 네이밍은 관습적으로 handle + 이벤트 종류 + @
  // camelCase로 작성
  const handleClick = (text: string) => {
    alert(text);
  };

  // 아래 이벤트 핸들러 호출부가 랜더링시 바로 실행 됨.
  return <button onClick={handleClick('test')}>Click me</button>;
};
