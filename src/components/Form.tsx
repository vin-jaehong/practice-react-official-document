import { forwardRef, useRef, useImperativeHandle } from 'react';

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    // 오직 focus만 노출
    focus() {
      realInputRef.current?.focus();
    }
  }));
  return <input {...props} ref={realInputRef} />;
});

MyInput.displayName = 'MyInput';

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

Form.displayName = 'Form';
