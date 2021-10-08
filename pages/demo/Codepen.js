const src = id => 
`https://codepen.io/windmaomao/embed/${id}?default-tab=js%2Cresult&theme-id=light&editable=true`
const href = id => 
  `https://codepen.io/windmaomao/pen/${id}`

export default function Codepen({ id, title = "" }) {
  return (
    <iframe
      height="300"
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
