import React from 'react';

interface Props {
  src: string;
  alt: string;
  className: string;
}

const Avatar: React.FunctionComponent<Props> = ({ className, src, alt }: Props) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
);

export default Avatar;
