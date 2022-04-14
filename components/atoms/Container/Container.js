import { forwardRef } from 'react';

const Container = forwardRef((props, ref) =>
  ref ? (
    <div
      ref={ref}
      id={props.id}
      className="flex flex-col mx-auto min-h-screen justify-center px-4 md:max-w-5xl"
    >
      {props.children}
    </div>
  ) : (
    <div className="flex flex-col mx-auto min-h-screen justify-center px-4 md:max-w-5xl">
      {props.children}
    </div>
  )
);

export { Container };
