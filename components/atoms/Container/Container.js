import { forwardRef } from 'react';
import PropTypes from 'prop-types';

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

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Container.defaultProps = {
  id: ''
};

export { Container };
