import React from 'react'

type Props = {
  image? : string | null;
  size? : 'small' | 'medium' | 'large'
  highlight? : boolean
}

export default function Avatar({
  image, 
  size = 'large', 
  highlight = false
}: Props) {
  return (
    <div className = {getContainerStyle(size, highlight)}>
        <img 
            className = {`bg-white rounded-full object-cover ${getImageSizeStyle(size)}`}
            alt = 'user profile' 
            src = {image ?? undefined} 
            referrerPolicy='no-referrer'
        />
    </div>
  )
}

function getContainerStyle(size : string, highlight : boolean): string {
  const baseStyle = 'rounded-full flex justify-center';
  const highlightStyle = highlight
  ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
  : '';
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}` 
}
function getContainerSize(size : string) : string{
  switch (size) {
    case 'small' : return "w-9 h-9";
    case 'medium' : return "w-11 h-11";
    case 'large' : return "w-[68px] h-[68px]";
  }
}

function getImageSizeStyle(size : string) : string {
  switch(size) {
    case 'small' : return "w-[34px] h-[34px] p-[0.1rem]";
    case 'medium' : return "w-[42px] h-[42px] p-[0.1rem]";
    case 'large' : return "w-16 h-16 p-[0.2rem]";
  }
}