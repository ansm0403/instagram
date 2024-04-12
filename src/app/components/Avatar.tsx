import React from 'react'

type Props = {
  image? : string | null;
  size? : 'small' | 'normal'
  highlight? : boolean
}

export default function Avatar({
  image, 
  size = 'normal', 
  highlight = false
}: Props) {
  return (
    <div className = {getContainerStyle(size, highlight)}>
        <img 
            className = 'rounded-full object-cover p-[0.1rem]'
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
  const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';
  return `${baseStyle} ${highlightStyle} ${sizeStyle}` 
}
