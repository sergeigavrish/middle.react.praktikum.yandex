import React, { FunctionComponent } from 'react';

import './Avatar.css';

interface Props {
  src: string;
  className: string;
  alt?: string;
}

const Avatar: FunctionComponent<Props> = ({ className, src, alt }: Props) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
);

Avatar.defaultProps = {
  alt: 'Avatar',
};

export default Avatar;
