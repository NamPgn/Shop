import "./style/index.css"
export default function Title({ children,...rest }: any) {
  return (
    <div className="section-title text-[20px]" {...rest}>
      <h4>{children}</h4>
    </div>
  )
}