const src = id => 
`https://codepen.io/windmaomao/embed/${id}?default-tab=result&theme-id=dark&editable=true`
const href = id => 
  `https://codepen.io/windmaomao/pen/${id}`

export default function Codepen({ id, title = "", height="300" }) {
  return (
    <iframe
      height={height}
      style={{ width: "100%" }}
      scrolling="no"
      title={title}
      src={src(id)}
      frameborder="no"
      loading="lazy"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen 
      <a href={href(id)}>{title}</a> by Fang Jin
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  )
}
