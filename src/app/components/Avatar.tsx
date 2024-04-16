import React from 'react'

type Props = {
  image? : string | null;
  size? : 'small' | 'medium' | 'large' | 'x-large'
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
            className = {`bg-white object-cover rounded-full  ${getSize(size).image}`}
            alt = 'user profile' 
            src = {image ?? undefined} 
            referrerPolicy='no-referrer'
        />
    </div>
  )
}

function getContainerStyle(size : string, highlight : boolean): string {
  const baseStyle = 'rounded-full flex justify-center ';
  const highlightStyle = highlight
  ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
  : '';
  const {container} = getSize(size);
  return `${baseStyle} ${highlightStyle} ${container}` 
}

type ImageSize = {
  container : string
  image : string
}

function getSize(size : string) : ImageSize{
  switch (size) {
    case 'small' : 
      return {container : "w-9 h-9", image : "w-[34px] h-[34px] p-[0.1rem]"};
    case 'medium' : 
      return {container : "w-11 h-11", image : "w-[42px] h-[42px] p-[0.1rem]"}; 
    case 'large' : 
      return {container : "w-[68px] h-[68px]", image : "w-16 h-16 p-[0.2rem]"};
    case 'x-large' : 
      return {container : "w-[142px] h-[142px]", image : "w-[138] h-[138] p-[0.3rem]"};
    default : 
      throw new Error(`size error`)
  }
}



