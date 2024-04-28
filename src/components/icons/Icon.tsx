const Icon = ({ children, fill, stroke }: any) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill ?? "#293633"}
      stroke={stroke ?? "#293633"}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default Icon
